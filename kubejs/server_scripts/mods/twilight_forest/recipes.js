ServerEvents.recipes(e => {
  e.remove({ id: "l2complements:craft/sculkium_ingot" });

 e.shaped("kubejs:twilight_alloy_ingot", ["ACB", "FGD", "BEA"], {
    A: "twilightforest:alpha_yeti_fur",
    B: "twilightforest:carminite",
    C: "twilightforest:fiery_ingot",
    D: "twilightforest:ironwood_ingot",
    E: "twilightforest:knightmetal_ingot",
    F: "twilightforest:steeleaf_ingot",
    G: "twilightforest:lamp_of_cinders"
  }).keepIngredient("twilightforest:lamp_of_cinders")


});
