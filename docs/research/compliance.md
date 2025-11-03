# DSGVO-Konforme Health-Tech-Lösungen: Rechtliche Rahmenbedingungen und Compliance-Guidelines

## Executive Summary

Die Entwicklung DSGVO-konformer Gesundheits- und Beauty-Apps erfordert ein tiefgreifendes Verständnis der europäischen Datenschutzgrundverordnung, der Medizinprodukteregulierung sowie spezifischer technischer und organisatorischer Anforderungen. Gesundheitsdaten gelten als besondere Kategorie personenbezogener Daten nach Artikel 9 DSGVO und unterliegen verschärften Schutzbestimmungen. Die zentrale Herausforderung liegt in der korrekten regulatorischen Einordnung der Anwendung – die Unterscheidung zwischen Medizinprodukt (Software as Medical Device, SaMD) und Wellness-App ist zweckbestimmungsabhängig und hat weitreichende Konsequenzen für Zulassungsverfahren, Haftungsrisiken und Compliance-Anforderungen[1][2][3].

Eine erfolgreiche Compliance-Strategie basiert auf vier Säulen: erstens der Implementierung von Privacy by Design und Privacy by Default bereits in der Entwicklungsphase, zweitens einem robusten Consent-Management-System mit granularen, widerrufbaren Einwilligungen, drittens der Einhaltung strenger EU-Hosting- und Datenlokalisierungsanforderungen sowie viertens der kontinuierlichen Dokumentation und Nachweisführung aller datenschutzrelevanten Maßnahmen[1][4]. Der Europäische Gesundheitsdatenraum (EHDS), dessen Verordnung am 26. März 2025 in Kraft getreten ist, schafft zusätzliche Rahmenbedingungen für die grenzüberschreitende Verarbeitung von Gesundheitsdaten[9].

## 1. Einleitung

Die Digitalisierung des Gesundheitswesens und der Beauty-Branche schreitet mit zunehmender Geschwindigkeit voran. Mobile Gesundheitsanwendungen (mHealth-Apps) bieten immense Potenziale für personalisierte Therapien, Präventionsmaßnahmen und Wellness-Optimierung. Gleichzeitig verarbeiten diese Anwendungen hochsensible personenbezogene Daten, deren Schutz von höchster Bedeutung ist. Die rechtlichen Rahmenbedingungen sind komplex und mehrdimensional: Neben der DSGVO sind je nach Zweckbestimmung die EU-Medizinprodukteverordnung (MDR 2017/745), nationale Gesundheitsdatengesetze sowie die neue EHDS-Verordnung zu beachten.

Dieser Leitfaden bietet eine systematische Darstellung der rechtlichen Anforderungen und praktischen Umsetzungsempfehlungen für Entwickler, Produktmanager und Compliance-Verantwortliche im Health-Tech- und Beauty-Tech-Bereich. Er basiert auf aktuellen EU-Rechtstexten, Leitlinien der Datenschutzbehörden und Best Practices führender Compliance-Experten[1][4][7].


## 2. DSGVO-Anforderungen für Gesundheits- und Beauty-Apps in der EU

### 2.1 Besondere Kategorien personenbezogener Daten (Art. 9 DSGVO)

Gesundheitsdaten werden in Artikel 9 Absatz 1 DSGVO als besondere Kategorie personenbezogener Daten klassifiziert, deren Verarbeitung grundsätzlich untersagt ist. Diese Kategorie umfasst nicht nur medizinische Diagnosen und Behandlungsdaten, sondern auch biometrische Daten zur eindeutigen Identifizierung einer Person, genetische Daten sowie alle Informationen über den körperlichen oder geistigen Gesundheitszustand[1]. Beauty-Apps, die beispielsweise Hautanalysen durchführen, Hautbilder speichern oder auf Basis physiologischer Parameter Empfehlungen aussprechen, fallen ebenfalls unter diese Definition.

Die Verarbeitung solcher Daten ist nur unter den in Artikel 9 Absatz 2 DSGVO genannten Ausnahmetatbeständen zulässig. Für Health- und Beauty-Apps ist in der Regel die ausdrückliche Einwilligung der betroffenen Person nach Artikel 9 Absatz 2 Buchstabe a DSGVO die relevante Rechtsgrundlage[1]. Diese muss sich explizit auf die Verarbeitung besonderer Kategorien personenbezogener Daten beziehen und darf nicht mit allgemeinen Nutzungsbedingungen vermengt werden. Alternativ können spezielle Rechtsgrundlagen greifen, etwa wenn die Verarbeitung für Zwecke der Gesundheitsvorsorge, der Arbeitsmedizin oder der medizinischen Diagnostik erforderlich ist und durch Personen erfolgt, die einer gesetzlichen Schweigepflicht unterliegen (Artikel 9 Absatz 2 Buchstabe h DSGVO)[1].

### 2.2 Privacy by Design und Privacy by Default (Art. 25 DSGVO)

Die Datenschutzgrundsätze müssen bereits in der Konzeptionsphase der App berücksichtigt werden. Privacy by Design bedeutet, dass datenschutzrechtliche Anforderungen von Beginn an in die Systemarchitektur integriert werden, nicht nachträglich als Add-on[1]. Dies umfasst technische Maßnahmen wie End-to-End-Verschlüsselung, Pseudonymisierung personenbezogener Daten, minimale Berechtigungsanforderungen und sichere Authentifizierungsverfahren.

Privacy by Default fordert, dass die Datenschutzeinstellungen standardmäßig auf dem höchsten Niveau konfiguriert sind[1]. Nutzer sollten beispielsweise zunächst nur die für die Kernfunktionalität absolut notwendigen Daten preisgeben müssen. Optionale Features wie Datenspende für Forschungszwecke, personalisierte Werbung oder Social-Sharing-Funktionen müssen explizit aktiviert werden (Opt-in-Prinzip). Eine Best Practice ist die Implementierung eines Privacy-Dashboards, in dem Nutzer jederzeit transparent einsehen können, welche Daten erhoben werden, und ihre Einwilligungen granular verwalten können[6].

### 2.3 Datenschutz-Folgenabschätzung (DSFA, Art. 35 DSGVO)

Für die meisten digitalen Gesundheits-Apps ist eine Datenschutz-Folgenabschätzung obligatorisch[1]. Die DSFA ist ein systematisches Verfahren zur Bewertung und Dokumentation der Risiken, die die geplante Datenverarbeitung für die Rechte und Freiheiten betroffener Personen mit sich bringt. Sie muss insbesondere dann durchgeführt werden, wenn umfangreiche Verarbeitungen besonderer Kategorien personenbezogener Daten erfolgen, systematische umfangreiche Überwachungen stattfinden oder neue Technologien wie KI-basierte Analysen eingesetzt werden.

Die DSFA umfasst typischerweise eine systematische Beschreibung der geplanten Verarbeitungsvorgänge und der Verarbeitungszwecke, eine Bewertung der Notwendigkeit und Verhältnismäßigkeit der Verarbeitung, eine Risikobewertung für die betroffenen Personen sowie die Darstellung der geplanten Abhilfemaßnahmen zur Risikominimierung[1]. Das Ergebnis der DSFA muss dokumentiert und regelmäßig überprüft werden, insbesondere bei wesentlichen Änderungen der Datenverarbeitung. Eine ordnungsgemäß durchgeführte DSFA ist nicht nur Compliance-Pflicht, sondern dient auch als wertvolles Instrument zur Identifizierung von Design-Schwachstellen und zur Entwicklung benutzerfreundlicher Lösungen[1].

### 2.4 Datenminimierung und Zweckbindung (Art. 5 DSGVO)

Das Prinzip der Datenminimierung nach Artikel 5 Absatz 1 Buchstabe c DSGVO verlangt, dass personenbezogene Daten dem Zweck angemessen und erheblich sowie auf das notwendige Maß beschränkt sein müssen[1]. Entwickler müssen kritisch prüfen, welche Datenerhebungen tatsächlich für die versprochene Funktionalität erforderlich sind. Beispielsweise benötigt eine Hautanalyse-App Hautbilder und möglicherweise Angaben zu Hauttyp und Alter, aber keine umfassenden Gesundheitsakten oder Standortdaten.

