"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamic import for Leaflet to fix SSR window issues in Next.js
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function InfrastructureGISMap() {
  const [mounted, setMounted] = useState(false);
  const [reports, setReports] = useState<{user: string; comment: string; score: number}[]>([
    { user: 'Student A', comment: 'Building exists, but no teachers present', score: 2 }
  ]);
  const [newComment, setNewComment] = useState('');
  const [newScore, setNewScore] = useState(5);

  useEffect(() => {
    // Fix leaflet marker icons in Next.js
    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
      setMounted(true);
    });
  }, []);

  const handleAddReport = () => {
    if (newComment.trim() === '') return;
    setReports([...reports, { user: 'Citizen Reporter', comment: newComment, score: newScore }]);
    setNewComment('');
    setNewScore(5);
  };

  // Mock Otsus Projects Data featuring Jayapura Pilot
  const projects = [
    {
      id: 1,
      name: 'Jayapura Otsus Public School (Pilot)',
      position: [-2.53371, 140.71813],
      type: 'Education',
      status: 'Built',
      isJayapuraPilot: true
    },
    {
      id: 2,
      name: 'Sorong Medical Center',
      position: [-0.88126, 131.29422],
      type: 'Health',
      status: 'Ongoing',
      isJayapuraPilot: false
    }
  ];

  if (!mounted) return <div className="w-full h-[400px] bg-blue-900/10 animate-pulse rounded-2xl flex items-center justify-center">Loading Map Engine...</div>;

  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.2)] border border-blue-500/20 relative z-0">
      <MapContainer 
        center={[-4.1, 137.5]} // Center to Papua
        zoom={6} 
        style={{ height: '100%', width: '100%', background: '#020617' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {projects.map(project => (
          <Marker key={project.id} position={project.position as [number, number]}>
            <Popup className="custom-popup min-w-[290px]">
              <div className="p-2 space-y-2 text-slate-800">
                <h3 className="font-bold text-sm border-b pb-1 text-blue-900 flex items-center gap-1">
                  {project.name} {project.isJayapuraPilot && <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded text-[10px] uppercase">Pilot</span>}
                </h3>
                <p className="text-xs"><span className="font-semibold">Type:</span> {project.type}</p>
                <p className="text-xs"><span className="font-semibold">Status:</span> {project.status}</p>
                
                {project.isJayapuraPilot && (
                  <div className="mt-4 bg-slate-100 p-3 rounded shadow-inner border border-slate-200">
                    <h4 className="font-extrabold text-[12px] uppercase text-blue-800 mb-2 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                      Public Scorecard (Crowdsourced)
                    </h4>
                    
                    <ul className="space-y-2 max-h-32 overflow-y-auto mb-3 custom-scrollbar pr-1">
                      {reports.map((report, idx) => (
                        <li key={idx} className="text-[10px] bg-white p-2 rounded border border-slate-100 shadow-sm flex flex-col items-start gap-1">
                          <div className="flex items-center gap-1">
                            <strong className="text-[10px] text-slate-700">{report.user}</strong>
                            <span className="text-yellow-500 ml-1">{"★".repeat(report.score)}{"☆".repeat(5 - report.score)}</span>
                          </div>
                          <span className="text-slate-600 text-[10px]">{report.comment}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-2 border-t pt-2 border-slate-200">
                      <p className="text-[10px] font-bold text-slate-600">Submit Verification</p>
                      
                      <div className="flex justify-between items-center bg-white p-1 rounded border border-slate-300">
                        <span className="text-[10px] text-slate-500 pl-1">Rating:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button 
                              key={star} 
                              onClick={() => setNewScore(star)}
                              className={`text-sm px-1 ${star <= newScore ? 'text-yellow-500' : 'text-slate-300'}`}
                            >
                              ★
                            </button>
                          ))}
                        </div>
                      </div>

                      <select 
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full text-[10px] p-1.5 rounded border border-slate-300 bg-white text-slate-700"
                      >
                        <option value="">-- Select Category --</option>
                        <option value="Building exists, no teachers">Building exists, no teachers</option>
                        <option value="Facility complete, no doctor">Facility complete, no doctor</option>
                        <option value="Delayed Scholarship">Delayed Scholarship</option>
                        <option value="Abandoned construction">Abandoned construction</option>
                        <option value="Fully operational">Fully operational</option>
                      </select>

                      <button 
                        onClick={handleAddReport}
                        disabled={!newComment}
                        className="w-full flex items-center justify-center gap-1 bg-blue-600 disabled:bg-blue-300 text-white text-[10px] font-bold py-1.5 rounded shadow-sm hover:bg-blue-700 transition"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        Submit Report & GPS Log
                      </button>
                    </div>
                  </div>
                )}
                
                {!project.isJayapuraPilot && (
                  <p className="text-[10px] text-slate-500 italic mt-2">Public scorecard only available for Jayapura Pilot projects.</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Overlay UI elements */}
      <div className="absolute top-4 left-4 z-[400] pointer-events-none">
        <span className="px-2 py-1 bg-black/60 backdrop-blur border border-blue-500/50 rounded text-[10px] uppercase font-bold text-blue-300 pointer-events-auto shadow-[0_0_10px_rgba(59,130,246,0.3)]">
          Public Scorecard GIS (Jayapura Pilot)
        </span>
      </div>
    </div>
  );
}
