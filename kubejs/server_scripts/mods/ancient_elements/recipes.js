ServerEvents.recipes(e => {
  e.remove({ id: "ancient_elements:trident" });
  e.remove({ id: "ancient_elements:gold_drill" });
  e.remove({ id: "ancient_elements:iron_drill" });
  e.remove({ id: "ancient_elements:diamond_drill" });
  e.remove({ id: "ancient_elements:netherite_drill" });
  e.remove({ id: "ancient_elements:galactrium_drill" });
  e.remove({ id: "ancient_elements:elementinium_drill" });
  e.remove({ id: "ancient_elements:celestium_drill" });
  e.remove({ id: "ancient_elements:endrium_drill" });
  e.remove({ id: "ancient_elements:spectrillium_drill" });
  e.remove({ id: "ancient_elements:hellstone_drill" });
  e.remove({ id: "ancient_elements:infernal_drill" });
  e.remove({ id: "ancient_elements:aetherium_drill" });
  e.remove({ id: "ancient_elements:frozen_drill" });
  e.remove({ id: "ancient_elements:abyssal_drill" });
  e.remove({ id: "ancient_elements:meteorite_drill" });
  e.remove({ id: "ancient_elements:void_steel_drill" });
  e.remove({ id: "ancient_elements:ancient_metal_drill" });
  e.remove({ id: "ancient_elements:ender_steel_drill" });
  e.remove({ id: "ancient_elements:nether_steel_drill" });
  e.remove({ id: "ancient_elements:titanium_drill" });
  e.remove({ id: "ancient_elements:jungle_steel_drill" });
  e.remove({ id: "ancient_elements:palladium_drill" });
  e.remove({ id: "ancient_elements:steel_drill" });
  e.remove({ id: "ancient_elements:lead_drill" });
  e.remove({ id: "ancient_elements:tin_drill" });

  e.shaped("ancient_elements:ominous_bell", ["ABA", "BAB", "   "], {
    A: "armageddon_mod:raw_elvenite",
    B: "armageddon_mod:elvenite_ingot",
  });

  e.shaped("ancient_elements:whirl_rod", [" A ", "ABA", " A "], {
    A: "minecraft:packed_ice",
    B: "minecraft:blaze_rod",
  });

  e.shaped("ancient_elements:cosmic_rod", [" A ", "ABA", " A "], {
    A: "minecraft:ender_pearl",
    B: "minecraft:blaze_rod",
  });

  e.shaped("ancient_elements:aether_rod", [" A ", "ABA", " A "], {
    A: "ancient_elements:raw_aetherium",
    B: "minecraft:blaze_rod",
  });

  e.shaped("ancient_elements:stop_watch", [" A ", " BC", "   "], {
    A: "minecraft:gold_nugget",
    B: "minecraft:clock",
    C: "minecraft:chain",
  });

  e.shaped("ancient_elements:boulder_rod", [" A ", "ABA", " A "], {
    A: "minecraft:stone",
    B: "minecraft:blaze_rod",
  });
});