Pseudonymisierung und Anonymisierung sind wichtige Techniken zur Datenminimierung. Bei der Pseudonymisierung werden personenbezogene Daten so verarbeitet, dass sie ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen Person zugeordnet werden können, wobei die Daten jedoch grundsätzlich re-identifizierbar bleiben und weiterhin der DSGVO unterliegen[1]. Echte Anonymisierung führt dazu, dass der Personenbezug nicht wiederherstellbar ist, wodurch die DSGVO-Bestimmungen nicht mehr anwendbar sind (Erwägungsgrund 26 Satz 5 DSGVO)[1]. Für Forschungs- und Statistikzwecke sollte wann immer möglich mit anonymisierten Daten gearbeitet werden.

Die Zweckbindung (Art. 5 Abs. 1 Buchstabe b DSGVO) besagt, dass Daten nur für festgelegte, eindeutige und legitime Zwecke erhoben und nicht in einer mit diesen Zwecken unvereinbaren Weise weiterverarbeitet werden dürfen[1]. Wenn eine App ursprünglich zur Hautpflege-Beratung entwickelt wurde, dürfen die erhobenen Daten nicht ohne weitere Einwilligung für Werbezwecke oder die Entwicklung völlig neuer Produktlinien verwendet werden. Jeder zusätzliche Verarbeitungszweck muss bei der Datenerhebung transparent kommuniziert und legitimiert werden[1].


### 2.5 Dezentrale Datenspeicherung und Datensicherheit

Eine Best Practice im Health-Tech-Bereich ist die bevorzugte lokale Speicherung sensibler Daten auf dem Endgerät des Nutzers[1]. Dies minimiert das Risiko unbefugter Zugriffe, reduziert die Angriffsfläche für Cyberattacken und stärkt das Vertrauen der Nutzer. Funktionen wie Tagebucheinträge, persönliche Gesundheitsprotokolle oder Hautbilder können oft lokal gespeichert und verarbeitet werden, ohne dass eine Cloud-Synchronisation zwingend erforderlich ist.

Wenn eine zentrale Speicherung auf Servern oder in der Cloud notwendig ist – etwa für Multi-Device-Synchronisation, medizinische Konsultationen oder KI-gestützte Analysen – müssen die Daten sowohl bei der Übertragung als auch im Ruhezustand verschlüsselt werden[1]. Artikel 32 DSGVO fordert ein Sicherheitsniveau, das dem Risiko angemessen ist. Bei Gesundheitsdaten, die ein hohes Risiko für die Rechte und Freiheiten der betroffenen Personen darstellen, sind entsprechend strenge Sicherheitsmaßnahmen zu implementieren. Dazu gehören die Pseudonymisierung und Verschlüsselung personenbezogener Daten, die Fähigkeit zur dauerhaften Sicherstellung der Vertraulichkeit, Integrität, Verfügbarkeit und Belastbarkeit der Systeme sowie ein Verfahren zur regelmäßigen Überprüfung, Bewertung und Evaluierung der Wirksamkeit der technischen und organisatorischen Maßnahmen[1].

Konkrete Sicherheitsmaßnahmen umfassen die zeitnahe Anwendung sicherheitsrelevanter Patches und Updates, die Implementierung starker Passwortrichtlinien, automatische Abmeldungen nach Inaktivität, Zwei-Faktor-Authentifizierung, verschlüsselte Datenübertragungen (mindestens TLS 1.2 oder höher), regelmäßige Penetrationstests und Sicherheitsaudits sowie ein Incident-Response-Plan für Datenschutzverletzungen[1].

### 2.6 Transparenz und Informationspflichten (Art. 13, 14 DSGVO)

Die Datenschutzerklärung muss besonders benutzerfreundlich, transparent und app-spezifisch gestaltet sein[1]. Allgemeine, rechtlich formulierte Textbausteine genügen nicht den Anforderungen der DSGVO. Die Informationen müssen in präziser, verständlicher und leicht zugänglicher Form in einer klaren und einfachen Sprache bereitgestellt werden (Art. 12 Abs. 1 DSGVO).

Die Datenschutzerklärung muss bereits im App Store verfügbar sein, da die Informationspflicht „zum Zeitpunkt der Erhebung der personenbezogenen Daten" greift[1]. Innerhalb der App sollte die Datenschutzerklärung jederzeit leicht auffindbar sein, idealerweise über ein prominentes Menü-Icon. Best Practice ist eine mehrschichtige Darstellung: Eine Kurzzusammenfassung der wichtigsten Punkte (Layered Notice) mit der Möglichkeit, bei Bedarf detaillierte Informationen aufzurufen.

Pflichtinformationen nach Artikel 13 DSGVO umfassen unter anderem die Identität und Kontaktdaten des Verantwortlichen, die Kontaktdaten des Datenschutzbeauftragten (falls vorhanden), die Verarbeitungszwecke und die Rechtsgrundlage, bei berechtigten Interessen diese Interessen, die Empfänger oder Kategorien von Empfängern der personenbezogenen Daten, die Absicht der Datenübermittlung an Drittländer sowie die Speicherdauer[1]. Bei Gesundheitsdaten muss besonders klar kommuniziert werden, welche Daten zu welchem spezifischen Zweck verarbeitet werden.

### 2.7 Betroffenenrechte und deren technische Umsetzung

Nutzer haben nach der DSGVO umfassende Rechte, deren Ausübung die App-Architektur ermöglichen muss[1]. Das Auskunftsrecht (Art. 15 DSGVO) verpflichtet den Verantwortlichen, der betroffenen Person auf Antrag alle über sie gespeicherten Daten in strukturierter, gängiger und maschinenlesbarer Form bereitzustellen. Eine technische Umsetzung kann ein Export-Feature innerhalb der App sein, das alle Nutzerdaten in einem standardisierten Format (z.B. JSON oder CSV) exportiert.

Das Recht auf Berichtigung (Art. 16 DSGVO) und das Recht auf Löschung (Art. 17 DSGVO, „Recht auf Vergessenwerden") müssen ebenso technisch implementiert sein. Nutzer sollten ihre persönlichen Daten direkt in der App korrigieren und bei Bedarf ihr gesamtes Konto inklusive aller personenbezogenen Daten löschen können. Die Löschung muss unverzüglich erfolgen und sollte auch Backups und Archivdaten umfassen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.

Das Recht auf Datenübertragbarkeit (Art. 20 DSGVO) ermöglicht es Nutzern, ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und an einen anderen Verantwortlichen zu übermitteln[1]. Dies fördert die Interoperabilität zwischen verschiedenen Health-Tech-Plattformen und gibt Nutzern mehr Kontrolle über ihre Daten.

### 2.8 Besondere Anforderungen für erstattungsfähige digitale Gesundheitsanwendungen (DiGA)

In Deutschland existiert mit der Digitale-Gesundheitsanwendungen-Verordnung (DiGAV) ein spezifisches Regulierungsrahmen für verschreibungsfähige Gesundheits-Apps, die von gesetzlichen Krankenkassen erstattet werden[1]. Die DiGAV geht über die allgemeinen DSGVO-Anforderungen hinaus und stellt zusätzliche strenge Bedingungen auf.

Anbieter von DiGA müssen die Einhaltung der Anforderungen an Datenschutz und Datensicherheit gemäß dem Stand der Technik gegenüber dem Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM) nachweisen[1]. Dies erfolgt mittels einer detaillierten Selbsterklärung anhand eines standardisierten Fragebogens (Anhang 1 zur DiGAV). Die Datenverarbeitung ist ausschließlich auf Basis der ausdrücklichen Einwilligung des Nutzers zulässig, und die zulässigen Verarbeitungszwecke sind abschließend geregelt: versorgungsrelevante Zwecke (bestimmungsgemäße Nutzung, Nachweis positiver Versorgungseffekte) sowie Sicherstellung der technischen Funktionalität und Weiterentwicklung[1]. Die Verarbeitung für andere Zwecke, insbesondere für Werbezwecke, ist ausdrücklich untersagt.

Besonders restriktiv ist die Anforderung an den Speicherort: Die Daten dürfen ausschließlich in Ländern der Europäischen Union, des Europäischen Wirtschaftsraums oder in Drittländern mit einem wirksamen Angemessenheitsbeschluss gemäß Artikel 45 DSGVO gespeichert werden[1]. Eine Speicherung in den USA ist derzeit trotz des neuen EU-US Data Privacy Framework mit erheblichen rechtlichen Unsicherheiten verbunden und wird für DiGA nicht empfohlen.


