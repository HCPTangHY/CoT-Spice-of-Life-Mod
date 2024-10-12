(async() => {
    function parse_YAML(yamlString) {
        const lines = yamlString.split('\n');
        const result = {};

        let currentObject = result;
        let indentLevel = 0;

        for (let line of lines) {
            if (line.trim() === '') continue;

            const leadingSpaces = line.match(/^\s*/)[0].length;
            const currentIndentLevel = leadingSpaces / 2;

            line = line.trim();

            if (currentIndentLevel < indentLevel) {
                currentObject = result;
            }

            indentLevel = currentIndentLevel;

            const [key, value] = line.split(':');

            if (!value || value.trim() === '') {
                currentObject[key.trim()] = {};
                currentObject = currentObject[key.trim()];
            } else {
                currentObject[key.trim()] = value.trim();
            }
        }
        return result;
    }

    let mod = window.modSC2DataManager.getModLoader().getModByNameOne("SpiceOfLife");
    let addtionFlies = mod.mod.bootJson.additionFile;
    let l = {};
    for (f of addtionFlies) {
        if (f.search("localization") != -1) {
            let file = await (mod.zip.zip.file(f).async("string"));
            localization = window.parse_YAML(file);
            let lanKey = Object.keys(localization)[0]
            if (l[lanKey]) {
                Object.assign(l[lanKey], localization[lanKey])
            } else {
                Object.defineProperty(l, lanKey, { value: localization[lanKey] })
            }
            console.log(l)
        }
    }
    if (window.StandardModlocalization) {
        Object.assign(window.StandardModlocalization, l)
    } else {
        Object.defineProperty(window, 'StandardModlocalization', { value: l });
    }
    if (!window.L) {
        window.L = function(key) {
            let lanKey = navigator.language
            if (lanKey.startsWith("zh")) lanKey = "zh-CN"
            if (lanKey.startsWith("en")) lanKey = "en-US"

            function getLocalization(key) {
                if (!window.StandardModlocalization[lanKey][key]) {
                    return key
                } else {
                    return window.StandardModlocalization[lanKey][key]
                }
            }
            if (!window.StandardModlocalization[lanKey]) {
                lanKey = "zh-CN"
                return getLocalization(key)
            } else {
                return getLocalization(key)
            }
        }
    }
    window.SoLRipeInput = function(recipes) {
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

        setup.SoL.recipesPushList(recipes);
    }
})();