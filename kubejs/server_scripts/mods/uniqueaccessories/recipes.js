ServerEvents.recipes(e => {
  e.shaped("uniqueaccessories:devils_eyeball", ["ABA", "BCB", "ABA"], {
    A: "armageddon_mod:bloody_ingot",
    B: "minecraft:potion",
    C: "minecraft:ender_eye",
  });

  e.shaped("uniqueaccessories:moon_stone", ["ABA", "BCB", "ABA"], {
    A: "terramity:polished_moonstone",
    B: "terramity:opaline_moonstone",
    C: "ars_nouveau:ritual_moonfall",
  });

  e.shaped("uniqueaccessories:sun_stone", ["ABA", "BCB", "ABA"], {
    A: "armageddon_mod:helionite_ingot",
    B: "minecraft:sunflower",
    C: "armageddon_mod:obsidian_skull",
  });

  e.shapeless("uniqueaccessories:rose_of_temptation", [
    "minecraft:beetroot",
    "create:tree_fertilizer",
    "immersiveengineering:fertilizer",
    "minecraft:rose_bush",
    "minecraft:wheat",
    "biomancy:fertilizer",
    "minecraft:potato",
    "minecraft:carrot",
  ]);
});
