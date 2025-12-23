ServerEvents.tags("item", e => {
  [
    "minecraft:tools",
    "forge:tools/pickaxes",
    "terramity:netherite_tier",
    "terramity:plus_one_tier",
    "terramity:plus_two_tier",
    "terramity:plus_three_tier",
  ].forEach(tag =>
  e.add(tag, [
    "composite_material:allay_steel_pickaxe",
    "composite_material:echoium_pickaxe",
    "composite_material:etherite_pickaxe",
    "composite_material:primitive_pickaxe",
    "caverns_and_chasms:necromium_pickaxe",
    "mekanismtools:refined_obsidian_pickaxe",
    "evolvedmekanism:better_gold_pickaxe",
    "evolvedmekanism:plaslitherite_pickaxe",
    "ancient_elements:aeonite_pickaxe",
    "ancient_elements:galactrium_pickaxe",
    "ancient_elements:elementinium_pickaxe",
    "ancient_elements:celestium_pickaxe",
    "ancient_elements:enderium_pickaxe",
    "ancient_elements:spectrillium_pickaxe",
    "ancient_elements:hellstone_pickaxe",
    "ancient_elements:infernal_pickaxe",
    "ancient_elements:aetherium_pickaxe",
    "ancient_elements:frost_pickaxe",
    "ancient_elements:meteorite_pickaxe",
    "ancient_elements:void_steel_pickaxe",
    "ancient_elements:netherite_hammer",
    "armageddon_mod:helionite_pickaxe",
    "armageddon_mod:helionite_paxel",
    "armageddon_mod:bloody_pickaxe",
    "armageddon_mod:bloody_paxel",
    "armageddon_mod:voiderite_pickaxe",
    "armageddon_mod:voiderite_paxel",
    "armageddon_mod:elvenite_pickaxe",
    "armageddon_mod:elvenite_paxel",
    "armageddon_mod:hollow_pickaxe",
    "armageddon_mod:the_hungery_pickaxe",
    "deeperdarker:warden_pickaxe",
    "enigmaticlegacy:etherium_pickaxe",
    "cataclysm:void_forge",
    "foolish:stellar_pickaxe",
  ])
  );

  e.add("c:tools/melee_weapons", [
    "alexsmobs:tendon_whip",
    "animus:spear_iron",
    "animus:spear_diamond",
    "animus:spear_bound",
    "animus:spear_sentient",
    "animus:hand_of_death",
    "armageddon_mod:iron_colossus_arm",
    "born_in_chaos_v1:wood_splitter_axe",
//    "brutality:tsukuyomi",
//    "brutality:amaterasu",
    "brutality:prismatic_greatsword",
    "cataclysm:void_forge",
    "cataclysm:infernal_forge",
//    "cataclysm:zweiender",
//    "cataclysm:final_fractal",
//    "cnb:cinder_sword_1",
//    "cnb:cinder_sword_2",
//    "cnb:cinder_sword_3",
//    "cnb:cinder_sword_4",
    "composite_material:abyss_blade",
    "composite_material:dungeon_sword_reinforced",
    "composite_material:etherite_sword_reinforced",
    "composite_material:echoium_sword_reinforced",
    "dungeonsdelight:stained_cleaver",
    "dungeonsdelight:stained_knife",
    "embers:grandhammer",
    "enigmaticlegacy:the_infinitum",
    "enigmaticlegacy:ender_slayer",
    "enigmaticlegacy:eldritch_pan",
    "foolish:thrashing_apparatus",
    "foolish:leaf_fan",
    "foolish:battle_fan",
    "goety:dark_scythe",
    "goety:dark_metal_scythe",
    "goety:death_scythe",
    "goety:fanged_dagger",
    "goety:hungry_dagger",
    "knightsnmages:noble_sword",
    "knightsnmages:dark_sword",
    "lethality:wooden_bafs",
    "lethality:stone_bafs",
    "lethality:iron_bafs",
    "lethality:golden_bafs",
    "lethality:diamond_bafs",
    "lethality:netherite_bafs",
    "lethality:topaz_bafs",
    "lethality:ruby_bafs",
    "lethality:sapphire_bafs",
    "lethality:onyx_bafs",
    "lethality:dimlite_bafs",
    "lethality:virentium_bafs",
    "lethality:cosmilite_bafs",
    "lethality:iridium_bafs",
    "lethality:void_bafs",
    "lethality:hellspec_bafs",
    "lethality:conductite_bafpb",
    "lethality:nyxium_bafs",
    "lethality:reverium_bafs",
    "lethality:exodium_bafs",
    "lethality:exodium_bafs",
    "mekaweapons:mekatana",
    "mofus_better_end_:mite_queen_scythe",
    "mythsandlegends:gargoyle_axe",
    "sgjourney:naquadah_sword",
    "brutality:spatula",
    "brutality:the_golden_spatula",
    "brutality:iron_knife",
    "brutality:gold_knife",
    "brutality:diamond_knife",
    "brutality:void_knife",
    "brutality:meloncholy",
    "brutality:apple_core",
  ])
});

