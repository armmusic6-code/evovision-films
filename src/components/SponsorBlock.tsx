import { useLanguage } from '@/lib/LanguageContext';
import type { Sponsor } from '@/lib/types';
import { ExternalLink } from 'lucide-react';

export function SponsorBlock({ sponsor }: { sponsor: Sponsor }) {
  const { lang, t } = useLanguage();
  const tr = sponsor.translations[lang];

  return (
    <div className="my-10 rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900/60 to-black overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {sponsor.banner && (
          <div className="sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden bg-zinc-950 relative">
            <img
              src={sponsor.banner}
              alt={sponsor.name}
              loading="lazy"
              className="w-full h-full object-cover opacity-80"
            />
            {sponsor.logo && (
              <div className="absolute bottom-3 left-3 w-12 h-12 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain p-1" />
              </div>
            )}
          </div>
        )}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            {!sponsor.banner && sponsor.logo && (
              <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain p-0.5" />
              </div>
            )}
            <span className="text-xs uppercase tracking-widest text-red-500 font-semibold">
              {tr.label || t('common.partner')}
            </span>
            <span className="text-white/30">•</span>
            <span className="text-xs text-white/40">{t('common.presentedWith')}</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{sponsor.name}</h3>
          <p className="text-sm text-white/60 leading-relaxed mb-4">
            {tr.message}
          </p>
          <a
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-red-400 hover:text-red-300 transition-colors w-fit"
          >
            {sponsor.name}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
