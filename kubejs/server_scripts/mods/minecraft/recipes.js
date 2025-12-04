ServerEvents.recipes(e => {
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

  e.shaped("minecraft:netherite_upgrade_smithing_template", ["ABA", "ACA", "AAA"], {
    A: "minecraft:nether_bricks",
    B: "ancient_elements:nether_steel_ingot",
    C: "minecraft:netherite_upgrade_smithing_template",
  });
});