## 3. Medizinprodukt (SaMD) vs. Wellness-App: Regulatorische Abgrenzung

### 3.1 Grundlegende Definitionen und rechtlicher Rahmen

Die Einordnung einer Softwareanwendung als Medizinprodukt oder Wellness-App hat weitreichende regulatorische, haftungsrechtliche und wirtschaftliche Konsequenzen. Software as a Medical Device (SaMD) unterliegt der strengen Regulierung der Europäischen Medizinprodukteverordnung (EU MDR 2017/745), während Wellness-Apps lediglich allgemeine Produktsicherheitsanforderungen erfüllen müssen[2][3].

Nach Artikel 2 Absatz 1 MDR ist ein Medizinprodukt jedes Instrument, jeder Apparat, jedes Gerät, jede Software oder jeder andere Gegenstand, der vom Hersteller für einen oder mehrere der folgenden spezifischen medizinischen Zwecke zur Anwendung bei Menschen bestimmt ist: Diagnose, Verhütung, Überwachung, Vorhersage, Prognose, Behandlung oder Linderung von Krankheiten; Diagnose, Überwachung, Behandlung, Linderung oder Kompensierung von Verletzungen oder Behinderungen; Untersuchung, Ersatz oder Veränderung der Anatomie oder eines physiologischen oder pathologischen Vorgangs oder Zustands[2][3].

Entscheidend ist die vom Hersteller festgelegte Zweckbestimmung, nicht primär die technischen Funktionen oder die tatsächliche Nutzung[2][3]. Eine Software, die physiologische Parameter misst, kann je nach Zweckbestimmung ein Medizinprodukt oder ein Wellness-Produkt sein. Beispiel: Eine Pulsmess-App, die für allgemeine Fitnesszwecke beworben wird, ist kein Medizinprodukt. Dieselbe App, die als Hilfsmittel zur Überwachung von Herzrhythmusstörungen oder zur Unterstützung medizinischer Diagnosen positioniert wird, fällt unter die MDR[2].

### 3.2 Klassifizierungskriterien und praktische Beispiele

Die MDCG-Leitlinie 2019-11 bietet eine systematische Entscheidungshilfe zur Qualifizierung und Klassifizierung von Software[2][3]. Software qualifiziert sich als SaMD, wenn sie einen eigenständigen medizinischen Zweck verfolgt, einen medizinischen Mehrwert bietet, der über bloße Datenspeicherung hinausgeht, typischerweise einen Call to Action im medizinischen Kontext beinhaltet und sich von virtuell identischen Systemen außerhalb des Medizinproduktsektors unterscheidet[3].

**Praktische Beispiele:**

- **Wellness-App (kein Medizinprodukt):** Eine Hautpflege-App mit Produktempfehlungen ohne medizinische Claims. Eine Atemtrainings-App zur Stressreduktion ohne Krankheitsdiagnose.

- **Medizinprodukt Klasse I:** Software zur Pulsprotokollierung für medizinische Zwecke mit Behandlungsverbesserungs-Claims. Physiotherapie-App mit KI-Empfehlungen zur Übungsverbesserung ohne Diagnose[2]. Erfordert ISO 13485 QMS und technische Dokumentation.

- **Medizinprodukt Klasse IIa:** Software zur Diagnoseunterstützung, wie Pulserfassung mit Analyse zur Erkennung von Herzfunktionsstörungen[2]. Jede Diagnosefunktionalität führt typischerweise zu Klasse IIa nach MDR Anhang VIII Regel 11.

- **Medizinprodukt Klasse IIb/III:** Echtzeit-Überwachung von Vitalfunktionen (IIb) oder Intensivpflege-Monitoring mit lebenskritischen Alarmen (III)[2].


### 3.3 Strategien zur Vermeidung der Medizinprodukt-Klassifizierung

Für viele Beauty-Tech- und Wellness-Startups ist die Vermeidung der Medizinprodukt-Klassifizierung strategisch sinnvoll[2]. Dies kann durch bewusste Gestaltung erreicht werden:

Erstens sollten alle medizinischen Claims vermieden werden. Begriffe wie „Diagnose", „Behandlung", „Therapie" sollten nicht verwendet werden. Stattdessen sind Formulierungen wie „Wellness", „Wohlbefinden", „Schönheit", „Lifestyle" zu bevorzugen[2]. Zweitens sollte die App keine medizinische Entscheidungsunterstützung implementieren. Reine Darstellung von Messwerten ist unkritisch, aber deren Interpretation mit medizinischen Empfehlungen führt zur Medizinprodukt-Klassifizierung[2]. Drittens sollten Diagnose- oder Prognose-Algorithmen vermieden werden. Viertens sollten die Nutzungsbedingungen explizit klarstellen, dass die App nicht für medizinische Zwecke bestimmt ist[3].

### 3.4 Konsequenzen der Medizinprodukt-Klassifizierung

Wird eine Software als Medizinprodukt klassifiziert, ergeben sich umfassende regulatorische Verpflichtungen[3]: QMS nach ISO 13485, umfangreiche technische Dokumentation gemäß MDR Anhang II und III, Risikomanagementsystem nach ISO 14971, Software-Entwicklung nach IEC 62304, klinische Bewertung nach MDR Artikel 61, Post-Market Surveillance (PMS) System sowie für Klasse IIa und höher eine Zertifizierung durch eine Benannte Stelle vor CE-Kennzeichnung[3].

Die Entwicklungskosten können bei 50.000 bis 150.000 Euro für Klasse I und 150.000 bis 500.000 Euro oder mehr für Klasse IIa liegen[2]. Der Zeitaufwand verlängert sich typischerweise um 12 bis 36 Monate. Allerdings eröffnet die Medizinprodukt-Zertifizierung auch Chancen: In Deutschland können zertifizierte Produkte als DiGA registriert und verschreibungsfähig werden[2].


## 4. Consent-Management Best Practices

### 4.1 DSGVO-konforme Einwilligungsanforderungen

Die Einwilligung nach Artikel 6 Absatz 1 Buchstabe a DSGVO und insbesondere die ausdrückliche Einwilligung für die Verarbeitung von Gesundheitsdaten nach Artikel 9 Absatz 2 Buchstabe a DSGVO muss strengen Qualitätsstandards entsprechen. Die DSGVO verlangt, dass die Einwilligung freiwillig, spezifisch, informiert und eindeutig ist[4][7]. Freiwilligkeit bedeutet, dass die Zustimmung ohne Zwang erfolgt und keine echte Wahlfreiheit durch Koppelungsverbote eingeschränkt wird. Die Nutzung einer App darf grundsätzlich nicht von der Einwilligung in die Verarbeitung nicht notwendiger Daten abhängig gemacht werden[4].

Spezifität erfordert, dass die Einwilligung sich auf klar definierte Verarbeitungszwecke bezieht[4]. Eine pauschale Einwilligung in „alle Datenverarbeitungen" ist unzulässig. Stattdessen müssen granulare Einwilligungen für verschiedene Zwecke eingeholt werden, beispielsweise getrennte Einwilligungen für die Kernfunktionalität der App, für optionale Analysen, für Forschungszwecke und für personalisierte Werbung. Informiertheit verlangt, dass Nutzer vor der Einwilligung umfassend über die Datenverarbeitung informiert werden, einschließlich der Identität des Verantwortlichen, der Verarbeitungszwecke, der Kategorien verarbeiteter Daten, der Empfänger und des Rechts auf Widerruf[4].

Eindeutigkeit bedeutet, dass die Einwilligung durch eine klare, bejahende Handlung erklärt werden muss[4]. Vorab angekreuzte Kästchen, Opt-out-Mechanismen oder Stillschweigen genügen nicht. Die Einwilligung kann durch Ankreuzen eines Kästchens, Antippen einer Schaltfläche oder eine mündliche Erklärung erfolgen. Entscheidend ist, dass die Handlung eindeutig den Willen zur Einwilligung ausdrückt[4].

### 4.2 Timing und kontextuelle Präsentation

