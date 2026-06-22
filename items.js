export const ITEMS = {
    trench_knife: {
        id: 'trench_knife',
        name: 'Grabendolch',
        cost: 15,
        description: 'Eine tödliche Nahkampfwaffe. Reduziert erlittenen Schaden in Nahkampf-Szenarien leicht (-2 Schaden).',
        effect: { reduceDamage: 2 },
        requiresClass: null
    },
    gasmask: {
        id: 'gasmask',
        name: 'Verbesserte Gasmaske',
        cost: 25,
        description: 'Ein Wunder der Technik. Reduziert Schaden durch Giftgas um 50%.',
        effect: { gasProtection: 0.5 },
        requiresClass: null
    },
    heavy_armor: {
        id: 'heavy_armor',
        name: 'Grabenpanzer (Sappenpanzer)',
        cost: 30,
        description: 'Schwere Stahlplatten. Reduziert sämtlichen erlittenen Schaden um 3, verringert aber die Beweglichkeit.',
        effect: { reduceDamageAll: 3 },
        requiresClass: null
    },
    scoped_rifle: {
        id: 'scoped_rifle',
        name: 'Scharfschützengewehr mit Zielfernrohr',
        cost: 40,
        description: 'Extrem präzise. Erhöht die gewonnene XP bei erfolgreichen Aufklärungs- und Scharfschützen-Aktionen.',
        effect: { bonusXp: 10 },
        requiresClass: 'sniper'
    },
    medical_kit: {
        id: 'medical_kit',
        name: 'Großer Sanitätskoffer',
        cost: 35,
        description: 'Vollgepackt mit Morphium und Verbänden. Erhöht die Moral der gesamten Truppe leicht, wenn der Sanitäter überlebt.',
        effect: { passiveMorale: 2 },
        requiresClass: 'medic'
    },
    steel_spade: {
        id: 'steel_spade',
        name: 'Verstärkter Pionierspaten',
        cost: 20,
        description: 'Perfekt zum schnellen Eingraben. Pioniere erleiden weniger Schaden bei Artillerieangriffen.',
        effect: { artilleryProtection: 4 },
        requiresClass: 'engineer'
    },
    officer_whistle: {
        id: 'officer_whistle',
        name: 'Offizierspfeife',
        cost: 25,
        description: 'Nur für mutige Infanteristen. Schützt die Gruppe vor hohem Moralverlust bei Befehlsverweigerungen oder Rückzügen.',
        effect: { reduceMoraleLoss: 3 },
        requiresClass: 'infantry'
    },
    field_telephone: {
        id: 'field_telephone',
        name: 'Feldtelefon M16',
        cost: 30,
        description: 'Ermöglicht ständigen Kontakt zum Stab. Erhöht die gewonnene XP bei erfolgreichen Aktionen für den Fernmelder.',
        effect: { bonusXp: 8 },
        requiresClass: 'fernmelder'
    },
    periscope: {
        id: 'periscope',
        name: 'Grabenperiskop',
        cost: 15,
        description: 'Erlaubt das sichere Beobachten aus der Deckung. Reduziert erlittenen Schaden um 1.',
        effect: { reduceDamage: 1 },
        requiresClass: null
    },
    canned_food: {
        id: 'canned_food',
        name: 'Eiserne Ration (Konserven)',
        cost: 20,
        description: 'Nahrhafter Proviant. Heilt im HQ zusätzliche +3 HP und erhöht Moral um +1 bei einer Rast.',
        effect: { bonusHqHeal: 3 },
        requiresClass: null
    },
    wire_cutters: {
        id: 'wire_cutters',
        name: 'Drahtschere',
        cost: 20,
        description: 'Hilft beim schnellen Überwinden von Stacheldraht. Reduziert erlittenen Schaden um 2.',
        effect: { reduceDamage: 2 },
        requiresClass: null
    },
    winter_gear: {
        id: 'winter_gear',
        name: 'Winterausrüstung',
        cost: 25,
        description: 'Warmer Pelzmantel und gefütterte Stiefel. Schützt vor extremer Kälte in den Alpen, Karpaten oder dem russischen Winter. Reduziert jeglichen erlittenen Schaden um 2.',
        effect: { reduceDamage: 2 },
        requiresClass: null,
        requiresFaction: ['at', 'ru', 'it']
    },
    climbing_gear: {
        id: 'climbing_gear',
        name: 'Bergsteiger-Ausrüstung',
        cost: 25,
        description: 'Seile, Steigeisen und Eispickel. Erleichtert das Überwinden von Gestein und Eis. Reduziert erlittenen Schaden um 2. Nur für Standschützen.',
        effect: { reduceDamage: 2 },
        requiresClass: 'standschuetze'
    }
};
