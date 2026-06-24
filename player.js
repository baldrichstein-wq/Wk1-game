// player.js

export const RANKS = [
    "Schütze",          // Level 1-5
    "Gefreiter",        // Level 6-10
    "Unteroffizier",    // Level 11-15
    "Sergeant",         // Level 16-20
    "Vizefeldwebel",    // Level 21-25
    "Feldwebel",        // Level 26-30
    "Hauptmann"         // Level 31+
];

export const SKILL_TREE = {
    infantry: {
        paths: [
            ['inf_vitality', 'inf_veteran', 'inf_iron_skin'], 
            ['inf_bravery', 'inf_leadership', 'inf_heroism']
        ],
        skills: {
            inf_vitality: { id: 'inf_vitality', name: 'Zähigkeit', desc: 'Erhöht maximale HP um +5', cost: 1, req: null },
            inf_veteran: { id: 'inf_veteran', name: 'Kriegsveteran', desc: 'Erhöht maximale HP um +10', cost: 2, req: 'inf_vitality' },
            inf_iron_skin: { id: 'inf_iron_skin', name: 'Stahlhaut', desc: 'Erhöht maximale HP um +15', cost: 3, req: 'inf_veteran' },
            inf_bravery: { id: 'inf_bravery', name: 'Eiserner Wille', desc: 'Erhöht maximale Moral um +5', cost: 1, req: null },
            inf_leadership: { id: 'inf_leadership', name: 'Führung', desc: 'Moral sinkt langsamer', cost: 1, req: 'inf_bravery' },
            inf_heroism: { id: 'inf_heroism', name: 'Heldentum', desc: 'Waffenschaden +1 und max. Moral +10', cost: 3, req: 'inf_leadership' }
        }
    },
    medic: {
        paths: [
            ['med_first_aid', 'med_surgeon', 'med_miracle_worker'],
            ['med_morphine', 'med_triage', 'med_field_hospital']
        ],
        skills: {
            med_first_aid: { id: 'med_first_aid', name: 'Erste Hilfe', desc: 'Erhöht maximale HP um +3', cost: 1, req: null },
            med_surgeon: { id: 'med_surgeon', name: 'Feldchirurg', desc: 'Erhöht maximale HP um +8', cost: 2, req: 'med_first_aid' },
            med_miracle_worker: { id: 'med_miracle_worker', name: 'Wundertäter', desc: 'Erhöht maximale HP um +12', cost: 3, req: 'med_surgeon' },
            med_morphine: { id: 'med_morphine', name: 'Morphium', desc: 'Erhöht maximale Moral um +5', cost: 1, req: null },
            med_triage: { id: 'med_triage', name: 'Triage', desc: 'Gibt +3 HP passiv', cost: 1, req: 'med_morphine' },
            med_field_hospital: { id: 'med_field_hospital', name: 'Feldlazarett', desc: 'Erhöht maximale Moral um +15', cost: 3, req: 'med_triage' }
        }
    },
    sniper: {
        paths: [
            ['sni_eagle', 'sni_marksman', 'sni_deadly_aim'],
            ['sni_camo', 'sni_ghost', 'sni_assassin']
        ],
        skills: {
            sni_eagle: { id: 'sni_eagle', name: 'Adlerauge', desc: 'Erhöht Munition um +5', cost: 1, req: null },
            sni_marksman: { id: 'sni_marksman', name: 'Meisterschütze', desc: 'Erhöht Munition um +10', cost: 2, req: 'sni_eagle' },
            sni_deadly_aim: { id: 'sni_deadly_aim', name: 'Tödliches Ziel', desc: 'Waffenschaden permanent +2', cost: 3, req: 'sni_marksman' },
            sni_camo: { id: 'sni_camo', name: 'Tarnung', desc: 'Erhöht maximale Moral um +3', cost: 1, req: null },
            sni_ghost: { id: 'sni_ghost', name: 'Geist', desc: 'Erhöht HP um +5 durch Ausweichen', cost: 2, req: 'sni_camo' },
            sni_assassin: { id: 'sni_assassin', name: 'Attentäter', desc: 'Schadensreduktion +1, max. Moral +5', cost: 3, req: 'sni_ghost' }
        }
    },
    engineer: {
        paths: [
            ['eng_trench', 'eng_fortify', 'eng_bunker'],
            ['eng_explosives', 'eng_demolition', 'eng_pyromaniac']
        ],
        skills: {
            eng_trench: { id: 'eng_trench', name: 'Grabenbau', desc: 'Erhöht maximale HP um +5', cost: 1, req: null },
            eng_fortify: { id: 'eng_fortify', name: 'Befestigung', desc: 'Erhöht maximale HP um +8', cost: 2, req: 'eng_trench' },
            eng_bunker: { id: 'eng_bunker', name: 'Bunkerbauer', desc: 'Schadensreduktion +1, max. HP +5', cost: 3, req: 'eng_fortify' },
            eng_explosives: { id: 'eng_explosives', name: 'Sprengstoffe', desc: 'Erhöht Munition um +5', cost: 1, req: null },
            eng_demolition: { id: 'eng_demolition', name: 'Zerstörungsexperte', desc: 'Moral +5 bei Explosionen', cost: 1, req: 'eng_explosives' },
            eng_pyromaniac: { id: 'eng_pyromaniac', name: 'Feuerteufel', desc: 'Erhöht Munition um +15 und Moral +5', cost: 3, req: 'eng_demolition' }
        }
    },
    fernmelder: {
        paths: [
            ['sig_cable', 'sig_radio', 'sig_intercept'],
            ['art_coords', 'art_spotting', 'art_support']
        ],
        skills: {
            sig_cable: { id: 'sig_cable', name: 'Kabeltrupp', desc: 'Erhöht maximale HP um +4', cost: 1, req: null },
            sig_radio: { id: 'sig_radio', name: 'Funkstelle', desc: 'Erhöht maximale Moral um +8', cost: 2, req: 'sig_cable' },
            sig_intercept: { id: 'sig_intercept', name: 'Abhörstation', desc: 'Schadensreduktion +1, max. HP +5', cost: 3, req: 'sig_radio' },
            art_coords: { id: 'art_coords', name: 'Feuerkoordinaten', desc: 'Erhöht maximale Moral um +4', cost: 1, req: null },
            art_spotting: { id: 'art_spotting', name: 'Zielansprache', desc: 'Erhöht maximale Munition um +5', cost: 2, req: 'art_coords' },
            art_support: { id: 'art_support', name: 'Sperrfeuer-Anforderung', desc: 'Waffenschaden permanent +2', cost: 3, req: 'art_spotting' }
        }
    },
    standschuetze: {
        paths: [
            ['sta_alpine', 'sta_climbing', 'sta_summit'],
            ['sta_shelter', 'sta_fortress', 'sta_bunker']
        ],
        skills: {
            sta_alpine: { id: 'sta_alpine', name: 'Alpinist', desc: 'Erhöht maximale HP um +4', cost: 1, req: null },
            sta_climbing: { id: 'sta_climbing', name: 'Bergsteiger', desc: 'Erhöht maximale HP um +6', cost: 2, req: 'sta_alpine' },
            sta_summit: { id: 'sta_summit', name: 'Gipfelstürmer', desc: 'Erhöht Waffenschaden um +1 und HP um +5', cost: 3, req: 'sta_climbing' },
            sta_shelter: { id: 'sta_shelter', name: 'Unterstand', desc: 'Erhöht maximale Moral um +5', cost: 1, req: null },
            sta_fortress: { id: 'sta_fortress', name: 'Feste Stellung', desc: 'Schadensreduktion +1, max. HP +4', cost: 2, req: 'sta_shelter' },
            sta_bunker: { id: 'sta_bunker', name: 'Felsbunker', desc: 'Schadensreduktion +1, max. HP +6', cost: 3, req: 'sta_fortress' }
        }
    }
};

