import { Player, CLASSES, SKILL_TREE } from './player.js';
import { GameEngine } from './gameEngine.js';
import { STORY } from './story.js';
import { ITEMS } from './items.js';
import { SoundEngine } from './audio.js';

export const HISTORICAL_REGIMENTS = {
    'de': [
        "1. Garde-Regiment zu Fuß",
        "Infanterie-Regiment Nr. 120",
        "2. Thüringer Infanterie-Regiment Nr. 32",
        "Kgl. Sächs. 8. Infanterie-Regiment Nr. 107",
        "Leibgarde-Infanterie-Regiment Nr. 115"
    ],
    'fr': [
        "1er Régiment d'Infanterie",
        "152e Régiment d'Infanterie (Diables Rouges)",
        "8e Régiment de Hussards",
        "Régiment de Marche de la Légion Étrangère"
    ],
    'gb': [
        "Grenadier Guards",
        "Black Watch (Royal Highlanders)",
        "Royal Sussex Regiment",
        "Royal Flying Corps (RFC)"
    ],
    'be': [
        "1er Régiment de Carabiniers",
        "Régiment des Grenadiers",
        "3ème Régiment de Chasseurs à Pied"
    ],
    'at': [
        "Infanterieregiment Hoch- und Deutschmeister Nr. 4",
        "Kaiserjäger-Regiment Nr. 1",
        "K.u.k. Feldjägerbataillon Nr. 9"
    ],
    'ru': [
        "Preobraschenski Leib-Garderegiment",
        "Semjonowski Leib-Garderegiment",
        "1. Sibirischer Schützen-Regiment"
    ],
    'it': [
        "3° Reggimento Alpini",
        "Reggimento Corazzieri",
        "1° Reggimento Bersaglieri"
    ]
};

export const HISTORICAL_RECRUITMENT = {
    'de': '<strong>Musterung & Mobilmachung im Deutschen Kaiserreich:</strong><br>Allgemeine Wehrpflicht seit dem Kaiserreich. Nach Kriegsausbruch meldeten sich Hunderttausende begeisterter Freiwilliger. Insbesondere junge Studenten, Arbeiter und Reservisten zogen singend in die Züge Richtung Front, getragen vom Glauben an einen schnellen Sieg („Augusterlebnis“).',
    'fr': '<strong>Levée en masse & Mobilmachung in Frankreich:</strong><br>Allgemeine Wehrpflicht mit dreijähriger Dienstzeit. Am 1. August läuteten landesweit die Kirchenglocken zur Generalmobilmachung. Die Rekruten zogen als „Poilus“ (die Behaarten) mit großem patriotischem Stolz los, entschlossen, Elsaß-Lothringen zurückzuerobern und ihre Heimat zu verteidigen.',
    'gb': '<strong>Kücheners Armee & Freiwilligenwerbung in Großbritannien:</strong><br>Keine Wehrpflicht bei Kriegsbeginn. Verteidigungsminister Lord Kitchener startete eine massive Werbekampagne („Your Country Needs YOU“). Ganze Nachbarschaften, Fabrikbelegschaften und Fußballvereine ließen sich gemeinsam rekrutieren, um in eng befreundeten Einheiten („Pals Battalions“) zu dienen.',
    'be': '<strong>Belgische Mobilmachung & Verteidigungswille:</strong><br>Verzweifelter Einzug aller wehrfähigen Jahrgänge angesichts des deutschen Ultimatums und der sofortigen Invasion. Neben dem regulären Heer stellten sich Bürgerwehren („Garde Civique“) und Milizen auf, um die strategisch wichtigen Festungsringe von Lüttich und Antwerpen zu besetzen.',
    'at': '<strong>Vielvölker-Rekrutierung in Österreich-Ungarn:</strong><br>Komplexe Mobilmachung in über 15 Sprachen. Die Rekruten schworen den Eid auf den betagten Kaiser Franz Joseph I. Die Armee spiegelte die ethnische Vielfalt des Reiches wider – von kaiserlichen Tiroler Kaiserjägern über Deutschmeister bis hin zu bosnisch-herzegowinischen Infanteristen.',
    'ru': '<strong>Massenmobilisierung im Russischen Zarenreich:</strong><br>Die größte Bauernarmee der Welt. Millionen von wehrpflichtigen Bauern und Leibeigenen wurden aus den Weiten des russischen Riesenreiches einberufen. Trotz des enormen Menschenpotenzials litt die Truppe unter fatalem Mangel an Uniformen, moderner Ausrüstung und Gewehren.',
    'it': '<strong>Generalmobilmachung im Königreich Italien:</strong><br>Wehrpflichtige wurden sowohl aus dem industrialisierten Norden als auch aus dem verarmten landwirtschaftlichen Süden eingezogen. Viele Soldaten sprachen ausschließlich regionale Dialekte und verstanden die Befehle ihrer piemontesischen Offiziere kaum. Dennoch zogen sie in den verlustreichen Alpen- und Karstkrieg.'
};

export const STARTING_ITEMS_LIST = [
    { id: 'trench_knife', name: 'Grabendolch (-2 Nahkampfschaden)' },
    { id: 'gasmask', name: 'Verbesserte Gasmaske (-50% Giftgas)' },
    { id: 'heavy_armor', name: 'Grabenpanzer (-3 Schaden)' },
    { id: 'scoped_rifle', name: 'Zielfernrohr-Gewehr (+10% XP, Scharfschütze)' },
    { id: 'medical_kit', name: 'Sanitätskoffer (+2 Moral, Sanitäter)' },
    { id: 'steel_spade', name: 'Pionierspaten (-4 Artillerieschaden, Pionier)' },
    { id: 'officer_whistle', name: 'Offizierspfeife (weniger Moralverlust, Infanterist)' },
    { id: 'field_telephone', name: 'Feldtelefon (+8% XP, Fernmelder)' },
    { id: 'periscope', name: 'Grabenperiskop (-1 Schaden)' },
    { id: 'canned_food', name: 'Eiserne Ration (Zusatzheilung im HQ)' },
    { id: 'wire_cutters', name: 'Drahtschere (-2 Schaden)' },
    { id: 'winter_gear', name: 'Winterausrüstung (-2 Schaden, nur AT/RU/IT)' },
    { id: 'climbing_gear', name: 'Bergsteigerausrüstung (-2 Schaden, nur Standschütze)' }
];

