import { useLanguage } from '@/lib/LanguageContext';
import { ContentCard } from '@/components/ContentCard';
import { useContentByProgram } from '@/lib/contentHooks';

export function ProgramListPage({
  programSlug,
  title,
  subtitle,
  heroImage,
}: {
  programSlug: string;
  title: string;
  subtitle: string;
  heroImage: string;
}) {
  const { t } = useLanguage();
  const { items, loading } = useContentByProgram(programSlug);

  return (
    <div>
      <section className="relative h-[40vh] min-h-[280px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-lg text-white/60 max-w-2xl">{subtitle}</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-[2/3] rounded-xl bg-zinc-900/50 border border-white/5 animate-pulse" />
              ))}
            </div>
          ) : items.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {items.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-white/40 py-20">{t('common.noContent')}</p>
          )}
        </div>
      </section>
    </div>
  );
}