export const CLASSES = {
    recruit: {
        name: "Rekrut",
        hp: 20, maxHp: 20,
        morale: 15, maxMorale: 15,
        ammo: 8, maxAmmo: 8,
        desc: "Unausgebildeter Soldat. Klasse wird durch die Grundausbildung vergeben."
    },
    infantry: {
        name: "Infanterist",
        hp: 20, maxHp: 20,
        morale: 15, maxMorale: 15,
        ammo: 10, maxAmmo: 10,
        desc: "Allrounder an der Front. Ausbalanciert und zäh."
    },
    medic: {
        name: "Sanitäter",
        hp: 15, maxHp: 15,
        morale: 18, maxMorale: 18,
        ammo: 5, maxAmmo: 5,
        desc: "Kann im Notfall Verbände anlegen und die Moral stärken."
    },
    sniper: {
        name: "Scharfschütze",
        hp: 12, maxHp: 12,
        morale: 12, maxMorale: 12,
        ammo: 15, maxAmmo: 15,
        desc: "Tödliche Präzision auf Distanz, aber empfindlich im Nahkampf."
    },
    engineer: {
        name: "Pionier",
        hp: 18, maxHp: 18,
        morale: 14, maxMorale: 14,
        ammo: 8, maxAmmo: 8,
        desc: "Meister der Gräben und Sprengstoffe."
    },
    fernmelder: {
        name: "Fernmelder",
        hp: 16, maxHp: 16,
        morale: 16, maxMorale: 16,
        ammo: 8, maxAmmo: 8,
        desc: "Spezialist für Feldtelefone, Signale und Artilleriekoordination."
    },
    standschuetze: {
        name: "Standschütze",
        hp: 18, maxHp: 18,
        morale: 16, maxMorale: 16,
        ammo: 10, maxAmmo: 10,
        desc: "Tiroler Heimatschütze. Exzellenter Bergsteiger und Stellungserbauer.",
        requiresFaction: ['at']
    }
};

