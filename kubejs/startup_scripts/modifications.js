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
    item.attackDamage = currentDamage + 1499;
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
    item.attackDamage = currentDamage + 1799;
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

  [
    "knightsnmages:elite_mage_helmet",
    "knightsnmages:elite_mage_chestplate",
    "knightsnmages:elite_mage_leggings",
    "knightsnmages:elite_mage_boots",
  ].forEach(id => {
    e.modify(id, item => {
      item.addAttribute(
        "minecraft:generic.armor",
        $UUID.randomUUID(),
        "Armor",
        15.0,
        "addition"
      );

      item.addAttribute(
        "minecraft:generic.armor_toughness",
        $UUID.randomUUID(),
        "Armor toughness",
        5.0,
        "multiply_base"
      );

      item.addAttribute(
        "irons_spellbooks:fire_spell_power",
        $UUID.randomUUID(),
        "Fire Power",
        0.2,
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

  [
    "knightsnmages:dark_knight_helmet",
    "knightsnmages:dark_knight_chestplate",
    "knightsnmages:dark_knight_leggings",
    "knightsnmages:dark_knight_boots",
  ].forEach(id => {
    e.modify(id, item => {
      // SET DURABILITY HERE
      item.maxDamage = 4000 

      item.addAttribute(
        "minecraft:generic.armor",
        "d8e0e03e-6705-4c0e-8558-4c1729098491", // See note below!
        "Armor",
        25.0,
        "addition"
      );

      item.addAttribute(
        "minecraft:generic.armor_toughness",
        "3d996614-2c6b-4e12-b5e1-0f7238711130",
        "Armor toughness",
        10.0,
        "multiply_base"
      );

      item.addAttribute(
        "irons_spellbooks:blood_spell_power",
        "f4f8997a-2453-4811-9252-475269382218",
        "Blood Power",
        0.3,
        "multiply_base"
      );

      item.addAttribute(
        "minecraft:generic.max_health",
        "a7465910-4859-4252-9447-975262788506",
        "Max health",
        20.0,
        "addition"
      );
    });
  });

  [
    "knightsnmages:blue_knight_helmet",
    "knightsnmages:blue_knight_chestplate",
    "knightsnmages:blue_knight_leggings",
    "knightsnmages:blue_knight_boots",
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
        "multiply_base"
      );

      item.addAttribute(
        "irons_spellbooks:holy_spell_power",
        $UUID.randomUUID(),
        "Holy Power",
        0.5,
        "multiply_base"
      );

      item.addAttribute(
        "minecraft:generic.max_health",
        $UUID.randomUUID(),
        "Max health",
        2.0,
        "addition"
      );
    });
  });
});
