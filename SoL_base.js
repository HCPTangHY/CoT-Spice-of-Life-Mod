setup.Shops.db['Campus Quik-Snak'].items.push({ "label": "餐盒" }, { "label": "餐袋", "type": "SoLItem", "item": "LunchBag" }, { "label": "餐盒", "type": "SoLItem", "item": "LunchBox" })

if (!("SoL" in setup)) setup.SoL = {};
setup.SoL.items = {
    "LunchBag": {
        "name": "餐袋",
        "description": "可以装食物的袋子。有三个位置，每个位置能放置两个同种食物。",
        price: 5,
        slot: 3,
        maxItems: 2,
    },
    "LunchBox": {
        "name": "餐盒",
        "description": "可以装食物的盒子。有六个位置，每个位置能放置两个同种食物。",
        price: 25,
        slot: 6,
        maxItems: 2,
    }
}

setup.SoL.itemHas = function(item) {
    if (!V.SoLLunchItems) {
        V.SoLLunchItems = []
    }
    for (let i in V.SoLLunchItems) {
        if (V.SoLLunchItems[i].item == item) return true
    }
    return false
}
setup.SoL.itemPurchase = function(item) {
    if (setup.SoL.itemHas(item)) return false
    if (!V.SoLLunchItems) {
        V.SoLLunchItems = []
    }
    if (!V.SoLFoodHistory) {
        V.SoLFoodHistory = []
    }
    V.SoLLunchItems.push({ "item": item, content: new Map() })
}
setup.SoL.hasEmptySlot = function(itemIndex) {
    if (!V.SoLLunchItems) {
        V.SoLLunchItems = []
    }
    for (let i = 0; i < setup.SoL.items[V.SoLLunchItems[itemIndex].item].slot; i++) {
        if (!V.SoLLunchItems[itemIndex].content.get(i)) return true;
    }
    return false;
}
setup.SoL.hasFoodEmptySlot = function(food, itemIndex) {
    if (!V.SoLLunchItems) {
        V.SoLLunchItems = []
    }
    for (let i = 0; i < setup.SoL.items[V.SoLLunchItems[itemIndex].item].slot; i++) {
        let slotContent = V.SoLLunchItems[itemIndex].content.get(i);
        if (slotContent && slotContent.item == food && slotContent.amount < setup.SoL.items[V.SoLLunchItems[itemIndex].item].maxItems) return true;
    }
    return false;
}
setup.SoL.foodPutIn = function(food, itemIndex) {
    if (!V.SoLLunchItems) {
        V.SoLLunchItems = []
    }
    for (let i = 0; i < setup.SoL.items[V.SoLLunchItems[itemIndex].item].slot; i++) {
        let slotContent = V.SoLLunchItems[itemIndex].content.get(i);
        if (slotContent && slotContent.item == food && slotContent.amount < setup.SoL.items[V.SoLLunchItems[itemIndex].item].maxItems) {
            V.SoLLunchItems[itemIndex].content.set(i, { item: food, amount: slotContent.amount + 1 });
            V.dormfoodstash[food] -= 1;
            if (V.dormfoodstash[food] <= 0) delete V.dormfoodstash[food];
            return true;
        }
        if (!slotContent) {
            V.SoLLunchItems[itemIndex].content.set(i, { item: food, amount: 1 });
            return true;
        }
    }
    return false;
}
setup.SoL.foodTakeOut = function(food, itemIndex, slotIndex) {
    if (!V.SoLLunchItems) {
        V.SoLLunchItems = []
    }
    let slotContent = V.SoLLunchItems[itemIndex].content.get(slotIndex);
    if (slotContent && slotContent.item == food && slotContent.amount > 0) {
        V.SoLLunchItems[itemIndex].content.set(slotIndex, { item: food, amount: slotContent.amount - 1 });
        V.dormfoodstash[food] = (V.dormfoodstash[food] || 0) + 1;
        if (V.SoLLunchItems[itemIndex].content.get(slotIndex).amount <= 0) {
            V.SoLLunchItems[itemIndex].content.delete(slotIndex)
        }
        return true;
    }
    return false;
}
setup.SoL.foodEat = function(itemIndex, slotIndex) {
    if (!V.SoLLunchItems) {
        V.SoLLunchItems = []
    }
    let slotContent = V.SoLLunchItems[itemIndex].content.get(slotIndex);
    if (slotContent && slotContent.amount > 0) {
        V.SoLLunchItems[itemIndex].content.set(slotIndex, { item: slotContent.item, amount: slotContent.amount - 1 });
        setup.Needs.eat(slotContent.item);
        return true;
    }
    return false;
}
setup.SoL.foodHistoryAdd = function(food, hunger) {
    if (!V.SoLFoodHistory) {
        V.SoLFoodHistory = []
    }
    V.SoLFoodHistory.push({ item: food, hunger: hunger })
    if (V.SoLFoodHistory.length > 12) {
        V.SoLFoodHistory.shift()
    }
}
setup.SoL.foodEnergyCalc = function(food) {
    if (!V.SoLFoodHistory) V.SoLFoodHistory = [];
    if (typeof food == "object") {
        food = food.shopitem;
    }
    let count = 0;
    let hunger_count = 0;
    let food_hunger_value = setup.food[food]["restore hunger"] || 0;
    if (food_hunger_value == 0) return 0
    for (let i of V.SoLFoodHistory) {
        if (i.item == food) {
            count += 1;
            hunger_count += i.hunger;
        }
    }
    return food_hunger_value * Math.max(0, (1 - count / 12)) ^ Math.min(8, food_hunger_value)
}
setup.SoL.findMaxHungerFood = function(itemIndex) {
    let max_hunger_food = { slot: -1, hunger: 0 }
    if (!V.SoLLunchItems) V.SoLLunchItems = []
    if (!V.SoLFoodHistory) V.SoLFoodHistory = []
    for (let i = 0; i < setup.SoL.items[V.SoLLunchItems[itemIndex].item].slot; i++) {
        let slotContent = V.SoLLunchItems[itemIndex].content.get(i);
        if (slotContent && slotContent.amount > 0) {
            if (setup.SoL.foodEnergyCalc(slotContent.item) > max_hunger_food.hunger) {
                max_hunger_food.slot = i
                max_hunger_food.hunger = setup.SoL.foodEnergyCalc(slotContent.item)
            }
        }
    }
    return max_hunger_food
}
setup.SoL.eatMaxHungerFood = function(itemIndex, max_hunger_food) {
    if (max_hunger_food.slot >= 0) {
        let slotContent = V.SoLLunchItems[itemIndex].content.get(max_hunger_food.slot);
        V.SoLLunchItems[itemIndex].content.set(max_hunger_food.slot, { item: slotContent.item, amount: slotContent.amount - 1 });
        if (V.SoLLunchItems[itemIndex].content.get(max_hunger_food.slot).amount <= 0) {
            V.SoLLunchItems[itemIndex].content.delete(max_hunger_food.slot)
        }
        setup.Needs.eat(slotContent.item);
    }
}
setup.SoL.FoodJournalPage = function(page) {
    if (!V.SoLFoodHistory) V.SoLFoodHistory = []
    let result = V.SoLFoodHistory.slice((page - 1) * 5, page * 5);
    T.page = page;
    return result
}
setup.SoL.GardeningHarvestCollect = function() {
    let plot = V.pendingharvest;
    let seed = V.gardening[plot].plant;
    delete V.pendingharvest;
    V.gardening[plot].lastTended = V.gameday;
    let difficulty = setup.Gardening.db[seed].difficulty;
    if (V.pc.skillcheck("Gardening", difficulty)) {
        Wikifier.wikifyEval("<<raiseskill Gardening " + difficulty + ">>")
        V.gardening[plot].daysTended++;
    }
    let total = setup.Gardening.db[seed].growthTime;
    let perc = V.gardening[plot].daysTended / total;
    let harvest = setup.Gardening.db[seed].harvestAmount;
    harvest = Math.round(harvest / 2 + ((harvest / 2) * perc));
    if (!V.dormfridge) V.dormfridge = {};
    if (seed in V.dormfridge) {
        V.dormfridge[seed] += harvest;
    } else {
        V.dormfridge[seed] = harvest;
    }
    delete V.gardening[plot]
    V.header = `你收获了${harvest}个${setup.Gardening.db[seed].cn_name}。`;
}

