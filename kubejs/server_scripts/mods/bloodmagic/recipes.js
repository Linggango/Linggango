ServerEvents.recipes(e => {
  e.remove({ id: "bloodmagic:blood_altar" });
  e.remove({ id: "bloodmagic:sacrificial_dagger" });

  e.shaped("bloodmagic:altar", ["ABA", "BCB", "ABA"], {
    A: "companions:crystallized_blood",
    B: "minecraft:deepslate",
    C: "mythsandlegends:altar_of_the_dead",
  });

  e.shaped("bloodmagic:sacrificialdagger", ["  A", "BA ", "CB "], {
    A: "minecraft:gold_ingot",
    B: "minecraft:amethyst_shard",
    C: "minecraft:diamond",
  });
});
