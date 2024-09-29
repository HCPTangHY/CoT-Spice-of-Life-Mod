const recipe = [
    // 西红柿
    {
        original: { "tomato": 1, "eggs": 1 },
        target: "Scrambled eggs with tomatoes",
        cn_name: "西红柿炒蛋",
        targetObj: {
            "restore hunger": 400,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: ["eggs"]
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 1, "potato": 1 },
        target: "Potato salad with tomatoes",
        cn_name: "土豆沙拉配西红柿",
        targetObj: {
            "restore hunger": 400,
            plumpness: 3,
            "purchase quantity": 1,
            price: 10,
            flags: []
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 1, "beef": 1 },
        target: "Beef stew with tomatoes",
        cn_name: "西红柿炖牛腩",
        targetObj: {
            "restore hunger": 600,
            plumpness: 2,
            "purchase quantity": 1,
            price: 20,
            flags: ["meat"]
        },
        time: 60,
        cookwear: "hot plate",
        difficulty: 2,
    }, {
        original: { "tomato": 1, "zucchini": 1 },
        target: "Zucchini in Tomato Sauce",
        cn_name: "茄汁西葫芦",
        targetObj: {
            "restore hunger": 300,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: []
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 2, "noodles": 1 },
        target: "Tomato bisque noodles",
        cn_name: "西红柿浓汤面",
        targetObj: {
            "restore hunger": 400,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: []
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 1, "noodles": 2 },
        target: "Tomato noodle soup",
        cn_name: "茄汁汤面",
        targetObj: {
            "restore hunger": 400,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: []
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 1, "pasta": 1, "parsley": 1, "pork": 1 },
        target: "Tomato bolognese pasta",
        cn_name: "番茄肉酱面",
        targetObj: {
            "restore hunger": 500,
            plumpness: 3,
            "purchase quantity": 1,
            price: 15,
            flags: ["meat"]
        },
        time: 30,
        cookwear: "hot plate",
        difficulty: 2,
    }, {
        original: { "tomato": 1, "tofu": 1 },
        target: "Tomato Sour Hotpot",
        cn_name: "番茄酸汤火锅",
        targetObj: {
            "restore hunger": 200,
            plumpness: 1,
            "purchase quantity": 1,
            price: 10,
            flags: []
        },
        time: 30,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 1, "eggplant": 1, "noodles": 1 },
        target: "Tomato eggplant noodles",
        cn_name: "茄子焖面",
        targetObj: {
            "restore hunger": 400,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: []
        },
        time: 30,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 1, "lettuce": 1, "eggs": 1, "pork": 1 },
        target: "Lettuce Meat Rolls",
        cn_name: "生菜肉卷",
        targetObj: {
            "restore hunger": 300,
            plumpness: 2,
            "purchase quantity": 1,
            price: 15,
            flags: ["meat"]
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 1, "garlic": 1, "basil": 1, "pasta": 1 },
        target: "Spaghetti alla Puttanesca",
        cn_name: "娼妓意面",
        targetObj: {
            "restore hunger": 250,
            plumpness: 2,
            "purchase quantity": 1,
            price: 8,
            flags: []
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 1, "cheese": 2, "eggs": 1 },
        target: "Tomato and Cheese Omelette",
        cn_name: "番茄芝士蛋饼",
        targetObj: {
            "restore hunger": 150,
            plumpness: 3,
            "purchase quantity": 1,
            price: 10,
            flags: ["eggs"]
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "tomato": 1, "carrot": 1, "potato": 1, "lettuce": 1, "beef": 1 },
        target: "Borscht",
        cn_name: "罗宋汤",
        targetObj: {
            "restore hunger": 500,
            plumpness: 3,
            "purchase quantity": 1,
            price: 20,
            flags: ["meat"]
        },
    },
    // 黄瓜
    {
        original: { "cucumber": 1 },
        target: "Cucumber salad",
        cn_name: "凉拌黄瓜",
        targetObj: {
            "restore hunger": 100,
            plumpness: 1,
            "purchase quantity": 1,
            price: 2,
            flags: []
        },
        time: 5,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "cucumber": 2, "raw chicken": 1 },
        target: "Cucumber Jade Soup",
        cn_name: "黄瓜翡翠羹",
        targetObj: {
            "restore hunger": 200,
            plumpness: 1,
            "purchase quantity": 1,
            price: 10,
            flags: ["meat"]
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 3,
    }, {
        original: { "cucumber": 1, "Shrimp": 1, "eggs": 2 },
        target: "Jade Shrimp with Cucumber and Egg",
        cn_name: "翡翠玉带虾仁",
        targetObj: {
            "restore hunger": 150,
            plumpness: 1,
            "purchase quantity": 1,
            price: 20,
            flags: ["eggs"]
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 3,
    }, {
        original: { "cucumber": 1, "eggs": 1 },
        target: "Stir-Fried Cucumber with Eggs",
        cn_name: "黄瓜炒鸡蛋",
        targetObj: {
            "restore hunger": 150,
            plumpness: 1,
            "purchase quantity": 1,
            price: 10,
            flags: ["eggs"]
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "cucumber": 1, "pork": 1 },
        target: "Cucumber and Pork Stir-Fry",
        cn_name: "黄瓜钱炒肉",
        targetObj: {
            "restore hunger": 300,
            plumpness: 2,
            "purchase quantity": 1,
            price: 15,
            flags: ["meat"]
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 2,
    }, {
        original: { "cucumber": 1, "beef": 1 },
        target: "Cucumber and Beef Stir-Fry",
        cn_name: "小炒牛肉",
        targetObj: {
            "restore hunger": 300,
            plumpness: 2,
            "purchase quantity": 1,
            price: 20,
            flags: ["meat"]
        },
        time: 30,
        cookwear: "hot plate",
        difficulty: 2,
    },
    // 茄子
    {
        original: { "eggplant": 1 },
        target: "Braised Eggplant in Brown Sauce",
        cn_name: "红烧茄子",
        targetObj: {
            "restore hunger": 150,
            plumpness: 1,
            "purchase quantity": 1,
            price: 10,
            flags: []
        },
        time: 15,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "eggplant": 1 },
        target: "Flavored Eggplant",
        cn_name: "风味茄子",
        targetObj: {
            "restore hunger": 100,
            plumpness: 1,
            "purchase quantity": 1,
            price: 8,
            flags: []
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "eggplant": 1, "potato": 1, "bell pepper": 1 },
        target: "Sautéed Potato, Green Pepper and Eggplant",
        cn_name: "地三鲜",
        targetObj: {
            "restore hunger": 200,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: []
        },
    }, {
        original: { "eggplant": 1, "pork": 1 },
        target: "Stuffed Eggplant",
        cn_name: "茄盒",
        targetObj: {
            "restore hunger": 200,
            plumpness: 3,
            "purchase quantity": 1,
            price: 15,
            flags: ["meat"]
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 2,
    }, {
        original: { "eggplant": 1, "pork": 1, "potato": 1 },
        target: "Minced Meat, Potato, and Eggplant Stew",
        cn_name: "肉末土豆茄子煲",
        targetObj: {
            "restore hunger": 300,
            plumpness: 2,
            "purchase quantity": 1,
            price: 20,
            flags: ["meat"]
        },
        time: 30,
        cookwear: "hot plate",
        difficulty: 2,
    }
];

if (!("SoL" in setup)) setup.SoL = {};
setup.SoL.recipes = { db: [], byTarget: {}, byFirstOriginal: {} };

setup.SoL.recipesPush = function(r) {
    setup.SoL.recipes.db.push({ original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookwear: r.cookwear });
    if (!setup.SoL.recipes.byTarget[r.target]) setup.SoL.recipes.byTarget[r.target] = { original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookwear: r.cookwear };
    let firstOriginal = Object.keys(r.original)[0];
    if (!setup.SoL.recipes.byFirstOriginal[firstOriginal]) setup.SoL.recipes.byFirstOriginal[firstOriginal] = [];
    setup.SoL.recipes.byFirstOriginal[firstOriginal].push({ original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookwear: r.cookwear });
    if (!setup.food[r.target]) setup.food[r.target] = r.targetObj;
    setup.food[r.target].cn_name = r.cn_name;
}
setup.SoL.recipesPushList = function(list) {
    for (let i = 0; i < list.length; i++) {
        setup.SoL.recipesPush(list[i]);
    }
}

setup.SoL.recipesPushList(recipe);