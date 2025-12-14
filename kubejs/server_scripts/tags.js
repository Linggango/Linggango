ServerEvents.tags("item", e => {
  [
    "minecraft:tools",
    "forge:tools/pickaxes",
    "terramity:plus_one_tier",
    "terramity:plus_two_tier",
    "terramity:plus_three_tier",
    "terramity:netherite_tier",
  ].forEach(tag =>
    e.add(tag, [
      "composite_material:etherite_pickaxe",
      "caverns_and_chasms:necromium_pickaxe",
      "mekanismtools:refined_obsidian_pickaxe",
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
    ])
  );
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
