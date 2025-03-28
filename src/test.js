(() => {
    const cost = {
        ubp: { sched: '', cost: 10000, prio: false, paid: true },
        seabank: { sched: '', cost: 5000, prio: false, paid: true },
        shopee: { sched: '5', cost: 1070, prio: false, paid: false },
        shopee2: { sched: '9', cost: 3970, prio: false, paid: false },
        mabil: { sched: '27', cost: 1780, prio: true, paid: false },
        gcash1: { sched: '26', cost: 1511, prio: true, paid: true },
        gcash2: { sched: '26', cost: 2518, prio: true, paid: true },

        ehc: { sched: 'now?', cost: 6000, prio: false, paid: false },
        rent: { sched: 'now?', cost: 8650, prio: true, paid: false },
        internet: { sched: 'now', cost: 1500, prio: false, paid: false },
        electricity: { sched: '', cost: 1500, prio: false, paid: false },
        water: { sched: '', cost: 200, prio: true, paid: true },
    };
    let total = 0;
    for ([key, value] of Object.entries(cost)) {
        if (!value.prio || value.paid) continue;
        console.log(key);
        total += value.cost;
    }
    return total;
})();
