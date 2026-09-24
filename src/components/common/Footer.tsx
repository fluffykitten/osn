import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFF0] border-t border-[#D3D3D3] mt-16 text-[#708090] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#708090] gap-3">
          <p>© {new Date().getFullYear()} OSN Kimia Mastery. Dirancang untuk pembinaan olimpiade sains berstandar tinggi.</p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/fluffykitten"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#708090] hover:text-[#2D3748] hover:underline font-medium flex items-center gap-1.5 transition-colors"
            >
              <img
                src="/fluffykitten-logo.png"
                alt="fluffykitten"
                className="w-3.5 h-3.5 rounded-full object-contain border border-[#D3D3D3]"
              />
              <span>github.com/fluffykitten</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


