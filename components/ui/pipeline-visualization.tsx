'use client';

import { useEffect, useRef, useState } from 'react';

export default function PipelineVisualization() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '50px', // Start animation slightly before it comes into view
      }
    );

    observer.observe(svg);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Rounded Frame */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 backdrop-blur-sm rounded-3xl border border-gray-600/30 -m-8"></div>
        
        <svg 
          ref={svgRef}
          width="1200" 
          height="500" 
          viewBox="0 0 1200 500" 
          className="w-full max-w-5xl relative z-10"
        >
          {/* Input Dots */}
          <circle cx="150" cy="100" r="6" fill="#3b82f6"/>
          <circle cx="150" cy="150" r="6" fill="#3b82f6"/>
          <circle cx="150" cy="200" r="6" fill="#3b82f6"/>
          <circle cx="150" cy="250" r="6" fill="#3b82f6"/>
          <circle cx="150" cy="300" r="6" fill="#3b82f6"/>
          <circle cx="150" cy="350" r="6" fill="#3b82f6"/>
          <circle cx="150" cy="400" r="6" fill="#3b82f6"/>
          
          {/* Curved Input Lines to BetterPipes */}
          <path d="M 156 100 Q 350 100 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 156 150 Q 350 150 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 156 200 Q 350 200 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 156 250 Q 350 250 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 156 300 Q 350 300 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 156 350 Q 350 350 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 156 400 Q 350 400 600 250" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
          
          {/* Curved Output Lines from BetterPipes */}
          <path d="M 650 250 Q 850 100 1044 100" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 650 250 Q 850 150 1044 150" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 650 250 Q 850 200 1044 200" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 650 250 Q 850 250 1044 250" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 650 250 Q 850 300 1044 300" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 650 250 Q 850 350 1044 350" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
          <path d="M 650 250 Q 850 400 1044 400" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6"/>
          
          {/* Output Dots */}
          <circle cx="1050" cy="100" r="6" fill="#10b981"/>
          <circle cx="1050" cy="150" r="6" fill="#10b981"/>
          <circle cx="1050" cy="200" r="6" fill="#10b981"/>
          <circle cx="1050" cy="250" r="6" fill="#10b981"/>
          <circle cx="1050" cy="300" r="6" fill="#10b981"/>
          <circle cx="1050" cy="350" r="6" fill="#10b981"/>
          <circle cx="1050" cy="400" r="6" fill="#10b981"/>
          
          {/* Animated Data Flow Dots - Only render when in view */}
          {isInView && (
            <>
              {/* Input to BetterPipes */}
              <circle r="4" fill="#60a5fa">
                <animateMotion dur="4s" repeatCount="3" begin="0s">
                  <mpath href="#input1"/>
                </animateMotion>
              </circle>
              <circle r="4" fill="#60a5fa">
                <animateMotion dur="4s" repeatCount="3" begin="1s">
                  <mpath href="#input2"/>
                </animateMotion>
              </circle>
              <circle r="4" fill="#60a5fa">
                <animateMotion dur="4s" repeatCount="3" begin="2s">
                  <mpath href="#input3"/>
                </animateMotion>
              </circle>
              <circle r="4" fill="#60a5fa">
                <animateMotion dur="4s" repeatCount="3" begin="3s">
                  <mpath href="#input4"/>
                </animateMotion>
              </circle>
              
              {/* BetterPipes to Output */}
              <circle r="4" fill="#34d399">
                <animateMotion dur="4s" repeatCount="3" begin="0.5s">
                  <mpath href="#output1"/>
                </animateMotion>
              </circle>
              <circle r="4" fill="#34d399">
                <animateMotion dur="4s" repeatCount="3" begin="1.5s">
                  <mpath href="#output2"/>
                </animateMotion>
              </circle>
              <circle r="4" fill="#34d399">
                <animateMotion dur="4s" repeatCount="3" begin="2.5s">
                  <mpath href="#output3"/>
                </animateMotion>
              </circle>
              <circle r="4" fill="#34d399">
                <animateMotion dur="4s" repeatCount="3" begin="3.5s">
                  <mpath href="#output4"/>
                </animateMotion>
              </circle>
            </>
          )}
          
          {/* Motion Paths for Input Animation */}
          <defs>
            <path id="input1" d="M 156 100 Q 350 100 600 250" fill="none"/>
            <path id="input2" d="M 156 150 Q 350 150 600 250" fill="none"/>
            <path id="input3" d="M 156 200 Q 350 200 600 250" fill="none"/>
            <path id="input4" d="M 156 250 Q 350 250 600 250" fill="none"/>
            <path id="input5" d="M 156 300 Q 350 300 600 250" fill="none"/>
            <path id="input6" d="M 156 350 Q 350 350 600 250" fill="none"/>
            <path id="input7" d="M 156 400 Q 350 400 600 250" fill="none"/>
            
            {/* Motion Paths for Output Animation */}
            <path id="output1" d="M 650 250 Q 850 100 1044 100" fill="none"/>
            <path id="output2" d="M 650 250 Q 850 150 1044 150" fill="none"/>
            <path id="output3" d="M 650 250 Q 850 200 1044 200" fill="none"/>
            <path id="output4" d="M 650 250 Q 850 250 1044 250" fill="none"/>
            <path id="output5" d="M 650 250 Q 850 300 1044 300" fill="none"/>
            <path id="output6" d="M 650 250 Q 850 350 1044 350" fill="none"/>
            <path id="output7" d="M 650 250 Q 850 400 1044 400" fill="none"/>
          </defs>
          
          {/* Input Labels */}
          <text x="80" y="105" textAnchor="end" fill="white" fontSize="14" fontWeight="500">Web Apps</text>
          <text x="80" y="155" textAnchor="end" fill="white" fontSize="14" fontWeight="500">APIs</text>
          <text x="80" y="205" textAnchor="end" fill="white" fontSize="14" fontWeight="500">Services</text>
          <text x="80" y="255" textAnchor="end" fill="white" fontSize="14" fontWeight="500">SDKs</text>
          <text x="80" y="305" textAnchor="end" fill="white" fontSize="14" fontWeight="500">Mobile</text>
          <text x="80" y="355" textAnchor="end" fill="white" fontSize="14" fontWeight="500">IoT</text>
          <text x="80" y="405" textAnchor="end" fill="white" fontSize="14" fontWeight="500">Legacy</text>
          
          {/* BetterPipes Label */}
          <text x="600" y="300" textAnchor="middle" fill="white" fontSize="12" fontWeight="500" style={{textTransform: "lowercase"}}>betterpipes</text>
          
          {/* Output Labels */}
          <text x="1100" y="105" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Warehouses</text>
          <text x="1100" y="155" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Analytics</text>
          <text x="1100" y="205" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Ad Platforms</text>
          <text x="1100" y="255" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Marketing</text>
          <text x="1100" y="305" textAnchor="start" fill="white" fontSize="14" fontWeight="500">CRM</text>
          <text x="1100" y="355" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Webhooks</text>
          <text x="1100" y="405" textAnchor="start" fill="white" fontSize="14" fontWeight="500">Custom</text>
          
          {/* Section Headers */}
          <text x="150" y="50" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Input Sources</text>
          <text x="1050" y="50" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">Output Destinations</text>
          
          {/* BetterPipes Central Box with Functionalities - Top Layer */}
          <rect x="520" y="180" width="160" height="120" rx="16" fill="#8b5cf6" stroke="#a78bfa" strokeWidth="3"/>
          
          {/* Individual Functionality Boxes - Stacked Vertically */}
          <rect x="540" y="200" width="120" height="25" rx="6" fill="#6d28d9" stroke="#7c3aed" strokeWidth="1"/>
          <text x="600" y="215" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">FILTER</text>
          
          <rect x="540" y="230" width="120" height="25" rx="6" fill="#6d28d9" stroke="#7c3aed" strokeWidth="1"/>
          <text x="600" y="245" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">ENRICH</text>
          
          <rect x="540" y="260" width="120" height="25" rx="6" fill="#6d28d9" stroke="#7c3aed" strokeWidth="1"/>
          <text x="600" y="275" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">ROUTE</text>
        </svg>
      </div>
    </div>
  );
}
