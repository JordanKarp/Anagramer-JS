const multipliers = {
    'size': {
        3: 1,
        4: 1.2,
        5: 1.4,
        6: 1.6,
        7: 1.8,
        8: 2,
        9: 3,
        10: 4,
        11: 5,
        12: 6,
    },
    'time': {
        "Slow": 0.5,
        "Normal": 1,
        "Fast": 2,
    },
    'win': {
      "60": 0.6,
      "80": 0.8,
      "100": 1,
    }
}

const calcMult = (type, value) => {
    return multipliers[type][value]
}

const calcTotalMult = (size, time, win) => {
    return multipliers['size'][size] * multipliers['time'][time] * multipliers['win'][win] 
}

export { multipliers,calcMult, calcTotalMult}