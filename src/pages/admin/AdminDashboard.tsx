import { useEffect, useState } from 'react';
import { Film, Tv, GraduationCap, Users, FileText, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { fetchDashboardStats, fetchAllContent } from '@/lib/adminApi';
import type { ContentItem } from '@/lib/types';

export function AdminDashboard() {
  const { t } = useLanguage();
  const [stats, setStats] = useState({ films: 0, episodes: 0, lessons: 0, sponsors: 0, published: 0, drafts: 0 });
  const [recent, setRecent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchDashboardStats(), fetchAllContent()]).then(([s, items]) => {
      setStats(s);
      setRecent(items.slice(0, 5));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p className="text-white/40">{t('admin.loading')}</p>;
  }

  const cards = [
    { icon: Film, label: t('admin.totalFilms'), value: stats.films, color: 'text-red-400', bg: 'bg-red-600/10' },
    { icon: Tv, label: t('admin.totalEpisodes'), value: stats.episodes, color: 'text-blue-400', bg: 'bg-blue-600/10' },
    { icon: GraduationCap, label: t('admin.totalLessons'), value: stats.lessons, color: 'text-green-400', bg: 'bg-green-600/10' },
    { icon: Users, label: t('admin.totalSponsors'), value: stats.sponsors, color: 'text-amber-400', bg: 'bg-amber-600/10' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">{t('admin.dashboard')}</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
        {cards.map((c) => (
          <div key={c.label} className="p-4 lg:p-5 rounded-xl border border-white/5 bg-zinc-900/40">
            <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center mb-3`}>
              <c.icon className={`w-5 h-5 ${c.color}`} />
            </div>
            <p className="text-2xl font-bold text-white">{c.value}</p>
            <p className="text-xs text-white/40 mt-0.5">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-8">
        <div className="p-4 lg:p-5 rounded-xl border border-white/5 bg-zinc-900/40 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-600/10 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <p className="text-xl font-bold text-white">{stats.published}</p>
            <p className="text-xs text-white/40">{t('admin.publishedItems')}</p>
          </div>
        </div>
        <div className="p-4 lg:p-5 rounded-xl border border-white/5 bg-zinc-900/40 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-600/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <p className="text-xl font-bold text-white">{stats.drafts}</p>
            <p className="text-xs text-white/40">{t('admin.draftItems')}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-white/70 mb-3 flex items-center gap-2">
          <FileText className="w-4 h-4" />
          {t('admin.recentItems')}
        </h2>
        {recent.length > 0 ? (
          <div className="space-y-2">
            {recent.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-zinc-900/30">
                <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-zinc-800">
                  {item.coverImage && <img src={item.coverImage} alt="" className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{item.translations.en?.title || item.slug}</p>
                  <p className="text-xs text-white/40">{item.programSlug} · {item.type}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.isPublished ? 'bg-green-600/15 text-green-400' : 'bg-amber-600/15 text-amber-400'}`}>
                  {item.isPublished ? t('admin.published') : t('admin.draft')}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-white/30 py-8 text-center">{t('admin.noItems')}</p>
        )}
      </div>
    </div>
  );
}
