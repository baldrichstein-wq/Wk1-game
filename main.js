import { Player, CLASSES, SKILL_TREE } from './player.js';
import { GameEngine } from './gameEngine.js';
import { STORY } from './story.js';
import { ITEMS } from './items.js';
import { SoundEngine } from './audio.js';

export const HISTORICAL_REGIMENTS = {
    'de': [
        "1. Garde-Regiment zu Fuß",
        "Infanterie-Regiment Nr. 120",
        "2. Thüringer Infanterie-Regiment Nr. 95",
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

        this.submitBtn.addEventListener('click', () => {
            this.handleInput();
        });

        this.inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleInput();
            }
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
            const hasCannedFood = this.players.some(p => p.inventory && p.inventory.includes('canned_food'));
            this.players.forEach(p => {
                if (!p.isDead) {
                    const hpGain = 5 + (hasCannedFood ? 3 : 0);
                    const moraleGain = 2 + (hasCannedFood ? 1 : 0);
                    p.hp = Math.min(p.maxHp, p.hp + hpGain);
                    p.changeMorale(moraleGain);
                }
            });
            this.updateStats();
            let statusText = "Alle lebenden Rekruten wurden versorgt. HP und Moral erhöht.";
            if (hasCannedFood) {
                statusText += " (Bonus durch Eiserne Rationen!)";
            }
            document.getElementById('hq-status').innerHTML = `<em>${statusText}</em>`;
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
            this.switchScreen('hq-screen', 'game-container');
            if (this.nextYearScenario) {
                this.engine.startScenario(STORY[this.nextYearScenario], this.nextYearScenario);
            }
        });
    }

    saveGame() {
        if (this.players.length === 0) return;
        const saveData = {
            players: this.players,
            currentScenarioKey: this.currentScenarioKey,
            nextYearScenario: this.nextYearScenario,
            supplyPoints: this.supplyPoints,
            faction: this.faction,
            selectedFront: this.selectedFront,
            inHQ: document.getElementById('hq-screen').classList.contains('hidden') === false,
            logs: document.getElementById('game-log').innerHTML
        };
        localStorage.setItem('wk1_savegame', JSON.stringify(saveData));
    }

    loadGame() {
        const savedDataStr = localStorage.getItem('wk1_savegame');
        if (!savedDataStr) return;

        try {
            const saveData = JSON.parse(savedDataStr);
            
            // Restore players
            this.players = saveData.players.map(p => Player.fromJSON(p));
            this.engine.players = this.players; // Update engine reference
            
            // Restore state
            this.currentScenarioKey = saveData.currentScenarioKey || 'start';
            this.nextYearScenario = saveData.nextYearScenario || null;
            this.supplyPoints = saveData.supplyPoints || 0;
            this.faction = saveData.faction || 'de';
            this.selectedFront = saveData.selectedFront || 'west';
            document.getElementById('game-log').innerHTML = saveData.logs || '';
            
            this.updateStats();

            // Resume correctly
            if (saveData.inHQ) {
                this.switchScreen('start-screen', 'hq-screen');
                // Re-enable buttons if needed
                document.getElementById('btn-hq-heal').disabled = false;
                document.getElementById('btn-hq-replace').disabled = false;
            } else {
                this.switchScreen('start-screen', 'game-container');
                // We only need to start the scenario if we are in game
                this.engine.startScenario(STORY[this.currentScenarioKey], this.currentScenarioKey);
            }
            
        } catch (e) {
            console.error("Fehler beim Laden des Spielstands", e);
            alert("Fehler beim Laden des Spielstands. Beginne einen neuen Feldzug.");
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
        this.nextYearScenario = nextScenario;
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
            const tooManyItems = selectedPlayer.inventory.length >= 2;
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
                statusHTML = '<span style="color: #666;">Inventar voll (Max 2)</span>';
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
        const faction = document.getElementById('faction-select').value || 'de';
        const container = document.getElementById('player-forms');
        container.innerHTML = '';

        const infoBox = document.getElementById('faction-info-box');
        if (infoBox && HISTORICAL_RECRUITMENT[faction]) {
            infoBox.innerHTML = HISTORICAL_RECRUITMENT[faction];
        }

        const frontSelectGroup = document.getElementById('front-select-group');
        if (frontSelectGroup) {
            if (faction === 'de') {
                frontSelectGroup.classList.remove('hidden');
            } else {
                frontSelectGroup.classList.add('hidden');
            }
        }

        let classOptions = '';
        for (const [key, val] of Object.entries(CLASSES)) {
            if (!val.requiresFaction || val.requiresFaction.includes(faction)) {
                classOptions += `<option value="${key}">${val.name}</option>`;
            }
        }

        const regiments = HISTORICAL_REGIMENTS[faction] || ["1. Infanterie-Regiment"];
        let regimentOptions = '';
        regiments.forEach(r => {
            regimentOptions += `<option value="${r}">${r}</option>`;
        });

        for (let i = 1; i <= count; i++) {
            const formHtml = `
                <div class="player-form">
                    <h3>Rekrut ${i}</h3>
                    <div class="form-group">
                        <label for="p${i}-name">Name:</label>
                        <input type="text" id="p${i}-name" class="input-field" placeholder="Name" value="Soldat ${i}">
                    </div>
                    <div class="form-group">
                        <label for="p${i}-class">Ausbildung (Klasse):</label>
                        <select id="p${i}-class" class="input-field">
                            ${classOptions}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="p${i}-regiment">Regiment:</label>
                        <select id="p${i}-regiment" class="input-field">
                            ${regimentOptions}
                        </select>
                    </div>
                </div>
            `;
            container.innerHTML += formHtml;
        }
    }

    startGame() {
        const count = parseInt(document.getElementById('player-count').value);
        this.faction = document.getElementById('faction-select').value;
        this.supplyPoints = 0;
        
        if (this.faction === 'at') {
            this.supplyPoints = 15; // Austria-Hungary VP Bonus
        }

        this.players = [];

        for (let i = 1; i <= count; i++) {
            const name = document.getElementById(`p${i}-name`).value || `Soldat ${i}`;
            const classId = document.getElementById(`p${i}-class`).value;
            const regiment = document.getElementById(`p${i}-regiment`).value;
            const player = new Player(i, name, classId, this.faction, regiment);
            if (this.faction === 'gb') {
                player.gainXp(5); // GB XP Bonus
            }
            this.players.push(player);
        }

        this.engine.setPlayers(this.players);
        this.updateStats();

        this.switchScreen('char-creator-screen', 'game-container');
        this.sound.init();
        this.sound.startArtilleryBackground();
        this.logSystem("System initialisiert. Verbindung zur Front steht.");
        
        this.currentScenarioKey = this.faction + '_start';
        if (this.faction === 'de') {
            this.selectedFront = document.getElementById('front-select').value || 'west';
            this.currentScenarioKey = 'de_' + this.selectedFront + '_start';
        }
        this.saveGame();

        setTimeout(() => {
            this.engine.startScenario(STORY[this.currentScenarioKey], this.currentScenarioKey);
        }, 1000);
    }

    updateStats() {
        this.statsPanel.innerHTML = '';
        this.players.forEach(p => {
            let statusText = p.isDead ? '<span style="color:red">GEFALLEN</span>' : 'Aktiv';
            
            let inventoryHtml = '';
            if (p.inventory && p.inventory.length > 0) {
                const itemNames = p.inventory.map(id => ITEMS[id] ? ITEMS[id].name : id).join(', ');
                inventoryHtml = `<div style="font-size: 0.8em; margin-top: 10px; color: var(--accent-red); font-weight: bold;">[${itemNames}]</div>`;
            }

            const card = document.createElement('div');
            card.className = 'player-card';
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
        
        // Play typewriter sound ticks synchronized with CSS animation (2s / 40 steps = 50ms)
        let ticks = 0;
        const maxTicks = 40;
        const tickInterval = setInterval(() => {
            this.sound.playTypewriterTick();
            ticks++;
            if (ticks >= maxTicks) clearInterval(tickInterval);
        }, 50);

        // Remove typewriter effect after animation to allow wrapping
        setTimeout(() => {
            entry.classList.remove('typewriter-text');
            entry.style.borderRight = 'none';
            entry.style.whiteSpace = 'normal';
            clearInterval(tickInterval); // safeguard
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
