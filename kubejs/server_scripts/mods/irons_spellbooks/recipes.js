ServerEvents.recipes(e => {
  e.shaped("irons_spellbooks:common_ink", ["   ", "ABC", "   "], {
    A: "minecraft:glass",
    B: "minecraft:ink_sac",
    C: "minecraft:feather",
  });

  e.shaped("irons_spellbooks:uncommon_ink", ["   ", "A  ", "BC "], {
    A: "minecraft:red_dye",
    B: "irons_spellbooks:common_ink",
    C: "minecraft:feather",
  });

  e.shaped("irons_spellbooks:rare_ink", ["   ", "   ", "AB "], {
    A: "irons_spellbooks:uncommon_ink",
    B: "minecraft:glow_ink_sac",
  });

  e.shaped("irons_spellbooks:epic_ink", ["   ", "A  ", "AA "], {
    A: "irons_spellbooks:rare_ink",
  });

  e.shaped("irons_spellbooks:legendary_ink", ["AB ", "CAB", "CCA"], {
    A: "minecraft:glow_ink_sac",
    B: "minecraft:ink_sac",
    C: "irons_spellbooks:epic_ink",
  });

  e.shaped("irons_spellbooks:arcane_essence", ["   ", "   ", "AB "], {
    A: "minecraft:lapis_lazuli",
    B: "minecraft:amethyst_shard",
  });

  e.shaped("irons_spellbooks:cinder_essence", ["   ", "ABA", "CDC"], {
    A: "minecraft:blaze_powder",
    B: "minecraft:flint_and_steel",
    C: "minecraft:fire_charge",
    D: "irons_spellbooks:arcane_essence",
  });

  e.shaped("irons_spellbooks:rotten_spell_book", [" A ", "BCD", "EFE"], {
    A: "minecraft:zombie_head",
    B: "minecraft:bone",
    C: "minecraft:leather",
    D: "minecraft:bone_meal",
    E: "minecraft:rotten_flesh",
    F: "irons_spellbooks:copper_spell_book",
  });

  e.shaped("irons_spellbooks:necronomicon_spell_book", ["AAA", "BBB", "CDC"], {
    A: "bloodmagic:weakbloodshard",
    B: "caverns_and_chasms:living_flesh",
    C: "companions:crystallized_blood",
    D: "irons_spellbooks:copper_spell_book",
  });

  e.shaped("irons_spellbooks:villager_spell_book", ["AAA", "ABA", "CDC"], {
    A: "minecraft:emerald",
    B: "minecraft:totem_of_undying",
    C: "minecraft:quartz",
    D: "irons_spellbooks:copper_spell_book",
  });

  e.shaped("irons_spellbooks:blaze_spell_book", ["ABA", "BCB", "ABA"], {
    A: "minecraft:blaze_powder",
    B: "irons_spellbooks:cinder_essence",
    C: "irons_spellbooks:diamond_spell_book",
  });

  e.shaped("irons_spellbooks:ruined_book", ["AAA", "BCB", "BDB"], {
    A: "composite_material:warden_hand",
    B: "deeperdarker:warden_carapace",
    C: "terramity:warden_soul",
    D: "irons_spellbooks:iron_spell_book",
  });
});
