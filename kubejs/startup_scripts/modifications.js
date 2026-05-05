ItemEvents.modification(e => {
  e.modify("lethality:nightmare_sword", item => {
    let currentDamage = item.attackDamage || 0;
    item.attackDamage = currentDamage + 99;
  });

  e.modify("lethality:defiled_greatsword", item => {
    let currentDamage = item.attackDamage || 0;
    item.attackDamage = currentDamage + 32;
  });

  e.modify("brutality:royal_guardian_sword", item => {
    let currentDamage = item.attackDamage || 0;
    item.attackDamage = currentDamage + 299;
  });

  e.modify("brutality:darkin_blade", item => {
    let currentDamage = item.attackDamage || 0;
    item.attackDamage = currentDamage + 24;
  });

  e.modify("lethality:hf_meowrasama", item => {
    let currentDamage = item.attackDamage || 0;
    item.attackDamage = currentDamage + 24;
  });

  e.modify("block_factorys_bosses:knight_sword", item => {
    let currentDamage = item.attackDamage || 0;
    item.attackDamage = currentDamage + 119;
  });


  const $UUID = Java.loadClass("java.util.UUID");

  [
    "cataclysm:cursium_helmet",
    "cataclysm:cursium_chestplate",
    "cataclysm:cursium_leggings",
    "cataclysm:cursium_boots",
  ].forEach(id => {
    e.modify(id, item => {
      item.addAttribute(
        "minecraft:generic.armor",
        $UUID.randomUUID(),
        "Armor",
        5.0,
        "addition"
      );

      item.addAttribute(
        "minecraft:generic.armor_toughness",
        $UUID.randomUUID(),
        "Armor toughness",
        5.0,
        "addition"
      );

      item.addAttribute(
        "irons_spellbooks:spell_power",
        $UUID.randomUUID(),
        "Base Power",
        0.05,
        "multiply_base"
      );

      item.addAttribute(
        "minecraft:generic.max_health",
        $UUID.randomUUID(),
        "Max health",
        10.0,
        "addition"
      );
    });
  });
});
