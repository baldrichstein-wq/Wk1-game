// gameEngine.js

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

    startScenario(scenario) {
        this.currentScenario = scenario;
        this.ui.logSystem(`Szenario gestartet: ${scenario.title}`);
        this.ui.logText(scenario.description);
        this.state = scenario.type; // e.g. 'decision'
        this.presentOptions(scenario.options);
    }

    presentOptions(options) {
        if (!options || options.length === 0) return;
        this.ui.logSystem("Mögliche Aktionen:");
        options.forEach((opt, index) => {
            this.ui.logSystem(`[${index + 1}] ${opt.text}`);
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
                this.players.forEach(p => {
                    if (!p.isDead) p.takeDamage(outcome.damage);
                });
                this.ui.updateStats();
                this.ui.logCombat(`Die Gruppe erleidet ${outcome.damage} Schaden!`);
            }
            if (outcome.moraleChange) {
                this.players.forEach(p => {
                    if (!p.isDead) p.changeMorale(outcome.moraleChange);
                });
                this.ui.updateStats();
                if (outcome.moraleChange < 0) {
                    this.ui.logCombat(`Moral sinkt um ${Math.abs(outcome.moraleChange)}.`);
                } else {
                    this.ui.logSuccess(`Moral steigt um ${outcome.moraleChange}.`);
                }
            }
            
            // Check if all dead
            const allDead = this.players.every(p => p.isDead);
            if (allDead) {
                this.ui.logSystem("Alle Rekruten sind gefallen. Das Oberkommando schickt Beileidsbekundungen.");
                return;
            }

            if (outcome.nextScenario) {
                setTimeout(() => {
                    this.startScenario(outcome.nextScenario);
                }, 2000);
            } else {
                this.ui.logSystem("Ende der aktuellen Mission. Wir warten auf neue Befehle.");
            }
        }, 1500);
    }
}
