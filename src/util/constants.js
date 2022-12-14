export const MainStats = [
    'Crit',
    'Swift',
    'Spec',
    'Experties',
    'Domination',
    'Endurance'
]

export const NegativeEngravings = [
    'Attack Power Decrease',
    'Attack Speed Decrease',
    'Defense Decrease',
    'Speed Decrease'
]

export const MainEngravings = [
    'Adrenaline',
    'Awakening',
    'Barricade',
    'Broken Bone',
    'Masters Tenacity',
    'Contender',
    'Crisis Evasion',
    'Crushing Fist',
    'Cursed Doll',
    'Divine Protection',
    'Disrespect',
    'Drops of Ether',
    'Emergency Rescue',
    'Enhanced Shield',
    'Ether Enhancement',
    'Explosive Expert',
    'All-out Attack',
    'Fortitude',
    'Grudge',
    'Heavy Armor Equipment',
    'Max MP',
    'Keen Blunt Weapon',
    'Necromancy',
    'Magick Stream',
    'Increase Mass',
    'Master Brawler',
    'Ambush Master',
    'Master of Escape',
    'Hit Master',
    'MP Regen',
    'Shield Piercing',
    'Precision Dagger',
    'Preemptive Strike',
    'Propulsion',
    'Raid Captain',
    'Expert',
    'Spirit Absorption',
    'Stabilized Status',
    'Strong Will',
    'Super Charge',
    'Vital Point'
]

export const ClassEngravings = {
    Berserker: ['Mayhem', 'Berserker Technique'],
}


export const DefaultEngravings = {
    Engravings: {},
    NegativeEngravings: {}
}

export const DefaultStats = {
    Crit: 0,
    Swift: 0,
    Spec: 0,
    Experties: 0,
    Domination: 0,
    Endurance: 0,
}

export const AccessoryValues = {
    necklace: {stats: DefaultStats, engravings: {}, negativeEngravings: {}},
    earring1: {stats: DefaultStats, engravings: {}, negativeEngravings: {}},
    earring2: {stats: DefaultStats, engravings: {}, negativeEngravings: {}},
    ring1: {stats: DefaultStats, engravings: {}, negativeEngravings: {}},
    ring2: {stats: DefaultStats, engravings: {}, negativeEngravings: {}},
    abilityStone: {engravings: {}, negativeEngravings: {}},
    books: {engravings: {}, negativeEngravings: {}}
}

export const Professions = {
    fishing: {
        cf: {
            fish: ['Fish (100)', 72, 100],
            naturalPearl: ['Natrual Pearl (10)', 36, 10],
            caldarrSolarCarp: ['Oreha Solar Carp (10)', 9, 10],
            craftingCost: ['Crafting Cost', 1, 1]
        },
        sof: {
            fish: ['Fish (100)', 80, 100],
            naturalPearl: ['Natrual Pearl (10)', 40, 10],
            orehaSolarCarp: ['Oreha Solar Carp (10)', 10, 10],
            craftingCost: ['Crafting Cost', 1, 1]
        },
        bof: {
            fish: ['Fish (100)', 80, 100],
            naturalPearl: ['Natrual Pearl (10)', 40, 10],
            orehaSolarCarp: ['Oreha Solar Carp (10)', 10, 10],
            craftingCost: ['Crafting Cost', 1, 1]
        } 
    },
    engraving: {
        cf: {
            ancientRelic: ['Ancient Relic (100)', 56, 100],
            rareRelic: ['Rare Relic (10)', 28, 10],
            caldarrRelic: ['Caldarr Relic (10)', 7, 10],
            craftingCost: ['Crafting Cost', 1, 1]
        },
        sof: {
            ancientRelic: ['Ancient Relic (100)', 56, 100],
            rareRelic: ['Rare Relic (10)', 28, 10],
            orehaRelic: ['Caldarr Relic (10)', 7, 10],
            craftingCost: ['Crafting Cost', 1, 1]
        },
        bof: {
            ancientRelic: ['Ancient Relic (100)', 64, 100],
            rareRelic: ['Rare Relic (10)', 26, 10],
            orehaRelic: ['Caldarr Relic (10)', 8, 10],
            craftingCost: ['Crafting Cost', 1, 1]
        }  
    },
    hunting: {
        cf: {
            thickRawMeat: ['Thick Raw Meat (100)', 72, 100],
            toughLeather: ['Tough Leather (10)', 36, 10],
            caldarrThickRawMeat: ['Caldarr Thick Raw Meat (10)', 7, 10],
            craftingCost: ['Crafting Cost', 1, 1]
        },
        sof: {
            thickRawMeat: ['Thick Raw Meat (100)', 72, 100],
            toughLeather: ['Tough Leather (10)', 36, 10],
            orehaThickRawMeat: ['Oreha Thick Raw Meat (10)', 7, 10],
            craftingCost: ['Crafting Cost', 1, 1]
        },
        bof: {
            thickRawMeat: ['Thick Raw Meat (100)', 72, 100],
            toughLeather: ['Tough Leather (10)', 36, 10],
            orehaThickRawMeat: ['Oreha Thick Raw Meat (10)', 8, 10],
            craftingCost: ['Crafting Cost', 1, 1]
        }  
    }
}

export const FusionMaterials = [
    {
        label: 'Caldarr Fusion',
        value: 'cf'
    },
    {
        label: 'Simple Oreha Fusion',
        value: 'sof'
    }, 
    {
        label: 'Basic Oreha Fusion',
        value: 'bof'
    }
]
