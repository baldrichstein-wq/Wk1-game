// player.js

export const CLASSES = {
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
    }
};

export class Player {
    constructor(id, name, charClassId) {
        this.id = id;
        this.name = name;
        this.classId = charClassId;
        const classData = CLASSES[charClassId];
        this.className = classData.name;
        
        this.hp = classData.hp;
        this.maxHp = classData.maxHp;
        this.morale = classData.morale;
        this.maxMorale = classData.maxMorale;
        this.ammo = classData.ammo;
        this.maxAmmo = classData.maxAmmo;
        
        this.isDead = false;
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
