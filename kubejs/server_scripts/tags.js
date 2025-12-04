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

  e.add("minecraft:needs_stone_tool", ["create:zinc_ore", "create:deepslate_zinc_ore"]);
});
