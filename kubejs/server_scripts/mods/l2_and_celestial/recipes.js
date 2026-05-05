ServerEvents.recipes(e => {
  e.remove({ id: "l2complements:craft/sculkium_ingot" });
  e.remove({ id: "l2complements:generated_tools/sculkium/craft/sculkium_helmet" });
  e.remove({ id: "l2complements:generated_tools/sculkium/craft/sculkium_chestplate" });
  e.remove({ id: "l2complements:generated_tools/sculkium/craft/sculkium_leggings" });
  e.remove({ id: "l2complements:generated_tools/sculkium/craft/sculkium_boots" });
  e.remove({ id: "toomanyrecipeviewers:/ars_nouveau/hardened_1"});
  e.remove({ id: "l2hostility:charm_of_looting_1"});
  e.remove({ id: "l2hostility:charm_of_looting_2"});
  e.remove({ id: "l2hostility:charm_of_looting_3"});
  e.remove({ id: "l2hostility:charm_of_looting_4"});
  e.remove({ id: "l2hostility:chaos_ingot"});
  e.remove({ id: "l2hostility:curse_of_sloth"});
  e.remove({ id: "l2hostility:curse_of_envy"});
  e.remove({ id: "l2hostility:curse_of_greed"});
   e.remove({ id: "l2hostility:curse_of_gluttony"});
  e.remove({ id: "l2hostility:ring_of_life"})
  e.remove({ id: "l2hostility:infinity_glove"})
  e.remove({ id: "l2complements:enchantments/durable_armor_1"})
  e.remove({ id: "l2complements:enchantments/durable_armor_2"})
  e.remove({ id: "l2complements:enchantments/durable_armor_3"})
  e.remove({ id: "l2hostility:abrahadabra"})
  e.remove({ id: "l2hostility:abyssal_thorn"});
  e.remove({ id: "l2hostility:curse_of_pride"});
  e.remove({ id: "l2hostility:curse_of_wrath"});
  e.remove({ id: "l2hostility:curse_of_lust"});
  e.remove({ id: "l2hostility:miracle_ingot"});
  e.remove({ id: "l2hostility:ring_of_incarceration"});
  e.remove({ id: "l2hostility:ring_of_corrosion"});
  e.remove({ id: "l2hostility:ring_of_reflection"});
  e.remove({ id: "l2hostility:ring_of_divinity"});
  e.remove({ id: "l2hostility:ring_of_healing"});
  e.remove({ id: "l2hostility:pocket_of_restoration"});
  e.remove({ id: "l2hostility:triple_strip_cape"});
  e.remove({ id: "l2hostility:oddeyes_glasses"});
  e.remove({ id: "celestial_enchantments:legendary_celestial_catalyst"});
  e.remove({ id: "celestial_enchantments:advanced_celestial_catalyst"});
  e.remove({ id: "celestial_enchantments:basic_celestial_catalyst"});
  


e.shaped("l2hostility:curse_of_gluttony", ["ADA", "BEC", "AFA"], {
  A: "l2hostility:chaos_ingot",
  B: "l2hostility:cursed",
  C: "l2hostility:wither",
  D: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:vanishing_curse",lvl:1s}]}').weakNBT(),
  E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}').weakNBT(),
  F: "minecraft:netherite_block"
});

e.shaped("celestial_enchantments:advanced_celestial_catalyst", ['ABA', 'CFC', 'EBD'], {
  A: "celestial_enchantments:basic_celestial_catalyst",
  B: "minecraft:netherite_ingot",
  C: "netherexp:soul_magma_block",
  D: "terramity:daemonium",
  E: "terramity:black_matter",
  F: "#celestial_enchantments:advanced_ingredients",
});

e.shaped("celestial_enchantments:basic_celestial_catalyst", ['ABC', 'DEF', 'GHI'], {
  A: "minecraft:diamond",
  B: "minecraft:redstone",
  C: "minecraft:lapis_lazuli",
  D: "minecraft:amethyst_shard",
  E: "#celestial_enchantments:basic_ingredients",
  F: "minecraft:emerald",
  G: "minecraft:gold_ingot",
  H: "armageddon_mod:gilded_plate",
  I: "armageddon_mod:colossal_iron_ingot"
});

 e.shaped("celestial_enchantments:legendary_celestial_catalyst", ['ABA', 'DEC', 'FGH'], {
  A: "celestial_enchantments:advanced_celestial_catalyst",
  B: "armageddon_mod:voiderite_block",
  C: "enigmaticlegacy:etherium_block",
  D: "armageddon_mod:elvenite_block",
  E: "#celestial_enchantments:legendary_ingredients",
  F: "terramity:cracked_microcosm",
  G: "terramity:antiprism",
  H: "terramity:opaline_moonstone",
});

  e.shaped("l2hostility:ring_of_life", ["ABF", "CDE", "HCG"], {
    A: "l2hostility:regenerate",
    B: "armageddon_mod:elvenite_block",
    C: "l2hostility:chaos_ingot",
    D: "terramity:ring_of_rejuvenation_plus",
    E: "terramity:crystal_heart",
    F: "l2hostility:repelling",
    G: "l2hostility:tank",
    H: "l2hostility:protection"
  });

  e.shaped("l2hostility:oddeyes_glasses", ["AAA", "BGC", "DEF"], {
    A: "l2complements:totemic_gold_block",
    B: "minecraft:magenta_stained_glass_pane",
    C: "minecraft:cyan_stained_glass_pane",
    D: "enigmaticlegacy:etherium_block",
    E: "l2hostility:chaos_ingot",
    F: "armageddon_mod:voiderite_block",
    G: "armageddon_mod:elvenite_block",
  });

  e.shaped("l2hostility:triple_strip_cape", ["ABC", "DED", "FGF"], {
    A: "armageddon_mod:spiritof_chaos",
    B: "armageddon_mod:spirit_of_despair",
    C: "armageddon_mod:spiritof_dread",
    D: "armageddon_mod:bloody_block",
    E: "armageddon_mod:vampiric_talisman",
    F: "l2complements:resonant_feather",
    G: "l2hostility:chaos_block",
  });

  e.shaped("l2hostility:pocket_of_restoration", ["ABA", "CEC", "DBD"], {
    A: "l2complements:blackstone_core",
    B: "armageddon_mod:eclipsium_alloy",
    C: "l2hostility:miracle_ingot",
    D: "l2hostility:dispell",
    E: "armageddon_mod:bloody_block"
  });

  e.shaped("l2hostility:imagine_breaker", ["ADB", "CEC", "CGC"], {
    A: "l2hostility:dementor",
    B: "l2hostility:dispell",
    C: "armageddon_mod:helionite_block",
    D: "l2hostility:chaos_ingot",
    E: "l2hostility:miracle_ingot",
    G: "armageddon_mod:anathema_gauntlet"
  });


e.shaped("l2hostility:ring_of_reflection", ["AEA", "BCB", "DDD"], {
    A: "armageddon_mod:bloody_block",
    B: "l2hostility:reflect",
    C: "l2hostility:chaos_block",
    D: "armageddon_mod:doom_powder",
    E: "l2complements:force_field"
  });

  e.shaped("l2hostility:ring_of_divinity", ["ACB", "DGD", "EFE"], {
    A: "l2hostility:miracle_block",
    B: "l2hostility:chaos_block",
    C: "goety_revelation:ascension_halo",
    D: "l2hostility:dispell",
    E: "l2hostility:killer_aura",
    F: "l2complements:totemic_gold_block",
    G: "kubejs:apocalyptium_block",
  });



e.shaped("l2hostility:curse_of_lust", ["ADB", "CDC", "DDD"], {
    A: "l2hostility:invisible",
    B: "l2hostility:regenerate",
    C: "minecraft:phantom_membrane",
    D: "l2hostility:chaos_ingot",
    E: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:binding_curse",lvl:1s}]}').weakNBT()
});

e.shaped("l2hostility:ring_of_incarceration", ["ACA", "CDC", "BEB"], {
    A: "l2hostility:killer_aura",
    B: "l2hostility:teleport",
    C: "l2complements:blackstone_core",
    D: "minecraft:netherite_block",
    E: "relics:bastion_ring"
  });

  e.shaped("2x l2complements:sculkium_ingot", ["CBB", "ABB", "C  "], {
    A: "minecraft:netherite_ingot",
    B: "l2complements:warden_bone_shard",
    C: "deeperdarker:reinforced_echo_shard",
  });

  e.shaped("l2hostility:miracle_ingot ", ["CAC", "AEA", "BAB"], {
    A: "l2hostility:hostility_essence",
    B: "l2complements:heirophant_green",
    C: "l2hostility:miracle_powder",
    E: "l2hostility:chaos_ingot"
  });

  e.shaped("l2hostility:curse_of_pride", ["ABC", "EDE", "FFF"], {
    A: "l2hostility:killer_aura",
    B: "l2hostility:dementor",
    C: "l2hostility:adaptive",
    D: "l2hostility:split",
    E: "brutality:pride",
    F: "l2hostility:miracle_ingot"
  });

  e.shaped("l2hostility:curse_of_wrath", ["ABC", "EEE", "DDD"], {
    A: "l2hostility:reflect",
    B: "l2hostility:reprint",
    C: "l2hostility:counter_strike",
    D: "l2hostility:hostility_essence",
    E: "l2hostility:miracle_ingot"
  });

  e.shaped("l2complements:sculkium_helmet", ["AAA", "ABA", "   "], {
    A: "l2complements:sculkium_ingot",
    B: "deeperdarker:warden_helmet",
  });

  e.shaped("l2complements:sculkium_chestplate", ["A A", "ABA", "AAA"], {
    A: "l2complements:sculkium_ingot",
    B: "deeperdarker:warden_chestplate",
  });

  e.shaped("l2complements:sculkium_leggings", ["AAA", "ABA", "A A"], {
    A: "l2complements:sculkium_ingot",
    B: "deeperdarker:warden_leggings",
  });

  e.shaped("l2complements:sculkium_boots", ["   ", "ABA", "A A"], {
    A: "l2complements:sculkium_ingot",
    B: "deeperdarker:warden_boots",
});

  e.shaped("l2hostility:charm_of_looting_1", [" A ", "ABA", " A "], {
    A: "armageddon_mod:gilded_plate",
    B: "armageddon_mod:emerald_totem",
});

e.shaped("l2hostility:charm_of_looting_2", ["BAB", "ACA", "DAD"], {
    A: "armageddon_mod:gilded_plate",
    B: "celestisynth:celestial_netherite_ingot",
    C: "minecraft:amethyst_block",
    D: "armageddon_mod:colossal_iron_ingot"
});

e.shaped("l2hostility:charm_of_looting_3", ["ACA", "BEB", "DDD"], {
    A: "l2complements:life_essence",
    B: "l2hostility:witch_droplet",
    C: "armageddon_mod:wanderers_fallen_shard",
    D: "composite_material:obsidian_steel_ingot",
    E: "l2hostility:chaos_ingot",
});

e.shaped("l2hostility:charm_of_looting_4", ["AEA", "ADA", "CBC"], {
    A: "l2complements:heirophant_green",
    B: "l2hostility:miracle_block",
    C: "l2hostility:miracle_powder",
    D: "armageddon_mod:sigil_of_calamity",
    E: "armageddon_mod:helionite_block",
});

e.shaped("l2hostility:chaos_ingot", ["ABG", "CDE", "IFH"], {
    A: "l2hostility:bottle_of_curse",
    B: "l2complements:captured_wind",
    C: "l2complements:soul_flame",
    D: "l2hostility:hostility_orb",
    E: "l2complements:hard_ice",
    F: "l2complements:explosion_shard",
    G: "l2complements:shulkerate_ingot",
    H: "l2hostility:witch_droplet",
    I: "l2complements:life_essence"
});

e.shaped("l2hostility:curse_of_sloth", ["FBF", "CDC", "GEG"], {
    B: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:vanishing_curse",lvl:1s}]}').weakNBT(),
    C: "l2hostility:bottle_of_sanity",
    D: "l2hostility:chaos_ingot",
    E: "l2complements:explosion_shard",
    F: "l2hostility:witch_droplet",
    G: "l2complements:life_essence"
});

e.shaped("l2hostility:curse_of_envy", ["ABD", "EFE", "GCH"], {
    A: "minecraft:nether_star",
    B: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}').weakNBT(),
    C: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:silk_touch",lvl:1s}]}').weakNBT(),
    D: "armageddon_mod:wither_spine",
    E: "minecraft:ender_eye",
    F: "l2hostility:chaos_ingot",
    G: "brutality:greed",
    H: "brutality:envy",
});

