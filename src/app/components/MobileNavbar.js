import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronLeft } from 'lucide-react';

const MobileNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('main');
  
  const isActive = (href) => pathname === href;

  const isSubmenuActive = (submenuItems) => {
    return submenuItems.some(item => item.href && isActive(item.href));
  };

  const navItems = {
    main: [
      { label: 'About', submenu: 'about' },
      { label: 'Research', href: '/research' },
      { label: 'Get Involved', submenu: 'getInvolved' },
      { label: 'Resources', submenu: 'resources' }
    ],
    about: [
      { label: 'Home', href: '/' },
      { label: 'Team', href: '/about/team' }
      
    ],
    getInvolved: [
      { label: 'Technical Fellowship', href: '/get_involved/technical-fellowship' },
      { label: 'Policy Fellowship', href: '/get_involved/policy-fellowship' },
      { label: 'Research Groups', href: '/get_involved/research-groups' }
    ],
    resources: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'Policy Resources', href: '/resources/policy-resources' },
    ]
  };

  return (
    <div className="md:hidden"> {/* Hide on medium and larger screens */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Full-screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            {currentMenu !== 'main' && (
              <button
                onClick={() => setCurrentMenu('main')}
                className="flex items-center text-gray-600"
              >
                <ChevronLeft size={20} />
                <span className="ml-2">Back</span>
              </button>
            )}
            <button
              onClick={() => {
                setIsOpen(false);
                setCurrentMenu('main');
              }}
              className="text-gray-600 p-2"
            >
              ✕
            </button>
          </div>

          {/* Navigation items */}
          <nav className="p-4">
            <ul className="space-y-4">
              {navItems[currentMenu].map((item) => (
                <li key={item.label} className="py-2">
                  {item.submenu ? (
                    <button
                    onClick={() => setCurrentMenu(item.submenu)}
                    style={{ color: isSubmenuActive(navItems[item.submenu]) ? 'var(--columbia-blue)' : '' }}
                    className="text-lg w-full text-left flex justify-between items-center"
                    >
                      {item.label}
                      <span className="text-gray-400">›</span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-lg block w-full`}
                      style={{ color: isActive(item.href) ? 'var(--columbia-blue)' : '' }}
                      onClick={() => {
                        setIsOpen(false);
                        setCurrentMenu('main');
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;