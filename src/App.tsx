import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  ArrowUpRight,
  Shield,
  Zap,
  CheckCircle,
  BarChart3,
  Star,
  Globe,
  Smartphone,
  Heart,
  TrendingDown,
  AlertTriangle,
  BookOpen,
  Lightbulb,
  Rocket,
  Eye,
  MessageSquare,
  ShoppingCart,
  Package,
  Database,
  Cpu,
  Layers,
  Download,
  CreditCard,
  UserCheck,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  FileText,
  Settings,
  Link,
  Activity,
  Search,
  Filter,
  Calendar,
  Bell,
  Gift,
  Percent,
  TrendingDown as TrendingDownIcon,
  PieChart,
  LineChart as LineChartIcon,
  Zap as ZapIcon
} from 'lucide-react';
import ROICalculator from './components/ROICalculator';

// Smooth scroll utility
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Navigation component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Überblick' },
    { id: 'problem-solution', label: 'Problem & Lösung' },
    { id: 'market-data', label: 'Marktdaten' },
    { id: 'architecture', label: 'Technik' },
    { id: 'roi-calculator', label: 'ROI-Rechner' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-berry-200/50 shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm border-b border-berry-200/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-berry-500 rounded-lg flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-neutral-900 font-display">SkinConnect</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-neutral-700 hover:text-berry-600 font-medium transition-colors duration-200 text-sm px-2 py-1 rounded"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </Button>
            </div>

            {/* Desktop CTA Button */}
            <Button 
              onClick={() => scrollToSection('kontakt')} 
              className="hidden lg:flex bg-berry-500 hover:bg-berry-600 text-white shadow-md"
            >
              Investment sichern
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMobileMenu}></div>
          <div className="fixed top-16 left-0 right-0 bg-white shadow-xl border-t border-berry-200 max-h-[calc(100vh-4rem)] overflow-y-auto pb-safe">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 text-neutral-700 hover:text-berry-600 hover:bg-berry-50 font-medium transition-colors duration-200 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-neutral-200">
                <Button 
                  onClick={() => {
                    scrollToSection('kontakt');
                    closeMobileMenu();
                  }}
                  className="w-full bg-berry-500 hover:bg-berry-600 text-white"
                >
                  Investment sichern
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Hero / Executive Overview
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-berry-50 to-berry-100 relative overflow-hidden pt-16 pb-safe">
      <div className="absolute inset-0 bg-gradient-to-r from-berry-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center px-4 py-2 bg-berry-100 text-berry-700 rounded-full text-sm font-medium">
                  <Rocket className="w-4 h-4 mr-2" />
                  Überblick
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-berry-100 text-berry-700 rounded-full text-sm font-medium">
                  Digitales B2B2C-Ökosystem für Premium-Kosmetik
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-neutral-700 font-display leading-tight">
                SkinAware & SkinConnect
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-800 leading-relaxed max-w-lg">
                 Das B2B2C‑Ökosystem für digitale Hautanalyse, Beratung und Umsatzwachstum. Endkunden‑App + Instituts‑Portal. DSGVO‑konform. Messbar. Skalierbar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button 
                onClick={() => scrollToSection('roi-calculator')}
                size="lg" 
                className="bg-berry-500 hover:bg-berry-600 text-white px-8 py-4 text-lg font-medium w-full sm:w-auto min-w-[180px] shadow-lg"
              >
                <Calculator className="w-5 h-5 mr-3" />
                ROI berechnen
              </Button>
              <Button 
                onClick={() => scrollToSection('packages')}
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-medium border-berry-300 hover:bg-berry-50 w-full sm:w-auto min-w-[180px] shadow-lg"
              >
                Pakete ansehen
              </Button>
            </div>


          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Video Banner Placeholder */}
            <div className="mb-6 bg-gradient-to-br from-berry-100 to-berry-200 rounded-2xl p-8 shadow-lg border border-white/20">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-berry-500 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">SkinConnect Demo Video</h3>
                <p className="text-neutral-700">Klicken Sie hier, um die SkinConnect Plattform in Aktion zu sehen</p>
                <div className="inline-flex items-center px-4 py-2 bg-white/60 rounded-full text-sm text-neutral-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Video wird geladen...
                </div>
              </div>
            </div>
            
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-glass border border-white/20">
              <div className="space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-berry-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 leading-tight">SkinAware (Endkunden-App)</h3>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mt-1">KI-gestützte Hautanalyse & Produktempfehlungen</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-success-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 leading-tight">SkinConnect (Instituts-App)</h3>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mt-1">Digitale Anamnese & Beratungsqualität</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-berry-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 leading-tight">Reviderm Ökosystem</h3>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mt-1">Erste Premium-Kosmetikmarke mit B2B2C-System</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards - Als wirklich letzte Zeile der Hero-Sektion */}
      <div className="mt-16">
        <div className="grid grid-cols-1">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/60 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-berry-600 font-display">22,85 Mrd. €</div>
              <div className="text-sm text-neutral-700 font-medium mt-2">DACH Beauty‑Markt 2025</div>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-berry-600 font-display">4,63%</div>
              <div className="text-sm text-neutral-700 font-medium mt-2">Beauty‑Tech CAGR bis 2030</div>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-berry-600 font-display">8–12%</div>
              <div className="text-sm text-neutral-700 font-medium mt-2">Conversion App→Institut</div>
            </div>
            <div className="text-center p-6 bg-white/60 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-berry-600 font-display">1,5–3,0 €</div>
              <div className="text-sm text-neutral-700 font-medium mt-2">CPI Zielkorridor DACH</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem & Solution Section
