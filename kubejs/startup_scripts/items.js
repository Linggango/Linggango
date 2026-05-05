StartupEvents.registry("item", e => {
  e.create("fading_shard_of_compressed_mana")
    .displayName("Fading Shard Of Pure Mana")
    .unstackable()
    .texture("kubejs:item/lilshard")
    .tooltip("When eaten, slightly increases magical power.")
    .tooltip("Eating continuously wont stack the effects.")
    .rarity("rare")
    .food(f => {
      f.hunger(2)
        .saturation(3)
        .effect("minecraft:blindness", 200, 0, 1)
        .effect("minecraft:levitation", 200, 2, 1)
        .alwaysEdible();
    });

  e.create("shard_of_compressed_mana")
    .displayName("Shard Of Pure Mana")
    .unstackable()
    .texture("kubejs:item/pureshard")
    .tooltip("When eaten, enhances your magical power further.")
    .tooltip("Eating continuously wont stack the effects.")
    .rarity("epic")
    .food(f => {
      f.hunger(5)
        .saturation(6)
        .effect("minecraft:blindness", 200, 0, 1)
        .effect("minecraft:levitation", 200, 5, 1)
        .effect("minecraft:instant_damage", 1, 2, 1)
        .alwaysEdible();
    });

  e.create("purified_shard_of_compressed_mana")
    .displayName("§dPurified Mana Shard")
    .unstackable()
    .texture("kubejs:item/purified")
    .tooltip(
      "Consuming such a dense amount of mana will either kill you, or empower you further."
    )
    .tooltip("Eating continuously wont stack the effects.")
    .rarity("epic")
    .food(f => {
      f.hunger(355)
        .saturation(35)
        .effect("minecraft:blindness", 200, 0, 1)
        .effect("minecraft:levitation", 200, 5, 1)
        .effect("minecraft:instant_damage", 1, 10, 1)
        .alwaysEdible();
    });

  e.create("broken_cube_piece_1")
    .displayName("§dLeft Cube Fragment")
    .unstackable()
    .tooltip("One of the re-crafted pieces of the Non-Euclidean Cube.")
    .texture("kubejs:item/cubepart1")
    .rarity("epic");

  e.create("broken_cube_piece_2")
    .displayName("§dRight Cube Fragment")
    .unstackable()
    .tooltip("One of the re-crafted pieces of the Non-Euclidean Cube.")
    .texture("kubejs:item/cubepart2")
    .rarity("epic");

  e.create("linggangoonium_ingot")
    .displayName("§cLinggangonium Ingot")
    .texture("kubejs:item/linggangoonium")
    .rarity("epic");

  e.create("fartinium_ingot")
    .displayName("§aFartinium Ingot")
    .texture("kubejs:item/fartinium")
    .rarity("rare");

  e.create("magic_vessel")
    .displayName("§dMagic Vessel")
    .unstackable()
    .texture("kubejs:item/magicvessel")
    .tooltip(
      "Due to the items ability to amplify magical resonances, you feel it could be purified and used to create something truly armipotent"
    )
    .rarity("rare");

  e.create("dark_metal_sheet")
    .displayName("Dark Metal Sheet")
    .texture("kubejs:item/dark_metal_sheet");

  e.create("corrupted_soul_fragment")  
    .displayName("§bCorrupted Soul Fragment")
    .texture("kubejs:item/corrupted_soul_fragment")
    .tooltip(
      "Fragments of a once great soul."
    )
    .rarity("rare");

  e.create("twilight_alloy_ingot")
    .displayName("Twilight Alloy")
    .texture("kubejs:item/twilight_alloy_ingot")
    .rarity("rare");

  e.create("mana_crystal")
    .displayName("Mana Crystal")
    .tooltip("Increases Spell Power (Iron's)")
    .rarity("rare")
    .food(f => {
      f.hunger(1)
        .saturation(1)
        .alwaysEdible()
        .effect("minecraft:blindness", 50, 0, 1);
    });

  e.create("mana_capacity_crystal")
    .displayName("Mana Capacity Crystal")
    .tooltip("Increases Mana Amount")
    .rarity("rare")
    .food(f => {
      f.hunger(1)
        .saturation(1)
        .alwaysEdible()
        .effect("minecraft:blindness", 50, 0, 1);
    });

  e.create("mana_regeneration_crystal")
    .displayName("Mana Regeneration Crystal")
    .tooltip("Increases Mana Regeneration Rate")
    .rarity("rare")
    .food(f => {
      f.hunger(1)
        .saturation(1)
        .alwaysEdible()
        .effect("minecraft:blindness", 50, 0, 1);
      
    });
});