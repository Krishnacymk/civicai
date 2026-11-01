import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Sparkles, 
  Send, 
  RotateCcw, 
  ExternalLink, 
  AlertCircle,
  Mic,
  MicOff,
  Square,
  X,
  Landmark,
  ShieldCheck
} from 'lucide-react';
import { 
  type AssistantMessage, 
  sendQueryToAssistant 
} from '../services/assistantService';
import { useLanguage } from '../context/LanguageContext';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { ENABLED_GOVERNMENTS } from '../data/governments';

export const AssistantPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const { t, language, currentLanguageInfo } = useLanguage();

  const getStarterPrompts = useCallback((lang: string) => {
    if (lang === 'hi') {
      return [
        "कम आय वाले परिवार के कॉलेज छात्र के लिए छात्रवृत्ति योजनाएं",
        "छोटे दुकानदारों और कारीगरों के लिए सरकारी योजनाएं",
        "पीएम-किसान के लिए आवश्यक दस्तावेज़ क्या हैं?",
        "क्या बुजुर्गों को आयुष्मान भारत में मुफ्त इलाज मिलता है?",
        "गर्भवती महिलाओं के लिए क्या वित्तीय सहायता उपलब्ध है?",
        "परिवार के कमाने वाले की मृत्यु पर क्या सहायता मिलती है?"
      ];
    }
    if (lang === 'te') {
      return [
        "తక్కువ ఆదాయ కుటుంబ విద్యార్థులకు ఉన్న స్కాలర్‌షిప్ పథకాలు",
        "చిన్న వ్యాపారులు మరియు చేతివృత్తుల వారి కోసం ప్రభుత్వ పథకాలు",
        "పీఎం-కిసాన్ కోసం అవసరమైన పత్రాలు ఏమిటి?",
        "ఆయుష్మాన్ భారత్ ద్వారా వృద్ధులకు ఉచిత వైద్యం లభిస్తుందా?",
        "గర్భిణీ స్త్రీలకు లభించే ఆర్థిక సహాయం ఏమిటి?",
        "కుటుంబ పెద్ద మరణిస్తే లభించే అత్యవసర సహాయం ఏమిటి?"
      ];
    }
    if (lang === 'ta') {
      return [
        "குறைந்த வருமான குடும்ப கல்லூரி மாணவர்களுக்கான உதவித்தொகை திட்டங்கள்",
        "சிறு வியாபாரிகள் மற்றும் கைவினைஞர்களுக்கான அரசு திட்டங்கள்",
        "பிஎம்-கிசான் திட்டத்திற்கு என்னென்ன ஆவணங்கள் தேவை?",
        "ஆயுஷ்மான் பாரத் திட்டத்தில் முதியவர்களுக்கு இலவச சிகிச்சை கிடைக்குமா?",
        "கர்ப்பிணிப் பெண்களுக்கு வழங்கப்படும் நிதியுதவி என்ன?",
        "குடும்பத் தலைவர் மறைந்தால் கிடைக்கும் அவசர நிதியுதவி என்ன?"
      ];
    }
    return [
      "I am a college student from a low-income family looking for scholarship support",
      "Are there government schemes for small shopkeepers or artisans?",
      "What are the documents needed for PM-KISAN?",
      "Can senior citizens get free healthcare coverage under Ayushman Bharat?",
      "What financial support is available for pregnant women and new mothers?",
      "What schemes provide emergency financial help if a family breadwinner dies?"
    ];
  }, []);

  const createInitialMessage = useCallback((lang: string): AssistantMessage => {
    let followUps = [
      "I am a student looking for higher education fees support",
      "What schemes exist for small farmers?",
      "How do senior citizens get ₹5 Lakh free health cover?"
    ];
    if (lang === 'hi') {
      followUps = [
        "विद्यार्थियों के लिए छात्रवृत्ति और फीस माफी योजनाएं",
        "छोटे किसानों के लिए क्या सरकारी योजनाएं हैं?",
        "बुजुर्गों को ₹5 लाख का मुफ्त स्वास्थ्य कवर कैसे मिलता है?"
      ];
    } else if (lang === 'te') {
      followUps = [
        "విద్యార్థుల ఫీజు రీయింబర్స్‌మెంట్ మరియు స్కాలర్‌షిప్ పథకాలు",
        "చిన్న రైతులకు ఏ ప్రభుత్వ పథకాలు ఉన్నాయి?",
        "వృద్ధులకు ₹5 లక్షల ఉచిత ఆరోగ్య కవరేజీ ఎలా లభిస్తుంది?"
      ];
    } else if (lang === 'ta') {
      followUps = [
        "மாணவர்களுக்கான கல்வி உதவித்தொகை மற்றும் கட்டண சலுகை",
        "சிறு விவசாயிகளுக்கு என்னென்ன அரசு திட்டங்கள் உள்ளன?",
        "முதியவர்களுக்கு ₹5 லட்சம் இலவச மருத்துவ காப்பீடு எவ்வாறு கிடைக்கும்?"
      ];
    }

    return {
      id: 'welcome-msg',
      sender: 'assistant',
      timestamp: 'Just now',
      text: t('chat.welcomeText'),
      isDemonstrationMode: true,
      suggestedFollowUps: followUps
    };
  }, [t]);

  const [messages, setMessages] = useState<AssistantMessage[]>(() => [createInitialMessage(language)]);
  const [selectedGovernment, setSelectedGovernment] = useState<string>(searchParams.get('gov') || 'all');
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [speechError, setSpeechError] = useState<string | null>(null);
  const baseInputRef = useRef('');

  // Speech Recognition hook
  const {
    isListening,
    isSupported: isSpeechSupported,
    startListening,
    stopListening,
    cancelListening
  } = useSpeechRecognition({
    locale: currentLanguageInfo.speechLocale,
    onTranscriptChange: (transcriptText) => {
      const base = baseInputRef.current;
      const separator = base && !base.endsWith(' ') ? ' ' : '';
      setInputQuery(base ? `${base}${separator}${transcriptText}` : transcriptText);
    },
    onErrorChange: setSpeechError
  });

  const handleToggleVoice = () => {
    if (isListening) {
      stopListening();
    } else {
      setSpeechError(null);
      baseInputRef.current = inputQuery;
      startListening();
    }
  };

  const handleCancelVoice = () => {
    cancelListening();
    setInputQuery(baseInputRef.current);
    setSpeechError(null);
  };

  // Handle welcome message rendering dynamically via t('chat.welcomeText')

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = useCallback(async (queryText: string) => {
    const trimmed = queryText.trim();
    if (!trimmed || isLoading) return;

    if (isListening) {
      stopListening();
    }

    setErrorMessage(null);

    const userMessage: AssistantMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: trimmed
    };

    setMessages(prev => [...prev, userMessage]);
    setInputQuery('');
    setIsLoading(true);

    try {
      const response = await sendQueryToAssistant(trimmed, messages, language, selectedGovernment);
      setMessages(prev => [...prev, response]);
    } catch {
      setErrorMessage(
        language === 'hi' 
          ? "उत्तर उत्पन्न नहीं हो सका। कृपया अपना नेटवर्क जांचें या पुनः प्रयास करें।"
          : language === 'te'
          ? "సమాధానం పొందడం సాధ్యం కాలేదు. దయచేసి నెట్‌వర్క్ తనిఖీ చేసి మళ్లీ ప్రయత్నించండి."
          : language === 'ta'
          ? "பதில் பெற முடியவில்லை. உங்கள் இணைய இணைப்பை சரிபார்த்து மீண்டும் முயற்சிக்கவும்."
          : "We could not generate a response. Please check your network or try again."
      );
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, isListening, stopListening, messages, language, selectedGovernment]);

  const hasProcessedInitial = useRef(false);

  // Handle incoming query from URL parameter
  useEffect(() => {
    if (initialQuery && initialQuery.trim() !== '' && !hasProcessedInitial.current) {
      hasProcessedInitial.current = true;
      void handleSendMessage(initialQuery);
    }
  }, [initialQuery, handleSendMessage]);

  const handleResetConversation = () => {
    if (isListening) {
      stopListening();
    }
    setMessages([
      {
        ...createInitialMessage(language),
        id: `welcome-msg-${Date.now()}`
      }
    ]);
    setErrorMessage(null);
    setInputQuery('');
  };

  const starterPrompts = getStarterPrompts(language);

  // Voice recognition error message formatting
  const getSpeechErrorMessage = () => {
    if (!speechError) return null;
    if (speechError === 'unsupported' || !isSpeechSupported) return t('chat.voiceUnsupported');
    if (speechError === 'not-allowed') return t('chat.voiceDenied');
    if (speechError === 'no-speech') return t('chat.voiceNoSpeech');
    return `${t('chat.voiceError')} ${speechError}`;
  };

  const speechErrorMessage = getSpeechErrorMessage();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#FAF8F5] dark:bg-[#101412] flex flex-col justify-between transition-colors duration-200">
      
      {/* Header bar */}
      <div className="bg-white dark:bg-[#181D1A] border-b border-[#E7DFD4] dark:border-[#2C352F] py-3.5 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1A3B2B] dark:bg-[#24583F] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4 text-[#DFB24E]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif font-bold text-base text-[#161815] dark:text-[#F3EFEA]">{t('chat.title')}</h1>
                <span className="text-[10px] font-mono bg-[#EBF2ED] dark:bg-[#1F2C23] text-[#1A3B2B] dark:text-[#90C8A4] px-1.5 py-0.5 rounded font-semibold">
                  {t('chat.groundedBadge')}
                </span>
              </div>
              <p className="text-[11px] text-[#565C56] dark:text-[#A3ACA5]">
                {t('chat.subtitle')}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleResetConversation}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#565C56] dark:text-[#C5CDC6] hover:text-[#161815] dark:hover:text-white bg-[#FAF8F5] dark:bg-[#202622] hover:bg-[#EFE8DE] dark:hover:bg-[#28302B] border border-[#D5CABE] dark:border-[#2C352F] rounded-md transition-colors"
            title={t('chat.newConversation')}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('chat.newConversation')}</span>
          </button>
        </div>
      </div>

      {/* Government Context Selection Bar */}
      <div className="bg-[#FAF8F5] dark:bg-[#141916] border-b border-[#E7DFD4] dark:border-[#2C352F] py-2.5 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#565C56] dark:text-[#A3ACA5] shrink-0 mr-1">
            <Landmark className="w-3.5 h-3.5 text-[#B95938] dark:text-[#DFB24E]" />
            <span className="font-semibold">{t('nav.exploreGovernments')}:</span>
          </div>

          <button
            type="button"
            onClick={() => setSelectedGovernment('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors shrink-0 ${
              selectedGovernment === 'all'
                ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white shadow-xs'
                : 'bg-white dark:bg-[#1E2420] text-[#565C56] dark:text-[#C5CDC6] border border-[#D5CABE] dark:border-[#2C352F] hover:bg-[#EFE8DE] dark:hover:bg-[#28302B]'
            }`}
          >
            All Governments
          </button>

          {ENABLED_GOVERNMENTS.map(gov => {
            const isSelected = selectedGovernment === gov.id || selectedGovernment === gov.slug;
            const shortName = language === 'te' && gov.teluguName
              ? (gov.stateCode ? `${gov.stateCode} ప్రభుత్వం` : 'కేంద్రం')
              : language === 'hi' && gov.hindiName
              ? (gov.stateCode ? `${gov.stateCode} सरकार` : 'केंद्र सरकार')
              : language === 'ta' && gov.tamilName
              ? (gov.stateCode ? `${gov.stateCode} அரசு` : 'மத்திய அரசு')
              : (gov.level === 'central' ? 'Central (All India)' : gov.regionLabel);

            return (
              <button
                key={gov.id}
                type="button"
                onClick={() => setSelectedGovernment(gov.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white shadow-xs'
                    : 'bg-white dark:bg-[#1E2420] text-[#565C56] dark:text-[#C5CDC6] border border-[#D5CABE] dark:border-[#2C352F] hover:bg-[#EFE8DE] dark:hover:bg-[#28302B]'
                }`}
              >
                <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-black/10 dark:bg-white/10 font-bold">
                  {gov.stateCode || 'IN'}
                </span>
                <span>{shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Conversation Stream */}
      <div className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-2`}
          >
            {/* Sender Label & Timestamp */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#858D85] dark:text-[#8E978F] px-1">
              <span>{msg.sender === 'user' ? t('chat.you') : t('chat.guide')}</span>
              <span>•</span>
              <span>{msg.timestamp}</span>
              {msg.isDemonstrationMode && (
                <span className="text-[9px] uppercase px-1 rounded bg-[#EFE8DE] dark:bg-[#28302B] text-[#565C56] dark:text-[#A3ACA5]">
                  {language === 'hi' ? 'सत्यापित इंजन' : language === 'te' ? 'ధృవీకృత ఇంజిన్' : language === 'ta' ? 'சரிபார்க்கப்பட்ட தளம்' : 'Demonstration Engine'}
                </span>
              )}
            </div>

            {/* Message Bubble */}
            <div
              className={`max-w-2xl rounded-2xl p-5 shadow-xs space-y-4 ${
                msg.sender === 'user'
                  ? 'bg-[#1A3B2B] dark:bg-[#1D4A35] text-[#FAF8F5] rounded-br-none'
                  : 'bg-white dark:bg-[#181D1A] text-[#161815] dark:text-[#F3EFEA] border border-[#D5CABE] dark:border-[#2C352F] rounded-tl-none'
              }`}
            >
              {/* Message text with basic markdown bold & lists formatting */}
              <div className="text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {(msg.id.startsWith('welcome-msg') ? t('chat.welcomeText') : msg.text).split('\n').map((line, idx) => {
                  if (line.startsWith('• ') || line.startsWith('- ')) {
                    return (
                      <div key={idx} className="flex items-start gap-1.5 pl-2 my-0.5">
                        <span className="text-[#C69B32] dark:text-[#DFB24E] font-bold">•</span>
                        <span>{line.substring(2)}</span>
                      </div>
                    );
                  }
                  return <p key={idx} className="min-h-[1.2em]">{line}</p>;
                })}
              </div>

              {/* Matched Scheme Cards if returned by assistant */}
              {msg.matchedSchemes && msg.matchedSchemes.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-[#E7DFD4] dark:border-[#2C352F]">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A3B2B] dark:text-[#90C8A4]">
                    {t('chat.relevantSchemes')} ({msg.matchedSchemes.length})
                  </div>
                  <div className="space-y-2.5">
                    {msg.matchedSchemes.map(scheme => (
                      <div
                        key={scheme.id}
                        className="p-3.5 bg-[#FAF8F5] dark:bg-[#121614] rounded-lg border border-[#D5CABE] dark:border-[#2C352F] space-y-2.5 text-xs"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-1">
                            {/* Government & Verification Badge */}
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium ${
                                scheme.governmentLevel === 'central'
                                  ? 'bg-[#FAF3E2] dark:bg-[#252219] text-[#A07A18] dark:text-[#DFB24E] border border-[#E0D0AB] dark:border-[#383220]'
                                  : 'bg-[#EBF2ED] dark:bg-[#1A2E22] text-[#1A3B2B] dark:text-[#7A9984] border border-[#C5DAC9] dark:border-[#253D30]'
                              }`}>
                                🏛️ {scheme.administeringGovernment || (scheme.governmentLevel === 'central' ? 'Central Government' : scheme.stateApplicability)}
                              </span>
                              {scheme.officialSource?.verificationStatus === 'verified' && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#2A5A43] dark:text-[#7A9984] bg-[#EBF2ED] dark:bg-[#1A2E22] px-1.5 py-0.5 rounded border border-[#C5DAC9] dark:border-[#253D30]">
                                  <ShieldCheck className="w-2.5 h-2.5" />
                                  <span>Official</span>
                                </span>
                              )}
                            </div>

                            <Link
                              to={`/schemes/${scheme.id}`}
                              className="font-serif font-bold text-sm text-[#161815] dark:text-[#F3EFEA] hover:text-[#1A3B2B] dark:hover:text-[#90C8A4] hover:underline block"
                            >
                              {scheme.name}
                            </Link>
                            <div className="text-[11px] text-[#565C56] dark:text-[#A3ACA5]">
                              {scheme.categoryLabel} • {scheme.geographicScope}
                            </div>
                          </div>
                          <span className="font-serif font-bold text-[#1A3B2B] dark:text-[#DFB24E] shrink-0 text-right">
                            {scheme.financialBenefit}
                          </span>
                        </div>

                        <p className="text-xs text-[#565C56] dark:text-[#C5CDC6] leading-snug">
                          {scheme.shortSummary}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#E7DFD4]/60 dark:border-[#2C352F]/60">
                          <div className="flex items-center gap-2">
                            <Link
                              to={`/schemes/${scheme.id}`}
                              className="px-2.5 py-1 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded text-[11px] font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35]"
                            >
                              {t('schemes.viewDetails')}
                            </Link>
                            <Link
                              to={`/eligibility?scheme=${scheme.id}`}
                              className="px-2.5 py-1 bg-white dark:bg-[#202622] border border-[#D5CABE] dark:border-[#2C352F] text-[#161815] dark:text-[#F3EFEA] rounded text-[11px] font-semibold hover:bg-[#FAF8F5] dark:hover:bg-[#28302B]"
                            >
                              {t('schemes.checkEligibility')}
                            </Link>
                            <Link
                              to={`/checklist?scheme=${scheme.id}`}
                              className="px-2.5 py-1 bg-white dark:bg-[#202622] border border-[#C5DAC9] dark:border-[#2C352F] text-[#1A3B2B] dark:text-[#90C8A4] rounded text-[11px] font-semibold hover:bg-[#EBF2ED] dark:hover:bg-[#1E2E23]"
                            >
                              {t('schemes.docChecklist')}
                            </Link>
                          </div>

                          {scheme.officialSource?.url && (
                            <a
                              href={scheme.officialSource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#565C56] dark:text-[#A3ACA5] hover:text-[#1A3B2B] dark:hover:text-[#DFB24E] hover:underline"
                            >
                              <ExternalLink className="w-2.5 h-2.5" />
                              <span>{scheme.officialSource.name || 'Official Portal'}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Missing Evidence / Transparent Uncertainty Box */}
              {msg.missingEvidenceNotes && msg.missingEvidenceNotes.length > 0 && (
                <div className="p-3 bg-[#FAF3E2] dark:bg-[#262015] rounded-lg border border-[#E0D0AB] dark:border-[#4A3D25] space-y-1.5 text-xs text-[#565C56] dark:text-[#D5C5A8]">
                  <div className="font-semibold text-[#161815] dark:text-[#F3EFEA] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#B95938] dark:text-[#E07A5F]" />
                    <span>{t('chat.missingEvidence')}</span>
                  </div>
                  <ul className="space-y-1 pl-1 text-[11px]">
                    {msg.missingEvidenceNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#B95938] dark:text-[#E07A5F] font-bold">?</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Citations & Source Freshness */}
              {msg.citations && msg.citations.length > 0 && (
                <div className="pt-2 border-t border-[#E7DFD4] dark:border-[#2C352F] flex flex-wrap items-center gap-2 text-[11px] font-mono text-[#565C56] dark:text-[#A3ACA5]">
                  <span className="font-semibold text-[#1A3B2B] dark:text-[#90C8A4]">{t('chat.sources')}</span>
                  {msg.citations.map((cite, i) => (
                    <a
                      key={i}
                      href={cite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#1A3B2B] dark:text-[#90C8A4] hover:underline"
                    >
                      <span>{cite.name.split(',')[0]} ({cite.lastVerifiedDate})</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ))}
                </div>
              )}

            </div>

            {/* Suggested Follow-up chips */}
            {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1 max-w-2xl">
                {msg.suggestedFollowUps.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-left text-xs bg-white dark:bg-[#1E2420] border border-[#D5CABE] dark:border-[#2C352F] hover:border-[#1A3B2B] dark:hover:border-[#90C8A4] text-[#565C56] dark:text-[#D8DFD9] hover:text-[#161815] dark:hover:text-white px-3 py-1.5 rounded-full transition-colors shadow-2xs"
                  >
                    💬 {prompt}
                  </button>
                ))}
              </div>
            )}

          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-center gap-2 text-xs font-mono text-[#565C56] dark:text-[#C5CDC6] p-4 bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] max-w-sm">
            <Sparkles className="w-4 h-4 text-[#B95938] dark:text-[#DFB24E] animate-spin" />
            <span>{t('chat.consultingGazettes')}</span>
          </div>
        )}

        {/* Error message */}
        {errorMessage && (
          <div className="p-3.5 bg-[#FAECE7] dark:bg-[#2C1D18] text-[#B95938] dark:text-[#E07A5F] rounded-lg border border-[#ECCDC5] dark:border-[#52291E] text-xs flex items-center justify-between gap-3">
            <span>{errorMessage}</span>
            <button
              onClick={() => handleSendMessage(messages[messages.length - 1]?.text || 'Tell me about schemes')}
              className="font-semibold underline"
            >
              Retry
            </button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Starter Prompts Banner (shown when conversation is short) */}
      {messages.length <= 1 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-4 w-full">
          <div className="text-[11px] font-mono text-[#565C56] dark:text-[#A3ACA5] uppercase tracking-wider mb-2">
            {t('chat.suggestedInquiries')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {starterPrompts.slice(0, 4).map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="text-left p-2.5 rounded-lg bg-white dark:bg-[#181D1A] border border-[#D5CABE] dark:border-[#2C352F] hover:border-[#1A3B2B] dark:hover:border-[#DFB24E] text-xs text-[#161815] dark:text-[#EAE5DF] transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Voice Recognition Active Notification Banner */}
      {isListening && (
        <div className="bg-[#FAF3E2] dark:bg-[#262015] border-t border-[#E0D0AB] dark:border-[#4A3D25] px-4 py-2">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 text-xs text-[#161815] dark:text-[#F3EFEA]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="font-semibold">{t('chat.listening')}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[#565C56] dark:text-[#C5CDC6]">
                {currentLanguageInfo.speechLocale}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCancelVoice}
                className="text-[11px] px-2 py-1 bg-white dark:bg-[#1E2420] text-[#565C56] dark:text-[#C5CDC6] hover:text-[#161815] dark:hover:text-white border border-[#D5CABE] dark:border-[#2C352F] rounded"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={stopListening}
                className="text-[11px] px-2.5 py-1 bg-[#1A3B2B] text-white rounded font-medium hover:bg-[#122B1F] flex items-center gap-1"
              >
                <Square className="w-2.5 h-2.5 fill-current" />
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Voice Recognition Error Banner */}
      {speechErrorMessage && (
        <div className="bg-[#FAECE7] dark:bg-[#2C1D18] border-t border-[#ECCDC5] dark:border-[#52291E] px-4 py-2">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 text-xs text-[#B95938] dark:text-[#E07A5F]">
            <div className="flex items-center gap-2">
              <MicOff className="w-3.5 h-3.5 shrink-0" />
              <span>{speechErrorMessage}</span>
            </div>
            <button
              type="button"
              onClick={() => setSpeechError(null)}
              className="text-[#858D85] hover:text-[#161815] dark:hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Input Box Area */}
      <div className="bg-white dark:bg-[#181D1A] border-t border-[#E7DFD4] dark:border-[#2C352F] p-4 sm:p-5 sticky bottom-0">
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage(inputQuery);
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={inputQuery}
                onChange={e => setInputQuery(e.target.value)}
                disabled={isLoading}
                placeholder={t('chat.inputPlaceholder')}
                className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg pl-4 pr-11 py-3 text-sm text-[#161815] dark:text-[#F3EFEA] placeholder-[#858D85] dark:placeholder-[#6C766E] focus:outline-none focus:ring-2 focus:ring-[#1A3B2B]/20 dark:focus:ring-[#90C8A4]/20 focus:border-[#1A3B2B] dark:focus:border-[#90C8A4] transition-colors"
              />
              
              {/* Voice Microphone Toggle inside input */}
              <button
                type="button"
                onClick={handleToggleVoice}
                disabled={isLoading}
                title={isListening ? t('chat.stopVoice') : t('chat.startVoice')}
                aria-label={isListening ? t('chat.stopVoice') : t('chat.startVoice')}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md flex items-center justify-center transition-all ${
                  isListening
                    ? 'bg-red-600 text-white animate-pulse shadow-sm'
                    : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#1A3B2B] dark:hover:text-[#90C8A4] hover:bg-[#EFE8DE] dark:hover:bg-[#202622]'
                }`}
              >
                {isListening ? (
                  <Square className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading || !inputQuery.trim()}
              className="px-5 py-3 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-lg text-sm font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 shadow-xs shrink-0"
            >
              <span>{t('chat.send')}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#858D85] dark:text-[#7A837C] px-1 font-mono gap-1">
            <span>{t('chat.demoModeNotice')}</span>
            <span>{t('chat.zeroDataNotice')}</span>
          </div>
        </div>
      </div>

    </div>
  );
};
