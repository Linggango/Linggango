ServerEvents.recipes(e => {
  e.remove({ id: "born_in_chaos_v1:great_dark_crusher_k" });
  e.remove({ id: "born_in_chaos_v1:great_reaper_ax_k" });
  e.remove({ id: "born_in_chaos_v1:armor_plate_from_dark_metal_k" });

  e.shaped("born_in_chaos_v1:darkwarblade", [" AB", "ACA", "DA "], {
    A: "kubejs:dark_metal_sheet",
    B: "born_in_chaos_v1:dark_metal_ingot",
    C: "born_in_chaos_v1:dark_metal_block",
    D: "born_in_chaos_v1:sharpened_dark_metal_sword",
  });

  e.shaped("born_in_chaos_v1:great_reaper_axe", ["ABC", "AD ", " E "], {
    A: "kubejs:dark_metal_sheet",
    B: "born_in_chaos_v1:lifestealer_bone",
    C: "born_in_chaos_v1:dark_metal_nugget",
    D: "born_in_chaos_v1:bone_handle",
    E: "born_in_chaos_v1:bone_handle",
  });
});
