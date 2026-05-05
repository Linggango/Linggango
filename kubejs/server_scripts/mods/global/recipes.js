ServerEvents.recipes(e => {

  e.shaped("minecraft:chest", ["AAA", "A A", "AAA"], {
    A: "#minecraft:planks"
  });

  e.shaped("minecraft:bookshelf", ["AAA", "BBB", "AAA"], {
    A: "#minecraft:planks",
    B: "minecraft:book"
  });
});
