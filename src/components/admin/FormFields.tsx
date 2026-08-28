import { useRef, useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { uploadImage } from '@/lib/imageUpload';
import { useLanguage } from '@/lib/LanguageContext';

export function ImageUpload({
  label,
  value,
  onChange,
  folder,
}: {
  label: string;
  value?: string;
  onChange: (url: string) => void;
  folder: string;
}) {
  const { t } = useLanguage();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    setError(null);
    const url = await uploadImage(file, folder);
    if (url) {
      onChange(url);
    } else {
      setError(t('admin.uploadError'));
    }
    setUploading(false);
  };

  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-white/40 block mb-1.5">
        {label}
      </label>
      <div className="flex items-start gap-3">
        <div className="w-24 h-24 rounded-lg border border-white/10 bg-zinc-900 overflow-hidden flex-shrink-0 relative">
          {value ? (
            <>
              <img src={value} alt="" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => onChange('')}
                className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/70 flex items-center justify-center hover:bg-black/90"
              >
                <X className="w-3 h-3 text-white" />
              </button>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-white/20" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
              e.target.value = '';
            }}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-white/20 rounded-lg text-sm text-white/70 hover:text-white transition-colors disabled:opacity-50"
          >
            <Upload className="w-4 h-4" />
            {uploading ? t('admin.uploading') : t('admin.uploadImage')}
          </button>
          {error && <p className="text-xs text-red-400 mt-1.5">{error}</p>}
          <input
            type="text"
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value)}
            placeholder="https://..."
            className="w-full mt-2 px-3 py-2 bg-zinc-900 border border-white/10 rounded-lg text-white text-sm focus:border-red-600/50 focus:outline-none transition-colors"
          />
        </div>
      </div>
    </div>
  );
}

export function TextField({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-white/40 block mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 bg-zinc-900 border border-white/10 rounded-lg text-white text-sm focus:border-red-600/50 focus:outline-none transition-colors"
      />
    </div>
  );
}

export function TextArea({
  label,
  value,
  onChange,
  rows = 3,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-white/40 block mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className="w-full px-4 py-2.5 bg-zinc-900 border border-white/10 rounded-lg text-white text-sm focus:border-red-600/50 focus:outline-none transition-colors resize-y"
      />
    </div>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-white/40 block mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 bg-zinc-900 border border-white/10 rounded-lg text-white text-sm focus:border-red-600/50 focus:outline-none transition-colors"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative w-10 h-6 rounded-full transition-colors ${
          checked ? 'bg-red-600' : 'bg-zinc-700'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
            checked ? 'translate-x-4' : ''
          }`}
        />
      </button>
      <span className="text-sm text-white/70">{label}</span>
    </label>
  );
}

export function ConfirmDialog({
  open,
  message,
  onConfirm,
  onCancel,
  busy,
}: {
  open: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  busy?: boolean;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-zinc-950 p-6">
        <p className="text-sm text-white/70 leading-relaxed mb-6">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            disabled={busy}
            className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={busy}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {busy ? '...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
