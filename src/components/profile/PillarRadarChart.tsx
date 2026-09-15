/**
 * PillarRadarChart.tsx
 * Komponen Visualisasi Radar 10 Topik Silabus OSN Kimia Puspresnas
 * Menggunakan SVG interaktif murni dengan grid konsentris dan tooltip analitik
 */

import React, { useState } from 'react';
import type { PillarMasteryScore } from '../../types/database';

interface PillarRadarChartProps {
  data: PillarMasteryScore[];
}

export const PillarRadarChart: React.FC<PillarRadarChartProps> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // SVG Geometry constants
  const size = 380;
  const centerX = size / 2;
  const centerY = size / 2;
  const maxRadius = 135;
  const numAxes = data.length; // 10 topik silabus

  // Grid levels (20%, 40%, 60%, 80%, 100%)
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];

  // Helper untuk menghitung koordinat polar ke kartesius
  const getCoordinates = (index: number, valueRatio: number) => {
    // Mulai dari atas (-PI/2) dan memutar searah jarum jam
    const angle = (Math.PI * 2 * index) / numAxes - Math.PI / 2;
    const r = maxRadius * valueRatio;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
      angle,
    };
  };

  // Generate titik poligon data siswa
  const polygonPoints = data
    .map((item, idx) => {
      // Nilai minimum 5% agar titik tetap terlihat pada sumbu
      const ratio = Math.max(0.05, item.score / 100);
      const { x, y } = getCoordinates(idx, ratio);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const hoveredPillar = hoveredIndex !== null ? data[hoveredIndex] : null;

  return (
    <div className="relative flex flex-col items-center justify-center p-2">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[380px] h-auto overflow-visible select-none drop-shadow-xs"
      >
        <defs>
          <linearGradient id="radarAreaGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.40" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.30" />
          </linearGradient>
          <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Grid Lingkaran/Poligon Konsentris */}
        {gridLevels.map((lvl, lIdx) => {
          const gridPoints = data
            .map((_, idx) => {
              const { x, y } = getCoordinates(idx, lvl);
              return `${x.toFixed(1)},${y.toFixed(1)}`;
            })
            .join(' ');

          return (
            <g key={`grid-level-${lIdx}`}>
              <polygon
                points={gridPoints}
                fill={lIdx % 2 === 0 ? '#f8fafc' : '#f1f5f9'}
                fillOpacity={0.6}
                stroke="#cbd5e1"
                strokeWidth={lIdx === gridLevels.length - 1 ? '1.5' : '1'}
                strokeDasharray={lIdx === gridLevels.length - 1 ? 'none' : '2,2'}
              />
              {/* Label persentase di sumbu vertikal atas */}
              <text
                x={centerX + 6}
                y={centerY - maxRadius * lvl + 10}
                className="text-[9px] font-mono fill-slate-400 font-bold"
              >
                {Math.round(lvl * 100)}%
              </text>
            </g>
          );
        })}

        {/* 2. Sumbu Garis Jari-jari dari Pusat ke Tiap Topik Silabus */}
        {data.map((_, idx) => {
          const { x, y } = getCoordinates(idx, 1.0);
          return (
            <line
              key={`axis-line-${idx}`}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke={hoveredIndex === idx ? '#0284c7' : '#e2e8f0'}
              strokeWidth={hoveredIndex === idx ? '2' : '1'}
              className="transition-colors duration-200"
            />
          );
        })}

        {/* 3. Poligon Area Data Penguasaan Siswa */}
        <polygon
          points={polygonPoints}
          fill="url(#radarAreaGradient)"
          stroke="#0284c7"
          strokeWidth="2.5"
          className="transition-all duration-500 ease-out filter"
          filter="url(#radarGlow)"
        />

        {/* 4. Titik Data & Hit Area Interaktif */}
        {data.map((item, idx) => {
          const ratio = Math.max(0.05, item.score / 100);
          const { x, y } = getCoordinates(idx, ratio);
          const isHovered = hoveredIndex === idx;

          let pointFill = '#0284c7';
          if (item.masteryLevel === 'mastered') pointFill = '#059669';
          if (item.masteryLevel === 'needs_remedial') pointFill = '#dc2626';

          return (
            <g
              key={`data-point-${idx}`}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Lingkaran Titik Utama */}
              <circle
                cx={x}
                cy={y}
                r={isHovered ? 6 : 4}
                fill={pointFill}
                stroke="#ffffff"
                strokeWidth={isHovered ? 2.5 : 1.5}
                className="transition-all duration-200"
              />
            </g>
          );
        })}

        {/* 5. Label Singkat di Ujung Sumbu */}
        {data.map((item, idx) => {
          const labelDist = 1.16;
          const { x, y } = getCoordinates(idx, labelDist);
          const isHovered = hoveredIndex === idx;

          return (
            <g
              key={`label-${idx}`}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                className={`text-[10px] font-bold transition-colors duration-200 ${
                  isHovered
                    ? 'fill-sky-700 font-extrabold'
                    : item.masteryLevel === 'mastered'
                    ? 'fill-emerald-700'
                    : item.masteryLevel === 'needs_remedial'
                    ? 'fill-rose-700'
                    : 'fill-slate-600'
                }`}
              >
                {item.shortName}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip Dinamis Saat Titik / Label Disorot */}
      <div className="w-full mt-3 min-h-[64px] transition-all">
        {hoveredPillar ? (
          <div className="p-3 bg-slate-900 text-white rounded-xl shadow-lg border border-slate-700 flex items-center justify-between gap-4 animate-in fade-in duration-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-400">Topik {hoveredPillar.pillarNumber}</span>
                <span className="text-slate-400">•</span>
                <span className="text-xs font-medium text-slate-200">{hoveredPillar.pillarName}</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Jumlah Latihan: {hoveredPillar.submissionsCount} kali dikerjakan
              </p>
            </div>
            <div className="text-right flex items-center gap-3">
              <div>
                <div className="text-lg font-bold font-mono text-emerald-400">
                  {hoveredPillar.score}%
                </div>
                <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-300">
                  {hoveredPillar.masteryLevel === 'mastered'
                    ? '🏆 Menguasai'
                    : hoveredPillar.masteryLevel === 'developing'
                    ? '📈 Berkembang'
                    : hoveredPillar.masteryLevel === 'needs_remedial'
                    ? '⚠️ Perlu Remedial'
                    : 'Belum Mulai'}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-500">
            Arahkan kursor pada sumbu radar untuk melihat detail penguasaan per topik silabus
          </div>
        )}
      </div>
    </div>
  );
};
