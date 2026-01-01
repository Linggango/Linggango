ServerEvents.recipes(e => {
  e.remove({ id: "tiered:galena_vanilla" });


  e.shaped("tiered:galena_chunk", [" C ", "DEA", " B "], {
    A: "minecraft:emerald",
    B: "minecraft:lapis_lazuli",
    C: "minecraft:blaze_rod",
    D: "minecraft:blaze_powder",
    E: "tiered:limestone_chunk",
  });

})