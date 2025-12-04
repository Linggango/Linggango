ServerEvents.recipes(e => {
  e.remove({ id: "enchantinginfuser:enchanting_infuser" });
  e.remove({ id: "enchantinginfuser:advanced_enchanting_infuser" });

  e.shaped("enchantinginfuser:enchanting_infuser", [" A ", "BCB", "CDC"], {
    A: "forbidden_arcanus:dark_nether_star",
    B: "minecraft:amethyst_shard",
    C: "minecraft:crying_obsidian",
    D: "minecraft:enchanting_table",
  });

  e.shaped("enchantinginfuser:advanced_enchanting_infuser", [" A ", "BCB", "CDC"], {
    A: "minecraft:dragon_egg",
    B: "minecraft:netherite_ingot",
    C: "minecraft:crying_obsidian",
    D: "enchantinginfuser:enchanting_infuser",
  });
});