export class Player {
    constructor(id, name, classId = 'recruit', faction = 'de', regiment = '') {
        this.id = id;
        this.name = name;
        this.faction = faction;
        this.regiment = regiment;
        this.currentScenarioKey = null;
        this.inHQ = false;
        
        // Base stats (all recruits start equal)
        this.maxHp = 20;
        this.maxMorale = 50;
        this.maxAmmo = 8;
        this.damageReduction = 0;
        this.bonusDamage = 0;

        // Apply faction bonuses
        if (this.faction === 'fr') this.maxMorale += 5;
        if (this.faction === 'ru') this.maxHp += 5;
        if (this.faction === 'be') this.damageReduction += 1;
        if (this.faction === 'de') this.bonusDamage += 1;

        this.hp = this.maxHp;
        this.morale = this.maxMorale;
        if (this.faction === 'it') this.maxAmmo += 3;
        this.ammo = this.maxAmmo;
        
        // XP und Skills
        this.xp = 0;
        this.level = 1;
        this.skillPoints = 0;
        this.unlockedSkills = [];
        this.inventory = [];
        this.isDead = false;

        // Class is assigned after training
        this.setClass(classId);
    }

    /**
     * Assign or change the player's class.
     * Applies class-specific stat adjustments relative to base recruit stats.
     */
    setClass(classId) {
        const classData = CLASSES[classId];
        if (!classData) return;
        const wasRecruit = this.classId === 'recruit' || !this.classId;
        this.classId = classId;
        this.className = classData.name;

        if (classId === 'recruit') return; // No extra stats for recruits

        // Apply class-specific ammo
        this.maxAmmo = classData.maxAmmo;
        if (this.faction === 'it') this.maxAmmo += 3;
        this.ammo = Math.min(this.ammo, this.maxAmmo); // Don't exceed new max
        if (wasRecruit) this.ammo = this.maxAmmo;
    }

    static fromJSON(json) {
        const p = new Player(json.id, json.name, json.classId || 'recruit', json.faction, json.regiment);
        p.hp = json.hp;
        p.maxHp = json.maxHp;
        p.morale = json.morale;
        p.maxMorale = json.maxMorale;
        p.ammo = json.ammo;
        p.maxAmmo = json.maxAmmo;
        p.isDead = json.isDead;
        p.xp = json.xp || 0;
        p.level = json.level || 1;
        p.skillPoints = json.skillPoints || 0;
        p.unlockedSkills = json.unlockedSkills || [];
        p.inventory = json.inventory || [];
        p.damageReduction = json.damageReduction || 0;
        p.bonusDamage = json.bonusDamage || 0;
        p.currentScenarioKey = json.currentScenarioKey || null;
        p.inHQ = json.inHQ || false;
        return p;
    }

    gainXp(amount) {
        if (this.isDead) return false;
        this.xp += amount;
        
        // Sehr simple Level-Kurve: Level 2 bei 10 XP, Level 3 bei 30, Level 4 bei 60...
        const nextLevelXp = this.level * 10;
        if (this.xp >= nextLevelXp) {
            this.xp -= nextLevelXp;
            this.levelUp();
            return true; // True signalisiert "Level Up!"
        }
        return false;
    }

