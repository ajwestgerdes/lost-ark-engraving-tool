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
        sof: {
            fish: ['Fish', 20],
            naturalPearl: ['Natrual Pearl', 10],
            simpleOrehaFish: ['Simple Oreha Fish', 3]
        },
        bof: {
            fish: ['Fish', 30],
            naturalPearl: ['Natrual Pearl', 15],
            simpleOrehaFish: ['Simple Oreha Fish', 5]
        }
    }
}

export const FusionMaterials = [
    {
        label: 'Simple Oreha Fusion',
        value: 'sof'
    }, 
    {
        label: 'Basic Oreha Fusion',
        value: 'bof'
    }
]


