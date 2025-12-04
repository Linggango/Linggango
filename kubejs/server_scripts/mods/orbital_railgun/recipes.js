ServerEvents.recipes(e => {
  e.remove({ id: "orbital_railgun:orbital_railgun" });

  e.shaped("orbital_railgun:orbital_railgun", ["ABC", "DEB", "FG "], {
    A: "forbidden_arcanus:quantum_catcher",
    B: "cataclysm:witherite_ingot",
    C: "terramity:neutron_star",
    D: "terramity:antimatter_bomb",
    E: "cataclysm:witherite_block",
    F: "brutality:portable_quantum_thingamabob",
    G: "brutality:divine_immolation",
  });
});
