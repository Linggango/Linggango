ServerEvents.recipes(e => {
  e.remove({ id: "cataclysm:ancient_spear" });

  e.shaped("cataclysm:ancient_spear", [" AC", " BA", "A  "], {
    A: "cataclysm:ancient_metal_ingot",
    B: "cataclysm:ancient_metal_block",
    C: "cataclysm:sandstorm_in_a_bottle",
  });

});
