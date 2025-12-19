ServerEvents.recipes(e => {
  e.remove({ id: "mythsandlegends:altar_of_the_dead" });

  e.shaped("mythsandlegends:altar_of_the_dead", ["ABB", "CDC", "DDD"], {
    A: "minecraft:skeleton_skull",
    B: "minecraft:black_candle",
    C: "#minecraft:flowers",
    D: "minecraft:chiseled_deepslate"
  });
});