Der Zeitpunkt und die Art der Einwilligungsabfrage haben maßgeblichen Einfluss auf die Nutzerakzeptanz und die rechtliche Wirksamkeit[4]. Best Practice ist die Präsentation der Einwilligungsanfrage genau dann, wenn die entsprechenden Daten benötigt werden (Point-of-Request-Prinzip)[4]. Beispielsweise sollte die Anfrage für Kamerazugriff erfolgen, wenn der Nutzer eine Hautanalyse-Funktion startet, nicht bereits beim ersten App-Start. Diese kontextuelle Platzierung erhöht die Transparenz, da der Nutzer den unmittelbaren Nutzen der Datenverarbeitung erkennt, und verbessert die Einwilligungsraten, da die Anfrage als nachvollziehbar und angemessen wahrgenommen wird[4].

Nutzer sollten jederzeit die Möglichkeit haben, ihre Einwilligungen einfach und ohne Hürden zu widerrufen[4][6]. Der Widerruf muss ebenso einfach sein wie die Erteilung der Einwilligung (Art. 7 Abs. 3 DSGVO). Ein Privacy-Dashboard innerhalb der App, in dem alle erteilten Einwilligungen aufgelistet sind und mit einem einfachen Toggle-Schalter widerrufen werden können, ist eine technisch elegante Lösung[6]. Nach einem Widerruf dürfen die Daten für den jeweiligen Zweck nicht mehr verarbeitet werden, wobei die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung unberührt bleibt.

### 4.3 Design und Kommunikation der Consent-Schnittstelle

Die Gestaltung der Consent-Schnittstelle muss klar erkennbar als Teil der eigenen App sein und darf nicht mit Betriebssystem-Benachrichtigungen verwechselbar sein[4]. Die Verwendung app-eigener Schriftarten, Farben und Design-Elemente stellt sicher, dass Nutzer verstehen, dass die App selbst die Daten anfordert, nicht das Betriebssystem. Dies fördert Transparenz und Vertrauen.

Die Sprache der Einwilligungsanfrage muss klar, einfach und verständlich sein[4]. Eine Orientierung ist die Empfehlung, die Sprache so zu gestalten, dass sie für ein 13-jähriges Kind verständlich ist, da dies in vielen Rechtsordnungen das Mindestalter für die eigenständige Erteilung einer Einwilligung ist[4]. Juristische Fachterminologie, komplexe Verschachtelungen und unverständliche Formulierungen sind zu vermeiden. Positiv formulierte Erklärungen, die den Nutzen für den Nutzer betonen, erhöhen die Akzeptanz.

Die Einwilligungsanfrage muss dem Nutzer gleichwertige Optionen zum Akzeptieren und Ablehnen bieten[4]. Design-Dark Patterns, die die Ablehnung erschweren oder weniger prominent darstellen, sind DSGVO-widrig. Beide Schaltflächen sollten gleich groß, gleich auffällig und sprachlich neutral gestaltet sein (z.B. „Zustimmen" und „Ablehnen", nicht „Ja, ich möchte von tollen Funktionen profitieren" versus „Nein, ich verzichte").

### 4.4 Dokumentation und Nachweispflicht

Der Verantwortliche muss nachweisen können, dass die betroffene Person in die Verarbeitung ihrer personenbezogenen Daten eingewilligt hat (Art. 7 Abs. 1 DSGVO)[6]. Dies erfordert eine lückenlose Dokumentation aller Einwilligungen. Best Practice ist die Speicherung folgender Informationen: Zeitstempel der Einwilligung (Datum und Uhrzeit), Version der Datenschutzerklärung und Einwilligungstexte zum Zeitpunkt der Einwilligung, spezifische Verarbeitungszwecke, denen zugestimmt wurde, technische Modalitäten der Einwilligungserteilung (z.B. Checkbox angekreuzt, Button geklickt) sowie IP-Adresse oder Geräte-ID zur Identifizierung des Einwilligungsvorgangs[6].

Diese Aufzeichnungen müssen sicher gespeichert und vor Manipulation geschützt werden. Im Streitfall oder bei Anfragen von Aufsichtsbehörden muss der Verantwortliche belegen können, dass eine gültige Einwilligung vorlag. Gleichzeitig muss auch der Widerruf von Einwilligungen dokumentiert werden, einschließlich des Zeitpunkts und der Bestätigung der Umsetzung (Beendigung der Datenverarbeitung für den widerrufenen Zweck)[6].

### 4.5 Spezielle Anforderungen für Kinder

Wenn Gesundheits- oder Beauty-Apps sich an Kinder oder Jugendliche richten oder von diesen genutzt werden könnten, gelten verschärfte Anforderungen nach Artikel 8 DSGVO[7]. In der EU ist die Einwilligung eines Kindes unter 16 Jahren (in Deutschland unter 16 Jahren, in anderen Mitgliedstaaten teils ab 13 Jahren) nur rechtswirksam, wenn sie durch den Träger der elterlichen Verantwortung erteilt oder genehmigt wird.

Apps müssen technische Mechanismen zur Altersprüfung implementieren, um sicherzustellen, dass bei minderjährigen Nutzern die elterliche Einwilligung eingeholt wird[7]. Dies kann durch Abfrage des Geburtsdatums, Verifizierung der Eltern per E-Mail oder andere angemessene Verfahren erfolgen. Die Informationen müssen besonders kindgerecht aufbereitet sein, sodass sowohl das Kind als auch die Eltern die Datenverarbeitung verstehen können[7].


## 5. EU-Hosting-Anforderungen für sensible Daten

### 5.1 Datenresidenz, Gerichtsbarkeit und Datensouveränität

Die DSGVO schreibt nicht explizit vor, dass personenbezogene Daten physisch innerhalb der Europäischen Union oder des Europäischen Wirtschaftsraums (EWR) gespeichert werden müssen[5]. Sie reguliert jedoch sehr streng jede Übermittlung personenbezogener Daten in Länder außerhalb des EWR (Kapitel V DSGVO, Art. 44-50). Diese Unterscheidung ist entscheidend: Selbst wenn Daten physisch in der EU gespeichert werden (Datenresidenz), kann eine rechtliche Datenübermittlung vorliegen, wenn der Dienstleister in einem Drittland ansässig ist und damit ausländischer Gerichtsbarkeit unterliegt[5].

Drei zentrale Konzepte sind zu unterscheiden[5]: Datenresidenz bezeichnet den physischen Speicherort der Daten. Gerichtsbarkeit bestimmt, welches Land und welche Behörden rechtlich Zugriff auf die Daten haben können. Datensouveränität ist der Grundsatz, dass Daten primär den Gesetzen des Landes unterliegen, in dem sie gespeichert sind, wobei jedoch extraterritoriale Gesetze wie der US CLOUD Act diesen Grundsatz durchbrechen können.

Ein EU-basiertes Hosting bei einem Anbieter mit ausschließlicher EU-Gerichtsbarkeit ist der einfachste und sicherste Weg, um die komplexen Anforderungen an internationale Datenübermittlungen zu vermeiden[5]. Wenn ein Anbieter alle personenbezogenen Daten innerhalb der EU hostet, vollständig im Eigentum einer EU-Entität steht, ausschließlich unter EU-Gerichtsbarkeit operiert und keine Subunternehmer aus Drittländern einsetzt, greifen die Bestimmungen von Kapitel V DSGVO nicht. Dies eliminiert die Notwendigkeit von Standardvertragsklauseln (SCCs), Transfer Impact Assessments (TIAs) und zusätzlichen technischen Schutzmaßnahmen[5].

### 5.2 Problematik US-amerikanischer Cloud-Anbieter

Selbst wenn ein US-Unternehmen Rechenzentren in Deutschland oder anderen EU-Staaten betreibt und die Datenresidenz garantiert, unterliegt der Anbieter weiterhin der US-Gerichtsbarkeit[5]. Der US CLOUD Act (Clarifying Lawful Overseas Use of Data Act) von 2018 verpflichtet US-Unternehmen, auf Anforderung US-amerikanischer Behörden Zugriff auf Daten zu gewähren, unabhängig davon, wo diese Daten physisch gespeichert sind. Ebenso ermöglicht Section 702 des Foreign Intelligence Surveillance Act (FISA) US-Geheimdiensten den Zugriff auf Kommunikationsdaten von Nicht-US-Personen ohne individuelle richterliche Anordnung[5].

