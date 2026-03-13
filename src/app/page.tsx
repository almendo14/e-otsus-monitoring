"use client";

import { useState } from 'react';
import CommandCenterView from '@/components/views/CommandCenterView';
import SDMPapuaView from '@/components/views/SDMPapuaView';
import FundAllocationView from '@/components/views/FundAllocationView';
import GISMappingView from '@/components/views/GISMappingView';
import PublicVoiceView from '@/components/views/PublicVoiceView';

const MENUS = [
  { name: 'Command Center', icon: '📊' },
  { name: 'Fund Allocation', icon: '💰' },
  { name: 'SDM Papua (EWS)', icon: '🎓' },
  { name: 'GIS Mapping', icon: '🗺️' },
  { name: 'Public Voice', icon: '📣' }
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState('Command Center');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeMenu) {
      case 'Command Center': return <CommandCenterView />;
      case 'Fund Allocation': return <FundAllocationView />;
      case 'SDM Papua (EWS)': return <SDMPapuaView />;
      case 'GIS Mapping': return <GISMappingView />;
      case 'Public Voice': return <PublicVoiceView />;
      default: return <CommandCenterView />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F3F4F6] text-slate-800 font-sans overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden backdrop-blur-sm transition-opacity" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SIDEBAR (Light Blue from Image) */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-[#3B5998] text-white flex flex-col shadow-xl z-30 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-[#3B5998] rounded-full flex items-center justify-center font-bold text-xl shadow-sm">P</div>
            <div>
              <h1 className="text-sm font-bold tracking-widest uppercase mb-1">E-Otsus</h1>
              <p className="text-[10px] text-blue-200 uppercase tracking-wider leading-none">Papua Monitoring</p>
            </div>
          </div>
          <button className="lg:hidden text-white hover:text-blue-200" onClick={() => setIsMobileMenuOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <nav className="flex-1 mt-4 px-4 space-y-2">
          {MENUS.map((item) => {
            const isActive = activeMenu === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveMenu(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl text-sm transition-all duration-300 ${
                  isActive 
                  ? 'bg-black/10 text-white font-semibold shadow-inner' 
                  : 'text-blue-100/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="opacity-80 text-lg">{item.icon}</span> {item.name}
              </button>
            )
          })}
        </nav>
        
        <div className="p-6 text-[10px] text-blue-200/50 mt-auto text-center hidden lg:block">
          E-Otsus v2.0 © 2026<br/>Information Asymmetry Eliminator
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col relative h-full overflow-hidden w-full">
        {/* HEADER */}
        <header className="h-16 lg:h-20 bg-white shadow-sm flex items-center justify-between px-4 lg:px-8 shrink-0 z-10">
          <div className="flex items-center gap-3">
            <button 
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" 
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-[#1E293B] hidden sm:block">Dashboard</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="font-bold text-sm text-slate-700">Admin: BP3OKP Authority</p>
              <p className="text-[10px] text-slate-400 uppercase">{activeMenu} View</p>
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#E2E8F0] shadow-sm flex items-center justify-center overflow-hidden shrink-0">
              <img src="https://ui-avatars.com/api/?name=Admin+B&background=e2e8f0&color=475569" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* DYNAMIC VIEW ROUTER */}
        <main className="flex-1 overflow-y-auto custom-scrollbar p-4 lg:p-8">
          <div className="max-w-[1400px] mx-auto w-full">
            {renderContent()}
          </div>
        </main>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>
    </div>
  );
}