class UIController {
    constructor() {
        this.logElement = document.getElementById('game-log');
        this.statsPanel = document.getElementById('stats-panel');
        this.inputField = document.getElementById('user-input');
        this.submitBtn = document.getElementById('btn-submit');
        
        this.engine = new GameEngine(this);
        this.sound = new SoundEngine();
        this.players = [];

        this.bindEvents();

        this.currentScenarioKey = 'start';
        this.nextYearScenario = null;
        this.supplyPoints = 0;
        this.faction = 'de';
        this.selectedFront = 'west';
        this.turnIndex = 0;
        
        this.fallenHeroes = [];
        try {
            const savedFallen = localStorage.getItem('wk1_fallen_heroes');
            if (savedFallen) {
                this.fallenHeroes = JSON.parse(savedFallen);
            }
        } catch (e) {
            console.error("Fehler beim Laden der gefallenen Helden", e);
        }
        
        // Check for existing savegame
        if (localStorage.getItem('wk1_savegame')) {
            document.getElementById('btn-continue').classList.remove('hidden');
            const cardContinue = document.getElementById('card-continue');
            if (cardContinue) cardContinue.classList.remove('hidden');
        }

        // Initialize Authentication state
        this.loginMode = 'login';
        this.currentUser = localStorage.getItem('wk1_logged_in_user') || null;
        if (this.currentUser) {
            this.showLoggedInView(this.currentUser);
        } else {
            this.showLoggedOutView();
        }
    }

