ServerEvents.recipes(e => {
  e.remove({ id: "brutality:royal_guardian_sword" });
  e.remove({ id: "brutality:unbridled_rage" });
  e.remove({ id: "brutality:target_cube" });
  e.remove({ id: "brutality:double_down" });
  e.remove({ id: "brutality:pain_catalyst" });
  e.remove({ id: "brutality:rampage_clock" });
  e.remove({ id: "brutality:blood_howl_pendant" });
  e.remove({ id: "brutality:nanomachines" });
  e.remove({ id: "brutality:spite_shard" });
  e.remove({ id: "brutality:hate_sigil" });
  e.remove({ id: "brutality:heart_of_wrath" });
  e.remove({ id: "brutality:eye_for_violence" });
  e.remove({ id: "brutality:battle_scars" });
  e.remove({ id: "brutality:mechanical_aorta" });
  e.remove({ id: "brutality:blood_pulse_gauntlets" });
  e.remove({ id: "brutality:fury_band" });
  e.remove({ id: "brutality:grudge_totem" });
  e.remove({ id: "brutality:blood_stone" });
  e.remove({ id: "brutality:wrath" });
  e.remove({ id: "brutality:anger_management" });
  e.remove({ id: "brutality:crown_of_tyranny" });
  e.remove({ id: "brutality:blade_of_the_ruined_king" });

  e.shaped("brutality:royal_guardian_sword", ["ABC", "DEB", "FDA"], {
    A: "minecraft:gold_block",
    B: "terramity:nyxium_block",
    C: "enigmaticaddons:disaster_sword",
    D: "minecraft:bedrock",
    E: "lethality:gamblers_blade",
    F: "weapon:greatsword",
  });

  e.shaped("brutality:nanomachines", ["ABA", "BCB", "ABA"], {
    A: "terramity:conductite_block",
    B: "terramity:black_matter",
    C: "terramity:antimatter_pacemaker",
  });

  e.shaped("brutality:target_cube", ["ABA", "BCB", "ABA"], {
    A: "minecraft:target",
    B: "terramity:reverium",
    C: "terramity:lucky_dice",
  });

  e.shaped("brutality:unbridled_rage", [" A ", "BCD", " E "], {
    A: "terramity:spiteful_soul",
    B: "terramity:antiprism",
    C: "terramity:hellspec_alloy",
    D: "terramity:spectral_soul",
    E: "terramity:black_matter",
  });
});
