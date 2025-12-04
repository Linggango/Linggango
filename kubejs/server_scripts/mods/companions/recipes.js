ServerEvents.recipes(e => {
  e.remove({ id: "companions:shade_sword_altar" });
  e.remove({ id: "companions:shadow_bell" });
  e.remove({ id: "companions:frog_bonanza" });

  e.shaped("companions:frog_bonanza_block", ["A A", "BCB", "DDD"], {
    A: "armageddon_mod:chiseled_bloody_bricks",
    B: "minecraft:prismarine_bricks",
    C: "terramity:slot_machine",
    D: "armageddon_mod:elvenite_bricks",
  });

  e.shaped("companions:shadow_bell", [" AB", " CA", "D  "], {
    A: "ancient_elements:nether_steel_ingot",
    B: "minecraft:bell",
    C: "companions:crystallized_blood",
    D: "born_in_chaos_v1:dark_rod",
  });

  e.shaped("companions:shade_sword_altar", ["AB ", " C ", "DED"], {
    A: "minecraft:black_banner",
    B: "born_in_chaos_v1:dark_rod",
    C: "ancient_elements:nether_steel_ingot",
    D: "companions:crystallized_blood",
    E: "minecraft:wither_skeleton_skull",
  });

  e.shaped("companions:soul_furnace_block", ["ABA", "CDC", "ECE"], {
    A: "bbb:cut_copper_layer",
    B: "railways:smokestack_coalburner_copper",
    C: "minecraft:bricks",
    D: "minecraft:blast_furnace",
    E: "minecraft:cut_copper",
  });
});
