"use client";

import { useState } from 'react';

export default function SDMPapuaView() {
  const [students] = useState([
    { id: 1, name: 'Yohanes', university: 'Universitas Cenderawasih', major: 'Medical', gpa: 3.85, status: 'Active' },
    { id: 2, name: 'Maria', university: 'Universitas Cenderawasih', major: 'Engineering', gpa: 3.60, status: 'Active' },
    { id: 3, name: 'Petrus', university: 'Universitas Cenderawasih', major: 'Education', gpa: 3.25, status: 'Active' },
    { id: 4, name: 'Lukas', university: 'Universitas Cenderawasih', major: 'Law', gpa: 2.90, status: 'Warning: Mentoring Intervention' },
    { id: 5, name: 'Sarah', university: 'Universitas Cenderawasih', major: 'Medical', gpa: 3.90, status: 'Alumni Ready for Placement' },
  ]);

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 space-y-4 lg:space-y-6">
      <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-slate-100 flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 lg:mb-6">
          <div>
            <h2 className="text-lg lg:text-xl font-bold text-slate-800 uppercase tracking-wider">SDM Papua (EWS & Logbook)</h2>
            <p className="text-[10px] lg:text-xs text-slate-500">Scholarship Output Tracking & Intervention Management</p>
          </div>
          <button className="w-full sm:w-auto bg-[#3B5998] hover:bg-blue-700 text-white text-[10px] lg:text-xs font-bold uppercase px-4 py-3 sm:py-2 rounded shadow-sm transition">
            + Student EWS Alert
          </button>
        </div>

        <div className="overflow-x-auto w-full border border-slate-100 rounded-lg">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 text-[10px] lg:text-xs text-slate-500 uppercase tracking-widest bg-slate-50">
                <th className="p-3 lg:p-4">Student Name</th>
                <th className="p-3 lg:p-4">University</th>
                <th className="p-3 lg:p-4">Major</th>
                <th className="p-3 lg:p-4">GPA</th>
                <th className="p-3 lg:p-4">Status</th>
                <th className="p-3 lg:p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-xs lg:text-sm">
              {students.map((student) => (
                <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-3 lg:p-4 font-medium text-slate-700">{student.name}</td>
                  <td className="p-3 lg:p-4 text-slate-600">{student.university}</td>
                  <td className="p-3 lg:p-4 text-slate-600">{student.major}</td>
                  <td className="p-3 lg:p-4">
                    <span className={`font-bold ${student.gpa < 3.25 ? 'text-orange-500' : 'text-green-600'}`}>
                      {student.gpa.toFixed(2)}
                    </span>
                  </td>
                  <td className="p-3 lg:p-4">
                    <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wide whitespace-nowrap
                      ${student.status.includes('Warning') ? 'bg-orange-100 text-orange-600 border border-orange-200' : 
                        student.status.includes('Alumni') ? 'bg-blue-100 text-blue-600 border border-blue-200' : 
                        'bg-green-100 text-green-600 border border-green-200'}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-3 lg:p-4 text-right">
                    <button className="text-[9px] lg:text-[10px] uppercase tracking-wider bg-white text-slate-600 px-4 py-2 rounded border border-slate-300 hover:bg-slate-100 hover:text-slate-800 transition whitespace-nowrap">
                      View Logbook
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
