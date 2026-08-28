import { useLanguage } from '@/lib/LanguageContext';
import { Send, Clock, Calendar, Tag, Lock } from 'lucide-react';
import { BackLink } from '@/components/BackLink';
import { SponsorBlock } from '@/components/SponsorBlock';
import { ContentCard } from '@/components/ContentCard';
import { useContentBySlug, useRelatedContent, useSponsorById } from '@/lib/contentHooks';
import type { ContentItem } from '@/lib/types';

export function ContentDetailPage({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const { item, loading } = useContentBySlug(slug);
  const related = useRelatedContent(item);
  const sponsor = useSponsorById(item?.sponsorId);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-white/40">{t('admin.loading')}</p>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 text-lg mb-4">{t('common.noContent')}</p>
        </div>
      </div>
    );
  }

  const tr = item.translations[lang];
  const showComingSoon = item.isPremium && item.programSlug === 'academy';
  const programLabel = t(`nav.${item.programSlug === 'kinomas' ? 'kinomas' : item.programSlug === 'kadrich-durs' ? 'kadrichDurs' : 'academy'}` as never);

  return (
    <article>
      {/* Hero / cover */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={item.coverImage} alt={tr.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 w-full h-full flex items-end pb-8">
          <div className="w-full">
            <BackLink to={`/${item.programSlug}`} label={programLabel} />
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {showComingSoon && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-black/60 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold rounded">
                  <Lock className="w-3 h-3" />
                  {t('common.premiumComingSoon')}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
              {tr.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Poster */}
          <div className="lg:col-span-1">
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-zinc-950 border border-white/5 sticky top-24">
              <img src={item.coverImage} alt={tr.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            {/* Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pb-8 border-b border-white/10">
              {item.year && (
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/40 block mb-1">{t('common.year')}</span>
                  <span className="text-sm text-white flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-red-500" />{item.year}</span>
                </div>
              )}
              {item.genre && (
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/40 block mb-1">{t('common.genre')}</span>
                  <span className="text-sm text-white flex items-center gap-1.5"><Tag className="w-3.5 h-3.5 text-red-500" />{item.genre}</span>
                </div>
              )}
              {item.duration && (
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/40 block mb-1">{t('common.duration')}</span>
                  <span className="text-sm text-white flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-red-500" />{item.duration}</span>
                </div>
              )}
              {item.difficulty && (
                <div>
                  <span className="text-xs uppercase tracking-wider text-white/40 block mb-1">{t('common.difficulty')}</span>
                  <span className="text-sm text-white">{t(`academy.${item.difficulty}` as never)}</span>
                </div>
              )}
            </div>

            {/* Synopsis */}
            <div className="mb-8">
              <h2 className="text-xs uppercase tracking-widest text-red-500 font-semibold mb-3">
                {t('common.readMore')}
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">{tr.synopsis}</p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xs uppercase tracking-widest text-red-500 font-semibold mb-3">
                EvoVision Films
              </h2>
              <p className="text-base text-white/60 leading-relaxed whitespace-pre-line">{tr.description}</p>
            </div>

            {/* Trailer placeholder */}
            {item.trailerUrl && (
              <div className="mb-8 aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-white/10">
                <iframe
                  src={item.trailerUrl}
                  title={tr.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Sponsor */}
            {sponsor && <SponsorBlock sponsor={sponsor} />}

            {/* CTA */}
            {item.telegramLink && !showComingSoon && (
              <div className="mt-8">
                <a
                  href={item.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
                >
                  <Send className="w-5 h-5" />
                  {t('common.watchOnTelegram')}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 lg:mt-24 pt-12 border-t border-white/10">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-8">{t('common.relatedContent')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((r: ContentItem) => (
                <ContentCard key={r.id} item={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