    levelUp() {
        this.level++;
        this.skillPoints++;
        // Man könnte auch automatisch HP heilen etc.
    }

    getRank() {
        let rankIndex = Math.floor((this.level - 1) / 5);
        if (rankIndex >= RANKS.length) rankIndex = RANKS.length - 1;
        return RANKS[rankIndex];
    }

    unlockSkill(skillId) {
        if (this.skillPoints > 0 && !this.unlockedSkills.includes(skillId)) {
            const classTree = SKILL_TREE[this.classId];
            if (!classTree) return false;
            
            const skill = classTree.skills[skillId];
            if (!skill) return false;

            // Check reqs
            if (!skill.req || this.unlockedSkills.includes(skill.req)) {
                this.skillPoints -= skill.cost;
                this.unlockedSkills.push(skillId);
                this.applySkillEffects(skillId);
                return true;
            }
        }
        return false;
    }

    applySkillEffects(skillId) {
        switch (skillId) {
            case 'inf_vitality': case 'eng_trench': case 'sni_ghost': case 'eng_bunker': case 'sig_intercept': case 'sta_summit':
                this.maxHp += 5; this.hp += 5; break;
            case 'inf_veteran':
                this.maxHp += 10; this.hp += 10; break;
            case 'med_first_aid': case 'med_triage':
                this.maxHp += 3; this.hp += 3; break;
            case 'med_surgeon': case 'eng_fortify':
                this.maxHp += 8; this.hp += 8; break;
            case 'inf_iron_skin':
                this.maxHp += 15; this.hp += 15; break;
            case 'med_miracle_worker':
                this.maxHp += 12; this.hp += 12; break;
            case 'sig_cable': case 'sta_alpine': case 'sta_fortress':
                this.maxHp += 4; this.hp += 4; break;
            case 'sta_climbing': case 'sta_bunker':
                this.maxHp += 6; this.hp += 6; break;

            case 'inf_bravery': case 'med_morphine': case 'eng_demolition': case 'sni_assassin': case 'eng_pyromaniac': case 'sta_shelter':
                this.maxMorale += 5; this.morale += 5; break;
            case 'sni_camo':
                this.maxMorale += 3; this.morale += 3; break;
            case 'inf_heroism':
                this.maxMorale += 10; this.morale += 10; break;
            case 'med_field_hospital':
                this.maxMorale += 15; this.morale += 15; break;
            case 'sig_radio':
                this.maxMorale += 8; this.morale += 8; break;
            case 'art_coords':
                this.maxMorale += 4; this.morale += 4; break;

            case 'sni_eagle': case 'eng_explosives': case 'art_spotting':
                this.maxAmmo += 5; this.ammo += 5; break;
            case 'sni_marksman':
                this.maxAmmo += 10; this.ammo += 10; break;

            case 'sni_deadly_aim': case 'art_support':
                this.bonusDamage += 2; break;
        }

        // Secondary effects
        if (skillId === 'inf_heroism' || skillId === 'sta_summit') this.bonusDamage += 1;
        if (skillId === 'sni_assassin' || skillId === 'eng_bunker' || skillId === 'sig_intercept' || skillId === 'sta_fortress' || skillId === 'sta_bunker') this.damageReduction += 1;
        if (skillId === 'eng_pyromaniac') { this.maxAmmo += 15; this.ammo += 15; }
    }

    takeDamage(amount) {
        this.hp -= amount;
        if (this.hp <= 0) {
            this.hp = 0;
            this.isDead = true;
        }
    }

    heal(amount) {
        if (this.isDead) return;
        this.hp += amount;
        if (this.hp > this.maxHp) this.hp = this.maxHp;
    }

    changeMorale(amount) {
        if (this.isDead) return;
        this.morale += amount;
        if (this.morale > this.maxMorale) this.morale = this.maxMorale;
        if (this.morale < 0) this.morale = 0; // Bei Moral 0 droht Panik
    }
    
    useAmmo(amount) {
        if (this.ammo >= amount) {
            this.ammo -= amount;
            return true;
        }
        return false;
    }

    getHpPercentage() {
        return (this.hp / this.maxHp) * 100;
    }

    getMoralePercentage() {
        return (this.morale / this.maxMorale) * 100;
    }
    
    getAmmoPercentage() {
        return (this.ammo / this.maxAmmo) * 100;
    }
}
