ServerEvents.recipes(e => {
  e.remove({ id: "waystones:warp_dust" });
  e.remove({ id: "waystones:warp_stone" });

  e.shaped("waystones:warp_dust", ["ABA", "BCB", "ABA"], {
    A: "minecraft:amethyst_shard",
    B: "terramity:fairy_dust",
    C: "minecraft:ender_pearl",
  });
});