    bindEvents() {
        document.getElementById('btn-continue').addEventListener('click', () => {
            this.loadGame();
        });

        document.getElementById('btn-start').addEventListener('click', () => {
            localStorage.removeItem('wk1_savegame'); // Clear old save
            this.switchScreen('start-screen', 'char-creator-screen');
            this.generateCharForms();
        });

        // Hall of Fame Events
        document.getElementById('btn-hof').addEventListener('click', () => {
            this.openHOF();
        });

        document.getElementById('btn-close-hof').addEventListener('click', () => {
            document.getElementById('hof-modal').classList.add('hidden');
        });

        document.getElementById('btn-clear-hof').addEventListener('click', () => {
            if (confirm("Möchtest du den Friedhof wirklich leeren? Alle Aufzeichnungen gehen unwiderruflich verloren.")) {
                this.clearHOF();
            }
        });

        document.getElementById('player-count').addEventListener('change', () => {
            this.generateCharForms();
        });

        document.getElementById('faction-select').addEventListener('change', () => {
            this.generateCharForms();
        });

        document.getElementById('btn-confirm-chars').addEventListener('click', () => {
            this.startGame();
        });

        this.submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleInput();
        });

        this.inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleInput();
            }
        });

        // Verhindert Page-Reloads bei Enter in allen anderen Eingabefeldern (z.B. Musterung)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.id !== 'user-input') {
                e.preventDefault();
            }
        });

        // Verhindert das Absenden von versteckten/dynamischen Formularen
        document.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        // Skill Tree Events
        document.getElementById('btn-skills').addEventListener('click', () => {
            this.openSkillTree();
        });

        document.getElementById('btn-close-skills').addEventListener('click', () => {
            document.getElementById('skill-modal').classList.add('hidden');
        });

        document.getElementById('skill-player-select').addEventListener('change', () => {
            this.renderSkillTree();
        });

        // HQ Events
        document.getElementById('btn-hq-heal').addEventListener('click', () => {
            const activePlayer = this.players[this.turnIndex];
            if (activePlayer && !activePlayer.isDead) {
                const hasCannedFood = activePlayer.inventory && activePlayer.inventory.includes('canned_food');
                const hpGain = 5 + (hasCannedFood ? 3 : 0);
                const moraleGain = 2 + (hasCannedFood ? 1 : 0);
                activePlayer.hp = Math.min(activePlayer.maxHp, activePlayer.hp + hpGain);
                activePlayer.changeMorale(moraleGain);
                this.updateStats();
                let statusText = `${activePlayer.name} wurde versorgt. HP und Moral erhöht.`;
                if (hasCannedFood) {
                    statusText += " (Bonus durch Eiserne Rationen!)";
                }
                document.getElementById('hq-status').innerHTML = `<em>${statusText}</em>`;
            }
            document.getElementById('btn-hq-heal').disabled = true; // Nur einmal pro HQ
        });

        document.getElementById('btn-hq-skills').addEventListener('click', () => {
            this.openSkillTree();
        });

        document.getElementById('btn-hq-armory').addEventListener('click', () => {
            this.openArmory();
        });

        document.getElementById('btn-close-armory').addEventListener('click', () => {
            document.getElementById('armory-modal').classList.add('hidden');
        });

        document.getElementById('btn-hq-replace').addEventListener('click', () => {
            let replaced = false;
            this.players.forEach(p => {
                if (p.isDead) {
                    // Reset to Level 1
                    p.hp = p.maxHp;
                    p.morale = p.maxMorale;
                    p.ammo = p.maxAmmo;
                    p.isDead = false;
                    p.xp = 0;
                    p.level = 1;
                    p.skillPoints = 0;
                    p.unlockedSkills = [];
                    p.inventory = [];
                    replaced = true;
                }
            });
            this.updateStats();
            if (replaced) {
                document.getElementById('hq-status').innerHTML = "<em>Frische Rekruten sind aus der Heimat eingetroffen.</em>";
            } else {
                document.getElementById('hq-status').innerHTML = "<em>Es gibt keine Verluste zu beklagen.</em>";
            }
            document.getElementById('btn-hq-replace').disabled = true;
        });

        document.getElementById('btn-hq-next-year').addEventListener('click', () => {
            const activePlayer = this.players[this.turnIndex];
            if (activePlayer) {
                activePlayer.inHQ = false;
                if (activePlayer.nextYearScenario) {
                    activePlayer.currentScenarioKey = activePlayer.nextYearScenario;
                    activePlayer.nextYearScenario = null;
                }
            }
            this.cycleTurn();
        });

        // Authentication tab and click events
        const tabLogin = document.getElementById('tab-login');
        const tabRegister = document.getElementById('tab-register');
        const loginTitle = document.getElementById('login-title');
        const loginSubmitBtn = document.getElementById('btn-login-submit');
        const loginUsernameInput = document.getElementById('login-username');
        const loginPasswordInput = document.getElementById('login-password');
        const loginErrorDiv = document.getElementById('login-error');

        tabLogin.addEventListener('click', () => {
            this.loginMode = 'login';
            tabLogin.classList.remove('btn-secondary');
            tabRegister.classList.add('btn-secondary');
            loginTitle.innerText = "Militärische Anmeldung";
            loginSubmitBtn.innerText = "Anmelden";
            loginErrorDiv.innerText = "";
        });

        tabRegister.addEventListener('click', () => {
            this.loginMode = 'register';
            tabRegister.classList.remove('btn-secondary');
            tabLogin.classList.add('btn-secondary');
            loginTitle.innerText = "Militärische Registrierung";
            loginSubmitBtn.innerText = "Registrieren";
            loginErrorDiv.innerText = "";
        });

        loginSubmitBtn.addEventListener('click', () => {
            this.handleAuthSubmit();
        });

        // Add Enter-key handlers for authentication inputs
        loginUsernameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                loginPasswordInput.focus();
            }
        });

        loginPasswordInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleAuthSubmit();
            }
        });

        document.getElementById('btn-logout').addEventListener('click', () => {
            this.showLoggedOutView();
        });

        // Options Modal Events
        document.getElementById('btn-settings').addEventListener('click', () => {
            document.getElementById('options-feedback').innerText = "";
            document.getElementById('options-sound-toggle').checked = this.sound.enabled;
            document.getElementById('options-modal').classList.remove('hidden');
        });

        document.getElementById('btn-options-back').addEventListener('click', () => {
            document.getElementById('options-modal').classList.add('hidden');
        });

        document.getElementById('btn-options-save').addEventListener('click', () => {
            this.saveGame();
            const feedbackDiv = document.getElementById('options-feedback');
            feedbackDiv.innerText = "Spielstand erfolgreich gesichert!";
            this.logSystem("[System] Spielstand manuell gespeichert.");
            setTimeout(() => {
                feedbackDiv.innerText = "";
            }, 3000);
        });

        document.getElementById('options-sound-toggle').addEventListener('change', (e) => {
            const isEnabled = e.target.checked;
            this.sound.enabled = isEnabled;
            if (isEnabled) {
                this.sound.init();
                this.sound.startArtilleryBackground();
            } else {
                if (this.sound.artilleryInterval) {
                    clearTimeout(this.sound.artilleryInterval);
                    this.sound.artilleryInterval = null;
                }
            }
        });
    }

    saveGame() {
        if (this.players.length === 0) return;
        try {
            const saveData = {
                players: this.players,
                currentScenarioKey: this.currentScenarioKey,
                nextYearScenario: this.nextYearScenario,
                supplyPoints: this.supplyPoints,
                faction: this.faction,
                selectedFront: this.selectedFront,
                turnIndex: this.turnIndex,
                logs: document.getElementById('game-log').innerHTML
            };
            localStorage.setItem('wk1_savegame', JSON.stringify(saveData));
        } catch (e) {
            console.error("Fehler beim Speichern des Spielstands", e);
        }
    }

    showLoggedInView(username) {
        this.currentUser = username;
        localStorage.setItem('wk1_logged_in_user', username);
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('welcome-container').classList.remove('hidden');
        document.getElementById('current-user-display').innerText = username;
        document.getElementById('start-buttons').classList.remove('hidden');
    }

    showLoggedOutView() {
        this.currentUser = null;
        localStorage.removeItem('wk1_logged_in_user');
        document.getElementById('login-container').classList.remove('hidden');
        document.getElementById('welcome-container').classList.add('hidden');
        document.getElementById('start-buttons').classList.add('hidden');
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        document.getElementById('login-error').innerText = '';
    }

    handleAuthSubmit() {
        const usernameInput = document.getElementById('login-username');
        const passwordInput = document.getElementById('login-password');
        const errorDiv = document.getElementById('login-error');
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        
        errorDiv.innerText = "";
        
        if (!username || !password) {
            errorDiv.innerText = "Bitte Benutzername und Passwort eingeben.";
            return;
        }

        if (this.loginMode === 'login') {
            // Fester Administrator
            if (username === 'admin' && password === 'admin') {
                this.showLoggedInView(username);
                return;
            }
            
            // Registrierte Benutzer im localStorage prüfen
            let users = [];
            try {
                const savedUsers = localStorage.getItem('wk1_registered_users');
                if (savedUsers) {
                    users = JSON.parse(savedUsers);
                }
            } catch (e) {
                console.error("Fehler beim Laden der registrierten Benutzer", e);
            }
            
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                this.showLoggedInView(username);
            } else {
                errorDiv.innerText = "Zugriff verweigert. Falsche Anmeldedaten.";
            }
        } else {
            // Registrierungs-Modus
            if (username === 'admin') {
                errorDiv.innerText = "Der Name 'admin' ist reserviert.";
                return;
            }
            
            if (username.length < 3) {
                errorDiv.innerText = "Name muss mindestens 3 Zeichen lang sein.";
                return;
            }
            
            if (password.length < 4) {
                errorDiv.innerText = "Passwort muss mindestens 4 Zeichen lang sein.";
                return;
            }
            
            let users = [];
            try {
                const savedUsers = localStorage.getItem('wk1_registered_users');
                if (savedUsers) {
                    users = JSON.parse(savedUsers);
                }
            } catch (e) {
                console.error(e);
            }
            
            if (users.some(u => u.username === username)) {
                errorDiv.innerText = "Dieser Soldat ist bereits registriert!";
                return;
            }
            
            users.push({ username, password });
            localStorage.setItem('wk1_registered_users', JSON.stringify(users));
            
            errorDiv.style.color = "var(--text-color)";
            errorDiv.innerText = "Registrierung erfolgreich! Bitte anmelden.";
            
            setTimeout(() => {
                errorDiv.style.color = "var(--accent-red)";
                document.getElementById('tab-login').click();
                passwordInput.value = '';
            }, 1500);
        }
    }

    loadGame() {
        const savedDataStr = localStorage.getItem('wk1_savegame');
        if (!savedDataStr) return;

        try {
            const saveData = JSON.parse(savedDataStr);

            // Restore players
            this.players = saveData.players.map(p => Player.fromJSON(p));
            this.engine.players = this.players;

            // Restore state
            this.currentScenarioKey = saveData.currentScenarioKey || 'start';
            this.nextYearScenario = saveData.nextYearScenario || null;
            this.supplyPoints = saveData.supplyPoints || 0;
            this.faction = saveData.faction || 'de';
            this.selectedFront = saveData.selectedFront || 'west';
            this.turnIndex = saveData.turnIndex || 0;
            document.getElementById('game-log').innerHTML = saveData.logs || '';

            // === GUARD: detect stale save pointing to deleted/missing scenario ===
            if (this.players[this.turnIndex]) {
                const activePlayer = this.players[this.turnIndex];
                this.currentScenarioKey = activePlayer.currentScenarioKey || 'start';
            }

            if (!STORY[this.currentScenarioKey]) {
                // Determine the correct fallback training scenario for this faction
                let fallbackKey;
                if (this.faction === 'de') {
                    fallbackKey = 'de_' + this.selectedFront + '_training';
                } else {
                    fallbackKey = this.faction + '_training';
                }
                // If even the training scenario doesn't exist, fall back to recruitment
                if (!STORY[fallbackKey]) {
                    fallbackKey = this.faction === 'de'
                        ? 'de_' + this.selectedFront + '_recruitment'
                        : this.faction + '_recruitment';
                }
                this.currentScenarioKey = fallbackKey;
                if (this.players[this.turnIndex]) {
                    this.players[this.turnIndex].currentScenarioKey = fallbackKey;
                }
                this.logSystem(`[System] Spielstand wurde aktualisiert – Ausbildung wird neu gestartet.`);
                this.saveGame();
            }

            this.sound.init();
            this.sound.startArtilleryBackground();
            this.updateStats();
            this.updateActivePlayerBanner();

            const activePlayer = this.players[this.turnIndex];
            if (activePlayer && activePlayer.inHQ) {
                this.switchScreen('start-screen', 'hq-screen');
                document.getElementById('btn-hq-heal').disabled = false;
                document.getElementById('btn-hq-replace').disabled = false;
                document.getElementById('hq-status').innerHTML = "";
            } else {
                this.switchScreen('start-screen', 'game-container');
                this.engine.startScenario(STORY[this.currentScenarioKey], this.currentScenarioKey);
            }

        } catch (e) {
            console.error("Fehler beim Laden des Spielstands", e);
            alert("Spielstand veraltet oder beschädigt – bitte starte einen neuen Feldzug.");
            localStorage.removeItem('wk1_savegame');
            this.switchScreen('start-screen', 'char-creator-screen');
        }
    }

    openHOF() {
        document.getElementById('hof-modal').classList.remove('hidden');
        this.renderHOF();
    }

    clearHOF() {
        this.fallenHeroes = [];
        localStorage.removeItem('wk1_fallen_heroes');
        this.renderHOF();
    }

    addFallenHero(player, scenarioTitle) {
        const FACTION_NAMES = {
            'de': 'Deutsches Reich',
            'fr': 'Frankreich',
            'gb': 'Großbritannien',
            'be': 'Belgien',
            'at': 'Österreich-Ungarn',
            'ru': 'Russland',
            'it': 'Italien'
        };

        const factionName = FACTION_NAMES[player.faction] || player.faction;
        const formattedDate = new Date().toLocaleDateString('de-DE') + ' ' + new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });

        const entry = {
            id: Date.now() + '-' + Math.random(),
            name: player.name,
            rank: player.getRank(),
            className: player.className,
            factionName: factionName,
            level: player.level,
            scenario: scenarioTitle,
            regiment: player.regiment || '',
            date: formattedDate
        };

        this.fallenHeroes.push(entry);
        try {
            localStorage.setItem('wk1_fallen_heroes', JSON.stringify(this.fallenHeroes));
        } catch (e) {
            console.error("Fehler beim Speichern der gefallenen Helden", e);
        }
        
        this.logSystem(`✞ ${player.getRank()} ${player.name} wurde auf dem Ehrenfriedhof beigesetzt.`);
    }

    renderHOF() {
        const container = document.getElementById('hof-container');
        container.innerHTML = '';

        if (!this.fallenHeroes || this.fallenHeroes.length === 0) {
            container.innerHTML = `
                <div class="hof-empty">
                    Der Friedhof ist still. Bislang sind keine Soldaten unter deinem Kommando gefallen.
                </div>
            `;
            return;
        }

        // Show latest fallen first
        const sortedHeroes = [...this.fallenHeroes].reverse();

        sortedHeroes.forEach(hero => {
            const plaque = document.createElement('div');
            plaque.className = 'hof-plaque';
            plaque.innerHTML = `
                <div class="hof-plaque-cross">†</div>
                <div class="hof-plaque-details">
                    <div class="hof-plaque-header">
                        <span class="hof-plaque-name">${hero.rank} ${hero.name}</span>
                        <span class="hof-plaque-date">${hero.date}</span>
                    </div>
                    <div class="hof-plaque-sub">
                        ${hero.className} — ${hero.factionName} (Level ${hero.level})
                        ${hero.regiment ? `<br><span style="font-size: 0.9em; opacity: 0.85; font-style: italic;">${hero.regiment}</span>` : ''}
                    </div>
                    <div class="hof-plaque-scenario">
                        Gefallen bei: ${hero.scenario}
                    </div>
                </div>
            `;
            container.appendChild(plaque);
        });
    }

    openHQ(nextScenario) {
        const activePlayer = this.players[this.turnIndex];
        if (activePlayer) {
            activePlayer.inHQ = true;
            activePlayer.nextYearScenario = nextScenario;
        }
        this.switchScreen('game-container', 'hq-screen');
        
        document.getElementById('btn-hq-heal').disabled = false;
        document.getElementById('btn-hq-replace').disabled = false;
        document.getElementById('hq-status').innerHTML = "";
        
        this.saveGame(); // Speichern, sobald man das HQ betritt
    }

    openSkillTree() {
        if (this.players.length === 0) return;
        
        const select = document.getElementById('skill-player-select');
        select.innerHTML = '';
        this.players.forEach(p => {
            select.innerHTML += `<option value="${p.id}">${p.name} (${p.className})</option>`;
        });
        
        document.getElementById('skill-modal').classList.remove('hidden');
        this.renderSkillTree();
    }

    openArmory() {
        document.getElementById('armory-modal').classList.remove('hidden');
        this.renderArmory();
    }

    renderArmory() {
        document.getElementById('supply-points-display').innerText = this.supplyPoints;
        
        const playerSelect = document.getElementById('armory-player-select');
        playerSelect.innerHTML = '';
        
        // Find first alive player as default selection if none selected
        const alivePlayers = this.players.filter(p => !p.isDead);
        if (alivePlayers.length === 0) return;
        
        let selectedPlayerId = playerSelect.dataset.selectedId;
        if (!selectedPlayerId || !alivePlayers.find(p => p.id === selectedPlayerId)) {
            selectedPlayerId = alivePlayers[0].id;
            playerSelect.dataset.selectedId = selectedPlayerId;
        }

        alivePlayers.forEach(p => {
            const btn = document.createElement('button');
            btn.className = `btn ${p.id === selectedPlayerId ? '' : 'btn-secondary'}`;
            btn.style.padding = "5px 10px";
            btn.innerText = p.name;
            btn.onclick = () => {
                playerSelect.dataset.selectedId = p.id;
                this.renderArmory();
            };
            playerSelect.appendChild(btn);
        });

        const selectedPlayer = this.players.find(p => p.id === selectedPlayerId);
        const container = document.getElementById('armory-items-container');
        container.innerHTML = '';

        Object.values(ITEMS).forEach(item => {
            const card = document.createElement('div');
            card.style.border = "1px solid var(--border-color)";
            card.style.padding = "15px";
            card.style.width = "250px";
            card.style.background = "rgba(0,0,0,0.5)";
            
            // Check requirements
            const wrongClass = item.requiresClass && item.requiresClass !== selectedPlayer.classId;
            const wrongFaction = item.requiresFaction && !item.requiresFaction.includes(selectedPlayer.faction);
            const alreadyOwned = selectedPlayer.inventory.includes(item.id);
            const tooManyItems = selectedPlayer.inventory.length >= 6;
            const canAfford = this.supplyPoints >= item.cost;
            const canBuy = !wrongClass && !wrongFaction && !alreadyOwned && !tooManyItems && canAfford;

            let statusHTML = '';
            if (alreadyOwned) {
                statusHTML = '<span style="color: var(--accent-red);">Im Besitz</span>';
            } else if (wrongClass) {
                statusHTML = `<span style="color: #666;">Nur für ${CLASSES[item.requiresClass].name}</span>`;
            } else if (wrongFaction) {
                const factionLabels = { 'at': 'Österreich-Ungarn', 'ru': 'Russland', 'it': 'Italien', 'de': 'Deutsches Reich', 'fr': 'Frankreich', 'gb': 'Großbritannien', 'be': 'Belgien' };
                const label = item.requiresFaction.map(f => factionLabels[f] || f).join(', ');
                statusHTML = `<span style="color: #8b251d; font-size: 0.8em; font-weight: bold;">Nur für: ${label}</span>`;
            } else if (tooManyItems) {
                statusHTML = '<span style="color: #666;">Inventar voll (Max 6)</span>';
            } else if (!canAfford) {
                statusHTML = '<span style="color: #666;">Zu teuer</span>';
            }

            card.innerHTML = `
                <h3 style="color: var(--accent-red); margin-top:0;">${item.name}</h3>
                <p style="font-size: 0.9em;">${item.description}</p>
                <p style="font-weight: bold;">Kosten: ${item.cost} VP</p>
                <div style="margin-top: 10px;">
                    ${statusHTML}
                </div>
            `;

            if (canBuy) {
                const buyBtn = document.createElement('button');
                buyBtn.className = 'btn';
                buyBtn.style.width = "100%";
                buyBtn.style.padding = "5px";
                buyBtn.innerText = "Kaufen";
                buyBtn.onclick = () => {
                    this.supplyPoints -= item.cost;
                    selectedPlayer.inventory.push(item.id);
                    this.saveGame();
                    this.updateStats();
                    this.renderArmory();
                };
                card.appendChild(buyBtn);
            }

            container.appendChild(card);
        });
    }

    renderSkillTree() {
        const playerId = parseInt(document.getElementById('skill-player-select').value);
        const player = this.players.find(p => p.id === playerId);
        if (!player) return;

        document.getElementById('skill-points-display').textContent = `XP: ${player.xp} | Level: ${player.level} (${player.getRank()}) | Skill-Punkte: ${player.skillPoints}`;

        const container = document.getElementById('skill-tree-container');
        container.innerHTML = '';

        const classTree = SKILL_TREE[player.classId];
        if (!classTree) return;

        classTree.paths.forEach(path => {
            const pathDiv = document.createElement('div');
            pathDiv.className = 'skill-path';

            path.forEach(skillId => {
                const skill = classTree.skills[skillId];
                if (!skill) return;

                const node = document.createElement('div');
                
                let stateClass = 'locked';
                if (player.unlockedSkills.includes(skillId)) {
                    stateClass = 'unlocked';
                } else if (!skill.req || player.unlockedSkills.includes(skill.req)) {
                    stateClass = 'available';
                }

                node.className = `skill-node ${stateClass}`;
                node.innerHTML = `
                    <h4>${skill.name}</h4>
                    <div style="font-size: 0.8em; margin-bottom: 10px;">${skill.desc}</div>
                    <div style="font-size: 0.8em; color: var(--text-color);">Kosten: ${skill.cost} SP</div>
                `;

                if (stateClass === 'available') {
                    node.addEventListener('click', () => {
                        if (player.unlockSkill(skillId)) {
                            this.logSystem(`${player.name} hat die Fähigkeit [${skill.name}] erlernt!`);
                            this.updateStats();
                            this.renderSkillTree();
                        } else {
                            alert('Nicht genug Skill-Punkte!');
                        }
                    });
                }

                pathDiv.appendChild(node);
            });

            container.appendChild(pathDiv);
        });
    }

    switchScreen(hideId, showId) {
        document.getElementById(hideId).classList.add('hidden');
        document.getElementById(showId).classList.remove('hidden');
    }

    generateCharForms() {
        const count = parseInt(document.getElementById('player-count').value);
        const globalFaction = document.getElementById('faction-select').value || 'de';
        const container = document.getElementById('player-forms');
        container.innerHTML = '';

        const infoBox = document.getElementById('faction-info-box');
        if (infoBox && HISTORICAL_RECRUITMENT[globalFaction]) {
            infoBox.innerHTML = HISTORICAL_RECRUITMENT[globalFaction];
        }

        const frontSelectGroup = document.getElementById('front-select-group');
        if (frontSelectGroup) {
            if (globalFaction === 'de') {
                frontSelectGroup.classList.remove('hidden');
            } else {
                frontSelectGroup.classList.add('hidden');
            }
        }

        for (let i = 1; i <= count; i++) {
            const playerForm = document.createElement('div');
            playerForm.className = 'player-form';
            playerForm.innerHTML = `
                <h3>Rekrut ${i}</h3>
                <div class="form-group">
                    <label for="p${i}-name">Name:</label>
                    <input type="text" id="p${i}-name" class="input-field" placeholder="Name" value="Soldat ${i}">
                </div>
                <div class="form-group">
                    <label for="p${i}-faction">Fraktion:</label>
                    <select id="p${i}-faction" class="input-field p-faction-select" data-recruit-index="${i}">
                        <option value="de">Deutsches Reich (+1 Waffenschaden)</option>
                        <option value="fr">Frankreich (+5 Maximale Moral)</option>
                        <option value="gb">Großbritannien (+5 Start-XP pro Rekrut)</option>
                        <option value="be">Belgien (1 Punkt automatische Schadensreduktion)</option>
                        <option value="at">Österreich-Ungarn (+15 Start-Versorgungspunkte im HQ)</option>
                        <option value="ru">Russland (+5 Maximale HP pro Rekrut)</option>
                        <option value="it">Italien (+3 Maximale Munition pro Rekrut)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="p${i}-regiment">Regiment:</label>
                    <select id="p${i}-regiment" class="input-field">
                        <!-- Dynamically populated -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="p${i}-class">Klasse:</label>
                    <select id="p${i}-class" class="input-field p-class-select" data-recruit-index="${i}">
                        <option value="infantry">Infanterist (Allrounder an der Front. Ausbalanciert und zäh.)</option>
                        <option value="medic">Sanitäter (Kann im Notfall Verbände anlegen und Moral stärken.)</option>
                        <option value="sniper">Scharfschütze (Tödliche Präzision auf Distanz.)</option>
                        <option value="engineer">Pionier (Meister der Gräben und Sprengstoffe.)</option>
                        <option value="fernmelder">Fernmelder (Spezialist für Signale und Artillerie.)</option>
                        <option value="standschuetze" class="standschuetze-option">Standschütze (Alpinist, nur Österreich-Ungarn.)</option>
                    </select>
                </div>
                <div class="form-group" style="text-align: left; margin-top: 15px;">
                    <label style="font-weight: bold; margin-bottom: 5px; display: block;">Startausrüstung (Max. 2):</label>
                    <div id="p${i}-items-container" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; border: 1px dashed var(--border-color); padding: 10px; background: rgba(0,0,0,0.3); border-radius: 4px;">
                        <!-- Dynamically populated checkboxes -->
                    </div>
                </div>
            `;
            container.appendChild(playerForm);

            const factionSelect = document.getElementById(`p${i}-faction`);
            factionSelect.value = globalFaction;

            const regimentSelect = document.getElementById(`p${i}-regiment`);
            const classSelect = document.getElementById(`p${i}-class`);
            const itemsContainer = document.getElementById(`p${i}-items-container`);

            const updateRegimentSelect = (chosenFaction) => {
                regimentSelect.innerHTML = '';
                const regiments = HISTORICAL_REGIMENTS[chosenFaction] || ["1. Infanterie-Regiment"];
                regiments.forEach(r => {
                    const opt = document.createElement('option');
                    opt.value = r;
                    opt.textContent = r;
                    regimentSelect.appendChild(opt);
                });
            };

            // Populate checkboxes
            STARTING_ITEMS_LIST.forEach(item => {
                const label = document.createElement('label');
                label.style.display = 'flex';
                label.style.alignItems = 'center';
                label.style.fontSize = '0.85em';
                label.style.cursor = 'pointer';
                label.style.gap = '5px';
                label.innerHTML = `
                    <input type="checkbox" name="p${i}-item" value="${item.id}" style="cursor: pointer; accent-color: var(--accent-red);">
                    <span>${item.name}</span>
                `;
                itemsContainer.appendChild(label);
            });

            const updateClassAndItems = () => {
                const chosenFaction = factionSelect.value;
                
                // Show/hide Standschütze class option based on faction
                const standschuetzeOpt = classSelect.querySelector('.standschuetze-option');
                if (chosenFaction === 'at') {
                    standschuetzeOpt.style.display = '';
                } else {
                    standschuetzeOpt.style.display = 'none';
                    if (classSelect.value === 'standschuetze') {
                        classSelect.value = 'infantry';
                    }
                }
                
                const updatedClass = classSelect.value;
                
                // Check how many items are checked
                const checkboxes = itemsContainer.querySelectorAll(`input[name="p${i}-item"]`);
                let checkedCount = 0;
                checkboxes.forEach(cb => {
                    if (cb.checked) checkedCount++;
                });

                checkboxes.forEach(cb => {
                    const itemId = cb.value;
                    const itemData = ITEMS[itemId];
                    let allowed = true;

                    // Class restrictions
                    if (itemData.requiresClass && itemData.requiresClass !== updatedClass) {
                        allowed = false;
                    }
                    // Faction restrictions
                    if (itemData.requiresFaction && !itemData.requiresFaction.includes(chosenFaction)) {
                        allowed = false;
                    }

                    if (!allowed) {
                        cb.checked = false;
                        cb.disabled = true;
                        cb.parentElement.style.opacity = '0.3';
                        cb.parentElement.style.textDecoration = 'line-through';
                    } else {
                        if (checkedCount >= 2 && !cb.checked) {
                            cb.disabled = true;
                            cb.parentElement.style.opacity = '0.5';
                            cb.parentElement.style.textDecoration = 'none';
                        } else {
                            cb.disabled = false;
                            cb.parentElement.style.opacity = '1';
                            cb.parentElement.style.textDecoration = 'none';
                        }
                    }
                });
            };

            // Initial populations
            updateRegimentSelect(globalFaction);
            updateClassAndItems();

            // Listeners
            factionSelect.addEventListener('change', (e) => {
                updateRegimentSelect(e.target.value);
                updateClassAndItems();
            });
            classSelect.addEventListener('change', () => {
                updateClassAndItems();
            });
            itemsContainer.addEventListener('change', (e) => {
                if (e.target.name === `p${i}-item`) {
                    updateClassAndItems();
                }
            });
        }
    }

    startGame() {
        const count = parseInt(document.getElementById('player-count').value);
        // The main campaign faction is determined by Player 1's faction
        this.faction = document.getElementById('p1-faction').value;
        this.supplyPoints = 0;
        this.turnIndex = 0;

        this.players = [];

        for (let i = 1; i <= count; i++) {
            const name = document.getElementById(`p${i}-name`).value || `Soldat ${i}`;
            const playerFaction = document.getElementById(`p${i}-faction`).value;
            const regiment = document.getElementById(`p${i}-regiment`).value;
            const classId = document.getElementById(`p${i}-class`).value;
            
            // Gather selected items
            const itemCheckboxes = document.querySelectorAll(`input[name="p${i}-item"]:checked`);
            const startingItems = Array.from(itemCheckboxes).map(cb => cb.value);

            // Create player with chosen class and individual faction
            const player = new Player(i, name, classId, playerFaction, regiment);
            player.inventory = startingItems;
            
            // Set starting scenario key based on individual faction
            let initialScenarioKey;
            if (playerFaction === 'de') {
                const frontSelect = document.getElementById('front-select');
                const selectedFront = frontSelect ? frontSelect.value : 'west';
                initialScenarioKey = 'de_' + selectedFront + '_recruitment';
            } else {
                initialScenarioKey = playerFaction + '_recruitment';
            }
            player.currentScenarioKey = initialScenarioKey;
            player.inHQ = false;

            if (playerFaction === 'gb') {
                player.gainXp(5); // GB XP Bonus
            }
            this.players.push(player);
        }

        // Austria-Hungary VP Bonus: if any player in the group is from AT, grant +15 starting VP
        if (this.players.some(p => p.faction === 'at')) {
            this.supplyPoints = 15;
        }

        this.engine.setPlayers(this.players);
        this.updateStats();
        this.updateActivePlayerBanner();

        this.switchScreen('char-creator-screen', 'game-container');
        this.sound.init();
        this.sound.startArtilleryBackground();
        this.logSystem("System initialisiert. Verbindung zur Front steht.");
        
        const activePlayer = this.players[0];
        this.currentScenarioKey = activePlayer.currentScenarioKey;
        this.saveGame();

        setTimeout(() => {
            this.engine.startScenario(STORY[this.currentScenarioKey], this.currentScenarioKey);
        }, 1000);
    }

    updateStats() {
        this.statsPanel.innerHTML = '';
        this.players.forEach(p => {
            let statusText = p.isDead ? '<span style="color:red">GEFALLEN</span>' : 'Aktiv';
            
            let inventoryHtml = '<div style="margin-top: 10px;"><div style="font-size: 0.8em; font-weight: bold; margin-bottom: 5px; color: #9b8e7d;">Ausrüstung:</div><div class="inventory-grid">';
            for (let i = 0; i < 6; i++) {
                const itemId = p.inventory[i];
                if (itemId && ITEMS[itemId]) {
                    inventoryHtml += `<div class="inventory-slot filled" title="${ITEMS[itemId].name}: ${ITEMS[itemId].description}">${ITEMS[itemId].name}</div>`;
                } else {
                    inventoryHtml += `<div class="inventory-slot empty">[Leer]</div>`;
                }
            }
            inventoryHtml += '</div></div>';

            const card = document.createElement('div');
            const isActive = this.players[this.turnIndex]?.id === p.id;
            card.className = 'player-card' + (isActive ? ' active' : '');
            card.innerHTML = `
                <h3>${p.getRank()} ${p.name} <br><span style="font-size: 0.7em;">(${p.className})</span></h3>
                <div style="font-size: 0.85em; margin-bottom: 8px; color: var(--accent-green); font-style: italic; font-family: var(--font-text);">${p.regiment || ''}</div>
                <div style="font-size: 0.9em; margin-bottom: 5px;">Status: ${statusText}</div>
                
                <div>HP: ${p.hp}/${p.maxHp}</div>
                <div class="stat-bar-container"><div class="stat-bar hp-bar" style="width: ${p.getHpPercentage()}%"></div></div>
                
                <div>Moral: ${p.morale}/${p.maxMorale}</div>
                <div class="stat-bar-container"><div class="stat-bar morale-bar" style="width: ${p.getMoralePercentage()}%"></div></div>
                
                <div>Ammo: ${p.ammo}/${p.maxAmmo}</div>
                <div class="stat-bar-container"><div class="stat-bar ammo-bar" style="width: ${p.getAmmoPercentage()}%"></div></div>

                ${inventoryHtml}
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
        
        if (this.typewriterInterval) {
            clearInterval(this.typewriterInterval);
        }
        
        // Play typewriter sound ticks synchronized with CSS animation (2s / 40 steps = 50ms)
        let ticks = 0;
        const maxTicks = 40;
        this.typewriterInterval = setInterval(() => {
            this.sound.playTypewriterTick();
            ticks++;
            if (ticks >= maxTicks) {
                clearInterval(this.typewriterInterval);
                this.typewriterInterval = null;
            }
        }, 50);

        // Remove typewriter effect after animation to allow wrapping
        setTimeout(() => {
            entry.classList.remove('typewriter-text');
            entry.style.borderRight = 'none';
            entry.style.whiteSpace = 'normal';
            if (ticks >= maxTicks && this.typewriterInterval) {
                clearInterval(this.typewriterInterval);
                this.typewriterInterval = null;
            }
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

    cycleTurn() {
        // Save game state
        this.saveGame();

        // Find next alive player
        const startIdx = this.turnIndex;
        let nextIdx = (this.turnIndex + 1) % this.players.length;
        
        while (this.players[nextIdx].isDead && nextIdx !== startIdx) {
            nextIdx = (nextIdx + 1) % this.players.length;
        }

        if (this.players[nextIdx].isDead) {
            this.logSystem("Alle Rekruten sind gefallen. Das Oberkommando schickt Beileidsbekundungen.");
            return;
        }

        this.turnIndex = nextIdx;
        this.updateStats(); // Highlight active player's card
        this.updateActivePlayerBanner(); // Render active player banner

        const activePlayer = this.players[this.turnIndex];
        this.currentScenarioKey = activePlayer.currentScenarioKey;
        
        if (activePlayer.inHQ) {
            this.nextYearScenario = activePlayer.nextYearScenario;
            this.switchScreen('game-container', 'hq-screen');
            document.getElementById('btn-hq-heal').disabled = false;
            document.getElementById('btn-hq-replace').disabled = false;
            document.getElementById('hq-status').innerHTML = "";
        } else {
            this.switchScreen('hq-screen', 'game-container');
            this.engine.startScenario(STORY[activePlayer.currentScenarioKey], activePlayer.currentScenarioKey);
        }
    }

    updateActivePlayerBanner() {
        const banner = document.getElementById('active-player-banner');
        if (!banner) return;
        const activePlayer = this.players[this.turnIndex];
        if (!activePlayer) {
            banner.classList.add('hidden');
            return;
        }
        banner.classList.remove('hidden');
        const factionNames = {
            'de': 'Deutsches Reich',
            'fr': 'Frankreich',
            'gb': 'Großbritannien',
            'be': 'Belgien',
            'at': 'Österreich-Ungarn',
            'ru': 'Russland',
            'it': 'Italien'
        };
        const factionName = factionNames[activePlayer.faction] || activePlayer.faction;
        const className = CLASSES[activePlayer.classId] ? CLASSES[activePlayer.classId].name : activePlayer.className;
        banner.innerHTML = `
            <div class="banner-inner">
                <span class="active-tag">AKTIVER SPIELER:</span>
                <strong class="player-name">${activePlayer.name}</strong> 
                <span class="player-details">(${factionName} • ${className} • ${activePlayer.regiment})</span>
            </div>
        `;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.gameUI = new UIController();
});
