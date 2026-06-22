// gameEngine.js
import { STORY } from './story.js';
import { ITEMS } from './items.js';
import { SKILL_TREE } from './player.js';

export class GameEngine {
    constructor(uiController) {
        this.players = [];
        this.ui = uiController; // Reference to main.js UI methods
        this.currentScenario = null;
        this.state = 'idle'; // idle, combat, decision
    }

    setPlayers(players) {
        this.players = players;
    }

    rollD20() {
        return Math.floor(Math.random() * 20) + 1;
    }

    // A simple check mechanic: 1 is crit fail, 20 is crit success. 
    // Usually DC (Difficulty Class) is around 10-15.
    performCheck(playerId, stat, dc) {
        const player = this.players.find(p => p.id === playerId);
        if (!player || player.isDead) return { success: false, roll: 0, text: "Gefallen." };

        const roll = this.rollD20();
        let success = roll >= dc;
        let crit = false;

        if (roll === 20) {
            success = true;
            crit = "success";
        } else if (roll === 1) {
            success = false;
            crit = "fail";
        }

        // Apply stat modifiers if needed (simplified for now)
        return { success, roll, crit, player };
    }

    startScenario(scenarioDef, scenarioKey = null) {
        if (!scenarioDef) {
            this.printLog("System: Fehler - Szenario nicht gefunden.", "logSystem");
            return;
        }

        // Auto-Save Trigger
        if (scenarioKey && this.ui && this.ui.saveGame) {
            this.ui.currentScenarioKey = scenarioKey;
            this.ui.saveGame();
        }

        this.currentScenario = scenarioDef;
        this.ui.logSystem(`Szenario gestartet: ${scenarioDef.title}`);
        this.ui.logText(scenarioDef.description);
        this.state = scenarioDef.type; // e.g. 'decision'
        this.presentOptions(scenarioDef.options);
    }

    hasPlayerOfClass(classId) {
        return this.players.some(p => !p.isDead && p.classId === classId);
    }

    getClassName(classId) {
        const names = { 
            'infantry': 'Infanterist', 
            'medic': 'Sanitäter', 
            'sniper': 'Scharfschütze', 
            'engineer': 'Pionier',
            'fernmelder': 'Fernmelder',
            'standschuetze': 'Standschütze'
        };
        return names[classId] || classId;
    }

    hasPlayerWithSkill(skillId) {
        return this.players.some(p => !p.isDead && p.unlockedSkills && p.unlockedSkills.includes(skillId));
    }

    getSkillName(skillId) {
        for (const classKey of Object.keys(SKILL_TREE)) {
            const classData = SKILL_TREE[classKey];
            if (classData.skills && classData.skills[skillId]) {
                return classData.skills[skillId].name;
            }
        }
        return skillId;
    }

    presentOptions(options) {
        if (!options || options.length === 0) return;
        this.ui.logSystem("Mögliche Aktionen:");
        options.forEach((opt, index) => {
            let text = opt.text;
            let requirementMet = true;
            let reqPrefix = "";

            if (opt.requiresClass && opt.requiresSkill) {
                const className = this.getClassName(opt.requiresClass);
                const skillName = this.getSkillName(opt.requiresSkill);
                if (this.hasPlayerOfClass(opt.requiresClass) && this.hasPlayerWithSkill(opt.requiresSkill)) {
                    reqPrefix = `[${className} - ${skillName}] `;
                } else {
                    reqPrefix = `[Fehlt: ${className} - ${skillName}] `;
                    requirementMet = false;
                }
            } else if (opt.requiresClass) {
                const className = this.getClassName(opt.requiresClass);
                if (this.hasPlayerOfClass(opt.requiresClass)) {
                    reqPrefix = `[${className}] `;
                } else {
                    reqPrefix = `[Fehlt: ${className}] `;
                    requirementMet = false;
                }
            } else if (opt.requiresSkill) {
                const skillName = this.getSkillName(opt.requiresSkill);
                if (this.hasPlayerWithSkill(opt.requiresSkill)) {
                    reqPrefix = `[Fähigkeit: ${skillName}] `;
                } else {
                    reqPrefix = `[Fehlt Fähigkeit: ${skillName}] `;
                    requirementMet = false;
                }
            }

            if (requirementMet) {
                text = reqPrefix + text;
            } else {
                text = reqPrefix + text + " (Nicht wählbar)";
            }
            this.ui.logSystem(`[${index + 1}] ${text}`);
        });
        this.currentOptions = options;
        this.ui.enableInput();
    }

