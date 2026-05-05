ServerEvents.recipes(e => {

   e.remove({ id: "brutality:vampire_knives"});
     e.remove({ id: "brutality:royal_guardian_sword" });
       e.remove({ id: "brutality:nanomachines" });
         e.remove({ id: "brutality:target_cube" });
           e.remove({ id: "brutality:unbridled_rage" });
             e.remove({ id: "brutality:self_repair_nexus"})
               e.remove({ id: "brutality:sundered_clock"});

  e.shaped("brutality:royal_guardian_sword", ["ABC", "DEB", "FDA"], {
    A: "minecraft:gold_block",
    B: "terramity:nyxium_block",
    C: "enigmaticaddons:disaster_sword",
    D: "minecraft:bedrock",
    E: "lethality:gamblers_blade",
    F: "weapon:greatsword",
  });

  e.shaped("brutality:nanomachines", ["ABA", "BCB", "ABA"], {
    A: "terramity:conductite_block",
    B: "terramity:black_matter",
    C: "terramity:antimatter_pacemaker",
  });

  e.shaped("brutality:target_cube", ["ABA", "BCB", "ABA"], {
    A: "minecraft:target",
    B: "terramity:reverium",
    C: "terramity:lucky_dice",
  });

  e.shaped("brutality:unbridled_rage", [" A ", "BCD", " E "], {
    A: "terramity:spiteful_soul",
    B: "terramity:antiprism",
    C: "terramity:hellspec_alloy",
    D: "terramity:spectral_soul",
    E: "terramity:black_matter",
  });

  e.shaped("brutality:self_repair_nexus", ["ABA", "BCB", "ABA"], {
    A: "cataclysm:witherite_ingot",
    B: "terramity:black_matter",
    C: "minecraft:nether_star",
  });

  e.shaped("brutality:vampire_knives", ["ABB", "ACB", "DAA"], {
    A: "terramity:chthonic_crystal",
    B: "brutality:diamond_knife",
    C: "terramity:chthonic_nectar",
    D: "bloodmagic:activationcrystalweak",
  });

  e.shaped("brutality:sundered_clock", ["ABA", "CDC", "CEC"], {
    A: "terramity:hellspec_alloy",
    B: "lethality:hellspec_bafs",
    C: "minecraft:lapis_block",
    D: "brutality:shattered_clock",
    E: "terramity:icebrand",
  });

});
