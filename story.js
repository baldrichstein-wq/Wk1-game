// story.js

export const STORY = {
    start: {
        title: "Die Somme - 1916",
        type: "decision",
        description: "Regen peitscht gegen eure Stahlhelme. Der Schützengraben ist knietief mit Schlamm gefüllt. In der Ferne hört ihr das ständige Grollen der Artillerie. Euer Sergeant brüllt Befehle, die im Lärm kaum zu verstehen sind: 'Macht euch bereit! Der Feind sammelt sich!'",
        options: [
            {
                text: "Gewehre laden und an die Brustwehr treten (Verteidigen)",
                outcome: {
                    text: "Ihr nehmt Position ein. Der Feind stürmt aus dem Nebel auf euren Graben zu!",
                    moraleChange: +2,
                    nextScenario: "combat_trench"
                }
            },
            {
                text: "In Deckung bleiben und das Artilleriefeuer abwarten",
                outcome: {
                    text: "Eine Granate schlägt nah bei euch ein! Dreck und Splitter regnen auf euch herab. Ihr bleibt zwar unverletzt, aber die Nerven liegen blank.",
                    moraleChange: -3,
                    nextScenario: "combat_trench"
                }
            }
        ]
    },
    combat_trench: {
        title: "Feindkontakt im Niemandsland",
        type: "decision", // Temporarily simplified as decision instead of full combat loop
        description: "Durch den Stacheldraht brechen gegnerische Stoßtruppen. Sie sind nur noch 50 Meter entfernt!",
        options: [
            {
                text: "Das Feuer eröffnen!",
                outcome: {
                    text: "Eure Salven strecken einige Angreifer nieder, aber das Gegenfeuer ist intensiv.",
                    damage: 5,
                    moraleChange: -1,
                    nextScenario: "aftermath"
                }
            },
            {
                text: "Handgranaten werfen!",
                outcome: {
                    text: "Explosionen zerschmettern die feindliche Formation. Der Angriff stockt!",
                    damage: 0,
                    moraleChange: +5,
                    nextScenario: "aftermath"
                }
            }
        ]
    },
    aftermath: {
        title: "Ruhe nach dem Sturm",
        type: "decision",
        description: "Der Angriff wurde zurückgeschlagen. Sanitäter eilen durch den Graben, um die Verwundeten zu bergen. Ihr habt diesen Tag überlebt, aber der Krieg geht weiter.",
        options: [
            {
                text: "Verwundete versorgen",
                outcome: {
                    text: "Ihr tut euer Bestes, um euren Kameraden zu helfen. Eine kurze Pause im Wahnsinn.",
                    moraleChange: +2,
                    damage: -3 // heals 3
                }
            },
            {
                text: "Ausrüstung reparieren und Wache halten",
                outcome: {
                    text: "Ihr bleibt wachsam. Die nächste Welle könnte jederzeit kommen.",
                    moraleChange: 0
                }
            }
        ]
    }
};
