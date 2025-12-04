ServerEvents.recipes(e => {
  e.custom({
    type: "powah:energizing",
    ingredients: [
      {
        item: "minecraft:iron_block",
      },
      {
        item: "minecraft:gold_block",
      },
    ],
    energy: 90_000,
    result: {
      item: "powah:energized_steel_block",
    },
  });

  e.custom({
    type: "powah:energizing",
    ingredients: [
      {
        item: "kubejs:blazerod_block",
      },
    ],
    energy: 810_000,
    result: {
      item: "powah:blazing_crystal_block",
    },
  });

  e.custom({
    type: "powah:energizing",
    ingredients: [
      {
        item: "minecraft:diamond_block",
      },
    ],
    energy: 2_700_000,
    result: {
      item: "powah:niotic_crystal_block",
    },
  });

  e.custom({
    type: "powah:energizing",
    ingredients: [
      {
        item: "minecraft:emerald_block",
      },
    ],
    energy: 9_000_000,
    result: {
      item: "powah:spirited_crystal_block",
    },
  });
});
