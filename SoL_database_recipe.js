const recipe = [
    // 西红柿
    {
        original: { "tomato": 2 },
        target: "tomato sauce",
        cn_name: "番茄酱",
        targetObj: {
            "restore hunger": 200,
            plumpness: 1,
            "purchase quantity": 1,
            price: 5,
            flags: []
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
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
        original: { "tomato": 1, "raw beef": 1 },
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
        original: { "tomato": 1, "pasta": 1, "parsley": 1, "raw pork": 1 },
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
        original: { "tomato": 1, "lettuce": 1, "eggs": 1, "raw pork": 1 },
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
        original: { "tomato": 1, "carrot": 1, "potato": 1, "lettuce": 1, "raw beef": 1 },
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
        original: { "cucumber": 1, "raw pork": 1 },
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
        original: { "cucumber": 1, "raw beef": 1 },
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
        original: { "eggplant": 1, "raw pork": 1 },
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
        original: { "eggplant": 1, "raw pork": 1, "potato": 1 },
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
    },
    // 卷心菜
    {
        original: { "cabbage": 1 },
        target: "cabbage leaf",
        cn_name: "卷心菜叶",
        targetObj: {
            "restore hunger": 50,
            plumpness: 1,
            "purchase quantity": 1,
            price: 2,
            flags: [],
            cooking: -1
        },
        time: 2,
        cookwear: "cutting board",
        difficulty: 1,
    },
    // 肉类
    {
        original: { "raw beef": 1 },
        target: "minced beef",
        cn_name: "牛肉馅",
        targetObj: {
            "restore hunger": 100,
            plumpness: 1,
            "purchase quantity": 1,
            price: 8,
            flags: ["meat"],
            cooking: -1
        },
        time: 5,
        cookwear: "cutting board",
        difficulty: 1,
    }, {
        original: { "raw chicken": 1 },
        target: "raw chicken cuts",
        cn_name: "生鸡肉丁",
        targetObj: {
            "restore hunger": 50,
            plumpness: 1,
            "purchase quantity": 1,
            price: 5,
            flags: ["meat"],
            cooking: -1
        },
        time: 5,
        cookwear: "cutting board",
        difficulty: 1,
    }, {
        original: { "raw pork": 1 },
        target: "raw bacon",
        cn_name: "生培根",
        targetObj: {
            "restore hunger": 50,
            plumpness: 2,
            "purchase quantity": 1,
            price: 6,
            flags: ["meat"],
            cooking: -1
        },
        time: 5,
        cookwear: "cutting board",
        difficulty: 1,
    }, {
        original: { "eggs": 1 },
        target: "fried egg",
        cn_name: "煎蛋",
        targetObj: {
            "restore hunger": 100,
            plumpness: 1,
            "purchase quantity": 1,
            price: 3,
            flags: ["eggs"],
        },
        time: 7,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "minced beef": 1 },
        target: "beef patty",
        cn_name: "汉堡饼",
        targetObj: {
            "restore hunger": 300,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: ["meat"],
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "raw chicken cuts": 1 },
        target: "cooked chicken cuts",
        cn_name: "熟鸡肉丁",
        targetObj: {
            "restore hunger": 400,
            plumpness: 1,
            "purchase quantity": 1,
            price: 10,
            flags: ["meat"],
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "raw bacon": 1 },
        target: "cooked bacon",
        cn_name: "熟培根",
        targetObj: {
            "restore hunger": 300,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: ["meat"],
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "carton of milk": 2 },
        target: "butter",
        cn_name: "黄油",
        targetObj: {
            plumpness: 3,
            "purchase quantity": 5,
            price: 5,
            flags: [],
            cooking: -1
        },
        time: 30,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "eggs": 2, "sugar": 1, "salt": 1, "oil": 1 },
        target: "mayonaise",
        targetObj: {
            plumpness: 4,
            "purchas quantity": 5,
            price: 7,
            flags: ["eggs"],
        },
        time: 10,
        cookwear: "juicer",
        difficulty: 1
    }, {
        original: { "raw pork": 1, "soy sauce": 1, "hoisin sauce": 1, "five spice": 1 },
        target: "Char Siu",
        cn_name: "叉烧",
        targetObj: {
            "restore hunger": 500,
            plumpness: 5,
            "purchase quantity": 1,
            price: 20,
            flags: ["meat"],
        },
        time: 40,
        cookwear: "hot plate",
        difficulty: 3
    },
    {
        original: { "raw beef": 1, "rice": 1, "onion": 1 },
        target: "Gyudon",
        cn_name: "肥牛饭",
        targetObj: {
            "restore hunger": 600,
            plumpness: 3,
            "purchase quantity": 1,
            price: 20,
            flags: ["meat"],
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 1
    },
    {
        original: { "shrimp": 1, "flour": 1, "oil": 2 },
        target: "Shrimp Tempura",
        cn_name: "炸虾天妇罗",
        targetObj: {
            "restore hunger": 400,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: [],
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1
    },
    // 面食
    {
        original: { "wheat dough": 2, "carton of milk": 1 },
        target: "pie crust",
        cn_name: "馅饼酥皮",
        targetObj: {
            "restore hunger": 100,
            plumpness: 1,
            "purchase quantity": 1,
            price: 5,
            flags: [],
            cooking: -1
        },
        time: 5,
        cookwear: "cutting board",
        difficulty: 1,
    }, {
        original: { "wheat dough": 1, "carton of milk": 1, "chocolate": 2 },
        target: "chocolate pie",
        cn_name: "巧克力派",
        targetObj: {
            "restore hunger": 800,
            plumpness: 4,
            "purchase quantity": 1,
            price: 15,
            flags: [],
        },
        time: 30,
        cookwear: "hot plate",
        difficulty: 3,
    }, {
        original: { "toast": 1, "fried eggs": 2 },
        target: "egg sandwich",
        cn_name: "煎蛋三明治",
        targetObj: {
            "restore hunger": 400,
            plumpness: 2,
            "purchase quantity": 1,
            price: 10,
            flags: ["eggs"],
        },
        time: 5,
        cookwear: "cutting board",
        difficulty: 1,
    }, {
        original: { "bread": 1, "raw chicken": 1, "cabbage leaf": 1, "tomato": 1 },
        target: "chicken sandwich",
        cn_name: "鸡肉三明治",
        targetObj: {
            "restore hunger": 550,
            plumpness: 2,
            "purchase quantity": 1,
            price: 15,
            flags: ["meat"],
        },
        time: 5,
        cookwear: "cutting board",
        difficulty: 2,
    }, {
        original: { "wheat dough": 1, "cabbage": 1, "onion": 1, "raw chicken cuts": 1 },
        target: "chicken dumplings",
        cn_name: "鸡肉饺子",
        targetObj: {
            "restore hunger": 700,
            plumpness: 2,
            "purchase quantity": 1,
            price: 20,
            flags: ["meat"],
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 2,
    }, {
        original: { "wheat dough": 1, "cabbage": 1, "onion": 1, "minced beef": 1 },
        target: "beef dumplings",
        cn_name: "牛肉饺子",
        targetObj: {
            "restore hunger": 750,
            plumpness: 2,
            "purchase quantity": 1,
            price: 25,
            flags: ["meat"],
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 2,
    }, {
        original: { "wheat dough": 1, "cabbage": 1, "onion": 1, "raw pork": 1 },
        target: "pork dumplings",
        cn_name: "猪肉饺子",
        targetObj: {
            "restore hunger": 750,
            plumpness: 3,
            "purchase quantity": 1,
            price: 25,
            flags: ["meat"],
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 2,
    }, {
        origin: { "wheat dough": 1, "scallion": 1, "raw pork": 1, "soy sauce": 1 },
        target: "Wonton",
        cn_name: "馄饨",
        targetObj: {
            "restore hunger": 1000,
            plumpness: 2,
            "purchase quantity": 1,
            price: 15,
            flags: [],
        },
        tiem: 30,
        cookwear: "hot plate",
        difficulty: 1
    }, {
        original: { "raw rice": 1 },
        target: "rice",
        cn_name: "米饭",
        targetObj: {
            "restore hunger": 400,
            plumpness: 2,
            "purchase quantity": 1,
            price: 2,
            flags: [],
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "rice": 1, "eggs": 1, "carrot": 1, "onion": 1 },
        target: "fried rice",
        cn_name: "炒饭",
        targetObj: {},
        time: 10,
        cookwear: "hot plate",
        difficulty: 1,
    }, {
        original: { "pasta": 1, "tomato sauce": 1, "minced beef": 1 },
        target: "Pasta with Meatballs",
        cn_name: "肉丸意面",
        targetObj: {
            "restore hunger": 700,
            plumpness: 3,
            "purchase quantity": 1,
            price: 20,
            flags: ["meat"],
        },
        time: 20,
        cookwear: "hot plate",
        difficulty: 2,
    }, {
        original: { "bread": 1, "cheese": 1, "butter": 1 },
        target: "grilled cheese",
        cn_name: "烤奶酪三明治",
        targetObj: {
            "restore hunger": 1300,
            plumpness: 4,
            "purchase quantity": 1,
            price: 15,
            flags: [],
        },
        time: 10,
        cookwear: "hot plate",
        difficulty: 1
    }, {
        original: { "flour": 1, "raw fish": 1, "fries": 1 },
        target: "Fish and Chips",
        cn_name: "炸鱼薯条",
        targetObj: {
            "restore hunger": 1100,
            plumpness: 5,
            "purchase quantity": 1,
            price: 8,
            flags: [],
        }
    }
];

if (!("SoL" in setup)) setup.SoL = {};
setup.SoL.recipes = { db: [], byTarget: {}, byFirstOriginal: {} };

setup.SoL.recipesPush = function (r) {
    setup.SoL.recipes.db.push({ original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookwear: r.cookwear });
    if (!setup.SoL.recipes.byTarget[r.target]) setup.SoL.recipes.byTarget[r.target] = { original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookwear: r.cookwear };
    let firstOriginal = Object.keys(r.original)[0];
    if (!setup.SoL.recipes.byFirstOriginal[firstOriginal]) setup.SoL.recipes.byFirstOriginal[firstOriginal] = [];
    setup.SoL.recipes.byFirstOriginal[firstOriginal].push({ original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookwear: r.cookwear });
    if (!setup.food[r.target]) setup.food[r.target] = r.targetObj;
    setup.food[r.target].cn_name = r.cn_name;
}
setup.SoL.recipesPushList = function (list) {
    for (let i = 0; i < list.length; i++) {
        setup.SoL.recipesPush(list[i]);
    }
}

setup.SoL.recipesPushList(recipe);