// recipe

setup.SoL.searchByFirst = function(food) {
    let result = [];
    if (!(food in setup.SoL.recipes.byFirstOriginal)) return [];
    for (let i in setup.SoL.recipes.byFirstOriginal[food]) {
        result.push(setup.SoL.recipes.byFirstOriginal[food][i])
    }
    let filtered = [];
    for (let i of result) {
        let allCheck = true;
        for (let j of Object.keys(i.original)) {
            if (!(j in V.dormfoodstash) && !(j in V.dormfridge)) allCheck = false;
        }
        if (allCheck) filtered.push(i);
    }
    return filtered;
}

setup.SoL.filterRecipe = function(recipes) {
    let result = [];
    for (let i of recipes) {
        let allCheck = true;
        for (let j of Object.keys(i.original)) {
            if (j in V.dormfoodstash) {
                if (V.dormfoodstash[j] < i.original[j]) allCheck = false;
            } else if (j in V.dormfridge) {
                if (V.dormfridge[j] < i.original[j]) allCheck = false;
            } else {
                allCheck = false;
            }
        }
        if (allCheck) result.push(i);
    }
    return result;
}
setup.SoL.cookWarePutIn = function(food) {
    let container = $(".SoL-item-container");
    let targetFood = $("#food-"+food);
    let targetFoodAmount = $("#food-amount-"+food).innerHTML;
    targetFoodAmount = parseInt(targetFoodAmount);
    targetFoodAmount -= 1;
    if (targetFoodAmount <= 0) {
        targetFood.remove();
    } else {
        $("#food-amount-"+food).innerHTML = targetFoodAmount;
    }
    if (T.hasIconMod){
        container.prepend(Wikifier.wikifyEval(`
            <div class="SoL_item"><div class="SoL_item_amount"></div>
            <div class="SoL_item_icon"><<set _func = "">>
            <div @onclick="_func"><<SoLContentItemIcon ${food}>></div></div>
            `));
    } else {
        let itemname = !window.modUtils.getMod('ModI18N')?food:setup.food[food].name;
        container.prepend(Wikifier.wikifyEval(`
            <div class="SoL_item_text">
            <<link ${itemname}>><</link>>
            </div>
            `));
    }
}
    