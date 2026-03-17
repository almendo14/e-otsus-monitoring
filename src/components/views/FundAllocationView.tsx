"use client";

import { useState } from 'react';
import { 
  Building2, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  BarChart3,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';

export default function FundAllocationView() {
  // Dummy data representing Otsus Fund Allocation per Kabupaten/Kota in Papua
  const [allocations] = useState([
    { 
      id: 1, 
      region: 'Kota Jayapura', 
      budget: 'Rp 450.5 M', 
      progress: 85, 
      mandate: 35, // Percentage of budget assigned to Education/Health (Otsus mandate is >= 30%)
      status: 'Verified by SIPD',
      lastUpdate: '2 hours ago'
    },
    { 
      id: 2, 
      region: 'Kabupaten Jayapura', 
      budget: 'Rp 320.2 M', 
      progress: 65, 
      mandate: 32, 
      status: 'Verification in Progress',
      lastUpdate: '5 hours ago' 
    },
    { 
      id: 3, 
      region: 'Kabupaten Mimika', 
      budget: 'Rp 550.4 M', 
      progress: 92, 
      mandate: 38, 
      status: 'Verified by SIPD',
      lastUpdate: '1 day ago' 
    },
    { 
      id: 4, 
      region: 'Kabupaten Biak Numfor', 
      budget: 'Rp 215.8 M', 
      progress: 45, 
      mandate: 28, // Below 30% mandate
      status: 'Needs Revision',
      lastUpdate: '2 days ago' 
    },
    { 
      id: 5, 
      region: 'Kabupaten Lanny Jaya', 
      budget: 'Rp 150.0 M', 
      progress: 20, 
      mandate: 22, // Below 30% mandate
      status: 'Critical Alert',
      lastUpdate: '3 days ago' 
    },
  ]);

  const totalAllocated = "Rp 1.68 T";
  const overallProgress = 68;

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 space-y-6 font-sans">
      
      {/* Header & Overall Status */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            Special Autonomy Fund Allocation (Otsus)
          </h2>
          <p className="text-sm text-slate-500 mt-1 max-w-xl">
            Real-time tracking of Otsus regional budget distribution, verifying compliance with the 30% education and health mandate via SIPD integration.
          </p>
        </div>
        
        <div className="flex items-center gap-6 bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 w-full md:w-auto">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Verified Fund</p>
            <p className="text-2xl font-bold text-slate-800">{totalAllocated}</p>
          </div>
          <div className="w-px h-12 bg-slate-200"></div>
          <div>
            <div className="flex justify-between items-end mb-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">SIPD Sync</p>
              <span className="text-xs font-bold text-blue-600 ml-4">{overallProgress}%</span>
            </div>
            <div className="w-32 h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: `${overallProgress}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Allocation List */}
      <div className="space-y-4">
        {allocations.map((item) => {
          const isBelowMandate = item.mandate < 30;
          
          return (
            <div 
              key={item.id} 
              className={`relative bg-white rounded-xl p-5 shadow-sm border transition-shadow hover:shadow-md ${
                isBelowMandate ? 'border-red-200 bg-red-50/30' : 'border-slate-200'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Region Info */}
                <div className="flex items-start gap-4 lg:w-1/3">
                  <div className={`p-3 rounded-lg flex-shrink-0 ${isBelowMandate ? 'bg-red-100 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800">{item.region}</h3>
                    <p className="text-sm font-medium text-slate-600 mt-0.5">Budget: {item.budget}</p>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      Updated {item.lastUpdate}
                    </div>
                  </div>
                </div>

                {/* Mandate Status & Alert */}
                <div className="lg:w-1/4">
                  <div className="mb-1 flex justify-between items-center text-sm">
                    <span className="font-semibold text-slate-600">Otsus Mandate</span>
                    <span className={`font-bold ${isBelowMandate ? 'text-red-600' : 'text-emerald-600'}`}>
                      {item.mandate}% / 30%
                    </span>
                  </div>
                  {isBelowMandate ? (
                    <div className="inline-flex items-start gap-2 bg-red-100/80 text-red-700 text-xs font-medium px-2.5 py-1.5 rounded-md mt-1 border border-red-200">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>Warning: Allocation is below the legally mandated 30% minimum limit.</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-semibold mt-1">
                      <ShieldCheck className="w-4 h-4" />
                      Mandate Compliant
                    </div>
                  )}
                </div>

                {/* Verification Progress */}
                <div className="lg:w-1/3">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">SIPD Verification</span>
                    <span className="text-sm font-bold text-slate-700">{item.progress}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${
                        item.progress >= 80 ? 'bg-emerald-500' : 
                        item.progress >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                      }`} 
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <p className="text-xs font-medium text-slate-500 mt-2 flex items-center gap-1.5">
                    {item.progress >= 80 ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : item.progress >= 50 ? (
                      <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                    )}
                    {item.status}
                  </p>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

