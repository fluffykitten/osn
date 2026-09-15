/**
 * MaterialSkeleton.tsx
 * Skeleton Loading Components for OSN Chemistry Materials
 * Provides shimmering placeholders for Catalog and Reader views during transitions.
 */

import React from 'react';

export const MaterialCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4 animate-pulse">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 rounded-lg bg-slate-200" />
          <div className="w-16 h-5 rounded bg-slate-200" />
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="w-24 h-3 rounded bg-slate-100" />
          <div className="w-48 h-5 rounded bg-slate-200" />
        </div>
        <div className="space-y-2 pt-2">
          <div className="w-full h-3 rounded bg-slate-100" />
          <div className="w-5/6 h-3 rounded bg-slate-100" />
          <div className="w-2/3 h-3 rounded bg-slate-100" />
        </div>
        <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
          <div className="w-full h-3 rounded bg-slate-200" />
          <div className="w-full h-3 rounded bg-slate-200" />
          <div className="w-full h-3 rounded bg-slate-200" />
        </div>
      </div>
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="w-20 h-4 rounded bg-slate-100" />
        <div className="w-28 h-8 rounded-lg bg-slate-200" />
      </div>
    </div>
  );
};

export const MaterialCatalogSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-pulse">
      <div className="border-b border-slate-200 pb-6 space-y-3">
        <div className="w-36 h-5 rounded bg-slate-200" />
        <div className="w-64 h-8 rounded bg-slate-300" />
        <div className="w-96 max-w-full h-4 rounded bg-slate-200" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <MaterialCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export const MaterialReaderSkeleton: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-4">
        <div className="w-28 h-4 rounded bg-slate-200" />
        <div className="w-4 h-4 rounded bg-slate-100" />
        <div className="w-16 h-4 rounded bg-slate-200" />
        <div className="w-4 h-4 rounded bg-slate-100" />
        <div className="w-40 h-4 rounded bg-slate-200" />
      </div>

      {/* Header Banner Skeleton */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-20 h-5 rounded bg-slate-200" />
          <div className="w-24 h-5 rounded bg-slate-100" />
          <div className="w-28 h-5 rounded bg-slate-100" />
        </div>
        <div className="w-3/4 h-8 rounded bg-slate-300" />
        <div className="w-full h-4 rounded bg-slate-200" />
        <div className="w-5/6 h-4 rounded bg-slate-100" />
        <div className="pt-2 flex gap-2">
          <div className="w-16 h-5 rounded bg-slate-100" />
          <div className="w-20 h-5 rounded bg-slate-100" />
          <div className="w-24 h-5 rounded bg-slate-100" />
        </div>
      </div>

      {/* Content Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="w-1/2 h-6 rounded bg-slate-200" />
              <div className="w-full h-4 rounded bg-slate-100" />
              <div className="w-full h-16 rounded bg-slate-50" />
            </div>
          ))}
        </div>
        <div className="hidden lg:block lg:col-span-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
            <div className="w-32 h-5 rounded bg-slate-200" />
            <div className="space-y-2">
              <div className="w-full h-8 rounded bg-slate-100" />
              <div className="w-full h-8 rounded bg-slate-100" />
              <div className="w-full h-8 rounded bg-slate-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
