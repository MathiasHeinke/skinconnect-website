import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { Calculator, TrendingUp, DollarSign, Users, Target, ArrowUpRight, Info } from 'lucide-react';

// Statista-verifizierte Benchmark-Werte
const STATISTA_BENCHMARKS = {
  marketingBudget: 100000, // €100k Default
  cpi: 2, // €2 Default
  conversionRate: 10, // 10% konservative Schätzung
  activationRate: 60, // 60% Aktivierung
  basisArpu: 250, // €250 (basierend auf $260.99 Statista)
  arpuGrowth: 10, // 10% jährlich
  revidermRate: 25, // 25% Geschäftsmodell
  instituteMargin: 200, // €200 Lizenzgebühr
};

// Scenario-Preset-Kombinationen
const SCENARIOS = {
  konservativ: {
    marketingBudget: 80000,
    cpi: 3,
    conversionRate: 8,
    activationRate: 50,
    basisArpu: 200,
    arpuGrowth: 8,
    revidermRate: 20,
    instituteMargin: 180,
  },
  realistisch: {
    marketingBudget: 100000,
    cpi: 2,
    conversionRate: 10,
    activationRate: 60,
    basisArpu: 250,
    arpuGrowth: 10,
    revidermRate: 25,
    instituteMargin: 200,
  },
  optimistisch: {
    marketingBudget: 150000,
    cpi: 1.5,
    conversionRate: 12,
    activationRate: 70,
    basisArpu: 300,
    arpuGrowth: 12,
    revidermRate: 30,
    instituteMargin: 250,
  },
};

interface CalculatorInputs {
  marketingBudget: number;
  cpi: number;
  conversionRate: number;
  activationRate: number;
  basisArpu: number;
  arpuGrowth: number;
  revidermRate: number;
  instituteMargin: number;
}

interface YearlyProjection {
  year: number;
  appDownloads: number;
  premiumUsers: number;
  arpu: number;
  gesamtumsatz: number;
  revidermAnteil: number;
  instituteMargin: number;
  totalReturn: number;
  roi: number;
}

