ServerEvents.recipes(e => {
  e.remove({ id: "minionsremastered:masters_staff" });

  e.shaped("minionsremastered:masters_staff", [" AB", " CA", "C  "], {
    A: "minecraft:gold_ingot",
    B: "armageddon_mod:shadowed_ingot",
    C: "legendary_monsters:long_stick_half",
  });
});