Das Schrems-II-Urteil des Europäischen Gerichtshofs (EuGH) von 2020 hat das EU-US Privacy Shield für ungültig erklärt und festgestellt, dass US-Überwachungsgesetze keine ausreichenden Rechtsbehelfe für EU-Bürger bieten[5]. Standardvertragsklauseln (SCCs) allein sind nicht ausreichend; Verantwortliche müssen ein Transfer Impact Assessment (TIA) durchführen und gegebenenfalls zusätzliche technische Maßnahmen wie Verschlüsselung oder Pseudonymisierung implementieren. Die rechtliche Situation bleibt trotz des neuen EU-US Data Privacy Framework unsicher, und eine erneute gerichtliche Anfechtung wird erwartet[5].

Für sensible Gesundheitsdaten ist die Nutzung US-americanoscher Cloud-Anbieter daher mit erheblichen Compliance-Risiken verbunden. Öffentliche Ausschreibungen im Gesundheits- und Bildungssektor erfordern häufig explizit EU-Hosting, und Datenschutzbehörden prüfen Drittlandtransfers von Gesundheitsdaten besonders kritisch[5].

### 5.3 EU-Cloud-Anbieter und Zertifizierungen

Europäische Cloud-Anbieter mit ausschließlicher EU-Gerichtsbarkeit bieten den höchsten Compliance-Standard für Gesundheitsdaten[5][10]. Wichtige Zertifizierungen und Standards sind:

Die HDS-Zertifizierung (Hébergeur de Données de Santé) ist in Frankreich obligatorisch für das Hosting von Gesundheitsdaten und wird zunehmend auch in anderen EU-Ländern als Qualitätsmerkmal anerkannt[10]. Die Zertifizierung wird von der französischen Agentur für Digitales im Gesundheitswesen (ANS) vergeben und umfasst strenge Anforderungen an technische Sicherheitsmaßnahmen, Verfügbarkeit, Verschlüsselung und Zugangskontrollen[10]. Anbieter wie OVHcloud bieten HDS-zertifizierte Hosting-Dienste in Frankreich, Deutschland, Polen und anderen EU-Ländern an[10].

Das C5-Testat (Cloud Computing Compliance Criteria Catalogue) des Bundesamts für Sicherheit in der Informationstechnik (BSI) ist in Deutschland für Cloud-Computing im Gesundheitswesen seit Juli 2024 verpflichtend[8]. § 393 SGB V verlangt ein aktuelles C5-Typ2-Testat ab Juli 2025 für datenverarbeitende Stellen, die Gesundheits- oder Sozialdaten in der Cloud speichern[8]. Das C5-Testat prüft die Implementierung und fortlaufende Wirksamkeit von Sicherheitsmaßnahmen und stellt sicher, dass Cloud-Dienste dem Stand der Technik entsprechen[8].

Weitere relevante Zertifizierungen sind ISO 27001 (Informationssicherheits-Managementsystem), ISO 27017 (Cloud-spezifische Sicherheitskontrollen), ISO 27018 (Schutz personenbezogener Daten in der Cloud), SOC 2 Typ II (Service Organization Control) sowie branchenspezifische Sicherheitsstandards nach § 390 SGB V (vertragsärztliche Versorgung) und § 391 SGB V (Krankenhäuser)[8].

### 5.4 Drittlandtransfers und Angemessenheitsbeschlüsse

Wenn eine Datenübermittlung in ein Drittland außerhalb des EWR unvermeidbar ist, sind die Anforderungen von Kapitel V DSGVO zu beachten[5]. Artikel 45 DSGVO erlaubt Übermittlungen in Länder, die von der Europäischen Kommission als „angemessen" eingestuft wurden, d.h. ein Datenschutzniveau bieten, das dem der EU im Wesentlichen gleichwertig ist. Aktuell (Stand November 2025) verfügen folgende Länder über einen Angemessenheitsbeschluss: Andorra, Argentinien, Kanada (nur kommerzielle Organisationen), Färöer-Inseln, Guernsey, Israel, Isle of Man, Japan, Jersey, Neuseeland, Republik Korea, Schweiz, Vereinigtes Königreich und Uruguay[5].

Die USA sind nicht auf dieser Liste. Das neue EU-US Data Privacy Framework ist zwar in Kraft, aber seine langfristige Tragfähigkeit ist angesichts der unveränderten US-Überwachungsgesetze ungewiss[5]. Für DiGA und andere hochregulierte Gesundheitsanwendungen wird empfohlen, ausschließlich auf EU/EWR-Hosting oder Länder mit Angemessenheitsbeschluss zu setzen[1].

Wenn kein Angemessenheitsbeschluss vorliegt, können Datenübermittlungen nach Artikel 46 DSGVO auf Basis geeigneter Garantien erfolgen, insbesondere durch Standardvertragsklauseln (SCCs)[5]. Diese müssen jedoch durch ein Transfer Impact Assessment (TIA) ergänzt werden, das die rechtlichen und praktischen Gegebenheiten im Drittland bewertet. Falls das TIA ergibt, dass das Schutzniveau unzureichend ist, müssen zusätzliche technische Maßnahmen implementiert werden, etwa End-to-End-Verschlüsselung, bei der der Drittlandanbieter keinen Zugriff auf die Entschlüsselungskeys hat[5].

Artikel 49 DSGVO sieht Ausnahmen für spezifische Situationen vor, etwa die ausdrückliche Einwilligung nach umfassender Information über die Risiken, die Notwendigkeit für die Vertragserfüllung oder zwingende berechtigte Interessen[5]. Diese Ausnahmen sind jedoch eng auszulegen und eignen sich nicht für den regelmäßigen, systematischen Betrieb einer Gesundheits-App.

### 5.5 Technische Schutzmaßnahmen und Verschlüsselung

Unabhängig vom Hosting-Standort sind robuste technische Schutzmaßnahmen essentiell[1][8]. Verschlüsselung ist das zentrale Instrument zum Schutz von Gesundheitsdaten. Daten müssen sowohl in transit (während der Übertragung) als auch at rest (im Ruhezustand) verschlüsselt werden. Für die Übertragung sollte mindestens TLS 1.2, idealerweise TLS 1.3 eingesetzt werden[1]. Für die Speicherverschlüsselung sind AES-256 oder vergleichbare Standards angemessen.

End-to-End-Verschlüsselung (E2EE) bietet den höchsten Schutz, da nur der Nutzer und autorisierte Empfänger die Daten entschlüsseln können, nicht jedoch der Dienstanbieter oder potenzielle Angreifer[1]. Dies ist besonders relevant bei Cloud-Hosting in Drittländern oder bei besonders sensiblen Daten wie genetischen Informationen oder psychologischen Profilen. Allerdings erschwert E2EE bestimmte Funktionen wie Server-seitige Analysen oder Cloud-basierte KI-Auswertungen.

Pseudonymisierung ist eine weitere wichtige Technik, bei der personenbezogene Daten so verarbeitet werden, dass sie ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer spezifischen Person zugeordnet werden können[1]. Die Zuordnungsinformationen (z.B. eine Mapping-Tabelle zwischen Pseudonymen und echten Identitäten) müssen getrennt und besonders geschützt gespeichert werden. Pseudonymisierung reduziert das Risiko bei Datenpannen und ist für Forschungs- und Analysezwecke oft ausreichend.

Zugangskontrollen müssen nach dem Prinzip der geringsten Berechtigung (Principle of Least Privilege) implementiert werden[8]. Nur Personen und Systeme, die für ihre Aufgaben zwingend Zugriff auf bestimmte Daten benötigen, sollten diesen erhalten. Rollenbasierte Zugriffskontrollen (RBAC), Zwei-Faktor-Authentifizierung (2FA) und regelmäßige Zugriffsprotokolle (Audit Logs) sind Best Practice[1][8].


## 6. DSGVO-Compliance-Checkliste für Health-Tech und Beauty-Tech Apps

### 6.1 Konzeption und Planung

- [ ] **Regulatorische Einordnung klären**: Ist die App ein Medizinprodukt (SaMD) oder eine Wellness-App? Zweckbestimmung dokumentieren.
- [ ] **Datenschutz-Folgenabschätzung (DSFA) durchführen**: Obligatorisch bei Verarbeitung besonderer Kategorien personenbezogener Daten (Art. 35 DSGVO).
- [ ] **Privacy by Design implementieren**: Datenschutz von Beginn an in die Systemarchitektur integrieren (Art. 25 DSGVO).
- [ ] **Privacy by Default konfigurieren**: Datenschutzeinstellungen standardmäßig auf höchstem Niveau (Art. 25 DSGVO).
- [ ] **Datenminimierung planen**: Nur absolut notwendige Daten erheben (Art. 5 Abs. 1 lit. c DSGVO).
- [ ] **Rechtsgrundlagen definieren**: Für jeden Verarbeitungszweck geeignete Rechtsgrundlage identifizieren (Art. 6, Art. 9 DSGVO).

