import { useState } from 'react';
import { Lock, Shield } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { useLanguage } from '@/lib/LanguageContext';
import { useRouter } from '@/lib/router';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminDashboard } from '@/pages/admin/AdminDashboard';
import { ContentManager } from '@/pages/admin/ContentManager';
import { SponsorsManager } from '@/pages/admin/SponsorsManager';

export function AdminPage() {
  const { session, loading, isAdmin, signIn, signOut } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const route = useRouter();
  const segs = route.segments;

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white/40">{t('admin.loading')}</p>
      </div>
    );
  }

  if (!session) {
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true);
      setError(null);
      const { error } = await signIn(email, password);
      if (error) setError(t('admin.loginError'));
      setSubmitting(false);
    };

    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-red-600/15 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">{t('admin.title')}</h1>
            <p className="text-sm text-white/50">{t('admin.loginPrompt')}</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-white/40 block mb-1.5">
                {t('admin.email')}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white text-sm focus:border-red-600/50 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-white/40 block mb-1.5">
                {t('admin.password')}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-lg text-white text-sm focus:border-red-600/50 focus:outline-none transition-colors"
              />
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
            >
              {t('admin.signIn')}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-lg text-white/70">{t('admin.unauthorized')}</p>
          <button
            onClick={signOut}
            className="mt-6 text-sm text-white/50 hover:text-white transition-colors"
          >
            {t('admin.signOut')}
          </button>
        </div>
      </div>
    );
  }

  let content: React.ReactNode;
  if (segs.length === 1) {
    content = <AdminDashboard />;
  } else if (segs[1] === 'films') {
    content = (
      <ContentManager
        contentType="movie"
        programSlug="kinomas"
        pageTitle={t('admin.films')}
        newLabel={t('admin.newFilm')}
        editLabel={t('admin.editFilm')}
        folder="films"
      />
    );
  } else if (segs[1] === 'episodes') {
    content = (
      <ContentManager
        contentType="episode"
        programSlug="kadrich-durs"
        pageTitle={t('admin.episodes')}
        newLabel={t('admin.newEpisode')}
        editLabel={t('admin.editEpisode')}
        folder="episodes"
      />
    );
  } else if (segs[1] === 'lessons') {
    content = (
      <ContentManager
        contentType="lesson"
        programSlug="academy"
        pageTitle={t('admin.lessons')}
        newLabel={t('admin.newLesson')}
        editLabel={t('admin.editLesson')}
        folder="lessons"
      />
    );
  } else if (segs[1] === 'sponsors') {
    content = <SponsorsManager />;
  } else {
    content = <AdminDashboard />;
  }

  return <AdminLayout>{content}</AdminLayout>;
}
