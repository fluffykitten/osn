import React from 'react';

interface FranticCatStudySvgProps {
  className?: string;
}

/**
 * FranticCatStudySvg
 * Static vector illustration of chemistry scholar cats working on assignments,
 * designed in the exact clean technical-notebook aesthetic of OSN Materials (TopicSvgArt).
 */
export const FranticCatStudySvg: React.FC<FranticCatStudySvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 380 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Shared Minimalist Dot-Grid Pattern (Matches TopicSvgArt.tsx) */}
          <pattern id="worksheet-cat-grid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.75" fill="#f1f5f9" />
          </pattern>
        </defs>

        {/* Technical Notebook Dot Grid Canvas Background */}
        <rect width="380" height="138" rx="16" fill="url(#worksheet-cat-grid)" />

        {/* Desk Surface Baseline */}
        <line x1="16" y1="116" x2="364" y2="116" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="24" y1="120" x2="356" y2="120" stroke="#f1f5f9" strokeWidth="1" strokeLinecap="round" />

        {/* ============================================================ */}
        {/* 1. BACKGROUND FLOATING CHEMISTRY SHEETS (Static & Clean)     */}
        {/* ============================================================ */}
        {/* Left Flying Worksheet: Benzene & Reaction */}
        <g transform="translate(62, 36) rotate(-8)">
          <rect x="-15" y="-18" width="30" height="36" rx="2.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="-10" y1="-12" x2="10" y2="-12" stroke="#0284c7" strokeWidth="1.2" strokeLinecap="round" />
          {/* Benzene Ring Hexagon */}
          <polygon points="0,-4 5,-1 5,5 0,8 -5,5 -5,-1" fill="none" stroke="#6366f1" strokeWidth="1" />
          <circle cx="0" cy="2" r="2.2" fill="none" stroke="#6366f1" strokeWidth="0.6" strokeDasharray="1 1" />
        </g>

        {/* Right Flying Worksheet: Thermodynamics & Gas Laws */}
        <g transform="translate(320, 34) rotate(6)">
          <rect x="-16" y="-18" width="32" height="36" rx="2.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.2" />
          <text x="0" y="-8" textAnchor="middle" fontSize="6" fontFamily="ui-monospace, monospace" fontWeight="bold" fill="#059669">
            PV=nRT
          </text>
          <line x1="-10" y1="-2" x2="10" y2="-2" stroke="#e2e8f0" strokeWidth="0.8" />
          <text x="0" y="7" textAnchor="middle" fontSize="5.5" fontFamily="system-ui, sans-serif" fontWeight="bold" fill="#2563eb">
            ΔG° &lt; 0
          </text>
        </g>

        {/* Subtle Speed & Focus Dashes */}
        <path d="M 100 44 Q 115 40 128 44" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2.5 2.5" opacity="0.6" />
        <path d="M 235 38 Q 250 34 265 40" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2.5 2.5" opacity="0.6" />

        {/* ============================================================ */}
        {/* 2. LEFT ACCESSORIES: Stack of Chemistry Textbooks & Mug      */}
        {/* ============================================================ */}
        {/* Books Stack */}
        <g id="books" transform="translate(26, 84)">
          {/* Bottom Book (Navy) */}
          <rect x="0" y="21" width="46" height="11" rx="2" fill="#0284c7" stroke="#0369a1" strokeWidth="1.2" />
          <rect x="40" y="22" width="4" height="9" fill="#f8fafc" />
          {/* Middle Book (Emerald) */}
          <rect x="3" y="11" width="42" height="10" rx="2" fill="#059669" stroke="#047857" strokeWidth="1.2" />
          <rect x="39" y="12" width="4" height="8" fill="#f8fafc" />
          {/* Top Book (Purple with Centered Label) */}
          <rect x="6" y="1" width="38" height="10" rx="2" fill="#7c3aed" stroke="#6d28d9" strokeWidth="1.2" />
          <rect x="38" y="2" width="4" height="8" fill="#f8fafc" />
          <text x="23" y="8" textAnchor="middle" fill="#ffffff" fontSize="5" fontFamily="system-ui, sans-serif" fontWeight="900" letterSpacing="0.4">
            OSN KIMIA
          </text>
        </g>

        {/* Steaming Coffee Mug */}
        <g id="mug" transform="translate(80, 94)">
          <rect x="0" y="2" width="15" height="20" rx="2.5" fill="#ffffff" stroke="#334155" strokeWidth="1.4" />
          {/* Handle */}
          <path d="M 15 6 C 20 6 20 17 15 17" fill="none" stroke="#334155" strokeWidth="1.4" />
          {/* Tiny Paw Print */}
          <circle cx="7.5" cy="12" r="1.8" fill="#f43f5e" />
          <circle cx="5" cy="8.8" r="0.8" fill="#f43f5e" />
          <circle cx="7.5" cy="7.8" r="0.8" fill="#f43f5e" />
          <circle cx="10" cy="8.8" r="0.8" fill="#f43f5e" />
          {/* Static Steam curls */}
          <path d="M 5 -1 Q 3 -5 6 -9" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M 10 -1 Q 12 -5 9 -9" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" fill="none" />
        </g>

        {/* ============================================================ */}
        {/* 3. CAT 1: THE OSN SCHOLAR CAT (Signature TopicSvgArt Style)  */}
        {/* ============================================================ */}
        <g id="scholarCat">
          {/* Tail */}
          <path
            d="M 206 110 C 224 110 236 96 230 80 C 226 71 217 75 221 84"
            stroke="#334155"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Torso */}
          <path
            d="M 148 116 C 146 86 156 76 175 76 C 194 76 204 86 202 116 Z"
            fill="#ffffff"
            stroke="#334155"
            strokeWidth="1.8"
          />
          {/* Chest patch */}
          <path
            d="M 166 116 C 166 92 170 86 175 86 C 180 86 184 92 184 116 Z"
            fill="#f1f5f9"
          />

          {/* Cat Head */}
          <circle cx="175" cy="50" r="21" fill="#ffffff" stroke="#334155" strokeWidth="1.8" />

          {/* Left Ear */}
          <polygon points="158,35 163,14 175,29" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
          <polygon points="161,32 164,19 172,27" fill="#fda4af" />

          {/* Right Ear */}
          <polygon points="175,29 187,14 192,35" fill="#ffffff" stroke="#334155" strokeWidth="1.8" strokeLinejoin="round" />
          <polygon points="178,27 186,19 189,32" fill="#fda4af" />

          {/* Red Headband ("OSN") */}
          <g id="headband">
            <path
              d="M 155 44 C 168 39 182 39 195 44 L 194 51 C 182 46 168 46 156 51 Z"
              fill="#ef4444"
              stroke="#b91c1c"
              strokeWidth="1.2"
            />
            {/* Ribbons fluttering on the side */}
            <path d="M 194 46 Q 204 43 206 50 Q 199 52 193 49 Z" fill="#ef4444" stroke="#b91c1c" strokeWidth="0.8" />
            {/* Centered OSN Text */}
            <text
              x="175"
              y="47.5"
              textAnchor="middle"
              fontSize="5.8"
              fontWeight="900"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              letterSpacing="0.8"
            >
              OSN
            </text>
          </g>

          {/* Round Lab Glasses (TopicSvgArt Topic 1 Style) */}
          <circle cx="166" cy="54" r="7.2" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
          <circle cx="184" cy="54" r="7.2" stroke="#0284c7" strokeWidth="1.4" fill="#f0f9ff" fillOpacity="0.85" />
          <line x1="173.2" y1="54" x2="176.8" y2="54" stroke="#0284c7" strokeWidth="1.4" />
          {/* Glass glare line */}
          <line x1="162" y1="50" x2="166" y2="48" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="180" y1="50" x2="184" y2="48" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />

          {/* Focused Determined Eyes */}
          <circle cx="166" cy="54" r="2.2" fill="#0f172a" />
          <circle cx="165" cy="52.8" r="0.8" fill="#ffffff" />
          <circle cx="184" cy="54" r="2.2" fill="#0f172a" />
          <circle cx="183" cy="52.8" r="0.8" fill="#ffffff" />

          {/* Determined Eyebrow Slants */}
          <path d="M 161 47 L 169 50" stroke="#334155" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M 189 47 L 181 50" stroke="#334155" strokeWidth="1.3" strokeLinecap="round" />

          {/* Pink Nose & Focused Mouth */}
          <polygon points="173.5,61 176.5,61 175,62.5" fill="#f43f5e" />
          <path d="M 175 62.5 Q 172 65.5 169 64" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M 175 62.5 Q 178 65.5 181 64" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          {/* Little Focused Tongue ('blep') */}
          <path d="M 174 64 Q 175 68 176 64" fill="#fda4af" stroke="#e11d48" strokeWidth="0.6" />

          {/* Whiskers */}
          <line x1="158" y1="60" x2="146" y2="58" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
          <line x1="158" y1="63" x2="144" y2="65" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
          <line x1="192" y1="60" x2="204" y2="58" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />
          <line x1="192" y1="63" x2="206" y2="65" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

          {/* Static Frantic Sweat Drops */}
          <path d="M 150 46 Q 146 40 149 41 Q 153 45 150 46 Z" fill="#38bdf8" />
          <path d="M 200 42 Q 204 36 201 37 Q 197 41 200 42 Z" fill="#38bdf8" />

          {/* ========================================================== */}
          {/* DESK ITEMS IN FRONT OF CAT                                 */}
          {/* ========================================================== */}
          {/* Chemistry Worksheet on Desk (Left) */}
          <g transform="translate(125, 102) rotate(-6)">
            <rect x="0" y="0" width="30" height="15" rx="2" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.1" />
            <polygon points="7,4 10,6 10,10 7,12 4,10 4,6" fill="none" stroke="#6366f1" strokeWidth="0.8" />
            <line x1="13" y1="5" x2="26" y2="5" stroke="#0284c7" strokeWidth="1" strokeLinecap="round" />
            <line x1="13" y1="9" x2="23" y2="9" stroke="#94a3b8" strokeWidth="0.8" strokeLinecap="round" />
          </g>

          {/* Left Arm Connected from Shoulder to Worksheet with Pencil */}
          <path d="M 155 86 Q 144 94 139 104" fill="none" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="139" cy="105" rx="3.5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
          {/* Pencil */}
          <line x1="140" y1="103" x2="131" y2="112" stroke="#f59e0b" strokeWidth="2.4" strokeLinecap="round" />
          <polygon points="131,112 129,114 133,114" fill="#1e293b" />
          {/* Static Scribble Zigzag */}
          <path d="M 125 113 Q 128 111 131 114" stroke="#f43f5e" strokeWidth="1" strokeLinecap="round" fill="none" />

          {/* Laptop on Desk (Facing Cat) */}
          <g id="laptop">
            <rect x="162" y="90" width="28" height="23" rx="2.5" fill="#1e293b" stroke="#334155" strokeWidth="1.2" />
            {/* Glowing cyan paw logo on back */}
            <circle cx="176" cy="100" r="2.2" fill="#38bdf8" />
            <circle cx="174.5" cy="97.5" r="0.8" fill="#38bdf8" />
            <circle cx="176" cy="96.5" r="0.8" fill="#38bdf8" />
            <circle cx="177.5" cy="97.5" r="0.8" fill="#38bdf8" />
            {/* Base plate */}
            <polygon points="154,116 198,116 194,114 158,114" fill="#475569" stroke="#334155" strokeWidth="0.8" />
          </g>

          {/* Right Arm Connected from Shoulder to Laptop Typing */}
          <path d="M 195 86 Q 203 94 199 104" fill="none" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="199" cy="105" rx="3.5" ry="3" fill="#ffffff" stroke="#334155" strokeWidth="1.3" />
          {/* Static Typing Impact Arc */}
          <path d="M 197 110 C 201 112 205 111 207 109" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" fill="none" />
        </g>

        {/* ============================================================ */}
        {/* 4. CAT 2: ANXIOUS KITTEN LAB ASSISTANT & ERLENMEYER FLASK     */}
        {/* ============================================================ */}
        <g id="assistantKitten">
          {/* Kitten Body */}
          <path
            d="M 252 116 C 250 97 257 89 268 89 C 279 89 286 97 284 116 Z"
            fill="#ffffff"
            stroke="#334155"
            strokeWidth="1.6"
          />
          {/* Chest patch */}
          <path
            d="M 262 116 C 262 101 265 97 268 97 C 271 97 274 101 274 116 Z"
            fill="#f1f5f9"
          />

          {/* Kitten Head */}
          <circle cx="268" cy="74" r="14" fill="#ffffff" stroke="#334155" strokeWidth="1.6" />

          {/* Kitten Ears */}
          <polygon points="257,65 261,50 269,61" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="259,63 262,54 267,60" fill="#fda4af" />
          <polygon points="269,61 277,50 281,65" fill="#ffffff" stroke="#334155" strokeWidth="1.5" strokeLinejoin="round" />
          <polygon points="271,60 276,54 279,63" fill="#fda4af" />

          {/* Kitten Anxious Round Eyes */}
          <circle cx="264" cy="74" r="3" fill="#0f172a" />
          <circle cx="263" cy="73" r="1" fill="#ffffff" />
          <circle cx="274" cy="74" r="3" fill="#0f172a" />
          <circle cx="273" cy="73" r="1" fill="#ffffff" />

          {/* Worried Eyebrows */}
          <path d="M 261 68 Q 264 66 267 68" stroke="#475569" strokeWidth="1.1" strokeLinecap="round" fill="none" />
          <path d="M 271 68 Q 274 66 277 68" stroke="#475569" strokeWidth="1.1" strokeLinecap="round" fill="none" />

          {/* Cheeks Blush */}
          <ellipse cx="260" cy="78" rx="2.5" ry="1.3" fill="#fda4af" opacity="0.6" />
          <ellipse cx="278" cy="78" rx="2.5" ry="1.3" fill="#fda4af" opacity="0.6" />

          {/* Tiny Worried 'o' Mouth */}
          <ellipse cx="269" cy="80" rx="1.6" ry="2.2" fill="#f43f5e" stroke="#334155" strokeWidth="0.6" />

          {/* Kitten Sweat Drop */}
          <path d="M 281 66 Q 285 60 281 62 Q 278 65 281 66 Z" fill="#38bdf8" />

          {/* Chemistry Erlenmeyer Flask (Matches TopicSvgArt.tsx Topic 5) */}
          <g id="flask" transform="translate(294, 84)">
            {/* Flask Lip & Neck */}
            <rect x="7" y="0" width="8" height="2" rx="1" stroke="#334155" strokeWidth="1.2" fill="#ffffff" />
            <path
              d="M 8 2 L 8 8 L -1 27 C -3 30 -1 32 3 32 L 19 32 C 23 32 25 30 23 27 L 14 8 L 14 2 Z"
              fill="#f0fdfa"
              fillOpacity="0.8"
              stroke="#334155"
              strokeWidth="1.5"
            />
            {/* Emerald Solution */}
            <path
              d="M 1 23 Q 11 20 21 23 L 22 29 C 22 31 21 31.5 19 31.5 L 3 31.5 C 1 31.5 0 31 0 29 Z"
              fill="#10b981"
              fillOpacity="0.8"
            />
            {/* Static Solution Bubbles */}
            <circle cx="8" cy="20" r="1.4" fill="#34d399" />
            <circle cx="14" cy="16" r="1.1" fill="#34d399" />
            <circle cx="11" cy="10" r="1.6" fill="#34d399" />
          </g>

          {/* Connected Kitten Arms Hugging the Flask */}
          <path d="M 275 94 Q 287 97 292 103" fill="none" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" />
          <ellipse cx="292" cy="103" rx="2.5" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
          <path d="M 283 100 Q 295 104 298 109" fill="none" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" />
          <ellipse cx="298" cy="109" rx="2.5" ry="2.2" fill="#ffffff" stroke="#334155" strokeWidth="1.2" />
        </g>

        {/* ============================================================ */}
        {/* 5. DEADLINE BADGE (Crisp, Technical, Perfectly Safe Bounds)  */}
        {/* ============================================================ */}
        <g id="deadlineBadge" transform="translate(342, 106)">
          <rect
            x="-21"
            y="-8"
            width="42"
            height="16"
            rx="4"
            fill="#fef2f2"
            stroke="#fca5a5"
            strokeWidth="1.1"
          />
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fontSize="6.2"
            fontWeight="900"
            fill="#dc2626"
            fontFamily="system-ui, sans-serif"
            letterSpacing="0.4"
          >
            ⚡ DEADLINE
          </text>
        </g>
      </svg>
    </div>
  );
};