### 6.2 Technische Implementierung

- [ ] **Verschlüsselung implementieren**: TLS 1.2+ für Übertragung, AES-256 für Speicherung (Art. 32 DSGVO).
- [ ] **Dezentrale Speicherung bevorzugen**: Sensible Daten wo möglich lokal auf Nutzergeräten speichern.
- [ ] **Pseudonymisierung/Anonymisierung einsetzen**: Insbesondere für Analyse- und Forschungszwecke.
- [ ] **Zugangskontrollen etablieren**: Rollenbasierte Zugriffe, Zwei-Faktor-Authentifizierung, starke Passwortrichtlinien.
- [ ] **Automatische Abmeldung**: Nach Inaktivität automatisch abmelden.
- [ ] **Sichere APIs**: Authentifizierung und Autorisierung für alle API-Endpunkte.
- [ ] **Berechtigungsmanagement**: Minimale notwendige App-Berechtigungen anfordern.

### 6.3 Consent-Management

- [ ] **Granulare Einwilligungen**: Separate Einwilligungen für verschiedene Verarbeitungszwecke.
- [ ] **Ausdrückliche Einwilligung für Gesundheitsdaten**: Nach Art. 9 Abs. 2 lit. a DSGVO.
- [ ] **Point-of-Request-Prinzip**: Einwilligung zum Zeitpunkt der Datenerhebung einholen.
- [ ] **Klare und einfache Sprache**: Verständlich für durchschnittliche Nutzer, idealerweise Sprachniveau eines 13-Jährigen.
- [ ] **Gleichwertige Akzeptieren/Ablehnen-Optionen**: Keine Design-Dark Patterns.
- [ ] **Widerrufsmechanismus**: Einfacher Widerruf jederzeit möglich (Art. 7 Abs. 3 DSGVO).
- [ ] **Privacy-Dashboard**: Übersicht und Verwaltung aller Einwilligungen.
- [ ] **Dokumentation**: Zeitstempel, Version der Einwilligungstexte, spezifische Zwecke protokollieren.
- [ ] **Altersprüfung**: Bei Apps für Minderjährige elterliche Einwilligung einholen (Art. 8 DSGVO).

### 6.4 Informationspflichten und Transparenz

- [ ] **Datenschutzerklärung erstellen**: App-spezifisch, klar, verständlich (Art. 13, 14 DSGVO).
- [ ] **Mehrschichtige Darstellung (Layered Notice)**: Kurzzusammenfassung und Detailinformationen.
- [ ] **Verfügbarkeit im App Store**: Datenschutzerklärung bereits vor Download zugänglich.
- [ ] **In-App-Zugriff**: Datenschutzerklärung jederzeit in der App auffindbar.
- [ ] **Pflichtinformationen vollständig**: Verantwortlicher, DSB-Kontakt, Zwecke, Rechtsgrundlage, Empfänger, Speicherdauer, Drittlandtransfers, Betroffenenrechte.
- [ ] **Verständliche Sprache**: Keine Juristensprache, klare Formulierungen.

### 6.5 Betroffenenrechte

- [ ] **Auskunftsrecht**: Export-Funktion für alle Nutzerdaten in maschinenlesbarem Format (Art. 15 DSGVO).
- [ ] **Berichtigungsrecht**: Nutzer können Daten in der App korrigieren (Art. 16 DSGVO).
- [ ] **Löschrecht**: Vollständige Kontolöschung inkl. Backups möglich (Art. 17 DSGVO).
- [ ] **Datenübertragbarkeit**: Strukturierter Export (z.B. JSON, CSV) (Art. 20 DSGVO).
- [ ] **Widerspruchsrecht**: Gegen Datenverarbeitung auf Basis berechtigter Interessen (Art. 21 DSGVO).
- [ ] **Prozesse für Anfragen**: Klar definierte Verfahren für Betroffenenanfragen etablieren.

### 6.6 Hosting und Infrastruktur

- [ ] **EU-Hosting priorisieren**: Daten in EU/EWR oder Ländern mit Angemessenheitsbeschluss speichern.
- [ ] **EU-Gerichtsbarkeit sicherstellen**: Anbieter ohne Bindung an Drittlandgesetze (z.B. US CLOUD Act) wählen.
- [ ] **Zertifizierungen prüfen**: HDS (für Gesundheitsdaten), C5-Testat (Deutschland ab 2025), ISO 27001/27017/27018.
- [ ] **Auftragsverarbeitervertrag (AVV)**: Nach Art. 28 DSGVO mit allen Dienstleistern abschließen.
- [ ] **Subunternehmer dokumentieren**: Liste aller Sub-Auftragsverarbeiter pflegen.
- [ ] **Drittlandtransfers vermeiden**: Falls unvermeidlich: SCCs, TIA und zusätzliche Schutzmaßnahmen.

### 6.7 Sicherheit und Incident-Management

- [ ] **Regelmäßige Updates und Patches**: Zeitnahes Einspielen von Sicherheitsupdates.
- [ ] **Penetrationstests**: Mindestens jährlich externe Sicherheitsaudits durchführen.
- [ ] **Logging und Monitoring**: Zugriffsprotokolle für Sicherheitsvorfälle.
- [ ] **Incident-Response-Plan**: Verfahren für Datenpannen dokumentiert (Art. 33, 34 DSGVO).
- [ ] **Meldepflicht bei Datenpannen**: Binnen 72 Stunden an Aufsichtsbehörde melden, falls Risiko für Betroffene.
- [ ] **Benachrichtigung Betroffener**: Bei hohem Risiko unverzüglich Nutzer informieren.
- [ ] **Backup-Strategie**: Regelmäßige, verschlüsselte Backups mit Wiederherstellungstests.

### 6.8 Organisation und Dokumentation

- [ ] **Datenschutzbeauftragten (DSB) bestellen**: Falls erforderlich nach Art. 37-39 DSGVO.
- [ ] **Verzeichnis von Verarbeitungstätigkeiten (VVT)**: Nach Art. 30 DSGVO führen und aktualisieren.
- [ ] **Rechenschaftspflicht (Accountability)**: Alle Compliance-Maßnahmen dokumentieren (Art. 5 Abs. 2 DSGVO).
- [ ] **Datenschutz-Management-Prozess**: Regelmäßige Reviews, Updates bei Änderungen.
- [ ] **Schulungen**: Mitarbeiter regelmäßig zu Datenschutz schulen.
- [ ] **Interne Richtlinien**: Datenschutz- und Sicherheitsrichtlinien dokumentieren.

### 6.9 Spezielle Anforderungen für DiGA (Deutschland)

- [ ] **BfArM-Selbsterklärung**: Anhang 1 zur DiGAV vollständig ausfüllen.
- [ ] **Einwilligungsbasierte Verarbeitung**: Ausschließlich auf Basis ausdrücklicher Einwilligung.
- [ ] **Zweckbeschränkung**: Nur versorgungsrelevante Zwecke und technische Funktionalität.
- [ ] **Werbeverbot**: Keine Verarbeitung für Werbezwecke.
- [ ] **Datenspeicherort**: Ausschließlich EU/EWR oder Länder mit Angemessenheitsbeschluss.
- [ ] **Medizinprodukt-Konformität**: Falls als Medizinprodukt eingestuft: MDR-Compliance, CE-Kennzeichnung.

### 6.10 Kontinuierliche Compliance

- [ ] **Regelmäßige DSFA-Reviews**: Bei wesentlichen Änderungen DSFA aktualisieren.
- [ ] **Datenschutzerklärung aktualisieren**: Bei neuen Features oder Datenverarbeitungen.
- [ ] **Neue Einwilligungen einholen**: Bei wesentlichen Änderungen der Verarbeitungszwecke.
- [ ] **Rechtsentwicklung verfolgen**: Neue Urteile, Leitlinien der Aufsichtsbehörden beachten.
- [ ] **EHDS-Verordnung berücksichtigen**: Ab 2025 grenzüberschreitende Gesundheitsdatenverarbeitung beachten.
- [ ] **Jährliches Compliance-Audit**: Interne oder externe Überprüfung der Compliance-Maßnahmen.


