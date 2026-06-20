// main.js
import { Player, CLASSES } from './player.js';
import { GameEngine } from './gameEngine.js';
import { STORY } from './story.js';

class UIController {
    constructor() {
        this.logElement = document.getElementById('game-log');
        this.statsPanel = document.getElementById('stats-panel');
        this.inputField = document.getElementById('user-input');
        this.submitBtn = document.getElementById('btn-submit');
        
        this.engine = new GameEngine(this);
        this.players = [];

        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('btn-start').addEventListener('click', () => {
            this.switchScreen('start-screen', 'char-creator-screen');
            this.generateCharForms();
        });

        document.getElementById('player-count').addEventListener('change', () => {
            this.generateCharForms();
        });

        document.getElementById('btn-confirm-chars').addEventListener('click', () => {
            this.startGame();
        });

        this.submitBtn.addEventListener('click', () => {
            this.handleInput();
        });

        this.inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleInput();
            }
        });
    }

    switchScreen(hideId, showId) {
        document.getElementById(hideId).classList.add('hidden');
        document.getElementById(showId).classList.remove('hidden');
    }

    generateCharForms() {
        const count = parseInt(document.getElementById('player-count').value);
        const container = document.getElementById('player-forms');
        container.innerHTML = '';

        let classOptions = '';
        for (const [key, val] of Object.entries(CLASSES)) {
            classOptions += `<option value="${key}">${val.name}</option>`;
        }

        for (let i = 1; i <= count; i++) {
            const formHtml = `
                <div class="player-form">
                    <h3>Rekrut ${i}</h3>
                    <input type="text" id="p${i}-name" class="input-field" placeholder="Name" value="Soldat ${i}">
                    <select id="p${i}-class" class="input-field">
                        ${classOptions}
                    </select>
                </div>
            `;
            container.innerHTML += formHtml;
        }
    }

    startGame() {
        const count = parseInt(document.getElementById('player-count').value);
        this.players = [];

        for (let i = 1; i <= count; i++) {
            const name = document.getElementById(`p${i}-name`).value || `Soldat ${i}`;
            const classId = document.getElementById(`p${i}-class`).value;
            this.players.push(new Player(i, name, classId));
        }

        this.engine.setPlayers(this.players);
        this.updateStats();

        this.switchScreen('char-creator-screen', 'game-container');
        this.logSystem("System initialisiert. Verbindung zur Front steht.");
        
        // Start first scenario
        setTimeout(() => {
            this.engine.startScenario(STORY.start);
        }, 1000);
    }

    updateStats() {
        this.statsPanel.innerHTML = '';
        this.players.forEach(p => {
            let statusText = p.isDead ? '<span style="color:red">GEFALLEN</span>' : 'Aktiv';
            const card = document.createElement('div');
            card.className = 'player-card';
            card.innerHTML = `
                <h3>${p.name} (${p.className})</h3>
                <div style="font-size: 0.9em; margin-bottom: 5px;">Status: ${statusText}</div>
                
                <div>HP: ${p.hp}/${p.maxHp}</div>
                <div class="stat-bar-container"><div class="stat-bar hp-bar" style="width: ${p.getHpPercentage()}%"></div></div>
                
                <div>Moral: ${p.morale}/${p.maxMorale}</div>
                <div class="stat-bar-container"><div class="stat-bar morale-bar" style="width: ${p.getMoralePercentage()}%"></div></div>
                
                <div>Ammo: ${p.ammo}/${p.maxAmmo}</div>
                <div class="stat-bar-container"><div class="stat-bar ammo-bar" style="width: ${p.getAmmoPercentage()}%"></div></div>
            `;
            this.statsPanel.appendChild(card);
        });
    }

    logText(text, cssClass = '') {
        const entry = document.createElement('div');
        entry.className = `log-entry ${cssClass} typewriter-text`;
        entry.textContent = text;
        this.logElement.appendChild(entry);
        this.scrollToBottom();
        
        // Remove typewriter effect after animation to allow wrapping
        setTimeout(() => {
            entry.classList.remove('typewriter-text');
            entry.style.borderRight = 'none';
            entry.style.whiteSpace = 'normal';
        }, 2000);
    }

    logSystem(text) {
        this.logText(text, 'log-system');
    }

    logCombat(text) {
        this.logText(text, 'log-combat');
    }

    logSuccess(text) {
        this.logText(text, 'log-success');
    }

    scrollToBottom() {
        this.logElement.scrollTop = this.logElement.scrollHeight;
    }

    enableInput() {
        this.inputField.disabled = false;
        this.submitBtn.disabled = false;
        this.inputField.focus();
    }

    disableInput() {
        this.inputField.disabled = true;
        this.submitBtn.disabled = true;
    }

    handleInput() {
        const val = this.inputField.value;
        if (!val.trim()) return;
        this.inputField.value = '';
        this.engine.handleInput(val);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.gameUI = new UIController();
});
