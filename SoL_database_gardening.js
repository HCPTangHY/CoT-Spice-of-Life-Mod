const SoL_gardening = {
    "potato": {
        type: "vegetable",
        cn_name: "土豆",
        product: "土豆",
        basic: true,
        growthTime: 36,
        harvestAmount: 10,
        harvestValue: 50,
        difficulty: 2,
        "restore hunger": 100,
        "plumpness": 2,
        "purchase quantity": 1,
        flags: []
    },
    "zucchini": {
        type: "vegetable",
        cn_name: "西葫芦",
        product: "西葫芦",
        basic: false,
        growthTime: 50,
        harvestAmount: 8,
        harvestValue: 40,
        difficulty: 3,
        "restore hunger": 80,
        "plumpness": 1,
        "purchase quantity": 1,
        flags: []
    },
    "onion": {
        type: "vegetable",
        cn_name: "洋葱",
        product: "洋葱",
        basic: true,
        growthTime: 120,
        harvestAmount: 5,
        harvestValue: 30,
        difficulty: 3,
        "restore hunger": 60,
        "plumpness": 1,
        "purchase quantity": 1,
        flags: []
    },
    "garlic": {
        type: "vegetable",
        cn_name: "大蒜",
        product: "蒜头",
        basic: true,
        growthTime: 240,
        harvestAmount: 12,
        harvestValue: 25,
        difficulty: 2,
        "restore hunger": 20,
        "plumpness": 0,
        "purchase quantity": 1,
        flags: []
    },
    "carrot": {
        type: "vegetable",
        cn_name: "胡萝卜",
        product: "胡萝卜",
        basic: true,
        growthTime: 75,
        harvestAmount: 8,
        harvestValue: 20,
        difficulty: 2,
        "restore hunger": 40,
        "plumpness": 2,
        "purchase quantity": 1,
        flags: []
    },
    "cabbage": {
        type: "vegetable",
        cn_name: "卷心菜",
        product: "卷心菜",
        basic: true,
        growthTime: 90,
        harvestAmount: 1,
        harvestValue: 30,
        difficulty: 3,
        "restore hunger": 50,
        "plumpness": 2,
        "purchase quantity": 1,
        flags: []
    },
    "scallion": {
        type: "vegetable",
        cn_name: "葱",
        product: "葱",
        basic: true,
        growthTime: 60,
        harvestAmount: 5,
        harvestValue: 30,
        difficulty: 2,
        "restore hunger": 10,
        "plumpness": 1,
        "purchase quantity": 3,
        flags: []
    }
}

const gardingFood = {
    "tomato": {
        "restore hunger": 100,
        "plumpness": 1,
        "purchase quantity": 1,
        flags: []
    },
    "lettuce": {
        "restore hunger": 50,
        "plumpness": 1,
        "purchase quantity": 1,
        flags: []
    },
    "cucumber": {
        "restore hunger": 100,
        "plumpness": 1,
        "purchase quantity": 1,
        flags: []
    },
    "bell pepper": {
        "restore hunger": 50,
        "plumpness": 1,
        "purchase quantity": 1,
        flags: []
    },
    "eggplant": {
        "restore hunger": 150,
        "plumpness": 1,
        "purchase quantity": 1,
        flags: []
    },
    "basil": {
        "restore hunger": 20,
        "plumpness": 1,
        "purchase quantity": 1,
        flags: []
    },
    "parsley": {
        "restore hunger": 20,
        "plumpness": 1,
        "purchase quantity": 1,
        flags: []
    }
};

Object.assign(setup.Gardening.db, SoL_gardening);
for (let food in gardingFood) {
    let baseobj = setup.Gardening.db[food];
    setup.food[food] = Object.assign(baseobj, gardingFood[food]);
    setup.food[food].price = baseobj.harvestValue / baseobj.harvestAmount;
}