    handleInput(input) {
        if (this.state === 'decision') {
            const choice = parseInt(input.trim());
            if (isNaN(choice) || choice < 1 || choice > this.currentOptions.length) {
                this.ui.logSystem("Ungültiger Befehl. Bitte wähle eine Nummer.");
                return;
            }

            const selectedOption = this.currentOptions[choice - 1];
            
            // Check requirements
            if (selectedOption.requiresClass && selectedOption.requiresSkill) {
                if (!this.hasPlayerOfClass(selectedOption.requiresClass) || !this.hasPlayerWithSkill(selectedOption.requiresSkill)) {
                    const className = this.getClassName(selectedOption.requiresClass);
                    const skillName = this.getSkillName(selectedOption.requiresSkill);
                    this.ui.logSystem(`System: Niemand in eurer Gruppe hat die Ausbildung zum ${className} mit der Fähigkeit [${skillName}]!`);
                    return;
                }
            } else if (selectedOption.requiresClass && !this.hasPlayerOfClass(selectedOption.requiresClass)) {
                this.ui.logSystem(`System: Niemand in eurer Gruppe hat die nötige Ausbildung zum ${this.getClassName(selectedOption.requiresClass)}!`);
                return;
            } else if (selectedOption.requiresSkill && !this.hasPlayerWithSkill(selectedOption.requiresSkill)) {
                const skillName = this.getSkillName(selectedOption.requiresSkill);
                this.ui.logSystem(`System: Niemand in eurer Gruppe besitzt die Fähigkeit [${skillName}]!`);
                return;
            }

            this.ui.logText(`> ${selectedOption.text}`, 'log-dialog');
            this.ui.disableInput();

            // Execute outcome
            this.executeOutcome(selectedOption.outcome);
        } else if (this.state === 'combat') {
            // Combat logic placeholder
            this.ui.logSystem("Kampf ist noch in Entwicklung. Tippe 'flucht', um zu entkommen.");
            if (input.toLowerCase().includes("flucht")) {
                this.state = 'decision';
                this.ui.logText("Ihr zieht euch hastig in den Schützengraben zurück.");
            }
        }
    }

    executeOutcome(outcome) {
        setTimeout(() => {
            if (outcome.text) {
                this.ui.logText(outcome.text);
            }
            if (outcome.damage) {
                let maxDmgTaken = 0;
                this.players.forEach(p => {
                    if (!p.isDead) {
                        let actualDamage = outcome.damage;
                        // Apply inventory effects
                        p.inventory.forEach(itemId => {
                            const item = ITEMS[itemId];
                            if (item) {
                                if (item.effect.reduceDamageAll) actualDamage -= item.effect.reduceDamageAll;
                                if (item.effect.reduceDamage) actualDamage -= item.effect.reduceDamage;
                            }
                        });
                        if (actualDamage < 0) actualDamage = 0;
                        p.takeDamage(actualDamage);
                        if (actualDamage > maxDmgTaken) maxDmgTaken = actualDamage;
                        if (p.isDead) {
                            this.ui.addFallenHero(p, this.currentScenario ? this.currentScenario.title : 'Unbekanntes Schlachtfeld');
                        }
                    }
                });
                this.ui.updateStats();
                if (maxDmgTaken < outcome.damage) {
                    this.ui.logCombat(`Ausrüstung hat den Schaden gelindert! (Max. Schaden: ${maxDmgTaken})`);
                } else {
                    this.ui.logCombat(`Die Gruppe erleidet ${outcome.damage} Schaden!`);
                }
            }
            if (outcome.moraleChange) {
                this.players.forEach(p => {
                    if (!p.isDead) {
                        let actualMorale = outcome.moraleChange;
                        // Reduce morale loss if whistle
                        if (actualMorale < 0) {
                            p.inventory.forEach(itemId => {
                                const item = ITEMS[itemId];
                                if (item && item.effect.reduceMoraleLoss) actualMorale += item.effect.reduceMoraleLoss;
                            });
                            if (actualMorale > 0) actualMorale = 0;
                        } else {
                            // Boost morale if medical kit
                            p.inventory.forEach(itemId => {
                                const item = ITEMS[itemId];
                                if (item && item.effect.passiveMorale) actualMorale += item.effect.passiveMorale;
                            });
                        }
                        p.changeMorale(actualMorale);
                    }
                });
                this.ui.updateStats();
                if (outcome.moraleChange < 0) {
                    this.ui.logCombat(`Moral sinkt.`);
                } else {
                    this.ui.logSuccess(`Moral steigt.`);
                }
            }
            
            if (outcome.xpReward) {
                let anyLevelUp = false;
                this.players.forEach(p => {
                    if (!p.isDead) {
                        let actualXp = outcome.xpReward;
                        p.inventory.forEach(itemId => {
                            const item = ITEMS[itemId];
                            if (item && item.effect.bonusXp) actualXp += item.effect.bonusXp;
                        });
                        
                        if (p.gainXp(actualXp)) {
                            anyLevelUp = true;
                            this.ui.logSuccess(`⭐ ${p.name} ist nun Level ${p.level}!`);
                        }
                    }
                });
                this.ui.logSystem(`Die Gruppe erhält persönliche Erfahrungspunkte.`);
                
                // Award VP
                if (this.ui.supplyPoints !== undefined) {
                    const vpReward = Math.floor(outcome.xpReward * 0.8); // Slightly less VP than XP
                    this.ui.supplyPoints += vpReward;
                    this.ui.logSystem(`Die Gruppe findet ${vpReward} Versorgungspunkte (VP).`);
                }

                if (anyLevelUp) {
                    this.ui.logSystem(`Nutzt den "Fähigkeiten" Button um neue Skills zu lernen!`);
                }
                this.ui.updateStats();
            }

            // Check if all dead
            const allDead = this.players.every(p => p.isDead);
            if (allDead) {
                this.ui.logSystem("Alle Rekruten sind gefallen. Das Oberkommando schickt Beileidsbekundungen.");
                return;
            }

            if (outcome.triggerHQ) {
                setTimeout(() => {
                    this.ui.openHQ(outcome.nextScenario);
                }, 2500);
            } else if (outcome.nextScenario) {
                setTimeout(() => {
                    this.startScenario(STORY[outcome.nextScenario], outcome.nextScenario);
                }, 2000);
            } else {
                this.ui.logSystem("Ende der aktuellen Mission. Wir warten auf neue Befehle.");
            }
        }, 1500);
    }
}
