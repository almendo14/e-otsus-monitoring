"use client";

import { useState, useEffect } from 'react';
import { checkThreeWayMatch, checkAutomaticBlocking, SipdBudget, PddiktiCampus, BankDisbursement } from '@/app/dashboard';

export default function CommandCenterView() {
  // Logic states
  const [budget] = useState<SipdBudget>({ regency: 'Papua Pilot', totalOtsusFund: 1000000000, educationAllocation: 280000000 });
  const [hasRedScore] = useState<boolean>(true);
  const [alumniScouting, setAlumniScouting] = useState<any[]>([]);
  const [ewsStudents] = useState([
    { id: 1, name: 'Petrus', major: 'Education', gpa: 3.25, status: 'Active' },
    { id: 2, name: 'Lukas', major: 'Law', gpa: 2.90, status: 'Warning' },
  ]);

  useEffect(() => {
    // Populate alumni
    setAlumniScouting([
      { name: 'Dr. Sarah Yoweni', major: 'Medical', gpa: 3.85 },
      { name: 'Lukas E., S.T.', major: 'Engineering', gpa: 3.60 }
    ]);
  }, []);

  const blockStatus = checkAutomaticBlocking(budget, hasRedScore);
  const currentEducationPct = Math.round((budget.educationAllocation / budget.totalOtsusFund) * 100);

  // Hardcoding the exact prompts for visual demonstration
  const runThreeWayMatchDemo = () => {
    // We visually display the orange alert box per the prompt requirement immediately.
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-6 animate-in fade-in duration-500 zoom-in-95">
      
      {/* 2. MIDDLE SECTION: Core Logic Alerts (Moved to TOP on mobile) */}
      <div className="order-1 lg:order-2 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Garda Pengaman 30% */}
        <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100 flex flex-col min-h-[160px]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-base lg:text-lg font-bold text-slate-800">Garda Pengaman 30%</h3>
              <p className="text-[10px] lg:text-xs text-slate-500">Automatic Fund Blocking System</p>
            </div>
            <div className="p-2 bg-red-50 text-red-500 rounded-lg shrink-0">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            </div>
          </div>
          
          <div className="mt-auto bg-red-50 border border-red-200 rounded-xl p-3 lg:p-4 text-center">
            <h4 className="font-bold text-red-600 uppercase text-xs lg:text-sm mb-1 tracking-wide">Disbursement Blocked</h4>
            <p className="text-[10px] lg:text-xs text-red-500">Allocation below 30% mandate. Corrective action required.</p>
          </div>
        </div>

        {/* Three-Way Matching */}
        <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100 flex flex-col min-h-[160px]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-base lg:text-lg font-bold text-slate-800">Three-Way Matching</h3>
              <p className="text-[10px] lg:text-xs text-slate-500">Cross-checking SIPD, PDDIKTI & Bank</p>
            </div>
            <div className="p-2 bg-orange-50 text-orange-500 rounded-lg shrink-0">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
          </div>
          
          <div className="mt-auto bg-orange-50 border border-orange-200 rounded-xl p-3 lg:p-4 text-center">
            <h4 className="font-bold text-orange-600 uppercase text-xs lg:text-sm mb-1 tracking-wide">FRAUD ALERT</h4>
            <p className="text-[10px] lg:text-xs text-orange-500">Unpaid tuition detected at UNCEN while budget shows absorbed.</p>
          </div>
        </div>
      </div>

      {/* 1. TOP ROW: Metrics (Moved below alerts on mobile) */}
      <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full translate-x-12 -translate-y-8 opacity-50"></div>
          <p className="text-[10px] lg:text-sm text-slate-500 font-medium mb-1">Total Otsus Education Budget</p>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#1E293B] truncate">Rp 1M+</h3>
          <p className="text-[10px] lg:text-xs text-green-500 mt-1 lg:mt-2 font-medium">↑ Verified SIPD</p>
        </div>

        <div className="bg-[#3B5998] rounded-2xl p-4 lg:p-6 shadow-md border border-[#3B5998] flex flex-col justify-center text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-12"></div>
          <p className="text-[10px] lg:text-sm text-blue-100 font-medium mb-1">Current Allocation</p>
          <h3 className="text-3xl lg:text-4xl font-bold">{currentEducationPct}%</h3>
          <p className="text-[10px] lg:text-xs text-blue-200 mt-1 lg:mt-2 font-medium">Target: ≥ 30%</p>
        </div>

        <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-full translate-x-12 -translate-y-8 opacity-50"></div>
          <p className="text-[10px] lg:text-sm text-slate-500 font-medium mb-1">Students Tracked</p>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#1E293B]">5,420</h3>
          <p className="text-[10px] lg:text-xs text-slate-400 mt-1 lg:mt-2 font-medium">Across 12 Universities</p>
        </div>
      </div>

      {/* 3. BOTTOM SECTION: Tables */}
      <div className="order-3 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        
        {/* SDM Papua Performance (EWS) */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="px-4 lg:px-6 py-4 border-b border-slate-100 shrink-0">
            <h3 className="text-xs lg:text-sm font-bold text-slate-800 uppercase tracking-widest">SDM Papua (EWS)</h3>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs lg:text-sm min-w-[300px]">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-[10px] lg:text-xs">
                  <th className="px-4 lg:px-6 py-3 font-medium">Student Name</th>
                  <th className="px-4 lg:px-6 py-3 font-medium">GPA</th>
                  <th className="px-4 lg:px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ewsStudents.map(s => (
                  <tr key={s.id} className="hover:bg-slate-50 transition">
                    <td className="px-4 lg:px-6 py-3 font-medium text-slate-700 whitespace-nowrap">{s.name}</td>
                    <td className="px-4 lg:px-6 py-3 text-slate-600 font-semibold">{s.gpa.toFixed(2)}</td>
                    <td className="px-4 lg:px-6 py-3">
                      <span className={`px-2 py-1 rounded text-[8px] lg:text-[10px] uppercase font-bold tracking-wide whitespace-nowrap ${s.status === 'Warning' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alumni Talent Pool */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="px-4 lg:px-6 py-4 border-b border-slate-100 shrink-0">
            <h3 className="text-xs lg:text-sm font-bold text-[#3B5998] uppercase tracking-widest flex items-center gap-2">
              <span>🎓</span> Alumni Talent Pool
            </h3>
          </div>
          <div className="p-4 space-y-3">
            {alumniScouting.map((alumni, idx) => (
              <div key={idx} className="flex sm:flex-row flex-col sm:items-center justify-between gap-3 p-3 border border-slate-100 rounded-xl hover:shadow-md transition bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {alumni.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[11px] lg:text-sm font-bold text-slate-800">{alumni.name}</h4>
                    <p className="text-[9px] lg:text-xs text-slate-500">{alumni.major} • GPA: {alumni.gpa.toFixed(2)}</p>
                  </div>
                </div>
                <button className="w-full sm:w-auto bg-[#3B5998] hover:bg-blue-700 text-white text-[10px] uppercase font-bold px-4 py-3 sm:py-2 rounded-lg transition shadow-sm">
                  Scout Profile
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. BOTTOM METRICS ROW */}
      <div className="order-4 bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xs lg:text-sm font-bold text-slate-800 uppercase tracking-widest">Pilot Impact Metrics</h3>
          <p className="text-[10px] lg:text-xs text-slate-500 mt-1">Overall measurement of governance accuracy</p>
        </div>
        <div className="w-full sm:w-auto sm:text-right">
          <p className="text-[10px] lg:text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Fund Tracking Accuracy</p>
          <div className="flex items-center gap-3">
            <div className="flex-1 sm:w-48 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#3B5998]" style={{ width: '96%' }}></div>
            </div>
            <span className="text-sm lg:text-lg font-bold text-[#3B5998] shrink-0">96%</span>
          </div>
        </div>
      </div>

    </div>
  );
}
