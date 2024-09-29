const food = {
    "raw beef": {
        "cn_name": "牛肉",
        "restore hunger": 300,
        "plumpness": 2,
        "purchase quantity": 1,
        "price": 10,
        "aoran": "一些",
        "flags": [],
        cooking: -1
    },
    "raw pork": {
        "cn_name": "猪肉",
        "restore hunger": 300,
        "plumpness": 3,
        "purchase quantity": 1,
        "price": 10,
        "aoran": "一些",
        "flags": [],
        cooking: -1
    },
    "tofu": {
        "cn_name": "豆腐",
        "restore hunger": 100,
        "plumpness": 4,
        "purchase quantity": 1,
        "price": 10,
        "aoran": "一些",
        "flags": [],
    },
    "noodles": {
        "cn_name": "面条",
        "restore hunger": 100,
        "plumpness": 2,
        "purchase quantity": 1,
        "price": 2,
        "aoran": "一些",
        "flags": [],
        cooking: -1
    },
    "pasta": {
        "cn_name": "意大利面",
        "restore hunger": 100,
        "plumpness": 3,
        "purchase quantity": 1,
        "price": 2,
        "aoran": "一些",
        "flags": [],
        cooking: -1
    },
    "shrimp": {
        "cn_name": "虾",
        "restore hunger": 50,
        "plumpness": 1,
        "purchase quantity": 1,
        "price": 5,
        "aoran": "一些",
        "flags": [],
        cooking: -1
    },
    "wheat dough": {
        "cn_name": "面团",
        "restore hunger": 100,
        "plumpness": 2,
        "purchase quantity": 1,
        "price": 2,
        "aoran": "一个",
        "flags": [],
        cooking: -1
    },
    "raw rice": {
        "cn_name": "大米",
        "restore hunger": 100,
        "plumpness": 2,
        "purchase quantity": 1,
        "price": 2,
        "aoran": "一些",
        "flags": [],
        cooking: -1
    },
}
const cookwear = {
    "cutting board": {
        category: "appliance",
        description: "放上去，拿起刀，切下去。",
        cn_name: "砧板",
        add: "cutting board",
        price: 20,
    },
}

Object.assign(setup.food, food);
Object.assign(setup.dormstuff, cookwear);