ServerEvents.recipes(e => {
  e.remove({ id: "knightsnmages:elite_mage_helmet" });
  e.remove({ id: "knightsnmages:elite_mage_chestplate" });
  e.remove({ id: "knightsnmages:elite_mage_leggings" });
  e.remove({ id: "knightsnmages:elite_mage_boots" });
  e.remove({ id: "knightsnmages:dark_knight_helmet" });
  e.remove({ id: "knightsnmages:dark_knight_chestplate" });
  e.remove({ id: "knightsnmages:dark_knight_boots" });
  e.remove({ id: "knightsnmages:dark_knight_leggings" });

  e.shaped("knightsnmages:blue_knight_chestplate", ["A A", "BBB", "BCB"], {
    A: "irons_spellbooks:holy_upgrade_orb",
    B: "ancient_elements:spectrillium_ingot",
    C: "hazennstuff:seraph_chestplate",
  });

  e.shaped("knightsnmages:blue_knight_leggings", ["AAA", "ABA", "ACA"], {
    A: "ancient_elements:spectrillium_ingot",
    B: "enigmaticaddons:bless_stone",
    C: "hazennstuff:seraph_leggings",
  });

  e.shaped("knightsnmages:blue_knight_boots", [" A ", "BCB", "BDB"], {
    A: "enigmaticaddons:bless_stone",
    B: "ancient_elements:spectrillium_ingot",
    C: "irons_spellbooks:holy_upgrade_orb",
    D: "hazennstuff:seraph_boots",
  });

  e.shaped("knightsnmages:blue_knight_helmet", ["ABA", "BCB", "ADA"], {
    A: "irons_spellbooks:holy_upgrade_orb",
    B: "ancient_elements:spectrillium_ingot",
    C: "hazennstuff:seraph_helmet",
    D: "enigmaticaddons:bless_stone",
  });
});
