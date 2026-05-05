ServerEvents.recipes(e => {
  e.remove({ id: "enigmaticlegacy:cursed_ring" });
  e.remove({ id: "enigmaticlegacy:eldritch_pan" });
  e.remove({ id: "enigmaticlegacy:the_cube" });
  e.remove({ id: "enigmaticlegacy:crafting/the_cube" });
  e.remove({ id: "enigtmaticlegacy:cursed_scroll"});
  e.remove({ id: "enigmaticlegacy:avarice_scroll"});
  e.remove({ id: "enigmaticaddons:avarice_ring"});
  e.remove({ id: "enigmaticaddons:violence_scroll"});

  e.shaped("enigmaticlegacy:the_cube", ["ABC", "DEF", "CGA"], {
    A: "armageddon_mod:shadowed_ingot",
    B: "enigmaticaddons:revival_leaf",
    C: "goety:dark_ingot",
    D: "kubejs:broken_cube_piece_1",
    E: "enigmaticaddons:lost_engine",
    F: "kubejs:broken_cube_piece_2",
    G: "enigmaticaddons:illusion_lantern"
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

  e.shaped("enigmaticlegacy:avarice_scroll", ["ABA", "CDC", "EFE"], {
    A: "bloodmagic:tau_oil",
    B: "minecraft:totem_of_undying",
    C: "minecraft:enchanted_golden_apple",
    D: "enigmaticlegacy:darkest_scroll",
    E: "enigmaticlegacy:evil_essence",
    F: "brutality:greed",
  });

 e.shaped("enigmaticaddons:avarice_ring", ["ABA", "CDC", "EFE"], {
    A: "bloodmagic:tau_oil",
    B: "minecraft:totem_of_undying",
    C: [
        Item.of('minecraft:enchanted_book', {StoredEnchantments:[{id:"minecraft:fortune",lvl:1}]}).weakNBT(),
        Item.of('minecraft:enchanted_book', {StoredEnchantments:[{id:"minecraft:fortune",lvl:2}]}).weakNBT(),
        Item.of('minecraft:enchanted_book', {StoredEnchantments:[{id:"minecraft:fortune",lvl:3}]}).weakNBT()
    ],
    D: "enigmaticlegacy:golden_ring",
    E: "enigmaticlegacy:evil_essence",
    F: "brutality:greed",
  });

  e.shaped("enigmaticaddons:violence_scroll", ["ABA", "CDC", "EFE"], {
    A: "enigmaticlegacy:cosmic_heart",
    B: "enigmaticlegacy:abyssal_heart",
    C: "enigmaticlegacy:evil_essence",
    D: "enigmaticlegacy:darkest_scroll",
    E: "enigmaticlegacy:twisted_heart",
    F: "enigmaticlegacy:curse_transposer",
  });

  e.shaped("enigmaticlegacy:soul_crystal", ["BBB", "BAB", "BBB"], {
    A: "kubejs:corrupted_soul_fragment",
    B: "thermal:diamond_dust",
  });
});
