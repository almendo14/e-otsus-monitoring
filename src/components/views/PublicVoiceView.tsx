"use client";

import { useState } from 'react';
import { MessageSquare, Clock, Filter, ChevronDown, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

// Define the feedback types based on the user's requirements
type FeedbackType = 'Appreciation' | 'Complaint' | 'Inquiry';

interface FeedbackData {
  id: string;
  name: string;
  initials: string;
  location: string;
  type: FeedbackType;
  quote: string;
  timestamp: string;
}

export default function PublicVoiceView() {
  const [feedbacks] = useState<FeedbackData[]>([
    {
      id: '1',
      name: 'Yoseph W.',
      initials: 'YW',
      location: 'Kab. Jayawijaya',
      type: 'Appreciation',
      quote: "The Otsus scholarship funds arrived right on time this semester. It really helped my family cover the university tuition fees without taking on debt.",
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      name: 'Maria K.',
      initials: 'MK',
      location: 'Kota Jayapura',
      type: 'Complaint',
      quote: "The health clinic in Abepura still lacks basic medicine supplies despite the reported Otsus budget allocation. We need immediate transparency.",
      timestamp: '5 hours ago'
    },
    {
      id: '3',
      name: 'Simon P.',
      initials: 'SP',
      location: 'Kab. Mimika',
      type: 'Inquiry',
      quote: "How can local indigenous entrepreneurs apply for the new Otsus business development grants? The current SIPD portal is confusing.",
      timestamp: '1 day ago'
    },
    {
      id: '4',
      name: 'Ester L.',
      initials: 'EL',
      location: 'Kab. Merauke',
      type: 'Appreciation',
      quote: "Thank you for the new primary school building in our village. The facilities are much better than before.",
      timestamp: '1 day ago'
    },
     {
      id: '5',
      name: 'Habel D.',
      initials: 'HD',
      location: 'Kab. Asmat',
      type: 'Complaint',
      quote: "Clean water infrastructure project has been stalled for 6 months. Please audit the contractors handling this Otsus project.",
      timestamp: '2 days ago'
    },
    {
      id: '6',
      name: 'Ruth M.',
      initials: 'RM',
      location: 'Kab. Biak Numfor',
      type: 'Inquiry',
      quote: "Are there specific quotas for women's empowerment programs in this year's regional Otsus budget?",
      timestamp: '3 days ago'
    }
  ]);

  // Helper function to render the correct badge styling based on type
  const getBadgeStyle = (type: FeedbackType) => {
    switch (type) {
      case 'Appreciation':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Complaint':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Inquiry':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  // Helper function to render the correct icon based on type
  const getTypeIcon = (type: FeedbackType) => {
    switch (type) {
      case 'Appreciation':
        return <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-blue-600" />;
      case 'Complaint':
        return <AlertCircle className="w-3.5 h-3.5 mr-1 text-red-600" />;
      case 'Inquiry':
        return <HelpCircle className="w-3.5 h-3.5 mr-1 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 space-y-6 font-sans">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Public Voice & Feedback</h2>
          <p className="text-sm text-slate-500 mt-1">Direct crowdsourced monitoring from citizens regarding Otsus implementation</p>
        </div>
        <div className="flex gap-2">
            <button className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-slate-50 transition">
              <Filter className="w-4 h-4" />
              Filter by Region
            </button>
            <button className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-slate-50 transition">
              All Categories
              <ChevronDown className="w-4 h-4" />
            </button>
        </div>
      </div>

      {/* Grid Layout for Feedback Cards (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {feedbacks.map((feedback) => (
          <div 
            key={feedback.id} 
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Card Header: Initials, Name, Location, Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 shrink-0">
                    <span className="text-lg font-bold text-slate-600 tracking-wider">
                      {feedback.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-base">{feedback.name}</h3>
                    <p className="text-sm font-medium text-slate-500">{feedback.location}</p>
                  </div>
                </div>
                
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getBadgeStyle(feedback.type)}`}>
                  {getTypeIcon(feedback.type)}
                  {feedback.type}
                </span>
              </div>

              {/* Quote Content */}
              <div className="mb-4">
                <p className="text-slate-700 italic text-[15px] leading-relaxed relative">
                  <span className="text-4xl text-slate-200 absolute -top-3 -left-2 z-0">"</span>
                  <span className="relative z-10 font-medium">
                    {feedback.quote}
                  </span>
                  <span className="text-4xl text-slate-200 relative -bottom-4 right-0 leading-none">"</span>
                </p>
              </div>
            </div>

            {/* Card Footer: Timestamp */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mt-2 border-t border-slate-50 pt-4">
              <Clock className="w-3.5 h-3.5" />
              {feedback.timestamp}
            </div>
          </div>
        ))}
      </div>

      {/* Prominent Admin Action Call to Action */}
      <div className="mt-8">
        <button className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-2xl p-6 shadow-md transition-all hover:shadow-lg group">
          <div className="bg-white/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold tracking-tight mb-1">Open Public Complaints Channel</h3>
            <p className="text-blue-100 text-sm font-medium">Respond directly to citizen feedback and initiate field verification tasks</p>
          </div>
        </button>
      </div>
      
    </div>
  );
}

