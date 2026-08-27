import { useState } from 'react';
import { Lock, LogOut, Shield, FileText, Users, Settings } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Link } from '@/lib/router';

export function AdminPage() {
  const { session, loading, isAdmin, signIn, signOut } = useAuth();
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

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

  const sections = [
    { icon: FileText, label: t('admin.content'), to: '/admin/content' },
    { icon: Users, label: t('admin.sponsors'), to: '/admin/sponsors' },
    { icon: Settings, label: t('admin.settings'), to: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">{t('admin.dashboard')}</h1>
            <p className="text-sm text-white/50 mt-1">{session.user.email}</p>
          </div>
          <button
            onClick={signOut}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-white/20 rounded-lg text-sm text-white/70 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            {t('admin.signOut')}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="p-6 rounded-xl border border-white/10 bg-zinc-900/40 hover:border-red-600/40 hover:bg-red-600/5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-red-600/15 flex items-center justify-center mb-4 group-hover:bg-red-600/25 transition-colors">
                <s.icon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-base font-semibold text-white">{s.label}</h3>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl border border-white/10 bg-zinc-900/30">
          <p className="text-sm text-white/50 leading-relaxed">
            {t('admin.loading')} — Content management interface coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
