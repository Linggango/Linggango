ServerEvents.recipes(e => {
  e.remove({ id: "composite_material:reinforced_deepslate" });
  
  e.shaped("minecraft:verdant_froglight", ["ABA", "BCB", "ABA"], {
    A: "minecraft:slime_ball",
    B: "minecraft:slime_block",
    C: "minecraft:glowstone",
  });

  e.shaped("minecraft:ochre_froglight", ["ABA", "BCB", "ABA"], {
    A: "minecraft:magma_cream",
    B: "minecraft:magma_block",
    C: "minecraft:glowstone",
  });

  e.shaped("minecraft:pearlescent_froglight", ["ABA", "BCB", "ABA"], {
    A: "ae2:fluix_pearl",
    B: "minecraft:ender_pearl",
    C: "minecraft:glowstone",
  });

  e.shaped("2x minecraft:netherite_upgrade_smithing_template", ["ABA", "ACA", "AAA"], {
    A: "minecraft:nether_bricks",
    B: "ancient_elements:nether_steel_ingot",
    C: "minecraft:netherite_upgrade_smithing_template",
  });

  e.shaped("minecraft:reinforced_deepslate", ["ABA", "CDC", "ABA"], {
    A: "composite_material:warden_hand",
    B: "minecraft:deepslate_bricks",
    C: "terramity:warden_soul",
    D: "somemoreblocks:deepslate_pillar",
  });

});
