import { useEffect, useState, useCallback } from 'react';
import { Plus, Pencil, Trash2, ArrowLeft, Save } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { navigate } from '@/lib/router';
import type { ContentItem, Language, ContentTranslation } from '@/lib/types';
import {
  fetchAllContent,
  createContent,
  updateContent,
  deleteContent,
  fetchAllSponsors,
  type ContentInput,
} from '@/lib/adminApi';
import type { Sponsor } from '@/lib/types';
import { ImageUpload, TextField, TextArea, SelectField, Toggle, ConfirmDialog } from '@/components/admin/FormFields';

const EMPTY_TR: ContentTranslation = { title: '', synopsis: '', description: '', seoTitle: '', seoDescription: '' };

interface Props {
  contentType: 'movie' | 'episode' | 'lesson';
  programSlug: string;
  pageTitle: string;
  newLabel: string;
  editLabel: string;
  folder: string;
}

export function ContentManager({ contentType, programSlug, pageTitle, newLabel, editLabel, folder }: Props) {
  const { t } = useLanguage();
  const [items, setItems] = useState<ContentItem[]>([]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<ContentItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<ContentItem | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    const [allItems, allSponsors] = await Promise.all([fetchAllContent(), fetchAllSponsors()]);
    setItems(allItems.filter((i) => i.type === contentType));
    setSponsors(allSponsors);
    setLoading(false);
  }, [contentType]);

  useEffect(() => {
    load();
  }, [load]);

  const handleCreate = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (item: ContentItem) => {
    setEditing(item);
    setShowForm(true);
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    await deleteContent(deleteTarget.id);
    setDeleting(false);
    setDeleteTarget(null);
    load();
  };

  if (showForm) {
    return (
      <ContentForm
        existing={editing}
        sponsors={sponsors}
        contentType={contentType}
        programSlug={programSlug}
        folder={folder}
        titleLabel={editing ? editLabel : newLabel}
        onCancel={() => {
          setShowForm(false);
          setEditing(null);
        }}
        onSaved={() => {
          setShowForm(false);
          setEditing(null);
          load();
        }}
      />
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <button
            onClick={() => navigate('/admin')}
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t('admin.backToDashboard')}
          </button>
          <h1 className="text-2xl font-bold text-white">{pageTitle}</h1>
        </div>
        <button
          onClick={handleCreate}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          {newLabel}
        </button>
      </div>

      {loading ? (
        <p className="text-white/40">{t('admin.loading')}</p>
      ) : items.length > 0 ? (
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-zinc-900/30 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-16 rounded overflow-hidden flex-shrink-0 bg-zinc-800">
                {item.coverImage && <img src={item.coverImage} alt="" className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white truncate">
                  {item.translations.en?.title || item.slug}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${item.isPublished ? 'bg-green-600/15 text-green-400' : 'bg-amber-600/15 text-amber-400'}`}>
                    {item.isPublished ? t('admin.published') : t('admin.draft')}
                  </span>
                  {item.isPremium && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-600/15 text-red-400">
                      {t('admin.premium')}
                    </span>
                  )}
                  {item.featured && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-600/15 text-blue-400">
                      {t('admin.featured')}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleEdit(item)}
                  className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeleteTarget(item)}
                  className="p-2 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-600/5 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-white/30 mb-4">{t('admin.noItems')}</p>
          <button
            onClick={handleCreate}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            {newLabel}
          </button>
        </div>
      )}

      <ConfirmDialog
        open={!!deleteTarget}
        message={t('admin.confirmDelete')}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
        busy={deleting}
      />
    </div>
  );
}

function ContentForm({
  existing,
  sponsors,
  contentType,
  programSlug,
  folder,
  titleLabel,
  onCancel,
  onSaved,
}: {
  existing: ContentItem | null;
  sponsors: Sponsor[];
  contentType: 'movie' | 'episode' | 'lesson';
  programSlug: string;
  folder: string;
  titleLabel: string;
  onCancel: () => void;
  onSaved: () => void;
}) {
  const { t } = useLanguage();
  const [slug, setSlug] = useState(existing?.slug ?? '');
  const [coverImage, setCoverImage] = useState(existing?.coverImage ?? '');
  const [trailerUrl, setTrailerUrl] = useState(existing?.trailerUrl ?? '');
  const [telegramLink, setTelegramLink] = useState(existing?.telegramLink ?? '');
  const [year, setYear] = useState(existing?.year?.toString() ?? '');
  const [genre, setGenre] = useState(existing?.genre ?? '');
  const [duration, setDuration] = useState(existing?.duration ?? '');
  const [difficulty, setDifficulty] = useState(existing?.difficulty ?? '');
  const [isPremium, setIsPremium] = useState(existing?.isPremium ?? false);
  const [isPublished, setIsPublished] = useState(existing?.isPublished ?? false);
  const [featured, setFeatured] = useState(existing?.featured ?? false);
  const [sponsorId, setSponsorId] = useState(existing?.sponsorId ?? '');
  const [translations, setTranslations] = useState<Record<Language, ContentTranslation>>(
    existing?.translations ?? { hy: { ...EMPTY_TR }, ru: { ...EMPTY_TR }, en: { ...EMPTY_TR } }
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const programOptions = [
    { value: 'kinomas', label: 'KinoMas' },
    { value: 'kadrich-durs', label: 'Կադրից դուրս' },
    { value: 'academy', label: t('academy.title') },
  ];
  const [selectedProgram, setSelectedProgram] = useState(existing?.programSlug ?? programSlug);

  const updateTr = (lang: Language, field: keyof ContentTranslation, value: string) => {
    setTranslations((prev) => ({ ...prev, [lang]: { ...prev[lang], [field]: value } }));
  };

  const handleSave = async (publish: boolean) => {
    setSaving(true);
    setError(null);

    const input: ContentInput = {
      slug,
      type: contentType,
      programSlug: selectedProgram,
      coverImage,
      trailerUrl: trailerUrl || undefined,
      telegramLink: telegramLink || undefined,
      year: year ? parseInt(year, 10) : undefined,
      genre: genre || undefined,
      duration: duration || undefined,
      difficulty: (difficulty || undefined) as ContentInput['difficulty'],
      isPremium,
      isPublished: publish,
      featured,
      sponsorId: sponsorId || undefined,
      translations,
    };

    const result = existing
      ? await updateContent(existing.id, { ...input, isPublished: publish })
      : await createContent(input);

    if (result.error) {
      setError(result.error);
      setSaving(false);
    } else {
      onSaved();
    }
  };

  const langLabels: Record<Language, string> = { hy: 'Հայերեն', ru: 'Русский', en: 'English' };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <button
            onClick={onCancel}
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t('admin.cancel')}
          </button>
          <h1 className="text-2xl font-bold text-white">{titleLabel}</h1>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-600/10 border border-red-600/20 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="space-y-5">
        {/* Basic fields */}
        <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/30 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField label={t('admin.slug')} value={slug} onChange={setSlug} required placeholder="my-film-slug" />
            <SelectField label={t('admin.program')} value={selectedProgram} onChange={setSelectedProgram} options={programOptions} />
          </div>
          <ImageUpload label={t('admin.coverImage')} value={coverImage} onChange={setCoverImage} folder={folder} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <TextField label={t('common.year')} value={year} onChange={setYear} type="number" placeholder="2025" />
            <TextField label={t('common.genre')} value={genre} onChange={setGenre} placeholder="Drama" />
            <TextField label={t('common.duration')} value={duration} onChange={setDuration} placeholder="1h 30m" />
          </div>
          {contentType === 'lesson' && (
            <SelectField
              label={t('common.difficulty')}
              value={difficulty}
              onChange={setDifficulty}
              options={[
                { value: '', label: '—' },
                { value: 'beginner', label: t('academy.beginner') },
                { value: 'intermediate', label: t('academy.intermediate') },
                { value: 'advanced', label: t('academy.advanced') },
              ]}
            />
          )}
          <TextField label={t('admin.trailerUrl')} value={trailerUrl} onChange={setTrailerUrl} placeholder="https://youtube.com/..." />
          <TextField label={t('admin.telegramLink')} value={telegramLink} onChange={setTelegramLink} placeholder="https://t.me/..." />
          <SelectField
            label={t('admin.sponsor')}
            value={sponsorId}
            onChange={setSponsorId}
            options={[
              { value: '', label: t('admin.noSponsor') },
              ...sponsors.map((s) => ({ value: s.id, label: s.name })),
            ]}
          />
        </div>

        {/* Toggles */}
        <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/30 flex flex-wrap gap-6">
          <Toggle label={t('admin.published')} checked={isPublished} onChange={setIsPublished} />
          <Toggle label={t('admin.featured')} checked={featured} onChange={setFeatured} />
          {contentType === 'lesson' && <Toggle label={t('admin.premium')} checked={isPremium} onChange={setIsPremium} />}
        </div>

        {/* Translations */}
        <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/30">
          <h3 className="text-sm font-semibold text-white/70 mb-1">{t('admin.translations')}</h3>
          <p className="text-xs text-white/40 mb-4">{t('admin.translationsHint')}</p>
          <div className="space-y-4">
            {(['hy', 'ru', 'en'] as Language[]).map((lang) => (
              <div key={lang} className="p-4 rounded-lg bg-zinc-950/50 border border-white/5 space-y-3">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{langLabels[lang]}</p>
                <TextField
                  label={t('admin.title')}
                  value={translations[lang]?.title ?? ''}
                  onChange={(v) => updateTr(lang, 'title', v)}
                  required
                />
                <TextArea
                  label={t('admin.synopsis')}
                  value={translations[lang]?.synopsis ?? ''}
                  onChange={(v) => updateTr(lang, 'synopsis', v)}
                  rows={2}
                />
                <TextArea
                  label={t('admin.description')}
                  value={translations[lang]?.description ?? ''}
                  onChange={(v) => updateTr(lang, 'description', v)}
                  rows={3}
                />
                <TextField
                  label={t('admin.seoTitle')}
                  value={translations[lang]?.seoTitle ?? ''}
                  onChange={(v) => updateTr(lang, 'seoTitle', v)}
                />
                <TextField
                  label={t('admin.seoDescription')}
                  value={translations[lang]?.seoDescription ?? ''}
                  onChange={(v) => updateTr(lang, 'seoDescription', v)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-5 py-2.5 border border-white/10 hover:border-white/20 rounded-lg text-sm text-white/70 hover:text-white transition-colors"
          >
            {t('admin.cancel')}
          </button>
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="px-5 py-2.5 border border-white/10 hover:border-white/20 rounded-lg text-sm text-white/70 hover:text-white transition-colors disabled:opacity-50"
          >
            {saving ? t('admin.saving') : t('admin.saveDraft')}
          </button>
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Save className="w-4 h-4" />
            {saving ? t('admin.saving') : t('admin.publish')}
          </button>
        </div>
      </div>
    </div>
  );
}
