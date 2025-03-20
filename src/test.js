(() => {
    const cost = {
        ubp: 10000,
        seabank: 5000,

        ehc: 6000,

        rent: 8650,
        internet: 1500,
        electricity: 1500,
        water: 200,
    };
    let total = 0;
    for ([key, value] of Object.entries(cost)) {
        total += value;
    }
    return total;
})();