const ProblemSolutionSection = () => {
  return (
    <section id="problem-solution" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-berry-100 text-berry-700 rounded-full text-sm font-semibold mb-4">
            <span className="w-6 h-6 bg-berry-500 text-white rounded-full flex items-center justify-center text-xs mr-2">2</span>
            Problem & Lösung
          </div>
          <h2 className="text-4xl font-bold text-neutral-900 font-display">Problem & Lösung</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Reviderm ist abhängig von der Qualität der Institutsbetreiber – wenn eine Säule schwächelt, bleiben Potenziale ungenutzt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center overflow-hidden">
          {/* Problem */}
          <div className="space-y-8">
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-700 font-display">Das Problem</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-red-700 font-medium">
                    Reviderm ist abhängig von der Qualität der Institutsbetreiber
                  </p>
                  <ul className="space-y-3 text-red-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Marketing, Beratung und Verkauf variieren stark</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Keine einheitlichen Standards</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Schwankende Kundenbindung</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span>Ungenutztes Umsatzpotenzial</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 font-display">Die Lösung</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-green-700 font-medium">
                    SkinConnect & SkinAware verbinden digitale Analyse, Beratung & Verkauf
                  </p>
                  <ul className="space-y-3 text-green-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Aktivierung neuer Kunden digital</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Begleitung durch den gesamten Prozess</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Steigerung des Umsatzes pro Institut</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Datenbasierte Produktempfehlungen</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Executive Summary Goals */}
        <div className="mt-16 overflow-hidden">
          <Card className="bg-gradient-to-r from-berry-500/5 to-berry-500/10 border-berry-500/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center font-display">Ziele Jahr 1</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-berry-500 font-display mb-2">10-15k</div>
                  <p className="text-neutral-600">Aktive Nutzer</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-berry-500 font-display mb-2">1,000-1,500</div>
                  <p className="text-neutral-600">Neukunden/Monat</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-berry-500 font-display mb-2">25-35%</div>
                  <p className="text-neutral-600">Conversion in Institute</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-berry-500 font-display mb-2">0,5-0,75 Mio. €</div>
                  <p className="text-neutral-600">Umsatzpotenzial p.a.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Module Section
const ModuleSection = () => {
  const modules = [
    {
      icon: Eye,
      title: "1. Analyse",
      description: "Digitale Hautanalyse über App (KI-gestützt, optional mit Observe-Schnittstelle)",
      features: [
        "KI-gestützte Hautanalyse per Smartphone",
        "Integration von Bildern, Routinen, Ernährungsdaten",
        "Triggerfaktoren-Tracking",
        "Rosazea/Couperose‑Trigger‑Tracking (inkl. Katalog)",
        "Foto‑Verläufe",
        "PDF‑Export",
        "DSGVO-konforme Freigabe der Kundendaten an Institute",
        "Optional: Observe-Schnittstelle für Profi-Analyse"
      ],
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "2. Beratung",
      description: "Einheitliche digitale Anamneseformulare in SkinConnect",
      features: [
        "Einheitliche digitale Anamneseformulare",
        "Automatisierte Pflege- und Behandlungspläne",
        "Protokoll‑Bibliothek (z. B. 6× Mikroderm + Needling)",
        "Automatische Bundle‑Vorschläge",
        "Schulung und Vereinheitlichung der Beratungsqualität",
        "Strukturierte Entscheidungswege",
        "Qualitätssicherung durch digitale Prozesse"
      ],
      color: "semantic-success"
    },
    {
      icon: ShoppingCart,
      title: "3. Verkauf & Bindung",
      description: "Produkt- und Behandlungsempfehlungen direkt aus der Analyse",
      features: [
        "Produktempfehlungen direkt aus der Analyse",
        "Automatische Erinnerungen & Nachkauf-Trigger",
        "Gutschein-Mechanik für Erstberatung im Institut",
        "Voucher‑Validierung im Institut (Scan/Confirm)",
        "→ klare Attribution im HQ‑Dashboard",
        "Umsatzsteigerung durch strukturierte Empfehlungen",
        "Kundenbindung durch personalisierte Follow-ups"
      ],
      color: "semantic-warning"
    }
  ];

  return (
    <section id="module" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-berry-100 text-berry-700 rounded-full text-sm font-semibold mb-4">
            <span className="w-6 h-6 bg-berry-500 text-white rounded-full flex items-center justify-center text-xs mr-2">3</span>
            Module
          </div>
          <h2 className="text-4xl font-bold text-neutral-900 font-display">Die Lösung in drei Modulen</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            SkinConnect & SkinAware bilden ein integriertes System aus digitaler Analyse, Beratung und Verkauf.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            const colorClasses = {
              primary: "bg-berry-500/10 text-berry-600 border-berry-500/20",
              "semantic-success": "bg-semantic-success/10 text-semantic-success border-semantic-success/20",
              "semantic-warning": "bg-semantic-warning/10 text-semantic-warning border-semantic-warning/20"
            };
            
            return (
              <Card key={index} className={`group hover:shadow-cardHover transition-all duration-300 border-2 ${colorClasses[module.color as keyof typeof colorClasses]}`}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${colorClasses[module.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">{module.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-6 leading-relaxed">{module.description}</p>
                  
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-semantic-success flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      stakeholder: "Reviderm",
      icon: Heart,
      color: "primary",
      benefits: [
        "Erhöhte Markenbekanntheit & Umsatzpotenzial durch digitale Kundenbindung",
        "Skalierbare Datengrundlage für strategische Entscheidungen",
        "Vereinheitlichte Institutskommunikation",
        "Direkt messbarer ROI über mehr Buchungen und Produktverkäufe",
        "Tiefere Endkundenbindung durch personalisierte Empfehlungen"
      ]
    },
    {
      stakeholder: "Institute",
      icon: Users,
      color: "semantic-success",
      benefits: [
        "Höhere Beratungsqualität durch digitale Unterstützung",
        "Strukturierter Verkauf mit datenbasierten Empfehlungen",
        "Automatisierte Nachfasslogik und Reminder",
        "+3-5 Neukunden/Monat durch App-vermittelten Traffic",
        "Einheitliche Beratungsprotokolle und Qualitätssicherung"
      ]
    },
    {
      stakeholder: "Endkunden",
      icon: Target,
      color: "semantic-warning",
      benefits: [
        "Bessere Hautergebnisse durch KI-gestützte Analyse",
        "Personalisierte Empfehlungen basierend auf individuellem Hautbild",
        "Direkter Institut-Zugang mit Gutschein-Mechanik",
        "Fortschritts-Tracking und motivierende Gamification",
        "Kontinuierliche Betreuung auch zwischen Institutsterminen"
      ]
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-berry-100 text-berry-700 rounded-full text-sm font-semibold mb-4">
            <span className="w-6 h-6 bg-berry-500 text-white rounded-full flex items-center justify-center text-xs mr-2">4</span>
            Nutzenebenen
          </div>
          <h2 className="text-4xl font-bold text-neutral-900 font-display">Nutzenebenen</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ein System, drei Stakeholder – gemeinsame Wertschöpfung für alle Beteiligten.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((stakeholder, index) => {
            const IconComponent = stakeholder.icon;
            const colorClasses = {
              primary: "bg-berry-500 to-berry-600 text-white",
              "semantic-success": "bg-berry-500 to-berry-600 text-white",
              "semantic-warning": "bg-berry-500 to-berry-600 text-white"
            };
            
            return (
              <Card key={index} className="group hover:shadow-cardHover transition-all duration-300 border-0 shadow-card w-full max-w-full">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className={`p-6 rounded-t-lg ${colorClasses[stakeholder.color as keyof typeof colorClasses]}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold font-display text-white">{stakeholder.stakeholder}</h3>
                        <p className="text-white/90">Nutzen & Vorteile</p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="p-6">
                    <ul className="space-y-4">
                      {stakeholder.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-semantic-success flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700 leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Customer Journey Section
const CustomerJourneySection = () => {
  const journey = [
    {
      step: 1,
      title: "App-Download",
      subtitle: "SkinAware",
      description: "Digitale Hautanalyse (Selbstcheck)",
      icon: Download,
      features: ["KI-gestützte Hautanalyse", "Routinen-Tracking", "Lifestyle-Daten", "Erste Empfehlungen"],
      color: "primary"
    },
    {
      step: 2,
      title: "Empfehlung",
      subtitle: "Institutseinladung",
      description: "Kostenlose Erstberatung in deiner Nähe + Gutschein-Code",
      icon: Lightbulb,
      features: ["Standort-basierte Empfehlung", "Gutschein-Mechanik", "Gutscheinwert testweise 15–30 € (A/B)", "Direkter Institut-Zugang", "Motivierende Call-to-Action"],
      color: "semantic-success"
    },
    {
      step: 3,
      title: "Institut-Besuch",
      subtitle: "SkinConnect",
      description: "Kombinierte Analyse (Observe + App-Daten)",
      icon: MapPin,
      features: ["Digitale Anamneseformulare", "Profi-Analyse mit Observe", "Integrierte Kundendaten", "SkinConnect bestätigt Einlösung → App erhält Status‑Update → HQ Attribution", "Behandlungsplanung"],
      color: "semantic-warning"
    },
    {
      step: 4,
      title: "Pflegeplan",
      subtitle: "Follow-up",
      description: "Reminder & Nachkaufvorschläge via App",
      icon: Target,
      features: ["Personalierte Reminder", "Nachkauf-Trigger", "Fortschritts-Tracking", "Gamification-Elemente"],
      color: "primary"
    }
  ];

  return (
    <section id="customer-journey" className="py-16 sm:py-20 bg-gradient-to-br from-neutral-50 to-white pb-safe overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-berry-100 text-berry-700 rounded-full text-sm font-semibold mb-4">
            <span className="w-6 h-6 bg-berry-500 text-white rounded-full flex items-center justify-center text-xs mr-2">5</span>
            Customer Journey
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 font-display">Customer Journey Flow</h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Vier Schritte von der ersten App-Nutzung bis zur nachhaltigen Kundenbindung.
          </p>
        </div>

        <div className="relative px-2 overflow-hidden">
          {/* Connection Line - nur auf größeren Bildschirmen */}
          <div className="hidden xl:block absolute top-1/2 left-4 right-4 h-0.5 bg-berry-500/30 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 relative z-10 min-w-0">
            {journey.map((item, index) => {
              const IconComponent = item.icon;
              const colorClasses = {
                primary: "bg-berry-500 text-white",
                "semantic-success": "bg-berry-500 text-white",
                "semantic-warning": "bg-berry-500 text-white",
                "neutral-700": "bg-neutral-700 text-white"
              };
              
              return (
                <div key={index} className="text-center">
                  {/* Step Number - responsiv positioniert */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto shadow-lg ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-berry-500">
                      <span className="text-xs sm:text-sm font-bold text-berry-500">{item.step}</span>
                    </div>
                  </div>

                  {/* Content - responsive */}
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-card hover:shadow-card-hover transition-all duration-300 w-full">
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="text-center">
                          <div className="inline-flex items-center px-3 py-1.5 bg-berry-100 text-berry-700 rounded-full text-xs font-semibold mb-2">
                            <span className="w-4 h-4 bg-berry-500 text-white rounded-full flex items-center justify-center text-xs mr-1.5">{item.step}</span>
                            {item.title}
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-berry-600">{item.subtitle}</p>
                        </div>
                        
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed text-center">{item.description}</p>
                        
                        <ul className="space-y-1 sm:space-y-2">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-xs text-neutral-500">
                              <CheckCircle className="w-3 h-3 text-semantic-success flex-shrink-0 mt-0.5" />
                              <span className="leading-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Metrics - responsive */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-8">
          <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-glass text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-berry-500 font-display mb-2">15k</div>
              <p className="text-sm sm:text-base text-neutral-600">App-User (Jahr 1)</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-glass text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-semantic-success font-display mb-2">10%</div>
              <p className="text-sm sm:text-base text-neutral-600">Conversion zu Institut</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-glass text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-semantic-warning font-display mb-2">200-250€</div>
              <p className="text-sm sm:text-base text-neutral-600">Customer Value/Jahr</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Market Data Section
const MarketDataSection = () => {
  const marketData = [
    {
      category: "DACH-Markt",
      value: (
        <div>
          22,85 Mrd. €
          <div className="text-sm text-neutral-500">(Original: $26.39 Mrd.)</div>
        </div>
      ),
      subtitle: "Beauty & Personal Care Marktwert (2025)",
      growth: "CAGR 2.04% (2025-2030)",
      icon: Globe,
      details: [
        "Online-Anteil: 47.6% (2025)",
        <>ARPU: 226,17 € (2025) <span className="text-sm text-neutral-500">(Original: $260.99)</span></>,
        "Stärkster Markt in Europa"
      ]
    },
    {
      category: "Beauty Tech Worldwide",
      value: (
        <div>
          7,76 Mrd. €
          <div className="text-base font-normal text-neutral-600">(Original: $8.96 Mrd.)</div>
        </div>
      ),
      subtitle: "Marktwert (2025)",
      growth: "CAGR 4.63% (2025-2030)",
      icon: Smartphone,
      details: [
        <>ARPU (weltweit): 1,00 € (2025) <span className="text-sm text-neutral-500">(Original: $1.15)</span></>,
        "Schnellst wachsende Kategorie",
        "Mobile-first Trend"
      ]
    },
    {
      category: "Conversion-Raten",
      value: "E‑Com Conversion (1.8–3 %)",
      subtitle: "Health & Beauty E-Commerce (2024)",
      growth: "App→Institut Gutschein‑Einlösung (8–12 %)",
      icon: Target,
      details: [
        "E‑Com Conversion (1.8–3 %)",
        "App→Institut Gutschein‑Einlösung (8–12 % realistisch nach Activation)",
        "Desktop: 2.8%",
        "Tablet: 3.1%"
      ]
    },
    {
      category: "CPI‑Box",
      value: "Benchmark CPI DACH Beauty‑Apps",
      subtitle: "Range: 2–4 € (abhängig von Creative & Kanal)",
      growth: "Testziel: ≤ 2,5 €",
      icon: Users,
      details: [
        "Benchmark CPI DACH Beauty‑Apps: 2–4 €",
        "Range, abhängig von Creative & Kanal",
        "Testziel: ≤ 2,5 €",
        "Optimierte Kampagnen"
      ]
    }
  ];

  const benchmarks = [
    {
      metric: "App-Download → Premium-Conversion",
      value: "8-12%",
      conservative: "10%",
      description: "Konservatives Wachstum"
    },
    {
      metric: "ARPU jährliche Steigerung",
      value: "8-12%",
      conservative: "10%",
      description: "Year-over-year growth"
    },
    {
      metric: "Marketing-Effizienz",
      value: (
        <div>
          4,33-8,66 €
          <div className="text-base font-normal text-neutral-600">(Original: $5-10)</div>
        </div>
      ),
      conservative: "6,93 €",
      original: "$8",
      description: "Pro Download"
    }
  ];

  return (
    <section id="market-data" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-berry-100 text-berry-700 rounded-full text-sm font-semibold mb-4">
            <span className="w-6 h-6 bg-berry-500 text-white rounded-full flex items-center justify-center text-xs mr-2">6</span>
            Marktdaten
          </div>
          <h2 className="text-4xl font-bold text-neutral-900 font-display">Marktdaten & wissenschaftliche Belege</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Statista-verifizierte Daten zeigen das massive Potenzial des Beauty Tech-Marktes.
          </p>
        </div>

        {/* Market Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 overflow-hidden">
          {marketData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="group hover:shadow-cardHover transition-all duration-300 w-full max-w-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-berry-500/20 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-berry-600" />
                    </div>
                    <span className="text-sm font-semibold text-semantic-success">{item.growth}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.category}</h3>
                  <div className="text-3xl font-bold text-berry-500 mb-2 font-display">{item.value}</div>
                  <p className="text-sm text-neutral-600 mb-3">{item.subtitle}</p>
                  <ul className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-neutral-500 flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-semantic-success" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benchmarks */}
        <Card className="bg-gradient-to-r from-berry-500/5 to-berry-500/10 border-berry-500/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center font-display">
              Benchmarks für konservatives Wachstum
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {benchmarks.map((benchmark, index) => (
                <div key={index} className="text-center">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-neutral-900">{benchmark.metric}</h4>
                    <div className="text-2xl font-bold text-berry-500 font-display">{benchmark.value}</div>
                    <p className="text-sm text-neutral-600">{benchmark.description}</p>
                    <div className="text-sm font-medium text-semantic-success">Konservativ: {benchmark.conservative}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Revenue Projection Preview */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4 font-display">Potenzial-Übersicht</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg">
                <span className="text-neutral-700">Jahr 1 Umsatzpotenzial</span>
                <span className="text-xl font-bold text-berry-500">337.500 €</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg">
                <span className="text-neutral-700">Reviderm-Anteil (50%)</span>
                <span className="text-xl font-bold text-semantic-success">168.000 €</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg">
                <span className="text-neutral-700">Lizenzmodell</span>
                <span className="text-xl font-bold text-semantic-warning">100 €/Institut/Monat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Revenue Projection Section
const RevenueProjectionSection = () => {
  const projections = [
    {
      year: "Jahr 1",
      marketing: "150.000 €",
      downloads: "15.000",
      premium: "1.500",
      customerValue: "250 €",
      totalRevenue: "375.000 €",
      revidermShare: "93.750 €",
      institutes: "15-20"
    },
    {
      year: "Jahr 2",
      marketing: "200.000 €",
      downloads: "35.000",
      premium: "3.500",
      customerValue: "275 €",
      totalRevenue: "962.500 €",
      revidermShare: "240.625 €",
      institutes: "35-45"
    },
    {
      year: "Jahr 3",
      marketing: "250.000 €",
      downloads: "60.000",
      premium: "6.000",
      customerValue: "300 €",
      totalRevenue: "1.800.000 €",
      revidermShare: "450.000 €",
      institutes: "60-80"
    }
  ];

  const assumptions = [
    {
      metric: "App-User (Jahr 1)",
      value: "15.000",
      description: "Aktivierungen durch Social & In-App-Marketing"
    },
    {
      metric: "Conversion zu Institut",
      value: "10% (1.500 Kunden)",
      description: "Gutschein & Standortvorteil"
    },
    {
      metric: "Customer Value Institut",
      value: "250 € / Jahr",
      description: "Durchschnittlicher Umsatz pro Kunde"
    },
    {
      metric: "Anteil Reviderm-Produkte",
      value: "50%",
      description: "Produktanteil am Gesamtumsatz"
    },
    {
      metric: "App-Lizenz SkinConnect",
      value: "100 € / Institut / Monat",
      description: "Reviderm → SkinConnect"
    },
    {
      metric: "Wiederholungsrate",
      value: "25%",
      description: "Anteil der Wiederholungskäufe"
    }
  ];

  return (
    <section id="revenue-projection" className="py-20 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-berry-100 text-berry-700 rounded-full text-sm font-semibold mb-4">
            <span className="w-6 h-6 bg-berry-500 text-white rounded-full flex items-center justify-center text-xs mr-2">7</span>
            Umsatzprojektion
          </div>
          <h2 className="text-4xl font-bold text-neutral-900 font-display">Umsatzprojektion (Jahr 1-3)</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Konservative Annahmen zeigen nachhaltiges Wachstumspotenzial basierend auf: Lizenzgebühren + Produktverkäufe + Wiederholungsverkäufe.
          </p>
        </div>

        {/* Revenue Table */}
        <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-glass mb-16 overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-berry-600" />
              <span>3-Jahres-Projektion</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto max-w-full">
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 font-medium text-neutral-900">Jahr</th>
                    <th className="text-right py-3 font-medium text-neutral-900">Marketing</th>