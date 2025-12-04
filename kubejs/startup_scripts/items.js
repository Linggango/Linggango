StartupEvents.registry("item", e => {
  e.create("fading_shard_of_compressed_mana")
    .displayName("Fading Shard Of Pure Mana")
    .unstackable()
    .texture("kubejs:item/lilshard")
    .tooltip("When eaten, slightly increases spell power.")
    .tooltip("§8Eating continuously wont stack the effects.")
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
    .tooltip("When eaten, enhances your spell power further.")
    .tooltip("§cBe careful while eating.")
    .tooltip("§8Eating continuously wont stack the effects.")
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
    .displayName("§d§lPurified Mana Shard")
    .unstackable()
    .texture("kubejs:item/purified")
    .tooltip(
      "Consuming such dense mana will either kill you... or turn you into something else."
    )
    .tooltip("§cBe careful while eating.")
    .tooltip("§8Eating continuously wont stack the effects.")
    .rarity("epic")
    .food(f => {
      f.hunger(355)
        .saturation(635)
        .effect("minecraft:blindness", 200, 0, 1)
        .effect("minecraft:levitation", 200, 5, 1)
        .effect("minecraft:instant_damage", 1, 5, 1)
        .effect("ancient_elements:crystal_infestion", 500, 5, 1)
        .effect("ancient_elements:stunned", 500, 5, 1)
        .effect("ancient_elements:paralyzed", 200, 5, 1)
        .effect("ancient_elements:hellfire", 200, 5, 1)
        .effect("ancient_elements:electrofield", 100, 5, 1)
        .effect("ancient_elements:elemental_blight", 100, 5, 1)
        .alwaysEdible();
    });

  e.create("broken_cube_piece_1")
    .displayName("§dLeft Cube Fragment")
    .unstackable()
    .texture("kubejs:item/cubepart1")
    .rarity("epic");

  e.create("broken_cube_piece_2")
    .displayName("§dRight Cube Fragment")
    .unstackable()
    .texture("kubejs:item/cubepart2")
    .rarity("epic");

  e.create("linggangoonium_ingot")
    .displayName("§cLinggangoonium Ingot")
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
});