ServerEvents.tags("block", e => {
  e.remove("minecraft:needs_iron_tool", ["create:zinc_ore", "create:deepslate_zinc_ore"]);

  e.add("minecraft:needs_stone_tool", [
    "create:zinc_ore",
    "create:deepslate_zinc_ore",
    "ancient_elements:lead_ore",
    "ancient_elements:block_of_raw_lead"
  ]);

  e.add("minecraft:needs_iron_tool", [
    "ancient_elements:jungle_steel_ore",
    "ancient_elements:blockof_raw_jungle_steel",
    "ancient_elements:steel_ore",
    "ancient_elements:block_of_raw_steel",
    "ancient_elements:palladium_ore",
    "ancient_elements:block_of_raw_palladium"
  ]);

  e.add("minecraft:needs_diamond_tool", [
    "ancient_elements:steel_ender_ore",
    "ancient_elements:block_of_raw_ender_steel",
    "ancient_elements:titanium_ore",
    "ancient_elements:block_of_raw_titanium",
    "ancient_elements:nether_steel_ore",
    "ancient_elements:block_of_raw_nether_steel",
    "ancient_elements:abyssal_debris",
    "ancient_elements:ancient_metal_debris"
  ]);

  e.add("forge:needs_netherite_tool", [
    "ancient_elements:frost_ore",
    "ancient_elements:block_of_frost_shard",
    "ancient_elements:meteorite_ore",
    "ancient_elements:block_of_raw_meteorite",
    "ancient_elements:void_steel_ore",
    "ancient_elements:block_of_raw_void_steel"
  ]);

  e.add("hltweaker:needs_ancient_elements_tier_five_tool", [
    "ancient_elements:aetherium_ore",
    "ancient_elements:block_of_raw_aetherium"
  ]);

  e.add("hltweaker:needs_ancient_elements_tier_six_tool", [
    "ancient_elements:infernal_ore",
    "ancient_elements:block_of_raw_infernal_ore"
  ]);

  e.add("hltweaker:needs_ancient_elements_tier_seven_tool", [
    "ancient_elements:spectrillium_ore",
    "ancient_elements:block_of_raw_spectrillium"
  ]);

  e.add("hltweaker:needs_ancient_elements_tier_eight_tool", [
    "ancient_elements:endrium_ore",
    "ancient_elements:raw_block_of_endrium"
  ]);

  e.add("hltweaker:needs_ancient_elements_tier_nine_tool", [
    "ancient_elements:celestium_ore",
    "ancient_elements:raw_block_of_celestium"
  ]);

  e.add("hltweaker:needs_ancient_elements_tier_ten_tool", [
    "ancient_elements:galactric_debris"
  ]);
});

ServerEvents.tags("item", e => {
  [
    "forge:ingots/steel",
    "ad_astra:steel_ingot"
  ].forEach(tag =>
    e.add(tag, [
      "ancient_elements:steel_ingot",
      "lethality:improbability_steel"
    ])
  );
});
