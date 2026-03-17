"use client";

import { useState } from 'react';
import { 
  Map, 
  MapPin, 
  Search, 
  Filter, 
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  FileText
} from 'lucide-react';

export default function GISMappingView() {
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy data representing Otsus Fund Distribution per Regency in Papua
  const [regions] = useState([
    { 
      id: 1, 
      name: 'Kota Jayapura', 
      budget: 'Rp 450.5 M', 
      status: 'Verified', 
      isOptimal: true,
      coordinate: { x: 75, y: 35 } // Relative position for placeholder Map
    },
    { 
      id: 2, 
      name: 'Kab. Mimika', 
      budget: 'Rp 550.4 M', 
      status: 'Verified', 
      isOptimal: true,
      coordinate: { x: 35, y: 65 }
    },
    { 
      id: 3, 
      name: 'Kab. Merauke', 
      budget: 'Rp 380.2 M', 
      status: 'Pending Review', 
      isOptimal: false,
      coordinate: { x: 85, y: 80 }
    },
    { 
      id: 4, 
      name: 'Kab. Jayawijaya', 
      budget: 'Rp 210.8 M', 
      status: 'Delayed Verification', 
      isOptimal: false,
      coordinate: { x: 60, y: 55 }
    },
    { 
      id: 5, 
      name: 'Kab. Biak Numfor', 
      budget: 'Rp 195.0 M', 
      status: 'Verified', 
      isOptimal: true,
      coordinate: { x: 45, y: 20 }
    },
  ]);

  const filteredRegions = regions.filter(region => 
    region.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 space-y-6 font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Geographical Distribution (GIS)</h2>
          <p className="text-sm text-slate-500 mt-1">Spatial monitoring of Special Autonomy Funds allocation across Papua</p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-slate-50 transition">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="inline-flex items-center gap-2 bg-blue-600 border border-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition">
            <Search className="w-4 h-4" />
            Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Map Section */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[500px]">
          {/* Map Controls & Legend Header */}
          <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50/50">
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                <span className="text-xs font-semibold text-slate-700">Optimal Allocation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                <span className="text-xs font-semibold text-slate-700">Delayed Allocation</span>
              </div>
            </div>
            {/* Contextual Search inside Map */}
             <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Find Regency..." 
                  className="w-full pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-shadow"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
          </div>

          {/* High-fidelity Map Placeholder with Grid */}
          <div className="flex-1 relative bg-slate-100 w-full overflow-hidden flex items-center justify-center">
            {/* Grid Pattern Background */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{
                backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            ></div>
            
            {/* Map Centered Icon for Aesthetics */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300 pointer-events-none">
              <Map className="w-32 h-32 mb-4 opacity-50" />
              <p className="text-lg font-bold uppercase tracking-widest text-slate-400">Papua Region Map</p>
              <p className="text-sm font-medium text-slate-400 mt-1">Interactive visual analytics module loading...</p>
            </div>

            {/* Placed Pins */}
            {filteredRegions.map((region) => (
              <div 
                key={region.id}
                className="absolute flex items-center justify-center group cursor-pointer"
                style={{ left: `${region.coordinate.x}%`, top: `${region.coordinate.y}%` }}
              >
                {/* Ping Animation */}
                <div className={`absolute w-8 h-8 rounded-full opacity-30 animate-ping ${region.isOptimal ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                
                {/* Pin Icon */}
                <div className={`relative z-10 p-2 rounded-full shadow-md text-white transition-transform group-hover:scale-110 ${region.isOptimal ? 'bg-emerald-500' : 'bg-amber-500'}`}>
                    <MapPin className="w-5 h-5" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 bg-slate-800 text-white text-xs font-semibold rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                  {region.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-800"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Table / List View */}
        <div className="xl:col-span-1 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-[500px]">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Regional Overview</h3>
            <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded-md">
              {filteredRegions.length} Regions
            </span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {filteredRegions.length > 0 ? (
               filteredRegions.map((region) => (
                <div key={region.id} className="p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-slate-800">{region.name}</h4>
                    {region.isOptimal ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="text-slate-500">Distributed:</span>
                    <span className="font-semibold text-slate-700">{region.budget}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-slate-500">Status:</span>
                    <span className={`font-semibold ${region.isOptimal ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {region.status}
                    </span>
                  </div>
                  
                  <button className="w-full flex justify-center items-center gap-2 text-sm font-semibold bg-white border border-slate-200 text-slate-700 py-2 rounded-md hover:bg-slate-100 hover:text-blue-600 transition group-hover:border-slate-300 shadow-sm">
                    <FileText className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              ))
            ) : (
               <div className="text-center py-10 text-slate-500 text-sm">
                 No regions found matching "{searchQuery}"
               </div>
            )}
          </div>
        </div>

      </div>
      
    </div>
  );
}
