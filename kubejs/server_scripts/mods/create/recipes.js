ServerEvents.recipes(e => {
  e.remove({ id: "create:crafting/recipes/cogwheel" });
  e.remove({ id: "celestisynth:keres" });

  e.shaped("create:cogwheel", [" A ", "ABA", " A "], {
    A: "#minecraft:planks",
    B: "create:shaft",
  });

  e.recipes.create.crushing(
    [
      "2x minecraft:cobblestone",
      "minecraft:redstone",
      Item.of("minecraft:redstone").withChance(0.5),
    ],
    "minecraft:redstone_ore"
  );

  e.recipes.create.crushing(
    ["2x create:iron_sheet", Item.of("minecraft:coal").withChance(0.5)],
    "minecraft:iron_ingot"
  );

  e.recipes.create.crushing(
    [
      "immersiveengineering:plate_iron",
      Item.of("2x minecraft:iron_nugget").withChance(0.2),
    ],
    "create:iron_sheet"
  );

  e.recipes.create.crushing(
    [
      "enigmaticaddons:earth_heart_fragment",
      Item.of("enigmaticaddons:earth_heart_fragment").withChance(0.2),
    ],
    "enigmaticdice:enigmatic_die"
  );

  e.recipes.create.crushing(
    ["4x minecraft:paper", Item.of("brutality:paper_cut").withChance(0.01)],
    "#minecraft:logs"
  );

  e.recipes.create
    .mixing("armageddon_mod:shadowed_ingot", [
      "4x armageddon_mod:shadow_fragment",
      "minecraft:netherite_ingot",
    ])
    .superheated();

  e.recipes.create
    .mixing("armageddon_mod:cocoon_of_blood", [
      "4x armageddon_mod:calamitous_core",
      "minecraft:egg",
      "minecraft:nether_wart_block",
    ])
    .heated();

  e.recipes.create
    .mixing("composite_material:obsidian_steel_ingot", [
      "2x minecraft:obsidian",
      "2x minecraft:iron_ingot",
      "minecraft:quartz",
    ])
    .heated();

  e.recipes.create
    .mixing("armageddon_mod:the_corrupted_tear", [
      "3x mekanism:dirty_netherite_scrap",
      "armageddon_mod:khyros_tear",
      "armageddon_mod:helionite_ingot",
      "armageddon_mod:zoranths_helmet_helmet",
    ])
    .superheated();

  e.recipes.create.compacting("armageddon_mod:emerald_totem", [
    "4x minecraft:emerald",
    "armageddon_mod:gilded_plate",
  ]);

  e.recipes.create.pressing("kubejs:dark_metal_sheet", [
    "born_in_chaos_v1:dark_metal_ingot",
  ]);

  e.recipes.create
    .compacting("armageddon_mod:titan_insigna", [
      "4x armageddon_mod:khyros_tear",
      "4x armageddon_mod:gilded_plate",
      "armageddon_mod:ancient_blueprint",
    ])
    .heated();

  e.recipes.create
    .compacting("armageddon_mod:the_sun_emblem", [
      "2x armageddon_mod:bloody_ingot",
      "armageddon_mod:titan_insigna",
      "armageddon_mod:hemalith_catalyst",
      "armageddon_mod:gilded_plate",
    ])
    .superheated();

  e.recipes.create
    .compacting("born_in_chaos_v1:armor_plate_from_dark_metal", [
      "5x kubejs:dark_metal_sheet",
      "4x born_in_chaos_v1:monster_skin",
    ])
    .heated();

  e.recipes.create.mechanical_crafting(
    "celestisynth:keres",
    ["ABCD", "EFGH", "IJKG", "LKJF"],
    {
      A: "celestisynth:frostbound",
      B: "celestisynth:rainfall_serenity",
      C: "celestisynth:solaris",
      D: "celestisynth:aquaflora",
      E: "celestisynth:breezebreaker",
      F: "celestisynth:crimson_piece",
      G: "armageddon_mod:shadowed_ingot",
      H: "goety_revelation:apocalyptium_ingot",
      I: "celestisynth:poltergeist",
      J: "terramity:chthonic_crystal_block",
      K: "born_in_chaos_v1:lifestealer_bone",
      L: "celestisynth:crescentia",
    }
  );

  e.recipes.create
    .mixing("artifacts:eternal_steak", [
      "129x minecraft:beef",
      "3x minecraft:nether_star",
    ])
    .superheated();

  e.recipes.create.deploying("forbidden_arcanus:soul ", [
    "minecraft:soul_sand",
    "forbidden_arcanus:soul_extractor",
  ]),
    e.recipes.create.deploying("create:large_cogwheel", [
      "create:large_cogwheel",
      "#minecraft:wooden_buttons",
    ]);

  e.recipes.create.mechanical_crafting(
    "kubejs:fartinium_ingot",
    ["ABBC", "DEFD", "DEFD", "GHHI"],
    {
      A: "armageddon_mod:frog_leg",
      B: "ancient_elements:smelly_repellent",
      C: "armageddon_mod:glowbug_lantern",
      D: "ancient_elements:elementinium_ingot",
      E: "experienceobelisk:experience_jelly",
      F: "minecraft:slime_block",
      G: "armageddon_mod:arion_heart",
      H: "ancient_elements:jungle_steel_ingot",
      I: "armageddon_mod:poisonous_hand",
    }
  );

  e.recipes.create
    .mixing("create:creative_blaze_cake", [
      "60x create:blaze_cake",
      "kubejs:linggangoonium_ingot",
    ])
    .superheated();

  e.recipes.create.mechanical_crafting(
    "create:creative_motor",
    ["ABAB", "ABAB", "ABAB", "ABAC"],
    {
      A: "create_new_age:advanced_motor_extension",
      B: "create_new_age:reinforced_motor",
      C: "kubejs:linggangoonium_ingot",
    }
  );

  e.recipes.create.mechanical_crafting(
    "create:handheld_worldshaper",
    ["AAAA", "BBBB", "CCCC", "DDDE"],
    {
      A: "orbital_railgun:orbital_railgun",
      B: "terramity:stairway_to_heaven",
      C: "terramity:anti_material_rifle",
      D: "terramity:olympus",
      E: "kubejs:linggangoonium_ingot",
    }
  );
});
