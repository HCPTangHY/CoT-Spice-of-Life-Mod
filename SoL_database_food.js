const food = {
    "raw beef": {
        cn_name: "牛肉",
        "restore hunger": 300,
        plumpness: 2,
        "purchase quantity": 1,
        price: 10,
        aoran: "一些",
        flags: [],
        cooking: -1
    },
    "raw pork": {
        cn_name: "猪肉",
        "restore hunger": 300,
        plumpness: 3,
        "purchase quantity": 1,
        price: 10,
        aoran: "一些",
        flags: [],
        cooking: -1
    },
    "tofu": {
        cn_name: "豆腐",
        "restore hunger": 100,
        plumpness: 4,
        "purchase quantity": 1,
        price: 10,
        aoran: "一些",
        flags: [],
    },
    "noodles": {
        cn_name: "面条",
        "restore hunger": 100,
        plumpness: 2,
        "purchase quantity": 1,
        price: 2,
        aoran: "一些",
        flags: [],
        cooking: -1
    },
    "pasta": {
        cn_name: "意大利面",
        "restore hunger": 100,
        plumpness: 3,
        "purchase quantity": 1,
        price: 2,
        aoran: "一些",
        flags: [],
        cooking: -1
    },
    "shrimp": {
        cn_name: "虾",
        "restore hunger": 50,
        plumpness: 1,
        "purchase quantity": 1,
        price: 5,
        aoran: "一些",
        flags: [],
        cooking: -1
    },
    "flour": {
        cn_name: "面粉",
        plumpness: 2,
        "purchase quntity": 10,
        price: 1,
        aoran: "一袋",
        flags: [],
        cooking: -1
    },
    "wheat dough": {
        cn_name: "面团",
        "restore hunger": 100,
        plumpness: 2,
        "purchase quantity": 1,
        price: 2,
        aoran: "一个",
        flags: [],
        cooking: -1
    },
    "raw rice": {
        cn_name: "大米",
        "restore hunger": 100,
        plumpness: 2,
        "purchase quantity": 1,
        price: 2,
        aoran: "一些",
        flags: [],
        cooking: -1
    },
    "cream": {
        cn_name: "奶油",
        "restore hunger": 50,
        plumpness: 3,
        "purchase quantity": 1,
        price: 3,
        aoran: "一些",
        flags: [],
    },
    "chocolate": {
        cn_name: "巧克力",
        "restore hunger": 100,
        plumpness: 3,
        "purchase quantity": 1,
        price: 5,
        aoran: "一块",
        flags: [],
        cooking: -1
    },
    "salt": {
        cn_name: "盐",
        "purchase quantity": 10,
        price: 2,
        aoran: "一袋",
        flags: [],
        cooking: -1
    },
    "sugar": {
        cn_name: "糖",
        "purchase quantity": 10,
        price: 3,
        aoran: "一袋",
        flags: [],
        cooking: -1
    },
    "oil": {
        cn_name: "食用油",
        "purchase quantity": 10,
        price: 5,
        aoran: "一瓶",
        flags: [],
        cooking: -1
    },
    "soy sauce": {
        cn_name: "酱油",
        "purchase quantity": 10,
        price: 5,
        aoran: "一瓶",
        flags: [],
        cooking: -1
    },
    "hoisin sauce": {
        cn_name: "海鲜酱",
        "purchase quantity": 10,
        price: 10,
        aoran: "一瓶",
        flags: [],
        cooking: -1
    },
    "five spice": {
        cn_name: "五香粉",
        "purchase quantity": 15,
        price: 10,
        aoran: "一瓶",
        flags: [],
        cooking: -1
    }
}
const cookwear = {
    "cutting board": {
        category: "appliance",
        description: "放上去，拿起刀，切下去。",
        cn_name: "砧板",
        add: "cutting board",
        price: 20,
    },
    "juicer": {
        category: "appliance",
        description: "嗡嗡嗡嗡~~~~变成液体了！",
        cn_name: "榨汁机",
        add: "juicer",
        price: 50
    }
}

Object.assign(setup.food, food);
Object.assign(setup.dormstuff, cookwear);