## 7. Erfolgreiche Compliance-Strategien und Best Practices

### 7.1 Europäischer Gesundheitsdatenraum (EHDS) und zukünftige Entwicklungen

Der Europäische Gesundheitsdatenraum (European Health Data Space, EHDS), dessen Verordnung am 26. März 2025 in Kraft getreten ist, schafft einen europaweiten Rechtsrahmen für die grenzüberschreitende Nutzung von Gesundheitsdaten[9]. Die EHDS-Verordnung ergänzt die DSGVO und etabliert spezifische Regelungen für die primäre Nutzung (unmittelbare medizinische Versorgung) und sekundäre Nutzung (Forschung, Innovation, Politikgestaltung) von elektronischen Gesundheitsdaten.

Für Health-Tech-Anbieter bedeutet dies neue Pflichten und Chancen. Gesundheitsdienstleister müssen relevante Daten in interoperable elektronische Gesundheitsaufzeichnungssysteme (EHR-Systeme) dokumentieren, die spezifische technische Anforderungen erfüllen[9]. Ab dem 26. März 2029 müssen EHR-Systeme Interoperabilitäts- und Protokollierungskomponenten enthalten und eine EU-weite Konformitätserklärung sowie CE-Kennzeichnung aufweisen[9]. Hersteller von EHR-Systemen haben umfangreiche Dokumentations- und Registrierungspflichten.

Die EHDS-Verordnung etabliert ein Widerspruchsrecht für die Sekundärnutzung von Gesundheitsdaten[9]. Patienten können der Nutzung ihrer Daten für Forschungs- und Innovationszwecke widersprechen (Opt-out-Prinzip), wobei Mitgliedstaaten in Ausnahmefällen auf dieses Widerspruchsrecht verzichten können. Für die Sekundärnutzung werden in der Regel ausschließlich anonymisierte Daten verwendet; pseudonymisierte Daten nur ausnahmsweise, wenn Anonymisierung den wissenschaftlichen Erkenntnisgewinn erheblich beeinträchtigen würde (Art. 67 Abs. 2 lit. e EHDS-VO)[9].

Health-Tech-Apps, die grenzüberschreitend in der EU operieren wollen, sollten bereits jetzt die EHDS-Anforderungen berücksichtigen. Die Umsetzungsfristen reichen bis 2031, wobei schrittweise verschiedene Kategorien elektronischer Gesundheitsdaten integriert werden[9]. Verstöße gegen die EHDS-Verordnung können mit Bußgeldern bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes geahndet werden[9].

### 7.2 Verhaltenskodex für mobile Gesundheits-Apps

Die Europäische Kommission hat einen Verhaltenskodex für mobile Gesundheits-Apps entwickelt, der als freiwilliger Standard dient und die Einhaltung von Datenschutzvorschriften erleichtern soll[7]. Der Kodex basiert auf der Datenschutzrichtlinie (Richtlinie 95/46/EG) und bleibt unter der DSGVO gültig (Art. 40 DSGVO ermöglicht ausdrücklich branchenspezifische Verhaltenskodizes).

Zentrale Prinzipien des mHealth-Kodex sind[7]: Benutzereinwilligung mit klaren, granularen Optionen; Zweckbindung und Datenminimierung; Privacy by Design und Privacy by Default; umfassende Informationspflichten und Betroffenenrechte; klare Regelungen zur Datenaufbewahrung und -löschung; robuste Sicherheitsmaßnahmen; transparente Grundsätze für Werbung in mHealth-Apps; restriktive Regelungen für sekundäre Datennutzung und Offenlegung an Dritte; besondere Schutzmaßnahmen bei Datenübertragungen ins Ausland; Verfahren bei Datenschutzverletzungen; sowie erhöhte Schutzstandards für von Kindern gesammelte Daten.

App-Entwickler, die sich freiwillig diesem Kodex verpflichten, können dies als Qualitätsmerkmal in ihrer Kommunikation hervorheben und dadurch das Vertrauen der Nutzer stärken. Zudem erleichtert die Orientierung am Kodex die Einhaltung der DSGVO-Anforderungen[7].

### 7.3 Praktische Empfehlungen für Beauty-Tech-Apps

Beauty-Tech-Apps bewegen sich häufig in einem regulatorischen Grenzbereich. Hautanalyse-Apps, die Fotos auswerten und Empfehlungen geben, verarbeiten biometrische Daten (Gesichtsbilder) und potenziell Gesundheitsdaten (Hautzustand)[1]. Strategien zur DSGVO-konformen Implementierung:

Erstens sollte die Zweckbestimmung klar auf kosmetische, nicht-medizinische Zwecke fokussiert sein. Formulierungen wie „Verbesserung des Hautbilds", „Optimierung der Pflegeroutine" oder „Produktempfehlungen für schönere Haut" sind unkritisch. Medizinische Claims wie „Diagnose von Hautkrankheiten", „Erkennung von Hautkrebs" oder „Behandlung von Akne" führen zur Medizinprodukt-Klassifizierung[2][3].

Zweitens empfiehlt sich die Implementierung einer lokalen Bildverarbeitung. Moderne Smartphones verfügen über ausreichende Rechenleistung, um KI-Modelle für Hautanalysen lokal auszuführen (On-Device Machine Learning). Dies eliminiert die Notwendigkeit, Gesichtsbilder an Cloud-Server zu übermitteln, reduziert Datenschutzrisiken erheblich und verbessert die Nutzerakzeptanz[1].

Drittens sollten bei cloudbasierten Analysen die Bilder nach der Verarbeitung unverzüglich gelöscht werden, sofern der Nutzer nicht explizit der Speicherung für Verlaufsanalysen zugestimmt hat. Die Implementierung automatischer Löschfristen (z.B. 24 Stunden nach Upload) ist Best Practice[1].

