// gameEngine.js
import { STORY } from './story.js';
import { ITEMS } from './items.js';
import { SKILL_TREE, CLASSES } from './player.js';

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
            if (this.ui && this.ui.logSystem) {
                this.ui.logSystem("System: Fehler - Szenario nicht gefunden.");
            } else {
                console.error("System: Fehler - Szenario nicht gefunden.");
            }
            return;
        }

        // Auto-Save Trigger
        if (scenarioKey && this.ui && this.ui.saveGame) {
            this.ui.currentScenarioKey = scenarioKey;
            const activePlayer = this.players[this.ui.turnIndex];
            if (activePlayer) {
                activePlayer.currentScenarioKey = scenarioKey;
            }
            this.ui.saveGame();
        }

        this.currentScenario = scenarioDef;
        this.ui.logSystem(`Szenario gestartet: ${scenarioDef.title}`);
        this.ui.logText(scenarioDef.description);
        this.state = scenarioDef.type; // e.g. 'decision'
        this.presentOptions(scenarioDef.options);
    }

    hasPlayerOfClass(classId) {
        const activePlayer = this.players[this.ui.turnIndex];
        return activePlayer && !activePlayer.isDead && activePlayer.classId === classId;
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
        const activePlayer = this.players[this.ui.turnIndex];
        return activePlayer && !activePlayer.isDead && activePlayer.unlockedSkills && activePlayer.unlockedSkills.includes(skillId);
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
        
        // Clear previous buttons
        const btnContainer = typeof document !== 'undefined' ? document.getElementById('options-buttons-container') : null;
        if (btnContainer) {
            btnContainer.innerHTML = '';
        }

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

            // Create interactive button
            if (btnContainer && typeof document !== 'undefined') {
                const btn = document.createElement('button');
                btn.className = `btn option-btn ${requirementMet ? '' : 'disabled-option'}`;
                btn.innerHTML = `<span class="opt-num">[${index + 1}]</span> <span class="opt-text">${text}</span>`;
                btn.disabled = !requirementMet;
                
                btn.onclick = () => {
                    // Disable all buttons to prevent double-clicks
                    const allBtns = btnContainer.querySelectorAll('.option-btn');
                    allBtns.forEach(b => b.disabled = true);
                    
                    this.ui.logText(`> ${opt.text}`, 'log-dialog');
                    this.ui.disableInput();
                    
                    btnContainer.innerHTML = '';
                    
                    // Execute outcome
                    this.executeOutcome(opt.outcome);
                };
                btnContainer.appendChild(btn);
            }
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
            const activePlayer = this.players[this.ui.turnIndex];
            if (selectedOption.requiresClass && selectedOption.requiresSkill) {
                if (!this.hasPlayerOfClass(selectedOption.requiresClass) || !this.hasPlayerWithSkill(selectedOption.requiresSkill)) {
                    const className = this.getClassName(selectedOption.requiresClass);
                    const skillName = this.getSkillName(selectedOption.requiresSkill);
                    this.ui.logSystem(`System: ${activePlayer.name} hat nicht die Ausbildung zum ${className} mit der Fähigkeit [${skillName}]!`);
                    return;
                }
            } else if (selectedOption.requiresClass && !this.hasPlayerOfClass(selectedOption.requiresClass)) {
                this.ui.logSystem(`System: ${activePlayer.name} hat nicht die nötige Ausbildung zum ${this.getClassName(selectedOption.requiresClass)}!`);
                return;
            } else if (selectedOption.requiresSkill && !this.hasPlayerWithSkill(selectedOption.requiresSkill)) {
                const skillName = this.getSkillName(selectedOption.requiresSkill);
                this.ui.logSystem(`System: ${activePlayer.name} besitzt nicht die Fähigkeit [${skillName}]!`);
                return;
            }

            this.ui.logText(`> ${selectedOption.text}`, 'log-dialog');
            this.ui.disableInput();

            // Clear the option buttons container
            const btnContainer = typeof document !== 'undefined' ? document.getElementById('options-buttons-container') : null;
            if (btnContainer) {
                btnContainer.innerHTML = '';
            }

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

            const activePlayer = this.players[this.ui.turnIndex];
            if (!activePlayer) return;

            // === NO DAMAGE DURING TRAINING OR RECRUITMENT ===
            const currentKey = activePlayer.currentScenarioKey || '';
            const isTraining = currentKey.includes('_training') || currentKey.includes('_recruitment');

            if (outcome.damage && !isTraining) {
                if (!activePlayer.isDead) {
                    let actualDamage = outcome.damage;
                    // Apply inventory effects
                    activePlayer.inventory.forEach(itemId => {
                        const item = ITEMS[itemId];
                        if (item) {
                            if (item.effect.reduceDamageAll) actualDamage -= item.effect.reduceDamageAll;
                            if (item.effect.reduceDamage) actualDamage -= item.effect.reduceDamage;
                        }
                    });
                    if (actualDamage < 0) actualDamage = 0;
                    activePlayer.takeDamage(actualDamage);
                    if (activePlayer.isDead) {
                        this.ui.addFallenHero(activePlayer, this.currentScenario ? this.currentScenario.title : 'Unbekanntes Schlachtfeld');
                    }
                    this.ui.updateStats();
                    if (actualDamage < outcome.damage) {
                        this.ui.logCombat(`Ausrüstung hat den Schaden gelindert! (Schaden: ${actualDamage})`);
                    } else {
                        this.ui.logCombat(`${activePlayer.name} erleidet ${outcome.damage} Schaden!`);
                    }
                }
            } else if (outcome.damage && isTraining) {
                this.ui.logSystem(`[Ausbildung] Kein echter Schaden – das ist nur eine Übung.`);
            }

            if (outcome.moraleChange) {
                if (!activePlayer.isDead) {
                    let actualMorale = outcome.moraleChange;
                    // Reduce morale loss if whistle
                    if (actualMorale < 0) {
                        activePlayer.inventory.forEach(itemId => {
                            const item = ITEMS[itemId];
                            if (item && item.effect.reduceMoraleLoss) actualMorale += item.effect.reduceMoraleLoss;
                        });
                        if (actualMorale > 0) actualMorale = 0;
                    } else {
                        // Boost morale if medical kit
                        activePlayer.inventory.forEach(itemId => {
                            const item = ITEMS[itemId];
                            if (item && item.effect.passiveMorale) actualMorale += item.effect.passiveMorale;
                        });
                    }
                    activePlayer.changeMorale(actualMorale);
                }
                this.ui.updateStats();
                if (outcome.moraleChange < 0) {
                    this.ui.logCombat(`${activePlayer.name}: Moral sinkt.`);
                } else {
                    this.ui.logSuccess(`${activePlayer.name}: Moral steigt.`);
                }
            }
            
            // === CLASS GRANT: Assign class after training ===
            if (outcome.grantClass) {
                const classId = outcome.grantClass;
                const classData = CLASSES[classId];
                const className = classData ? classData.name : classId;

                if (!activePlayer.isDead) {
                    activePlayer.classId = 'recruit'; // force wasRecruit=true so stats apply correctly
                    activePlayer.setClass(classId);
                    console.log(`[grantClass] ${activePlayer.name} -> classId=${activePlayer.classId}, className=${activePlayer.className}`);
                }

                // Dramatic promotion message
                const promotionMessages = {
                    infantry: '⚔️ Die Ausbilder erkennen euren Kampfgeist. Ihr werdet als INFANTERIST eingestuft.',
                    medic: '🏥 Eure Fürsorge für die Kameraden hat euch ausgezeichnet. Ihr werdet als SANITÄTER eingestuft.',
                    sniper: '🎯 Euer Auge kennt keine Gnade. Ihr werdet als SCHARFSCHÜTZE eingestuft.',
                    engineer: '🔧 Euer Ingenieurgeist ist unübertroffen. Ihr werdet als PIONIER eingestuft.',
                    fernmelder: '📡 Eure Kommunikationsfähigkeiten sind tadellos. Ihr werdet als FERNMELDER eingestuft.',
                    standschuetze: '🏔️ Das Gebirge gehört euch. Ihr werdet als STANDSCHÜTZE eingestuft.'
                };
                const msg = promotionMessages[classId] || `Ihr werdet als ${className} eingestuft.`;
                this.ui.logSuccess(`\n${'═'.repeat(50)}`);
                this.ui.logSuccess(`${activePlayer.name}: ${msg}`);
                this.ui.logSuccess(`Klasse freigeschaltet: ${className}`);
                this.ui.logSuccess(`${'═'.repeat(50)}\n`);
                this.ui.updateStats();

                if (this.ui.saveGame) this.ui.saveGame();
            }

            if (outcome.xpReward) {
                let levelUp = false;
                if (!activePlayer.isDead) {
                    let actualXp = outcome.xpReward;
                    activePlayer.inventory.forEach(itemId => {
                        const item = ITEMS[itemId];
                        if (item && item.effect.bonusXp) actualXp += item.effect.bonusXp;
                    });
                    
                    if (activePlayer.gainXp(actualXp)) {
                        levelUp = true;
                        this.ui.logSuccess(`⭐ ${activePlayer.name} ist nun Level ${activePlayer.level}!`);
                    }
                }
                this.ui.logSystem(`${activePlayer.name} erhält persönliche Erfahrungspunkte.`);
                
                // Award VP
                if (this.ui.supplyPoints !== undefined) {
                    const vpReward = Math.floor(outcome.xpReward * 0.8); // Slightly less VP than XP
                    this.ui.supplyPoints += vpReward;
                    this.ui.logSystem(`Die Gruppe findet ${vpReward} Versorgungspunkte (VP).`);
                }

                if (levelUp) {
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

            // Determine what happens next, and cycle the turn
            if (outcome.triggerHQ) {
                activePlayer.inHQ = true;
                activePlayer.nextYearScenario = outcome.nextScenario;
                setTimeout(() => {
                    this.ui.cycleTurn();
                }, 2500);
            } else if (outcome.nextScenario) {
                activePlayer.currentScenarioKey = outcome.nextScenario;
                const delay = outcome.grantClass ? 3500 : 2000;
                setTimeout(() => {
                    this.ui.cycleTurn();
                }, delay);
            } else {
                this.ui.logSystem("Ende der aktuellen Mission. Wir warten auf neue Befehle.");
                // Cycle turn anyway so other players can continue
                setTimeout(() => {
                    this.ui.cycleTurn();
                }, 2000);
            }
        }, 1500);
    }
}
