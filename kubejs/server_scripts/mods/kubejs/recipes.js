ServerEvents.recipes(e => {
  event.shapeless("kubejs:blazerod_block", "9x minecraft:blaze_rod");

  e.shaped("kubejs:broken_cube_piece_1", ["ABC", "DEF", "GBC"], {
    A: "enigmaticlegacy:golem_heart",
    B: "enigmaticlegacy:evil_ingot",
    C: "cataclysm:witherite_block",
    D: "enigmaticlegacy:angel_blessing",
    E: "enigmaticaddons:etherium_core",
    F: "enigmaticlegacy:abyssal_heart",
    G: "enigmaticlegacy:ocean_stone",
  });

  e.shaped("kubejs:broken_cube_piece_2", ["ABC", "DEF", "ABG"], {
    A: "cataclysm:witherite_block",
    B: "enigmaticlegacy:evil_ingot",
    C: "enigmaticlegacy:blazing_core",
    D: "enigmaticlegacy:abyssal_heart",
    E: "enigmaticaddons:etherium_core",
    F: "enigmaticlegacy:eye_of_nebula",
    G: "enigmaticlegacy:void_pearl",
  });
});
