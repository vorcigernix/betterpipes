'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/roi-calculator', label: 'ROI Calculator' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0"
            onClick={toggleMenu}
          />
          <div className="absolute top-0 right-0 w-full h-full border-l border-white/10">
            <div className="flex flex-col p-6 bg-black">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={toggleMenu}
                    className="text-white/80 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/10 text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  BetterPipes by Meiro
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