e.shaped("l2hostility:infinity_glove", ["ABC", "DEF", "GHI"], {
    A: "terramity:nyxium_block",
    B: "kubejs:apocalyptium_block",
    C: "terramity:exodium_block",
    D: "terramity:reverium_block",
    E: "l2complements:eternium_block",
    F: "l2hostility:miracle_block",
    G: "l2hostility:killer_aura",
    H: "l2hostility:ragnarok",
    I: "l2hostility:dementor"
});
e.shaped(Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"l2complements:durable_armor",lvl:1s}]}'), ["ABA", "BCB", "ABA"], {
    A: "minecraft:diamond_block",
    B: "minecraft:lapis_lazuli",
    C: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}').weakNBT(),
});

e.shaped(Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"l2complements:hardened",lvl:1s}]}'), ["BEA", "BDA", "CCA"], {
    A: "l2complements:shulkerate_ingot",
    B: "minecraft:lapis_lazuli",
    C: "minecraft:netherite_ingot",
    D: "minecraft:book",
    E: "l2complements:explosion_shard"
});

e.shaped("l2hostility:abrahadabra", ["EHG", "ADB", "FCF"], {
    A: "l2hostility:miracle_ingot",
    B: "kubejs:twilight_alloy_ingot",
    C: "l2complements:eternium_ingot",
    D: "goety_revelation:ascension_halo",
    E: "l2hostility:killer_aura",
    F: "l2hostility:ragnarok",
    G: "l2hostility:dementor",
    H: "l2hostility:dispell"
});

e.shaped("l2hostility:abyssal_thorn", ["DAD", "ABA", "CAC"], {
    A: "l2hostility:miracle_ingot",
    B: "l2complements:eternium_block",
    C: "l2complements:guardian_eye",
    D: "traveloptics:abyssal_spellweave_ingot"
});


});
