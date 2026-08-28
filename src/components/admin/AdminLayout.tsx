import { useState, type ReactNode } from 'react';
import { LayoutDashboard, Film, Tv, GraduationCap, Users, LogOut, Menu, X, ExternalLink } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Link, navigate } from '@/lib/router';

export function AdminLayout({ children }: { children: ReactNode }) {
  const { session, signOut } = useAuth();
  const { t } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: t('admin.dashboard'), to: '/admin' },
    { icon: Film, label: t('admin.films'), to: '/admin/films' },
    { icon: Tv, label: t('admin.episodes'), to: '/admin/episodes' },
    { icon: GraduationCap, label: t('admin.lessons'), to: '/admin/lessons' },
    { icon: Users, label: t('admin.sponsors'), to: '/admin/sponsors' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-60 bg-zinc-950 border-r border-white/5 flex flex-col z-40 transition-transform duration-200 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-5 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600/15 flex items-center justify-center">
              <span className="text-red-500 font-bold text-sm">EV</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">EvoVision</p>
              <p className="text-[10px] uppercase tracking-widest text-white/30">Admin CMS</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-white/5 space-y-1">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {t('admin.backToSite')}
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            {t('admin.signOut')}
          </button>
          <div className="px-3 pt-2">
            <p className="text-[10px] text-white/30 truncate">{session?.user.email}</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-white/5 bg-zinc-950 sticky top-0 z-20">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <span className="text-sm font-semibold">EvoVision CMS</span>
          <div className="w-5" />
        </div>

        <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto w-full">{children}</div>
      </div>
    </div>
  );
}
