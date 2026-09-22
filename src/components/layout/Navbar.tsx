'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  BarChart3, 
  Users, 
  ArrowDownLeft, 
  ArrowUpRight, 
  FileSpreadsheet, 
  Search, 
  Command, 
  LogOut,
  Radio
} from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState('');

  if (pathname === '/login') return null;

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    router.push('/login');
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/users?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navItems = [
    { name: 'Overview', href: '/', icon: BarChart3 },
    { name: 'Users', href: '/users', icon: Users },
    { name: 'Deposits', href: '/payments/deposits', icon: ArrowDownLeft },
    { name: 'Withdrawals', href: '/payments/withdrawals', icon: ArrowUpRight },
    { name: 'Reports', href: '/reports', icon: FileSpreadsheet },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-black/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Primary Studio Header Row */}
        <div className="flex h-14 items-center justify-between gap-4">
          
          {/* Studio Brand & Service Identity */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-[4px] bg-[#2988ff] text-white font-black text-xs tracking-wider shadow-sm group-hover:bg-[#1f73dc] transition-colors">
                334
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#e1e1e1] text-xs sm:text-[13px] tracking-tight">
                  Studio Admin
                </span>
                <span className="text-[#8c8c8c] text-[11px] font-mono hidden sm:inline">
                  v1.0
                </span>
              </div>
            </Link>

            <div className="h-3.5 w-px bg-white/[0.1] hidden sm:block" />

            {/* Authoritative Live Telemetry Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-[3px] border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-[#a6a6a6]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2988ff] animate-pulse" />
              <span>Authoritative Node</span>
            </div>
          </div>

          {/* Quick Search & User Actions */}
          <div className="flex items-center gap-2.5">
            <div className="relative hidden md:block w-60">
              <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-[#8c8c8c]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search user, ID..."
                className="w-full rounded-[4px] border border-white/[0.08] bg-white/[0.04] py-1 pl-8 pr-8 text-[12px] text-[#e1e1e1] placeholder-[#8c8c8c] focus:border-[#2988ff] focus:outline-none focus:ring-1 focus:ring-[#2988ff] transition-all"
              />
              <kbd className="absolute right-2 top-1.5 flex items-center gap-0.5 rounded-[3px] border border-white/[0.08] bg-[#212123] px-1 py-0.5 text-[9px] text-[#8c8c8c] font-mono">
                <Command className="h-2 w-2" /> K
              </kbd>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-[4px] border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11.5px] font-medium text-[#a6a6a6] hover:text-[#e1e1e1] hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400 transition-all duration-150"
            >
              <LogOut className="h-3 w-3" />
              <span>Logout</span>
            </button>
          </div>

        </div>

        {/* Premation Studio Navigation Tabs with Inset/Underline Token */}
        <nav className="-mb-px flex space-x-1 overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium transition-all duration-150 rounded-t-[4px] ${
                  isActive
                    ? 'text-[#e1e1e1] bg-white/[0.04] shadow-[inset_0_-2px_0_0_#2988ff]'
                    : 'text-[#a6a6a6] hover:text-[#e1e1e1] hover:bg-white/[0.02]'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 transition-colors ${isActive ? 'text-[#2988ff]' : 'text-[#8c8c8c] group-hover:text-[#a6a6a6]'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
