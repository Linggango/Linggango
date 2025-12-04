ServerEvents.recipes(e => {
  e.remove({ id: "enigmaticlegacy:cursed_ring" });
  e.remove({ id: "enigmaticlegacy:eldritch_pan" });
  e.remove({ id: "enigmaticlegacy:the_cube" });
  e.remove({ id: "enigmaticlegacy:crafting/the_cube" });

  e.shaped("enigmaticlegacy:the_cube", ["ABC", "DED", "CFA"], {
    A: "cataclysm:witherite_block",
    B: "enigmaticaddons:revival_leaf",
    C: "enigmaticlegacy:evil_ingot",
    D: "kubejs:broken_cube_piece_1",
    E: "enigmaticaddons:lost_engine",
    F: "enigmaticaddons:forgotten_ice",
  });

  e.shaped("enigmaticlegacy:cursed_ring", [" A ", "ABA", " C "], {
    A: "born_in_chaos_v1:dark_metal_ingot",
    B: "forbidden_arcanus:maledictus_pact",
    C: "born_in_chaos_v1:orbofthe_summoner",
  });

  e.shaped("enigmaticlegacy:eldritch_pan", ["ABA", "CDC", "EFG"], {
    A: "enigmaticlegacy:evil_essence",
    B: "enigmaticlegacy:void_stone",
    C: "enigmaticlegacy:evil_ingot",
    D: "goety_cataclysm:abyss_essence",
    E: "enigmaticlegacy:the_infinitum",
    F: "brutality:frying_pan",
    G: "enigmaticaddons:violence_scroll",
  });

  e.shaped("enigmaticlegacy:enigmatic_item", ["AAA", "BCB", "ADA"], {
    A: "terramity:hellspec_alloy_block",
    B: "goety_revelation:apocalyptium_ingot",
    C: "enigmaticlegacy:the_cube",
    D: "goety_revelation:revelation",
  });
});
