// story.js

export const STORY = {
    // ==========================================
    // REKRUTIERUNGSMISSIONEN (ALL FACTIONS)
    // ==========================================
    de_west_recruitment: {
        title: "August 1914 - Mobilmachung in Berlin (Westfront)",
        type: "decision",
        description: "Der Kaiser ruft zu den Waffen. Unter großem Jubel meldet ihr euch freiwillig an der Musterungsstelle. Doch die Realität holt euch schnell ein: Der Transportzug nach Westen ist hoffnungslos überfüllt, und die logistische Hektik droht eure Truppe zu trennen.",
        options: [
            {
                text: "Sich durch die Masse zum Zug drängen (Alle einsteigen!)",
                outcome: {
                    text: "Nach stundenlangem Schieben findet ihr einen Platz. Eure Glieder schmerzen, aber die Kameradschaft schweißt euch zusammen.",
                    damage: 2,
                    moraleChange: +5,
                    xpReward: 5,
                    nextScenario: "de_west_training"
                }
            },
            {
                text: "Logistiker unterstützen und Gepäck sortieren",
                requiresClass: "infantry",
                outcome: {
                    text: "Mit eurer Muskelkraft und Disziplin helft ihr, Ordnung in das Chaos zu bringen. Der Offizier dankt euch mit extra Verpflegung.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 10,
                    nextScenario: "de_west_training"
                }
            },
            {
                text: "Einen kollabierten Freiwilligen verarzten",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr stabilisiert einen hitzegeschwächten Rekruten. Die Menge applaudiert eurem schnellen Einsatz.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 10,
                    nextScenario: "de_west_training"
                }
            }
        ]
    },

    de_ost_recruitment: {
        title: "August 1914 - Mobilmachung in Ostpreußen (Ostfront)",
        type: "decision",
        description: "Die Meldung über den Einmarsch der russischen Armeen löst Panik in Ostpreußen aus. Euer Regiment wird eilig mobilisiert, um die Grenze abzusichern. Lokale Bauern fliehen und blockieren die Wege.",
        options: [
            {
                text: "Die Straßen räumen und Flüchtlingen helfen",
                outcome: {
                    text: "Mühsam leitet ihr die Fuhrwerke um. Die harte Arbeit erschöpft euch, aber ihr gewinnt den Respekt der Einheimischen.",
                    damage: 2,
                    moraleChange: +5,
                    xpReward: 5,
                    nextScenario: "de_ost_training"
                }
            },
            {
                text: "Eine Befestigung auf dem Dorfplatz errichten",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr baut Barrikaden aus alten Wagen und Holz. Das beruhigt die verängstigten Zivilisten.",
                    damage: 0,
                    moraleChange: +12,
                    xpReward: 10,
                    nextScenario: "de_ost_training"
                }
            }
        ]
    },

    fr_recruitment: {
        title: "August 1914 - Die Glocken der Mobilmachung in Paris",
        type: "decision",
        description: "Die Kirchenglocken läuten landesweit. Als 'Poilus' zieht ihr stolz durch die Straßen von Paris, doch ein plötzlicher Regenschauer durchnässt eure roten Hosen und der Marsch zum Bahnhof wird zur Schlammschlacht.",
        options: [
            {
                text: "Im Regen weitermarschieren und Lieder singen (La Marseillaise!)",
                outcome: {
                    text: "Die Nässe zieht in die Knochen, doch euer Gesang inspiriert die Abschied nehmenden Bürger.",
                    damage: 3,
                    moraleChange: +8,
                    xpReward: 5,
                    nextScenario: "fr_training"
                }
            },
            {
                text: "Einen weinenden Rekruten trösten und ihm Mut zusprechen",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr sprecht eurem jungen Kameraden gut zu und erinnert ihn an seine Pflicht. Seine Moral kehrt zurück.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 10,
                    nextScenario: "fr_training"
                }
            },
            {
                text: "Den Telegrafen der Bahnhofskommandantur instand setzen",
                requiresClass: "fernmelder",
                outcome: {
                    text: "Ihr behebt einen kurzfristigen Ausfall. Die Abfahrtszeiten der Militärzüge können wieder koordiniert werden.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 12,
                    nextScenario: "fr_training"
                }
            }
        ]
    },

    gb_recruitment: {
        title: "August 1914 - Kitcheners Ruf in London",
        type: "decision",
        description: "Lord Kitcheners Plakate hängen überall. Ihr habt euch gemeinsam mit euren Freunden im 'Pals Battalion' gemeldet. Im Trainingslager herrscht jedoch akuter Mangel an Gewehren. Ihr müsst mit Besenstielen trainieren.",
        options: [
            {
                text: "Die Übungen mit improvisierten Waffen ernst nehmen",
                outcome: {
                    text: "Euer Ausbilder grinst grimmig über euren Eifer, aber die Grundtechniken sitzen.",
                    damage: 1,
                    moraleChange: +5,
                    xpReward: 5,
                    nextScenario: "gb_training"
                }
            },
            {
                text: "Als Scharfschütze Zieldummies bauen und Entfernungen schätzen",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr baut täuschend echte Zielscheiben und lernt das Gelände perfekt zu lesen.",
                    damage: 0,
                    moraleChange: +12,
                    xpReward: 10,
                    nextScenario: "gb_training"
                }
            },
            {
                text: "Ein improvisiertes Feldlazarett im Camp aufbauen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr organisiert Decken und Desinfektionsmittel. Erste Blasen an den Füßen der Rekruten werden sofort behandelt.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 10,
                    nextScenario: "gb_training"
                }
            }
        ]
    },

    be_recruitment: {
        title: "August 1914 - Verteidigung des Festungsrings Lüttich",
        type: "decision",
        description: "Die Belgier mobilisieren unter König Albert I. Eure Truppe bezieht eilig Stellung im Festungsgürtel. Belgische Zivilisten versuchen verzweifelt, Barrikaden zu errichten, doch der Stacheldraht geht aus.",
        options: [
            {
                text: "Mit improvisierten Mitteln Schutzzäune bauen",
                outcome: {
                    text: "Dornensträucher und Altmetall müssen genügen. Eure Hände sind zerkratzt, aber die Sperre steht.",
                    damage: 3,
                    moraleChange: +5,
                    xpReward: 5,
                    nextScenario: "be_training"
                }
            },
            {
                text: "Verstärkungen mit Holz- und Steinbarrikaden errichten",
                requiresClass: "engineer",
                outcome: {
                    text: "Dank eures Fachwissens baut ihr eine stabile Barrikade, die feindlichem Gewehrfeuer standhalten wird.",
                    damage: 0,
                    moraleChange: +12,
                    xpReward: 10,
                    nextScenario: "be_training"
                }
            }
        ]
    },

    at_recruitment: {
        title: "August 1914 - Mobilisierung in Wien",
        type: "decision",
        description: "Ein Sprachengewirr herrscht auf dem Wiener Bahnhof. Rekruten aus allen Kronländern versuchen, ihre Einheiten zu finden. Ein ungarischsprachiger Soldat versteht den Befehl des Offiziers nicht und es droht eine Eskalation.",
        options: [
            {
                text: "Mit Zeichensprache und Geduld schlichten",
                outcome: {
                    text: "Das Missverständnis klärt sich auf, doch die Verzögerung zehrt an euren Nerven.",
                    damage: 1,
                    moraleChange: +5,
                    xpReward: 5,
                    nextScenario: "at_training"
                }
            },
            {
                text: "Als Standschütze alpine Wegweiser für das Regiment zeichnen",
                requiresClass: "standschuetze",
                outcome: {
                    text: "Ihr zeichnet Bergpfade auf und führt eine Gruppe Tiroler sicher durch die logistische Verwirrung.",
                    damage: 0,
                    moraleChange: +12,
                    xpReward: 10,
                    nextScenario: "at_training"
                }
            },
            {
                text: "Feldtelefone verlegen, um Übersetzungsstellen zu koppeln",
                requiresClass: "fernmelder",
                outcome: {
                    text: "Ihr verkabelt die Dienststellen. Dolmetscher können nun direkt zu den Gleisen gerufen werden.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 10,
                    nextScenario: "at_training"
                }
            }
        ]
    },

    ru_recruitment: {
        title: "August 1914 - Einberufung in Sibirien",
        type: "decision",
        description: "Nach tagelanger Bahnfahrt durch das riesige Reich erreicht ihr das Depot in Sankt Petersburg. Der Zuzug von Rekruten ist gigantisch, doch es gibt nicht genug Gewehre. Ihr sollt ohne Waffen marschieren lernen.",
        options: [
            {
                text: "Im Gleichschritt den Geist stärken",
                outcome: {
                    text: "Der Marsch im Staub erschöpft die Füße, aber euer Glaube an den Zaren bleibt unerschüttert.",
                    damage: 2,
                    moraleChange: +5,
                    xpReward: 5,
                    nextScenario: "ru_training"
                }
            },
            {
                text: "Im Wald Holzgewehre für das Training schnitzen",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr fertigt Übungswaffen an. So kann zumindest das Zielen und Laden geübt werden.",
                    damage: 0,
                    moraleChange: +12,
                    xpReward: 10,
                    nextScenario: "ru_training"
                }
            }
        ]
    },

    it_recruitment: {
        title: "Mai 1915 - Aufbruch in den Alpenkrieg",
        type: "decision",
        description: "Italien tritt verspätet in den Krieg ein. In den Voralpen bereiten sich die Alpini auf den Aufstieg vor. Ein Felssturz blockiert den schmalen Pfad für die Lasttiere.",
        options: [
            {
                text: "Die Trümmer von Hand wegräumen",
                outcome: {
                    text: "Schwere Steine schinden eure Hände, doch der Pfad ist schließlich wieder passierbar.",
                    damage: 3,
                    moraleChange: +5,
                    xpReward: 5,
                    nextScenario: "it_training"
                }
            },
            {
                text: "Ein Seilwindensystem für den Gepäcktransport entwerfen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr baut ein Flaschenzug-System auf, das die Kisten mühelos über die Schlucht hebt.",
                    damage: 0,
                    moraleChange: +12,
                    xpReward: 12,
                    nextScenario: "it_training"
                }
            },
            {
                text: "Einen Gebirgspfad für den Aufstieg ausspähen",
                requiresClass: "sniper",
                outcome: {
                    text: "Mit eurem scharfen Auge erspäht ihr einen sicheren Aufstiegspfad abseits des Felssturzes.",
                    damage: 0,
                    moraleChange: +12,
                    xpReward: 10,
                    nextScenario: "it_training"
                }
            }
        ]
    },

    // ==========================================
    // AUSBILDUNGSMISSIONEN (ALL FACTIONS)
    // Klassensystem: Klasse wird durch die Ausbildungswahl vergeben
    // ==========================================

    // ==========================================================
    // DEUTSCHLAND WESTFRONT — 4 Klassenwege
    // ==========================================================
    de_west_training: {
        title: "August 1914 – Grundausbildung im Elsass: Tag 1",
        type: "decision",
        description: "Um 04:30 Uhr reißt euch Feldwebel Brandts Pfiff aus dem Schlaf. 'Raus! Raus! Ihr seid Rekruten – noch keine Soldaten!' Auf dem Exerzierplatz stehen die Ausbilder der verschiedenen Waffengattungen bereit. Die Zuteilung entscheidet eure Laufbahn. Schaut genau hin, welcher Weg euch ruft – denn zurück gibt es nicht.",
        options: [
            {
                text: "Zum Infanterie-Trupp: Marsch, Bajonett, Kampf Mann gegen Mann",
                outcome: {
                    text: "Hauptfeldwebel Kraus nimmt euch in die Infanterie-Gruppe. 'Infanteristen sind das Rückgrat der Armee. Ihr kämpft, ihr sterbt, ihr siegt – in dieser Reihenfolge.' Der erste Tag ist Erschöpfung pur.",
                    damage: 3, moraleChange: +5, xpReward: 10,
                    nextScenario: "de_west_training_infantry"
                }
            },
            {
                text: "Zum Sanitäts-Trupp: Wunden versorgen, Leben retten",
                outcome: {
                    text: "Sanitäts-Unteroffizier Wagner nickt euch zu. 'Im Krieg stirbt mehr an schlechter Wundversorgung als an Kugeln. Das ändert ihr.' Eure ersten Übungen: Druckverband, Tourniquet, Schienen.",
                    damage: 0, moraleChange: +8, xpReward: 10,
                    nextScenario: "de_west_training_medic"
                }
            },
            {
                text: "Zum Scharfschützen-Trupp: Präzision auf Distanz",
                outcome: {
                    text: "Scharfschützen-Ausbilder Lenz mustert euch kalt. 'Ein Scharfschütze tötet mit einem Schuss. Wer zwei braucht, ist kein Scharfschütze.' Ihr bekommt ein Mauser 98 und geht zum Schießstand.",
                    damage: 0, moraleChange: +5, xpReward: 10,
                    nextScenario: "de_west_training_sniper"
                }
            },
            {
                text: "Zum Pionier-Trupp: Gräben, Sprengmittel, Hindernisse",
                outcome: {
                    text: "Pionier-Feldwebel Steinbach zeigt auf Spaten und Sprengkisten. 'Pioniere bauen, was andere brauchen – und sprengen, was den Feind schützt.' Schaufeln und Zünder warten auf euch.",
                    damage: 2, moraleChange: +5, xpReward: 10,
                    nextScenario: "de_west_training_engineer"
                }
            }
        ]
    },

    de_west_training_infantry: {
        title: "August 1914 – Infanterieausbildung Westfront: Schießen & Drill",
        type: "decision",
        description: "Tag drei. Der Schießstand, Mauser 98 in der Hand, 200-Meter-Zielscheiben. Gleichzeitig: Bajonettübungen, Grabenbau unter Zeitdruck. Feldwebel Kraus treibt die Gruppe mit dem Stockeinsatz an: 'Ein Infanterist schießt, gräbt und kämpft – und das alles gleichzeitig!' Heute zeigt sich, wer aus diesem Holz geschnitzt ist.",
        options: [
            {
                text: "Methodisch schießen – Korn, Visier, Atem, Abzug",
                outcome: {
                    text: "Acht von zehn Treffern auf 200 Meter. Kraus nickt: 'Akzeptabel. Morgen auf 300 Meter.' Der Körper lernt den Rhythmus des Gewehrs.",
                    damage: 1, moraleChange: +12, xpReward: 18,
                    nextScenario: "de_west_training_infantry_final"
                }
            },
            {
                text: "Schnellfeuer üben – maximale Schussrate in 60 Sekunden",
                outcome: {
                    text: "Fünfzehn Schuss, dreizehn Treffer – in sechzig Sekunden. Die Schulter brennt, die Finger sind taub. Kraus: 'Nicht schlecht. Feuerrate rettet Leben.'",
                    damage: 3, moraleChange: +10, xpReward: 18,
                    nextScenario: "de_west_training_infantry_final"
                }
            }
        ]
    },

    de_west_training_infantry_final: {
        title: "August 1914 – Infanterieausbildung Westfront: Abschlussübung",
        type: "decision",
        description: "Tag fünf. Kombinierte Gefechtsübung: Schützengraben ausheben, verteidigen, dann Gegenstoß mit Bajonett. Kraus steht oben auf dem Erdwall: 'Dies ist das Letzte, was ich euch beibringen kann. Was ihr heute lernt, entscheidet, ob ihr morgen lebt.' Echt scharfe Munition liegt auf dem Tisch – nicht für die Übung, aber als Erinnerung.",
        options: [
            {
                text: "Den Graben unter Feuer halten und mit Bajonett kontern",
                outcome: {
                    text: "Ihr kämpft, fallt, steht auf, kämpft weiter. Als die Übung endet, steht Kraus vor euch: 'Infanterist. Das seid ihr jetzt.' Der Stempel auf den Papieren ist trocken, ehe die Tinte aufhört zu tropfen.",
                    damage: 4, moraleChange: +20, xpReward: 30,
                    grantClass: "infantry",
                    nextScenario: "de_west_start"
                }
            }
        ]
    },

    de_west_training_medic: {
        title: "August 1914 – Sanitätsausbildung Westfront: Verwundetenversorgung",
        type: "decision",
        description: "Das Sanitätszelt riecht nach Karbol und Verwesung. Unteroffizier Wagner legt Verbände vor euch aus: 'Granatsplitter, Bauchschüsse, Gasvergiftung – jeder tötet anders. Ihr müsst jeden retten können.' Erste Übungen: Druckverband bei Arterienverletzung, Atemwegs-Management.",
        options: [
            {
                text: "Verbandstechnik unter simuliertem Feuer üben",
                outcome: {
                    text: "Kniend im Schlamm, Kameraden schreien 'Verwundet!', Knallpatronen krachen. Ihr legt den Druckverband in neunzehn Sekunden an. Wagner: 'Fünf Sekunden zu lang. Morgen in zwölf.'",
                    damage: 0, moraleChange: +15, xpReward: 18,
                    nextScenario: "de_west_training_medic_final"
                }
            },
            {
                text: "Morphin-Dosierung und Triage-Entscheidungen lernen",
                outcome: {
                    text: "Rot – zu schwer. Gelb – sofort. Grün – warten. Ihr trefft Entscheidungen über Leben und Tod in Sekundenbruchteilen. Wagner beobachtet schweigend: 'Ihr habt das Richtige getan. Jeden einzelnen Mal.'",
                    damage: 0, moraleChange: +18, xpReward: 18,
                    nextScenario: "de_west_training_medic_final"
                }
            }
        ]
    },

    de_west_training_medic_final: {
        title: "August 1914 – Sanitätsausbildung Westfront: Lazarettprüfung",
        type: "decision",
        description: "Abschlussprüfung. Fünf 'Verwundete' gleichzeitig, verschiedene Verletzungen, drei Minuten. Wagner steht mit der Stoppuhr: 'Wer alle fünf richtig versorgt, bekommt das Kreuz. Wer es nicht schafft – lernt weiter.'",
        options: [
            {
                text: "Systematisch alle fünf Verwundeten versorgen",
                outcome: {
                    text: "Zwei Minuten und vierundvierzig Sekunden. Alle fünf korrekt versorgt. Wagner steckt euch das Rote Kreuz auf die Jacke: 'Sanitäter. Ab heute rettet ihr Leben.'",
                    damage: 0, moraleChange: +25, xpReward: 30,
                    grantClass: "medic",
                    nextScenario: "de_west_start"
                }
            }
        ]
    },

    de_west_training_sniper: {
        title: "August 1914 – Scharfschützenausbildung Westfront: Das Ziel",
        type: "decision",
        description: "Der Waldschießstand. Lenz führt euch zu einem Sitz auf einem Hochstand, drei Meter über dem Boden. Das Ziel: eine Scheibe auf 350 Metern, kaum sichtbar durch das Blattwerk. 'Ein Scharfschütze wartet. Manchmal Stunden. Dann ein Schuss.' Er legt das Zielfernrohr-Gewehr vor euch hin.",
        options: [
            {
                text: "Warten, atmen, auf den perfekten Moment zielen",
                outcome: {
                    text: "Neunzehn Minuten wartet ihr. Dann – Windpause. Schuss. Treffer. Lenz sagt nichts. Er schreibt nur eine Zahl auf sein Notizbuch: 347 Meter.",
                    damage: 0, moraleChange: +20, xpReward: 20,
                    nextScenario: "de_west_training_sniper_final"
                }
            },
            {
                text: "Tarntechnik üben – im Wald unsichtbar werden",
                outcome: {
                    text: "Zweige, Erde, Gras – ihr arbeitet zwei Stunden an eurer Tarnung. Lenz sucht euch zwanzig Minuten, bevor er aufgibt. 'Gut. Wenn man euch nicht sieht, kann man euch nicht töten.'",
                    damage: 0, moraleChange: +18, xpReward: 20,
                    nextScenario: "de_west_training_sniper_final"
                }
            }
        ]
    },

    de_west_training_sniper_final: {
        title: "August 1914 – Scharfschützenausbildung Westfront: Der letzte Schuss",
        type: "decision",
        description: "Abschlusstest. Ein bewegliches Ziel, 400 Meter, Wind von rechts, Abenddämmerung. Lenz steht hinter euch: 'Ein Schuss. Kein zweiter. So ist der Krieg.'",
        options: [
            {
                text: "Den einen Schuss abgeben – und treffen",
                outcome: {
                    text: "Die Scheibe wippt im Wind. Ihr reguliert, atmet aus zur Hälfte, drückt ab. Treffer. Lenz klappt sein Notizbuch zu: 'Scharfschütze. Schreib deinen Namen ins Schutzbuch.'",
                    damage: 0, moraleChange: +28, xpReward: 32,
                    grantClass: "sniper",
                    nextScenario: "de_west_start"
                }
            }
        ]
    },

    de_west_training_engineer: {
        title: "August 1914 – Pionierausbildung Westfront: Gräben und Sprengmittel",
        type: "decision",
        description: "Tag drei. Vor euch liegt ein leeres Feld. Pionier-Feldwebel Steinbach: 'In sechs Stunden will ich einen kampfbereiten Schützengraben mit Unterstand, Schießscharte und Dränage sehen. Los.' Daneben auf dem Tisch: Zündschnüre, Sprengkapseln, Dynamit.",
        options: [
            {
                text: "Den Schützengraben mit Unterstand und Dränagesystem bauen",
                outcome: {
                    text: "Fünf Stunden und zwanzig Minuten. Steinbach prüft jeden Winkel: 'Die Dränage ist falsch. Wasser läuft in den Unterstand.' Er pausiert. 'Sonst – tadellos.' Bei Steinbach ist das höchstes Lob.",
                    damage: 4, moraleChange: +12, xpReward: 18,
                    nextScenario: "de_west_training_engineer_final"
                }
            },
            {
                text: "Sprengmittel gegen ein simuliertes Hindernis einsetzen",
                outcome: {
                    text: "Zündschnur, Kapsel, Dynamit – die Zündkette in richtiger Reihenfolge. Die Explosion macht den Boden zittern. Steinbach: 'Richtig. Zu wenig Sprengmittel tötet euch selbst. Zu viel – auch. Ihr habt genau richtig dosiert.'",
                    damage: 2, moraleChange: +15, xpReward: 18,
                    nextScenario: "de_west_training_engineer_final"
                }
            }
        ]
    },

    de_west_training_engineer_final: {
        title: "August 1914 – Pionierausbildung Westfront: Abschluss",
        type: "decision",
        description: "Letzte Prüfung. Steinbach zeigt auf eine simulierte feindliche Sperre aus Stacheldraht und Panzerfallen. 'In dreißig Minuten brauche ich einen sauberen Durchgang. Ohne Geräusche. Ohne Verluste.' Er zieht seine Uhr.",
        options: [
            {
                text: "Den Drahtdurchgang lautlos und präzise öffnen",
                outcome: {
                    text: "Drahtschneider, ruhige Hände, kein Klicken. Siebenundzwanzig Minuten. Steinbach geht durch den Durchgang ohne Zögern: 'Pionier. Ihr baut, was gebraucht wird – und sprengt, was nicht gebraucht wird.'",
                    damage: 1, moraleChange: +22, xpReward: 30,
                    grantClass: "engineer",
                    nextScenario: "de_west_start"
                }
            }
        ]
    },

    // ==========================================================
    // DEUTSCHLAND OSTFRONT — 3 Klassenwege (inkl. Fernmelder)
    // ==========================================================
    de_ost_training: {
        title: "August 1914 – Garnison Königsberg: Ausbildungswahl",
        type: "decision",
        description: "Die russischen Armeen marschieren schneller als erwartet. Hauptmann Kurz: 'Wir haben keine Zeit. Drei Tage, dann geht ihr an die Front.' Die Ausbilder der verschiedenen Waffengattungen stehen bereit. Ostfront-spezifisch: Maschinengewehre, Fernmeldewesen und medizinische Versorgung unter Winterbedingungen.",
        options: [
            {
                text: "MG-Trupp: Das schwere MG 08 bedienen und Verteidigungsstellungen halten",
                outcome: {
                    text: "Das MG 08 wiegt 62 Kilogramm mit Lafette. Ihr lernt es in Teilen kennen, bevor ihr es zusammenbaut. Unteroffizier Riedel: 'Wer das MG beherrscht, beherrscht das Schlachtfeld.'",
                    damage: 2, moraleChange: +8, xpReward: 10,
                    nextScenario: "de_ost_training_infantry"
                }
            },
            {
                text: "Fernmelder-Trupp: Feldtelefon, Funkgerät und Kabelverlegung",
                outcome: {
                    text: "Feldwebel Meier zeigt euch das Feldtelefon Modell 1905. 'Ohne Kommunikation sind wir blind. Mit Kommunikation sind wir unbesiegbar.' Kabelrollen, Klemmzangen, Morseapparate.",
                    damage: 0, moraleChange: +10, xpReward: 10,
                    nextScenario: "de_ost_training_fernmelder"
                }
            },
            {
                text: "Sanitäts-Trupp: Verwundetenversorgung unter Winterbedingungen",
                outcome: {
                    text: "Unterarzt Hofmann: 'Im russischen Winter erfriert ein Verwundeter in Minuten. Ihr müsst schneller sein als die Kälte.' Eure ersten Übungen mit Handschuhen bei Minus zehn Grad.",
                    damage: 0, moraleChange: +8, xpReward: 10,
                    nextScenario: "de_ost_training_medic"
                }
            }
        ]
    },

    de_ost_training_infantry: {
        title: "August 1914 – MG-Ausbildung Ostfront",
        type: "decision",
        description: "Tag zwei. Das MG 08 liegt vor euch, zerlegt in dreiundzwanzig Teile. Riedel gibt euch drei Minuten. 'Wer es in drei Minuten zusammenbaut, bekommt Abendessen. Wer nicht – hungert und übt.'",
        options: [
            {
                text: "Das MG 08 unter Zeitdruck montieren",
                outcome: {
                    text: "Zwei Minuten, achtundvierzig Sekunden. Riedel stellt euch ein Abendbrot hin, ohne ein Wort zu sagen. Das Schweigen ist Lob.",
                    damage: 1, moraleChange: +15, xpReward: 20,
                    nextScenario: "de_ost_training_infantry_final"
                }
            },
            {
                text: "Feuerwechsel-Koordination: Zwei MGs ohne Pausenlücke",
                outcome: {
                    text: "MG 1 feuert, MG 2 lädt. MG 2 übernimmt, MG 1 lädt. Kein Moment Stille für den Feind. Nach zehn Minuten sitzt der Rhythmus. Riedel nickt: 'Das bricht Angriffe.'",
                    damage: 0, moraleChange: +18, xpReward: 20,
                    nextScenario: "de_ost_training_infantry_final"
                }
            }
        ]
    },

    de_ost_training_infantry_final: {
        title: "August 1914 – MG-Abschluss Ostfront",
        type: "decision",
        description: "Tag drei. Simulierter russischer Massenangriff gegen eine MG-Stellung. Riedel: 'Die Russen kommen in Wellen. Wir lassen sie kommen – und wenn sie nah genug sind, ernten wir.'",
        options: [
            {
                text: "Die MG-Stellung bis zum Ende halten",
                outcome: {
                    text: "Drei Angriffswellen abgewehrt. Das Übungsgelände ist still. Hauptmann Kurz tritt heran: 'Infanterist mit MG-Spezialisierung. Ihr habt den härtesten Posten an der Ostfront.'",
                    damage: 4, moraleChange: +22, xpReward: 30,
                    grantClass: "infantry",
                    nextScenario: "de_ost_start"
                }
            }
        ]
    },

    de_ost_training_fernmelder: {
        title: "August 1914 – Fernmelderausbildung Ostfront",
        type: "decision",
        description: "Das Kabelkurs-Gelände: Ein simuliertes Schlachtfeld mit Granattrichtern und Stacheldraht. Meier: 'Das Kabel muss verlegt sein, auch wenn um euch herum alles explodiert.' Zwölf Kilo Kabelrolle auf der Schulter.",
        options: [
            {
                text: "Kabel durch simuliertes Granatfeuer verlegen",
                outcome: {
                    text: "Explosionen, Staub, Schlamm – ihr zieht das Kabel durch, klemmt an, testet. Verbindung steht. Meier am Hörer: 'Verbindung klar.' Drei Worte, die alles bedeuten.",
                    damage: 2, moraleChange: +15, xpReward: 20,
                    nextScenario: "de_ost_training_fernmelder_final"
                }
            },
            {
                text: "Morsecode und Funksignal in Echtzeit übertragen",
                outcome: {
                    text: "Punkt-Strich-Punkt. Ihr übertragt eine verschlüsselte Lagemeldung in vierzig Sekunden. Meier entschlüsselt: 'Korrekt. Ein Fernmelder, der morst, ist doppelt so wertvoll wie einer, der nicht morst.'",
                    damage: 0, moraleChange: +18, xpReward: 20,
                    nextScenario: "de_ost_training_fernmelder_final"
                }
            }
        ]
    },

    de_ost_training_fernmelder_final: {
        title: "August 1914 – Fernmelder-Abschluss Ostfront",
        type: "decision",
        description: "Abschlussprüfung: Kabelbruch unter Beschuss reparieren, Lagemeldungen in Echtzeit weiterleiten, Artilleriekoordinaten übermitteln – alles gleichzeitig. Meier: 'Beim nächsten Mal sind es echte Granaten.'",
        options: [
            {
                text: "Alle Kommunikationsaufgaben unter Druck lösen",
                outcome: {
                    text: "Dreimal Kabelbruch, dreimal geflickt. Vier Lagemeldungen, alle korrekt. Artillerie trifft das Ziel. Hauptmann Kurz: 'Fernmelder. Ihr seid die Augen des Regiments.'",
                    damage: 2, moraleChange: +22, xpReward: 30,
                    grantClass: "fernmelder",
                    nextScenario: "de_ost_start"
                }
            }
        ]
    },

    de_ost_training_medic: {
        title: "August 1914 – Sanitätsausbildung Ostfront",
        type: "decision",
        description: "Unterarzt Hofmann legt ein erforenes Modellglied auf den Tisch: 'Erfrierungsgrad drei. Was macht ihr?' Der Unterricht beginnt sofort, ohne Einführung, ohne Gnade.",
        options: [
            {
                text: "Erfrierungsbehandlung und Wundversorgung bei Minusgraden",
                outcome: {
                    text: "Handschuhe aus, Wunde versorgen, Handschuhe wieder an. Klingt einfach. Bei minus zwölf Grad ist es ein Kampf. Hofmann: 'Ihr habt es getan, ohne die Wunde zu verschlimmern. Gut.'",
                    damage: 0, moraleChange: +15, xpReward: 18,
                    nextScenario: "de_ost_training_medic_final"
                }
            },
            {
                text: "Verwundete unter Angriff aus dem Feuer ziehen",
                outcome: {
                    text: "Kriechend, Verwundeten am Arm, Schüsse über dem Kopf – ihr zieht ihn raus. Hofmann: 'Schnell genug. Sauber genug. Lebend.'",
                    damage: 2, moraleChange: +18, xpReward: 18,
                    nextScenario: "de_ost_training_medic_final"
                }
            }
        ]
    },

    de_ost_training_medic_final: {
        title: "August 1914 – Sanitäts-Abschluss Ostfront",
        type: "decision",
        description: "Letzte Nacht vor dem Abmarsch. Hofmann: 'Morgen geht ihr an die Front. Heute Nacht macht ihr noch einen letzten Einsatz.' Eine simulierte Massenverwundetenlage mit sieben Patienten.",
        options: [
            {
                text: "Alle sieben Patienten versorgen und priorisieren",
                outcome: {
                    text: "Sechs von sieben – der siebte simuliert einen nicht rettbaren Bauchschuss. Hofmann: 'Ihr habt richtig priorisiert. Sechs Überlebende ist der Unterschied zwischen einem guten und einem toten Sanitäter.' Rotes Kreuz auf die Jacke.",
                    damage: 0, moraleChange: +25, xpReward: 30,
                    grantClass: "medic",
                    nextScenario: "de_ost_start"
                }
            }
        ]
    },

    // ==========================================================
    // FRANKREICH — 4 Klassenwege
    // ==========================================================
    fr_training: {
        title: "August 1914 – Feldlager Châlons: Wahl des Ausbildungsweges",
        type: "decision",
        description: "Sergent-chef Moreau stellt die Rekruten vor die Ausbilder der verschiedenen Truppengattungen. 'Frankreich braucht jeden Mann an der richtigen Stelle. Was steckt in euch – Kämpfer, Retter, Jäger oder Ingenieur?' Die Champagne riecht nach Sommer und kommendem Blut.",
        options: [
            {
                text: "Infanterie: Bajonettangriff, Élan vital, Feuerüberlegenheit",
                outcome: {
                    text: "Caporal Lefèvre nimmt euch in die Infanteriegruppe. 'Frankreich greift an. Immer. Ihr lernt, wie man einen Angriff führt ohne zu sterben – meistens.'",
                    damage: 2, moraleChange: +12, xpReward: 10,
                    nextScenario: "fr_training_infantry"
                }
            },
            {
                text: "Médecin: Feldchirurgie, Triage, Verwundetenrettung",
                outcome: {
                    text: "Médecin-auxiliaire Renard zeigt auf das Verbandszelt. 'Ein Médecin kann keine Wunder wirken – aber er kann Zeit gewinnen. Zeit ist das Einzige, was Soldaten retten kann.'",
                    damage: 0, moraleChange: +10, xpReward: 10,
                    nextScenario: "fr_training_medic"
                }
            },
            {
                text: "Tireur d'élite: Scharfschützenausbildung, Lebel-Gewehr",
                outcome: {
                    text: "Sergent Beaumont, selbst dreifacher Schießmeister, nimmt euch zur Seite. 'Das Lebel ist alt aber tödlich. Ihr lernt, jeden Schuss zu einem Kunstwerk zu machen.'",
                    damage: 0, moraleChange: +8, xpReward: 10,
                    nextScenario: "fr_training_sniper"
                }
            },
            {
                text: "Génie: Festungsbau, Minensperren, Hindernisse",
                outcome: {
                    text: "Caporal Dubois rollt Blaupausen aus. 'Das Génie baut Frankreichs Verteidigung. Jede Linie, jede Sperre, jeder Unterstand – ihr macht sie möglich.'",
                    damage: 1, moraleChange: +8, xpReward: 10,
                    nextScenario: "fr_training_engineer"
                }
            }
        ]
    },

    fr_training_infantry: {
        title: "August 1914 – Infanterieausbildung Châlons: Lebel & Bajonett",
        type: "decision",
        description: "Das Lebel-Röhrenmagazin lädt langsam nach – man muss zwischen den Schüssen laden. Lefèvre: 'Der Deutsche schießt schnell und ungenau. Der Franzose schießt langsam und tödlich. Dann greift er mit dem Bajonett an.' Schießübung und Angriffstraining wechseln sich stündlich ab.",
        options: [
            {
                text: "Lebel-Schnellschuss mit Nachladen zwischen den Schüssen",
                outcome: {
                    text: "Acht Schuss, acht Nachladen – ein Rhythmus wie ein langsamer Herzschlag. Vier von acht Treffern auf bewegliche Ziele. Lefèvre: 'Morgen sind es fünf.'",
                    damage: 1, moraleChange: +12, xpReward: 18,
                    nextScenario: "fr_training_infantry_final"
                }
            },
            {
                text: "Bajonettangriff mit Kampfschrei auf 100 Meter",
                outcome: {
                    text: "'En avant!' Das Blut rauscht, die Beine fliegen, das Bajonett trifft die Puppe. Lefèvre: 'Der Élan vital. Das ist, was den Boche erschreckt. Das ist Frankreich.'",
                    damage: 3, moraleChange: +18, xpReward: 18,
                    nextScenario: "fr_training_infantry_final"
                }
            }
        ]
    },

    fr_training_infantry_final: {
        title: "August 1914 – Infanterie-Abschluss: Grande Manoeuvre",
        type: "decision",
        description: "Das Regiment simuliert einen Angriff. Rauchgranaten, Artillerielärm, hundert Mann in Bewegung. Moreau: 'Heute zeigt ihr, was ihr gelernt habt. Morgen braucht Frankreich es.'",
        options: [
            {
                text: "In erster Linie angreifen und die Stellung nehmen",
                outcome: {
                    text: "Rauch, Lärm, Schreien – ihr seid vorne, immer vorne. Als es endet, nickt Moreau: 'Infanterist. Pour la France.'",
                    damage: 4, moraleChange: +25, xpReward: 30,
                    grantClass: "infantry",
                    nextScenario: "fr_start"
                }
            }
        ]
    },

    fr_training_medic: {
        title: "August 1914 – Médecin-Ausbildung Châlons",
        type: "decision",
        description: "Renard zeigt euch die Statistiken: 'Dreißig Prozent der Verwundeten sterben nicht an der Wunde, sondern an schlechter Erstversorgung. Ihr ändert das.' Tourniquet, Wundspülung, Schienen – alles in fünf Minuten.",
        options: [
            {
                text: "Erste-Hilfe-Kurs unter Kampfbedingungen absolvieren",
                outcome: {
                    text: "Knallpatronen, Schreien, Schlamm. Ihr legt den Verband an. Renard stoppt die Uhr: 'Trois minutes, douze secondes. Acceptable.' In Renards Welt ist 'acceptable' ein Kompliment.",
                    damage: 0, moraleChange: +15, xpReward: 18,
                    nextScenario: "fr_training_medic_final"
                }
            },
            {
                text: "Triage unter Massenanfall üben – Prioritäten setzen",
                outcome: {
                    text: "Zehn Simulationsopfer, jeder anders verletzt. Ihr sortiert in neunzig Sekunden. Renard: 'Sechs richtig priorisiert. Vier falsch – die wären gestorben. Morgen macht ihr zehn von zehn.'",
                    damage: 0, moraleChange: +12, xpReward: 18,
                    nextScenario: "fr_training_medic_final"
                }
            }
        ]
    },

    fr_training_medic_final: {
        title: "August 1914 – Médecin-Abschluss Châlons",
        type: "decision",
        description: "Abschlussprüfung unter Moreau selbst. Drei Verwundete gleichzeitig, Feuer im Hintergrund, Zeitlimit zwei Minuten. 'Un bon médecin ne panique pas.'",
        options: [
            {
                text: "Alle drei Verwundeten retten ohne zu zögern",
                outcome: {
                    text: "Ein Minute, neunundvierzig Sekunden. Alle drei versorgt. Renard steckt euch das Rote Kreuz auf die Schulter: 'Médecin. Frankreich braucht euch mehr als Gewehre.'",
                    damage: 0, moraleChange: +28, xpReward: 30,
                    grantClass: "medic",
                    nextScenario: "fr_start"
                }
            }
        ]
    },

    fr_training_sniper: {
        title: "August 1914 – Scharfschützenausbildung Châlons",
        type: "decision",
        description: "Das alte Lebel als Scharfschützengewehr – unbequem, schwer, aber tödlich präzise in den richtigen Händen. Beaumont legt das Gewehr auf eine Sandsack-Auflage. 'Das Gewehr ist älter als ihr. Es hat trotzdem mehr Treffer als jeder von euch.'",
        options: [
            {
                text: "Präzisionsschießen auf 300 Meter mit dem Lebel",
                outcome: {
                    text: "Drei Schüsse auf dreihundert Meter, alle drei Treffer. Beaumont pfeift leise: 'C'est rare. Das ist selten.' Er legt einen Streifen um euren Arm.",
                    damage: 0, moraleChange: +18, xpReward: 20,
                    nextScenario: "fr_training_sniper_final"
                }
            },
            {
                text: "Tarntechnik im Gestrüpp der Champagne üben",
                outcome: {
                    text: "In der Weinberglandschaft seid ihr unsichtbar. Beaumont sucht euch zwanzig Minuten – dann gebt ihr euch zu erkennen. 'Wenn man euch nicht sieht, habt ihr schon gewonnen.'",
                    damage: 0, moraleChange: +15, xpReward: 20,
                    nextScenario: "fr_training_sniper_final"
                }
            }
        ]
    },

    fr_training_sniper_final: {
        title: "August 1914 – Scharfschützen-Abschluss",
        type: "decision",
        description: "Abschlusstest: Bewegliches Ziel, 350 Meter, Gegenwind, ein Schuss. Beaumont: 'En France, le tireur d'élite ne rate pas.'",
        options: [
            {
                text: "Den einen Schuss abgeben – mit vollem Vertrauen in die Waffe",
                outcome: {
                    text: "Wind, Ziel, Abzug. Treffer. Beaumont schreibt euren Namen in sein Heft. 'Tireur d'élite. Der Feind wird euch nie sehen.'",
                    damage: 0, moraleChange: +25, xpReward: 30,
                    grantClass: "sniper",
                    nextScenario: "fr_start"
                }
            }
        ]
    },

    fr_training_engineer: {
        title: "August 1914 – Génie-Ausbildung Châlons",
        type: "decision",
        description: "Dubois zeigt auf eine Karte: Schützengräben, Hindernisse, Unterstände. 'Das Génie entscheidet, ob Infanterie überlebt oder stirbt. Ihr baut das Fundament des Krieges.'",
        options: [
            {
                text: "Schützengraben mit Unterstand und Stacheldrahtsperre bauen",
                outcome: {
                    text: "Spaten, Sandsäcke, Stacheldrahtrollen. Nach sechs Stunden steht eine echte Verteidigungsposition. Dubois: 'Solide. Nicht schön – solide. Schön ist nicht wichtig. Leben ist wichtig.'",
                    damage: 3, moraleChange: +12, xpReward: 18,
                    nextScenario: "fr_training_engineer_final"
                }
            },
            {
                text: "Minensperren und Sprengladungen verlegen",
                outcome: {
                    text: "Zündschnur, Sprengkapsel, Deckung. Die Explosion ist präzise, kontrolliert, tödlich. Dubois nickt: 'Das Génie ist die gefährlichste Truppengattung. Auch für sich selbst.'",
                    damage: 2, moraleChange: +15, xpReward: 18,
                    nextScenario: "fr_training_engineer_final"
                }
            }
        ]
    },

    fr_training_engineer_final: {
        title: "August 1914 – Génie-Abschluss",
        type: "decision",
        description: "Abschlussprüfung: Eine simulierte Stacheldrahtsperre in Dunkelheit und Stille öffnen. Dann Sprengladung unter einem Hindernis anbringen, Zünder setzen, zurück. Dreißig Minuten.",
        options: [
            {
                text: "Alles korrekt und lautlos ausführen",
                outcome: {
                    text: "Lautlos, präzise, effektiv. Dubois: 'Pionier. Der Krieg braucht euch mehr als er es ahnt.'",
                    damage: 1, moraleChange: +22, xpReward: 30,
                    grantClass: "engineer",
                    nextScenario: "fr_start"
                }
            }
        ]
    },

    // ==========================================================
    // GROSSBRITANNIEN — 3 Klassenwege (inkl. Fernmelder)
    // ==========================================================
    gb_training: {
        title: "August 1914 – Aldershot: Ausbildungswahl",
        type: "decision",
        description: "Sergeant Major Hicks steht vor der angetretenen Kompanie. 'You are civilians. In five days, you will be soldiers. The British Army has three paths for you: the rifle, the signal, or the stretcher. Choose wisely – because the wrong choice gets people killed.'",
        options: [
            {
                text: "Rifleman: Lee-Enfield, Mad Minute, Rapid Fire",
                outcome: {
                    text: "Corporal Evans legt das Lee-Enfield auf den Tisch. 'Fifteen aimed rounds per minute. That is the British standard. Some men do twenty. You will do fifteen first.'",
                    damage: 2, moraleChange: +10, xpReward: 10,
                    nextScenario: "gb_training_infantry"
                }
            },
            {
                text: "Signals: Semaphore, Field Telegraph, Artillery Coordination",
                outcome: {
                    text: "Corporal Fletcher zeigt auf Flaggen, Kabel und Funkgeräte. 'Communications win wars. The man at the wire is as important as the man with the rifle. Sometimes more.'",
                    damage: 0, moraleChange: +10, xpReward: 10,
                    nextScenario: "gb_training_fernmelder"
                }
            },
            {
                text: "RAMC: Royal Army Medical Corps, Stretcher Bearers",
                outcome: {
                    text: "Corporal Harris, RAMC-Veteran der Buren-Kampagne: 'We save the men who fight. Without us, there is no army. Without us, there is only defeat.'",
                    damage: 0, moraleChange: +10, xpReward: 10,
                    nextScenario: "gb_training_medic"
                }
            }
        ]
    },

    gb_training_infantry: {
        title: "August 1914 – Rifleman-Ausbildung Aldershot: The Mad Minute",
        type: "decision",
        description: "Der Schießstand. Evans: 'Fifteen aimed rounds in sixty seconds. That is the Mad Minute. It is what makes the British infantry the most feared in the world. Now you learn it.'",
        options: [
            {
                text: "The Mad Minute absolvieren – 15 präzise Schüsse in 60 Sekunden",
                outcome: {
                    text: "Vierzehn Treffer in siebenundfünfzig Sekunden. Evans: 'Fourteen. Close enough. Tomorrow: fifteen. The next day: sixteen.'",
                    damage: 2, moraleChange: +15, xpReward: 20,
                    nextScenario: "gb_training_infantry_final"
                }
            },
            {
                text: "Schnellschuss-Training unter Erschöpfungsbedingungen",
                outcome: {
                    text: "Fünfhundert Meter Sprint, sofort schießen. Herzschlag wie Trommelfeuer, Hände zittern – trotzdem Treffer. Evans: 'A soldier who can shoot while exhausted is a soldier who survives.'",
                    damage: 4, moraleChange: +12, xpReward: 20,
                    nextScenario: "gb_training_infantry_final"
                }
            }
        ]
    },

    gb_training_infantry_final: {
        title: "August 1914 – Rifleman-Abschluss: Final Exercise",
        type: "decision",
        description: "Hicks: 'You have five days of training. The Germans have five years. You have one advantage: You are British. Do not waste it.' Nachtpatrouille, Feuerkoordination, kombinierte Abschlussübung.",
        options: [
            {
                text: "Nachtpatrouille lautlos durch feindliches Gelände führen",
                outcome: {
                    text: "Dunkelheit, kein Licht, kein Geräusch. Ihr erreicht das Ziel zwei Stunden früher als erwartet. Hicks: 'I expected you at dawn. You arrived at midnight. Well done, Rifleman.'",
                    damage: 2, moraleChange: +25, xpReward: 30,
                    grantClass: "infantry",
                    nextScenario: "gb_start"
                }
            }
        ]
    },

    gb_training_fernmelder: {
        title: "August 1914 – Signals-Ausbildung Aldershot",
        type: "decision",
        description: "Fletcher: 'Semaphore, Morse, field telephone – you will learn all three. Because in battle, one system always fails. You need the backup.' Flaggen, Kabel, Funkgerät auf dem Tisch.",
        options: [
            {
                text: "Semaphore-Flaggencode in Rekordzeit beherrschen",
                outcome: {
                    text: "Ihr entschlüsselt eine verschlüsselte Nachricht in sechzig Sekunden. Fletcher: 'Communications win wars. Remember that.'",
                    damage: 0, moraleChange: +18, xpReward: 20,
                    nextScenario: "gb_training_fernmelder_final"
                }
            },
            {
                text: "Feldtelefon-Kabel durch simuliertes Schlachtfeld verlegen",
                outcome: {
                    text: "Stacheldraht, Granattrichter, Schlamm – das Kabel folgt eurem Weg durch alles. Fletcher testet den Anschluss: 'Line clear.' Zwei Worte, die über Sieg oder Niederlage entscheiden.",
                    damage: 2, moraleChange: +15, xpReward: 20,
                    nextScenario: "gb_training_fernmelder_final"
                }
            }
        ]
    },

    gb_training_fernmelder_final: {
        title: "August 1914 – Signals-Abschluss Aldershot",
        type: "decision",
        description: "Abschlussprüfung: Kabelbruch unter Beschuss reparieren, Artilleriekoordinaten übermitteln, Nachricht in Morsecode senden. Gleichzeitig. Hicks beobachtet.",
        options: [
            {
                text: "Alle Kommunikationsaufgaben simultan lösen",
                outcome: {
                    text: "Artillerie trifft das Ziel. Kabel ist geflickt. Nachricht ist übermittelt. Hicks schreibt in sein Buch: 'Signaller. The regiment has eyes.'",
                    damage: 1, moraleChange: +22, xpReward: 30,
                    grantClass: "fernmelder",
                    nextScenario: "gb_start"
                }
            }
        ]
    },

    gb_training_medic: {
        title: "August 1914 – RAMC-Ausbildung Aldershot",
        type: "decision",
        description: "Harris: 'A stretcher bearer runs toward the bullets, not away from them. You will learn to carry a wounded man while being shot at. And you will not drop him.' Erster Tag: Gewicht des Verwundeten – achtzig Kilo Lebendgewicht.",
        options: [
            {
                text: "Verwundeten unter Feuer bergend durch Hindernisse ziehen",
                outcome: {
                    text: "Stacheldraht, Granattrichter, Schlamm – und ein bewusstloser Kamerad auf den Schultern. Ihr bringt ihn raus. Harris: 'Six minutes. Next time: four.'",
                    damage: 3, moraleChange: +15, xpReward: 18,
                    nextScenario: "gb_training_medic_final"
                }
            },
            {
                text: "Feldverband bei verschiedenen Wundtypen anlegen",
                outcome: {
                    text: "Granatsplitter, Schusswunde, Druckverband, Schiene – alles in Minutentakt. Harris: 'Correct. Every time. That is all I ask.'",
                    damage: 0, moraleChange: +18, xpReward: 18,
                    nextScenario: "gb_training_medic_final"
                }
            }
        ]
    },

    gb_training_medic_final: {
        title: "August 1914 – RAMC-Abschluss Aldershot",
        type: "decision",
        description: "Harris: 'Last exercise. Four casualties. Shell fire. Two minutes. Go.' Der Startschuss fällt.",
        options: [
            {
                text: "Alle vier Verwundeten in zwei Minuten versorgen",
                outcome: {
                    text: "Ein Minute, siebenundfünfzig Sekunden. Alle vier. Harris sieht auf die Uhr, sieht zu euch: 'RAMC. You run toward the bullets. Remember that.'",
                    damage: 0, moraleChange: +25, xpReward: 30,
                    grantClass: "medic",
                    nextScenario: "gb_start"
                }
            }
        ]
    },

    // ==========================================================
    // BELGIEN — 3 Klassenwege
    // ==========================================================
    be_training: {
        title: "August 1914 – Fort Loncin: Ausbildung unter Beschuss",
        type: "decision",
        description: "Die Kanonen von Lüttich donnern in der Ferne. Van den Berg: 'Ihr habt keine Zeit für eine normale Ausbildung. Die Deutschen kommen. Ihr wählt heute euren Posten – und morgen kämpft ihr dafür.' Die Mauern des Forts zittern bei jedem Einschlag.",
        options: [
            {
                text: "Schütze: Gewehr, Festungsverteidigung, Engpasskampf",
                outcome: {
                    text: "Adjutant Van den Berg übergibt euch das belgische Mauser 1889. 'Dasselbe Gewehr wie die Deutschen. Aber wir schießen besser – weil wir für unser Heimatland kämpfen.'",
                    damage: 2, moraleChange: +15, xpReward: 10,
                    nextScenario: "be_training_infantry"
                }
            },
            {
                text: "Pionier: Festungsvertärkung, Minensperren, Hindernisse",
                outcome: {
                    text: "Leutnant Claes: 'Das Fort muss halten. Ihr sorgt dafür.' Stacheldraht, Betonsäcke, Sprengladungen – der erste Tag ist Muskelarbeit ohne Ende.",
                    damage: 3, moraleChange: +10, xpReward: 10,
                    nextScenario: "be_training_engineer"
                }
            },
            {
                text: "Médecin: Verwundetenversorgung unter Artilleriebeschuss",
                outcome: {
                    text: "Infirmier Martens: 'Im Fort treffen uns Granaten von allen Seiten. Ihr versorgt die Verwundeten, während der Beton über euch bricht.' Eine Einführung ohne Zartgefühl.",
                    damage: 0, moraleChange: +8, xpReward: 10,
                    nextScenario: "be_training_medic"
                }
            }
        ]
    },

    be_training_infantry: {
        title: "August 1914 – Schützenausbildung Fort Loncin",
        type: "decision",
        description: "Der Schießstand liegt im Innenhof des Forts. Draußen hört man die deutschen Kanonen. Van den Berg: 'Ihr schießt auf Deutsche. Jeder Treffer rettet belgisches Land.'",
        options: [
            {
                text: "Zielschießen auf verschiedene Entfernungen im Festungsinneren",
                outcome: {
                    text: "Enge Korridore, kurze Entfernungen – der Festungskampf ist anders als Feldkampf. Ihr lernt, um Ecken zu schießen, in engen Räumen zu kämpfen. Van den Berg: 'Gut. Sehr gut.'",
                    damage: 1, moraleChange: +15, xpReward: 20,
                    nextScenario: "be_training_infantry_final"
                }
            },
            {
                text: "Verteidigungslinie unter simuliertem Artilleriefeuer halten",
                outcome: {
                    text: "Granatenknall, Betonstaub, Schreien. Ihr haltet die Linie. Van den Berg: 'Belgien ist klein. Aber belgische Soldaten sind groß.'",
                    damage: 4, moraleChange: +18, xpReward: 20,
                    nextScenario: "be_training_infantry_final"
                }
            }
        ]
    },

    be_training_infantry_final: {
        title: "August 1914 – Schützen-Abschluss: Letzter Tag",
        type: "decision",
        description: "In der Nacht haben echte Granaten den Westwall getroffen. Risse im Beton. Van den Berg: 'Das Training ist vorbei. Nicht weil wir fertig sind – weil der Feind es beendet hat.'",
        options: [
            {
                text: "Schützenlinie zur Verteidigung des Haupttors formieren",
                outcome: {
                    text: "Schulter an Schulter. Keiner weicht. Van den Berg geht die Linie ab, sieht in jedes Gesicht: 'Voor België!' – und es reicht. Fuselier. Soldat der belgischen Armee.",
                    damage: 3, moraleChange: +25, xpReward: 30,
                    grantClass: "infantry",
                    nextScenario: "be_start"
                }
            }
        ]
    },

    be_training_engineer: {
        title: "August 1914 – Pionierausbildung Fort Loncin",
        type: "decision",
        description: "Claes zeigt auf den Beton: 'Das Fort ist stark. Aber noch stärker mit Stacheldraht, Panzerfallen und Sprengladungen. Ihr macht es uneinnehmbar.'",
        options: [
            {
                text: "Stacheldrahtsperren und Panzerfallen in Rekordzeit errichten",
                outcome: {
                    text: "Ihr rollt, rammt, befestigt. Van den Berg kontrolliert: 'Een goede hindernis redt levens.' Ein gutes Hindernis rettet Leben. Eures wurde als Standard erklärt.",
                    damage: 2, moraleChange: +15, xpReward: 20,
                    nextScenario: "be_training_engineer_final"
                }
            },
            {
                text: "Sprengladungen am Festungstor für den Notfall anlegen",
                outcome: {
                    text: "Wenn das Fort fällt, fällt es nicht kampflos. Claes: 'Als de Duitsers dit fort willen – laat hen ervoor betalen.' Wenn sie es wollen, sollen sie dafür bezahlen.",
                    damage: 1, moraleChange: +18, xpReward: 20,
                    nextScenario: "be_training_engineer_final"
                }
            }
        ]
    },

    be_training_engineer_final: {
        title: "August 1914 – Pionier-Abschluss Fort Loncin",
        type: "decision",
        description: "Letzte Prüfung: Einen beschädigten Abschnitt der Fortmauer provisorisch verstärken, gleichzeitig Minensperren vor dem Tor aktivieren. Dreißig Minuten. Die Deutschen kommen.",
        options: [
            {
                text: "Mauer verstärken und Minen aktivieren – alles in einer halben Stunde",
                outcome: {
                    text: "Achtundzwanzig Minuten. Claes drückt euch die Hand: 'Pionier. Belgien ist so stark wie seine Pioniere.'",
                    damage: 2, moraleChange: +22, xpReward: 30,
                    grantClass: "engineer",
                    nextScenario: "be_start"
                }
            }
        ]
    },

    be_training_medic: {
        title: "August 1914 – Médecin-Ausbildung Fort Loncin",
        type: "decision",
        description: "Martens: 'Granaten töten auf verschiedene Arten. Ihr lernt, mit jeder umzugehen.' Splitter, Druckwellen, Verschüttungen – das Spektrum der Verletzungen ist endlos.",
        options: [
            {
                text: "Splitterwunden unter Zeitdruck versorgen",
                outcome: {
                    text: "Pinzette, Verband, Druckpunkt. Schnell, aber sorgfältig. Martens: 'Precies. Niet te snel, niet te langzaam.' Nicht zu schnell, nicht zu langsam.",
                    damage: 0, moraleChange: +15, xpReward: 18,
                    nextScenario: "be_training_medic_final"
                }
            },
            {
                text: "Verschütteten aus Betontrümmern befreien und versorgen",
                outcome: {
                    text: "Betonbrocken beiseite, Atemweg freihalten, stabil lagern. Der Simulationspatient atmet wieder. Martens: 'Dat is het verschil. Das ist der Unterschied.'",
                    damage: 1, moraleChange: +18, xpReward: 18,
                    nextScenario: "be_training_medic_final"
                }
            }
        ]
    },

    be_training_medic_final: {
        title: "August 1914 – Médecin-Abschluss Fort Loncin",
        type: "decision",
        description: "Abschlussprüfung. Vier Verwundete, echte Granateneinschläge im Hintergrund. Martens: 'Jetzt. Ohne Pause.'",
        options: [
            {
                text: "Alle vier Verwundeten unter echtem Granatenlärm versorgen",
                outcome: {
                    text: "Die Hände zittern, aber die Verbände sitzen. Alle vier versorgt. Martens: 'Sanitäter. Voor België en voor het leven.' Für Belgien und für das Leben.",
                    damage: 0, moraleChange: +25, xpReward: 30,
                    grantClass: "medic",
                    nextScenario: "be_start"
                }
            }
        ]
    },

    // ==========================================================
    // ÖSTERREICH-UNGARN — 4 Klassenwege (inkl. Standschütze)
    // ==========================================================
    at_training: {
        title: "August 1914 – Karpaten-Ausbildungslager: Ausbildungswahl",
        type: "decision",
        description: "Leutnant Brandtner, k.u.k. Alpenjäger, steht auf einem Felsvorsprung. 'Das Kaiserreich braucht jeden Mann an der richtigen Stelle. Infanterie, Sanitäter, Pionier oder – wenn ihr Tiroler seid – Standschütze.' Hinter ihm: die endlose Karpatenkette.",
        options: [
            {
                text: "Infanterie: Gebirgsinfanterie, Kampf im Hochgelände",
                outcome: {
                    text: "Hauptmann Mayer nimmt euch in die Gebirgsinfanterie. 'Im Gebirge kämpft man anders als in der Ebene. Steile Hänge, dünne Luft, kein Rückzug.' Gewehr und Steigeisen.",
                    damage: 3, moraleChange: +8, xpReward: 10,
                    nextScenario: "at_training_infantry"
                }
            },
            {
                text: "Sanitäter: Verwundetenversorgung im Hochgebirge",
                outcome: {
                    text: "Militärarzt Dr. Fink: 'Im Gebirge ist die Evakuierung eines Verwundeten das Schwierigste überhaupt. Ihr lernt es heute.' Seile, Tragen, Kältebehandlung.",
                    damage: 0, moraleChange: +8, xpReward: 10,
                    nextScenario: "at_training_medic"
                }
            },
            {
                text: "Pionier: Kaverne und Stellungsbau in Felshängen",
                outcome: {
                    text: "Oberleutnant Huber: 'Im Gebirge ist der Pionier König. Ihr sprengt, baut, sperrt – und das alles an Steilhängen.' Sprengstoff und Felshammer.",
                    damage: 2, moraleChange: +8, xpReward: 10,
                    nextScenario: "at_training_engineer"
                }
            },
            {
                text: "Standschütze: Tiroler Heimatschütze, Gebirgsschütze, Scharfschütze",
                outcome: {
                    text: "Brandtner nickt respektvoll: 'Ein Tiroler kennt sein Gebirge. Ein Standschütze kämpft für seine Heimat wie kein anderer.' Ihr bekommt das schwarze Edelweiß.",
                    damage: 0, moraleChange: +12, xpReward: 10,
                    nextScenario: "at_training_standschuetze"
                }
            }
        ]
    },

    at_training_infantry: {
        title: "August 1914 – Gebirgsinfanterie-Ausbildung Karpaten",
        type: "decision",
        description: "Tag zwei. Aufstieg mit voller Ausrüstung auf 1.800 Meter. Mayer: 'Wer hier oben kämpft, kämpft auch gegen das Gebirge. Wer das Gebirge nicht respektiert, stirbt daran.' Drei Männer kehren um. Ihr nicht.",
        options: [
            {
                text: "Gebirgsmarsch mit Gepäck bis zum Gipfel durchhalten",
                outcome: {
                    text: "Die Lungen brennen, die Knie zittern. Oben: Kälte und Weite. Mayer steht bereits dort. 'Ihr seid angekommen. Die anderen nicht. Das ist der Unterschied.'",
                    damage: 5, moraleChange: +12, xpReward: 20,
                    nextScenario: "at_training_infantry_final"
                }
            },
            {
                text: "Hochgebirgsschießen mit Ballistikkorrektur",
                outcome: {
                    text: "Hangabwärts schießen, Höhenkorrektur anwenden. Mayer: 'Die meisten schießen beim ersten Mal drüber. Ihr habt getroffen. Merkt euch das Gefühl.'",
                    damage: 1, moraleChange: +15, xpReward: 20,
                    nextScenario: "at_training_infantry_final"
                }
            }
        ]
    },

    at_training_infantry_final: {
        title: "August 1914 – Gebirgsinfanterie-Abschluss: Schneesturm",
        type: "decision",
        description: "Mitternacht. Brandtner weckt die Gruppe: 'Es schneit.' Im August, in den Karpaten. 'Perfekt. Das nennt sich Realismus.' Eine Übungsstellung im Schnee, null Sicht, Minustemperaturen.",
        options: [
            {
                text: "Stellung im Schneesturm halten – jeden Schuss mit tauben Fingern",
                outcome: {
                    text: "Finsternis und Frost. Ihr haltet. Als Brandtner abbricht: 'Ihr habt gehalten. Im echten Leben hättet ihr überlebt.' Gebirgsinfanterist – und das bedeutet etwas.",
                    damage: 5, moraleChange: +25, xpReward: 30,
                    grantClass: "infantry",
                    nextScenario: "at_start"
                }
            }
        ]
    },

    at_training_medic: {
        title: "August 1914 – Sanitätsausbildung Karpaten",
        type: "decision",
        description: "Dr. Fink: 'Im Gebirge ist der Abtransport eines Verwundeten die eigentliche Herausforderung. Seilbahn, Trage, Schlitten – alles auf steilen Hängen.' Erste Übung: Einen achtzigkilogramm schweren 'Verwundeten' über einen 200-Meter-Hang abseilen.",
        options: [
            {
                text: "Verwundeten über Seilsystem den Hang hinuntertragen",
                outcome: {
                    text: "Seile, Karabiner, Trage. Jeder Schritt berechnet. Der 'Verwundete' kommt unten an – unversehrt. Fink: 'Ein Abstieg im Gebirge ist schwerer als ein Aufstieg. Ihr habt es gewusst.'",
                    damage: 3, moraleChange: +15, xpReward: 18,
                    nextScenario: "at_training_medic_final"
                }
            },
            {
                text: "Erfrierungsbehandlung und Höhenkrankheit unter Zeitdruck",
                outcome: {
                    text: "Dünne Luft, Frost, Erschöpfung – die Verletzungen im Gebirge sind anders. Fink: 'Gut. Ihr denkt wie ein Gebirgssanitäter.'",
                    damage: 0, moraleChange: +18, xpReward: 18,
                    nextScenario: "at_training_medic_final"
                }
            }
        ]
    },

    at_training_medic_final: {
        title: "August 1914 – Sanitäts-Abschluss Karpaten",
        type: "decision",
        description: "Abschlussprüfung: Drei Verwundete gleichzeitig, ein Schneesturm, ein 45-Grad-Hang. Fink: 'Das Gebirge nimmt keine Rücksicht. Ihr auch nicht.'",
        options: [
            {
                text: "Alle drei Verwundeten retten und abseilen",
                outcome: {
                    text: "Alle drei lebend unten. Fink schaut auf die Uhr, schaut auf euch, sagt nichts – und das Schweigen ist das höchste Lob. Sanitäter. Im Kaiserlichen Gebirgsdienst.",
                    damage: 2, moraleChange: +25, xpReward: 30,
                    grantClass: "medic",
                    nextScenario: "at_start"
                }
            }
        ]
    },

    at_training_engineer: {
        title: "August 1914 – Pionierausbildung Karpaten",
        type: "decision",
        description: "Huber: 'Pioniere bauen im Gebirge Unmögliches. Kavernen in Granit, Seilbahnen über Schluchten, Sprengungen an Steilhängen.' Heute: Kaverne im Fels sprengen und sichern.",
        options: [
            {
                text: "Kaverne in den Felshang sprengen und als Unterstand ausbauen",
                outcome: {
                    text: "Sprengung, Staubwolke, dann Stille. Aus dem Chaos entsteht ein Hohlraum, groß genug für zwölf Mann. Huber: 'Das ist alpiner Festungsbau. Kein Feind nimmt das.'",
                    damage: 2, moraleChange: +15, xpReward: 20,
                    nextScenario: "at_training_engineer_final"
                }
            },
            {
                text: "Seilbahn über die Schlucht spannen – Transport unter Beschuss",
                outcome: {
                    text: "Drahtseil, Laufwagen, Verankerung. Die Seilbahn trägt hundert Kilo Last. Huber: 'Una teleferica bona salva più vite della medicina.' Eine gute Seilbahn rettet mehr Leben als Medizin.",
                    damage: 1, moraleChange: +18, xpReward: 20,
                    nextScenario: "at_training_engineer_final"
                }
            }
        ]
    },

    at_training_engineer_final: {
        title: "August 1914 – Pionier-Abschluss Karpaten",
        type: "decision",
        description: "Letzte Prüfung: Einen Steilhang durch Sprengung sichern und danach eine Seilbahn für den Verwundetentransport installieren. Vierzig Minuten. Brandtner beobachtet.",
        options: [
            {
                text: "Sprengung und Seilbahn in vierzig Minuten fertigstellen",
                outcome: {
                    text: "Siebenunddreißig Minuten. Huber: 'Pionier. Das Gebirge gehört euch – weil ihr es gebaut habt.'",
                    damage: 2, moraleChange: +22, xpReward: 30,
                    grantClass: "engineer",
                    nextScenario: "at_start"
                }
            }
        ]
    },

    at_training_standschuetze: {
        title: "August 1914 – Standschützenausbildung: Das Tiroler Erbe",
        type: "decision",
        description: "Brandtner: 'Ein Standschütze ist kein Soldat – er ist ein Tiroler, der für sein Tal kämpft. Das ist ein Unterschied.' Die Ausbildung ist intensiv: Klettern, Schießen, Stellen bauen, Überleben im Gebirge.",
        options: [
            {
                text: "Hochgebirgsschießen auf 500 Meter vom Grat",
                outcome: {
                    text: "Wind, Kälte, Abgrund – ihr schießt vom Felsvorsprung. Treffer auf 500 Meter. Brandtner: 'Ein Tiroler trifft. Das ist kein Können – das ist Geburtsrecht.'",
                    damage: 0, moraleChange: +20, xpReward: 22,
                    nextScenario: "at_training_standschuetze_final"
                }
            },
            {
                text: "Scharfschützenposition im Fels anlegen und tarnen",
                outcome: {
                    text: "Steine, Moos, Schneereste. Brandtner sucht euch zehn Minuten. Als er aufgibt: 'Gut. Wenn man euch nicht sieht, ist der Feind bereits besiegt.'",
                    damage: 0, moraleChange: +18, xpReward: 22,
                    nextScenario: "at_training_standschuetze_final"
                }
            }
        ]
    },

    at_training_standschuetze_final: {
        title: "August 1914 – Standschützen-Abschluss: Die große Probe",
        type: "decision",
        description: "Brandtner weckt die Gruppe um Mitternacht. 'La Grande Prova. Aufstieg, Stellung halten, Abstieg. Wenn ihr zurückkommt, seid ihr Standschützen.' Kein Zurück.",
        options: [
            {
                text: "Aufstieg, Stellung halten, Abstieg – ohne aufzugeben",
                outcome: {
                    text: "Zehn Stunden. Eis, Dunkel, Schüsse. Als ihr das Lager erreicht, stehen die alten Standschützen Spalier. Brandtner sagt drei Wörter: 'Willkommen, Standschütze.'",
                    damage: 5, moraleChange: +30, xpReward: 40,
                    grantClass: "standschuetze",
                    nextScenario: "at_start"
                }
            }
        ]
    },

    // ==========================================================
    // RUSSLAND — 3 Klassenwege
    // ==========================================================
    ru_training: {
        title: "August 1914 – Krasnoje Selo: Ausbildungswahl",
        type: "decision",
        description: "Feldwebel Sorokin: 'Russland hat nicht genug Gewehre. Aber wir haben Männer. Und wir haben Bajonette.' Drei Ausbildungswege stehen offen – in einer Armee, die von chronischem Mangel geprägt ist.",
        options: [
            {
                text: "Infanterist: Bajonett-Drill, Massenangriff, Schützenreihe",
                outcome: {
                    text: "Sorokin gibt euch das Dreilinien-Bajonett. 'Die Kugel ist eine Närrin – das Bajonett ist ein Kerl.' Beginn des härtesten Drills.",
                    damage: 3, moraleChange: +10, xpReward: 10,
                    nextScenario: "ru_training_infantry"
                }
            },
            {
                text: "Sanitäter: Feldmedizin bei chronischem Mangel",
                outcome: {
                    text: "Militärarzt Woronin: 'In Russland haben wir keine Morphin-Reserven, keine Verbände im Überfluss. Ihr lernt, mit nichts das Unmögliche zu tun.'",
                    damage: 0, moraleChange: +8, xpReward: 10,
                    nextScenario: "ru_training_medic"
                }
            },
            {
                text: "Fernmelder: Telegrafie und Feldkommunikation in der Steppe",
                outcome: {
                    text: "Sergeant Petrow: 'Die Ostfront ist endlos. Ohne Kommunikation verliert die größte Armee der Welt. Ihr seid der Faden, der alles zusammenhält.'",
                    damage: 0, moraleChange: +8, xpReward: 10,
                    nextScenario: "ru_training_fernmelder"
                }
            }
        ]
    },

    ru_training_infantry: {
        title: "August 1914 – Bajonett-Ausbildung Krasnoje Selo",
        type: "decision",
        description: "Sorokin: 'Dawai! Dawai!' Der Drill beginnt vor Sonnenaufgang. Bajonett-Stoß, Parade, Gegenangriff. Tausend Mal. Bis die Bewegung sitzt wie Atmen.",
        options: [
            {
                text: "Bajonett-Drill bis zur absoluten Erschöpfung wiederholen",
                outcome: {
                    text: "Jeder Muskel schmerzt. Sorokin: 'Schmerz ist Russisch. Wer keinen Schmerz kennt, kennt Russland nicht.' Am Abend sitzt der Stoß wie eine Uhrwerk.",
                    damage: 4, moraleChange: +12, xpReward: 20,
                    nextScenario: "ru_training_infantry_final"
                }
            },
            {
                text: "Massenangriffs-Koordination: Wellen einteilen und führen",
                outcome: {
                    text: "Ihr führt die zweite Welle, wartet auf die richtige Lücke. Sorokin: 'Ein denkender Soldat ist Russlands bestes Werkzeug. Ihr denkt – das ist selten.'",
                    damage: 1, moraleChange: +18, xpReward: 20,
                    nextScenario: "ru_training_infantry_final"
                }
            }
        ]
    },

    ru_training_infantry_final: {
        title: "August 1914 – Infanterie-Abschluss: Massenangriffssimulation",
        type: "decision",
        description: "Sorokin: 'Russland gewinnt durch Unerbittlichkeit. Wir greifen an. Wenn die erste Welle fällt, kommt die zweite.' Zweihundert Mann, ein Befehl: Vorwärts.",
        options: [
            {
                text: "In der Sturmwelle vorwärtsstürmen – egal was kommt",
                outcome: {
                    text: "Laufen, fallen, aufstehen, weiter. Als Sorokin stoppt: 'Soldat. Mutiger, dummer Mut – aber Mut. Das ist Russland.' Infanterist der Kaiserlichen Armee.",
                    damage: 5, moraleChange: +22, xpReward: 30,
                    grantClass: "infantry",
                    nextScenario: "ru_start"
                }
            }
        ]
    },

    ru_training_medic: {
        title: "August 1914 – Sanitätsausbildung Krasnoje Selo",
        type: "decision",
        description: "Woronin zeigt auf leere Regale: 'Das ist unser Sanitätslager. Leer. Ihr lernt heute, ohne Verbandsmaterial Verbände zu machen.' Provisorische Medizin ist russische Medizin.",
        options: [
            {
                text: "Verwundetenversorgung mit minimalem Material",
                outcome: {
                    text: "Stoff vom eigenen Hemd als Verband, Ast als Schiene. Woronin: 'Russland hat wenig von allem – aber viel von Improvisation. Ihr lernt es.'",
                    damage: 0, moraleChange: +15, xpReward: 18,
                    nextScenario: "ru_training_medic_final"
                }
            },
            {
                text: "Verwundeten unter Angriff aus der Schusslinie retten",
                outcome: {
                    text: "Bajonette pfeifen, ihr kriecht zu dem Mann, schleppt ihn raus. Woronin: 'Schnell. Gut. Lebendig.' Drei Wörter – alles was zählt.",
                    damage: 3, moraleChange: +18, xpReward: 18,
                    nextScenario: "ru_training_medic_final"
                }
            }
        ]
    },

    ru_training_medic_final: {
        title: "August 1914 – Sanitäts-Abschluss Krasnoje Selo",
        type: "decision",
        description: "Woronin: 'Letzte Prüfung. Fünf Verwundete. Keine Verbandsmittel. Fünf Minuten.' Es ist gleichzeitig ein Test und die Realität der russischen Armee.",
        options: [
            {
                text: "Alle fünf mit improvisierten Mitteln versorgen",
                outcome: {
                    text: "Alle fünf leben. Woronin: 'Sanitäter der Kaiserlichen Armee. In Russland ist das Schwerste: mit nichts das Unmögliche zu tun. Ihr habt es getan.'",
                    damage: 0, moraleChange: +25, xpReward: 30,
                    grantClass: "medic",
                    nextScenario: "ru_start"
                }
            }
        ]
    },

    ru_training_fernmelder: {
        title: "August 1914 – Fernmelder-Ausbildung Krasnoje Selo",
        type: "decision",
        description: "Petrow: 'Die Ostfront ist breit wie drei Frankreich. Ohne Kabel und Funke ist jede Armee blind.' Erste Übung: Telegrafie-Morsecode in einem Tag.",
        options: [
            {
                text: "Morsecode und Telegrafie in einem Tag lernen",
                outcome: {
                    text: "Punkt-Strich, Strich-Punkt. Die Finger lernen schneller als der Kopf. Petrow: 'Gut. Schnell. Ihr versteht, dass Kommunikation Geschwindigkeit ist.'",
                    damage: 0, moraleChange: +15, xpReward: 20,
                    nextScenario: "ru_training_fernmelder_final"
                }
            },
            {
                text: "Feldkabel über dreißig Kilometer Steppe verlegen",
                outcome: {
                    text: "Dreißig Kilometer. Steppe, Hitze, das Gewicht der Kabelrolle. Petrow am Ende: 'Verbindung steht.' Acht Stunden Arbeit für drei Worte.",
                    damage: 4, moraleChange: +18, xpReward: 20,
                    nextScenario: "ru_training_fernmelder_final"
                }
            }
        ]
    },

    ru_training_fernmelder_final: {
        title: "August 1914 – Fernmelder-Abschluss Krasnoje Selo",
        type: "decision",
        description: "Petrow: 'Abschluss. Artilleriekoordinaten übermitteln, Kabelbruch reparieren, Lagemeldung verschlüsseln. Gleichzeitig.' Der Befehl kommt wie ein Hammerschlag.",
        options: [
            {
                text: "Alle drei Kommunikationsaufgaben simultan lösen",
                outcome: {
                    text: "Artillerie trifft. Kabel geflickt. Nachricht übermittelt. Petrow: 'Fernmelder. Die Armee sieht mit euren Augen.'",
                    damage: 1, moraleChange: +22, xpReward: 30,
                    grantClass: "fernmelder",
                    nextScenario: "ru_start"
                }
            }
        ]
    },

    // ==========================================================
    // ITALIEN — 3 Klassenwege
    // ==========================================================
    it_training: {
        title: "Mai 1915 – Belluno-Sektor: Ausbildungswahl der Alpini",
        type: "decision",
        description: "Tenente Conti steht vor einer sechzig Meter hohen Felswand. 'Un Alpino non teme il monte. Ein Alpino fürchtet den Berg nicht.' Drei Ausbildungswege: Kämpfer, Heiler oder Ingenieur. Der Berg entscheidet, wer bleibt.",
        options: [
            {
                text: "Alpini-Kämpfer: Klettern, Gebirgsschießen, Angriff",
                outcome: {
                    text: "Sottotenente Ferretti nimmt euch mit zur Felswand. 'Erst klettern. Dann schießen. Dann angreifen. In dieser Reihenfolge.' Hände an den Fels.",
                    damage: 3, moraleChange: +10, xpReward: 10,
                    nextScenario: "it_training_infantry"
                }
            },
            {
                text: "Medico: Gebirgsmedizin, Verwundetenabseilen, Notfallchirurgie",
                outcome: {
                    text: "Medico Brambilla: 'Im Gebirge ist ein Verwundeter oft unerreichbar. Ihr lernt, ihn trotzdem zu retten.' Seile und Verbandsmaterial.",
                    damage: 0, moraleChange: +8, xpReward: 10,
                    nextScenario: "it_training_medic"
                }
            },
            {
                text: "Geniere: Seilbahnen, Sprengungen, alpine Ingenieurkunst",
                outcome: {
                    text: "Capitano Rossi: 'Das Geniere baut die Seilbahnen, ohne die keine Alpini-Stellung möglich ist.' Drahtseile und Sprengstoff.",
                    damage: 2, moraleChange: +8, xpReward: 10,
                    nextScenario: "it_training_engineer"
                }
            }
        ]
    },

    it_training_infantry: {
        title: "Mai 1915 – Alpini-Kampfausbildung Belluno",
        type: "decision",
        description: "Tag zwei. Klettern, schießen, wieder klettern. Ferretti: 'Ein Alpino ist Bergsteiger und Soldat gleichzeitig. Getrennt ist jeder mittelmäßig. Zusammen ist er unbesiegbar.'",
        options: [
            {
                text: "Felswand ohne Sicherung erklettern und Stellung oben beziehen",
                outcome: {
                    text: "Zwanzig Meter ohne Sicherung. Die Hände zittern, aber der Kopf nicht. Oben: Stellung beziehen, Gelände überschauen. Ferretti: 'Non male, non male. Nicht schlecht.'",
                    damage: 3, moraleChange: +15, xpReward: 20,
                    nextScenario: "it_training_infantry_final"
                }
            },
            {
                text: "Hochgebirgsschießen von instabilem Felsvorsprung",
                outcome: {
                    text: "Kein Stativ, kein stabiler Untergrund – nur Fels und Wind. Ihr drückt ab, der Rückstoß wäre fast euer Ende. Treffer. Ferretti: 'Questo è uno sparatore di montagna.'",
                    damage: 2, moraleChange: +18, xpReward: 20,
                    nextScenario: "it_training_infantry_final"
                }
            }
        ]
    },

    it_training_infantry_final: {
        title: "Mai 1915 – Alpini-Abschluss: La Grande Prova",
        type: "decision",
        description: "Conti: 'Heute steigt ihr auf den Monte Sief – 2.424 Meter. Stellung halten. Dann runter. Wenn ihr zurückkommt, seid ihr Alpini.' Kein Zurück.",
        options: [
            {
                text: "Aufstieg, Stellung, Abstieg – zehn Stunden ohne Aufgabe",
                outcome: {
                    text: "Zehn Stunden. Eis, Dunkel, Übungsfeuer. Als ihr das Lager erreicht, stehen die alten Alpini Spalier. Conti: 'Benvenuti, Alpini.' Willkommen.",
                    damage: 5, moraleChange: +30, xpReward: 40,
                    grantClass: "infantry",
                    nextScenario: "it_start"
                }
            }
        ]
    },

    it_training_medic: {
        title: "Mai 1915 – Medico-Ausbildung Belluno",
        type: "decision",
        description: "Brambilla: 'Im Gebirge ist die Evakuierung eines Verwundeten oft unmöglich. Ihr lernt das Unmögliche.' Verwundete abseilen, Notfallchirurgie am Hang, Erfrierungsbehandlung.",
        options: [
            {
                text: "Verwundeten am Seil den Steilhang hinuntertransportieren",
                outcome: {
                    text: "Achtzig Kilo, sechzig Grad Hang, zwanzig Meter. Jede Bewegung berechnet. Der Patient kommt lebend unten an. Brambilla: 'Bello. Sehr gut.'",
                    damage: 3, moraleChange: +15, xpReward: 20,
                    nextScenario: "it_training_medic_final"
                }
            },
            {
                text: "Notfallversorgung bei Splitterverletzung auf dem Grat",
                outcome: {
                    text: "Wind, Abgrund, blutende Wunde. Ihr versorgst kniend auf dem Grat, eine Hand am Fels. Brambilla: 'Nel mezzo del pericolo – nel mezzo della cura.' Inmitten der Gefahr – inmitten der Fürsorge.",
                    damage: 1, moraleChange: +18, xpReward: 20,
                    nextScenario: "it_training_medic_final"
                }
            }
        ]
    },

    it_training_medic_final: {
        title: "Mai 1915 – Medico-Abschluss Belluno",
        type: "decision",
        description: "Brambilla: 'Letzte Prüfung. Drei Verwundete, Steilhang, Nebel. Ihr seid allein.' Der Nebel senkt sich.",
        options: [
            {
                text: "Alle drei Verwundeten retten und sicher abseilen",
                outcome: {
                    text: "Drei Stunden im Nebel. Alle drei gerettet. Conti: 'Medico degli Alpini. Der Gebirgsarzt – unentbehrlich wie der Berg selbst.'",
                    damage: 2, moraleChange: +28, xpReward: 32,
                    grantClass: "medic",
                    nextScenario: "it_start"
                }
            }
        ]
    },

    it_training_engineer: {
        title: "Mai 1915 – Geniere-Ausbildung Belluno",
        type: "decision",
        description: "Rossi: 'Eine Seilbahn über dreihundert Meter Schlucht – das ist eure erste Aufgabe. Danach: Sprengung eines Felsvorsprungs für eine neue Stellung.' Drahtseile und Sprengstoff.",
        options: [
            {
                text: "Seilbahn über die Schlucht spannen und Last tragen",
                outcome: {
                    text: "Drahtseil, Laufwagen, hundert Kilo Nutzlast. Die Seilbahn trägt. Rossi: 'Una teleferica buona salva più vite della medicina.' Eine gute Seilbahn rettet mehr Leben als Medizin.",
                    damage: 1, moraleChange: +15, xpReward: 20,
                    nextScenario: "it_training_engineer_final"
                }
            },
            {
                text: "Felsvorsprung sprengen und neue Gebirgsstellung sichern",
                outcome: {
                    text: "Zündschnur, Deckung, Explosion. Der Felsvorsprung bricht. Wo Stein war, ist jetzt eine Stellung. Rossi: 'Il Geniere trasforma il monte.' Der Pionier verwandelt den Berg.",
                    damage: 2, moraleChange: +18, xpReward: 20,
                    nextScenario: "it_training_engineer_final"
                }
            }
        ]
    },

    it_training_engineer_final: {
        title: "Mai 1915 – Geniere-Abschluss Belluno",
        type: "decision",
        description: "Conti: 'Letzte Prüfung. Die Seilbahn ist beschädigt – repariert sie unter simuliertem Beschuss. Dreißig Minuten.' Der Laufwagen hängt in der Mitte der Schlucht.",
        options: [
            {
                text: "Seilbahn unter Beschuss reparieren und Verwundete evakuieren",
                outcome: {
                    text: "Zwölf Minuten. Seilbahn läuft wieder. Drei Verwundete evakuiert. Conti verneigt sich leicht – eine seltene Geste: 'Geniere. L'esercito ha bisogno di voi.'",
                    damage: 2, moraleChange: +25, xpReward: 35,
                    grantClass: "engineer",
                    nextScenario: "it_start"
                }
            }
        ]
    },


    // ---- DEUTSCHLAND WESTFRONT ----
    de_west_training: {
        title: "August 1914 - Grundausbildung im Elsass: Tag 1 – Drill",
        type: "decision",
        description: "Um 04:30 Uhr reißt euch ein gellender Pfiff aus dem Schlaf. Feldwebel Brandt steht im Türrahmen der Baracke, die Mütze schief, die Stimme wie Donnerhall: 'Raus! Raus! Ihr schlaft, wenn ihr tot seid!' Der erste Ausbildungstag beginnt mit dem Grunddrill – Marschieren im Gleichschritt, Atemübungen unter voller Ausrüstung und militärischen Haltungskorrekturen auf dem staubigen Exerzierplatz.",
        options: [
            {
                text: "Knochenharter Grunddrill: Stundenlang im Gleichschritt durch den Sand",
                outcome: {
                    text: "Eure Beine brennen. Neun Stunden Exerzieren im Augusthitze – mehrere Männer kollabieren. Ihr beißt die Zähne zusammen. Am Abend sinkt ihr erschöpft auf die Pritsche, aber der Körper wird täglich stärker.",
                    damage: 5,
                    moraleChange: -5,
                    xpReward: 15,
                    nextScenario: "de_west_training_shooting"
                }
            },
            {
                text: "Als Gruppenführer den Marschrhythmus für die Kompanie vorgeben",
                requiresClass: "infantry",
                outcome: {
                    text: "Feldwebel Brandt beobachtet euch mit verschränkten Armen. Als ihr die Marschkolonne im perfekten Takt haltet, nickt er kaum merklich. 'Das ist… akzeptabel.' Höchstes Lob, das er je vergeben hat.",
                    damage: 1,
                    moraleChange: +12,
                    xpReward: 18,
                    nextScenario: "de_west_training_shooting"
                }
            },
            {
                text: "Schnell einen Unterstand graben, während die anderen noch marschieren",
                requiresClass: "engineer",
                outcome: {
                    text: "Feldwebel Brandt lässt euch aus der Marschreihe treten. 'Pionier, zeigt diesen Träumern wie man Deckung baut!' Während die anderen exerzieren, haut ihr einen tadellosen Unterstand in den Lehmboden.",
                    damage: 0,
                    moraleChange: +18,
                    xpReward: 22,
                    nextScenario: "de_west_training_shooting"
                }
            }
        ]
    },

    de_west_training_shooting: {
        title: "August 1914 - Grundausbildung im Elsass: Tag 3 – Schießtraining",
        type: "decision",
        description: "Der Schießstand liegt am Waldrand. Reihen von Schützen knien im feuchten Gras, das Gewehr Mauser 98 an der Schulter. Unteroffizier Schäfer geht die Reihe ab: 'Das Gewehr 98 ist das präziseste Infanteriegewehr der Welt. Ihr werdet lernen, es wie euren eigenen Namen zu kennen.' Ziele auf 100, 200 und 300 Meter warten. Zehn Schuss Munition pro Mann – jeder zählt.",
        options: [
            {
                text: "Methodisch auf alle Entfernungen schießen und die Streuung minimieren",
                outcome: {
                    text: "Ihr nehmt euch Zeit, reguliert Visier und Korn. Auf 100m: Treffer. Auf 200m: Treffer. Auf 300m: Randtreffer. Unteroffizier Schäfer kratzt sich am Bart: 'Nicht schlecht. Morgen wird es besser.' Eure Schießfertigkeit wächst.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "de_west_training_final"
                }
            },
            {
                text: "Schnellfeuer üben – maximale Schüsse in minimaler Zeit",
                outcome: {
                    text: "Fünfzehn Schuss in sechzig Sekunden – eure Finger fliegen über Kammer und Abzug. Mehrere Schüsse gehen daneben, aber das Tempo imponiert. 'Feuerrate ist Leben!' ruft Schäfer. Die Schulter schmerzt vom Rückstoß.",
                    damage: 3,
                    moraleChange: +8,
                    xpReward: 18,
                    nextScenario: "de_west_training_final"
                }
            },
            {
                text: "Den Kameraden zeigen, wie man das Gewehr zerlegt und reinigt",
                outcome: {
                    text: "Während die anderen um Trefferbilder feilschen, zerlegt ihr das Mauser blitzschnell in Einzelteile und baut es wieder zusammen. 'Ein dreckiges Gewehr klemmt im Gefecht. Wer das versteht, lebt länger.' Der Trupp hört euch zu.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 15,
                    nextScenario: "de_west_training_final"
                }
            },
            {
                text: "Präzisionsschießen auf 400 Meter – weit jenseits der Standarddistanz",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr justiert den Entfernungsmesser, berücksichtigt den leichten Westwind. Schuss. Ein sauberer Treffer auf 400 Meter. Stille am Schießstand. Dann Geraune. Unteroffizier Schäfer schüttelt ungläubig den Kopf: 'Wer zum Teufel hat euch das beigebracht?'",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 30,
                    nextScenario: "de_west_training_final"
                }
            }
        ]
    },

    de_west_training_final: {
        title: "August 1914 - Grundausbildung im Elsass: Tag 5 – Abschlussübung",
        type: "decision",
        description: "Der letzte Tag. Feldwebel Brandt steht vor der angetretenen Kompanie. 'Morgen verlasst ihr dieses Lager und marschiert an die Front. Was ich euch mitgebe, entscheidet über Leben und Tod.' Eine kombinierte Abschlussübung wartet: Schützengrabenanlage unter simuliertem Feuer, danach Gefechtsschießen. Jeder Fehler wird bemerkt. Die ganze Kompanie schaut zu.",
        options: [
            {
                text: "Den Schützengraben im Angesicht des 'Feindes' ausheben und verteidigen",
                outcome: {
                    text: "Mit zitternden Händen vom Adrenalin gräbt ihr, lädt nach, schießt. Am Ende steht der Feldwebel vor euch: 'Ihr werdet es überleben. Vielleicht.' Die Kameraden klopfen euch auf die Schulter. Ihr seid bereit.",
                    damage: 4,
                    moraleChange: +20,
                    xpReward: 30,
                    nextScenario: "de_west_start"
                }
            },
            {
                text: "Als Meisterschütze den finalen Übungsgegner auf maximale Distanz ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Aus 350 Metern legt ihr ein einziges Ziel nieder, während die ganze Kompanie noch sucht. Feldwebel Brandt ruft euch zur Seite: 'Ihr geht nicht in den Schützengraben. Ihr werdet ein Scharfschütze.' Eine besondere Auszeichnung.",
                    damage: 0,
                    moraleChange: +30,
                    xpReward: 40,
                    nextScenario: "de_west_start"
                }
            },
            {
                text: "Das Stellungssystem in Rekordzeit perfektionieren",
                requiresClass: "engineer",
                outcome: {
                    text: "Euer Unterstand hat Drainage, versteckte Schießscharten und einen Beobachtungsposten. Feldwebel Brandt weist die anderen Gruppen an, sich euer Werk als Beispiel zu nehmen. Ihr verlasst das Lager als Vorbild.",
                    damage: 0,
                    moraleChange: +28,
                    xpReward: 35,
                    nextScenario: "de_west_start"
                }
            }
        ]
    },

    // ---- DEUTSCHLAND OSTFRONT ----
    de_ost_training: {
        title: "August 1914 - Garnison Königsberg: Tag 1 – Drill unter Zeitdruck",
        type: "decision",
        description: "Die Berichte von der Ostfront sind beunruhigend: Die Russen marschieren schneller als erwartet. In Königsberg geht die Ausbildung im Eiltempo vonstatten. Hauptmann Kurz bellt Befehle: 'Wir haben keine Zeit für Höflichkeiten. Die Russen kommen. Ihr lernt heute Drill, morgen MG, übermorgen kämpft ihr.' Der Übungsplatz ist matschig vom Regen der vergangenen Nacht.",
        options: [
            {
                text: "Das intensive Marschprogramm mit voller Ausrüstung durchstehen",
                outcome: {
                    text: "25 Kilometer in vier Stunden, Gewehr, Gepäck, Gasmaske. Drei Männer fallen aus, ihr nicht. Hauptmann Kurz prüft die Erschöpften ohne Mitleid: 'Wer hier aufgibt, gibt auch dort auf.' Ein knapper Satz, der alles sagt.",
                    damage: 5,
                    moraleChange: +8,
                    xpReward: 15,
                    nextScenario: "de_ost_training_shooting"
                }
            },
            {
                text: "Das MG 08 demontieren und unter simuliertem Feuer wieder aufbauen",
                requiresClass: "infantry",
                outcome: {
                    text: "Das schwere Maschinengewehr liegt zerlegt vor euch. Sieben Minuten. Sechs. Fünf – Ziel. Ihr montiert es in vier Minuten und neunzehn Sekunden. 'Das', sagt Hauptmann Kurz fast respektvoll, 'rettet Züge.'",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 22,
                    nextScenario: "de_ost_training_shooting"
                }
            },
            {
                text: "Die Telefonleitung durch das Schlachtfeldlabyrinth führen",
                requiresClass: "fernmelder",
                outcome: {
                    text: "Während Explosionssimulationen ringsum knallen, zieht ihr das Feldkabel durch Schlamm und Stacheldraht. Der Anschluss steht innerhalb von zwölf Minuten. 'Kommunikation', murmelt der Hauptmann, 'ist der Unterschied zwischen Sieg und Massaker.'",
                    damage: 1,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "de_ost_training_shooting"
                }
            }
        ]
    },

    de_ost_training_shooting: {
        title: "August 1914 - Garnison Königsberg: Tag 2 – MG-Schießtraining",
        type: "decision",
        description: "Tag zwei. Der Schießstand im Königsberger Fort ist mit schweren Maschinengewehren bestückt. Das Gewicht der Lafette drückt in den Boden. Unteroffizier Riedel, ein Veteran mit narbenbedeckten Händen, demonstriert erst selbst: Eine 50-Schuss-Gurte in acht Sekunden, alle Ziele getroffen. 'Ihr habt heute zwei Stunden. Lernt oder sterbt.'",
        options: [
            {
                text: "Das MG 08 auf bewegliche Ziele ausrichten – Feuer in Salven",
                outcome: {
                    text: "Die Lafette zittert bei jedem Schuss. Ihr lernt, die Bewegung zu antizipieren, den Lauf zu führen. Nach einer Stunde schreibt der Kanonier Treffer im Dutzend. Riedel nickt knapp: 'Brauchbar.'",
                    damage: 2,
                    moraleChange: +12,
                    xpReward: 20,
                    nextScenario: "de_ost_training_final"
                }
            },
            {
                text: "Einen Feuerwechsel koordinieren – zwei MGs wechseln sich ab, ohne Pause zu lassen",
                outcome: {
                    text: "Eure Gruppe versteht das Prinzip nach zehn Minuten: Während MG 1 nachladen muss, übernimmt MG 2 das Feuer. Kein Moment Stille für den Feind. Riedel kommentiert trocken: 'Das ist, was Angriffe bricht.'",
                    damage: 0,
                    moraleChange: +18,
                    xpReward: 22,
                    nextScenario: "de_ost_training_final"
                }
            },
            {
                text: "Rohrwechsel beim glühenden MG simulieren – Geschwindigkeit über Sicherheit",
                outcome: {
                    text: "Der Lauf ist nach 300 Schuss rotglühend. Ihr reißt ihn raus, neuen rein – zehn Sekunden. Die Handschuhe qualmen. Ein kleiner Brandfeck am Unterarm, aber der Wechsel sitzt. 'Manche lernen es langsam. Manche gar nicht. Ihr habt es gelernt.'",
                    damage: 4,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "de_ost_training_final"
                }
            }
        ]
    },

    de_ost_training_final: {
        title: "August 1914 - Garnison Königsberg: Tag 3 – Gefechtssimulation",
        type: "decision",
        description: "Voralarm. Hauptmann Kurz tritt in die Schlafsäle: 'Die Russen sind früher da als gedacht. Eure letzte Übung ist gleichzeitig eure erste Bewährungsprobe.' Eine kombinierte Gefechtsübung gegen eine erfahrene Ausbildergruppe, die einen russischen Angriff simuliert. Echtscharf. Echt laut. Fast echte Gefahr.",
        options: [
            {
                text: "Das MG in Stellung bringen und den simulierten Angriff abwehren",
                outcome: {
                    text: "Unter donnernden Salven haltet ihr die Stellung. Als die Übung endet, zittert noch der Boden. Hauptmann Kurz steht vor euch: 'Ihr seid Soldaten. Noch keine guten. Aber das kommt.' Morgen geht es an die Front.",
                    damage: 4,
                    moraleChange: +22,
                    xpReward: 30,
                    nextScenario: "de_ost_start"
                }
            },
            {
                text: "Die Verbindungsleitung unter Beschuss aufrechterhalten",
                requiresClass: "fernmelder",
                outcome: {
                    text: "Während das Blei pfeift, flickt ihr dreimal den Kabelbruch. Das Kommando erhält Echtzeitmeldungen. Nach der Übung: 'Ohne eure Meldungen hätten wir blindgekämpft.' Eine stille, wichtige Leistung.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 28,
                    nextScenario: "de_ost_start"
                }
            }
        ]
    },

    // ---- FRANKREICH ----
    fr_training: {
        title: "August 1914 - Feldlager Châlons: Tag 1 – Élan-Drill",
        type: "decision",
        description: "Das Lager Châlons-sur-Marne besteht aus Tausenden weißer Zelte, die sich endlos in die Champagne strecken. Sergent-chef Moreau – Veteran der Kolonialkriege, Gesicht wie gemeißelter Stein – stellt die neue Rekruten auf. 'Frankreich braucht Männer, die angreifen. Der Feind hat Angst, wenn ihr schreit und vorwärtsstürmt. Das lernt ihr heute.' Kein Schild, kein Helm – nur blaue Jacken und weißer Mut.",
        options: [
            {
                text: "Den Bajonettangriff mit Kampfschrei und Volltempo üben",
                outcome: {
                    text: "Hundert Meter Angriffsstrecke. Ihr brüllt 'En avant!' und stürmt. Die Puppen vor euch bieten keinen Widerstand. Sergent Moreau nickt: 'Der Élan vital – das ist Frankreich. Das ist, was den Boche erschreckt.' Eure Brust brennt vor Patriotismus.",
                    damage: 3,
                    moraleChange: +20,
                    xpReward: 15,
                    nextScenario: "fr_training_shooting"
                }
            },
            {
                text: "Die Verwundeten unter Angriffsbedingungen versorgen",
                requiresClass: "medic",
                outcome: {
                    text: "Während Kameraden angreifen, richtet ihr eine Vorabbehandlungsstation ein. Tourniquet, Wundverschluss, Atemwegssicherung – alles im Minutentakt. Moreau beobachtet: 'Der Médecin rettet den Angriff, indem er die Männer rettet.'",
                    damage: 0,
                    moraleChange: +22,
                    xpReward: 20,
                    nextScenario: "fr_training_shooting"
                }
            },
            {
                text: "Als Gruppenführer die Angriffslinie unter Kontrolle halten",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr haltet die Linie zusammen, niemand prescht vor, niemand bleibt zurück. Moreau kommentiert kalt: 'Un seul homme en avance – toute la ligne est morte. Ihr versteht das. Gut.'",
                    damage: 1,
                    moraleChange: +18,
                    xpReward: 18,
                    nextScenario: "fr_training_shooting"
                }
            }
        ]
    },

    fr_training_shooting: {
        title: "August 1914 - Feldlager Châlons: Tag 3 – Lebel-Schießtraining",
        type: "decision",
        description: "Das Lebel Modell 1886 – das älteste Magazingewehr im Einsatz, aber noch immer tödlich. Der Schießstand liegt im leichten Nebel. Caporal Durand erklärt die Eigenheit des Lebels: Das Röhrenmagazin unter dem Lauf fasst acht Patronen, lädt aber langsam nach. 'Ihr müsst lernen, zwischen den Schüssen zu laden – das ist der Unterschied zwischen einem toten Deutschen und einem toten Franzosen.'",
        options: [
            {
                text: "Schuss-für-Schuss auf Präzision trainieren – keine Eile",
                outcome: {
                    text: "Ruhig, geduldig – ihr zieht ab. Acht Patronen, acht Löcher im Ziel. Durand hebt das Papier hoch: 'Magnifique!' Eure Kameraden applaudieren spöttisch, aber die Trefferquote spricht für sich.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "fr_training_final"
                }
            },
            {
                text: "Unterdrückungsfeuer koordinieren – mehrere Schützen feuern im Wechsel",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr weist jedem Schützen seine Schussfolge zu. Das Ergebnis: Ein kontinuierliches Feuerwand, das kein Feind durchquert. Sergent Moreau kommt persönlich vorbei: 'Das ist Feuerüberlegenheit. Das, mes amis, gewinnt Schlachten.'",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 25,
                    nextScenario: "fr_training_final"
                }
            },
            {
                text: "Schnellschuss-Training: Nachladen im Liegen unter simuliertem Feuer",
                outcome: {
                    text: "Erde fliegt auf, Knallpatronen krachen. Im Liegen nachladen, den Kopf unten halten – die Muskeln zittern, aber die Hände arbeiten automatisch. Nach zwanzig Minuten schafft ihr acht Schuss in neunzehn Sekunden.",
                    damage: 2,
                    moraleChange: +12,
                    xpReward: 18,
                    nextScenario: "fr_training_final"
                }
            }
        ]
    },

    fr_training_final: {
        title: "August 1914 - Feldlager Châlons: Tag 5 – Grande Manoeuvre",
        type: "decision",
        description: "Die große Abschlussübung. Ein volles Regiment simuliert den Angriff auf eine befestigte deutsche Linie. Artillerie (mit Knallpatronen) donnert in der Ferne, Rauchgranaten verdecken die Sicht. Sergent Moreau steht auf einem Erdhügel und brüllt Befehle. Jetzt zeigt sich, wer ausgebildet und wer nur gekleidet ist.",
        options: [
            {
                text: "Mit dem Bajonett in erster Angriffslinie stürmen",
                outcome: {
                    text: "Rauch, Geschrei, das Stampfen von hundert Stiefeln. Ihr erreicht die simulierte feindliche Linie als Erster. Moreau brüllt durch den Rauch: 'Les premiers! Die Ersten in der Linie sterben – oder gewinnen!' Ihr habt gewonnen.",
                    damage: 5,
                    moraleChange: +25,
                    xpReward: 30,
                    nextScenario: "fr_start"
                }
            },
            {
                text: "Als Médecin unter Angriffsbedingungen drei Verwundete Bergen",
                requiresClass: "medic",
                outcome: {
                    text: "Drei Männer simulieren Verwundung. Ihr schleppt jeden einzeln durch den Rauch zur Vorabbehandlungsstation. Moreau notiert euren Namen: 'Ein guter Arzt ist mehr wert als eine Kompanie ohne.'",
                    damage: 2,
                    moraleChange: +28,
                    xpReward: 32,
                    nextScenario: "fr_start"
                }
            }
        ]
    },

    // ---- GROSSBRITANNIEN ----
    gb_training: {
        title: "August 1914 - Aldershot: Tag 1 – Britischer Drill",
        type: "decision",
        description: "Aldershot. Das Herz des britischen Militärs. Sergeant Major Hicks – ein Burenkrieg-Veteran mit Schnauzbart und eisernem Blick – mustert die Freiwilligen. 'You are not soldiers. You are civilians with rifles. That ends today.' Der Drill der britischen Armee ist legendär: Exakte Marschbewegungen, Kommandogehorsam, und die Gewohnheit, den Befehl auch dann auszuführen, wenn die Hölle sich öffnet.",
        options: [
            {
                text: "Die preußischen Marschbewegungen in britischer Präzision üben",
                outcome: {
                    text: "Links, rechts, kehrt, präsentiert Gewehr – sieben Stunden, kein Fehler erlaubt. Sergeant Major Hicks kreist euch ab wie ein Geier. Am Ende: 'Passable.' Bei Hicks bedeutet das Auszeichnungswürdig.",
                    damage: 3,
                    moraleChange: +10,
                    xpReward: 15,
                    nextScenario: "gb_training_shooting"
                }
            },
            {
                text: "Als Scharfschütze eine versteckte Beobachtungsposition anlegen",
                requiresClass: "sniper",
                outcome: {
                    text: "Stunden später sucht Hicks euch – vergebens. Ihr liegt drei Meter vor ihm im Unterholz, vollständig mit Laub bedeckt. 'I walked past you three times,' sagt er leise. 'Good. Very good.'",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 22,
                    nextScenario: "gb_training_shooting"
                }
            },
            {
                text: "Den Semaphor-Flaggencode in Rekordzeit erlernen",
                requiresClass: "fernmelder",
                outcome: {
                    text: "Die Flaggensignale sind komplex, aber ihr erfasst das System in zwei Stunden. Hicks testet euch mit einer verschlüsselten Nachricht. Ihr entschlüsselt sie korrekt. 'Communications win wars. Remember that.'",
                    damage: 0,
                    moraleChange: +18,
                    xpReward: 20,
                    nextScenario: "gb_training_shooting"
                }
            }
        ]
    },

    gb_training_shooting: {
        title: "August 1914 - Aldershot: Tag 3 – The Mad Minute",
        type: "decision",
        description: "Der berühmteste Schießstand der britischen Armee. Corporal Evans, mehrfacher Schießweltmeister, legt das Lee-Enfield auf den Tisch: 'Fifteen aimed rounds per minute – that is the standard. Some men can do twenty. You will do fifteen or you will do it again.' Das Rapid Fire – die Spezialität der British Expeditionary Force – beginnt. Ein einzelner Schütze kann mit Lee-Enfield so viel Feuer wie ein Maschinengewehr erzeugen.",
        options: [
            {
                text: "Die 'Mad Minute' absolvieren – 15 präzise Schüsse in 60 Sekunden",
                outcome: {
                    text: "Die Kammer fliegt. Schuss – Kammer – Schuss – Kammer. Eure Finger werden taub. In sechzig Sekunden: vierzehn Treffer. Corporal Evans hält das Zielblatt hoch: 'Fourteen. Close enough. Tomorrow: fifteen.'",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 22,
                    nextScenario: "gb_training_final"
                }
            },
            {
                text: "Gezielte Schüsse auf 500 Yards – britische Reichweitenüberlegenheit nutzen",
                requiresClass: "sniper",
                outcome: {
                    text: "Fünfhundert Yards – rund 460 Meter. Ihr justiert, atmet aus, drückt ab. Treffer. Noch einer. Fünf von fünf Schüssen. Evans sagt nichts, aber er schreibt euren Namen in ein kleines Notizbuch. Das bedeutet etwas.",
                    damage: 0,
                    moraleChange: +28,
                    xpReward: 30,
                    nextScenario: "gb_training_final"
                }
            },
            {
                text: "Schnelllader-Technik unter Erschöpfungsbedingungen trainieren",
                outcome: {
                    text: "Evans lässt euch zuerst 500 Meter sprinten, dann sofort schießen. Herzschlag hammert, Hände zittern. Aber ihr drückt ab – und trefft. 'A soldier who can shoot while exhausted,' sagt Evans, 'is a soldier who survives.'",
                    damage: 4,
                    moraleChange: +12,
                    xpReward: 20,
                    nextScenario: "gb_training_final"
                }
            }
        ]
    },

    gb_training_final: {
        title: "August 1914 - Aldershot: Tag 5 – Final Exercise",
        type: "decision",
        description: "Das letzte Training. Sergeant Major Hicks steht vor der kompletten Kompanie. 'Gentlemen – and I use that word loosely – you have five days of training. You are going to France. The Germans are better equipped, better trained, and they have been at it longer. You have one advantage: You are British. Do not waste it.' Eine kombinierte Tages- und Nachtübung beginnt.",
        options: [
            {
                text: "Die Nachtpatrouille durch feindlich gehaltenes Gelände führen",
                outcome: {
                    text: "Dunkelheit. Kein Licht erlaubt. Ihr führt eure Gruppe lautlos durch den Übungswald, umgeht die 'feindlichen' Wachen. Als Hicks am Ziel auf euch wartet: 'I expected you two hours ago. You are two hours early. Well done.'",
                    damage: 2,
                    moraleChange: +25,
                    xpReward: 35,
                    nextScenario: "gb_start"
                }
            },
            {
                text: "Die Feuerüberlegenheit im Frontabschnitt sicherstellen",
                outcome: {
                    text: "Als die Übung eskaliert, koordiniert ihr das Feuer von zwölf Schützen. Kein Lücke in der Feuerlinie. Hicks beobachtet mit dem Fernglas: 'That is how Waterloo was won. And that is how this war will be won.'",
                    damage: 1,
                    moraleChange: +22,
                    xpReward: 30,
                    nextScenario: "gb_start"
                }
            }
        ]
    },

    // ---- BELGIEN ----
    be_training: {
        title: "August 1914 - Fort Loncin: Tag 1 – Festungsverteidigung",
        type: "decision",
        description: "Die Kanonen von Lüttich sind schon seit Tagen zu hören. In Fort Loncin – einem der modernsten Festungswerke Europas – erhaltet ihr eure Ausbildung buchstäblich unter Beschuss. Adjutant Van den Berg, ein kleiner Mann mit einem riesigen Schnauzbart, bellt Befehle auf Flämisch und Wallonisch abwechselnd: 'Belgien ist klein, aber es ist unseres. Heute lernt ihr, wie man es hält.'",
        options: [
            {
                text: "Das Gräben-Verteidigungssystem unter simuliertem Artilleriefeuer halten",
                outcome: {
                    text: "Ohrenbetäubendes Donnern – nicht Übung, sondern echte Granaten, die in der Ferne einschlagen. Van den Berg brüllt: 'Kopf unten! Gewehr im Anschlag!' Ihr haltet die Stellung bis das Übungssignal ertönt. Die Hände zittern noch.",
                    damage: 5,
                    moraleChange: +15,
                    xpReward: 15,
                    nextScenario: "be_training_shooting"
                }
            },
            {
                text: "Panzersperren und Drahtverhaue in Rekordzeit errichten",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr rollt den Stacheldraht, rammt die Pfähle, befestigt die Panzersperren. Van den Berg kontrolliert: 'Een goede hindernis redt levens.' Ein gutes Hindernis rettet Leben. Eures wurde gerade als Standard erklärt.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 22,
                    nextScenario: "be_training_shooting"
                }
            }
        ]
    },

    be_training_shooting: {
        title: "August 1914 - Fort Loncin: Tag 2 – Schießtraining unter Zeitdruck",
        type: "decision",
        description: "Der Schießstand liegt im Schutz des Forts. Das belgische Mauser-Gewehr Modell 1889 liegt schwer in euren Händen – dasselbe Gewehr wie bei den Deutschen, nur in belgischem Blau. Adjutant Van den Berg erklärt: 'Ihr schießt auf Deutsche. Deutsche schießen auf euch. Wer besser zielt, lebt.' Die Übung findet unter Echtzeitbedingungen statt – Geräuschkulisse echter Gefechte aus einem Grammophon.",
        options: [
            {
                text: "Zielgenaues Schießen auf Figuren in verschiedenen Entfernungen",
                outcome: {
                    text: "25 Meter, 50 Meter, 100 Meter, 200 Meter – jede Entfernung andere Trefferbilder. Die Resultate verbessern sich von Runde zu Runde. Van den Berg: 'Précision. C'est tout ce qui compte.'",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "be_training_final"
                }
            },
            {
                text: "Engpassschießen: Ziele im engen Festungsgang neutralisieren",
                outcome: {
                    text: "Im engen Korridor des Forts schießt ihr auf Ziele, die um Ecken erscheinen. Kein Platz für Fehler – jeder Schuss muss sitzen. Nach einer Stunde versteht ihr, warum Festungsverteidigung eine Kunst ist.",
                    damage: 2,
                    moraleChange: +12,
                    xpReward: 18,
                    nextScenario: "be_training_final"
                }
            }
        ]
    },

    be_training_final: {
        title: "August 1914 - Fort Loncin: Tag 3 – Letztes Training vor dem Sturm",
        type: "decision",
        description: "In der Nacht haben echte deutsche Granaten den Westwall des Forts getroffen. Risse ziehen sich durch den Beton. Van den Berg tritt vor die Kompanie: 'Das Training ist beendet. Nicht weil es geplant war – weil die Deutschen kommen. Was ihr gelernt habt, müsst ihr jetzt anwenden.' Die Männer um euch tauschen nervöse Blicke. Das ist kein Training mehr.",
        options: [
            {
                text: "Die Schützenlinie zur Verteidigung des Haupttors formieren",
                outcome: {
                    text: "Ihr steht. Schulter an Schulter mit Belgiern, die ihr vor drei Tagen nicht kanntet. Van den Berg geht die Linie ab und sieht in jedem Gesicht: Angst, ja – aber auch Entschlossenheit. 'Voor België!' sagt er leise. Und es reicht.",
                    damage: 3,
                    moraleChange: +25,
                    xpReward: 30,
                    nextScenario: "be_start"
                }
            },
            {
                text: "Die Minen- und Sprengfallen am Festungstor sichern",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr legt die letzten Sprengladungen so, dass kein Feind das Tor nehmen kann, ohne einen hohen Preis zu zahlen. Van den Berg drückt euch die Hand: 'Als de Duitsers dit fort willen – laat hen ervoor betalen.' Wenn sie das Fort wollen, sollen sie dafür bezahlen.",
                    damage: 0,
                    moraleChange: +28,
                    xpReward: 32,
                    nextScenario: "be_start"
                }
            }
        ]
    },

    // ---- ÖSTERREICH-UNGARN ----
    at_training: {
        title: "August 1914 - Karpaten: Tag 1 – Gebirgsmarsch",
        type: "decision",
        description: "Die Karpaten im August – tagsüber pralle Hitze, nachts bittere Kälte. Leutnant Brandtner, ein k.u.k. Alpenjäger mit Edelweiß am Hut, führt die Gruppe durch den ersten Tag. 'Das Gebirge tötet euch eher als der Feind, wenn ihr es nicht respektiert.' Erster Schritt: Drei Stunden Aufstieg mit voller Ausrüstung auf einen 1.800-Meter-Gipfel.",
        options: [
            {
                text: "Den Aufstieg mit voller Ausrüstung bis zum Gipfel durchhalten",
                outcome: {
                    text: "Die Lungen brennen, die Knie zittern, der Schweiß friert auf der Haut. Zwei Männer müssen umkehren. Ihr nicht. Oben angekommen, blickt ihr auf die weite Karpatenlinie – und begreift, dass ihr diese Welt besiegen müsst.",
                    damage: 6,
                    moraleChange: +10,
                    xpReward: 15,
                    nextScenario: "at_training_shooting"
                }
            },
            {
                text: "Einen Steinunterschlupf für die Gruppe bauen",
                requiresClass: "standschuetze",
                outcome: {
                    text: "Aus Feldsteinen, Ästen und Zeltplane errichtet ihr einen Wind- und Kälteschutz, der zehn Männern Platz bietet. Leutnant Brandtner kommt vorbei und prüft die Konstruktion: 'Ein Tiroler baut seinen Unterschlupf, bevor er schläft. Ihr seid ein Tiroler.'",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 22,
                    nextScenario: "at_training_shooting"
                }
            },
            {
                text: "Verwundete Kameraden über das Gebirge abtransportieren",
                requiresClass: "medic",
                outcome: {
                    text: "Die Übungsssimulation zeigt zwei 'Verwundete', die nicht laufen können. Ihr organisiert eine Trage aus Ästen und schleppt beide über den Pass. Als ihr ankommt, sind eure Arme kaum noch zu heben – aber beide 'Verwundete' leben.",
                    damage: 3,
                    moraleChange: +18,
                    xpReward: 20,
                    nextScenario: "at_training_shooting"
                }
            }
        ]
    },

    at_training_shooting: {
        title: "August 1914 - Karpaten: Tag 3 – Hochgebirgsschießen",
        type: "decision",
        description: "Schießen im Gebirge ist eine eigene Wissenschaft. Höhe beeinflusst die Ballistik – Geschosse fliegen weiter, der Wind ändert sich in Sekunden. Leutnant Brandtner erklärt die Grundregeln: 'Höhen- und Seitenwindkorrektur. Auf 1.000 Meter Höhe schießt ihr 15% weiter als im Flachland.' Das Übungsziel steht auf dem gegenüberliegenden Hang – 300 Meter Luftlinie, aber 200 Meter tiefer.",
        options: [
            {
                text: "Hangabwärts auf ein tiefer liegendes Ziel schießen – Höhenkorrektur anwenden",
                outcome: {
                    text: "Ihr zielt tiefer als instinktiv richtig erscheint. Der Schuss – Treffer. Brandtner: 'Die meisten schießen beim ersten Mal drüber. Ihr habt es beim ersten Mal getroffen. Merkt euch das Gefühl.'",
                    damage: 0,
                    moraleChange: +18,
                    xpReward: 22,
                    nextScenario: "at_training_final"
                }
            },
            {
                text: "Bei Windböen schießen – Seitenkorrektur in Echtzeit",
                outcome: {
                    text: "Der Wind kommt in Böen. Ihr wartet, wartet – Windpause – schießt. Vier von fünf Treffern. Brandtner lehnt sich zu euch: 'Im Gebirge gilt: Geduld tötet. Ungeduld tötet euch.'",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "at_training_final"
                }
            },
            {
                text: "Scharfschützenposition im Gebirge anlegen und tarnen",
                requiresClass: "sniper",
                outcome: {
                    text: "Steine, Moos, Schneereste – ihr verschmelzt mit der Berglandschaft. Von eurem Nest auf dem Grat schießt ihr auf ein Ziel 500 Meter entfernt. Treffer beim ersten Schuss. Brandtner findet euch erst nach fünf Minuten Suche.",
                    damage: 0,
                    moraleChange: +28,
                    xpReward: 30,
                    nextScenario: "at_training_final"
                }
            }
        ]
    },

    at_training_final: {
        title: "August 1914 - Karpaten: Tag 5 – Winterssturm-Simulation",
        type: "decision",
        description: "Leutnant Brandtner weckt die Gruppe um Mitternacht. Es hat angefangen zu schneien – im August, in den Karpaten. 'Perfekt', sagt er trocken. 'Das nennt sich Realismus.' Eine simulierte Feindberührung im Dunkel, bei Schneefall, auf einem Bergkamm. Die Sicht: Null. Die Temperatur: unter Null. Die Aufgabe: Eine Übungsstellung halten.",
        options: [
            {
                text: "Die Stellung im Schnee halten – jeder Schuss kostet Kraft",
                outcome: {
                    text: "Finsternis, Kälte, der Atem kondensiert vor dem Visier. Ihr feuert auf Schattenumrisse, ladet nach mit tauben Fingern. Als Brandtner die Übung beendet: 'Ihr habt gehalten. Im echten Leben hättet ihr überlebt.' Ein rares Kompliment.",
                    damage: 5,
                    moraleChange: +25,
                    xpReward: 32,
                    nextScenario: "at_start"
                }
            },
            {
                text: "Im Schneesturm einen verwundeten Kameraden bergen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr kriecht im Schneesturm zu dem 'Verwundeten', schleppt ihn zur Deckung. Eure Hände gehorchen kaum noch. Aber ihr bringt ihn rein. Brandtner: 'Ein Soldat, den ihr rettet, kämpft neben euch. Das rechnet sich.'",
                    damage: 4,
                    moraleChange: +22,
                    xpReward: 30,
                    nextScenario: "at_start"
                }
            }
        ]
    },

    // ---- RUSSLAND ----
    ru_training: {
        title: "August 1914 - Krasnoje Selo: Tag 1 – Drillen im Staub",
        type: "decision",
        description: "Krasnoje Selo, das Sommerlager der Kaiserlichen Garde. Feldwebel Sorokin – ein Hüne mit gebrochener Nase und Medaille für den Russisch-Japanischen Krieg – steht vor den Rekruten. 'Russland hat nicht genug Gewehre für alle. Aber Bajonette haben wir.' Er hebt sein Dreilinien-Gewehr mit aufgepflanztem Bajonett. 'Das Bajonett kennt keine Munitionsnot. Lernt es lieben.'",
        options: [
            {
                text: "Den Bajonett-Drill bis zur Erschöpfung wiederholen",
                outcome: {
                    text: "Vorwärts-Stoß. Zurück. Parade. Nochmal. Tausendmal. Sorokins Stimme wird zum Metronom: 'Dawai! Dawai!' Am Abend schmerzt jeder Muskel. Aber die Bewegung sitzt. Euer Bajonett ist eine Verlängerung des Arms.",
                    damage: 4,
                    moraleChange: +12,
                    xpReward: 15,
                    nextScenario: "ru_training_shooting"
                }
            },
            {
                text: "Die Flankierungstaktik im Bajonettangriff anführen",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr führt die Flankengruppe, während die Hauptlinie bindet. Sorokin stoppt die Übung, zeigt auf euch: 'Seht ihr das? Der Genosse denkt. Ein denkender Soldat ist das Beste, was Mutter Russland hat.'",
                    damage: 1,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "ru_training_shooting"
                }
            }
        ]
    },

    ru_training_shooting: {
        title: "August 1914 - Krasnoje Selo: Tag 3 – Schießtraining mit dem Dreilinien-Gewehr",
        type: "decision",
        description: "Heute gibt es Gewehre – für die Hälfte der Männer. Das Dreilinien-Gewehr Modell 1891 (Mosin-Nagant) liegt kalt und schwer in den Händen. Porutschik Woronin, ein Artillerieoffizier, erklärt: 'Wir haben wenig Munition. Jeder Schuss muss treffen. In der Armee seiner kaiserlichen Majestät gibt es keine Verschwendung.' Zehn Patronen pro Mann. Zehn Chancen, sich zu beweisen.",
        options: [
            {
                text: "Die zehn Schuss auf maximale Präzision konzentrieren",
                outcome: {
                    text: "Ihr zählt die Patronen wie Gold. Jeder Schuss mit Bedacht. Ergebnis: Acht von zehn Treffern. Porutschik Woronin nickt: 'Acht Treffer, acht tote Deutsche. Das ist Mathematik, die ich verstehe.'",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 22,
                    nextScenario: "ru_training_final"
                }
            },
            {
                text: "Schnellfeuer trainieren, auch wenn Munition verschwendet wird",
                outcome: {
                    text: "Zehn Schuss in zwölf Sekunden. Drei Treffer. Woronin sieht das Ergebnis und verzieht keine Miene: 'Nächstes Mal bekommen die anderen die Gewehre. Ihr lernt mit dem Bajonett.' Eine Lektion in Knappheit.",
                    damage: 0,
                    moraleChange: -5,
                    xpReward: 10,
                    nextScenario: "ru_training_final"
                }
            },
            {
                text: "Dem Kameraden ohne Gewehr das Dreilinien zeigen und es teilen",
                outcome: {
                    text: "Ihr teilt die Übungszeit mit einem anderen Rekruten. Weniger Schuss für euch – aber zwei Männer sind jetzt ausgebildet statt einem. Sorokin beobachtet von hinten: 'Das ist Kollektivismus. Das ist Russland.'",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 18,
                    nextScenario: "ru_training_final"
                }
            }
        ]
    },

    ru_training_final: {
        title: "August 1914 - Krasnoje Selo: Tag 5 – Massenangriffssimulation",
        type: "decision",
        description: "Russland kämpft mit Masse. Sorokin tritt vor die gesamte Kompanie, 200 Mann, alle aufgereiht: 'Die russische Armee gewinnt durch Unerbittlichkeit. Wir greifen an, und wenn die erste Welle fällt, kommt die zweite, und die dritte.' Die Abschlussübung: Ein simulierter Massenangriff auf eine befestigte Linie. Kein Elegant, keine Finesse – nur vorwärts.',",
        options: [
            {
                text: "In der ersten Angriffswelle vorwärtsstürmen, egal was kommt",
                outcome: {
                    text: "Die Reihe stürmt. Kameraden 'fallen' rechts und links. Ihr lauft. Über sie hinweg, weiter, immer weiter. Sorokin: 'Ihr habt Mut. Dummen Mut. Aber Mut.' Höchstmögliches Lob in seiner Sprache.",
                    damage: 6,
                    moraleChange: +20,
                    xpReward: 28,
                    nextScenario: "ru_start"
                }
            },
            {
                text: "Das Feuer der zweiten Welle koordinieren, während die erste bindet",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr bleibt zurück, dirigiert die zweite Welle, wartet auf die richtige Lücke. Die erste Welle bindet den Feind – eure kommt durch die Seite. Sorokin starrt auf das Ergebnis: 'Sieg. Meine Offiziere lernen das in drei Jahren. Ihr habt es in fünf Minuten begriffen.'",
                    damage: 1,
                    moraleChange: +30,
                    xpReward: 35,
                    nextScenario: "ru_start"
                }
            }
        ]
    },

    // ---- ITALIEN ----
    it_training: {
        title: "Mai 1915 - Belluno-Sektor: Tag 1 – Alpini-Grunddrill",
        type: "decision",
        description: "Die Alpini – Italiens Elitegebirgstruppen – sind eine eigene Welt. Tenente Conti, mit Adlerfeder am schwarzen Hut, studiert die neuen Männer mit kritischem Blick: 'Un Alpino non teme il monte. Ein Alpino fürchtet den Berg nicht – er respektiert ihn.' Tag eins beginnt nicht mit Schießen oder Taktik. Es beginnt mit Klettern. Eine 60 Meter hohe Felswand. Ohne Sicherung.",
        options: [
            {
                text: "Die Felswand mit Seil und Karabiner erklimmen",
                outcome: {
                    text: "Die Finger suchen Griffe im kalten Fels. Die Wand ist steil, der Wind kalt, der Abgrund unter euch real. Ihr erreicht den Gipfel nach zwanzig Minuten. Conti steht oben: 'Non male. Nicht schlecht. Morgen ohne Seil.'",
                    damage: 3,
                    moraleChange: +15,
                    xpReward: 15,
                    nextScenario: "it_training_shooting"
                }
            },
            {
                text: "Eine Seilbahn über die Schlucht spannen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr befestigt das Drahtseil an zwei Felsbrocken, kontrolliert die Spannung, installiert den Laufwagen. Conti inspiziert: 'Una teleferica buona salva più vite della medicinia.' Eine gute Seilbahn rettet mehr Leben als Medizin.",
                    damage: 0,
                    moraleChange: +22,
                    xpReward: 22,
                    nextScenario: "it_training_shooting"
                }
            },
            {
                text: "Am Seil einen simulierten Verwundeten abseilen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr sichert den 'Verwundeten' am Seil, kontrolliert den Abstieg, hält jede Erschütterung von der Verletzung fern. Conti schaut: 'Bello. Sehr gut. Im Gebirge ist ein Abstieg oft schwerer als ein Anstieg.'",
                    damage: 2,
                    moraleChange: +18,
                    xpReward: 20,
                    nextScenario: "it_training_shooting"
                }
            }
        ]
    },

    it_training_shooting: {
        title: "Mai 1915 - Belluno-Sektor: Tag 3 – Hochgebirgsschießen",
        type: "decision",
        description: "Schießen im Hochgebirge ist eine Kunst, die Alpini über Generationen perfektioniert haben. Der Schießstand liegt auf einem Grat – der Wind kommt von zwei Seiten gleichzeitig, das Ziel steht 400 Meter entfernt auf dem nächsten Gipfel. Sottotenente Ferretti erklärt: 'Qui non esistono scuse. Hier gibt es keine Ausreden. Der Berg nimmt keine Rücksicht auf Entschuldigungen – und der Feind auch nicht.'",
        options: [
            {
                text: "Gezielt auf Ziele in 400 Metern Entfernung auf Augenhöhe schießen",
                outcome: {
                    text: "Ihr justiert die Windkorrektur, wartet auf eine Böenpause – und schießt. Der Staub neben dem Ziel zeigt: knapp daneben. Zweiter Schuss: Treffer. Ferretti: 'Il primo per le statistiche, il secondo per la vittoria.' Der erste für die Statistik, der zweite für den Sieg.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 22,
                    nextScenario: "it_training_final"
                }
            },
            {
                text: "Schießen von einer instabilen Felskante – Körperbalance als Grundlage",
                outcome: {
                    text: "Kein stabiler Untergrund, kein Stativ, nur die eigenen Beine auf dem Felsvorsprung. Ihr drückt ab, der Rückstoß wäre fast euer Ende – aber der Schuss sitzt. Ferretti pfeift durch die Zähne: 'Questo è uno sparatore di montagna.' Das ist ein Bergschütze.",
                    damage: 3,
                    moraleChange: +18,
                    xpReward: 25,
                    nextScenario: "it_training_final"
                }
            },
            {
                text: "Scharfschützen-Nest im Fels anlegen und tarnen",
                requiresClass: "sniper",
                outcome: {
                    text: "Steine, Moos und etwas weißes Tuch. Ihr baut eine Stellung, die mit dem Fels verschmilzt. Von 500 Metern Entfernung ist sie unsichtbar. Ferretti sucht euch fünf Minuten – dann lacht er: 'Un fantasma delle Alpi. Ein Geist der Alpen.'",
                    damage: 0,
                    moraleChange: +30,
                    xpReward: 30,
                    nextScenario: "it_training_final"
                }
            }
        ]
    },

    it_training_final: {
        title: "Mai 1915 - Belluno-Sektor: Tag 5 – La Grande Prova",
        type: "decision",
        description: "Die große Prüfung. Tenente Conti versammelt die Alpini-Kandidaten am frühen Morgen. Hinter ihm erhebt sich der Monte Sief – 2.424 Meter, mit schneebedecktem Gipfel. 'Heute steigt ihr hoch, sichert eine Position, und haltet sie. Dann kommt ihr runter – durch feindliches Feuer.' Er lächelt schmal: 'Wenn ihr zurückkommt, seid ihr Alpini. Wenn nicht – dann nicht.'",
        options: [
            {
                text: "Den Gipfel erklimmen und die Stellung bis zur Dämmerung halten",
                outcome: {
                    text: "Zehn Stunden. Aufstieg, Stellung, Beschuss aus allen Richtungen (Übungsfeuer, aber laut und nah genug), Abstieg im Dunkel. Als ihr das Basislager erreicht, stehen die alten Alpini Spalier. Conti sagt nur einen Satz: 'Benvenuti, Alpini.' Willkommen, Gebirgsjäger.",
                    damage: 5,
                    moraleChange: +30,
                    xpReward: 40,
                    nextScenario: "it_start"
                }
            },
            {
                text: "Die Seilbahn unter Feuer reparieren und damit Verwundete abzutransportieren",
                requiresClass: "engineer",
                outcome: {
                    text: "Die Seilbahn ist 'beschädigt'. Unter simuliertem Beschuss repariert ihr die Verbindung in zwölf Minuten, evakuiert drei 'Verwundete'. Conti verneigt sich leicht – eine seltene Geste: 'Ingeniere, l'esercito ha bisogno di voi.' Ingenieur, die Armee braucht euch.",
                    damage: 2,
                    moraleChange: +28,
                    xpReward: 35,
                    nextScenario: "it_start"
                }
            },
            {
                text: "Als Scharfschütze die Rückzugslinie der Gruppe sichern",
                requiresClass: "sniper",
                outcome: {
                    text: "Vom Grat aus deckt ihr den Rückzug eurer Kameraden. Drei Übungsziele ausgeschaltet, ein 'feindliches' Vorrücken gestoppt. Als der letzte Mann unten ist, gleitet ihr still vom Fels. Conti: 'Unsichtbar. Tödlich. Alpino.'",
                    damage: 0,
                    moraleChange: +32,
                    xpReward: 38,
                    nextScenario: "it_start"
                }
            }
        ]
    },

    // ==========================================
    // DEUTSCHLAND - LEGACY (de)
    // ==========================================
    de_start: {
        title: "August 1914 - Der Schlieffen-Plan",
        type: "decision",
        description: "Nach Ausbruch des Krieges rückt ihr im Rahmen des Schlieffen-Plans schnell durch Belgien vor. Die Festung Lüttich leistet jedoch unerwartet harten Widerstand.",
        options: [
            {
                text: "Festung frontal stürmen",
                outcome: {
                    text: "Unter schweren Verlusten nehmt ihr die Vorposten ein. Die Moral leidet, aber ihr kommt voran.",
                    damage: 10,
                    moraleChange: -5,
                    xpReward: 10,
                    nextScenario: "de_start_part2"
                }
            },
            {
                text: "Sprengladungen an die Mauern legen",
                requiresClass: "engineer",
                outcome: {
                    text: "Mit ohrenbetäubendem Lärm bricht die Festungsmauer ein. Der Widerstand ist gebrochen!",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "de_start_part2"
                }
            }
        ]
    },
    de_start_part2: {
        title: "August 1914 - Straßenkampf in Lüttich",
        type: "decision",
        description: "Die äußeren Forts sind überwunden, doch im Häusergewirr der Stadt haben sich belgische Milizen verschanzt. Aus Dachfenstern wird geschossen.",
        options: [
            {
                text: "Durch die Hauptstraßen stürmen",
                outcome: {
                    text: "Ihr sichert den Marktplatz, erleidet aber Verluste durch Heckenschützen.",
                    damage: 8,
                    moraleChange: -5,
                    xpReward: 15,
                    nextScenario: "de_start_part3"
                }
            },
            {
                text: "Gezieltes Flankieren durch Seitengassen",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr überrascht die belgischen Verteidiger in ihren Stellungen und nehmt sie gefangen.",
                    damage: 2,
                    moraleChange: +10,
                    xpReward: 25,
                    nextScenario: "de_start_part3"
                }
            }
        ]
    },
    de_start_part3: {
        title: "August 1914 - Das Brechen von Namur",
        type: "decision",
        description: "Der Weg nach Frankreich führt über die verbleibende Festung Namur. Schwerste Haubitzen rücken an. Ihr sollt den Einschlag absichern und den finalen Sturm durchführen.",
        options: [
            {
                text: "Den Sturmangriff direkt nach dem Artillerieschlag führen",
                outcome: {
                    text: "Die Festung fällt rasch, doch ihr tragt Wunden vom letzten Gewehrfeuer davon.",
                    damage: 8,
                    moraleChange: +5,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "de_tannenberg"
                }
            },
            {
                text: "Feindfeuer koordinieren und Lücken ausspähen",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr schaltet die gegnerischen Beobachter aus. Die Festung ergibt sich kampflos.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 30,
                    triggerHQ: true,
                    nextScenario: "de_tannenberg"
                }
            }
        ]
    },
    de_tannenberg: {
        title: "September 1914 - Schlacht bei Tannenberg",
        type: "decision",
        description: "Ihr werdet eiligst mit Zügen an die Ostfront verlegt. Russische Armeen sind in Ostpreußen eingefallen. Es gilt, sie in einer großen Kesselschlacht zu vernichten.",
        options: [
            {
                text: "Eingraben und die russische Übermacht binden",
                outcome: {
                    text: "Ihr haltet die Stellung im Masuren-Sumpf, bis die Flankenangriffe den Feind einkesseln.",
                    damage: 5,
                    moraleChange: +5,
                    xpReward: 10,
                    nextScenario: "de_tannenberg_part2"
                }
            },
            {
                text: "Im Wald feindliche Späher ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr schaltet die gegnerischen Aufklärer aus, sodass der Feind blind in die Falle tappt.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "de_tannenberg_part2"
                }
            }
        ]
    },
    de_tannenberg_part2: {
        title: "September 1914 - Der Kessel schließt sich",
        type: "decision",
        description: "Die russischen Linien geraten ins Wanken, aber sie versuchen einen verzweifelten Ausbruch. Ein Gegenangriff muss jetzt gestoppt werden.",
        options: [
            {
                text: "Gegenangriff frontal abwehren",
                outcome: {
                    text: "Mit aller Gewalt drückt ihr den Feind zurück. Der Ring bleibt geschlossen.",
                    damage: 10,
                    moraleChange: +5,
                    xpReward: 15,
                    nextScenario: "de_tannenberg_part3"
                }
            },
            {
                text: "Sperrfeuer anfordern und leiten",
                requiresSkill: "art_coords",
                outcome: {
                    text: "Eure präzise Koordination bringt das eigene Artilleriefeuer ins Ziel. Die russische Kolonne löst sich auf.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "de_tannenberg_part3"
                }
            }
        ]
    },
    de_tannenberg_part3: {
        title: "September 1914 - Säuberung der Sümpfe",
        type: "decision",
        description: "Reste der russischen 2. Armee leisten in den dichten Wäldern und Mooren Widerstand. Ein riskantes Vorgehen im feuchten Schlick ist nötig.",
        options: [
            {
                text: "Durch das Moor vordringen und Stellungen ausheben",
                outcome: {
                    text: "Nach zähem Kampf ergeben sich die versprengten Gruppen. Tannenberg ist ein historischer Sieg!",
                    damage: 8,
                    moraleChange: +10,
                    xpReward: 25,
                    triggerHQ: true,
                    nextScenario: "de_verdun"
                }
            },
            {
                text: "Pionierbrücken über die Schlammlöcher legen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr baut feste Wege und kesselt die Gegner unbemerkt ein. Voller Erfolg ohne Verluste.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "de_verdun"
                }
            }
        ]
    },
    de_verdun: {
        title: "1916 - Die Hölle von Verdun",
        type: "decision",
        description: "Ihr liegt unter tagelangem Trommelfeuer vor Fort Douaumont. Der Boden zittert, die Luft ist voller giftiger Gase.",
        options: [
            {
                text: "Im Unterstand ausharren",
                outcome: {
                    text: "Der ohrenbetäubende Lärm raubt euch fast den Verstand, aber ihr überlebt knapp.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "de_verdun_part2"
                }
            },
            {
                text: "Gasmasken aufsetzen und Blindgänger entschärfen",
                requiresClass: "engineer",
                outcome: {
                    text: "Durch euren schnellen Einsatz entschärft ihr eine schwere Granate, bevor sie euren Graben vernichtet.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "de_verdun_part2"
                }
            }
        ]
    },
    de_verdun_part2: {
        title: "1916 - Der Sturm auf Fort Douaumont",
        type: "decision",
        description: "Das Trommelfeuer verstummt. Es ist Zeit, die zerstörten Befestigungen des Forts einzunehmen. Feindliche Maschinengewehre speien Feuer aus den Schießscharten.",
        options: [
            {
                text: "Unter Deckungsfeuer vorrücken",
                outcome: {
                    text: "Unter hohen Opfern erklimmt ihr den Wall und werft Handgranaten in die Unterstände.",
                    damage: 12,
                    moraleChange: -5,
                    xpReward: 15,
                    nextScenario: "de_verdun_part3"
                }
            },
            {
                text: "Die Maschinengewehrnester gezielt ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Mit präzisen Treffern neutralisiert ihr die Schützen in den Scharten. Die Truppe rückt unbeschadet vor.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "de_verdun_part3"
                }
            }
        ]
    },
    de_verdun_part3: {
        title: "1916 - Die Verteidigung der Hölle",
        type: "decision",
        description: "Das Fort ist genommen, doch französische Verbände starten erbitterte Gegenangriffe auf Höhe 304. Die Granateneinschläge zerfetzen die Erdhügel.",
        options: [
            {
                text: "Stellung im Kraterfeld halten",
                outcome: {
                    text: "Die Stellung wird gehalten, doch das Grauen von Verdun hinterlässt tiefe Narben.",
                    damage: 15,
                    moraleChange: -15,
                    xpReward: 25,
                    triggerHQ: true,
                    nextScenario: "de_kaiserschlacht"
                }
            },
            {
                text: "Verwundete im Bombenhagel erstversorgen",
                requiresClass: "medic",
                outcome: {
                    text: "Trotz Granatsplittern rettet ihr das Leben eurer Jungs. Die Reste halten stand.",
                    damage: 4,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "de_kaiserschlacht"
                }
            }
        ]
    },
    de_kaiserschlacht: {
        title: "Frühjahr 1918 - Die Kaiserschlacht",
        type: "decision",
        description: "Die Jahre vergingen blutig. Nun soll die finale Frühjahrsoffensive den Sieg im Westen bringen. Ihr stürmt als Stoßtrupp durch die britischen Linien.",
        options: [
            {
                text: "Tief in die feindlichen Gräben vorstoßen",
                outcome: {
                    text: "Ihr durchbrecht die Linien, aber euch geht die Munition aus und ihr seid vom Nachschub abgeschnitten.",
                    damage: 15,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "de_kaiserschlacht_part2"
                }
            },
            {
                text: "Gezieltes Unterdrückungsfeuer geben",
                requiresClass: "infantry",
                outcome: {
                    text: "Präzises Feuer hält den Feind in Deckung und ermöglicht ein geordnetes Vorrücken eurer Kameraden.",
                    damage: 5,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "de_kaiserschlacht_part2"
                }
            }
        ]
    },
    de_kaiserschlacht_part2: {
        title: "Frühjahr 1918 - Entscheidung an der Somme",
        type: "decision",
        description: "Die Briten ziehen eiligst Reserven zusammen und starten Gegenangriffe. Eure Munition ist fast verbraucht. Ein schwerer feindlicher Panzer rollt heran.",
        options: [
            {
                text: "Sich zurückfallen lassen und Gräben sichern",
                outcome: {
                    text: "Ihr zieht euch zurück, verliert die Initiative, rettet jedoch euer Überleben.",
                    damage: 10,
                    moraleChange: -15,
                    xpReward: 15,
                    nextScenario: "de_kaiserschlacht_part3"
                }
            },
            {
                text: "Panzer mit improvisierten Sprengladungen stoppen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr kriecht an das Kettenfahrzeug heran und sprengt seine Ketten. Die Stellung hält!",
                    damage: 5,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "de_kaiserschlacht_part3"
                }
            }
        ]
    },
    de_kaiserschlacht_part3: {
        title: "Herbst 1918 - Der Gegenstoß der Alliierten",
        type: "decision",
        description: "Die Offensive lief fest. Jetzt brechen frische amerikanische Regimenter mit Tanks in eure Flanken ein. Euer verbliebener Zug muss ein Dorf halten, um die Flucht zu sichern.",
        options: [
            {
                text: "Verzweifelten Häuserkampf führen",
                outcome: {
                    text: "Unter schweren Opfern haltet ihr das Dorf lange genug, bis der Befehl zum Rückzug eintrifft.",
                    damage: 15,
                    moraleChange: -10,
                    xpReward: 25,
                    nextScenario: "de_end"
                }
            },
            {
                text: "Artilleriefeuer auf die Straßenkreuzungen leiten",
                requiresSkill: "art_support",
                outcome: {
                    text: "Ihr meldet dem Stab die Koordinaten. Das Sperrfeuer zerstört die Tanks in den Gassen. Geordneter Rückzug.",
                    damage: 4,
                    moraleChange: +15,
                    xpReward: 35,
                    nextScenario: "de_end"
                }
            }
        ]
    },
    de_end: {
        title: "November 1918 - Der Rückzug",
        type: "decision",
        description: "Die Offensive ist gescheitert. Frische amerikanische Truppen drängen euch zurück. Das Reich steht vor dem Zusammenbruch und der Waffenstillstand wird unterzeichnet.",
        options: [
            {
                text: "Die Waffen niederlegen und den Heimweg antreten",
                outcome: {
                    text: "Erschöpft und traumatisiert tretet ihr den Rückzug ins Ungewisse an. Der Feldzug ist beendet.",
                    nextScenario: null
                }
            }
        ]
    },

    // ==========================================
    // DEUTSCHLAND - WESTFRONT (de_west_...)
    // ==========================================
    de_west_start: {
        title: "August 1914 - Der Schlieffen-Plan",
        type: "decision",
        description: "Nach Ausbruch des Krieges rückt ihr im Rahmen des Schlieffen-Plans schnell durch Belgien vor. Die Festung Lüttich leistet jedoch unerwartet harten Widerstand.",
        options: [
            {
                text: "Festung frontal stürmen",
                outcome: {
                    text: "Unter schweren Verlusten nehmt ihr die Vorposten ein. Die Moral leidet, aber ihr kommt voran.",
                    damage: 10,
                    moraleChange: -5,
                    xpReward: 10,
                    nextScenario: "de_west_start_part2"
                }
            },
            {
                text: "Sprengladungen an die Mauern legen",
                requiresClass: "engineer",
                outcome: {
                    text: "Mit ohrenbetäubendem Lärm bricht die Festungsmauer ein. Der Widerstand ist gebrochen!",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "de_west_start_part2"
                }
            }
        ]
    },
    de_west_start_part2: {
        title: "August 1914 - Straßenkampf in Lüttich",
        type: "decision",
        description: "Die äußeren Forts sind überwunden, doch im Häusergewirr der Stadt haben sich belgische Milizen verschanzt. Aus Dachfenstern wird geschossen.",
        options: [
            {
                text: "Durch die Hauptstraßen stürmen",
                outcome: {
                    text: "Ihr sichert den Marktplatz, erleidet aber Verluste durch Heckenschützen.",
                    damage: 8,
                    moraleChange: -5,
                    xpReward: 15,
                    nextScenario: "de_west_start_part3"
                }
            },
            {
                text: "Gezieltes Flankieren durch Seitengassen",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr überrascht die belgischen Verteidiger in ihren Stellungen und nehmt sie gefangen.",
                    damage: 2,
                    moraleChange: +10,
                    xpReward: 25,
                    nextScenario: "de_west_start_part3"
                }
            }
        ]
    },
    de_west_start_part3: {
        title: "August 1914 - Die Festung Namur",
        type: "decision",
        description: "Nach Lüttich muss Namur bezwungen werden. Gewaltige 42-cm-Mörser („Dicke Berta“) nehmen die Betonforts unter Beschuss. Ihr sollt den finalen Sturmangriff wagen.",
        options: [
            {
                text: "In die Trümmer stürmen",
                outcome: {
                    text: "Ihr erobert das Fort, zieht euch jedoch Wunden durch zähen Abwehrkampf zu.",
                    damage: 10,
                    moraleChange: +5,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "de_west_marne"
                }
            },
            {
                text: "Die Rauchwolken der Sprengung nutzen und verdeckt vordringen",
                requiresClass: "sniper",
                outcome: {
                    text: "Im Nebel der Explosionen schaltet ihr die MG-Posten leise aus. Der Rest ergibt sich.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 30,
                    triggerHQ: true,
                    nextScenario: "de_west_marne"
                }
            }
        ]
    },
    de_west_marne: {
        title: "September 1914 - Schlacht an der Marne",
        type: "decision",
        description: "Der Vormarsch gerät vor Paris ins Stocken. Die Franzosen starten an der Marne einen verzweifelten Gegenangriff. Ihr müsst eine Flussbrücke halten, um den Vormarsch eurer Division zu sichern.",
        options: [
            {
                text: "Brücke im Nahkampf verteidigen",
                outcome: {
                    text: "In erbitterten Grabenkämpfen haltet ihr die Brücke, während feindliche Artillerie die Stellungen zerfetzt.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "de_west_marne_part2"
                }
            },
            {
                text: "Scharfschützen postieren, um gegnerische Offiziere auszuschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Durch gezielte Ausschaltung der Führungskräfte bricht der feindliche Sturmlauf ins Chaos zusammen.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "de_west_marne_part2"
                }
            }
        ]
    },
    de_west_marne_part2: {
        title: "September 1914 - Der Rückzugsbefehl",
        type: "decision",
        description: "Zwischen den deutschen Armeen ist eine Lücke entstanden. Das Oberkommando befiehlt den geordneten Rückzug hinter die Aisne. Französische Kavallerie setzt nach.",
        options: [
            {
                text: "Eiliger Rückmarsch unter Verlust von schwerem Gerät",
                outcome: {
                    text: "Erschöpft erreicht ihr die Aisne-Höhen. Der Traum vom schnellen Sieg ist vorbei.",
                    damage: 10,
                    moraleChange: -20,
                    xpReward: 15,
                    nextScenario: "de_west_marne_part3"
                }
            },
            {
                text: "Eine Verteidigungslinie aufbauen und Rückzug decken",
                requiresClass: "infantry",
                outcome: {
                    text: "Mit kühlem Kopf errichtet ihr MG-Nester und schlagt die Verfolger zurück, was eurer Division den Rückzug sichert.",
                    damage: 4,
                    moraleChange: +10,
                    xpReward: 25,
                    nextScenario: "de_west_marne_part3"
                }
            }
        ]
    },
    de_west_marne_part3: {
        title: "Oktober 1914 - Der Wettlauf zum Meer",
        type: "decision",
        description: "Beide Seiten versuchen, sich gegenseitig im Norden zu umgehen. Ihr trefft in Flandern auf britische Husaren. Ein wildes Gefecht um eine Eisenbahnlinie beginnt.",
        options: [
            {
                text: "Den Bahndamm frontal stürmen",
                outcome: {
                    text: "Nach blutigen Gefechten werft ihr die Briten zurück. Die Grabenlinie wird fest.",
                    damage: 12,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "de_west_verdun"
                }
            },
            {
                text: "Die Weichen blockieren und den Zug entgleisen lassen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr sprengt die Schienen. Der feindliche Panzerzug entgleist und die Abwehrlinie steht.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "de_west_verdun"
                }
            }
        ]
    },
    de_west_verdun: {
        title: "1916 - Die Hölle von Verdun",
        type: "decision",
        description: "Ihr liegt unter tagelangem Trommelfeuer vor Fort Douaumont. Der Boden zittert, die Luft ist voller giftiger Gase.",
        options: [
            {
                text: "Im Unterstand ausharren",
                outcome: {
                    text: "Der ohrenbetäubende Lärm raubt euch fast den Verstand, aber ihr überlebt knapp.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "de_west_verdun_part2"
                }
            },
            {
                text: "Gasmasken aufsetzen und Blindgänger entschärfen",
                requiresClass: "engineer",
                outcome: {
                    text: "Durch euren schnellen Einsatz entschärft ihr eine schwere Granate, bevor sie euren Graben vernichtet.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "de_west_verdun_part2"
                }
            }
        ]
    },
    de_west_verdun_part2: {
        title: "1916 - Kampf im Schlamm der Höhe 304",
        type: "decision",
        description: "Der Beschuss lässt nach, doch ein zäher französischer Gegenangriff brandet gegen eure verschütteten Stellungen auf der Höhe 304.",
        options: [
            {
                text: "Mit aufgepflanztem Bajonett verteidigen",
                outcome: {
                    text: "Im brutalen Handgemenge werft ihr den Feind zurück. Die Stellung bleibt in eurer Hand.",
                    damage: 15,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "de_west_verdun_part3"
                }
            },
            {
                text: "Ein Lazarett im Krater einrichten und Verletzte versorgen",
                requiresClass: "medic",
                outcome: {
                    text: "Durch euren unermüdlichen Dienst rettet ihr viele Kameraden, was den Überlebenswillen stärkt.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "de_west_verdun_part3"
                }
            }
        ]
    },
    de_west_verdun_part3: {
        title: "1916 - Die Toten-Mann-Stellung",
        type: "decision",
        description: "Der Hügel „Toter Mann“ ist völlig zerbombt. Giftgaswolken füllen das Tal und französische Flammenwerfer rücken vor. Die Stellung droht zu brechen.",
        options: [
            {
                text: "Im Gasgraben standhalten",
                outcome: {
                    text: "Ihr haltet Verdun unter unsäglichen Opfern. Ein grausiges Kapitel des Weltkriegs endet.",
                    damage: 15,
                    moraleChange: -20,
                    xpReward: 25,
                    triggerHQ: true,
                    nextScenario: "de_west_somme"
                }
            },
            {
                text: "Feuer auf die heranrückenden Flammenwerfer lenken",
                requiresClass: "sniper",
                outcome: {
                    text: "Mit präzisen Schüssen bringt ihr die Tanks der Flammenwerfer zur Explosion. Der Angriff weicht zurück.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "de_west_somme"
                }
            }
        ]
    },
    de_west_somme: {
        title: "Herbst 1916 - Abwehrschlacht an der Somme",
        type: "decision",
        description: "Die Briten greifen mit ungeheurer Übermacht an der Somme an. Zum ersten Mal rollen stählerne Ungetüme – die 'Tanks' – auf eure Stellungen zu.",
        options: [
            {
                text: "In den Trichtern verschanzen und vorrückende Infanterie abwehren",
                outcome: {
                    text: "Unter pausenlosem Artilleriefeuer schlagt ihr die feindliche Infanterie zurück, aber ein Tank bricht durch die Linie.",
                    damage: 15,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "de_west_somme_part2"
                }
            },
            {
                text: "MG-Stellung halten und feindliche Tanks mit geballten Ladungen bekämpfen",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr behaltet die Nerven, setzt den feindlichen Stahlkoloß außer Gefecht und rettet euren Abschnitt.",
                    damage: 5,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "de_west_somme_part2"
                }
            }
        ]
    },
    de_west_somme_part2: {
        title: "Herbst 1916 - Abnutzung im Granattrichter",
        type: "decision",
        description: "Eure Stellung ist völlig isoliert und vom Nachschub abgeschnitten. Die britische Artillerie nimmt euch unter gezielten Beschuss, während der Regen den Graben füllt.",
        options: [
            {
                text: "Stellung halten bis zum bitteren Ende",
                outcome: {
                    text: "Ihr überlebt die Nacht unter schwersten Entbehrungen. Am Morgen werdet ihr abgelöst.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 15,
                    nextScenario: "de_west_somme_part3"
                }
            },
            {
                text: "Eine Notleitung zum Gefechtsstand reparieren",
                requiresSkill: "sig_cable",
                outcome: {
                    text: "Ihr flickt das Feldtelefon. Das HQ koordiniert ein Sperrfeuer, das den feindlichen Ansturm zerschlägt.",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "de_west_somme_part3"
                }
            }
        ]
    },
    de_west_somme_part3: {
        title: "Herbst 1916 - Rückzug auf die Hindenburglinie",
        type: "decision",
        description: "Das Oberkommando befiehlt die strategische Verkürzung der Front. Ihr sollt den Grabenabschnitt vor dem geordneten Rückzug verminen.",
        options: [
            {
                text: "Direkt abrücken und Schutz in der Festungslinie suchen",
                outcome: {
                    text: "Erschöpft erreicht ihr die Hindenburglinie. Der Druck an der Somme lässt endlich nach.",
                    damage: 8,
                    moraleChange: +5,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "de_west_kaiserschlacht"
                }
            },
            {
                text: "Komplexe Sprengfallen in den leeren Unterständen installieren",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr präpariert den Graben. Die nachrückenden Briten erleiden schwere Ausfälle, während ihr sicher abzieht.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "de_west_kaiserschlacht"
                }
            }
        ]
    },
    de_west_kaiserschlacht: {
        title: "Frühjahr 1918 - Die Kaiserschlacht",
        type: "decision",
        description: "Die Jahre vergingen blutig. Nun soll die finale Frühjahrsoffensive den Sieg im Westen bringen. Ihr stürmt als Stoßtrupp durch die britischen Linien.",
        options: [
            {
                text: "Tief in die feindlichen Gräben vorstoßen",
                outcome: {
                    text: "Ihr durchbrecht die Linien, aber euch geht die Munition aus und ihr seid vom Nachschub abgeschnitten.",
                    damage: 15,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "de_west_kaiserschlacht_part2"
                }
            },
            {
                text: "Gezieltes Unterdrückungsfeuer geben",
                requiresClass: "infantry",
                outcome: {
                    text: "Präzises Feuer hält den Feind in Deckung und ermöglicht ein geordnetes Vorrücken eurer Kameraden.",
                    damage: 5,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "de_west_kaiserschlacht_part2"
                }
            }
        ]
    },
    de_west_kaiserschlacht_part2: {
        title: "Frühjahr 1918 - Der Griff nach Amiens",
        type: "decision",
        description: "Amiens, der logistische Knotenpunkt der Alliierten, liegt fast in Reichweite. Doch frische australische Truppen werfen sich euch entgegen. Der Schwung der Offensive droht zu erlahmen.",
        options: [
            {
                text: "Den Vormarsch erzwingen",
                outcome: {
                    text: "Ihr stürmt erschöpft vorwärts. Trotz minimaler Bodengewinne brecht ihr unter heftigem Abwehrfeuer zusammen.",
                    damage: 15,
                    moraleChange: -20,
                    xpReward: 15,
                    nextScenario: "de_west_kaiserschlacht_part3"
                }
            },
            {
                text: "Scharfschützenstellung beziehen und Gegenangriffe abwehren",
                requiresClass: "sniper",
                outcome: {
                    text: "Mit präzisen Schüssen zwingt ihr die gegnerischen MG-Trupps in Deckung und sichert eure Position.",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "de_west_kaiserschlacht_part3"
                }
            }
        ]
    },
    de_west_kaiserschlacht_part3: {
        title: "Herbst 1918 - Das Brechen der Hindenburglinie",
        type: "decision",
        description: "Die Wende im Westen. Hunderte alliierte Tanks stoßen auf die Hindenburglinie vor. Ihr müsst ein wichtiges Teilstück verteidigen, um die Flanke der Armee zu wahren.",
        options: [
            {
                text: "Verbitterten Abwehrkampf führen",
                outcome: {
                    text: "Die Tanks brechen durch, aber euer Widerstand verschafft dem Regiment Zeit für einen Rückzug.",
                    damage: 15,
                    moraleChange: -10,
                    xpReward: 25,
                    nextScenario: "de_west_end"
                }
            },
            {
                text: "Vernebelung leiten und die Tanks im Chaos blenden",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr legt eine gigantische Rauchwand. Die feindlichen Panzer irren blind umher, während ihr geordnet abzieht.",
                    damage: 4,
                    moraleChange: +15,
                    xpReward: 35,
                    nextScenario: "de_west_end"
                }
            }
        ]
    },
    de_west_end: {
        title: "November 1918 - Der Rückzug",
        type: "decision",
        description: "Die Offensive ist gescheitert. Frische amerikanische Truppen drängen euch zurück. Das Reich steht vor dem Zusammenbruch und der Waffenstillstand wird unterzeichnet.",
        options: [
            {
                text: "Die Waffen niederlegen und den Heimweg antreten",
                outcome: {
                    text: "Erschöpft und traumatisiert tretet ihr den Rückzug ins Ungewisse an. Der Feldzug ist beendet.",
                    nextScenario: null
                }
            }
        ]
    },

    // ==========================================
    // DEUTSCHLAND - OSTFRONT (de_ost_...)
    // ==========================================
    de_ost_start: {
        title: "September 1914 - Schlacht bei Tannenberg",
        type: "decision",
        description: "Ihr werdet eiligst mit Zügen an die Ostfront verlegt. Russische Armeen sind in Ostpreußen eingefallen. Es gilt, sie in einer großen Kesselschlacht zu vernichten.",
        options: [
            {
                text: "Eingraben und die russische Übermacht binden",
                outcome: {
                    text: "Ihr haltet die Stellung im Masuren-Sumpf, bis die Flankenangriffe den Feind einkesseln.",
                    damage: 5,
                    moraleChange: +5,
                    xpReward: 10,
                    nextScenario: "de_ost_start_part2"
                }
            },
            {
                text: "Im Wald feindliche Späher ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr schaltet die gegnerischen Aufklärer aus, sodass der Feind blind in die Falle tappt.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "de_ost_start_part2"
                }
            }
        ]
    },
    de_ost_start_part2: {
        title: "September 1914 - Die Kesselschlacht von Tannenberg",
        type: "decision",
        description: "Die russische 2. Armee ist eingekesselt. Verzweifelt versuchen die russischen Verbände bei Lahna, den Ring zu durchbrechen. Euer Graben wird angegriffen.",
        options: [
            {
                text: "Bajonett aufpflanzen und Standhalten",
                outcome: {
                    text: "In den Wäldern schlagt ihr die Welle zurück. Der Ring bleibt geschlossen.",
                    damage: 10,
                    moraleChange: +10,
                    xpReward: 15,
                    nextScenario: "de_ost_start_part3"
                }
            },
            {
                text: "Sperrfeuer leiten, um den Ausbruchsversuch zu unterbinden",
                requiresSkill: "art_coords",
                outcome: {
                    text: "Dank eurer Koordinaten legt die Artillerie eine Feuerwand vor euren Graben. Die gegnerische Kolonne bricht zusammen.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "de_ost_start_part3"
                }
            }
        ]
    },
    de_ost_start_part3: {
        title: "September 1914 - Flucht der geschlagenen Armee",
        type: "decision",
        description: "Die Schlacht ist gewonnen. Tausende russische Soldaten irren panisch in den dichten Mooren umher. Ihr sollt eine wichtige Durchgangsstraße am Waldrand sichern, um Gefangene zu nehmen.",
        options: [
            {
                text: "Den Weg blockieren und sie zur Aufgabe zwingen",
                outcome: {
                    text: "Nach kurzen Verhandlungen kapituliert die große Gruppe. Tannenberg ist ein historischer Triumph!",
                    damage: 4,
                    moraleChange: +20,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "de_ost_masuren"
                }
            },
            {
                text: "Verwundete Gefangene und Kameraden im provisorischen Nest verpflegen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr richtet eine Rot-Kreuz-Station ein. Der Akt des Humanismus stabilisiert eure erschöpften Soldaten.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 30,
                    triggerHQ: true,
                    nextScenario: "de_ost_masuren"
                }
            }
        ]
    },
    de_ost_masuren: {
        title: "Februar 1915 - Winterschlacht in Masuren",
        type: "decision",
        description: "Im dichten Schneesturm Ostpreußens sollt ihr die russischen Stellungen stürmen. Es herrscht bittere Kälte, das Fett an den Gewehrverschlüssen gefriert.",
        options: [
            {
                text: "Im Schneesturm durch das Niemandsland vorrücken",
                outcome: {
                    text: "Der tiefe Schnee verlangsamt euch. Russische Maschinengewehre fordern ihren Tribut, aber ihr gewinnt die Höhe.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "de_ost_masuren_part2"
                }
            },
            {
                text: "Schneegräben werfen und geschützte Posten errichten",
                requiresClass: "engineer",
                outcome: {
                    text: "Durch euren fachkundigen Stellungsbau schützt ihr die Truppe vor Erfrierungen und Granatsplittern.",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "de_ost_masuren_part2"
                }
            }
        ]
    },
    de_ost_masuren_part2: {
        title: "Februar 1915 - Die Einkesselung im Augustower Wald",
        type: "decision",
        description: "Teile des russischen Korps haben sich in den dichten Wäldern von Augustow verschanzt. Ein Angriff im Tiefschnee ist extrem riskant.",
        options: [
            {
                text: "Wälder im Sturm nehmen",
                outcome: {
                    text: "Ihr kämpft euch von Baum zu Baum vor. Die Verluste sind hoch, aber die Reste ergeben sich.",
                    damage: 12,
                    moraleChange: -5,
                    xpReward: 15,
                    nextScenario: "de_ost_masuren_part3"
                }
            },
            {
                text: "Feindliche Stellungen umgehen und Nachschubwege kappen",
                requiresClass: "infantry",
                outcome: {
                    text: "Mit taktischem Geschick riegelt ihr das Waldstück ab und zwingt die Verteidiger kampflos zur Kapitulation.",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "de_ost_masuren_part3"
                }
            }
        ]
    },
    de_ost_masuren_part3: {
        title: "Februar 1915 - Die Erstürmung von Lyck",
        type: "decision",
        description: "Die Kleinstadt Lyck bildet den Kern der russischen Nachschublinien im Grenzgebiet. Die Straßen sind stark befestigt und stehen unter Sperrfeuer.",
        options: [
            {
                text: "Die Barrikaden mit roher Gewalt stürmen",
                outcome: {
                    text: "Unter hohen Opfern nehmt ihr die Posten ein. Der russische Vormarsch im Norden ist zerschlagen.",
                    damage: 14,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "de_ost_gorlice"
                }
            },
            {
                text: "Telefonleitungen kappen, um den feindlichen Abwehrbeschuss zu blenden",
                requiresSkill: "sig_cable",
                outcome: {
                    text: "Ihr schleicht euch vor und schneidet die Kabel durch. Die russische Artillerie schweigt, und ihr übernehmt die Stadt.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "de_ost_gorlice"
                }
            }
        ]
    },
    de_ost_gorlice: {
        title: "Mai 1915 - Die Gorlice-Tarnów-Offensive",
        type: "decision",
        description: "Ein massiver Durchbruch soll die Ostfront in Bewegung bringen. Nach stundenlangem Artilleriefeuer sollt ihr die gegnerischen Hauptstellungen stürmen.",
        options: [
            {
                text: "Sturmlauf auf die zerbombten Gräben",
                outcome: {
                    text: "Ihr nehmt die Stellungen ein, stolpert jedoch im unwegsamen Gelände über Drahtverhaue und erleidet Wunden.",
                    damage: 8,
                    moraleChange: +5,
                    xpReward: 10,
                    nextScenario: "de_ost_gorlice_part2"
                }
            },
            {
                text: "Artilleriebeobachtung sichern und Feuer korrigieren",
                requiresSkill: "art_spotting",
                outcome: {
                    text: "Mit eurer präzisen Einweisung vernichtet die eigene Artillerie die letzten MG-Nester, bevor ihr angreift.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "de_ost_gorlice_part2"
                }
            }
        ]
    },
    de_ost_gorlice_part2: {
        title: "Mai 1915 - Der Große Rückzug der Russen",
        type: "decision",
        description: "Die russische Front ist kollabiert, die Verbände ziehen sich hastig nach Osten zurück. Ihr sollt den gegnerischen Brückenkopf am San-Fluss stürmen.",
        options: [
            {
                text: "Flussübergang erzwingen",
                outcome: {
                    text: "Unter schwerem Abwehrfeuer setzt ihr mit Schlauchbooten über. Ihr erleidet Treffer, sichert aber den Übergang.",
                    damage: 10,
                    moraleChange: +10,
                    xpReward: 15,
                    nextScenario: "de_ost_gorlice_part3"
                }
            },
            {
                text: "Die Festungswerke am Ufer sprengen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr schleicht euch an die Uferbunker heran und sprengt die Fundamente. Der Widerstand bricht zusammen.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 25,
                    nextScenario: "de_ost_gorlice_part3"
                }
            }
        ]
    },
    de_ost_gorlice_part3: {
        title: "Juni 1915 - Rückeroberung von Przemysl",
        type: "decision",
        description: "Die gewaltige K.u.k. Festung Przemysl liegt belagert vor euch. Die Reste der russischen Garnison verteidigen die Festungswälle verbissen. Der finale Sturm steht bevor.",
        options: [
            {
                text: "Das Haupttor frontal stürmen",
                outcome: {
                    text: "Die Mauern fallen unter hohen Verlusten. Przemysl ist wieder befreit. Der Durchbruch im Osten steht fest.",
                    damage: 12,
                    moraleChange: +15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "de_ost_brusilov"
                }
            },
            {
                text: "Mit gezielten Schüssen die Munitionslager auf den Wällen zur Explosion bringen",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr trefft ein Pulverfass auf der Festungsmauer. Eine gewaltige Detonation reißt die Verteidigung auf. Ihr zieht verlustfrei ein.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "de_ost_brusilov"
                }
            }
        ]
    },
    de_ost_brusilov: {
        title: "Sommer 1916 - Abwehr der Brussilow-Offensive",
        type: "decision",
        description: "Die russische Armee schlägt mit einer neuartigen Taktik zurück und überrennt die verbündeten österreichischen Linien. Eure Division muss die Flanke um jeden Preis absichern.",
        options: [
            {
                text: "Eingraben und die rollenden russischen Angriffe abwehren",
                outcome: {
                    text: "In zähen, erschöpfenden Abwehrkämpfen haltet ihr die Stellung, die Verluste sind enorm.",
                    damage: 15,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "de_ost_brusilov_part2"
                }
            },
            {
                text: "Ein Notlazarett im Schützengraben einrichten",
                requiresClass: "medic",
                outcome: {
                    text: "Unter schwerem Beschuss versorgt ihr die Verwundeten und rettet Dutzende Kameraden vor dem Verbluten.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "de_ost_brusilov_part2"
                }
            }
        ]
    },
    de_ost_brusilov_part2: {
        title: "Sommer 1916 - Gegenstoß bei Kowel",
        type: "decision",
        description: "Um die russische Offensive endgültig aufzuhalten, wird ein Gegenstoß befohlen. Die gegnerische Infanterie ist tief eingegraben.",
        options: [
            {
                text: "Offene Felder stürmen",
                outcome: {
                    text: "Ihr erleidet schwere Verluste durch russisches Flankenfeuer, aber ihr zwingt sie zum Abbruch ihrer Angriffe.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "de_ost_brusilov_part3"
                }
            },
            {
                text: "Feindliche MG-Stellungen auskundschaften und ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Mit präzisen Schüssen eliminiert ihr die MG-Trupps, wodurch eure Infanterie den Gegenstoß erfolgreich abschließt.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "de_ost_brusilov_part3"
                }
            }
        ]
    },
    de_ost_brusilov_part3: {
        title: "Herbst 1916 - Halten am Stokhod-Fluss",
        type: "decision",
        description: "Am Fluss Stokhod gräbt sich eure Division für den Winter ein. Russische Spähtrupps versuchen im Schutz des dichten Nebels, den Fluss lautlos zu überqueren.",
        options: [
            {
                text: "Nachtwache halten und Bajonettkampf bereithalten",
                outcome: {
                    text: "Nach lautlosen Scharmützeln im Schilf weicht der Feind zurück. Die Linie am Fluss bleibt unberührt.",
                    damage: 8,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "de_ost_brest"
                }
            },
            {
                text: "Horchposten mit Feldtelefonen zur Uferüberwachung errichten",
                requiresSkill: "sig_intercept",
                outcome: {
                    text: "Ihr lauscht der Dunkelheit und alarmiert die Stellungen per Telefon. Ein koordiniertes Mörserfeuer zerschlägt die Boote im Keim.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "de_ost_brest"
                }
            }
        ]
    },
    de_ost_brest: {
        title: "März 1918 - Der Frieden von Brest-Litowsk",
        type: "decision",
        description: "In Russland ist die Revolution ausgebrochen, das Zarenreich kollabiert. Der Friedensvertrag von Brest-Litowsk wird unterzeichnet. Die Kämpfe im Osten enden. Was werdet ihr tun?",
        options: [
            {
                text: "Freiwillig zur Westfront verlegen lassen (Die Entscheidungsschlacht wartet!)",
                outcome: {
                    text: "Ihr steigt in den Truppentransporter nach Westen. Nach Tagen auf der Schiene erreicht ihr die Westfront.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 30,
                    nextScenario: "de_west_kaiserschlacht"
                }
            },
            {
                text: "Als Besatzungstruppe im friedlichen Osten verbleiben",
                outcome: {
                    text: "Ihr entscheidet euch, den Osten zu besichern. Die Waffenruhe tut gut, doch die Heimat hungert.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "de_ost_end"
                }
            }
        ]
    },
    de_ost_end: {
        title: "Ende des Feldzugs im Osten",
        type: "decision",
        description: "Während im Westen noch blutige Schlachten toben, verbringt ihr das restliche Kriegsjahr in relativer Ruhe im Osten. Der Waffenstillstand hält, und im November endet der Weltkrieg.",
        options: [
            {
                text: "Heimkehr nach Deutschland antreten",
                outcome: {
                    text: "Erschöpft, aber unversehrt kehrt ihr in die Heimat zurück. Der Feldzug ist beendet.",
                    nextScenario: null
                }
            }
        ]
    },

    // ==========================================
    // FRANKREICH (fr)
    // ==========================================
    fr_start: {
        title: "September 1914 - Das Wunder an der Marne",
        type: "decision",
        description: "Die Deutschen stehen kurz vor Paris! Mit Taxis werdet ihr in höchster Eile direkt an die Front gefahren, um die Lücke an der Marne zu schließen.",
        options: [
            {
                text: "Einen wütenden Gegenangriff starten (Pour la France!)",
                outcome: {
                    text: "Ihr drängt den Feind mit roher Gewalt zurück, erleidet aber erhebliche Verluste.",
                    damage: 12,
                    moraleChange: +15,
                    xpReward: 10,
                    nextScenario: "fr_start_part2"
                }
            },
            {
                text: "Sanitätszelt aufbauen und Verletzte versorgen",
                requiresClass: "medic",
                outcome: {
                    text: "Durch euren Einsatz rettet ihr hunderte Verwundete, was die Kampfmoral enorm stärkt.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 20,
                    nextScenario: "fr_start_part2"
                }
            }
        ]
    },
    fr_start_part2: {
        title: "September 1914 - Halten an der Marne",
        type: "decision",
        description: "Der feindliche Angriff wurde gebremst, doch nun versuchen deutsche Stoßtruppen, die Flussübergänge zurückzuerobern. Der Brückenkopf wackelt.",
        options: [
            {
                text: "Den Schützengraben mit Bajonetten halten",
                outcome: {
                    text: "Unter hohen Opfern weist ihr den Ansturm ab. Paris atmet auf.",
                    damage: 10,
                    moraleChange: +10,
                    xpReward: 15,
                    nextScenario: "fr_start_part3"
                }
            },
            {
                text: "Sperrfeuer per Feldtelefon auf die Flussbrücke anfordern",
                requiresSkill: "art_coords",
                outcome: {
                    text: "Ihr gebt dem HQ die genauen Zielkoordinaten durch. Eigene 75mm-Kanonen zerschlagen den feindlichen Brückenkopf.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "fr_start_part3"
                }
            }
        ]
    },
    fr_start_part3: {
        title: "Oktober 1914 - Gräben an der Aisne",
        type: "decision",
        description: "Die Verfolgung führt euch zur Aisne. Die Deutschen haben sich auf den Hügeln fest verschanzt. Zum ersten Mal beginnt der zähe Stellungskrieg. Der kalte Herbstregen setzt ein.",
        options: [
            {
                text: "Im nassen Lehmgraben ausharren und den Hang verteidigen",
                outcome: {
                    text: "Ihr erkältet euch im feuchten Boden, aber die Grabenfront stabilisiert sich dauerhaft.",
                    damage: 8,
                    moraleChange: -10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "fr_champagne"
                }
            },
            {
                text: "Einen stabilen Entwässerungsgraben und feste Unterstände bauen",
                requiresClass: "engineer",
                outcome: {
                    text: "Dank eures Fachwissens bleibt euer Zug trocken und geschützt vor Mörserbeschuss. Die Moral bleibt hoch.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "fr_champagne"
                }
            }
        ]
    },
    fr_champagne: {
        title: "Herbst 1915 - Herbstschlacht in der Champagne",
        type: "decision",
        description: "Ein Großangriff soll die deutsche Front durchbrechen. Das Niemandsland ist von Drahtverhauen und Granattrichtern übersät.",
        options: [
            {
                text: "Durch die Drahtverhaue stürmen",
                outcome: {
                    text: "Ihr stürmt mutig vorwärts, bleibt aber im Stacheldraht hängen und werdet beschossen.",
                    damage: 10,
                    moraleChange: -5,
                    xpReward: 10,
                    nextScenario: "fr_champagne_part2"
                }
            },
            {
                text: "Drahtgassen mit Sprengrohren freimachen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr blast Gassen in die Hindernisse, was eurer Truppe einen sicheren und schnellen Durchgang ermöglicht.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "fr_champagne_part2"
                }
            },
            {
                text: "Sturmangriff über Feldtelefon koordinieren",
                requiresSkill: "sig_radio",
                outcome: {
                    text: "Ihr haltet Kontakt zur Artillerie und leitet das Deckungsfeuer perfekt vor euren vorrückenden Soldaten.",
                    damage: 2,
                    moraleChange: +12,
                    xpReward: 20,
                    nextScenario: "fr_champagne_part2"
                }
            }
        ]
    },
    fr_champagne_part2: {
        title: "Herbst 1915 - In den feindlichen Gräben",
        type: "decision",
        description: "Die erste feindliche Linie ist genommen, doch im Labyrinth der Verbindungsgräben haben die Verteidiger befestigte MG-Stände errichtet. Jeder Meter kostet Blut.",
        options: [
            {
                text: "Graben mit Handgranaten reinigen",
                outcome: {
                    text: "Schritt für Schritt werft ihr euch vor. Der Angriff läuft sich fest.",
                    damage: 12,
                    moraleChange: -5,
                    xpReward: 15,
                    nextScenario: "fr_champagne_part3"
                }
            },
            {
                text: "Gezieltes Unterdrückungsfeuer auf MG-Bunker geben",
                requiresClass: "infantry",
                outcome: {
                    text: "Mit schwerem Chauchat-MG-Feuer haltet ihr den Feind nieder, sodass Pioniere den Bunker ausheben können.",
                    damage: 4,
                    moraleChange: +10,
                    xpReward: 25,
                    nextScenario: "fr_champagne_part3"
                }
            }
        ]
    },
    fr_champagne_part3: {
        title: "Herbst 1915 - Halten im Sperrfeuer",
        type: "decision",
        description: "Ihr habt euch in einem erbeuteten Abschnitt eingerichtet, doch deutsche Artillerie belegt euch mit einem Vernichtungsfeuer. Eure Grabenabschnitte rutschen ab.",
        options: [
            {
                text: "In den restlichen Trichtern ausharren",
                outcome: {
                    text: "Ein zäher Tag voller Granatsplitter. Ihr haltet den Sektor knapp unter Verlusten.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "fr_verdun"
                }
            },
            {
                text: "Verwundete Kameraden aus verschütteten Trichtern graben",
                requiresClass: "medic",
                outcome: {
                    text: "Unter ständiger Explosionsgefahr versorgt ihr die verschütteten Soldaten. Ihr rettet eure Truppe vor dem Untergang.",
                    damage: 2,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "fr_verdun"
                }
            }
        ]
    },
    fr_verdun: {
        title: "1916 - Die Knochenmühle von Verdun",
        type: "decision",
        description: "Ein nie endendes Artilleriefeuer zermalmt die Erde. 'Ils ne passeront pas!' - Sie werden nicht durchkommen. Ihr verteidigt das zerstörte Fort Douaumont.",
        options: [
            {
                text: "Ausharren im Granathagel",
                outcome: {
                    text: "Die Bunker halten gerade so. Der Lärm raubt euch den Verstand.",
                    damage: 10,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "fr_verdun_part2"
                }
            },
            {
                text: "Barrikaden im Fort errichten",
                requiresClass: "engineer",
                outcome: {
                    text: "Stahlträger und Schutt bieten perfekten Schutz gegen die feindlichen Stoßtrupps.",
                    damage: 0,
                    moraleChange: +5,
                    xpReward: 20,
                    nextScenario: "fr_verdun_part2"
                }
            }
        ]
    },
    fr_verdun_part2: {
        title: "1916 - Die 'Voie Sacrée'",
        type: "decision",
        description: "Ihr werdet abgelöst und sollt die einzige verbliebene Versorgungsstraße nach Verdun, die 'Voie Sacrée', vor deutschen Jagdfliegern und Artilleriebeschuss sichern.",
        options: [
            {
                text: "Munitionslaster im Kugelhagel entladen",
                outcome: {
                    text: "Unter pausenlosem Beschuss schleppt ihr die Kisten. Die Front kann weiter feuern.",
                    damage: 8,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "fr_verdun_part3"
                }
            },
            {
                text: "Verwundete Konvois im Bombardement bergen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr zieht verletzte LKW-Fahrer aus den brennenden Wracks und leistet Erste Hilfe.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "fr_verdun_part3"
                }
            }
        ]
    },
    fr_verdun_part3: {
        title: "Herbst 1916 - Die Rückeroberung von Fort Vaux",
        type: "decision",
        description: "General Mangin befiehlt den großen Gegenangriff. Fort Vaux steht zerschossen vor euch, doch die Gänge im Inneren werden verbissen verteidigt. Dunkelheit und Gasgeruch umgeben euch.",
        options: [
            {
                text: "Mit Handgranaten und Bajonett in die finsteren Gänge stürmen",
                outcome: {
                    text: "Im brutalen Nahkampf in den engen Galerien vertreibt ihr die letzten Verteidiger. Das Fort ist befreit!",
                    damage: 14,
                    moraleChange: +15,
                    xpReward: 25,
                    triggerHQ: true,
                    nextScenario: "fr_somme_fr"
                }
            },
            {
                text: "Mit gezielten Schüssen die gegnerischen Barrikaden sichern",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr nehmt jeden Feind ins Visier, der seinen Kopf über die Barrikade streckt. Die Pioniere dringen unbeschadet vor.",
                    damage: 2,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "fr_somme_fr"
                }
            }
        ]
    },
    fr_somme_fr: {
        title: "Herbst 1916 - Die Somme-Offensive",
        type: "decision",
        description: "Während die Briten im Norden angreifen, rückt ihr im Süden der Somme vor. Der feindliche Widerstand ist erbittert.",
        options: [
            {
                text: "Die Schützengräben im Nahkampf nehmen",
                outcome: {
                    text: "Ihr nehmt den feindlichen Graben nach hartem Handgemenge ein.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "fr_somme_fr_part2"
                }
            },
            {
                text: "Verwundete unter Sperrfeuer bergen",
                requiresClass: "medic",
                outcome: {
                    text: "Unter Einsatz eures Lebens tragt ihr die verletzten Kameraden zurück in Sicherheit.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "fr_somme_fr_part2"
                }
            }
        ]
    },
    fr_somme_fr_part2: {
        title: "Herbst 1916 - Kampf um Trones Wood",
        type: "decision",
        description: "Im zersplitterten Wald von Trones tobt ein chaotisches Gefecht. Baumstämme splittern, feindliche Stoßtrupps sickern im Dickicht ein.",
        options: [
            {
                text: "Wäldchen frontal halten",
                outcome: {
                    text: "Die Nacht ist ein ständiges Feuergefecht im Dunkeln. Das Holz bleibt französisch.",
                    damage: 10,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "fr_somme_fr_part3"
                }
            },
            {
                text: "Gegnerische Scharfschützen in den Wipfeln lokalisieren",
                requiresClass: "sniper",
                outcome: {
                    text: "Mit scharfem Auge schaltet ihr die getarnten Baumschützen aus.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "fr_somme_fr_part3"
                }
            }
        ]
    },
    fr_somme_fr_part3: {
        title: "Winter 1916 - Einzug der Schlammkälte",
        type: "decision",
        description: "Der Winter bricht über die Somme herein. Der eisige Matsch blockiert eure Gewehre. Das Niemandsland friert zu, und ein feindlicher Stoßtrupp greift im Morgengrauen eure Trichterlinie an.",
        options: [
            {
                text: "Verteidigung im eisigen Trichter organisieren",
                outcome: {
                    text: "Nach zähem Feuerkampf weist ihr den Spähtrupp ab. Die eisigen Nächte nagen an eurer Kraft.",
                    damage: 10,
                    moraleChange: -15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "fr_mutiny"
                }
            },
            {
                text: "Stellung halten und MGs bemannen",
                requiresClass: "infantry",
                outcome: {
                    text: "Mit eisernem Willen reinigt ihr das MG und schlagt die Stürmenden mit gezieltem Feuer in die Flucht. Der Sektor hält.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "fr_mutiny"
                }
            }
        ]
    },
    fr_mutiny: {
        title: "Frühjahr 1917 - Die Meutereien",
        type: "decision",
        description: "Sinnlose Offensiven haben die Moral ruiniert. Truppen weigern sich, in den sicheren Tod zu gehen. Die Generäle verlangen euren sofortigen Angriff.",
        options: [
            {
                text: "Angreifen und Befehle ausführen",
                outcome: {
                    text: "Ihr werdet ins Niemandsland gejagt und massakriert. Die Befehle waren Wahnsinn.",
                    damage: 15,
                    moraleChange: -20,
                    xpReward: 10,
                    nextScenario: "fr_mutiny_part2"
                }
            },
            {
                text: "Mit den Männern verweigern und Warnschüsse abgeben",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr weigert euch. Das Kriegsgericht droht, aber Pétain stoppt schließlich die Angriffe.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "fr_mutiny_part2"
                }
            }
        ]
    },
    fr_mutiny_part2: {
        title: "Frühjahr 1917 - Pétains Anhörung",
        type: "decision",
        description: "General Pétain inspiziert die unruhigen Regimenter persönlich. Er verspricht bessere Nahrung, Urlaub und ein Ende der Massenangriffe. Das Vertrauen muss neu aufgebaut werden.",
        options: [
            {
                text: "Zweifelnd salutieren und die Disziplin wahren",
                outcome: {
                    text: "Die Moral stabilisiert sich langsam. Die Männer sind erschöpft, aber der totale Zusammenbruch ist abgewendet.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 15,
                    nextScenario: "fr_mutiny_part3"
                }
            },
            {
                text: "Den Kameraden Trost spenden und Mut zusprechen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr pflegt die seelischen Wunden. Eure Worte stärken den Zusammenhalt eures Zugs.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 25,
                    nextScenario: "fr_mutiny_part3"
                }
            }
        ]
    },
    fr_mutiny_part3: {
        title: "Herbst 1917 - Die begrenzte Offensive bei Malmaison",
        type: "decision",
        description: "Pétain setzt seine neue Taktik ein: Massive Artillerieunterstützung für begrenzte, machbare Angriffe. Ihr sollt das Fort de la Malmaison mit massiver Feuerunterstützung einnehmen.",
        options: [
            {
                text: "Hinter der Feuerwand vorrücken",
                outcome: {
                    text: "Das Konzept geht auf. Die Stellung fällt mit minimalen Ausfällen, und das Vertrauen in die Führung kehrt zurück.",
                    damage: 4,
                    moraleChange: +20,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "fr_end"
                }
            },
            {
                text: "Den Beschuss exakt über Feldtelefon anpassen",
                requiresSkill: "art_support",
                outcome: {
                    text: "Mit euren genauen Lageberichten wandert der Artilleriewall perfekt vor euren Soldaten her. Ein meisterhafter Erfolg.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "fr_end"
                }
            }
        ]
    },
    fr_end: {
        title: "November 1918 - Sieg und Erschöpfung",
        type: "decision",
        description: "Mit Hilfe der Amerikaner ist der Feind zurückgedrängt. Frankreich hat gesiegt, doch der Preis war eine verlorene Generation.",
        options: [
            {
                text: "Den Frieden feiern",
                outcome: {
                    text: "Ihr weint vor Freude und Trauer. Der Krieg ist vorbei. Der Feldzug ist beendet.",
                    nextScenario: null
                }
            }
        ]
    },

    // ==========================================
    // GROSSBRITANNIEN (gb)
    // ==========================================
    gb_start: {
        title: "August 1914 - Die Landung bei Mons",
        type: "decision",
        description: "Das britische Expeditionskorps (BEF) trifft in Belgien auf die gewaltige deutsche Armee. Ihr müsst bei Mons einen hinhaltenden Widerstand leisten.",
        options: [
            {
                text: "Feuerlinien bilden und schießen",
                outcome: {
                    text: "Das schnelle Lee-Enfield-Feuer lässt den Feind glauben, ihr hättet Maschinengewehre. Dennoch müsst ihr zurückweichen.",
                    damage: 5,
                    moraleChange: -5,
                    xpReward: 10,
                    nextScenario: "gb_start_part2"
                }
            },
            {
                text: "Offiziere gezielt ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Ohne Führung bricht der feindliche Vorstoß zusammen und ihr gewinnt wertvolle Zeit.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "gb_start_part2"
                }
            }
        ]
    },
    gb_start_part2: {
        title: "August 1914 - Der Rückzug von Mons",
        type: "decision",
        description: "Die Übermacht ist erdrückend. Im staubigen Sommerhitztag zieht sich das BEF zurück. Belgische Brücken müssen gesprengt werden, um die Verfolger zu stoppen.",
        options: [
            {
                text: "Unter feindlichem Beschuss zurückeilen",
                outcome: {
                    text: "Ihr erreicht erschöpft die französische Grenze. Die Infanterie hat die Tauglichkeit bewiesen.",
                    damage: 10,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "gb_start_part3"
                }
            },
            {
                text: "Brücken unter Granatfeuer verkabeln und sprengen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr bringt die Brücke exakt im Moment des feindlichen Eintreffens zum Einsturz. Der Vormarsch steht.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "gb_start_part3"
                }
            }
        ]
    },
    gb_start_part3: {
        title: "September 1914 - Die Wende an der Marne",
        type: "decision",
        description: "Die französische Armee hat den deutschen Vormarsch gestoppt. Ihr sollt gemeinsam mit ihnen im Sektor Coulommiers eine Lücke in den feindlichen Kolonnen ausnutzen.",
        options: [
            {
                text: "Hinter die feindlichen Linien vorstoßen und Chaos stiften",
                outcome: {
                    text: "Ihr erbeutet kaiserliche Nachschubwagen, werdet jedoch durch Gewehrfeuer leicht verwundet. Der Feind flieht.",
                    damage: 6,
                    moraleChange: +15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "gb_ypres"
                }
            },
            {
                text: "Signalposten errichten, um den Alliierten den Weg zu leiten",
                requiresSkill: "sig_radio",
                outcome: {
                    text: "Ihr leuchtet den Weg und leitet die Verbände exakt in die Lücke des Gegners. Die Front bricht zusammen.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "gb_ypres"
                }
            }
        ]
    },
    gb_ypres: {
        title: "April 1915 - Die Gasangriffe bei Ypern",
        type: "decision",
        description: "Eine gelbgrüne Wolke kriecht über das Niemandsland. Chlorgas! Panik bricht in den französischen Linien aus. Ihr müsst die Lücke füllen.",
        options: [
            {
                text: "Stellung halten und mit nassen Tüchern atmen",
                outcome: {
                    text: "Ihr erleidet schwere Lungenverletzungen im beißenden Nebel, aber die Linie hält.",
                    damage: 15,
                    moraleChange: -20,
                    xpReward: 10,
                    nextScenario: "gb_ypres_part2"
                }
            },
            {
                text: "Panik eindämmen und Truppen sammeln",
                requiresClass: "infantry",
                outcome: {
                    text: "Mit lautstarken Befehlen formiert ihr die fliehenden Truppen neu und stabilisiert die Front.",
                    damage: 5,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "gb_ypres_part2"
                }
            },
            {
                text: "Sperrfeuer per Feldtelefon anfordern",
                requiresSkill: "art_coords",
                outcome: {
                    text: "Eure Meldung geht rechtzeitig raus. Ein gewaltiges Artillerie-Sperrfeuer vernichtet den deutschen Vorstoß.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "gb_ypres_part2"
                }
            }
        ]
    },
    gb_ypres_part2: {
        title: "April 1915 - Gegenangriff im Nebel",
        type: "decision",
        description: "Im gelblichen Dunst wird ein Gegenangriff befohlen, um die alten Schützengräben zurückzuerlangen. Die Sicht ist fast null, das Atmen fällt schwer.",
        options: [
            {
                text: "Mit aufgepflanztem Bajonett blind stürmen",
                outcome: {
                    text: "Im Chaos stoßt ihr auf feindliche Posten. Ein brutaler, unübersichtlicher Kampf entbrennt.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "gb_ypres_part3"
                }
            },
            {
                text: "Gezieltes Stoßtrupp-Vorgehen mit Kompass und Signalpfeifen",
                requiresClass: "infantry",
                outcome: {
                    text: "Dank eurer lauten Befehle haltet ihr die Richtung und überrumpelt die feindliche Flanke im Gasnebel.",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "gb_ypres_part3"
                }
            }
        ]
    },
    gb_ypres_part3: {
        title: "Mai 1915 - Das Massaker bei Langemarck",
        type: "decision",
        description: "Die Stellungen bei Langemarck liegen unter pausenlosem schweren Granatfeuer. Eure Sanitäter-Zelte quellen über, und der Graben füllt sich mit Wasser.",
        options: [
            {
                text: "Die Verletzten im nassen Graben stützen",
                outcome: {
                    text: "Unter schwersten Bedingungen haltet ihr die Stellung. Die Moral ist zerrüttet, aber ihr überlebt.",
                    damage: 10,
                    moraleChange: -20,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "gb_somme"
                }
            },
            {
                text: "Erste Hilfe unter Lebensgefahr leisten und Betroffene evakuieren",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr versorgt die Lungenverletzten direkt an der vordersten Linie und rettet Dutzende Leben. Heldenhaft!",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "gb_somme"
                }
            }
        ]
    },
    gb_somme: {
        title: "1. Juli 1916 - Die Somme",
        type: "decision",
        description: "Der schwärzeste Tag der britischen Armee. Ihr klettert aus dem Graben und stürmt in dichten Reihen vor. Die feindlichen Maschinengewehre waren nicht vernichtet.",
        options: [
            {
                text: "Mit den Kameraden weiter vorrücken",
                outcome: {
                    text: "Ein Gemetzel. Ihr erreicht den Feindgraben kaum. Tausende liegen im Schlamm.",
                    damage: 20,
                    moraleChange: -20,
                    xpReward: 10,
                    nextScenario: "gb_somme_part2"
                }
            },
            {
                text: "Unterstützungsfeuer mit MGs geben",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr gebt euren Jungs Deckung, was viele Leben rettet, doch die Offensive stagniert.",
                    damage: 5,
                    moraleChange: +5,
                    xpReward: 20,
                    nextScenario: "gb_somme_part2"
                }
            }
        ]
    },
    gb_somme_part2: {
        title: "Juli 1916 - Das Halten im Trichterfeld",
        type: "decision",
        description: "Ihr sitzt in einem tiefen Granattrichter im Niemandsland fest. Die deutsche Artillerie belegt das Trichterfeld mit Schrapnellfeuer. Eure Vorräte sind erschöpft.",
        options: [
            {
                text: "Auf die Dunkelheit warten und im Schlamm ausharren",
                outcome: {
                    text: "Ein brutaler Tag voller Staub und Durst. Nachts gelingt euch der Rückzug.",
                    damage: 10,
                    moraleChange: -15,
                    xpReward: 15,
                    nextScenario: "gb_somme_part3"
                }
            },
            {
                text: "Eine Telefonleitung zum Hauptgraben legen",
                requiresSkill: "sig_cable",
                outcome: {
                    text: "Trotz Granathagel zieht ihr die Leitung. Rauchgranaten werden angefordert, was euren Rückzug tarnt.",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "gb_somme_part3"
                }
            }
        ]
    },
    gb_somme_part3: {
        title: "August 1916 - Der Wald von Mametz",
        type: "decision",
        description: "Die walisische Division stürmt den dichten, völlig zerfetzten Wald von Mametz. Deutsche Scharfschützen haben sich in den Wipfeln festgesetzt und nehmen eure Flanken unter Feuer.",
        options: [
            {
                text: "Unter Verlusten durch das Geäst kämpfen",
                outcome: {
                    text: "Der Wald wird nach tagelangem Ringen gesichert, doch der Preis an Menschenleben war entsetzlich.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "gb_passchendaele"
                }
            },
            {
                text: "Die feindlichen Scharfschützen aus sicherer Distanz eliminieren",
                requiresClass: "sniper",
                outcome: {
                    text: "Mit präzisen Treffern räumt ihr die Wipfel leer. Die Truppe kann die Gräben im Wald sichern.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "gb_passchendaele"
                }
            }
        ]
    },
    gb_passchendaele: {
        title: "Herbst 1917 - Dritte Flandernschlacht (Passchendaele)",
        type: "decision",
        description: "Dauerregen hat das Schlachtfeld in einen tiefen, tödlichen Schlamm verwandelt. Männer und Pferde ertrinken im Morast.",
        options: [
            {
                text: "Über die Holzstege vorrücken",
                outcome: {
                    text: "Der Weg ist rutschig und steht unter ständigem Granatfeuer. Ihr watet durch den Schlamm.",
                    damage: 10,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "gb_passchendaele_part2"
                }
            },
            {
                text: "Trichterpfade ausspähen",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr findet einen sicheren Pfad um die tiefsten Schlammlöcher herum und vermeidet Fallen.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "gb_passchendaele_part2"
                }
            },
            {
                text: "Wege mit Faschinen befestigen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr legt Reisigbündel in den Schlamm, um den Kameraden einen sicheren Weg zu ebnen.",
                    damage: 2,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "gb_passchendaele_part2"
                }
            }
        ]
    },
    gb_passchendaele_part2: {
        title: "Herbst 1917 - Sturm auf Betonbunker",
        type: "decision",
        description: "Aus betonförstärkten 'Pillboxen' speien feindliche MGs Tod und Verderben. Schlamm verklebt eure Waffenverschlüsse. Das Fort muss fallen.",
        options: [
            {
                text: "Bunker frontal belagern",
                outcome: {
                    text: "Ein verlustreicher Kampf auf engstem Raum. Schließlich werft ihr Handgranaten durch die Sehschlitze.",
                    damage: 15,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "gb_passchendaele_part3"
                }
            },
            {
                text: "Sanitätsdienst unter schwerstem MG-Feuer leisten",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr kriecht von Trichter zu Trichter und schleppt Verwundete aus der Schusslinie.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 25,
                    nextScenario: "gb_passchendaele_part3"
                }
            }
        ]
    },
    gb_passchendaele_part3: {
        title: "November 1917 - Erstürmung des Hügels von Passchendaele",
        type: "decision",
        description: "Die Ruinen des Dorfes liegen auf einer Anhöhe vor euch. Die Reste der Truppen werfen alles in eine letzte Kraftanstrengung, um den Gipfel zu nehmen.",
        options: [
            {
                text: "Den schlammigen Hügel hinaufkämpfen",
                outcome: {
                    text: "Ihr besetzt den Hügel. Passchendaele ist genommen, doch das Schlachtfeld ist ein riesiger Friedhof.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "gb_cambrai"
                }
            },
            {
                text: "Die Stellung sichern und Deckungsgräben in die Trümmer ausheben",
                requiresClass: "engineer",
                outcome: {
                    text: "Mit robusten Sperren sichert ihr das gewonnene Land sofort gegen Artilleriebeschuss ab. Euer Zug bleibt geschützt.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "gb_cambrai"
                }
            }
        ]
    },
    gb_cambrai: {
        title: "November 1917 - Tanks bei Cambrai",
        type: "decision",
        description: "Eine neue Waffe rollt übers Schlachtfeld: Tanks! Sie durchbrechen den Stacheldraht, und ihr sollt ihnen folgen.",
        options: [
            {
                text: "Dicht hinter den Tanks marschieren",
                outcome: {
                    text: "Die Panzer bieten gute Deckung, aber einer wird getroffen und explodiert fast direkt neben euch.",
                    damage: 10,
                    moraleChange: -5,
                    xpReward: 10,
                    nextScenario: "gb_cambrai_part2"
                }
            },
            {
                text: "Gräben für die Tanks passierbar machen (Faschinen werfen)",
                requiresClass: "engineer",
                outcome: {
                    text: "Durch euren Einsatz können die Maschinen ungehindert über feindliche Gräben rollen. Ein voller Erfolg!",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "gb_cambrai_part2"
                }
            }
        ]
    },
    gb_cambrai_part2: {
        title: "November 1917 - Gegenstoß der Stoßtruppen",
        type: "decision",
        description: "Der Durchbruch gelang, doch die deutschen Streitkräfte starten einen heftigen Gegenstoß mit Stoßtrupptaktiken. Die Tanks haben keinen Treibstoff mehr.",
        options: [
            {
                text: "In den eroberten Gräben verbarrikadieren",
                outcome: {
                    text: "Ihr schlagt die Stoßtruppen im blutigen Nahkampf zurück, müsst aber einen Teil des Geländes wieder aufgeben.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "gb_cambrai_part3"
                }
            },
            {
                text: "Gezieltes Flankenfeuer mit den erbeuteten Waffen geben",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr dreht die erbeuteten Maschinengewehre um und haltet die Stürmenden auf Distanz.",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "gb_cambrai_part3"
                }
            }
        ]
    },
    gb_cambrai_part3: {
        title: "Dezember 1917 - Sichern der Eisenbahnlinie von Bourlon Wood",
        type: "decision",
        description: "Die erbitterten Kämpfe klingen ab. Ihr sollt den Rückzugsweg eurer Regimenter absichern, während deutscher Artilleriebeschuss die Gleise zerlegt.",
        options: [
            {
                text: "Unter ständigem Granatenhagel die Stellung halten",
                outcome: {
                    text: "Ihr haltet aus. Der Rückzug gelingt, und das Regiment bezieht neue Winterstellungen.",
                    damage: 8,
                    moraleChange: -10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "gb_end"
                }
            },
            {
                text: "Feldleitung reparieren, um Nebelwände anzufordern",
                requiresSkill: "sig_cable",
                outcome: {
                    text: "Ihr flickt die Leitung im Feuer. Die Nebelwand tarnt das Regiment perfekt. Keine Verluste beim Rückzug.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "gb_end"
                }
            }
        ]
    },
    gb_end: {
        title: "November 1918 - Der letzte Vormarsch",
        type: "decision",
        description: "Die Alliierten überrennen die deutschen Linien in der Hunderttageoffensive. Der Waffenstillstand tritt in Kraft.",
        options: [
            {
                text: "Den Tee kochen",
                outcome: {
                    text: "Ein dampfender Becher Tee markiert das Ende eurer Qualen. Ihr geht nach Hause. Der Feldzug ist beendet.",
                    nextScenario: null
                }
            }
        ]
    },

    // ==========================================
    // BELGIEN (be)
    // ==========================================
    be_start: {
        title: "August 1914 - Kampf um Lüttich",
        type: "decision",
        description: "Das kleine Belgien wird von der gewaltigen deutschen Armee überrollt. Ihr verteidigt euren Posten bei den Festungen um Lüttich.",
        options: [
            {
                text: "Bis zur letzten Patrone feuern",
                outcome: {
                    text: "Die feindlichen Haubitzen schießen alles kurz und klein. Ihr werdet gefangengenommen oder entkommt knapp.",
                    damage: 15,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "be_start_part2"
                }
            },
            {
                text: "Verwundete aus den Trümmern bergen",
                requiresClass: "medic",
                outcome: {
                    text: "Trotz des höllischen Feuers rettet ihr eure Landsleute. Der Widerstand hält länger als gedacht.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "be_start_part2"
                }
            }
        ]
    },
    be_start_part2: {
        title: "August 1914 - Der geordnete Rückzug nach Namur",
        type: "decision",
        description: "Lüttich leistet heldenhaften Widerstand, doch die Festung zerbricht unter schwerer Artillerie. Euer Trupp muss den Rückzug des Regiments absichern.",
        options: [
            {
                text: "Hinterhalt in den Außenbezirken legen",
                outcome: {
                    text: "Ihr fügt den Verfolgern Verluste zu, werdet aber durch Schrapnelle verwundet.",
                    damage: 8,
                    moraleChange: -5,
                    xpReward: 15,
                    nextScenario: "be_start_part3"
                }
            },
            {
                text: "Barrikaden eiligst mit Pionierwerkzeug errichten",
                requiresClass: "engineer",
                outcome: {
                    text: "Aus Trümmern zimmert ihr eine Sperre, die die deutschen Aufklärer stoppt.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "be_start_part3"
                }
            }
        ]
    },
    be_start_part3: {
        title: "August 1914 - Das Halten der Dyle-Linie",
        type: "decision",
        description: "Das Regiment hat sich an der Dyle zurückgezogen, um den Vormarsch der Alliierten zu decken. Feindliche Husaren-Einheiten stürmen auf eure Barrikade zu.",
        options: [
            {
                text: "Das offene Ufer verteidigen",
                outcome: {
                    text: "Unter heftigem Beschuss schlagt ihr den Angriff zurück und sichert den Flussabschnitt.",
                    damage: 8,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "be_antwerp"
                }
            },
            {
                text: "Die Brücke verminen und im rechten Moment zünden",
                requiresClass: "engineer",
                outcome: {
                    text: "Die Brücke fliegt hoch, als die feindliche Vorhut sie betritt. Der Flussübergang ist komplett gesperrt.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "be_antwerp"
                }
            }
        ]
    },
    be_antwerp: {
        title: "September 1914 - Belagerung von Antwerpen",
        type: "decision",
        description: "Die Deutschen beschießen die Festungsringe mit schwerster Artillerie (Dicke Berta). Die Mauern bersten unter dem Einschlag.",
        options: [
            {
                text: "In den Forts ausharren",
                outcome: {
                    text: "Die Betonkuppeln zerbrechen unter dem schweren Beschuss. Ihr müsst die Festung fluchtartig räumen.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "be_antwerp_part2"
                }
            },
            {
                text: "Verwundete versorgen und evakuieren",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr errichtet eine Verbandsstation im Kellergewölbe und rettet Dutzende Soldaten vor dem Einsturz.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "be_antwerp_part2"
                }
            }
        ]
    },
    be_antwerp_part2: {
        title: "September 1914 - Das Ausfalltor von Dendermonde",
        type: "decision",
        description: "Um die Einkesselung Antwerpens aufzuhalten, wird ein verzweifelter Ausfall befohlen. Deutsche Verbände stürmen auf eure Flanke zu.",
        options: [
            {
                text: "Gegenangriff auf offenem Feld führen",
                outcome: {
                    text: "Ihr wertf den Feind kurzzeitig zurück, erleidet aber im Kreuzfeuer heftige Blessuren.",
                    damage: 10,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "be_antwerp_part3"
                }
            },
            {
                text: "MG-Stellung besetzen und Ausfall absichern",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr haltet die Stellung im Kugelhagel. Das eigene Regiment kann geordnet zurückweichen.",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 25,
                    nextScenario: "be_antwerp_part3"
                }
            }
        ]
    },
    be_antwerp_part3: {
        title: "Oktober 1914 - Die Verteidigung am Fluss Nethe",
        type: "decision",
        description: "Der letzte Befestigungswall vor der Evakuierung Antwerpens. Die Deutschen setzen schwere Mörser ein. Euer Zug liegt isoliert in einem zerschossenen Grabenabschnitt.",
        options: [
            {
                text: "Stellung im Bombenhagel halten",
                outcome: {
                    text: "Ihr haltet aus, bis der offizielle Evakuierungsbefehl eintrifft. Antwerpen fällt, aber das Heer zieht ab.",
                    damage: 10,
                    moraleChange: -15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "be_yser"
                }
            },
            {
                text: "Die Telefonverbindung reparieren und um Deckungsfeuer bitten",
                requiresSkill: "sig_radio",
                outcome: {
                    text: "Ihr stellt die Leitung wieder her. Eigene Granaten zwingen die Deutschen in Deckung. Rückzug gelingt.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "be_yser"
                }
            }
        ]
    },
    be_yser: {
        title: "Oktober 1914 - Die Yser-Flutung",
        type: "decision",
        description: "König Albert befiehlt eine Verzweiflungstat: Die Schleusen in Nieuwpoort werden geöffnet, um die flache Yser-Ebene zu fluten und den Feind aufzuhalten.",
        options: [
            {
                text: "Die Schleusentore verteidigen",
                outcome: {
                    text: "Ein harter Abwehrkampf. Das Wasser steigt und zwingt beide Seiten zum Rückzug, aber die Frontlinie ist gesichert.",
                    damage: 10,
                    moraleChange: +5,
                    xpReward: 10,
                    nextScenario: "be_yser_part2"
                }
            },
            {
                text: "Die Ventile und Deiche kontrollieren",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr bedient die Mechanismen im Kugelhagel. Das Salzwasser strömt ins Land.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 20,
                    nextScenario: "be_yser_part2"
                }
            }
        ]
    },
    be_yser_part2: {
        title: "Oktober 1914 - Kampf im nassen Schlick",
        type: "decision",
        description: "Das Land steht unter Salzwasser. Im schlammigen Schlick verteidigt ihr die Bahnlinie Diksmuide, den letzten trockenen Streifen Land.",
        options: [
            {
                text: "Schlammige Stellungen mit Bajonett halten",
                outcome: {
                    text: "Trotz Kälte und Dreck weist ihr den feindlichen Sturmangriff ab.",
                    damage: 8,
                    moraleChange: +5,
                    xpReward: 15,
                    nextScenario: "be_yser_part3"
                }
            },
            {
                text: "Signalverbindung im Schlick reparieren",
                requiresSkill: "sig_cable",
                outcome: {
                    text: "Ihr flickt das Feldtelefon. Artillerie vernichtet die anstürmenden Boote.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "be_yser_part3"
                }
            }
        ]
    },
    be_yser_part3: {
        title: "November 1914 - Die Verteidigung von Ramscapelle",
        type: "decision",
        description: "Das überflutete Flandern liegt starr. Die Reste des Dorfes Ramscapelle werden von deutschen Truppen besetzt. Ein Gegenangriff muss den Sektor endgültig sichern.",
        options: [
            {
                text: "Das überflutete Umland durchqueren und das Dorf stürmen",
                outcome: {
                    text: "Nach erbitterten Häuserkämpfen ist der Ort belgisch. Die Frontlinie an der Yser steht fest.",
                    damage: 10,
                    moraleChange: +15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "be_messines"
                }
            },
            {
                text: "Die feindlichen Beobachter in der Windmühle ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr schaltet die gegnerischen Aufklärer in der Mühle aus. Die restliche Infanterie stürmt das Dorf kampflos.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "be_messines"
                }
            }
        ]
    },
    be_messines: {
        title: "Juni 1917 - Die Minensprengung von Messines",
        type: "decision",
        description: "Britische Pioniere haben riesige Minen unter die deutschen Linien gegraben. Der Knall erschüttert ganz Flandern. Ihr sollt den Krater sichern.",
        options: [
            {
                text: "Den Krater im Sturmschritt besetzen",
                outcome: {
                    text: "Ihr besetzt den riesigen Krater im Chaos der Explosion, werdet aber von feindlicher Artillerie eingedeckt.",
                    damage: 8,
                    moraleChange: +5,
                    xpReward: 10,
                    nextScenario: "be_messines_part2"
                }
            },
            {
                text: "Feindliche Gegenangriffe mit MG unterdrücken",
                requiresClass: "infantry",
                outcome: {
                    text: "Mit gezieltem MG-Feuer haltet ihr den deutschen Gegenangriff nieder, während eure Truppen die Stellung sichern.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "be_messines_part2"
                }
            }
        ]
    },
    be_messines_part2: {
        title: "Juni 1917 - Der Tunnelkampf von Messines",
        type: "decision",
        description: "Unter der Erde, im Labyrinth der eingestürzten Stollen, trefft ihr auf überlebende deutsche Pioniere. Im spärlichen Kerzenlicht zücken beide Seiten Messer und Spaten.",
        options: [
            {
                text: "Unterirdischen Nahkampf austragen",
                outcome: {
                    text: "Nach einem brutalen Gefecht im Halbdunkeln nehmt ihr die Galerie ein.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "be_messines_part3"
                }
            },
            {
                text: "Gezielte Ladungen legen, um die Stollen zu versiegeln",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr sprengt den Zugangstunnel ab und riegelt den Sektor ab.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "be_messines_part3"
                }
            }
        ]
    },
    be_messines_part3: {
        title: "Juni 1917 - Die Wytschaete-Befestigung",
        type: "decision",
        description: "Die Höhenlinie von Messines-Wytschaete liegt vor euch. Der Feind flieht, hinterlässt jedoch schwere Barrikaden und Minensperren. Ihr sollt den Gipfel endgültig sichern.",
        options: [
            {
                text: "Die Stellungen im Sturmlauf nehmen",
                outcome: {
                    text: "Ihr erobert den Höhenrücken. Der Blick auf Ypern ist endlich frei von deutscher Beobachtung.",
                    damage: 10,
                    moraleChange: +15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "be_trench"
                }
            },
            {
                text: "Die Minensperren aufspüren und entschärfen",
                requiresClass: "engineer",
                outcome: {
                    text: "Mit ruhiger Hand schneidet ihr die Zünddrähte ab. Der Vormarsch verläuft unversehrt.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "be_trench"
                }
            }
        ]
    },
    be_trench: {
        title: "1915-1917 - Überleben im Sumpf",
        type: "decision",
        description: "Vier lange Jahre harrt die belgische Armee auf dem letzten unbesetzten Fleckchen ihres Landes aus. Es ist kalt, nass und schlammig.",
        options: [
            {
                text: "Im Schlamm überwintern",
                outcome: {
                    text: "Krankheit und Erschöpfung nagen an euch. Es passiert wenig, aber das Leiden ist groß.",
                    damage: 5,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "be_trench_part2"
                }
            },
            {
                text: "Heimliche Spähtrupps durch das Niemandsland",
                requiresClass: "sniper",
                outcome: {
                    text: "Im Nebel liefert ihr dem Stab wertvolle Informationen über Feindbewegungen.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "be_trench_part2"
                }
            }
        ]
    },
    be_trench_part2: {
        title: "1915-1917 - Der Angriff der Giftgaswolke",
        type: "decision",
        description: "Ein feindlicher Gasangriff überrascht euch im Schlaf. Eure Gräben sind tief gelegen und das schwere Senfgas sammelt sich am Boden.",
        options: [
            {
                text: "Auf die Brüstung klettern und dort ausharren",
                outcome: {
                    text: "Ihr entkommt dem tödlichen Gas knapp, seid aber dem feindlichen Gewehrfeuer ausgesetzt.",
                    damage: 10,
                    moraleChange: -15,
                    xpReward: 15,
                    nextScenario: "be_trench_part3"
                }
            },
            {
                text: "Kameraden mit Gasmasken ausstatten und beruhigen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr teilt Masken aus und stabilisiert die panischen Rekruten.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 25,
                    nextScenario: "be_trench_part3"
                }
            }
        ]
    },
    be_trench_part3: {
        title: "Herbst 1917 - Nachtspähtrupp zur Kriegsgefangenschaft",
        type: "decision",
        description: "Das HQ fordert Informationen über die deutsche Truppenstärke. Ihr sollt nachts ein deutsches MG-Nest ausheben und einen Gefangenen für das Verhör nehmen.",
        options: [
            {
                text: "MG-Nest im Schutz der Dunkelheit stürmen",
                outcome: {
                    text: "Ihr überrumpelt die Wache und nehmt den Posten gefangen. Die gewonnenen Daten sind Gold wert.",
                    damage: 6,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "be_end"
                }
            },
            {
                text: "Die feindlichen Wachen nachts leise ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Mit schallgedämpftem Vorgehen übernehmt ihr den Graben ohne Alarm. Der Gefangene kooperiert.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "be_end"
                }
            }
        ]
    },
    be_end: {
        title: "Oktober 1918 - Die Befreiung",
        type: "decision",
        description: "Die letzte Offensive beginnt. Gemeinsam mit Alliierten brecht ihr aus dem Schlamm aus, um euer Land zurückzuerobern.",
        options: [
            {
                text: "Heimat befreien",
                outcome: {
                    text: "Jubeln und Tränen in den befreiten Dörfern. Belgien ist frei. Der Feldzug ist beendet.",
                    nextScenario: null
                }
            }
        ]
    },

    // ==========================================
    // ÖSTERREICH-UNGARN (at)
    // ==========================================
    at_start: {
        title: "August 1914 - Strafexpedition nach Serbien",
        type: "decision",
        description: "Nach dem Attentat von Sarajevo marschiert ihr in Serbien ein. Doch die Serben leisten zähen, gut organisierten Widerstand im hügeligen Terrain.",
        options: [
            {
                text: "Frontalangriff auf serbische Stellungen",
                outcome: {
                    text: "Ein Desaster. Ihr geratet in heftiges Kreuzfeuer und müsst euch fluchtartig zurückziehen.",
                    damage: 15,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "at_start_part2"
                }
            },
            {
                text: "Gezielter Angriff mit Infanterieunterstützung",
                requiresClass: "infantry",
                outcome: {
                    text: "Mit diszipliniertem Vorrücken könnt ihr einen serbischen Hügel erobern und die Stellung sichern.",
                    damage: 5,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "at_start_part2"
                }
            }
        ]
    },
    at_start_part2: {
        title: "August 1914 - Die Schlacht am Cer-Gebirge",
        type: "decision",
        description: "Die Serben starten eine Gegenoffensive. Eure kaiserlichen Truppen sind über die Hänge versprengt und vom Nachschub abgeschnitten.",
        options: [
            {
                text: "Durch das unwegsame Gelände zurückkämpfen",
                outcome: {
                    text: "Ihr erreicht die Donau-Grenze. Die Expedition ist fehlgeschlagen.",
                    damage: 10,
                    moraleChange: -20,
                    xpReward: 15,
                    nextScenario: "at_start_part3"
                }
            },
            {
                text: "Feste Höhenstellungen graben und die Hänge verteidigen",
                requiresSkill: "sta_fortress",
                outcome: {
                    text: "Mit alpiner Routine baut ihr eine Barrikade aus Stein. Der serbische Ansturm prallt wirkungslos ab.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "at_start_part3"
                }
            }
        ]
    },
    at_start_part3: {
        title: "September 1914 - Der Übergang an der Drina",
        type: "decision",
        description: "Um die Front zu stabilisieren, wird eine neue Offensive über die Drina befohlen. Das Gewässer ist tief und die Strömung gefährlich. Feindliche MGs bestreichen die Küste.",
        options: [
            {
                text: "Mit Holzbooten den Fluss überqueren",
                outcome: {
                    text: "Ihr erleidet hohe Verluste auf dem Wasser, sichert jedoch am anderen Ufer die Gräben.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "at_przemysl"
                }
            },
            {
                text: "Pontonbrücken im Schutz der Dunkelheit verlegen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr baut eine sichere Holzbrücke. Das Regiment überquert den Fluss unversehrt und überrascht die Serben.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "at_przemysl"
                }
            }
        ]
    },
    at_przemysl: {
        title: "Frühjahr 1915 - Belagerung von Przemysl",
        type: "decision",
        description: "Die gewaltige Festung Przemysl ist komplett von russischen Armeen eingeschlossen. Hunger und Kälte dezimieren die Garnison.",
        options: [
            {
                text: "Ausbruchsversuch im Schneesturm wagen",
                outcome: {
                    text: "Der Ausbruch scheitert unter schwersten Verlusten.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "at_przemysl_part2"
                }
            },
            {
                text: "Die Truppenmoral mit Rationen aufrechterhalten",
                requiresClass: "infantry",
                outcome: {
                    text: "Dank Disziplin teilt ihr die Rationen gerecht auf und haltet die Stellung.",
                    damage: 5,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "at_przemysl_part2"
                }
            }
        ]
    },
    at_przemysl_part2: {
        title: "Frühjahr 1915 - Die Kapitulation",
        type: "decision",
        description: "Die Munition ist verbraucht. Der Festungskommandant befiehlt das Sprengen der verbliebenen Geschütze vor der Kapitulation.",
        options: [
            {
                text: "Waffen zerstören und in Kriegsgefangenschaft gehen",
                outcome: {
                    text: "Ihr sprengt eure Gewehre. Das Schicksal führt euch in ein russisches Lager.",
                    damage: 10,
                    moraleChange: -25,
                    xpReward: 15,
                    nextScenario: "at_przemysl_part3"
                }
            },
            {
                text: "Die letzten Pulverkammern sprengen und fliehen",
                requiresClass: "engineer",
                outcome: {
                    text: "Mit einer Detonation sprengt ihr das Tor. Im dichten Rauch schlagt ihr euch durch.",
                    damage: 4,
                    moraleChange: +10,
                    xpReward: 25,
                    nextScenario: "at_przemysl_part3"
                }
            }
        ]
    },
    at_przemysl_part3: {
        title: "März 1915 - Flucht über die Karpatenkämme",
        type: "decision",
        description: "Ihr seid aus der Festung entkommen, doch russische Späher jagen euch in den eisigen Wäldern. Es herrscht bitterer Frost, und eure Stiefel sind durchgelaufen.",
        options: [
            {
                text: "Den direkten Weg über die offenen Hänge nehmen",
                outcome: {
                    text: "Ihr entkommt den Verfolgern, erleidet jedoch Erfrierungen durch den eiskalten Wind.",
                    damage: 8,
                    moraleChange: -15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "at_carpathians"
                }
            },
            {
                text: "Im Unterholz verbergen und Spuren verwischen",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr legt falsche Fährten im Schnee und lockt die russische Patrouille abseits. Ihr erreicht warm die eigenen Linien.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "at_carpathians"
                }
            }
        ]
    },
    at_carpathians: {
        title: "Winter 1914/1915 - Die Karpaten",
        type: "decision",
        description: "Eis, Schnee und Lawinen. In den Karpaten friert die K.u.k. Armee gegen die angreifenden Russen regelrecht ein. Wölfe plündern die Leichen.",
        options: [
            {
                text: "Ohne Winterausrüstung ausharren",
                outcome: {
                    text: "Viele erfrieren. Die Überlebenden sind ausgehungert und krank.",
                    damage: 12,
                    moraleChange: -20,
                    xpReward: 10,
                    nextScenario: "at_carpathians_part2"
                }
            },
            {
                text: "Höhlen und Stollen zum Schutz sprengen",
                requiresClass: "engineer",
                outcome: {
                    text: "Dank eures Pionierwissens baut ihr rettende Eishöhlen.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "at_carpathians_part2"
                }
            },
            {
                text: "Einen geschützten Unterstand im Schnee errichten",
                requiresSkill: "sta_shelter",
                outcome: {
                    text: "Mit alpiner Erfahrung zimmert der Standschütze einen stabilen Unterstand.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "at_carpathians_part2"
                }
            }
        ]
    },
    at_carpathians_part2: {
        title: "Winter 1914/1915 - Kampf am Uschok-Pass",
        type: "decision",
        description: "Am Uschok-Pass brechen russische Kosaken-Regimenter durch den tiefen Schnee herein. Die Sicht ist durch Schneesturm behindert.",
        options: [
            {
                text: "Die gefrorenen Bajonette kreuzen",
                outcome: {
                    text: "Nach hartem Kampf schlagt ihr die Kosaken in die Flucht.",
                    damage: 10,
                    moraleChange: +10,
                    xpReward: 15,
                    nextScenario: "at_carpathians_part3"
                }
            },
            {
                text: "Gezieltes Gewehrfeuer auf die Pferde lenken",
                requiresSkill: "sta_alpine",
                outcome: {
                    text: "Mit ruhigem Auge schießt ihr die Reittiere nieder. Der feindliche Angriff bricht zusammen.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "at_carpathians_part3"
                }
            }
        ]
    },
    at_carpathians_part3: {
        title: "Februar 1915 - Lawinenkatastrophe am Lupkow-Pass",
        type: "decision",
        description: "Ein lauter Granateinschlag löst eine gewaltige Schneelawine an den Steilhängen aus. Sie begräbt euren vordersten Zugabschnitt unter sich. Soldaten schreien im Eis.",
        options: [
            {
                text: "Die Verschütteten eiligst mit den Händen ausgraben",
                outcome: {
                    text: "Ihr rettet einige Kameraden, erleidet aber Erfrierungen an den Händen durch den eisigen Schnee.",
                    damage: 8,
                    moraleChange: -10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "at_asiago"
                }
            },
            {
                text: "Die Grabung professionell koordinieren und Erste Hilfe leisten",
                requiresClass: "medic",
                outcome: {
                    text: "Dank eures kühlen Kopfes rettet ihr alle Verschütteten und versorgt die Brüche. Keine Verluste im Sektor.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "at_asiago"
                }
            }
        ]
    },
    at_asiago: {
        title: "Frühjahr 1916 - Die Südtirol-Offensive (Asiago)",
        type: "decision",
        description: "Ihr greift aus den Bergen die italienischen Stellungen auf der Hochebene von Asiago an. Das Gelände ist extrem steil.",
        options: [
            {
                text: "Felswände frontal erklimmen",
                outcome: {
                    text: "Ein zäher Aufstieg unter Steinschlag und feindlichem Feuer.",
                    damage: 15,
                    moraleChange: -5,
                    xpReward: 10,
                    nextScenario: "at_asiago_part2"
                }
            },
            {
                text: "Einen geheimen Felspfad erschließen",
                requiresSkill: "sta_climbing",
                outcome: {
                    text: "Mit eurer Gebirgserfahrung findet ihr einen Schleichpfad um die Flanke herum.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "at_asiago_part2"
                }
            }
        ]
    },
    at_asiago_part2: {
        title: "Frühjahr 1916 - Das Halten der Hochebene",
        type: "decision",
        description: "Die Hochebene ist genommen, doch die Italiener bringen schwere Gebirgsartillerie in Stellung. Gesteinssplitter fliegen umher.",
        options: [
            {
                text: "Im Steinhagel ausharren",
                outcome: {
                    text: "Ihr erleidet Schnittwunden durch Felsensplitter. Die Moral sinkt.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 15,
                    nextScenario: "at_asiago_part3"
                }
            },
            {
                text: "Felshöhlen mit Dynamit aussprengen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr blast Kavernen in den blanken Stein, wo euer Zug Schutz findet.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "at_asiago_part3"
                }
            }
        ]
    },
    at_asiago_part3: {
        title: "Sommer 1916 - Der Felsgrat am Monte Cengio",
        type: "decision",
        description: "Der Monte Cengio ist die letzte Bastion vor der italienischen Tiefebene. Feindliche Stoßtruppen greifen den kahlen Gipfelgrat im dichten Nebel an. Handgranaten prallen auf dem blanken Stein ab.",
        options: [
            {
                text: "Stellung im Nebel verteidigen",
                outcome: {
                    text: "Im brutalen Nahkampf haltet ihr den Gipfel. Die Offensive endet jedoch mangels Nachschub.",
                    damage: 10,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "at_isonzo"
                }
            },
            {
                text: "MG-Feuer auf den schmalen Zugangspfad konzentrieren",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr haltet den schmalen Felsgrat unter Dauerfeuer. Die Italiener brechen ihren Gegenangriff ab.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "at_isonzo"
                }
            }
        ]
    },
    at_isonzo: {
        title: "1915-1917 - Die Isonzoschlachten",
        type: "decision",
        description: "Italien hat den Krieg erklärt. Am Fluss Isonzo liefert ihr euch zwölf erbitterte Schlachten im rauen Karstgebirge.",
        options: [
            {
                text: "Angriffen aus den Bergen standhalten",
                outcome: {
                    text: "Die italienischen Vorstöße sind verlustreich, aber ihr haltet die Höhenlinien.",
                    damage: 10,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "at_isonzo_part2"
                }
            },
            {
                text: "Verwundete aus der Steinwüste bergen",
                requiresClass: "medic",
                outcome: {
                    text: "Scharfe Felsen fordern Tribut. Durch tapferen Sanitätsdienst verhindert ihr einen Zusammenbruch.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "at_isonzo_part2"
                }
            },
            {
                text: "Eine feste Kaverne (Felsstellung) ausheben",
                requiresSkill: "sta_bunker",
                outcome: {
                    text: "Ihr blast Deckungen direkt in den Fels. Die italienischen Granaten zersplittern wirkungslos.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "at_isonzo_part2"
                }
            }
        ]
    },
    at_isonzo_part2: {
        title: "Herbst 1917 - Der Durchbruch am Isonzo",
        type: "decision",
        description: "In der 12. Isonzo-Schlacht brechen deutsche und K.u.k. Truppen die Front auf. Ihr sollt das Tal säubern.",
        options: [
            {
                text: "Mit Gasmasken ins Tal vorrücken",
                outcome: {
                    text: "Im dichten Nebel säubert ihr die Schützengräben und treibt den Feind in die Flucht.",
                    damage: 8,
                    moraleChange: +20,
                    xpReward: 15,
                    nextScenario: "at_isonzo_part3"
                }
            },
            {
                text: "Artilleriefeuer per Telefon koordinieren",
                requiresSkill: "sig_cable",
                outcome: {
                    text: "Ihr haltet die Drähte zum Stab. Sperrfeuer verhindert, dass sich der Feind neu formiert.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 25,
                    nextScenario: "at_isonzo_part3"
                }
            }
        ]
    },
    at_isonzo_part3: {
        title: "November 1917 - Der Piave-Brückenkopf",
        type: "decision",
        description: "Der Vormarsch stoppt am Piave-Fluss. Feindliche Barrikaden blockieren das jenseitige Ufer, und die herannahende Strömung bedroht eure Behelfsbrücken. Ein schnelles Sichern der Flanken ist nötig.",
        options: [
            {
                text: "Den Flussübergang im Kugelhagel stürmen",
                outcome: {
                    text: "Ihr setzt über, erleidet Verluste, zwingt die Italiener aber zum Rückzug. Die Front am Piave steht.",
                    damage: 12,
                    moraleChange: +15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "at_end"
                }
            },
            {
                text: "Die Signalverbindung über den reißenden Fluss aufrecht erhalten",
                requiresSkill: "sig_radio",
                outcome: {
                    text: "Ihr zieht ein Telefonkabel über die Behelfsbrücke. Das HQ leitet präzisen Beschuss, der den Uferbunker ausschaltet.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "at_end"
                }
            }
        ]
    },
    at_end: {
        title: "Herbst 1918 - Der Zerfall des Reiches",
        type: "decision",
        description: "Hunger und Separatismus zerreißen die Armee. Slawen, Ungarn und Österreicher wollen nicht mehr für den Kaiser sterben. Die Front kollabiert.",
        options: [
            {
                text: "Heimkehren in eine ungewisse Zukunft",
                outcome: {
                    text: "Das alte Europa ist zerbrochen. Die kaiserliche Armee löst sich auf. Der Feldzug ist beendet.",
                    nextScenario: null
                }
            }
        ]
    },

    // ==========================================
    // RUSSLAND (ru)
    // ==========================================
    ru_start: {
        title: "August 1914 - Einmarsch in Ostpreußen",
        type: "decision",
        description: "Die gewaltige russische 'Dampfwalze' rückt in Ostpreußen ein. Der Zar fordert schnelle Siege. Allerdings fehlt es massiv an Versorgung und Aufklärung.",
        options: [
            {
                text: "Ohne Funkverschlüsselung vormarschieren",
                outcome: {
                    text: "Ihr rückt rasch vor, lauft aber unvorbereitet in eine deutsche Falle, da diese eure Funksprüche abhören.",
                    damage: 10,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "ru_start_part2"
                }
            },
            {
                text: "Die Wälder geduldig nach Hinterhalten absuchen",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr entdeckt feindliche Späher und bewahrt das Regiment vor dem Schlimmsten.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "ru_start_part2"
                }
            }
        ]
    },
    ru_start_part2: {
        title: "August 1914 - Die Schlacht bei Gumbinnen",
        type: "decision",
        description: "Bei Gumbinnen trefft ihr auf die deutsche Hauptarmee. Ein heftiges Artillerieduell entbrennt über die weiten Felder.",
        options: [
            {
                text: "Ein Bajonett-Sturmlauf über offenes Feld wagen",
                outcome: {
                    text: "Unter schweren Verlusten zwingt ihr die Deutschen zum Rückzug.",
                    damage: 12,
                    moraleChange: +10,
                    xpReward: 15,
                    nextScenario: "ru_start_part3"
                }
            },
            {
                text: "Verwundete Soldaten unter Granatenbeschuss bergen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr zieht eure Kameraden aus dem Dreck und rettet viele vor dem Artillerietod.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "ru_start_part3"
                }
            }
        ]
    },
    ru_start_part3: {
        title: "September 1914 - Sichern von Insterburg",
        type: "decision",
        description: "Insterburg ist besetzt. Ostpreußen liegt unter russischer Kontrolle. Die Zivilbevölkerung flieht, doch feindliche Landsturmeinheiten sabotieren eure Telegrafenlinien.",
        options: [
            {
                text: "Die Bahnstation im Häuserkampf halten",
                outcome: {
                    text: "Ihr sichert den Knotenpunkt, werdet jedoch durch Gewehrfeuer verwundet. Die Versorgung steht.",
                    damage: 8,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "ru_lodz"
                }
            },
            {
                text: "Die zerstörten Telegrafenkabel flicken",
                requiresSkill: "sig_cable",
                outcome: {
                    text: "Ihr stellt die Kommunikation zum HQ wieder her. Aufklärer warnen vor dem preußischen Gegenangriff bei Tannenberg.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "ru_lodz"
                }
            }
        ]
    },
    ru_lodz: {
        title: "November 1914 - Die Schlacht um Lodz",
        type: "decision",
        description: "Inmitten von frostigem Wetter versucht die deutsche Armee, eure Flanke zu umgehen. Es entwickelt sich eine wilde Bewegungsschlacht.",
        options: [
            {
                text: "Frontalangriff auf deutsche Kavallerie",
                outcome: {
                    text: "Ihr werft euch dem Feind entgegen und sichert die Flanke, erleidet aber hohe Verluste in der Kälte.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "ru_lodz_part2"
                }
            },
            {
                text: "Kabelverbindung halten und Befehle sichern",
                requiresSkill: "sig_cable",
                outcome: {
                    text: "Unter feindlichem Beschuss repariert ihr die Telefonleitung.",
                    damage: 2,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "ru_lodz_part2"
                }
            }
        ]
    },
    ru_lodz_part2: {
        title: "November 1914 - Ausbruch bei Lodz",
        type: "decision",
        description: "Deutsche Truppen haben euren Verband fast vollständig eingekesselt. Die Temperatur sinkt weit unter den Gefrierpunkt.",
        options: [
            {
                text: "Durch den Kessel kämpfen",
                outcome: {
                    text: "Mit letzter Kraft brecht ihr durch den Frost. Viele Kameraden gehen verloren.",
                    damage: 15,
                    moraleChange: -15,
                    xpReward: 15,
                    nextScenario: "ru_lodz_part3"
                }
            },
            {
                text: "Stellungen graben und deutsches Feuer erwidern",
                requiresClass: "infantry",
                outcome: {
                    text: "Mit sturen Abwehrlinien haltet ihr den Ring offen.",
                    damage: 4,
                    moraleChange: +10,
                    xpReward: 25,
                    nextScenario: "ru_lodz_part3"
                }
            }
        ]
    },
    ru_lodz_part3: {
        title: "Dezember 1914 - Verteidigung an der Weichsel",
        type: "decision",
        description: "Ihr habt den Kessel verlassen und gräbt euch an der gefrorenen Weichsel ein. Russische Mörser haben keine Zünder mehr. Ein kaiserlicher Sturmtrupp stürmt über das Eis.",
        options: [
            {
                text: "Die Uferlinie im Nahkampf verteidigen",
                outcome: {
                    text: "Nach blutigem Ringen auf dem Eis weicht der Feind zurück. Die Weichsellinie steht vorerst.",
                    damage: 12,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "ru_tannenberg"
                }
            },
            {
                text: "Eislöcher sprengen, um den Sturmweg zu brechen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr platziert Dynamit unter das Eis. Die Detonation bricht die Eisdecke auf, der Angriff versinkt im eisigen Fluss.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "ru_tannenberg"
                }
            }
        ]
    },
    ru_tannenberg: {
        title: "September 1914 - Die Katastrophe von Tannenberg",
        type: "decision",
        description: "Zwei russische Armeen werden bei Tannenberg eingekesselt und vernichtet. Chaos und Verzweiflung herrschen. Ein Überleben erfordert absolute Kaltblütigkeit.",
        options: [
            {
                text: "Kämpfend aus dem Kessel ausbrechen",
                outcome: {
                    text: "Mit bloßen Bajonetten schlagt ihr euch durch. Viele fallen, ihr entkommt schwer verwundet.",
                    damage: 15,
                    moraleChange: -25,
                    xpReward: 10,
                    nextScenario: "ru_tannenberg_part2"
                }
            },
            {
                text: "Unterdrückungsfeuer für den Rückzug",
                requiresClass: "infantry",
                outcome: {
                    text: "Durch euren Widerstand können hunderte Kameraden aus der Umklammerung fliehen.",
                    damage: 5,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "ru_tannenberg_part2"
                }
            }
        ]
    },
    ru_tannenberg_part2: {
        title: "September 1914 - Flucht durch die Sümpfe",
        type: "decision",
        description: "Die Überlebenden fliehen durch die unwegsamen Masuren-Sümpfe. Die preußische Kavallerie patrouilliert an den Rändern.",
        options: [
            {
                text: "Durch den tiefen Sumpf waten",
                outcome: {
                    text: "Ihr verliert Stiefel und Waffen, erreicht aber nachts zittrig die eigenen Linien.",
                    damage: 10,
                    moraleChange: -20,
                    xpReward: 15,
                    nextScenario: "ru_tannenberg_part3"
                }
            },
            {
                text: "Einen sicheren Pfad durch die Sumpfinseln ausspähen",
                requiresClass: "sniper",
                outcome: {
                    text: "Dank eurer scharfen Sinne meidet ihr die tiefen Moorlöcher.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "ru_tannenberg_part3"
                }
            }
        ]
    },
    ru_tannenberg_part3: {
        title: "Oktober 1914 - Die Narew-Verteidigungslinie",
        type: "decision",
        description: "Die geschlagenen Reste sammeln sich hinter dem Fluss Narew. Die preußische Garde stürmt den Brückenkopf. Keine Munition mehr für MGs.",
        options: [
            {
                text: "Stellung mit Bajonetten halten",
                outcome: {
                    text: "Ihr weist den Vormarsch ab. Die Katastrophe von Tannenberg endet, die Front stabilisiert sich am Fluss.",
                    damage: 14,
                    moraleChange: -10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "ru_masurian"
                }
            },
            {
                text: "Verwundete Kameraden im zerschossenen Graben versorgen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr rettet das Überleben eures verbliebenen Zugs durch tapferen Sanitätsdienst im Chaos.",
                    damage: 2,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "ru_masurian"
                }
            }
        ]
    },
    ru_masurian: {
        title: "Februar 1915 - Winterschlacht in Masuren",
        type: "decision",
        description: "Im dichten Schneesturm werdet ihr von deutschen Kräften attackiert. Die Sichtweite beträgt nur wenige Meter.",
        options: [
            {
                text: "Im Schneesturm die Stellung halten",
                outcome: {
                    text: "Ihr haltet die Stellung im tobenden Eis, aber Erfrierungen schwächen die Truppe schwer.",
                    damage: 15,
                    moraleChange: -20,
                    xpReward: 10,
                    nextScenario: "ru_masurian_part2"
                }
            },
            {
                text: "Gegnerische Scharfschützen ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Im Schneetreiben duelliert ihr euch mit den Schützen und zwingt sie zum Rückzug.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "ru_masurian_part2"
                }
            }
        ]
    },
    ru_masurian_part2: {
        title: "Februar 1915 - Rückzug im Masuren-Wald",
        type: "decision",
        description: "Der Schneesturm nimmt zu. Im dichten Forst haben die preußischen Jäger euren Rückzugsweg besetzt. Der Mangel an warmer Kleidung wird tödlich.",
        options: [
            {
                text: "Einen Sturmangriff wagen, um den Weg freizumachen",
                outcome: {
                    text: "Ein wilder Nahkampf im dichten Unterholz. Ihr vertreibt die Jäger.",
                    damage: 12,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "ru_masurian_part3"
                }
            },
            {
                text: "Höhlen und Barrikaden aus Eis und Totholz errichten",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr baut einen geschützten Posten, der euch vor Erfrierungen rettet, bis Verstärkung eintrifft.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "ru_masurian_part3"
                }
            }
        ]
    },
    ru_masurian_part3: {
        title: "März 1915 - Die Verteidigung der Festung Osowiec",
        type: "decision",
        description: "Die Deutschen setzen schwerstes Giftgas (Chlor) gegen die Festung Osowiec ein. Ihr habt keine Gasmasken. Die Verteidiger reiben sich nasse Hemden vor das Gesicht und starten einen Gegenangriff (Der Kampf der Toten).",
        options: [
            {
                text: "Mit blutüberströmten Lungen den Sturmlauf wagen",
                outcome: {
                    text: "Der Feind flieht in Panik vor eurem schauerlichen Anblick. Osowiec steht fest, der Winterkrieg weicht.",
                    damage: 14,
                    moraleChange: +25,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "ru_brusilov"
                }
            },
            {
                text: "Als Sanitäter improvisierte Filter anfertigen",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr fertigt Notmasken aus feuchten Leinentüchern und Natron an. Der Zug kann den Sturmlauf unbeschädigt führen.",
                    damage: 0,
                    moraleChange: +30,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "ru_brusilov"
                }
            }
        ]
    },
    ru_brusilov: {
        title: "1916 - Die Brussilow-Offensive",
        type: "decision",
        description: "General Brussilow wendet neue Taktiken an. Kurzes Artilleriefeuer, dann sofortige Stöße in breiter Front. Es ist ein gewaltiger Erfolg, aber zu einem blutigen Preis.",
        options: [
            {
                text: "Den Überraschungsangriff anführen",
                outcome: {
                    text: "Die österreichischen Linien brechen zusammen. Ein großer Triumph, aber der Mangel ist spürbar.",
                    damage: 10,
                    moraleChange: +15,
                    xpReward: 10,
                    nextScenario: "ru_brusilov_part2"
                }
            },
            {
                text: "Das neue Artilleriefeuer präzise leiten",
                requiresClass: "engineer",
                outcome: {
                    text: "Eure Koordination ebnet den Weg ohne nennenswerte eigene Verluste.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "ru_brusilov_part2"
                }
            }
        ]
    },
    ru_brusilov_part2: {
        title: "1916 - Vorstoß in die Bukowina",
        type: "decision",
        description: "Euer Regiment rückt tief in die Karpatenpässe vor. Österreichische Standschützen feuern aus unzugänglichen Felsspalten.",
        options: [
            {
                text: "Die Schlucht unter Beschuss durchqueren",
                outcome: {
                    text: "Ihr erleidet Verluste durch herabfallende Felstrümmer, gewinnt aber den Pass.",
                    damage: 12,
                    moraleChange: -5,
                    xpReward: 15,
                    nextScenario: "ru_brusilov_part3"
                }
            },
            {
                text: "Sperrfeuer-Anforderung über Feldtelefon koordinieren",
                requiresSkill: "art_coords",
                outcome: {
                    text: "Ihr meldet die genauen Koordinaten der Felsnester. Schwere Haubitzen räumen den Passweg.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "ru_brusilov_part3"
                }
            }
        ]
    },
    ru_brusilov_part3: {
        title: "Herbst 1916 - Der Fall von Luzk",
        type: "decision",
        description: "Die wichtige Festungsstadt Luzk liegt erobert in eurer Hand. Doch deutsche Hilfsdivisionen eilen heran. Ihr müsst die erbeuteten Bastionen sichern.",
        options: [
            {
                text: "Die Befestigungen mit Infanteristen halten",
                outcome: {
                    text: "Ihr schlagt die feindlichen Kolonnen zurück. Die Brussilow-Offensive sichert den größten russischen Erfolg im Krieg.",
                    damage: 10,
                    moraleChange: +15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "ru_end"
                }
            },
            {
                text: "MG-Nester in den Bastionswinkeln errichten",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr platziert schwere Maschinengewehre im perfekten Winkel. Der kaiserliche Vorstoß bricht verlustreich zusammen.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "ru_end"
                }
            }
        ]
    },
    ru_end: {
        title: "1917 - Revolution!",
        type: "decision",
        description: "Es gibt kein Brot, keine Munition und keine Hoffnung mehr. Die Soldaten meutern. In Petrograd ist die Revolution ausgebrochen. Die Armee löst sich einfach auf.",
        options: [
            {
                text: "Den roten Fahnen folgen",
                outcome: {
                    text: "Der Erste Weltkrieg endet für Russland im Chaos eines Bürgerkriegs. Der Feldzug ist beendet.",
                    nextScenario: null
                }
            }
        ]
    },

    // ==========================================
    // ITALIEN (it)
    // ==========================================
    it_start: {
        title: "Mai 1915 - Der Alpenkrieg beginnt",
        type: "decision",
        description: "Italien tritt in den Krieg ein. Der Feind hat sich hoch oben im Karstgebirge und in den Alpen eingegraben. Euer Befehl: Den Berg stürmen.",
        options: [
            {
                text: "Aufwärts ins Maschinengewehrfeuer",
                outcome: {
                    text: "Ein gnadenloses Gemetzel am Felshang. Ihr verliert viele Männer, gewinnt aber einige hundert Meter.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "it_start_part2"
                }
            },
            {
                text: "Das Vorfeld durch Scharfschützen säubern",
                requiresClass: "sniper",
                outcome: {
                    text: "Von Deckung zu Deckung schaltet ihr die Bergwachen aus und ermöglicht das Vorrücken.",
                    damage: 0,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "it_start_part2"
                }
            }
        ]
    },
    it_start_part2: {
        title: "Mai 1915 - Kampf am Gipfelgrat",
        type: "decision",
        description: "Ihr steht kurz vor der gegnerischen Felsstellung. Nur eine schmale Hängebrücke führt über den gähnenden Abgrund. Ein feindliches MG bestreicht die Brücke.",
        options: [
            {
                text: "Die Brücke im Sturmlauf überqueren",
                outcome: {
                    text: "Unter hohen Opfern nehmt ihr das Nest ein.",
                    damage: 14,
                    moraleChange: -10,
                    xpReward: 15,
                    nextScenario: "it_start_part3"
                }
            },
            {
                text: "Die Brücke mit einer Flankenbesteigung umgehen",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr klettert unbemerkt durch die Steilwand und überrascht die feindliche Besatzung.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "it_start_part3"
                }
            }
        ]
    },
    it_start_part3: {
        title: "Juni 1915 - Die Erstürmung des Col di Lana",
        type: "decision",
        description: "Der Blutberg Col di Lana blockiert den Vormarsch in den Alpen. Die österreichische Festungsbesatzung feuert auf jeden Pfad. Euer Klettertrupp soll den Vorposten nehmen.",
        options: [
            {
                text: "Die Eisrinne hinaufstürmen",
                outcome: {
                    text: "Ihr erobert den Felskamm. Der Alpenkrieg brennt sich in euer Gedächtnis ein, aber der Gipfel steht.",
                    damage: 10,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "it_isonzo_early"
                }
            },
            {
                text: "Scharfschützenposten am Gegenhang leiten",
                requiresClass: "sniper",
                outcome: {
                    text: "Ihr schaltet die Beobachter der Artillerie auf dem Gipfel aus. Die Alpini stürmen den Kamm unbeschadet.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "it_isonzo_early"
                }
            }
        ]
    },
    it_isonzo_early: {
        title: "Juni 1915 - Die Erste Isonzo-Schlacht",
        type: "decision",
        description: "Die erste große Offensive am Fluss Isonzo beginnt. Der zähe österreichisch-ungarische Widerstand und das unwegsame Gelände machen das Vorrücken fast unmöglich.",
        options: [
            {
                text: "Ein Frontalangriff auf die befestigten Stellungen",
                outcome: {
                    text: "Die feindlichen Stellungen sind zu stark befestigt. Ihr werdet unter schweren Verlusten zurückgeschlagen.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "it_isonzo_early_part2"
                }
            },
            {
                text: "Artilleriebeobachtung und Kabelverbindung halten",
                requiresSkill: "sig_cable",
                outcome: {
                    text: "Trotz Granathagel haltet ihr die Telefonleitung aufrecht.",
                    damage: 5,
                    moraleChange: +10,
                    xpReward: 20,
                    nextScenario: "it_isonzo_early_part2"
                }
            },
            {
                text: "Ein provisorisches Lazarett einrichten",
                requiresClass: "medic",
                outcome: {
                    text: "Eure unermüdliche Erstversorgung rettet Dutzende Leben.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 20,
                    nextScenario: "it_isonzo_early_part2"
                }
            }
        ]
    },
    it_isonzo_early_part2: {
        title: "Juni 1915 - Der Flussübergang am Isonzo",
        type: "decision",
        description: "Ihr müsst den reißenden Isonzo unter feindlichem Gewehrfeuer überqueren. Die Strömung ist stark, und Felsen bieten kaum Deckung.",
        options: [
            {
                text: "Durch den Fluss waten",
                outcome: {
                    text: "Ihr erreicht das jenseitige Ufer durchnässt, sichert aber einen kleinen Brückenkopf.",
                    damage: 10,
                    moraleChange: -5,
                    xpReward: 15,
                    nextScenario: "it_isonzo_early_part3"
                }
            },
            {
                text: "Einen Seilsteg über den Fluss spannen",
                requiresClass: "engineer",
                outcome: {
                    text: "Unter eurer Anleitung bauen die Pioniere eine Seilbrücke. Die Truppe setzt sicher über.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "it_isonzo_early_part3"
                }
            }
        ]
    },
    it_isonzo_early_part3: {
        title: "Juli 1915 - Die Erstürmung des Podgora-Hügels",
        type: "decision",
        description: "Der Podgora-Hügel ist die Schlüsselstellung vor Görz. Gut geschützte Sandsackstellungen weisen jeden Angriff ab. Ein Flankenangriff muss den K.u.k. Sektor brechen.",
        options: [
            {
                text: "Höhenstellung mit rohem Anlauf stürmen",
                outcome: {
                    text: "Ihr nehmt den Hügel im schweren Gegenfeuer. Görz liegt in Reichweite, doch die Verluste tun weh.",
                    damage: 12,
                    moraleChange: +10,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "it_alps"
                }
            },
            {
                text: "MG-Feuer mit dem Chauchat koordinieren und stürmen",
                requiresClass: "infantry",
                outcome: {
                    text: "Ihr haltet die feindlichen Gewehre nieder, während eure Kameraden die Flanke überrumpeln.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "it_alps"
                }
            }
        ]
    },
    it_alps: {
        title: "1916 - Der Minenkrieg im ewigen Eis",
        type: "decision",
        description: "Die Front ist erstarrt. Beide Seiten graben Stollen ins Eis und Gestein der Dolomiten, um ganze Berggipfel wegzusprengen. Die Kälte ist grausam.",
        options: [
            {
                text: "In den Stollen wache halten",
                outcome: {
                    text: "Jeder Knall im Fels treibt euch in den Wahnsinn. Eine Mine explodiert knapp neben euch.",
                    damage: 8,
                    moraleChange: -15,
                    xpReward: 10,
                    nextScenario: "it_alps_part2"
                }
            },
            {
                text: "Eine eigene, massive Mine legen",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr bohrt monatelang im Fels. Schließlich wird der feindliche Gipfel weggesprengt.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 20,
                    nextScenario: "it_alps_part2"
                }
            }
        ]
    },
    it_alps_part2: {
        title: "1916 - Das Bohren im Fels",
        type: "decision",
        description: "Durch die Wände hört ihr das dumpfe Bohren der Österreicher. Sie sind direkt unter eurer Kaverne. Wer zuerst zündet, überlebt.",
        options: [
            {
                text: "Die Felsstellung fluchtartig räumen",
                outcome: {
                    text: "Kurz nach eurem Rückzug fliegt die Kaverne in die Luft.",
                    damage: 4,
                    moraleChange: -20,
                    xpReward: 15,
                    nextScenario: "it_alps_part3"
                }
            },
            {
                text: "Eine Gegenladung platzieren und sofort zünden",
                requiresClass: "engineer",
                outcome: {
                    text: "Ihr arbeitet fieberhaft im Fels und zündet die Ladung rechtzeitig. Der gegnerische Stollen stürzt ein.",
                    damage: 2,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "it_alps_part3"
                }
            }
        ]
    },
    it_alps_part3: {
        title: "Winter 1916 - Sprengung des Castelletto-Gipfels",
        type: "decision",
        description: "Tonnen von Dynamit liegen unter der österreichischen Hauptstellung auf dem Castelletto-Gipfel. Ihr sollt die Zündleitung sichern, während feindliche Patrouillen die Galerie durchkämmen.",
        options: [
            {
                text: "Zündleitung im Felsgewölbe verteidigen und zünden",
                outcome: {
                    text: "Ihr zündet das Dynamit. Die Bergspitze zerbricht in einer Eruption. Die kaiserliche Stellung existiert nicht mehr.",
                    damage: 4,
                    moraleChange: +25,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "it_ortigara"
                }
            },
            {
                text: "Horchfunk-Verbindung halten, um den feindlichen Zündzeitpunkt abzufangen",
                requiresSkill: "sig_intercept",
                outcome: {
                    text: "Ihr fangt den Funksignal des Gegners ab. Ihr zündet eure Ladung Sekunden vor ihnen. Der Feind versinkt im Gestein.",
                    damage: 0,
                    moraleChange: +30,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "it_ortigara"
                }
            }
        ]
    },
    it_ortigara: {
        title: "Juni 1917 - Die Schlacht am Monte Ortigara",
        type: "decision",
        description: "Euer Bataillon soll den strategisch wichtigen Gipfel des Monte Ortigara in über 2000 Metern Höhe stürmen. Es herrscht dichter Nebel.",
        options: [
            {
                text: "Im Nebel den Gipfel stürmen",
                outcome: {
                    text: "Ihr verliert im Nebel die Orientierung und werdet von feindlichen Handgranaten eingedeckt.",
                    damage: 10,
                    moraleChange: -10,
                    xpReward: 10,
                    nextScenario: "it_ortigara_part2"
                }
            },
            {
                text: "Feindliche Ausgucke und MG-Schützen ausschalten",
                requiresClass: "sniper",
                outcome: {
                    text: "Mit präzisen Schüssen durch den Nebel nehmt ihr die Beobachter aus dem Spiel.",
                    damage: 0,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "it_ortigara_part2"
                }
            },
            {
                text: "Einen Stollen durch den Fels sprengen",
                requiresClass: "engineer",
                outcome: {
                    text: "Mit einer gezielten Sprengung reißt ihr ein Loch in die gegnerische Flanke.",
                    damage: 4,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "it_ortigara_part2"
                }
            }
        ]
    },
    it_ortigara_part2: {
        title: "Juni 1917 - Gegenangriff der Kaiserjäger",
        type: "decision",
        description: "Der Gipfel ist erobert, doch die K.u.k. Kaiserjäger starten bei eisigen Winden einen heftigen Gegenangriff. Es gibt keine Deckung auf dem kahlen Felsen.",
        options: [
            {
                text: "Felsspalten zur Verteidigung nutzen",
                outcome: {
                    text: "Im brutalen Nahkampf schlagt ihr die Kaiserjäger zurück. Der Berg bleibt euer.",
                    damage: 12,
                    moraleChange: +5,
                    xpReward: 15,
                    nextScenario: "it_ortigara_part3"
                }
            },
            {
                text: "Sperrfeuer-Koordinaten über Feldtelefon durchgeben",
                requiresSkill: "sig_radio",
                outcome: {
                    text: "Trotz Kälte koordiniert ihr das Sperrfeuer der schweren Haubitzen im Tal. Der Gegenangriff bricht zusammen.",
                    damage: 0,
                    moraleChange: +20,
                    xpReward: 25,
                    nextScenario: "it_ortigara_part3"
                }
            }
        ]
    },
    it_ortigara_part3: {
        title: "Juli 1917 - Der Rückzug vom Totenhügel",
        type: "decision",
        description: "Die feindlichen Stellungen im Umland riegeln den Monte Ortigara ab. Schrapnelle fegen über den Gipfel, und die Munition geht aus. Der Befehl zum geordneten Rückzug durch die Steilwand ergeht.",
        options: [
            {
                text: "Unter pausenlosem Schrapnellfeuer absteigen",
                outcome: {
                    text: "Ihr klettert erschöpft herab. Die Stellung geht verloren, doch ihr überlebt den Albtraum.",
                    damage: 12,
                    moraleChange: -15,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "it_caporetto"
                }
            },
            {
                text: "Die verwundeten Alpini beim Abstieg stützen und sichern",
                requiresClass: "medic",
                outcome: {
                    text: "Ihr verbindet die Verwundeten direkt im Felsenhang und bringt jeden Soldaten lebend hinab. Die Truppe dankt es euch.",
                    damage: 2,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "it_caporetto"
                }
            }
        ]
    },
    it_caporetto: {
        title: "Oktober 1917 - Die Katastrophe von Caporetto",
        type: "decision",
        description: "Durch eine massive österreichisch-deutsche Überraschungsoffensive bricht die Front zusammen. Es herrscht eine chaotische Flucht nach Süden.",
        options: [
            {
                text: "Planloser Rückzug zum Fluss Piave",
                outcome: {
                    text: "Ihr lauft um euer Leben. Am Fluss baut sich eine letzte Verteidigungslinie auf.",
                    damage: 10,
                    moraleChange: -25,
                    xpReward: 10,
                    nextScenario: "it_caporetto_part2"
                }
            },
            {
                text: "Nachhut bilden und Verwundete mitnehmen",
                requiresClass: "medic",
                outcome: {
                    text: "Trotz des Chaos behaltet ihr die Nerven. Euer Mut rettet unzählige Soldaten.",
                    damage: 5,
                    moraleChange: +15,
                    xpReward: 20,
                    nextScenario: "it_caporetto_part2"
                }
            }
        ]
    },
    it_caporetto_part2: {
        title: "Oktober 1917 - Die Linie am Piave",
        type: "decision",
        description: "Die Reste der italienischen Armee haben sich hinter dem Fluss Piave eingegraben. Deutsche Sturmtruppen versuchen, mit Booten überzusetzen.",
        options: [
            {
                text: "Die Uferböschung mit MGs verteidigen",
                outcome: {
                    text: "Ihr haltet das Ufer unter schwersten Granateinschlägen. Die Linie hält.",
                    damage: 12,
                    moraleChange: +15,
                    xpReward: 15,
                    nextScenario: "it_caporetto_part3"
                }
            },
            {
                text: "Verwundete Soldaten aus dem Fluss ziehen",
                requiresClass: "medic",
                outcome: {
                    text: "Unter pausenlosem Gewehrfeuer watet ihr ins kalte Wasser.",
                    damage: 2,
                    moraleChange: +25,
                    xpReward: 25,
                    nextScenario: "it_caporetto_part3"
                }
            }
        ]
    },
    it_caporetto_part3: {
        title: "November 1917 - Der Kampf am Monte Grappa",
        type: "decision",
        description: "Die K.u.k. Truppen stürmen den Schlüsselberg Monte Grappa, die letzte Hürde vor Venedig. Felsen brechen weg und die Artillerie speit Eisen. Die Verteidigung darf nicht wanken.",
        options: [
            {
                text: "Felsstellung bis zur letzten Patrone halten",
                outcome: {
                    text: "Ihr weist den kaiserlichen Sturmlauf ab. Die Front am Piave und am Monte Grappa steht felsenfest.",
                    damage: 12,
                    moraleChange: +20,
                    xpReward: 20,
                    triggerHQ: true,
                    nextScenario: "it_end"
                }
            },
            {
                text: "Eine stabile Kavernen-Abwehrstellung errichten",
                requiresClass: "engineer",
                requiresSkill: "eng_fortify",
                outcome: {
                    text: "Dank eurer Kenntnisse über Bergstellungen zimmert ihr eine Felswehr. Die gegnerischen Granaten bleiben wirkungslos.",
                    damage: 0,
                    moraleChange: +25,
                    xpReward: 35,
                    triggerHQ: true,
                    nextScenario: "it_end"
                }
            }
        ]
    },
    it_end: {
        title: "November 1918 - Vittorio Veneto",
        type: "decision",
        description: "Der Feind ist ausgehungert und am Ende. In der entscheidenden Schlacht von Vittorio Veneto bricht Österreich-Ungarn zusammen.",
        options: [
            {
                text: "Sieg am Piave",
                outcome: {
                    text: "Die Glocken von Rom läuten den Frieden ein. Italien hat seine Grenzen erreicht. Der Feldzug ist beendet.",
                    nextScenario: null
                }
            }
        ]
    }
};
