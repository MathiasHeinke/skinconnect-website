# SkinConnect - B2B2C Ökosystem für digitale Hautanalyse

> **Revolutioniert die Beauty-Branche durch KI-gestützte Hautanalyse, Beratungsqualität und messbare Umsatzsteigerung**

[![Deploy Status](https://img.shields.io/badge/Deploy-Live-brightgreen)](https://u60crar48eez.space.minimax.io)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-blue)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple)](https://vitejs.dev/)

## 🎯 Überblick

SkinConnect ist ein innovatives B2B2C-Ökosystem, das die Beauty-Industrie durch digitale Hautanalyse, intelligente Beratungsqualität und messbare Geschäftsresultate transformiert.

### 🏗️ **Architektur**
- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + Custom Berry Theme
- **UI-Komponenten:** shadcn/ui
- **Build System:** Vite mit Fast Refresh
- **Package Manager:** PNPM

## ✨ Features

### 🔍 **SkinAware (Endkunden-App)**
- KI-gestützte digitale Hautanalyse per Smartphone
- Integration von Bildern, Routinen, Ernährungsdaten
- Triggerfaktoren-Tracking (Rosazea/Couperose-Katalog)
- Fortschritts-Tracking mit Gamification
- DSGVO-konforme Datenfreigabe an Institute

### 🏥 **SkinConnect (Instituts-App/Portal)**
- Einheitliche digitale Anamneseformulare
- Automatisierte Pflege- und Behandlungspläne
- Protokoll-Bibliothek (z.B. 6× Mikroderm + Needling)
- Automatische Bundle-Vorschläge
- Schulung und Vereinheitlichung der Beratungsqualität
- Strukturierte Entscheidungswege und Qualitätssicherung

### 📊 **ROI-Rechner**
- Interaktive Szenario-Simulation (Konservativ, Realistisch, Optimistisch)
- 3-Jahres-Projektion für App-Downloads und Premium-Nutzer
- Visualisierung von ROI-Entwicklung und Umsatz-Aufschlüsselung
- Detaillierte Quartalsübersichten

## 🚀 Schnellstart

### **Voraussetzungen**
- Node.js 20.19+ oder 22.12+
- PNPM (empfohlen)

### **Installation**
```bash
# Repository klonen
git clone https://github.com/MathiasHeinke/skinconnect-website.git
cd skinconnect-website

# Abhängigkeiten installieren
pnpm install

# Development Server starten
pnpm dev

# Production Build
pnpm build
```

### **Scripts**
```bash
pnpm dev          # Development Server
pnpm build        # Production Build
pnpm build:prod   # Production Build (Optimiert)
pnpm preview      # Build Preview
pnpm lint         # ESLint
pnpm clean        # Clean Dependencies
```

## 🎨 Design System

### **Farben**
- **Primär:** Berry-Theme (Pink/Rosa Palette)
- **Akzent:** Natürliche Kontraste
- **Status:** Success, Warning, Error

### **Komponenten**
- Responsive Grid Layout
- Glassmorphism-Effekte
- Card-basiertes Design
- Smooth Animations

## 📱 Technologie-Stack

| Komponente | Technologie | Version |
|------------|-------------|---------|
| Frontend | React | 18.3.1 |
| Language | TypeScript | 5.6.2 |
| Build Tool | Vite | 6.0.1 |
| Styling | Tailwind CSS | 3.4.16 |
| UI Components | shadcn/ui | Latest |
| Icons | Lucide React | 0.364.0 |
| Package Manager | PNPM | Latest |

## 🗂️ Projektstruktur

```
skinconnect-website/
├── public/                    # Statische Assets
├── src/
│   ├── components/           # React Komponenten
│   │   ├── ui/              # shadcn/ui Komponenten
│   │   ├── ROICalculator.tsx # ROI-Rechner
│   │   └── ErrorBoundary.tsx # Fehler-Behandlung
│   ├── hooks/               # Custom Hooks
│   ├── lib/                 # Utilities
│   ├── App.tsx              # Haupt-Komponente
│   ├── main.tsx             # Entry Point
│   └── index.css            # Global Styles
├── dist/                    # Production Build
├── dist_backup/             # Backup Build
└── docs/                    # Dokumentation
```

## 📈 Marktdaten

| Kennzahl | Wert | Quelle |
|----------|------|--------|
| DACH Beauty-Markt 2025 | 22,85 Mrd. € | Euromonitor International |
| Beauty-Tech CAGR bis 2030 | 4,63% | App Annie Data Report 2025 |
| Conversion App→Institut | 8-12% | Adobe Digital Economy Index 2024 |
| CPI Zielkorridor DACH | 1,5-3,0 € | AppsFlyer Performance Index 2025 |

## 💰 Preismodelle

### **Basic Package**
- **Preis:** 150.000–200.000 €
- **Features:** SkinAware App (Basis), KI-Hautanalyse, Institut-Link
- **Ideal für:** Kostengünstiger Einstieg

### **Professional Package** (Favorit)
- **Preis:** 420.000 € (bis 480.000 € bei monatlicher Zahlung)
- **Features:** SkinAware + SkinConnect Apps, CRM-Light, Institut-Integration
- **ROI:** Break-Even in Monat 8-9 bei 60-70% Institutsauslastung

### **Premium Package**
- **Preis:** 2,0–2,5 Mio. €
- **Features:** Full Ecosystem, GPT-Vision, AR-Guidance, Dermatologen-Netzwerk
- **Ideal für:** Größere Unternehmen und Scale-ups

## 🔗 Links

- **Live Demo:** [https://u60crar48eez.space.minimax.io](https://u60crar48eez.space.minimax.io)
- **Dokumentation:** [./docs/](./docs/)
- **Design System:** [./docs/design-specification.md](./docs/design-specification.md)

## 🤝 Beitragen

1. Fork das Repository
2. Feature Branch erstellen (`git checkout -b feature/amazing-feature`)
3. Commits erstellen (`git commit -m 'Add amazing feature'`)
4. Push zu Branch (`git push origin feature/amazing-feature`)
5. Pull Request öffnen

## 📄 Lizenz

Dieses Projekt ist proprietär. Alle Rechte vorbehalten.

## 👥 Team

- **Entwickler:** SkinConnect Team
- **Design:** Professionelles UI/UX Team
- **Datenanalyse:** Marktforschung und BI

---

**🌟 SkinConnect - Wo Beauty auf Technologie trifft** 🌟