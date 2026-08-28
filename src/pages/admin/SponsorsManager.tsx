import { useEffect, useState, useCallback } from 'react';
import { Plus, Pencil, Trash2, ArrowLeft, Save } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { navigate } from '@/lib/router';
import type { Sponsor, Language } from '@/lib/types';
import { fetchAllSponsors, createSponsor, updateSponsor, deleteSponsor, type SponsorInput } from '@/lib/adminApi';
import { ImageUpload, TextField, TextArea, Toggle, ConfirmDialog } from '@/components/admin/FormFields';

export function SponsorsManager() {
  const { t } = useLanguage();
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Sponsor | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Sponsor | null>(null);
  const [deleting, setDeleting] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setSponsors(await fetchAllSponsors());
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    await deleteSponsor(deleteTarget.id);
    setDeleting(false);
    setDeleteTarget(null);
    load();
  };

  if (showForm) {
    return (
      <SponsorForm
        existing={editing}
        titleLabel={editing ? t('admin.editSponsor') : t('admin.newSponsor')}
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
          <h1 className="text-2xl font-bold text-white">{t('admin.sponsors')}</h1>
        </div>
        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          {t('admin.newSponsor')}
        </button>
      </div>

      {loading ? (
        <p className="text-white/40">{t('admin.loading')}</p>
      ) : sponsors.length > 0 ? (
        <div className="space-y-2">
          {sponsors.map((s) => (
            <div
              key={s.id}
              className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-zinc-900/30 hover:border-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800 flex items-center justify-center">
                {s.logo ? (
                  <img src={s.logo} alt="" className="w-full h-full object-contain p-1" />
                ) : (
                  <span className="text-white/20 text-xs">{s.name.slice(0, 2).toUpperCase()}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white truncate">{s.name}</p>
                <p className="text-xs text-white/40 truncate">{s.link}</p>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  s.link ? 'bg-green-600/15 text-green-400' : 'bg-zinc-600/15 text-zinc-400'
                }`}
              >
                {s.translations.en?.label || s.name}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setEditing(s);
                    setShowForm(true);
                  }}
                  className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDeleteTarget(s)}
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
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            {t('admin.newSponsor')}
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

function SponsorForm({
  existing,
  titleLabel,
  onCancel,
  onSaved,
}: {
  existing: Sponsor | null;
  titleLabel: string;
  onCancel: () => void;
  onSaved: () => void;
}) {
  const { t } = useLanguage();
  const [name, setName] = useState(existing?.name ?? '');
  const [logo, setLogo] = useState(existing?.logo ?? '');
  const [banner, setBanner] = useState(existing?.banner ?? '');
  const [link, setLink] = useState(existing?.link ?? '');
  const [isActive, setIsActive] = useState(
    existing ? existing.link !== '' : true
  );
  const [translations, setTranslations] = useState<
    Record<Language, { label: string; message: string }>
  >(
    existing?.translations ?? {
      hy: { label: '', message: '' },
      ru: { label: '', message: '' },
      en: { label: '', message: '' },
    }
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const langLabels: Record<Language, string> = { hy: 'Հայերեն', ru: 'Русский', en: 'English' };

  const updateTr = (lang: Language, field: 'label' | 'message', value: string) => {
    setTranslations((prev) => ({ ...prev, [lang]: { ...prev[lang], [field]: value } }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);

    const input: SponsorInput = {
      name,
      logo: logo || undefined,
      banner: banner || undefined,
      link,
      isActive,
      translations,
    };

    const result = existing ? await updateSponsor(existing.id, input) : await createSponsor(input);

    if (result.error) {
      setError(result.error);
      setSaving(false);
    } else {
      onSaved();
    }
  };

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
        <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/30 space-y-4">
          <TextField label={t('admin.sponsorName')} value={name} onChange={setName} required />
          <ImageUpload label={t('admin.sponsorLogo')} value={logo} onChange={setLogo} folder="sponsors" />
          <ImageUpload label={t('admin.sponsorBanner')} value={banner} onChange={setBanner} folder="sponsors" />
          <TextField label={t('admin.sponsorLink')} value={link} onChange={setLink} placeholder="https://..." />
          <Toggle label={t('admin.sponsorActive')} checked={isActive} onChange={setIsActive} />
        </div>

        <div className="p-5 rounded-xl border border-white/5 bg-zinc-900/30">
          <h3 className="text-sm font-semibold text-white/70 mb-1">{t('admin.translations')}</h3>
          <p className="text-xs text-white/40 mb-4">{t('admin.translationsHint')}</p>
          <div className="space-y-4">
            {(['hy', 'ru', 'en'] as Language[]).map((lang) => (
              <div key={lang} className="p-4 rounded-lg bg-zinc-950/50 border border-white/5 space-y-3">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider">{langLabels[lang]}</p>
                <TextField
                  label={t('admin.sponsorLabel')}
                  value={translations[lang]?.label ?? ''}
                  onChange={(v) => updateTr(lang, 'label', v)}
                />
                <TextArea
                  label={t('admin.sponsorMessage')}
                  value={translations[lang]?.message ?? ''}
                  onChange={(v) => updateTr(lang, 'message', v)}
                  rows={2}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-5 py-2.5 border border-white/10 hover:border-white/20 rounded-lg text-sm text-white/70 hover:text-white transition-colors"
          >
            {t('admin.cancel')}
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Save className="w-4 h-4" />
            {saving ? t('admin.saving') : t('admin.save')}
          </button>
        </div>
      </div>
    </div>
  );
}
