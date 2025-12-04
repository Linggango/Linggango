ServerEvents.recipes(e => {
  e.shaped("enigmaticdice:gravity_core", ["ABA", "CDC", "CCC"], {
    A: "create:electron_tube",
    B: "create:precision_mechanism",
    C: "create:polished_rose_quartz",
    D: "enigmaticdice:moon",
  });

  e.shaped("enigmaticdice:moon_shard", [" A ", "A  ", " A "], {
    A: "uniqueaccessories:moon_stone",
  });
});
