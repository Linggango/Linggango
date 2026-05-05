ServerEvents.tags("block", e => {
  e.remove("forge:iron_blocks", ["minecraft:iron_block", "minecraft:iron_ore", "minecraft:deepslate_iron_ore",
    "minecraft:iron_bars", "minecraft:iron_door", "minecraft:iron_trapdoor", "minecraft:raw_iron_block", "minecraft:anvil", "minecraft:chipped_anvil", "minecraft:damaged_anvil", "create:industrial_iron_block"
  ]);

  e.remove(
    "forge:gold_blocks", ["minecraft:gold_block", "minecraft:gold_ore", "minecraft:deepslate_gold_ore", "minecraft:raw_gold_block", "minecraft:nether_gold_ore", "minecraft:raw_gold_block", "goety:indented_gold", "goety:chiseled_indented_gold", "goety:carved_indented_gold", "goety:indented_gold_slab", "goety:indented_gold_stairs", "goety:indented_gold_wall", "goety:indented_gold_trapdoor"

  ]);

  e.remove("forge:diamond_blocks", 
    ["minecraft:diamond_block", 
      "minecraft:diamond_ore", 
      "minecraft:deepslate_diamond_ore", 
      "minecraft:enchanting_table"]);

  e.remove("forge:emerald_blocks", 
    ["minecraft:emerald_block", 
      "minecraft:emerald_ore", 
      "minecraft:deepslate_emerald_ore"]);
  
  
  e.remove("forge:netherite_blocks", 
    ["minecraft:netherite_block", 
      "minecraft:ancient_debris"]);
  
  
  e.remove("forge:elvenite_blocks", 
    ["armageddon_mod:elvenite_block", 
      "armageddon_mod:elvenite_ore", 
      "armageddon_mod:elvenite_bricks", 
      "armageddon_mod:cracked_elvenite_bricks", 
      "armageddon_mod:mossy_elvenite_bricks", 
      "armageddon_mod:chiseled_elvenite_bricks", 
      "armageddon_mod:elvenite_bricks_slab", 
      "armageddon_mod:elvenite_bricks_stairs", 
      "armageddon_mod:elvenite_bricks_wall",
    "armageddon_mod:mossy_elvenite_bricks_slab", 
    "armageddon_mod:mossy_elvenite_bricks_stair", 
    "armageddon_mod:mossy_elvenite_bricks_wall"]);
  
  
  e.remove("forge:voiderite_blocks", 
    ["armageddon_mod:voiderite_block", 
      "armageddon_mod:voiderite_ore", 
      "armageddon_mod:voiderite_bricks", 
      "armageddon_mod:cracked_voiderite_bricks", 
      "armageddon_mod:mossy_voiderite_bricks", 
      "armageddon_mod:chiseled_voiderite_bricks", 
      "armageddon_mod:voiderite_bricks_slab", 
      "armageddon_mod:voiderite_bricks_stairs", 
      "armageddon_mod:voiderite_bricks_wall",
    "armageddon_mod:mossy_voiderite_bricks_slab", 
    "armageddon_mod:mossy_voiderite_stairs", 
    "armageddon_mod:mossy_voiderite_wall_bricks"]);
  
  
  e.remove("forge:bloody_blocks", 
    ["armageddon_mod:bloody_block", 
      "armageddon_mod:bloody_ore", 
      "armageddon_mod:bloody_bricks", 
      "armageddon_mod:cracked_bloody_bricks", 
      "armageddon_mod:mossy_bloody_bricks", 
      "armageddon_mod:chiseled_bloody_bricks",
      "armageddon_mod:bloody_bricks_slab", 
      "armageddon_mod:bloody_bricks_stairs", 
      "armageddon_mod:bloody_bricks_wall",
    "armageddon_mod:mossy_bloody_bricks_slab", 
    "armageddon_mod:mossy_bloody_stairs", 
    "armageddon_mod:mossy_bloody_wall_bricks"]);
  
  
  e.remove("forge:helionite_blocks", 
    ["armageddon_mod:helionite_block", 
      "armageddon_mod:helionite_ore", 
      "armageddon_mod:helionite_bricks", 
      "armageddon_mod:cracked_helionite_bricks",
      "armageddon_mod:mossy_helionite_bricks", 
      "armageddon_mod:chiseled_helionite_bricks", 
      "armageddon_mod:helionite_bricks_slab", 
      "armageddon_mod:helionite_bricks_stairs", 
      "armageddon_mod:helionite_bricks_wall", 
      "armageddon_mod:mossy_helionite_bricks_slab", 
      "armageddon_mod:mossy_helionite_wall_bricks",
    "armageddon_mod:mossy_helionite_stairs"]);
});