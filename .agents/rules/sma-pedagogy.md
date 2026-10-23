---
trigger: always_on
---

# SMA Chemistry Pedagogy (National Curriculum)

Before creating, revamping, or editing any Indonesian National Curriculum SMA/MA
chemistry study materials (Fase E, Fase F, or files under `src/data/materials/sma*.ts`),
read and follow the `sma-chemistry-pedagogy` skill at
`.agents/skills/sma-chemistry-pedagogy/SKILL.md`.

Every SMA topic must enforce:
1. **Dual-Loop Structure**:
   - **Micro-Loop per Subbab**: Intuisi (Makroskopik ke Submikroskopik) -> Formalisasi
     (dengan `> [!SYARAT_BATAS]` dan Uji Konsep Kualitatif) -> Taktik Soal (Soal Contoh,
     `> [!TITIK_RAWAN]`, Sanity Check `> [!PEMERIKSAAN_LOGIKA]`, Latihan Terbimbing).
   - **Macro-Loop Penutup Bab**: Pengayaan Inkuiri & Kontekstual -> Ringkasan Cepat
     (Tabel Komparasi & Decision Flowchart) -> Evaluasi Mandiri Berjenjang (Tingkat I, II, III).
2. **IUPAC Green Book** notation and proper KaTeX balance.
3. **Inline SVG Diagrams** with explicit text introduction and captions (`Gambar x.y`).

A revamped topic is not done until:
`node .agents/skills/sma-chemistry-pedagogy/scripts/validate-pedagogy.mjs <file> --topic <id>`
reports zero errors.
