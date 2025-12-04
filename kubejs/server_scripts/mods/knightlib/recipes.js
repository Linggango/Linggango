ServerEvents.recipes(e => {
  e.remove({ id: "knightlib:empty_grail" });
  e.remove({ id: "knightlib:soul_furnace" });

  e.shaped("knightlib:empty_grail", ["ABA", " C ", "CCC"], {
    A: "create:copper_sheet",
    B: "miners_delight:copper_cup",
    C: "minecraft:copper_ingot",
  });
});
