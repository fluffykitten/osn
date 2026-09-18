import React from 'react';

// SVG Data URIs untuk kursor Cat Paw (Telapak Kucing)
// Hotspot kursor diatur di (12, 12) pada telapak tengah

const catPawOpenSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
  <!-- Bantalan Jari Kucing -->
  <circle cx="6.5" cy="8.5" r="2.2" fill="#fda4af" stroke="#475569" stroke-width="1.2"/>
  <circle cx="10.5" cy="5.5" r="2.2" fill="#fda4af" stroke="#475569" stroke-width="1.2"/>
  <circle cx="14.5" cy="5.5" r="2.2" fill="#fda4af" stroke="#475569" stroke-width="1.2"/>
  <circle cx="18.5" cy="8.5" r="2.2" fill="#fda4af" stroke="#475569" stroke-width="1.2"/>
  <!-- Telapak Utama Kucing -->
  <path d="M7 14.5C6 12 8 10 12.5 10C17 10 19 12 18 14.5C17.2 16.5 15.5 19 12.5 19C9.5 19 7.8 16.5 7 14.5Z" fill="#ffffff" stroke="#334155" stroke-width="1.5"/>
  <ellipse cx="12.5" cy="14.5" rx="3.5" ry="2.8" fill="#fb7185"/>
</svg>`;

const catPawClosedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
  <!-- Bantalan Jari Menutup (Grabbing) -->
  <circle cx="7.5" cy="10" r="1.8" fill="#fda4af" stroke="#334155" stroke-width="1.2"/>
  <circle cx="11" cy="7.5" r="1.8" fill="#fda4af" stroke="#334155" stroke-width="1.2"/>
  <circle cx="14" cy="7.5" r="1.8" fill="#fda4af" stroke="#334155" stroke-width="1.2"/>
  <circle cx="17.5" cy="10" r="1.8" fill="#fda4af" stroke="#334155" stroke-width="1.2"/>
  <!-- Telapak Utama Mencengkeram -->
  <path d="M8 14.5C7.2 12.5 8.8 11 12.5 11C16.2 11 17.8 12.5 17 14.5C16.3 16.2 14.8 18 12.5 18C10.2 18 8.7 16.2 8 14.5Z" fill="#f8fafc" stroke="#1e293b" stroke-width="1.5"/>
  <ellipse cx="12.5" cy="14.2" rx="3" ry="2.3" fill="#e11d48"/>
</svg>`;

export const CAT_PAW_OPEN_CURSOR = `url("data:image/svg+xml;utf8,${encodeURIComponent(catPawOpenSvg)}") 12 12, grab`;
export const CAT_PAW_CLOSED_CURSOR = `url("data:image/svg+xml;utf8,${encodeURIComponent(catPawClosedSvg)}") 12 12, grabbing`;

// Komponen Ikon Cat Paw untuk Tombol Toolbar
export const CatPawIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="7" r="2" />
    <circle cx="10.5" cy="4" r="2.2" />
    <circle cx="15" cy="4" r="2.2" />
    <circle cx="19" cy="7" r="2" />
    <path d="M7 13.5C6 11.5 8 9.5 12.5 9.5C17 9.5 19 11.5 18 13.5C17.2 15.5 15.5 18 12.5 18C9.5 18 7.8 15.5 7 13.5Z" />
  </svg>
);