Viertens ist die Trennung von Analysedaten und Identitätsdaten sinnvoll. Analyseergebnisse (z.B. „Hauttyp: trocken, Empfehlung: Feuchtigkeitscreme") können pseudonymisiert oder gar anonymisiert gespeichert werden, während die Verknüpfung zum Nutzerkonto separat und besonders geschützt erfolgt[1].

### 7.4 Lessons Learned aus DSGVO-Verstößen

Die Analyse von DSGVO-Bußgeldern im Health-Tech-Bereich zeigt wiederkehrende Probleme. Die niederländische Datenschutzbehörde verhängte ein Bußgeld gegen Clearview AI wegen illegaler Datensammlung für Gesichtserkennung ohne Rechtsgrundlage und fehlende Transparenz[24]. Dies unterstreicht, dass biometrische Datenverarbeitung besonders kritisch geprüft wird.

Häufige Verstöße in Health-Apps umfassen: unzureichende Rechtsgrundlagen (fehlende oder unspezifische Einwilligungen), mangelnde Transparenz (unklare Datenschutzerklärungen, fehlende Information über Drittland-Transfers), unzureichende technische Sicherheitsmaßnahmen (unverschlüsselte Datenübertragung, schwache Authentifizierung), fehlerhafte Umsetzung von Betroffenenrechten (keine oder verzögerte Antwort auf Auskunftsersuchen), sowie unzulässige Drittlandtransfers ohne geeignete Garantien.

Zentrale Lehren: Investition in Compliance von Anfang an ist deutlich kostengünstiger als nachträgliche Anpassungen oder Bußgelder. Die Einbindung eines Datenschutzexperten bereits in der Konzeptionsphase zahlt sich aus. Technische Maßnahmen (Verschlüsselung, Pseudonymisierung) sind nicht optional, sondern Kernbestandteil einer rechtmäßigen Datenverarbeitung. Transparenz und Nutzerfreundlichkeit bei Einwilligungen sind nicht nur rechtlich geboten, sondern stärken auch das Vertrauen und die Nutzerbindung. Kontinuierliche Schulung des Teams zu Datenschutzfragen ist essentiell, da Compliance keine einmalige Aufgabe, sondern ein fortlaufender Prozess ist.

### 7.5 Wettbewerbsvorteile durch Privacy-Excellence

Datenschutz-Compliance sollte nicht als lästige Pflicht, sondern als Wettbewerbsvorteil verstanden werden. Im sensiblen Bereich Gesundheit und Körperpflege ist das Vertrauen der Nutzer entscheidend für den Erfolg. Apps, die durch transparente Datenpraktiken, proaktive Kommunikation und innovative Privacy-Features (wie lokale Verarbeitung, End-to-End-Verschlüsselung oder umfassende Datenexport-Funktionen) überzeugen, können sich vom Wettbewerb differenzieren.

Das Konzept „Privacy as a Service" gewinnt an Bedeutung: Nutzer sind zunehmend bereit, für Dienste zu zahlen, die ihre Privatsphäre respektieren, anstatt „kostenlose" Apps zu nutzen, die ihre Daten monetarisieren. Beauty-Tech-Startups können Premium-Modelle etablieren, die explizit Datenschutz als Verkaufsargument nutzen („Ihre Daten bleiben auf Ihrem Gerät – garantiert").

Zertifizierungen und Datenschutz-Siegel können das Vertrauen weiter stärken. Neben den genannten technischen Zertifizierungen (HDS, C5, ISO 27001) können auch Datenschutz-Siegel wie das europäische Datenschutz-Gütesiegel EuroPriSe oder nationale Siegel beantragt werden. Die Teilnahme am mHealth-Verhaltenskodex oder die Veröffentlichung detaillierter Transparenzberichte signalisieren ebenfalls Vertrauenswürdigkeit.

## 8. Fazit und Ausblick

Die DSGVO-konforme Entwicklung von Health-Tech- und Beauty-Tech-Lösungen erfordert eine ganzheitliche Strategie, die rechtliche, technische und organisatorische Dimensionen integriert. Die wesentlichen Erfolgsfaktoren sind eine klare regulatorische Positionierung (Medizinprodukt vs. Wellness-App), die frühzeitige Integration von Privacy by Design und Privacy by Default, ein nutzerfreundliches, granulares Consent-Management-System, die Präferenz für EU-Hosting mit ausschließlicher EU-Gerichtsbarkeit, robuste technische Sicherheitsmaßnahmen einschließlich Verschlüsselung und Pseudonymisierung, transparente und verständliche Kommunikation aller Datenverarbeitungen sowie die kontinuierliche Dokumentation und Überprüfung aller Compliance-Maßnahmen.

Die regulatorische Landschaft entwickelt sich kontinuierlich weiter. Die EHDS-Verordnung schafft ab 2025 neue Rahmenbedingungen für die grenzüberschreitende Gesundheitsdatenverarbeitung. Nationale Gesetze wie das deutsche DigiG und die DiGAV setzen zusätzliche Standards. Datenschutzbehörden verschärfen ihre Prüfungen, insbesondere bei sensiblen Gesundheitsdaten. Gleichzeitig bieten technologische Innovationen wie On-Device Machine Learning, föderiertes Lernen und homomorphe Verschlüsselung neue Möglichkeiten, Funktionalität und Datenschutz zu vereinen.

Unternehmen, die Compliance nicht als bürokratische Last, sondern als strategischen Erfolgsfaktor verstehen, werden langfristig am Markt bestehen. Die Investition in Datenschutz-Excellence zahlt sich durch höheres Nutzervertrauen, geringere rechtliche Risiken, Zugang zu regulierten Märkten (wie DiGA in Deutschland) und eine positive Markenwahrnehmung aus. Die in diesem Leitfaden dargestellten rechtlichen Rahmenbedingungen und praktischen Empfehlungen bieten eine solide Grundlage für die Entwicklung vertrauenswürdiger, rechtssicherer und erfolgreicher Health-Tech- und Beauty-Tech-Lösungen im europäischen Markt.


## 9. Quellen und Referenzen

[1] Taylor Wessing (2021). GDPR Compliance for Digital Health Apps. Hohe Zuverlässigkeit - Internationale Rechtsanwaltskanzlei mit Spezialisierung auf Technologie und Datenschutz. https://www.taylorwessing.com/en/insights-and-events/insights/2021/04/dsgvo-compliance-bei-digital-health-apps

[2] DeviceMed (2022). Wellness-App oder Medizinprodukt? Hohe Zuverlässigkeit - Fachpublikation für Medizintechnik. https://www.devicemed.de/wellness-app-oder-medizinprodukt-a-f0392a389560431f56b8a0ac15e5c845/

[3] Mantra Systems. Software as a Medical Device (SaMD) - MDR Compliance Guide. Hohe Zuverlässigkeit - Spezialisierter EU MDR Compliance-Berater. https://mantrasystems.com/eu-mdr-compliance/software-as-a-medical-device-samd

[4] Usercentrics (2024). Best Practices for Mobile App Consent. Hohe Zuverlässigkeit - Führender Consent Management Platform-Anbieter. https://usercentrics.com/knowledge-hub/best-practices-for-mobile-app-consent/

[5] Digital Samba (2025). Erfordert die DSGVO eine Datenspeicherung in der EU? Mittlere Zuverlässigkeit - DSGVO-fokussierter Videokonferenz-Anbieter. https://www.digitalsamba.com/de/blog/does-gdpr-require-eu-data-hosting

[6] Exterro (2025). Tips and Best Practices for Consent Management to Comply with GDPR. Hohe Zuverlässigkeit - Data Governance Software-Anbieter. https://www.exterro.com/resources/blog/tips-and-best-practices-for-consent-management-to-comply-with-gdpr

[7] Europäische Kommission (2021). Datenschutzkodex für mobile Gesundheits-Apps. Höchste Zuverlässigkeit - Offizielle EU-Quelle. https://digital-strategy.ec.europa.eu/de/policies/privacy-mobile-health-apps

[8] Compliance Center (2024). Cloud-Computing im Gesundheitswesen: Neue Regelungen ab Juli 2024. Hohe Zuverlässigkeit - Datenschutz-Fachportal. https://compliance-center.eu/cloud-computing-im-gesundheitswesen-neue-regelungen-ab-juli-2024/

[9] ActiveMind Legal. Europäischer Gesundheitsdatenraum und EHDS-Verordnung. Hohe Zuverlässigkeit - Spezialisierte Datenschutz-Rechtsberatung. https://www.activemind.legal/de/guides/ehds/

[10] OVHcloud. HDS-Zertifizierung: Hosting Ihrer Gesundheitsdaten. Hohe Zuverlässigkeit - Großer europäischer Cloud-Provider. https://www.ovhcloud.com/de/compliance/hds/

[11] Johner Institut. Software als Medizinprodukt SaMD: Definition und Klassifizierung. Hohe Zuverlässigkeit - Führender Spezialist für Medizinprodukte-Regulierung. https://www.johner-institut.de/blog/iec-62304-medizinische-software/software-als-medizinprodukt-definition/

### Weiterführende Ressourcen

**Offizielle EU-Dokumente:**
- DSGVO (Verordnung 2016/679): https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32016R0679
- EU MDR (Verordnung 2017/745): https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32017R0745
- EHDS-Verordnung (Verordnung 2025/327): https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32025R0327
- MDCG 2019-11 Guidance on Software Qualification and Classification

**Deutsche Regulierungsbehörden:**
- BfArM (Bundesinstitut für Arzneimittel und Medizinprodukte): https://www.bfarm.de
- BfDI (Bundesbeauftragte für den Datenschutz und die Informationsfreiheit): https://www.bfdi.bund.de
- BSI (Bundesamt für Sicherheit in der Informationstechnik) - C5-Kriterienkatalog

**Datenschutzbehörden:**
- European Data Protection Board (EDPB): https://www.edpb.europa.eu
- Konferenz der unabhängigen Datenschutzaufsichtsbehörden des Bundes und der Länder (DSK)

**Normen und Standards:**
- ISO 13485: Qualitätsmanagementsysteme für Medizinprodukte
- ISO 14971: Risikomanagement für Medizinprodukte
- IEC 62304: Software-Lebenszyklus-Prozesse für Medizinprodukte
- ISO 27001/27017/27018: Informationssicherheit und Cloud-Datenschutz

---

**Haftungsausschluss:** Dieser Leitfaden dient ausschließlich Informationszwecken und stellt keine Rechtsberatung dar. Die rechtlichen Rahmenbedingungen entwickeln sich kontinuierlich weiter. Für spezifische rechtliche Fragen sollte stets fachkundiger Rechtsrat eingeholt werden. Stand: November 2025.