// Tooltip-Komponente mit Formel-Information
const FormulaTooltip = ({ children, formula, description }: { 
  children: React.ReactNode;
  formula: string;
  description: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center cursor-help">
            {children}
            <Info className="w-4 h-4 ml-1 text-primary-500" />
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <p className="font-semibold text-sm">{description}</p>
            <code className="bg-neutral-100 p-2 rounded text-xs block">
              {formula}
            </code>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Hauptkomponente
const ROICalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(STATISTA_BENCHMARKS);
  const [activeScenario, setActiveScenario] = useState<keyof typeof SCENARIOS>('realistisch');

  // Berechnungslogik für 3-Jahres-Projektion
  const projections = useMemo((): YearlyProjection[] => {
    return [1, 2, 3].map(year => {
      const arpu = inputs.basisArpu * Math.pow(1 + inputs.arpuGrowth / 100, year - 1);
      const appDownloads = inputs.marketingBudget / inputs.cpi;
      const premiumUsers = appDownloads * (inputs.conversionRate / 100);
      const gesamtumsatz = premiumUsers * arpu;
      const revidermAnteil = gesamtumsatz * (inputs.revidermRate / 100);
      const instituteMargin = premiumUsers * inputs.instituteMargin;
      const totalReturn = revidermAnteil + instituteMargin;
      const roi = totalReturn / inputs.marketingBudget;

      return {
        year,
        appDownloads,
        premiumUsers,
        arpu,
        gesamtumsatz,
        revidermAnteil,
        instituteMargin,
        totalReturn,
        roi,
      };
    });
  }, [inputs]);

  // Szenario anwenden
  const applyScenario = (scenario: keyof typeof SCENARIOS) => {
    setInputs(SCENARIOS[scenario]);
    setActiveScenario(scenario);
  };

  // Input-Änderungen
  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs(prev => ({
      ...prev,
      [field]: numValue,
    }));
  };

  // Chart-Daten für Wachstumsverlauf
  const growthChartData = projections.map(p => ({
    jahr: `Jahr ${p.year}`,
    downloads: Math.round(p.appDownloads),
    premiumUser: Math.round(p.premiumUsers),
    revidermAnteil: Math.round(p.revidermAnteil),
  }));

  // Chart-Daten für ROI-Entwicklung
  const roiChartData = [
    {
      jahr: 'Jahr 0',
      investition: inputs.marketingBudget,
      rueckfluss: 0,
    },
    ...projections.map(p => ({
      jahr: `Jahr ${p.year}`,
      investition: inputs.marketingBudget,
      rueckfluss: p.totalReturn,
    })),
  ];

  // Chart-Daten für Umsatz-Aufschlüsselung
  const revenueBreakdownData = projections.map(p => ({
    jahr: `Jahr ${p.year}`,
    institute: Math.round(p.gesamtumsatz * (1 - inputs.revidermRate / 100)),
    reviderm: Math.round(p.revidermAnteil),
    marge: Math.round(p.instituteMargin),
  }));

  // Quartalsberechnungen
  const quarterlyData = useMemo(() => {
    const results = [];
    
    for (let jahr = 1; jahr <= 3; jahr++) {
      const yearlyData = projections[jahr - 1];
      
      for (let quartal = 1; quartal <= 4; quartal++) {
        const quarterDownloads = yearlyData.appDownloads / 4;
        const quarterPremiumUser = yearlyData.premiumUsers / 4;
        const quarterRevenue = yearlyData.gesamtumsatz / 4;
        const quarterMarketingInvest = inputs.marketingBudget / 12; // Monatliche Aufteilung
        
        results.push({
          jahr,
          quartal,
          jahrQuartal: `J${jahr}Q${quartal}`,
          downloads: Math.round(quarterDownloads),
          premiumUser: Math.round(quarterPremiumUser),
          arpu: Math.round(yearlyData.arpu),
          revenue: Math.round(quarterRevenue),
          revidermAnteil: Math.round(quarterRevenue * (inputs.revidermRate / 100)),
          instituteMargin: Math.round(quarterPremiumUser * inputs.instituteMargin),
          gesamtRueckfluss: Math.round(
            (quarterRevenue * (inputs.revidermRate / 100)) + 
            (quarterPremiumUser * inputs.instituteMargin)
          ),
          marketingInvest: Math.round(quarterMarketingInvest),
          roi: quarterMarketingInvest > 0 
            ? (((quarterRevenue * (inputs.revidermRate / 100)) + (quarterPremiumUser * inputs.instituteMargin)) - quarterMarketingInvest) / quarterMarketingInvest * 100
            : 0,
        });
      }
    }
    
    return results;
  }, [projections, inputs]);

  return (
    <div className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid lg:grid-cols-12 gap-8">
          {/* Input-Sektion */}
          <div className="lg:col-span-5">
            <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-glass sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary-500" />
                  <span>Eingabeparameter</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Szenario-Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  {Object.keys(SCENARIOS).map((scenario) => (
                    <Button
                      key={scenario}
                      onClick={() => applyScenario(scenario as keyof typeof SCENARIOS)}
                      variant={activeScenario === scenario ? "default" : "outline"}
                      size="sm"
                      className={activeScenario === scenario 
                        ? "bg-primary-500 hover:bg-primary-700" 
                        : "border-neutral-300 hover:bg-neutral-50"
                      }
                    >
                      {scenario.charAt(0).toUpperCase() + scenario.slice(1)}
                    </Button>
                  ))}
                </div>

                {/* Input-Felder */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <FormulaTooltip
                      formula="Marketing-Investition = Eingabewert (€)"
                      description="Gesamtbudget für Patient*innen-Akquisition pro Jahr"
                    >
                      <Label className="text-sm font-medium">Marketing-Budget (€)</Label>
                    </FormulaTooltip>
                    <Input
                      type="number"
                      value={inputs.marketingBudget}
                      onChange={(e) => handleInputChange('marketingBudget', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <FormulaTooltip
                      formula="App-Downloads = Marketing-Budget ÷ CPI"
                      description="Kosten pro Installation in Euro"
                    >
                      <Label className="text-sm font-medium">CPI - Kosten pro Installation (€)</Label>
                    </FormulaTooltip>
                    <Input
                      type="number"
                      value={inputs.cpi}
                      onChange={(e) => handleInputChange('cpi', e.target.value)}
                      className="text-right"
                      step="0.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <FormulaTooltip
                      formula="Premium-Nutzer = App-Downloads × Conversion-Rate"
                      description="Prozentsatz der Downloads, die zu Premium-Nutzer*innen werden"
                    >
                      <Label className="text-sm font-medium">Conversion-Rate (%)</Label>
                    </FormulaTooltip>
                    <Input
                      type="number"
                      value={inputs.conversionRate}
                      onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                      className="text-right"
                      step="0.1"
                    />
                  </div>

                  <div className="space-y-2">
                    <FormulaTooltip
                      formula="Aktive Nutzer = Premium-Nutzer × Aktivierungsrate"
                      description="Prozentsatz der Premium-Nutzer*innen, die aktiv werden"
                    >
                      <Label className="text-sm font-medium">Aktivierungsrate (%)</Label>
                    </FormulaTooltip>
                    <Input
                      type="number"
                      value={inputs.activationRate}
                      onChange={(e) => handleInputChange('activationRate', e.target.value)}
                      className="text-right"
                      step="0.1"
                    />
                  </div>

                  <div className="space-y-2">
                    <FormulaTooltip
                      formula="ARPU_Jahr_X = Basis-ARPU × (1 + ARPU-Steigerung)^(Jahr_X-1)"
                      description="Durchschnittlicher Umsatz pro Premium-Nutzer*in im Jahr 1"
                    >
                      <Label className="text-sm font-medium">Basis-ARPU (€)</Label>
                    </FormulaTooltip>
                    <Input
                      type="number"
                      value={inputs.basisArpu}
                      onChange={(e) => handleInputChange('basisArpu', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <FormulaTooltip
                      formula="ARPU_Jahr_X = Basis-ARPU × (1 + ARPU-Steigerung)^(Jahr_X-1)"
                      description="Jährliche Steigerung des ARPU"
                    >
                      <Label className="text-sm font-medium">ARPU-Steigerung (%)</Label>
                    </FormulaTooltip>
                    <Input
                      type="number"
                      value={inputs.arpuGrowth}
                      onChange={(e) => handleInputChange('arpuGrowth', e.target.value)}
                      className="text-right"
                      step="0.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <FormulaTooltip
                      formula="Reviderm-Anteil = Gesamtumsatz × Reviderm-Rate"
                      description="Prozentsatz des Umsatzes, der als Reviderm-Gebühr anfällt"
                    >
                      <Label className="text-sm font-medium">Reviderm-Rate (%)</Label>
                    </FormulaTooltip>
                    <Input
                      type="number"
                      value={inputs.revidermRate}
                      onChange={(e) => handleInputChange('revidermRate', e.target.value)}
                      className="text-right"
                      step="0.5"
                    />
                  </div>

                  <div className="space-y-2">
                    <FormulaTooltip
                      formula="Institut-Marge = Premium-Nutzer × Institut-Marge"
                      description="Lizenzgebühr pro Premium-Nutzer*in für Institute"
                    >
                      <Label className="text-sm font-medium">Institut-Marge (€)</Label>
                    </FormulaTooltip>
                    <Input
                      type="number"
                      value={inputs.instituteMargin}
                      onChange={(e) => handleInputChange('instituteMargin', e.target.value)}
                      className="text-right"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results-Sektion */}
          <div className="lg:col-span-7 space-y-8">
            {/* KPI-Karten */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-primary-500/10 border-primary-500/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary-500 font-display">
                    {Math.round(projections[0]?.appDownloads || 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-neutral-600">App-Downloads (Jahr 1)</div>
                </CardContent>
              </Card>

              <Card className="bg-semantic-success/10 border-semantic-success/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-semantic-success font-display">
                    {Math.round(projections[0]?.premiumUsers || 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-neutral-600">Premium-Nutzer*innen (Jahr 1)</div>
                </CardContent>
              </Card>

              <Card className="bg-semantic-warning/10 border-semantic-warning/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-semantic-warning font-display">
                    {((projections[2]?.roi || 0) * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-neutral-600">ROI (Jahr 3)</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary-500/10 to-semantic-success/10 border-primary-500/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary-500 font-display">
                    {Math.round(projections[2]?.totalReturn || 0).toLocaleString()}€
                  </div>
                  <div className="text-sm text-neutral-600">Gesamt-Rückfluss (Jahr 3)</div>
                </CardContent>
              </Card>
            </div>

            {/* VOLLSTÄNDIGE CHARTS-IMPLEMENTIERUNG */}
            <div className="space-y-8">
              {/* Chart 1: Wachstumsverlauf */}
              <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-glass">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary-500" />
                    <span>Wachstumsverlauf (3-Jahres-Projektion)</span>
                  </CardTitle>
                  <p className="text-sm text-neutral-700">
                    App-Downloads vs. Premium-Nutzer vs. Reviderm-Anteil
                  </p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={growthChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="jahr" stroke="#374151" />
                      <YAxis stroke="#374151" />
                      <RechartsTooltip 
                        formatter={(value: number, name: string) => [
                          value.toLocaleString(),
                          name === 'downloads' ? 'App-Downloads' : 
                          name === 'premiumUser' ? 'Premium-Nutzer' : 'Reviderm-Anteil (€)'
                        ]}
                        labelFormatter={(label) => `Jahr: ${label}`}
                      />
                      <Legend 
                        formatter={(value) => 
                          value === 'downloads' ? 'App-Downloads' : 
                          value === 'premiumUser' ? 'Premium-Nutzer' : 'Reviderm-Anteil (€)'
                        }
                      />
                      <Bar dataKey="downloads" fill="#3B82F6" name="downloads" />
                      <Bar dataKey="premiumUser" fill="#10B981" name="premiumUser" />
                      <Bar dataKey="revidermAnteil" fill="#F59E0B" name="revidermAnteil" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Chart 2: ROI-Entwicklung */}
              <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-glass">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-semantic-success" />
                    <span>ROI-Entwicklung</span>
                  </CardTitle>
                  <p className="text-sm text-neutral-700">
                    Marketing-Investition vs. Gesamt-Rückfluss
                  </p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={roiChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="jahr" stroke="#374151" />
                      <YAxis stroke="#374151" />
                      <RechartsTooltip 
                        formatter={(value: number) => [value.toLocaleString() + '€', '']}
                        labelFormatter={(label) => `Jahr: ${label}`}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="investition" 
                        stroke="#EF4444" 
                        strokeWidth={3}
                        name="Marketing-Investition (€)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="rueckfluss" 
                        stroke="#10B981" 
                        strokeWidth={3}
                        name="Gesamt-Rückfluss (€)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Chart 3: Umsatz-Aufschlüsselung */}
              <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-glass">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5 text-primary-500" />
                    <span>Umsatz-Aufschlüsselung (3 Jahre)</span>
                  </CardTitle>
                  <p className="text-sm text-neutral-700">
                    Institute vs. Reviderm-Anteil vs. Institut-Marge
                  </p>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={revenueBreakdownData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="jahr" stroke="#374151" />
                      <YAxis stroke="#374151" />
                      <RechartsTooltip 
                        formatter={(value: number) => [value.toLocaleString() + '€', '']}
                        labelFormatter={(label) => `Jahr: ${label}`}
                      />
                      <Legend 
                        formatter={(value) => 
                          value === 'institute' ? 'Institute (Netto)' : 
                          value === 'reviderm' ? 'Reviderm-Anteil' : 'Institut-Marge'
                        }
                      />
                      <Area 
                        type="monotone" 
                        dataKey="institute" 
                        stackId="1" 
                        stroke="#3B82F6" 
                        fill="#3B82F6" 
                        name="institute"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="reviderm" 
                        stackId="1" 
                        stroke="#10B981" 
                        fill="#10B981" 
                        name="reviderm"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="marge" 
                        stackId="1" 
                        stroke="#F59E0B" 
                        fill="#F59E0B" 
                        name="marge"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Quartalsdetails */}
            <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-glass">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart className="w-5 h-5 text-primary-500" />
                  <span>Quartalsdetails (Realistisches Szenario)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3].map((jahr) => (
                    <div key={jahr}>
                      <h4 className="text-lg font-semibold text-neutral-900 mb-3">Jahr {jahr}</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-neutral-200">
                              <th className="text-left py-2 font-medium">Quartal</th>
                              <th className="text-right py-2 font-medium">Downloads</th>
                              <th className="text-right py-2 font-medium">Premium</th>
                              <th className="text-right py-2 font-medium">ARPU (€)</th>
                              <th className="text-right py-2 font-medium">Umsatz (€)</th>
                              <th className="text-right py-2 font-medium">Reviderm (€)</th>
                              <th className="text-right py-2 font-medium">Institut (€)</th>
                              <th className="text-right py-2 font-medium">ROI (%)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {quarterlyData.filter(q => q.jahr === jahr).map((quarter, index) => (
                              <tr key={index} className="border-b border-neutral-100">
                                <td className="py-2 font-medium">Q{quarter.quartal}</td>
                                <td className="py-2 text-right">{quarter.downloads.toLocaleString()}</td>
                                <td className="py-2 text-right">{quarter.premiumUser.toLocaleString()}</td>
                                <td className="py-2 text-right">{quarter.arpu.toLocaleString()}</td>
                                <td className="py-2 text-right">{quarter.revenue.toLocaleString()}</td>
                                <td className="py-2 text-right">{quarter.revidermAnteil.toLocaleString()}</td>
                                <td className="py-2 text-right">{quarter.instituteMargin.toLocaleString()}</td>
                                <td className="py-2 text-right">
                                  <span className={`font-medium ${quarter.roi >= 0 ? 'text-semantic-success' : 'text-semantic-error'}`}>
                                    {quarter.roi.toFixed(1)}%
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call-to-Action */}
            <Card className="bg-gradient-to-r from-primary-500 to-primary-700 text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 font-display">Überzeugt vom ROI-Potenzial?</h3>
                <p className="text-primary-100 mb-6">
                  SkinConnect bietet Ihnen die Möglichkeit, in einen wachsenden Markt mit nachhaltigen 
                  Umsatzmodellen zu investieren. Kontaktieren Sie uns für weitere Details.
                </p>
                <Button className="bg-white text-primary-600 hover:bg-neutral-100 px-6 py-3">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Investment-Gespräch vereinbaren
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;