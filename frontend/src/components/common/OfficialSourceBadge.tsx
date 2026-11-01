import { ExternalLink, ShieldCheck, AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import type { OfficialSource } from '../../types/scheme';

interface OfficialSourceBadgeProps {
  source: OfficialSource;
  compact?: boolean;
}

export const OfficialSourceBadge = ({ source, compact = false }: OfficialSourceBadgeProps) => {
  if (compact) {
    return (
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium text-[#1A3B2B] dark:text-[#90C8A4] bg-[#EBF2ED] dark:bg-[#18261E] border border-[#C5DAC9] dark:border-[#253D30] rounded hover:bg-[#DDEBDF] dark:hover:bg-[#22362A] transition-colors"
        title="Open verified official department portal in a new tab"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-[#1A3B2B] dark:text-[#90C8A4]" />
        <span>Official Portal</span>
        <ExternalLink className="w-3 h-3 text-[#4E6352] dark:text-[#90C8A4]" />
      </a>
    );
  }

  const isVerified = source.verificationStatus === 'verified';

  return (
    <div className="bg-[#FAF8F5] dark:bg-[#181D1A] border border-[#D5CABE] dark:border-[#2C352F] rounded-xl p-4 text-xs text-[#161815] dark:text-[#F3EFEA] transition-colors space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
            isVerified 
              ? 'bg-[#EBF2ED] dark:bg-[#1E2E24] text-[#1A3B2B] dark:text-[#90C8A4]' 
              : 'bg-[#FAF3E2] dark:bg-[#262015] text-[#A07A18] dark:text-[#DFB24E]'
          }`}>
            {isVerified ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-[#1A3B2B] dark:text-[#F3EFEA]">
                {isVerified ? 'Verified Official Government Authority' : 'Partially Verified Source'}
              </span>
              <span className="font-mono text-[10px] bg-[#EFE8DE] dark:bg-[#232A25] px-1.5 py-0.5 rounded text-[#565C56] dark:text-[#A3ACA5]">
                Verified: {source.lastVerifiedDate}
              </span>
            </div>
            <p className="text-xs text-[#565C56] dark:text-[#C5CDC6] font-medium">{source.department}</p>
            <p className="text-[11px] text-[#858D85] dark:text-[#A3ACA5] font-mono">{source.name}</p>
            {source.helpline && (
              <p className="text-[#1A3B2B] dark:text-[#DFB24E] font-mono text-[11px] pt-0.5">
                Citizen Helpline: <span className="font-semibold">{source.helpline}</span>
              </p>
            )}
            {source.verificationNotes && (
              <p className="text-[11px] text-[#4E6352] dark:text-[#90C8A4] pt-0.5 italic">
                Note: {source.verificationNotes}
              </p>
            )}
          </div>
        </div>

        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 shrink-0 px-4 py-2 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-lg text-xs font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] transition-colors shadow-xs"
        >
          <span>Visit Official Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="pt-2.5 border-t border-[#E7DFD4] dark:border-[#2C352F] flex items-center gap-2 text-[11px] text-[#565C56] dark:text-[#A3ACA5]">
        <AlertCircle className="w-3.5 h-3.5 text-[#B95938] dark:text-[#E07A5F] shrink-0" />
        <span>You are navigating to an external government ministry portal (<code className="font-mono">{source.url}</code>). CivicAI never processes official applications or collects biometric/identity records.</span>
      </div>
    </div>
  );
};
