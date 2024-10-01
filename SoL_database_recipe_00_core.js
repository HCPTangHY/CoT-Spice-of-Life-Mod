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
        cookware: "hot plate",
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
        cookware: "hot plate",
        difficulty: 1,
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
        cookware: "cutting board",
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
        cookware: "cutting board",
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
        cookware: "cutting board",
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
        cookware: "cutting board",
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
        cookware: "hot plate",
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
        cookware: "hot plate",
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
        cookware: "hot plate",
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
        cookware: "hot plate",
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
        cookware: "hot plate",
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
        cookware: "juicer",
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
        cookware: "hot plate",
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
        cookware: "hot plate",
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
        cookware: "hot plate",
        difficulty: 1
    }, {
        original: { "flour": 1, "raw fish": 1, "fries": 1, "oil": 1 },
        target: "Fish and Chips",
        cn_name: "炸鱼薯条",
        targetObj: {
            "restore hunger": 1100,
            plumpness: 5,
            "purchase quantity": 1,
            price: 8,
            flags: [],
        },
        time: 10,
        cookware: "hot plate",
        difficulty: 1,
    }, {
        original: { "eggs": 1 },
        target: "boiled egg",
        cn_name: "白煮蛋",
        targetObj: {
            "restore hunger": 200,
            plumpness: 1,
            "purchase quantity": 1,
            price: 1,
            flags: ["eggs"],
        },
        time: 5,
        cookware: "hot plate",
        difficulty: 1,
    }, {
        original: { "raw chicken": 1, "oil": 3, "flour": 1 },
        target: "fried chicken",
        cn_name: "炸鸡",
        targetObj: {
            "restore hunger": 700,
            plumpness: 4,
            "purchase quantity": 1,
            price: 7,
            flags: ["meat"],
        },
        time: 10,
        cookware: "hot plate",
        difficulty: 1,
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
        cookware: "cutting board",
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
        cookware: "hot plate",
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
        cookware: "cutting board",
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
        cookware: "cutting board",
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
        cookware: "hot plate",
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
        cookware: "hot plate",
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
        cookware: "hot plate",
        difficulty: 2,
    }, {
        original: { "wheat dough": 1, "scallion": 1, "raw pork": 1, "soy sauce": 1 },
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
        cookware: "hot plate",
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
        cookware: "hot plate",
        difficulty: 1,
    }, {
        original: { "rice": 1, "eggs": 1, "carrot": 1, "onion": 1 },
        target: "fried rice",
        cn_name: "炒饭",
        targetObj: {},
        time: 10,
        cookware: "hot plate",
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
        cookware: "hot plate",
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
        cookware: "hot plate",
        difficulty: 1
    }, {
        original: { "flour": 1, "salt": 1 },
        target: "cracker",
        cn_name: "薄脆饼干",
        targetObj: {
            "restore hunger": 400,
            plumpness: 2,
            "purchase quantity": 1,
            price: 5,
            flags: [],
        },
        time: 10,
        cookware: "air fryer",
        difficulty: 2,
    }, {
        original: { "wheat dough": 1, "cream": 2, "chocolate": 1 },
        target: "chocolate roll",
        cn_name: "巧克力毛巾卷",
        targetObj: {
            "restore hunger": 800,
            plumpness: 4,
            "purchase quantity": 1,
            price: 5,
            flags: [],
        },
        time: 10,
        cookware: "hot plate",
        difficulty: 3,
    }, {
        original: { "wheat dough": 1, "apple": 1, "sugar": 1 },
        target: "apple pie",
        cn_name: "苹果派",
        targetObj: {
            "restore hunger": 800,
            plumpness: 4,
            "purchase quantity": 1,
            price: 10,
            flags: [],
        },
        time: 20,
        cookware: "air fryer",
        difficulty: 2,
    }, {
        original: { "sugar": 1, "carton of milk": 1 },
        target: "caramel",
        cn_name: "焦糖",
        targetObj: {
            "restore hunger": 300,
            plumpness: 2,
            "purchase quantity": 1,
            price: 2,
            flags: [],
        },
        time: 10,
        cookware: "hot plate",
        difficulty: 1,
    }, {
        original: { "caramel": 1, "apple": 1 },
        target: "caramel apple",
        cn_name: "苹果糖",
        targetObj: {
            "restore hunger": 700,
            plumpness: 3,
            "purchase quantity": 1,
            price: 5,
            flags: [],
        },
        time: 10,
        cookware: "hot plate",
        difficulty: 1,
    }, {
        original: { "wheat dough": 1, "oil": 1 },
        target: "donut",
        cn_name: "甜甜圈",
        targetObj: {
            "restore hunger": 1000,
            plumpness: 5,
            "purchase quantity": 1,
            price: 5,
            flags: [],
        },
        time: 20,
        cookware: "hot plate",
        difficulty: 1,
    }, {
        original: { "wheat dough": 1, "oil": 1, "chocolate": 1 },
        target: "chocolate donut",
        cn_name: "巧克力甜甜圈",
        targetObj: {
            "restore hunger": 1200,
            plumpness: 5,
            "purchase quantity": 1,
            price: 10,
            flags: [],
        },
        time: 20,
        cookware: "hot plate",
        difficulty: 1,
    },
    // 其他
    {
        original: { "chocalate": 1, "carton of milk": 1 },
        target: "hot chocolate",
        cn_name: "热可可",
        targetObj: {
            "restore hunger": 700,
            plumpness: 4,
            "purchase quantity": 1,
            price: 2,
            flags: [],
        },
        time: 10,
        cookware: "hot plate",
        difficulty: 1,
    }, {
        original: { "apple": 2 },
        target: "apple juice",
        cn_name: "苹果汁",
        targetObj: {
            "restore hunger": 500,
            plumpness: 2,
            "purchase quantity": 1,
            price: 2,
            flags: [],
        },
        time: 10,
        cookware: "juicer",
        difficulty: 1,
    }
];

if (!("SoL" in setup)) setup.SoL = {};
if (!("recipes" in setup.SoL)) setup.SoL.recipes = { db: [], byTarget: {}, byFirstOriginal: {}, byCookware: {} };

setup.SoL.recipesPush = function(r) {
    setup.SoL.recipes.db.push({ original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookware: r.cookware });
    if (!setup.SoL.recipes.byTarget[r.target]) setup.SoL.recipes.byTarget[r.target] = { original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookware: r.cookware };
    let firstOriginal = Object.keys(r.original)[0];
    if (!setup.SoL.recipes.byFirstOriginal[firstOriginal]) setup.SoL.recipes.byFirstOriginal[firstOriginal] = [];
    setup.SoL.recipes.byFirstOriginal[firstOriginal].push({ original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookware: r.cookware });
    if (!setup.SoL.recipes.byCookware[r.cookware]) setup.SoL.recipes.byCookware[r.cookware] = [];
    setup.SoL.recipes.byCookware[r.cookware].push({ original: r.original, target: r.target, target_cn_name: r.cn_name, time: r.time, difficulty: r.difficulty, cookware: r.cookware });
    if (!setup.food[r.target]) setup.food[r.target] = r.targetObj;
    setup.food[r.target].cn_name = r.cn_name;
}
setup.SoL.recipesPushList = function(list) {
    for (let i = 0; i < list.length; i++) {
        setup.SoL.recipesPush(list[i]);
    }
}

setup.SoL.recipesPushList(recipe);