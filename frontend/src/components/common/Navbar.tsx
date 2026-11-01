import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  Menu, 
  X, 
  Globe, 
  CheckSquare, 
  Search, 
  Compass, 
  Shield, 
  ChevronDown,
  Sun,
  Moon,
  Laptop
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme, type Theme } from '../../context/ThemeContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [schemesDropdownOpen, setSchemesDropdownOpen] = useState(false);

  const { language, setLanguage, t, currentLanguageInfo, languages } = useLanguage();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const location = useLocation();
  const langRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const schemesRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setSchemesDropdownOpen(false);
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setThemeDropdownOpen(false);
      }
      if (schemesRef.current && !schemesRef.current.contains(e.target as Node)) {
        setSchemesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
    { value: 'light', label: t('nav.themeLight'), icon: Sun },
    { value: 'dark', label: t('nav.themeDark'), icon: Moon },
    { value: 'system', label: t('nav.themeSystem'), icon: Laptop }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 dark:bg-[#101412]/95 backdrop-blur-md border-b border-[#E7DFD4] dark:border-[#232A25] transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Wordmark */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-lg bg-[#1A3B2B] dark:bg-[#183325] border border-[#C69B32]/40 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                <path d="M14 36H34" stroke="#FAF8F5" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M17 32H31" stroke="#FAF8F5" strokeWidth="1.8" strokeLinecap="round"/>
                <path d="M19 32V20" stroke="#FAF8F5" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M24 32V20" stroke="#DFB24E" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M29 32V20" stroke="#FAF8F5" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M15 19L24 12L33 19H15Z" fill="#DFB24E"/>
                <circle cx="24" cy="8.5" r="1.8" fill="#FAF8F5"/>
              </svg>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif font-bold text-2xl text-[#161815] dark:text-[#F3EFEA] tracking-tight">CivicAI</span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider bg-[#EFE8DE] dark:bg-[#1F2622] text-[#4E6352] dark:text-[#9FB3A5] rounded border border-[#D5CABE]/50 dark:border-[#2C352F]">
                  {t('nav.citizenGuide')}
                </span>
              </div>
              <p className="text-[11px] text-[#565C56] dark:text-[#A3ACA5] font-medium tracking-wide">
                {t('nav.tagline')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            
            {/* Explore Schemes Dropdown */}
            <div className="relative" ref={schemesRef}>
              <button
                type="button"
                onClick={() => setSchemesDropdownOpen(!schemesDropdownOpen)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith('/schemes')
                    ? 'text-[#1A3B2B] dark:text-[#E2D8C9] bg-[#EAE3D6] dark:bg-[#1F2622] font-semibold'
                    : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
                }`}
              >
                <span>{t('nav.exploreSchemes')}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${schemesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {schemesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-xl bg-[#FFFFFF] dark:bg-[#181D1A] border border-[#D5CABE] dark:border-[#2C352F] shadow-lg py-2 z-50 animate-fade-in-fast">
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#858D85] dark:text-[#737D75]">
                    Select Government Portal
                  </div>
                  
                  <Link
                    to="/schemes/central"
                    onClick={() => setSchemesDropdownOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs hover:bg-[#FAF8F5] dark:hover:bg-[#232A25] transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-[#161815] dark:text-[#F3EFEA]">Central Government</div>
                      <div className="text-[10px] text-[#858D85]">All India • 25 Schemes</div>
                    </div>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#FAF3E2] text-[#A07A18]">IN</span>
                  </Link>

                  <Link
                    to="/schemes/andhra-pradesh"
                    onClick={() => setSchemesDropdownOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs hover:bg-[#FAF8F5] dark:hover:bg-[#232A25] transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-[#161815] dark:text-[#F3EFEA]">Andhra Pradesh</div>
                      <div className="text-[10px] text-[#858D85]">Amaravati • 4 Schemes</div>
                    </div>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#EBF2ED] text-[#1A3B2B]">AP</span>
                  </Link>

                  <Link
                    to="/schemes/telangana"
                    onClick={() => setSchemesDropdownOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs hover:bg-[#FAF8F5] dark:hover:bg-[#232A25] transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-[#161815] dark:text-[#F3EFEA]">Telangana</div>
                      <div className="text-[10px] text-[#858D85]">Hyderabad • 5 Schemes</div>
                    </div>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#EBF2ED] text-[#1A3B2B]">TG</span>
                  </Link>

                  <Link
                    to="/schemes/tamil-nadu"
                    onClick={() => setSchemesDropdownOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-xs hover:bg-[#FAF8F5] dark:hover:bg-[#232A25] transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-[#161815] dark:text-[#F3EFEA]">Tamil Nadu</div>
                      <div className="text-[10px] text-[#858D85]">Chennai • 5 Schemes</div>
                    </div>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#EBF2ED] text-[#1A3B2B]">TN</span>
                  </Link>

                  <div className="border-t border-[#E7DFD4] dark:border-[#232A25] my-1 pt-1">
                    <Link
                      to="/schemes"
                      onClick={() => setSchemesDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-xs text-[#1A3B2B] dark:text-[#DFB24E] font-semibold hover:bg-[#FAF8F5] dark:hover:bg-[#232A25] transition-colors"
                    >
                      <span>All 39 Unified Schemes</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/assistant"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? 'text-[#1A3B2B] dark:text-[#E2D8C9] bg-[#EAE3D6] dark:bg-[#1F2622] font-semibold'
                    : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
                }`
              }
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B95938] dark:text-[#DFB24E]" />
              <span>{t('nav.aiGuide')}</span>
            </NavLink>

            <NavLink
              to="/eligibility"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? 'text-[#1A3B2B] dark:text-[#E2D8C9] bg-[#EAE3D6] dark:bg-[#1F2622] font-semibold'
                    : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
                }`
              }
            >
              <Compass className="w-3.5 h-3.5 text-[#4E6352] dark:text-[#7A9984]" />
              <span>{t('nav.eligibility')}</span>
            </NavLink>

            <NavLink
              to="/checklist"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? 'text-[#1A3B2B] dark:text-[#E2D8C9] bg-[#EAE3D6] dark:bg-[#1F2622] font-semibold'
                    : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
                }`
              }
            >
              <CheckSquare className="w-3.5 h-3.5 text-[#1A3B2B] dark:text-[#7A9984]" />
              <span>{t('nav.checklists')}</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? 'text-[#1A3B2B] dark:text-[#E2D8C9] bg-[#EAE3D6] dark:bg-[#1F2622] font-semibold'
                    : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
                }`
              }
            >
              <Shield className="w-3.5 h-3.5 text-[#565C56] dark:text-[#A3ACA5]" />
              <span>{t('nav.trustMethod')}</span>
            </NavLink>
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Theme Toggle Dropdown */}
            <div className="relative" ref={themeRef}>
              <button
                type="button"
                onClick={() => {
                  setThemeDropdownOpen(!themeDropdownOpen);
                  setLangDropdownOpen(false);
                }}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-[#565C56] dark:text-[#A3ACA5] bg-[#FAF8F5] dark:bg-[#181D1A] border border-[#D5CABE] dark:border-[#2C352F] rounded-md hover:bg-[#EFE8DE] dark:hover:bg-[#232A25] transition-colors"
                title={`${t('nav.theme')}: ${theme}`}
                aria-label="Theme selector"
              >
                {resolvedTheme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 text-[#DFB24E]" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-[#C69B32]" />
                )}
                <span className="capitalize hidden lg:inline">{theme}</span>
                <ChevronDown className="w-3 h-3 text-[#565C56] dark:text-[#A3ACA5]" />
              </button>

              {themeDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-40 bg-white dark:bg-[#181D1A] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-3 py-1 text-[10px] font-mono text-[#565C56] dark:text-[#858D85] uppercase tracking-wider border-b border-[#E7DFD4] dark:border-[#232A25]">
                    {t('nav.theme')}
                  </div>
                  {themeOptions.map(opt => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setTheme(opt.value);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs hover:bg-[#FAF8F5] dark:hover:bg-[#232A25] transition-colors flex items-center justify-between ${
                          theme === opt.value
                            ? 'font-semibold text-[#1A3B2B] dark:text-[#DFB24E] bg-[#EBF2ED] dark:bg-[#1E2620]'
                            : 'text-[#161815] dark:text-[#F3EFEA]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{opt.label}</span>
                        </div>
                        {theme === opt.value && <span className="w-1.5 h-1.5 rounded-full bg-[#1A3B2B] dark:bg-[#DFB24E]"></span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Language Switcher Pill */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setThemeDropdownOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#565C56] dark:text-[#A3ACA5] bg-[#FAF8F5] dark:bg-[#181D1A] border border-[#D5CABE] dark:border-[#2C352F] rounded-md hover:bg-[#EFE8DE] dark:hover:bg-[#232A25] transition-colors"
                title={t('nav.selectLanguage')}
                aria-label="Language selector"
              >
                <Globe className="w-3.5 h-3.5 text-[#4E6352] dark:text-[#7A9984]" />
                <span className="font-medium">{currentLanguageInfo.nativeName.split(' ')[0]}</span>
                <ChevronDown className="w-3 h-3 text-[#565C56] dark:text-[#A3ACA5]" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-48 bg-white dark:bg-[#181D1A] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-3 py-1.5 text-[10px] font-mono text-[#565C56] dark:text-[#858D85] uppercase tracking-wider border-b border-[#E7DFD4] dark:border-[#232A25]">
                    {t('nav.selectLanguage')}
                  </div>
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs hover:bg-[#FAF8F5] dark:hover:bg-[#232A25] transition-colors flex items-center justify-between ${
                        language === lang.code
                          ? 'font-semibold text-[#1A3B2B] dark:text-[#DFB24E] bg-[#EBF2ED] dark:bg-[#1E2620]'
                          : 'text-[#161815] dark:text-[#F3EFEA]'
                      }`}
                    >
                      <span>{lang.nativeName}</span>
                      {language === lang.code && <span className="w-1.5 h-1.5 rounded-full bg-[#1A3B2B] dark:bg-[#DFB24E]"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Ask CTA */}
            <Link
              to="/assistant"
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#1A3B2B] dark:bg-[#244E39] text-[#FAF8F5] rounded-md text-xs font-semibold tracking-wide hover:bg-[#122B1F] dark:hover:bg-[#1A3B2B] border border-[#1A3B2B] dark:border-[#244E39] shadow-xs transition-all hover:shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFB24E]" />
              <span>{t('nav.askCivicAI')}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#161815] dark:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E7DFD4] dark:border-[#232A25] bg-[#FAF8F5] dark:bg-[#101412] px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            <Link
              to="/schemes"
              onClick={closeMenu}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                location.pathname === '/schemes'
                  ? 'bg-[#EAE3D6] dark:bg-[#1F2622] text-[#1A3B2B] dark:text-[#DFB24E] font-semibold'
                  : 'text-[#161815] dark:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
              }`}
            >
              <Search className="w-4 h-4 text-[#4E6352] dark:text-[#7A9984]" />
              <span>{t('nav.exploreSchemes')}</span>
            </Link>

            {/* Sub-links for 4 Government Portals */}
            <div className="pl-6 space-y-1 pt-1 pb-1">
              <Link
                to="/schemes/central"
                onClick={closeMenu}
                className="flex items-center justify-between px-3 py-1.5 rounded text-xs text-[#565C56] dark:text-[#A3ACA5] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]"
              >
                <span>Central Government</span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-[#FAF3E2] text-[#A07A18]">IN • 25</span>
              </Link>
              <Link
                to="/schemes/andhra-pradesh"
                onClick={closeMenu}
                className="flex items-center justify-between px-3 py-1.5 rounded text-xs text-[#565C56] dark:text-[#A3ACA5] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]"
              >
                <span>Andhra Pradesh</span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-[#EBF2ED] text-[#1A3B2B]">AP • 4</span>
              </Link>
              <Link
                to="/schemes/telangana"
                onClick={closeMenu}
                className="flex items-center justify-between px-3 py-1.5 rounded text-xs text-[#565C56] dark:text-[#A3ACA5] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]"
              >
                <span>Telangana</span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-[#EBF2ED] text-[#1A3B2B]">TG • 5</span>
              </Link>
              <Link
                to="/schemes/tamil-nadu"
                onClick={closeMenu}
                className="flex items-center justify-between px-3 py-1.5 rounded text-xs text-[#565C56] dark:text-[#A3ACA5] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]"
              >
                <span>Tamil Nadu</span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-[#EBF2ED] text-[#1A3B2B]">TN • 5</span>
              </Link>
            </div>

            <Link
              to="/assistant"
              onClick={closeMenu}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                location.pathname === '/assistant'
                  ? 'bg-[#EAE3D6] dark:bg-[#1F2622] text-[#1A3B2B] dark:text-[#DFB24E] font-semibold'
                  : 'text-[#161815] dark:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#B95938] dark:text-[#DFB24E]" />
              <span>{t('nav.aiGuide')}</span>
            </Link>

            <Link
              to="/eligibility"
              onClick={closeMenu}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                location.pathname === '/eligibility'
                  ? 'bg-[#EAE3D6] dark:bg-[#1F2622] text-[#1A3B2B] dark:text-[#DFB24E] font-semibold'
                  : 'text-[#161815] dark:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
              }`}
            >
              <Compass className="w-4 h-4 text-[#4E6352] dark:text-[#7A9984]" />
              <span>{t('nav.eligibility')}</span>
            </Link>

            <Link
              to="/checklist"
              onClick={closeMenu}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                location.pathname === '/checklist'
                  ? 'bg-[#EAE3D6] dark:bg-[#1F2622] text-[#1A3B2B] dark:text-[#DFB24E] font-semibold'
                  : 'text-[#161815] dark:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
              }`}
            >
              <CheckSquare className="w-4 h-4 text-[#1A3B2B] dark:text-[#7A9984]" />
              <span>{t('nav.checklists')}</span>
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                location.pathname === '/about'
                  ? 'bg-[#EAE3D6] dark:bg-[#1F2622] text-[#1A3B2B] dark:text-[#DFB24E] font-semibold'
                  : 'text-[#161815] dark:text-[#F3EFEA] hover:bg-[#EFE8DE] dark:hover:bg-[#181D1A]'
              }`}
            >
              <Shield className="w-4 h-4 text-[#565C56] dark:text-[#A3ACA5]" />
              <span>{t('nav.trustMethod')}</span>
            </Link>
          </div>

          {/* Mobile Theme Selector */}
          <div className="pt-3 border-t border-[#E7DFD4] dark:border-[#232A25] space-y-2">
            <span className="text-xs font-semibold text-[#565C56] dark:text-[#A3ACA5]">
              {t('nav.theme')}:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {themeOptions.map(opt => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTheme(opt.value)}
                    className={`py-2 px-2 text-xs rounded-md flex items-center justify-center gap-1.5 transition-colors ${
                      theme === opt.value
                        ? 'bg-[#1A3B2B] dark:bg-[#244E39] text-white font-semibold'
                        : 'bg-[#EFE8DE] dark:bg-[#181D1A] text-[#565C56] dark:text-[#A3ACA5]'
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Language Selector */}
          <div className="pt-3 border-t border-[#E7DFD4] dark:border-[#232A25] space-y-2">
            <span className="text-xs font-semibold text-[#565C56] dark:text-[#A3ACA5]">
              {t('nav.language')}: {currentLanguageInfo.nativeName}
            </span>
            <div className="grid grid-cols-2 gap-2">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`py-2 px-3 text-xs rounded-md text-left transition-colors ${
                    language === lang.code
                      ? 'bg-[#1A3B2B] dark:bg-[#244E39] text-white font-semibold'
                      : 'bg-[#EFE8DE] dark:bg-[#181D1A] text-[#565C56] dark:text-[#A3ACA5]'
                  }`}
                >
                  {lang.nativeName}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
