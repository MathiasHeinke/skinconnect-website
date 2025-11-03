# Content Structure Plan - SkinConnect & SkinAware Investment Pitch

## 1. Material-Inventar

**Content Files:**
- `user_input_files/skinconnect_pitch_material.md` (~1.500 Zeilen, 12 Hauptsektionen: Executive Summary, Lösung, Module, Nutzenebenen, Customer Journey, Architektur, Umsatzprojektion, Angebot, Roadmap, Risiken)

**Research-Daten (wissenschaftliche Fundierung):**
- `docs/research/marktdaten.md` (24,04 Mrd. € DACH-Markt 2025, Premium-Wachstum 7-8% CAGR, Beauty-Tech 73,92 Mrd. USD 2024, KI-Markt 19,14% CAGR)
- `docs/research/technologie.md` (KI-Genauigkeit 87% Sensitivität, ModiFace 88% Genauigkeit, AR-Conversion +72-189%, ROI-Daten)
- `docs/research/b2b2c_modelle.md` (Sephora +90% Conversion mit AR, Curology 200M USD, CLV 150-500 USD, Retention-Benchmarks)
- `docs/research/conversion_daten.md` (Beauty E-Commerce 6,5-6,8% Conversion, App-Retention 5% nach 30 Tagen, Gutschein-Einlösungsraten 44-70%)
- `docs/research/compliance.md` (DSGVO-Anforderungen, SaMD vs. Wellness-App, EU-Hosting, DiGA-Regulierung)

**Visual Assets:**
- Keine Bilder/Logos vorhanden
- Charts/Visualisierungen: Werden später integriert (10-15 Datenvisualisierungen benötigt)

**Data Files:**
- Keine strukturierten Data-Files (JSON/CSV)
- Alle Kennzahlen sind in Markdown-Dokumenten eingebettet

**Charts (zukünftig zu integrieren):**
- Marktgröße DACH-Raum (Balkendiagramm)
- Premium-Wachstum 2025-2030 (Liniendiagramm)
- KI-Genauigkeit vs. Kliniker (Vergleichsdiagramm)
- Conversion-Steigerung durch AR (Balken)
- Customer Journey Flow (Prozess-Diagramm)
- Umsatzprojektion Jahr 1-2 (Säulendiagramm)
- Systemarchitektur (Technisches Diagramm)
- 3-Stakeholder-Modell (Kreisdiagramm/Venn)
- Roadmap 12 Monate (Timeline)
- Angebotsvarianten-Vergleich (Tabelle/Matrix)

---

## 2. Website-Struktur

**Typ:** **Single-Page Application (SPA)**

**Reasoning:**
- ✅ ≤12 Sektionen (erfüllt SPA-Kriterium)
- ✅ Kohärente Pitch-Story (Executive Summary → Problem → Lösung → Markt → Business Model → Ask)
- ✅ <2.000 Wörter Kerninhalt (Pitch-Präsentations-Format)
- ✅ Einzelnes Ziel: Investment überzeugen
- ✅ Pitch-Deck-Kontext: Lineare Narrative erwartet
- ✅ Desktop-Präsentations-Optimierung

**Format:** Smooth-Scroll Single-Page mit Anchor-Navigation

---

## 3. Section-Breakdown (SPA-Struktur)

### Section 1: Hero / Executive Overview
**Purpose:** Attention Grabber, Thesis-Statement, First Impression
**Component Pattern:** Hero Pattern (§3.1)
**Data Extraction:**

| Content Source | Extraction Rule | Visual Asset (Content ONLY) |
|----------------|-----------------|------------------------------|
| `skinconnect_pitch_material.md` L79-90 | Thesis-Statement: "REVIDERM wird zur ersten Premium-Kosmetikmarke im DACH-Raum mit echtem B2B2C-Ökosystem" | - |
| `skinconnect_pitch_material.md` L86-90 | Ziele Jahr 1: 10-15k Nutzer, 1.000-1.500 Neukunden/Monat, 25-35% Conversion, Umsatzpotenzial 0,5-0,75 Mio. € | - |

**FORBIDDEN:**
- ❌ Decorative background images (handled in Design Spec)
- ❌ Styling instructions ("centered", "bold")

**ONLY specify:**
- ✅ Component pattern: Hero Pattern (full-width, 500-600px height)
- ✅ Content extraction: Thesis + Key Metrics


---

### Section 2: Problem-Lösung-Statement
**Purpose:** Pain Point → Solution Introduction
**Component Pattern:** 2-Column Split Layout (7/5 asymmetric)
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Problem | Text Block | `skinconnect_pitch_material.md` L81-82 | "Reviderm ist abhängig von der Qualität der Institutsbetreiber – Marketing, Beratung, Verkauf. Wenn eine Säule schwächelt, bleiben Potenziale ungenutzt." | - |
| Lösung | Text Block | `skinconnect_pitch_material.md` L83-84 | "SkinConnect & SkinAware verbinden digitale Analyse, Beratung & Verkauf – aktivieren neue Kunden, begleiten sie digital und steigern so den Umsatz pro Institut & Marke." | - |


