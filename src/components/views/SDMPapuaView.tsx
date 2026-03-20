"use client";

import { useState } from 'react';
import { 
  Users, 
  Banknote, 
  GraduationCap, 
  CheckCircle, 
  AlertTriangle, 
  AlertCircle,
  Eye,
  Plus
} from 'lucide-react';

export default function SDMPapuaView() {
  const [students] = useState([
    { id: 1, name: 'Yohanes', university: 'Universitas Cenderawasih', major: 'Medical', gpa: 3.85, status: 'Active' },
    { id: 2, name: 'Maria', university: 'Universitas Cenderawasih', major: 'Engineering', gpa: 3.60, status: 'Active' },
    { id: 3, name: 'Petrus', university: 'Universitas Papua', major: 'Education', gpa: 3.25, status: 'Active' },
    { id: 4, name: 'Lukas', university: 'Universitas Musamus', major: 'Law', gpa: 2.70, status: 'Warning' },
    { id: 5, name: 'Sarah', university: 'Universitas Cenderawasih', major: 'Medical', gpa: 3.90, status: 'At Risk' },
    { id: 6, name: 'Markus', university: 'Politeknik Negeri Jayapura', major: 'Computer Science', gpa: 2.50, status: 'Warning' },
  ]);

  const summaryData = [
    {
      title: "Total Students",
      value: "1,245",
      icon: Users,
      trend: "+5.2%",
      trendUp: true,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Total Scholarship Budget",
      value: "Rp 45.2 B",
      icon: Banknote,
      trend: "100% Allocated",
      trendUp: true,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Graduation Rate",
      value: "92.4%",
      icon: GraduationCap,
      trend: "+1.2%",
      trendUp: true,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle className="w-3.5 h-3.5" />
            Active
          </span>
        );
      case 'Warning':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <AlertTriangle className="w-3.5 h-3.5" />
            Warning
          </span>
        );
      case 'At Risk':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-red-50 text-red-700 border border-red-200">
            <AlertCircle className="w-3.5 h-3.5" />
            At Risk
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 space-y-4 lg:space-y-6">
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {summaryData.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-center justify-between transition-all hover:shadow-md">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">{stat.title}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                  <span className={`text-xs font-medium ${stat.trendUp ? 'text-emerald-600' : 'text-slate-500'}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <div className="p-5 lg:p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">SDM Papua (Early Warning System)</h2>
            <p className="text-sm text-slate-500 mt-1">Monitor student performance and early warning indicators</p>
          </div>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition">
            <Plus className="w-4 h-4" />
            Student Alert
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 text-xs text-slate-500 uppercase tracking-wider bg-slate-50/50">
                <th className="p-4 lg:px-6 font-semibold">Student Name</th>
                <th className="p-4 lg:px-6 font-semibold">University</th>
                <th className="p-4 lg:px-6 font-semibold">Major</th>
                <th className="p-4 lg:px-6 font-semibold">GPA</th>
                <th className="p-4 lg:px-6 font-semibold">Status</th>
                <th className="p-4 lg:px-6 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {students.map((student) => (
                <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 lg:px-6 font-medium text-slate-800">{student.name}</td>
                  <td className="p-4 lg:px-6 text-slate-600">{student.university}</td>
                  <td className="p-4 lg:px-6 text-slate-600">{student.major}</td>
                  <td className="p-4 lg:px-6">
                    <span className={`font-semibold ${student.gpa < 2.75 ? 'text-amber-600' : 'text-slate-700'}`}>
                      {student.gpa.toFixed(2)}
                    </span>
                  </td>
                  <td className="p-4 lg:px-6">
                    {getStatusBadge(student.status)}
                  </td>
                  <td className="p-4 lg:px-6 text-right">
                    <button className="inline-flex items-center justify-center gap-1.5 text-xs font-medium bg-white text-slate-600 px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50 hover:text-blue-600 transition shadow-sm whitespace-nowrap">
                      <Eye className="w-3.5 h-3.5" />
                      View Log
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */ }
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-sm text-slate-500">
          <span>Showing 1 to 6 of 1,245 students</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-50 font-medium transition" disabled>Previous</button>
            <button className="px-3 py-1.5 rounded border border-slate-200 bg-white hover:bg-slate-50 font-medium transition">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
