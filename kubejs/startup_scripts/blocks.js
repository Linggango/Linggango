StartupEvents.registry("block", e => {
  e.create("blazerod_block")
    .displayName("Blaze Rod Block")
    .soundType("stone")
    .hardness(2.0)
    .resistance(5.0)
    .lightLevel(0.9)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("minecraft:needs_iron_tool");
});
