ServerEvents.recipes(e => {
  e.remove({ id: "composite_material:etherite_helmet" });
  e.remove({ id: "composite_material:etherite_chestplate" });
  e.remove({ id: "composite_material:etherite_leggings" });
  e.remove({ id: "composite_material:etherite_boots" });
  e.remove({ id: "composite_material:amethyst_boots" });
  e.remove({ id: "composite_material:amethyst_leggings" });
  e.remove({ id: "composite_material:amethyst_helmet" });
  e.remove({ id: "composite_material:amethyst_chestplate" });
  e.remove({ id: "composite_material:allay_steel_boots" });
  e.remove({ id: "composite_material:allay_steel_chestplate" });
  e.remove({ id: "composite_material:allay_steel_helmet" });
  e.remove({ id: "composite_material:allay_steel_leggings" });
  e.remove({ id: "composite_material:echoium_boots" });
  e.remove({ id: "composite_material:echoium_chestplate" });
  e.remove({ id: "composite_material:echoium_leggings" });
  e.remove({ id: "composite_material:echoium_helmet" });
  e.remove({ id: "composite_material:obsidian_boots" });
  e.remove({ id: "composite_material:obsidian_chestplate" });
  e.remove({ id: "composite_material:obsidian_leggings" });
  e.remove({ id: "composite_material:obsidian_helmet" });
  e.remove({ id: "composite_material:etherite_sword_reinforced" });
  e.remove({ id: "composite_material:echoium_sword_reinforced" });
  e.remove({ id: "composite_material:dungeon_sword_reinforced" });
  e.remove({ id: "composite_material:obsidian_steel_ingot" });
  e.remove({ id: "composite_material:perkin" });

  e.shaped("composite_material:etherite_boots", ["   ", "ABA", "CDC"], {
    A: "composite_material:perkin",
    B: "composite_material:echoium_boots",
    C: "terramity:reverium",
    D: "composite_material:etherite_block",
  });

  e.shaped("composite_material:etherite_leggings", ["ABA", "ACA", "D D"], {
    A: "terramity:reverium",
    B: "composite_material:etherite_block",
    C: "composite_material:echoium_leggings",
    D: "composite_material:perkin",
  });

  e.shaped("composite_material:etherite_chestplate", ["ABA", "CDC", "ADA"], {
    A: "terramity:reverium",
    B: "composite_material:echoium_chestplate",
    C: "composite_material:perkin",
    D: "composite_material:etherite_block",
  });

  e.shaped("composite_material:etherite_helmet", [" A ", "BCB", "ADA"], {
    A: "terramity:reverium",
    B: "composite_material:perkin",
    C: "composite_material:etherite_block",
    D: "composite_material:echoium_helmet",
  });

  e.shaped("composite_material:echoium_boots", ["ABA", "CDC", "EFE"], {
    A: "legendary_monsters:corrupted_soul",
    B: "composite_material:echoium_block",
    C: "composite_material:echoium_ingot",
    D: "deeperdarker:warden_boots",
    E: "minecraft:reinforced_deepslate",
    F: "composite_material:allay_steel_boots",
  });

  e.shaped("composite_material:echoium_leggings", ["ABA", "CDC", "EFE"], {
    A: "legendary_monsters:corrupted_soul",
    B: "composite_material:echoium_block",
    C: "minecraft:reinforced_deepslate",
    D: "deeperdarker:warden_leggings",
    E: "composite_material:echoium_ingot",
    F: "composite_material:allay_steel_leggings",
  });

  e.shaped("composite_material:echoium_chestplate", ["ABA", "CDC", "EFE"], {
    A: "composite_material:echoium_ingot",
    B: "legendary_monsters:corrupted_soul",
    C: "composite_material:echoium_block",
    D: "deeperdarker:warden_chestplate",
    E: "minecraft:reinforced_deepslate",
    F: "composite_material:allay_steel_chestplate",
  });

  e.shaped("composite_material:echoium_helmet", ["ABA", "CDC", "EFE"], {
    A: "minecraft:reinforced_deepslate",
    B: "composite_material:echoium_block",
    C: "legendary_monsters:corrupted_soul",
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

  e.shaped("composite_material:obsidian_boots", ["AAA", "BCB", "D D"], {
    A: "composite_material:obsidian_steel_block",
    B: "mekanism:ingot_refined_obsidian",
    C: "composite_material:amethyst_boots",
    D: "quark:blaze_lantern",
  });

  e.shaped("composite_material:obsidian_leggings", ["AAA", "BCB", "D D"], {
    A: "composite_material:obsidian_steel_block",
    B: "mekanism:ingot_refined_obsidian",
    C: "composite_material:amethyst_leggings",
    D: "quark:blaze_lantern",
  });

  e.shaped("composite_material:obsidian_chestplate", ["A A", "BCB", "DED"], {
    A: "mekanism:ingot_refined_obsidian",
    B: "quark:blaze_lantern",
    C: "composite_material:amethyst_chestplate",
    D: "composite_material:obsidian_steel_block",
    E: "mekanism:block_refined_obsidian",
  });

  e.shaped("composite_material:obsidian_helmet", ["ABA", "CDC", "   "], {
    A: "composite_material:obsidian_steel_block",
    B: "quark:blaze_lantern",
    C: "mekanism:ingot_refined_obsidian",
    D: "composite_material:amethyst_helmet",
  });

  e.shaped("composite_material:amethyst_boots", ["   ", "ABA", "A A"], {
    A: "minecraft:amethyst_shard",
    B: "composite_material:copper_boots",
  });

  e.shaped("composite_material:amethyst_leggings", ["AAA", "ABA", "A A"], {
    A: "minecraft:amethyst_shard",
    B: "composite_material:copper_leggings",
  });

  e.shaped("composite_material:amethyst_chestplate", ["  ", "ABA", "ACA"], {
    A: "minecraft:amethyst_shard",
    B: "composite_material:copper_chestplate",
    C: "caverns_and_chasms:amethyst_block",
  });

  e.shaped("composite_material:amethyst_helmet", ["AAA", "ABA", "   "], {
    A: "minecraft:amethyst_shard",
    B: "composite_material:copper_helmet",
  });

  e.shaped("composite_material:perkin", ["ABC", "DED", "FAG"], {
    A: "minecraft:experience_bottle",
    B: "minecraft:honey_bottle",
    C: "minecraft:dragon_breath",
    D: "farmersdelight:milk_bottle",
    E: "terramity:chthonic_nectar",
    F: "composite_material:strong_will",
    G: "minecraft:blaze_powder",
  });

  e.shaped("composite_material:etherite_sword_reinforced", ["ABB", "CAB", "DCA"], {
    A: "composite_material:etherite_block",
    B: "composite_material:evolutium",
    C: "minecraft:beacon",
    D: "composite_material:etherite_sword",
  });

  e.shaped("composite_material:echoium_sword_reinforced", ["AAB", "CBB", "DCA"], {
    A: "composite_material:evolutium",
    B: "minecraft:sculk_shrieker",
    C: "caverns_and_chasms:echo_block",
    D: "composite_material:echoium_sword",
  });

  e.shaped("composite_material:dungeon_sword_reinforced", ["ABC", "ACB", "DAA"], {
    A: "composite_material:dungeon_steel_block",
    B: "minecraft:spawner",
    C: "composite_material:evolutium",
    D: "composite_material:dungeon_sword",
  });
});
