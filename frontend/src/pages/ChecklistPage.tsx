import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  RotateCcw, 
  Printer, 
  ExternalLink, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { SCHEMES } from '../data/schemes';
import type { Scheme } from '../types/scheme';
import { useLanguage } from '../context/LanguageContext';

interface SchemeChecklistContentProps {
  scheme: Scheme;
}

const SchemeChecklistContent = ({ scheme }: SchemeChecklistContentProps) => {
  const { t } = useLanguage();
  const [checkedDocIds, setCheckedDocIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(`civicai_checklist_${scheme.id}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleDoc = (id: string) => {
    const updated = checkedDocIds.includes(id)
      ? checkedDocIds.filter(item => item !== id)
      : [...checkedDocIds, id];

    setCheckedDocIds(updated);
    try {
      localStorage.setItem(`civicai_checklist_${scheme.id}`, JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  };

  const handleResetChecklist = () => {
    setCheckedDocIds([]);
    try {
      localStorage.removeItem(`civicai_checklist_${scheme.id}`);
    } catch (e) {
      console.warn("Could not remove from localStorage", e);
    }
  };

  const handleMarkAll = () => {
    const allIds = scheme.requiredDocuments.map(d => d.id);
    setCheckedDocIds(allIds);
    try {
      localStorage.setItem(`civicai_checklist_${scheme.id}`, JSON.stringify(allIds));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const totalDocs = scheme.requiredDocuments.length;
  const completedCount = scheme.requiredDocuments.filter(d => checkedDocIds.includes(d.id)).length;
  const percentage = totalDocs > 0 ? Math.round((completedCount / totalDocs) * 100) : 0;

  return (
    <div className="space-y-6 print-area">
      {/* Scheme Header Information Card */}
      <div className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E7DFD4] dark:border-[#2C352F] pb-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 font-mono text-[10px] font-semibold bg-[#EBF2ED] dark:bg-[#1F2C23] text-[#1A3B2B] dark:text-[#90C8A4] rounded">
              {scheme.categoryLabel}
            </span>
            <span className="text-[#565C56] dark:text-[#A3ACA5] font-mono text-[11px]">
              {scheme.geographicScope}
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#858D85] dark:text-[#8E978F]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2A5A43] dark:text-[#90C8A4]" />
            <span>Verified: {scheme.officialSource.lastVerifiedDate}</span>
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="font-serif font-bold text-2xl text-[#161815] dark:text-[#F3EFEA]">{scheme.name}</h2>
          <p className="text-xs text-[#565C56] dark:text-[#A3ACA5]">{scheme.tagline}</p>
        </div>

        {/* Progress Bar & Actions */}
        <div className="p-4 bg-[#FAF8F5] dark:bg-[#121614] rounded-xl border border-[#E7DFD4] dark:border-[#2C352F] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#1A3B2B] dark:text-[#90C8A4]" />
              <span className="font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('checklist.progressTitle')}</span>
            </div>
            <span className="font-mono text-xs font-bold text-[#1A3B2B] dark:text-[#DFB24E]">
              {completedCount} of {totalDocs} {t('checklist.preparedCount')} ({percentage}%)
            </span>
          </div>

          <div className="w-full bg-[#E5DCCE] dark:bg-[#2C352F] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#1A3B2B] dark:bg-[#DFB24E] h-full transition-all duration-300 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between pt-1 no-print">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleMarkAll}
                className="text-xs text-[#1A3B2B] dark:text-[#90C8A4] hover:underline font-medium"
              >
                {t('checklist.markAllReady')}
              </button>
              <span className="text-[#D5CABE] dark:text-[#4A544D]">•</span>
              <button
                type="button"
                onClick={handleResetChecklist}
                className="text-xs text-[#B95938] dark:text-[#E07A5F] hover:underline font-medium flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t('checklist.reset')}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#202622] border border-[#D5CABE] dark:border-[#2C352F] rounded-md text-xs font-semibold text-[#161815] dark:text-[#F3EFEA] hover:bg-[#FAF8F5] dark:hover:bg-[#28302B] shadow-2xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#565C56] dark:text-[#A3ACA5]" />
              <span>{t('checklist.printSave')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Documents List */}
      <div className="space-y-3">
        {scheme.requiredDocuments.map((doc, idx) => {
          const isChecked = checkedDocIds.includes(doc.id);

          return (
            <div
              key={doc.id}
              onClick={() => toggleDoc(doc.id)}
              className={`cursor-pointer rounded-xl border p-5 transition-all flex items-start gap-4 select-none ${
                isChecked
                  ? 'border-[#2A5A43] dark:border-[#3E7D5F] bg-[#FAFDFB] dark:bg-[#141F18] shadow-2xs'
                  : 'bg-white dark:bg-[#181D1A] border-[#D5CABE] dark:border-[#2C352F] hover:border-[#1A3B2B]/60 dark:hover:border-[#90C8A4]/60'
              }`}
            >
              {/* Custom Checkbox */}
              <div className="mt-1 shrink-0">
                {isChecked ? (
                  <div className="w-5 h-5 rounded bg-[#1A3B2B] dark:bg-[#24583F] text-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded border-2 border-[#D5CABE] dark:border-[#4B554F] hover:border-[#1A3B2B] dark:hover:border-[#90C8A4] bg-white dark:bg-[#121614]" />
                )}
              </div>

              {/* Document Details */}
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3
                    className={`font-serif text-base font-bold transition-colors ${
                      isChecked 
                        ? 'text-[#1A3B2B] dark:text-[#90C8A4] line-through decoration-[#1A3B2B]/40' 
                        : 'text-[#161815] dark:text-[#F3EFEA]'
                    }`}
                  >
                    {idx + 1}. {doc.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                      doc.isMandatory
                        ? 'bg-[#FAECE7] dark:bg-[#2C1D18] text-[#B95938] dark:text-[#E07A5F] font-semibold'
                        : 'bg-[#EFE8DE] dark:bg-[#242A26] text-[#565C56] dark:text-[#A3ACA5]'
                    }`}
                  >
                    {doc.isMandatory ? t('checklist.mandatory') : t('checklist.conditional')}
                  </span>
                </div>

                <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                  <strong className="text-[#161815] dark:text-[#F3EFEA]">{t('detail.purpose')}</strong> {doc.purpose}
                </p>

                <div className="p-2.5 bg-[#FAF8F5] dark:bg-[#121614] rounded border border-[#E7DFD4] dark:border-[#2C352F] text-[11px] text-[#4E6352] dark:text-[#A3C4AC] flex items-start gap-2">
                  <span className="font-bold text-[#1A3B2B] dark:text-[#90C8A4] shrink-0">{t('detail.citizenAdvice')}</span>
                  <span className="leading-snug">{doc.citizenTip}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Verification Reminder Notice */}
      <div className="p-4 rounded-xl bg-[#FAF3E2] dark:bg-[#262015] border border-[#E0D0AB] dark:border-[#4A3D25] text-xs text-[#565C56] dark:text-[#D5C5A8] flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-[#B95938] dark:text-[#E07A5F] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-[#161815] dark:text-[#F3EFEA]">
            {t('checklist.verifyReminderTitle')}
          </span>
          <p className="leading-relaxed">
            {t('checklist.verifyReminderText')} (<a href={scheme.officialSource.url} target="_blank" rel="noopener noreferrer" className="font-mono text-[#1A3B2B] dark:text-[#90C8A4] underline">{scheme.officialSource.url}</a>).
          </p>
        </div>
      </div>

      {/* Bottom Actions Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 no-print">
        <Link
          to={`/schemes/${scheme.id}`}
          className="text-xs font-semibold text-[#1A3B2B] dark:text-[#90C8A4] hover:underline"
        >
          {t('checklist.viewRulesLink')}
        </Link>

        <a
          href={scheme.officialSource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-lg text-xs font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35]"
        >
          <span>{t('checklist.proceedToOfficial')}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export const ChecklistPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSchemeId = searchParams.get('scheme') || SCHEMES[0].id;
  const { t } = useLanguage();

  const scheme = SCHEMES.find(s => s.id === currentSchemeId) || SCHEMES[0];

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#101412] pb-24 transition-colors duration-200">
      {/* Header Banner */}
      <section className="bg-white dark:bg-[#181D1A] border-b border-[#E7DFD4] dark:border-[#2C352F] pt-8 pb-10 no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#565C56] dark:text-[#A3ACA5]">
            <Link to="/" className="hover:underline">{t('nav.home')}</Link>
            <span>/</span>
            <span className="text-[#1A3B2B] dark:text-[#90C8A4] font-semibold">{t('nav.checklist')}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight">
                {t('checklist.title')}
              </h1>
              <p className="text-sm text-[#565C56] dark:text-[#A3ACA5] mt-1 leading-relaxed">
                {t('checklist.subtitle')}
              </p>
            </div>

            {/* Scheme Selector Dropdown */}
            <div className="sm:w-72">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#565C56] dark:text-[#A3ACA5] block mb-1">
                {t('checklist.selectSchemeLabel')}
              </label>
              <select
                value={scheme.id}
                onChange={e => {
                  searchParams.set('scheme', e.target.value);
                  setSearchParams(searchParams);
                }}
                className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg px-3 py-2 text-xs text-[#161815] dark:text-[#F3EFEA] font-semibold focus:outline-none focus:ring-2 focus:ring-[#1A3B2B]/20 dark:focus:ring-[#90C8A4]/20"
              >
                {SCHEMES.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Checklist Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <SchemeChecklistContent key={scheme.id} scheme={scheme} />
      </div>
    </div>
  );
};
