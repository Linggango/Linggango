ServerEvents.recipes(e => {
  e.shaped("mowziesmobs:wrought_helmet", ["ABA", "BCB", "ABA"], {
    A: "create:iron_sheet",
    B: "armageddon_mod:colossal_iron_ingot",
    C: "minecraft:iron_helmet",
  });

  e.shaped("mowziesmobs:wrought_axe", ["AA ", "ABA", "CAA"], {
    A: "armageddon_mod:colossal_iron_ingot",
    B: "create:iron_sheet",
    C: "born_in_chaos_v1:bone_handle",
  });
});
