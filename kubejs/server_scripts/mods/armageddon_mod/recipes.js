ServerEvents.recipes(e => {
  e.remove({ id: "armageddon_mod:shadowed_ingot_recipe" });
  e.remove({ id: "armageddon_mod:emeraldtotemrecipe" });
  e.remove({ id: "armageddon_mod:fierywitherskullrecipe" });
  e.remove({ id: "armageddon_mod:cocoonof_blood_recipe" });
  e.remove({ id: "armageddon_mod:sun_emblem_recipe_2" });
  e.remove({ id: "armageddon_mod:corrupted_tear_recipe" });
  e.remove({ id: "armageddon_mod:titansinsignacraftingrecipe" });
  e.remove({ id: "armageddon_mod:echoingscraprecipe" });

  e.shaped("armageddon_mod:iron_ring", ["ABA", "B B", "ABA"], {
    A: "create:iron_sheet",
    B: "minecraft:iron_ingot",
  });

  e.shaped("armageddon_mod:bee_stinger", [" A ", "ABA", " A "], {
    A: "minecraft:poisonous_potato",
    B: "minecraft:flint",
  });

  e.shaped("armageddon_mod:guardians_crystal", [" AB", "ACA", "BA "], {
    A: "minecraft:prismarine_shard",
    B: "minecraft:sea_lantern",
    C: "armageddon_mod:khyros_tear",
  });

  e.shaped("armageddon_mod:wither_spine", ["   ", "ABA", "CCC"], {
    A: "mythsandlegends:scorched_bone",
    B: "minecraft:wither_rose",
    C: "biomancy:withered_mob_marrow",
  });

  e.shaped("armageddon_mod:blindfold", ["ABB", "BCB", "BBB"], {
    A: "minecraft:string",
    B: "forbidden_arcanus:cloth",
    C: "armageddon_mod:khyros_tear",
  });

  e.shaped("armageddon_mod:fisher_hat", ["ABC", "BDB", "EFG"], {
    A: "minecraft:pufferfish_bucket",
    B: "minecraft:cod_bucket",
    C: "minecraft:leather",
    D: "armageddon_mod:khyros_tear",
    E: "minecraft:salmon_bucket",
    F: "minecraft:leather_helmet",
    G: "minecraft:tropical_fish_bucket",
  });

  e.shaped("armageddon_mod:hunter_cloak", ["ABA", "ACA", "A A"], {
    A: "minecraft:leather",
    B: "minecraft:leather_chestplate",
    C: "armageddon_mod:khyros_tear",
  });

  e.shaped("armageddon_mod:fiery_wither_skull", ["ABA", "CDC", "AEA"], {
    A: "undergarden:utherium_crystal",
    B: "minecraft:lava_bucket",
    C: "minecraft:netherrack",
    D: "minecraft:nether_wart",
    E: "minecraft:diamond",
  });
});