---

### Section 3: Die 3 Module
**Purpose:** Core Product Features
**Component Pattern:** 3-Column Card Grid
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Modul 1: Analyse | Card Pattern (§3.2) | `skinconnect_pitch_material.md` L16-19 | Headline: "Analyse", Content: Digitale Hautanalyse, KI-gestützt, Observe-Schnittstelle, DSGVO-konform | - |
| Modul 2: Beratung | Card Pattern | `skinconnect_pitch_material.md` L21-24 | Headline: "Beratung", Content: Digitale Anamneseformulare, automatisierte Pläne, Schulung | - |
| Modul 3: Verkauf & Bindung | Card Pattern | `skinconnect_pitch_material.md` L26-30 | Headline: "Verkauf & Bindung", Content: Produktempfehlungen, Erinnerungen, Gutschein-Mechanik | - |


---

### Section 4: Nutzenebenen (3-Stakeholder-Modell)
**Purpose:** Value Proposition für alle Stakeholder
**Component Pattern:** 3-Column Card Grid oder Tabellen-Layout
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Tabelle: Nutzenebenen | Table Pattern | `skinconnect_pitch_material.md` L33-38 | Reviderm: "Erhöhte Markenbekanntheit & Umsatzpotenzial", Institute: "Höhere Beratungsqualität, strukturierter Verkauf", Endkunden: "Bessere Hautergebnisse, personalisierte Empfehlungen" | - |
| Chart: 3-Stakeholder-Modell | Circular Diagram (zukünftig) | Visualisierung der 3 Nutzenebenen | - |


---

### Section 5: Customer Journey Flow
**Purpose:** Prozessvisualisierung
**Component Pattern:** 4-Step Process Diagram (Horizontal Timeline)
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Step 1 | Process Step | `skinconnect_pitch_material.md` L43 | "App-Download (SkinAware) → Digitale Hautanalyse (Selbstcheck)" | - |
| Step 2 | Process Step | `skinconnect_pitch_material.md` L44 | "Empfehlung: Kostenlose Erstberatung → Institutseinladung + Gutschein-Code" | - |
| Step 3 | Process Step | `skinconnect_pitch_material.md` L45 | "Kunde im Institut → kombinierte Analyse (Observe + App-Daten)" | - |
| Step 4 | Process Step | `skinconnect_pitch_material.md` L46 | "Pflege- & Behandlungsplan → Reminder & Nachkaufvorschläge via App" | - |


---

### Section 6: Marktdaten & wissenschaftliche Belege
**Purpose:** Market Validation durch Research-Daten
**Component Pattern:** Data Card Grid (4 Cards) + Chart Integration
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| DACH-Markt | Data Card | `docs/research/marktdaten.md` L19 | "24,04 Milliarden Euro im Jahr 2025, Wachstum auf 26,67 Milliarden Euro bis 2030" | - |
| Premium-Segment | Data Card | `docs/research/marktdaten.md` L47-48 | "9,24 Milliarden USD 2024, CAGR 7,09% bis 2033" | - |
| KI-Genauigkeit | Data Card | `docs/research/technologie.md` L14-15 | "KI-Algorithmen: 87,0% Sensitivität, 77,1% Spezifität (vs. Kliniker 79,8% / 73,6%)" | - |
| AR-Conversion | Data Card | `docs/research/b2b2c_modelle.md` L79-81 | "Sephora Virtual Artist: +90% Conversion-Rate, +25% Add-to-Basket" | - |
| Chart: Marktwachstum | Line Chart (zukünftig) | Visualisierung DACH-Wachstum 2025-2030 | - |


---

### Section 7: Umsatzprojektionen (Jahr 1-2)
**Purpose:** Financial Outlook
**Component Pattern:** Table Pattern + Bar Chart
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Annahmen-Tabelle | Table Pattern | `skinconnect_pitch_material.md` L58-65 | App-User Jahr 1: 15.000, Conversion zu Institut: 10% (1.500), Customer Value: 200-250 €, Anteil Reviderm-Produkte: 40-60%, App-Lizenz: 100 €/Institut/Jahr | - |
| Gesamtpotenzial Jahr 1 | Metric Card | `skinconnect_pitch_material.md` L67 | "337.500 € Institutumsatz, davon ca. 50% Reviderm-Produktabsatz (168.000 €)" | - |
| Skalierung Jahr 2 | Text Block | `skinconnect_pitch_material.md` L69 | "30.000–50.000 App-User realistisch" | - |
| Chart: Umsatzprojektion | Column Chart (zukünftig) | Jahr 1 vs. Jahr 2 Projektion | - |


---

