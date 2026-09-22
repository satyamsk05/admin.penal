import React from 'react';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { AdminGuard } from '@/components/layout/AdminGuard';

export const metadata = {
  title: '3334Game — Authoritative Admin Portal',
  description: 'Protected Admin Dashboard for 3334Game Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-premation-base text-premation-textSecondary min-h-screen antialiased selection:bg-premation-accent/25 selection:text-white font-sans">
        <AdminGuard>
          <Navbar />
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>
        </AdminGuard>
      </body>
    </html>
  );
}
