ServerEvents.recipes(e => {
  e.shapeless("kubejs:blazerod_block", "9x minecraft:blaze_rod");

  e.shaped("kubejs:broken_cube_piece_1", ["ABC", "DEF", "GBH"], {
    A: "bloodmagic:basemonstersoul_steadfast",
    B: "goety:dark_ingot",
    C: "enigmaticlegacy:angel_blessing",
    D: "armageddon_mod:shadowed_ingot",
    E: "enigmaticaddons:etherium_core",
    F: "enigmaticlegacy:eye_of_nebula",
    G: "bloodmagic:basemonstersoul_destructive",
    H: "enigmaticlegacy:void_pearl",
  });

  e.shaped("kubejs:broken_cube_piece_2", ["ABC", "DEF", "GBH"], {
    A: "enigmaticlegacy:golem_heart",
    B: "goety:dark_ingot",
    C: "bloodmagic:basemonstersoul_corrosive",
    D: "enigmaticlegacy:ocean_stone",
    E: "enigmaticaddons:etherium_core",
    F: "armageddon_mod:shadowed_ingot",
    G: "enigmaticlegacy:blazing_core",
    H: "bloodmagic:basemonstersoul",
  });

  e.shaped("kubejs:mana_crystal", ["ABC", "DEF", "GHI"], {
    A: "irons_spellbooks:fire_upgrade_orb",
    B: "irons_spellbooks:protection_upgrade_orb",
    C: "irons_spellbooks:ice_upgrade_orb",
    D: "irons_spellbooks:mana_upgrade_orb",
    E: "irons_spellbooks:upgrade_orb",
    F: "irons_spellbooks:evocation_upgrade_orb",
    G: "irons_spellbooks:holy_upgrade_orb",
    H: "irons_spellbooks:lightning_upgrade_orb",
    I: "irons_spellbooks:blood_upgrade_orb",
  });

  e.shaped("kubejs:mana_capacity_crystal", ["CDC", "CBC", "AAA"], {
    A: "irons_spellbooks:arcane_ingot",
    B: "irons_spellbooks:divine_pearl",
    C: "minecraft:amethyst_shard",
    D: "irons_spellbooks:epic_ink",
  });

   e.shaped("kubejs:mana_regeneration_crystal", ["ABA", "ACA", "ADA"], {
    A: "irons_spellbooks:hogskin",
    B: "irons_spellbooks:cast_time_ring",
    C: "terramity:crystal_heart",
    D: "fromtheshadows:crystallized_blood",
  });
});