### Section 8: Technische Architektur
**Purpose:** Technical Credibility
**Component Pattern:** Technical Diagram + Text Blocks
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Frontend | Text List | `skinconnect_pitch_material.md` L49 | "iOS/Android App (SkinAware), Web-/Tablet-App (SkinConnect)" | - |
| Backend | Text List | `skinconnect_pitch_material.md` L50 | "Supabase / DSGVO-konformes Hosting (EU)" | - |
| Schnittstellen | Text List | `skinconnect_pitch_material.md` L51 | "Observe, CRM, Shop-System (API-basiert)" | - |
| Automationen | Text List | `skinconnect_pitch_material.md` L52 | "Gutscheinversand, Reminder, Nachkaufvorschläge (n8n)" | - |
| Datenschutz | Text List | `skinconnect_pitch_material.md` L53 | "Double-Opt-In, granulare Freigaben, pseudonymisierte Analysen" | - |
| Chart: Systemarchitektur | Architecture Diagram (zukünftig) | Visualisierung der technischen Komponenten | - |


---

### Section 9: Angebotsvarianten (3 Pakete)
**Purpose:** Pricing & Investment Ask
**Component Pattern:** 3-Column Pricing Table
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Basic | Pricing Card | `skinconnect_pitch_material.md` L113 | "Light-Version mit Analyse & Empfehlungen, Institut-Link: 150.000–200.000 €" | - |
| Professional (Favorit) | Pricing Card (Highlighted) | `skinconnect_pitch_material.md` L112 | "Marktreife App-Lösung mit Anamnese, Analyse, Shop, CRM-Light, Institut-Integration, Admin: 420.000 €" | - |
| Premium | Pricing Card | `skinconnect_pitch_material.md` L111 | "Full Ecosystem inkl. KI, Cloud, CRM, Kassensystem, E-Com, AR, Dermatologen-Netz: 2,0–2,5 Mio. €" | - |
| Zahlungsmodelle | Table | `skinconnect_pitch_material.md` L115-119 | Monatlich: 12 × 40.000 €, Quartal: 4 × 100.000 €, Jährlich (Rabatt): 1 × 390.000 € | - |


---

### Section 10: Roadmap (12 Monate)
**Purpose:** Execution Timeline
**Component Pattern:** Horizontal Timeline (4 Quarters)
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Q1 – Foundation | Timeline Item | `skinconnect_pitch_material.md` L150 | "UX-Flows, MVP-Analyse, Institut-Portal v1" | - |
| Q2 – Beta | Timeline Item | `skinconnect_pitch_material.md` L151 | "E-Com-Integration, CRM-Sync, A/B-Tests" | - |
| Q3 – Launch | Timeline Item | `skinconnect_pitch_material.md` L152 | "Kampagnen, 50–80k Downloads, Analytics Dashboard" | - |
| Q4 – Scale | Timeline Item | `skinconnect_pitch_material.md` L153 | "AR-Guidance, Partner-Integrationen, KPI-Review" | - |


---

### Section 11: Risiken & Compliance
**Purpose:** Risk Mitigation & Legal Assurance
**Component Pattern:** 2-Column Table Layout
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Risiken-Tabelle | Table Pattern | `skinconnect_pitch_material.md` L160-167 | Risiko 1: SaMD-Risiko → Gegenmaßnahme: Strikte kosmetische Klassifizierung, Risiko 2: Datenschutz → DSGVO-Audit, Risiko 3: Institut-Adoption → Schulungen | - |
| DSGVO-Compliance | Text Block | `docs/research/compliance.md` L1-10 | Zusammenfassung: Privacy by Design, EU-Hosting, Consent-Management, DSFA obligatorisch | - |


---

### Section 12: Call-to-Action
**Purpose:** Investment Ask & Next Steps
**Component Pattern:** CTA Hero Pattern
**Data Extraction:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset |
|---------|------------------|----------------|-------------------|--------------|
| Fazit | Text Block | `skinconnect_pitch_material.md` L169 | "Mit SkinAware & SkinConnect entsteht das erste voll integrierte digitale B2B2C-Ökosystem im Premium-Kosmetikmarkt: eine Plattform, die Reviderm, Institute und Endkunden gleichermaßen verbindet – skalierbar, compliant und umsatzstark." | - |
| Investment Ask | CTA Button | Implizit: Professional-Variante (420.000 €) oder Premium (2,0-2,5 Mio. €) | - |
| Next Steps | Text List | "Kontaktaufnahme, Due Diligence, Vertragsverhandlung" | - |


---

## 4. Content-Analyse

**Information Density:** **Sehr hoch (High)**
- **Reasoning:** 12 Sektionen mit datenintensivem Content (10-15 Charts benötigt, wissenschaftliche Belege, Finanztabellen, technische Architektur)

**Content Balance:**
- **Daten/Charts:** 10-15 Visualisierungen (~40%)
- **Text:** ~1.500 Zeilen Pitch-Material + 5 Research-Dokumente (~50%)
- **Images:** 0 verfügbar (~0%)
- **Tabellen:** 4-5 Tabellen (~10%)

**Content Type:** **Datengetrieben/Analytisch (Data-Driven)**
- Pitch-Deck-Format mit hohem Fakten-Anteil
- Wissenschaftliche Research-Fundierung
- Financial Projections & Business-Modell-Fokus

---

**Erstellt von:** MiniMax Agent  
**Datum:** 1. November 2025  
**Projekt:** SkinConnect Investment-Pitch Design-Spezifikation