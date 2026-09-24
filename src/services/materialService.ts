/**
 * materialService.ts
 * Layanan manajemen dan editor materi kimia (OSN 10 Topik & SMA 16 Modul).
 * Mendukung live editing KaTeX, penyimpanan overrides di Supabase/Local Storage,
 * dan fallback aman ke dataset baku.
 */

import { OSN_MATERIALS, type MaterialItem, type ConceptBlock } from '../data/materialsData';
import { SMA_MATERIALS, type SmaMaterialItem } from '../data/smaMaterialsData';
import { getSupabaseClient } from '../lib/supabaseClient';
import { adminService } from './adminService';
import type { MaterialOverride } from '../types/database';

const LOCAL_OVERRIDES_KEY = 'osn_material_overrides_v1';

class MaterialService {
  private getLocalOverrides(): Record<string, MaterialOverride> {
    try {
      const data = localStorage.getItem(LOCAL_OVERRIDES_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  private saveLocalOverrides(overrides: Record<string, MaterialOverride>): void {
    try {
      localStorage.setItem(LOCAL_OVERRIDES_KEY, JSON.stringify(overrides));
    } catch {}
  }

  public async getOsnMaterials(): Promise<MaterialItem[]> {
    const overrides = await this.getAllOverrides();
    return OSN_MATERIALS.map((base) => {
      const key = `osn_${base.id}`;
      const over = overrides[key];
      if (!over) return base;

      return {
        ...base,
        title: over.title || base.title,
        category: over.category || base.category,
        level: (over.level as any) || base.level,
        readTimeMinutes: over.read_time_minutes || base.readTimeMinutes,
        summary: over.summary || base.summary,
        allTags: over.all_tags || base.allTags,
        prerequisites: over.prerequisites?.length ? over.prerequisites : base.prerequisites,
        core_concepts: over.core_concepts?.length ? over.core_concepts : base.core_concepts,
        worked_examples: over.worked_examples?.length ? over.worked_examples : base.worked_examples,
        isEdited: true,
      };
    });
  }

  public async getSmaMaterials(): Promise<SmaMaterialItem[]> {
    const overrides = await this.getAllOverrides();
    return SMA_MATERIALS.map((base) => {
      const key = `sma_${base.id}`;
      const over = overrides[key];
      if (!over) return base;

      return {
        ...base,
        title: over.title || base.title,
        category: over.category || base.category,
        grade: (over.level as any) || base.grade,
        readTimeMinutes: over.read_time_minutes || base.readTimeMinutes,
        summary: over.summary || base.summary,
        allTags: over.all_tags || base.allTags,
        prerequisites: over.prerequisites?.length ? over.prerequisites : base.prerequisites,
        core_concepts: over.core_concepts?.length ? over.core_concepts : base.core_concepts,
        worked_examples: over.worked_examples?.length ? over.worked_examples : base.worked_examples,
        isEdited: true,
      };
    });
  }

  public async getMaterialById(type: 'osn' | 'sma', id: number): Promise<any | null> {
    if (type === 'osn') {
      const list = await this.getOsnMaterials();
      return list.find((m) => m.id === id) || null;
    } else {
      const list = await this.getSmaMaterials();
      return list.find((m) => m.id === id) || null;
    }
  }

  public async saveMaterial(
    type: 'osn' | 'sma',
    id: number,
    materialData: Partial<MaterialItem & { isEdited?: boolean }>,
    adminEmail = 'fluffykitten.dev@gmail.com'
  ): Promise<{ success: boolean; error?: string }> {
    const key = `${type}_${id}`;
    const overrideRecord: MaterialOverride = {
      id,
      material_type: type,
      title: materialData.title || `Topik ${id}`,
      category: materialData.category,
      level: materialData.level,
      read_time_minutes: materialData.readTimeMinutes || 20,
      summary: materialData.summary,
      all_tags: materialData.allTags || [],
      prerequisites: materialData.prerequisites || [],
      core_concepts: materialData.core_concepts || [],
      worked_examples: materialData.worked_examples || [],
      updated_by: adminEmail,
      updated_at: new Date().toISOString(),
    };

    // 1. Simpan di local
    const current = this.getLocalOverrides();
    current[key] = overrideRecord;
    this.saveLocalOverrides(current);

    // 2. Simpan di cloud Supabase jika terhubung
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from('material_overrides').upsert(overrideRecord, { onConflict: 'id' });
      } catch (err: any) {
        console.warn('[MaterialService] Cloud upsert notice:', err?.message);
      }
    }

    // 3. Catat audit log
    await adminService.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'MATERIAL_UPDATED',
      target_resource: `materials/${type}/${id}`,
      description: `Memperbarui materi ${type.toUpperCase()}: ${overrideRecord.title}`,
      details: { title: overrideRecord.title, type },
    });

    return { success: true };
  }

  public async resetMaterialToDefault(
    type: 'osn' | 'sma',
    id: number,
    adminEmail = 'fluffykitten.dev@gmail.com'
  ): Promise<{ success: boolean }> {
    const key = `${type}_${id}`;
    const current = this.getLocalOverrides();
    delete current[key];
    this.saveLocalOverrides(current);

    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        await supabase.from('material_overrides').delete().eq('id', id).eq('material_type', type);
      } catch {}
    }

    await adminService.logAction({
      actor_id: 'admin-master-uuid',
      actor_email: adminEmail,
      action_type: 'MATERIAL_UPDATED',
      target_resource: `materials/${type}/${id}`,
      description: `Mengembalikan materi ${type.toUpperCase()} ID ${id} ke konfigurasi baku default`,
    });

    return { success: true };
  }

  private async getAllOverrides(): Promise<Record<string, MaterialOverride>> {
    const local = this.getLocalOverrides();
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase.from('material_overrides').select('*');
        if (!error && data && data.length > 0) {
          const merged = { ...local };
          data.forEach((item: MaterialOverride) => {
            merged[`${item.material_type}_${item.id}`] = item;
          });
          return merged;
        }
      } catch {}
    }
    return local;
  }
}

export const materialService = new MaterialService();
