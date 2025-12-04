ServerEvents.recipes(e => {
  e.remove({ id: "explorerscompass:explorers_compass" });

  e.shaped("explorerscompass:explorerscompass", ["ABA", "CDC", "EFE"], {
    A: "minecraft:nether_wart",
    B: "immersive_machinery:redstone_mechanism",
    C: "minecraft:deepslate_bricks",
    D: "minecraft:compass",
    E: "minecraft:stone_bricks",
    F: "minecraft:nether_bricks",
  });
});
