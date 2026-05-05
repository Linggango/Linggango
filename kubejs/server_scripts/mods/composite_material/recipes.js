ServerEvents.recipes(e => {
  e.remove({ id: "composite_material:etherite_helmet" });
  e.remove({ id: "composite_material:etherite_chestplate" });
  e.remove({ id: "composite_material:etherite_leggings" });
  e.remove({ id: "composite_material:etherite_boots" });
  e.remove({ id: "composite_material:amethyst_boots" });
  e.remove({ id: "composite_material:amethyst_leggings" });
  e.remove({ id: "composite_material:amethyst_helmet" });
  e.remove({ id: "composite_material:allay_steel_boots" });
  e.remove({ id: "composite_material:allay_steel_chestplate" });
  e.remove({ id: "composite_material:allay_steel_helmet" });
  e.remove({ id: "composite_material:allay_steel_leggings" });
  e.remove({ id: "composite_material:echoium_boots" });
  e.remove({ id: "composite_material:echoium_chestplate" });
  e.remove({ id: "composite_material:echoium_leggings" });
  e.remove({ id: "composite_material:echoium_helmet" });
  e.remove({ id: "composite_material:obsidian_steel_ingot" });
  e.remove({ id: "composite_material:perkin" });
  e.remove({ id: "composite_material:etherite_ingot" });


  e.shaped("composite_material:etherite_boots", ["AEA", "CBC", "D D"], {
    A: "composite_material:perkin",
    B: "composite_material:echoium_boots",
    C: "terramity:reverium",
    D: "composite_material:etherite_ingot",
    E: "goety_revelation:apocalyptium_boots"
  });

  e.shaped("composite_material:etherite_leggings", ["ABA", "AEA", "DCD"], {
    A: "terramity:reverium",
    B: "composite_material:etherite_block",
    C: "composite_material:echoium_leggings",
    D: "composite_material:perkin",
    E: "goety_revelation:apocalyptium_leggings"
  });

  e.shaped("composite_material:etherite_chestplate", ["AEA", "CBC", "ADA"], {
    A: "terramity:reverium",
    B: "composite_material:echoium_chestplate",
    C: "composite_material:perkin",
    D: "composite_material:etherite_block",
    E: "goety_revelation:apocalyptium_chestplate"
  });

  e.shaped("composite_material:etherite_helmet", ["CAC", "ADA", "BEB"], {
    A: "terramity:reverium",
    B: "composite_material:perkin",
    C: "composite_material:etherite_ingot",
    D: "goety_revelation:apocalyptium_helmet",
    E: "composite_material:echoium_helmet",
  });

  e.shaped("composite_material:echoium_boots", ["ABA", "CDC", "EFE"], {
    A: "kubejs:corrupted_soul_fragment",
    B: "composite_material:echoium_block",
    C: "composite_material:echoium_ingot",
    D: "deeperdarker:warden_boots",
    E: "minecraft:reinforced_deepslate",
    F: "composite_material:allay_steel_boots",
  });

  e.shaped("composite_material:echoium_leggings", ["CBC", "ADA", "EFE"], {
    A: "kubejs:corrupted_soul_fragment",
    B: "composite_material:echoium_block",
    C: "minecraft:reinforced_deepslate",
    D: "deeperdarker:warden_leggings",
    E: "composite_material:echoium_ingot",
    F: "composite_material:allay_steel_leggings",
  });

  e.shaped("composite_material:echoium_chestplate", ["CAC", "BDB", "EFE"], {
    A: "composite_material:echoium_ingot",
    B: "kubejs:corrupted_soul_fragment",
    C: "composite_material:echoium_block",
    D: "deeperdarker:warden_chestplate",
    E: "minecraft:reinforced_deepslate",
    F: "composite_material:allay_steel_chestplate",
  });

  e.shaped("composite_material:echoium_helmet", ["EBE", "CDC", "AFA"], {
    A: "minecraft:reinforced_deepslate",
    B: "composite_material:echoium_block",
    C: "kubejs:corrupted_soul_fragment",
    D: "deeperdarker:warden_helmet",
    E: "composite_material:echoium_ingot",
    F: "composite_material:allay_steel_helmet",
  });

  e.shaped("composite_material:allay_steel_boots", ["A A", "BCB", "D D"], {
    A: "ae2:quartz_block",
    B: "undergarden:froststeel_ingot",
    C: "composite_material:obsidian_boots",
    D: "composite_material:allay_steel_ingot",
  });

  e.shaped("composite_material:allay_steel_leggings", ["ABA", "BCB", "D D"], {
    A: "ae2:quartz_block",
    B: "composite_material:allay_steel_ingot",
    C: "composite_material:obsidian_leggings",
    D: "undergarden:froststeel_ingot",
  });

  e.shaped("composite_material:allay_steel_chestplate", ["A A", "BCB", "DDD"], {
    A: "undergarden:froststeel_ingot",
    B: "ae2:quartz_block",
    C: "composite_material:obsidian_chestplate",
    D: "composite_material:allay_steel_ingot",
  });

  e.shaped("composite_material:allay_steel_helmet", ["A A", "BCB", " D "], {
    A: "undergarden:froststeel_ingot",
    B: "ae2:quartz_block",
    C: "composite_material:obsidian_helmet",
    D: "composite_material:allay_steel_ingot",
  });

  e.shaped("composite_material:amethyst_boots", ["   ", "ABA", "A A"], {
    A: "minecraft:amethyst_shard",
    B: "composite_material:copper_boots",
  });

  e.shaped("composite_material:amethyst_leggings", ["AAA", "ABA", "A A"], {
    A: "minecraft:amethyst_shard",
    B: "composite_material:copper_leggings",
  });

  e.shaped("composite_material:amethyst_helmet", ["AAA", "ABA", "   "], {
    A: "minecraft:amethyst_shard",
    B: "composite_material:copper_helmet",
  });

  e.shaped("2x composite_material:perkin", ["DBA", "EGH", "IFC"], {
    A: "minecraft:experience_bottle",
    B: "minecraft:honey_bottle",
    C: "minecraft:dragon_breath",
    D: "farmersdelight:milk_bottle",
    E: "irons_spellbooks:lightning_bottle",
    F: "composite_material:strong_will",
    G: "minecraft:blaze_powder",
    H: "experienceobelisk:daydream_bottle",
    I: "quark:bottled_cloud",
  });

  e.shaped('3x composite_material:etherite_ingot',  ["ABC", "DEF", "GHI"], {
    A: "composite_material:allay_steel_ingot",
    B: "terramity:nyxium",
    C: "composite_material:echoium_ingot",
    D: "thermal:enderium_ingot",
    E: "minecraft:nether_star",
    F: "armageddon_mod:eclipsium_alloy",
    G: "kubejs:twilight_alloy_ingot",
    H: "enigmaticlegacy:etherium_ingot",
    I: "celestisynth:supernal_netherite_ingot",  
  });
  
});
