ServerEvents.recipes(e => {
  e.remove({ id: "lethality:nightmare_sword" });
  e.remove({ id: "lethality:gamblers_blade" });
  e.remove({ id: "lethality:midas_touch" });

  e.shaped("lethality:midas_touch", ["AAB", "CDA", "ECA"], {
    A: "minecraft:gold_block",
    B: "terramity:fateful_coin",
    C: "terramity:topaz_block",
    D: "brutality:jackpot",
    E: "terramity:duskrok_greatsword",
  });

  e.shaped("lethality:gamblers_blade", ["ABC", "DEB", "FGH"], {
    A: "terramity:lucky_dice",
    B: "lethality:real_knife",
    C: "terramity:die_of_revival",
    D: "terramity:nullifying_dice",
    E: "brutality:target_cube",
    F: "lethality:midas_touch",
    G: "terramity:weighted_die",
    H: "terramity:devils_dice",
  });
});
