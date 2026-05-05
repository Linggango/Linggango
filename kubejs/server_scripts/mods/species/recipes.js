ServerEvents.recipes(e => {

  e.remove({ id: "species:wicked_dope" });
  e.remove({ id: "species:wicked_mask" });

  e.shaped("species:kinetic_core", ["ABA", "BBB", "ABA"], {
    A: "alexscaves:scarlet_neodymium_ingot",
    B: "alexscaves:metal_swarf",
  });
});
