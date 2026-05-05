ServerEvents.recipes(e => {
  e.remove({ id: "terramity:die_of_revival_recipe" });
  e.remove({ id: "terramity:forbidden_chalice_recipe" });
  e.remove({ id: "terramity:divergency_gauntlet_recipe" });
  e.remove({ id: "terramity:cthonic_curse_bracelets_recipe" });
  e.remove({ id: "terramity:focus_scarf_recipe" });
  e.remove({ id: "terramity:daemonium_glass_ring_recipe"});
  e.remove({ id: "terramity:spring_recipe"});

  e.shaped("terramity:pocket_universe", [" A ", "BCD", "EFG"], {
    A: "brutality:the_clock_of_frozen_time",
    B: "brutality:sundered_clock",
    C: "kubejs:linggangoonium_ingot",
    D: "brutality:rampage_clock",
    E: "brutality:timekeepers_clock",
    F: "minecraft:clock",
    G: "brutality:shattered_clock",
  });

  e.shaped("terramity:black_matter", ["ABA", "BCB", "ABA"], {
    A: "terramity:chthonic_crystal",
    B: "terramity:decayed_bedrock_dust",
    C: "terramity:warden_soul",
  });

  e.shaped("3x terramity:fairy_dust", ["ABA", "BCB", "ABA"], {
    A: "minecraft:pink_dye",
    B: "minecraft:glowstone_dust",
    C: "terramity:fairy_dust",
  });

  e.shaped("terramity:chronoseraph_clock", ["ABA", "CDC", "CEC"], {
    A: "armageddon_mod:helionite_ingot",
    B: "armageddon_mod:solar_obelisk",
    C: "terramity:opaline_moonstone",
    D: "brutality:clock_of_frozen_time",
    E: "goety:night_beacon",
  });

});
