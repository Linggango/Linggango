ServerEvents.recipes(e => {
  e.remove({ id: "forbidden_arcanus:quantum_catcher" });

  e.shaped("forbidden_arcanus:crescent_moon", ["   ", "   ", "AA "], {
    A: "uniqueaccessories:moon_stone",
  });

  e.shaped("forbidden_arcanus:quantum_catcher", ["ABA", "BCB", "ABA"], {
    A: "composite_material:dungeon_steel_ingot",
    B: "forbidden_arcanus:arcane_crystal",
    C: "minecraft:nether_star",
  });
});
