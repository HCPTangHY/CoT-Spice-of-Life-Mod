setup.Shops.db['Campus Quik-Snak'].items.push({ "label": L('Item.LunchBox') }, { "label": L('Item.LunchBag'), "type": "SoLItem", "item": "LunchBag" }, { "label": L('Item.LunchBox'), "type": "SoLItem", "item": "LunchBox" })

if (!("SoL" in setup)) setup.SoL = {};
setup.SoL.items = {
    "LunchBag": {
        "name": L('Item.LunchBag'),
        "description": L('Item.LunchBagDesc'),
        price: 5,
        slot: 3,
        maxItems: 2,
    },
    "LunchBox": {
        "name": L('Item.LunchBox'),
        "description": L('Item.LunchBoxDesc'),
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
    if (typeof food == "object") {
        food = food.shopitem;
    }
    V.SoLFoodHistory.push({ item: food, hunger: hunger })
    if (V.SoLFoodHistory.length > 12) {
        V.SoLFoodHistory.shift()
    }
    for (let i of V.SoLFoodHistory) {
        if (typeof i.item == "object") {
            i.item = i.item.shopitem;
        }
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
    V.header = `${L('Gardening.GardeningHarvestCollectReturn1')}${harvest} ${L('Gardening.GardeningHarvestCollectReturn2')}${setup.Gardening.db[seed].cn_name}。`;
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
            } else if (V.dormfridge && j in V.dormfridge) {
                if (V.dormfridge[j] < i.original[j]) allCheck = false;
            } else {
                allCheck = false;
            }
        }
        if (allCheck) result.push(i);
    }
    return result;
}
setup.SoL.cookwarePutIn = function(food) {
    if (!T.cookItems) T.cookItems = {};
    let container = $(".SoL_item_container");
    let targetFood = $("#food-" + food.replace(/ /g, '_'));

    function targetFoodAmountReduce() {
        let targetFoodAmount = $("#foodamount-" + food.replace(/ /g, '_')).text();
        targetFoodAmount = parseInt(targetFoodAmount);
        targetFoodAmount -= 1;
        if (targetFoodAmount <= 0) {
            targetFood.remove();
        } else {
            $("#foodamount-" + food.replace(/ /g, '_')).text(targetFoodAmount);
        }
        if (T.cookItems[food]) T.cookItems[food] += 1;
        else T.cookItems[food] = 1;
    }
    let itemname = !window.modUtils.getMod('ModI18N') ? food : setup.food[food].name;
    let innerFood = container.find("#itemInner-" + food.replace(/ /g, '_'));
    if (innerFood.length == 0) {
        if (container.find(".SoL_item").length == 10) return;
        if (T.hasIconMod) {
            if (container.find(".SoL_item").length == 9) { $(".SoL_item:last").hide() }
            container.prepend(Wikifier.wikifyEval(`
                <div class="SoL_item"><div class="SoL_item_amount" id="itemInner-${food.replace(/ /g, '_')}"></div><div class="SoL_item_icon"><<set _func = "setup.SoL.cookwareTakeOut('${food}')">><div @onclick="_func"><<SoLContentItemIcon '${food}'>></div></div>
                `));
        } else {
            if (container.find(".SoL_item_text").length == 9) { $(".SoL_item_text:last").hide() }
            container.prepend(Wikifier.wikifyEval(`
                <div class="SoL_item_text" style="display:inline-flex;"><<link ${itemname}>><<run setup.SoL.cookwareTakeOut(_food)>><</link>> x<div id="itemInner-${_food.replace(/ /g, '_')}"></div></div>
                `));
        }
        targetFoodAmountReduce()
    } else {
        let innerAmount = innerFood.text() || 1;
        if (T.hasIconMod) {
            $("#itemInner-" + food.replace(/ /g, '_')).text(parseInt(innerAmount) + 1);
        } else {
            $("#itemInner-" + food.replace(/ /g, '_')).text(parseInt(innerAmount) + 1);
        }
        targetFoodAmountReduce()
    }
    setup.SoL.cookwareCheck();
}
setup.SoL.cookwareTakeOut = function(food) {
    let container = $(".SoL_item_container");
    let targetFood = $("#food-" + food.replace(/ /g, '_'));
    let innerFood = container.find("#itemInner-" + food.replace(/ /g, '_'));
    if (innerFood.length == 0) return;
    let innerAmount = innerFood.text() || 1;
    if (T.hasIconMod) {
        $("#itemInner-" + food.replace(/ /g, '_')).text(parseInt(innerAmount) - 1 == 1 ? "" : parseInt(innerAmount) - 1);
    }
    if (T.cookItems[food]) T.cookItems[food] -= 1;
    if (T.cookItems[food] <= 0) delete T.cookItems[food];
    if (parseInt(innerAmount) == 1) {
        innerFood.parent().remove();
    }
    if (container.find(".SoL_item_text").length < 10) {
        $(".SoL_item_text:last").show()
    }
    let targetFoodAmount = $("#foodamount-" + food.replace(/ /g, '_')).text();
    if (targetFoodAmount) {
        targetFoodAmount = parseInt(targetFoodAmount);
        targetFoodAmount += 1;
        $("#foodamount-" + food.replace(/ /g, '_')).text(targetFoodAmount);
    } else {
        $("#SoL_ingredient").append(Wikifier.wikifyEval(`
            <div id="food-${food.replace(/ /g, '_')}" style="display:inline-flex;">
            ${T.hasIconMod ? "<<foodicon " + food.replace(/ /g, '_') + ">>" : ""}
            <<link ${!window.modUtils.getMod('ModI18N') ? food : setup.food[food].cn_name}>><<run setup.SoL.cookwarePutIn(_food)>><</link>>
        x <div id="foodamount-${food.replace(/ /g, '_')}">1</div>
        <br>
        </div>
            `.replace(/\n/g, '')));
    }
    setup.SoL.cookwareCheck();
}
setup.SoL.cookwareCheck = function() {
    function chechRecipeSatisfied(recipe) {
        for (let i of Object.keys(T.cookItems)) {
            if (!(i in recipe) || T.cookItems[i] < recipe[i]) return false;
        }
        for (let i of Object.keys(recipe)) {
            if (!(i in T.cookItems) || T.cookItems[i] < recipe[i]) return false;
        }
        return true;
    }
    let recipes = setup.SoL.filterRecipe(V.SoLCookwearData.recipe);
    let result = [];
    for (let i of recipes) {
        if (chechRecipeSatisfied(i.original)) result.push(i);
    }
    let container = $("#Sol_cookware_result");
    container.empty();
    container.text(L('Cook.CookingLink'));
    for (let i of result) {
        container.append(Wikifier.wikifyEval(`
            ${T.hasIconMod ? "<<foodicon " + i.target.replace(/ /g, '_') + ">>" : ""}
            <<link ${!window.modUtils.getMod('ModI18N') ? i.target : i.target_cn_name} SoLCookwearGUI>><<run setup.SoL.recipeCook('${i.target}')>><<advtime ${i.time}>><</link>><<dtime ${i.time}>>
            `.replace(/\n/g, '')));
    }
}
setup.SoL.recipeCook = function(target) {
    let recipe = null;
    for (let i of setup.SoL.recipes.db) {
        if (i.target == target) {
            recipe = i;
            break;
        }
    }
    for (let i of Object.keys(recipe.original)) {
        if (i in V.dormfoodstash) {
            V.dormfoodstash[i] -= recipe.original[i];
            if (V.dormfoodstash[i] <= 0) delete V.dormfoodstash[i];
        } else if (V.dormfridge && i in V.dormfridge) {
            V.dormfridge[i] -= recipe.original[i];
            if (V.dormfridge[i] <= 0) delete V.dormfridge[i];
        }
    }
    if (V.dormfridge[target]) V.dormfridge[target] += 1;
    else V.dormfridge[target] = 1;
}