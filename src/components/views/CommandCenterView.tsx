"use client";

import { 
  Building2, 
  Users, 
  Map, 
  AlertTriangle,
  Wallet,
  CheckCircle2,
  ThumbsUp,
  ThumbsDown,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

export default function CommandCenterView() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-500 zoom-in-95 font-sans">
      
      {/* 1. Header: 4 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
        
        {/* Total Otsus Budget */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Otsus Budget FY26</p>
            <h3 className="text-2xl font-bold text-slate-800">Rp 4.2 T</h3>
            <div className="flex items-center gap-1 mt-1 text-xs font-medium text-emerald-600">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>100% Disbursed</span>
            </div>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <Wallet className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        {/* Total Students */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total SDM Papua</p>
            <h3 className="text-2xl font-bold text-slate-800">12,450</h3>
            <div className="flex items-center gap-1 mt-1 text-xs font-medium text-slate-500">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Across 45 Campuses</span>
            </div>
          </div>
          <div className="p-3 bg-indigo-50 rounded-xl">
            <Users className="w-6 h-6 text-indigo-600" />
          </div>
        </div>

        {/* Verified Regions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">SIPD Verification</p>
            <h3 className="text-2xl font-bold text-slate-800">85%</h3>
            <div className="flex items-center gap-1 mt-1 text-xs font-medium text-emerald-600">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Data Synced</span>
            </div>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl">
            <Building2 className="w-6 h-6 text-emerald-600" />
          </div>
        </div>

        {/* Public Complaints */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Active Complaints</p>
            <h3 className="text-2xl font-bold text-slate-800">42</h3>
            <div className="flex items-center gap-1 mt-1 text-xs font-medium text-amber-600">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Action Required</span>
            </div>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl">
            <ThumbsDown className="w-6 h-6 text-amber-600" />
          </div>
        </div>

      </div>

      {/* 2. Middle Row: Charts & Maps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Fund Allocation Chart (Bar Chart via Tailwind) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 lg:col-span-2 flex flex-col h-80">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-bold text-slate-800 tracking-tight">Budget vs Realization by Sector</h3>
            <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">FY 2026 Overview</span>
          </div>
          
          <div className="flex-1 flex items-end justify-around gap-2 px-4 pb-2 mt-auto">
            {/* Education Bar */}
            <div className="flex flex-col items-center gap-2 group w-full max-w-[80px]">
              <div className="w-full flex items-end justify-center relative h-48 bg-slate-50 rounded-t-lg overflow-hidden group-hover:bg-slate-100 transition-colors">
                {/* Target */}
                <div className="absolute bottom-0 w-full bg-blue-100 h-[90%] rounded-t-lg"></div>
                {/* Realization */}
                <div className="absolute bottom-0 w-full bg-blue-600 h-[65%] rounded-t-lg shadow-sm"></div>
                {/* Tooltip */}
                <div className="absolute top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1 px-2 rounded z-10 whitespace-nowrap">
                  Realized: 65%
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600 text-center">Education</span>
            </div>

            {/* Health Bar */}
            <div className="flex flex-col items-center gap-2 group w-full max-w-[80px]">
              <div className="w-full flex items-end justify-center relative h-48 bg-slate-50 rounded-t-lg overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div className="absolute bottom-0 w-full bg-emerald-100 h-[80%] rounded-t-lg"></div>
                <div className="absolute bottom-0 w-full bg-emerald-500 h-[45%] rounded-t-lg shadow-sm"></div>
                <div className="absolute top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1 px-2 rounded z-10 whitespace-nowrap">
                  Realized: 45%
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600 text-center">Health</span>
            </div>

            {/* Infrastructure Bar */}
            <div className="flex flex-col items-center gap-2 group w-full max-w-[80px]">
              <div className="w-full flex items-end justify-center relative h-48 bg-slate-50 rounded-t-lg overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div className="absolute bottom-0 w-full bg-amber-100 h-[100%] rounded-t-lg"></div>
                <div className="absolute bottom-0 w-full bg-amber-500 h-[85%] rounded-t-lg shadow-sm"></div>
                <div className="absolute top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1 px-2 rounded z-10 whitespace-nowrap">
                  Realized: 85%
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600 text-center">Infra</span>
            </div>

             {/* Economy Bar */}
             <div className="flex flex-col items-center gap-2 group w-full max-w-[80px]">
              <div className="w-full flex items-end justify-center relative h-48 bg-slate-50 rounded-t-lg overflow-hidden group-hover:bg-slate-100 transition-colors">
                <div className="absolute bottom-0 w-full bg-indigo-100 h-[60%] rounded-t-lg"></div>
                <div className="absolute bottom-0 w-full bg-indigo-500 h-[20%] rounded-t-lg shadow-sm"></div>
                <div className="absolute top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs py-1 px-2 rounded z-10 whitespace-nowrap">
                  Realized: 20%
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600 text-center">Economy</span>
            </div>
          </div>

          {/* Chart Legend */}
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-blue-100"></span>
              <span className="text-xs text-slate-500 font-medium">Budget Target</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-blue-600"></span>
              <span className="text-xs text-slate-500 font-medium">Actual Realization</span>
            </div>
          </div>
        </div>

        {/* GIS Mapping Preview (Top 3 Regencies) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col h-80 relative overflow-hidden">
          {/* Subtle bg map pattern */}
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-4 -translate-y-4">
            <Map className="w-48 h-48 text-slate-500" />
          </div>

          <div className="relative z-10 mb-4">
            <h3 className="text-base font-bold text-slate-800 tracking-tight flex items-center gap-2">
              <Map className="w-4 h-4 text-blue-600" />
              GIS Top Absorption
            </h3>
            <p className="text-xs text-slate-500 mt-1">Leading regencies in fund utilization</p>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-4 relative z-10">
            {/* Item 1 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs">1</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Kota Jayapura</h4>
                  <p className="text-[10px] text-slate-500">Verified by SIPD</p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-800">92%</span>
            </div>
            
            {/* Item 2 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-xs">2</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Kab. Mimika</h4>
                  <p className="text-[10px] text-slate-500">Verified by SIPD</p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-800">88%</span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-600 font-bold text-xs">3</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Kab. Biak Numfor</h4>
                  <p className="text-[10px] text-slate-500">Processing Data</p>
                </div>
              </div>
              <span className="text-sm font-bold text-slate-800">75%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Row: Doughnut & Sentiment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SDM Papua Status (EWS Doughnut Chart CSS Mockup) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-slate-800 tracking-tight">SDM Papua Target (EWS)</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Real-time student academic standing vs at-risk interventions</p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Active & On-Track
                </span>
                <span className="font-bold text-slate-800">88%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span> Warning (GPA {"<"} 2.75)
                </span>
                <span className="font-bold text-slate-800">9%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-2 text-slate-600 font-medium">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span> At Risk (Unpaid)
                </span>
                <span className="font-bold text-slate-800">3%</span>
              </div>
            </div>
          </div>

          {/* CSS Doughnut Chart using conic-gradient */}
          <div className="relative shrink-0 flex items-center justify-center w-40 h-40 rounded-full"
               style={{
                 background: 'conic-gradient(#10b981 0% 88%, #f59e0b 88% 97%, #ef4444 97% 100%)'
               }}>
            {/* Inner hole for Doughnut effect */}
            <div className="absolute w-28 h-28 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
              <span className="text-2xl font-bold text-slate-800">12k</span>
              <span className="text-[10px] text-slate-500 uppercase font-semibold">Tracked</span>
            </div>
          </div>
        </div>

        {/* Public Voice Sentiment */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-800 tracking-tight">Public Voice Sentiment</h3>
              <p className="text-xs text-slate-500 mt-1">Aggregated NLP sentiment from citizen feedback channels</p>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg shrink-0 border border-slate-100">
               <span className="flex items-center gap-1 text-xs font-bold text-slate-700">
                  Total Check: 4,520
               </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-end mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <ThumbsUp className="w-4 h-4 text-emerald-500" /> Positive (Appreciation)
              </span>
              <span className="text-lg font-bold text-emerald-600">65%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
              <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: '65%' }}></div>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <div className="flex justify-between items-end mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <ThumbsDown className="w-4 h-4 text-amber-500" /> Negative (Complaints)
              </span>
              <span className="text-lg font-bold text-amber-500">35%</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
              <div className="h-full bg-amber-500 transition-all duration-1000" style={{ width: '35%' }}></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

