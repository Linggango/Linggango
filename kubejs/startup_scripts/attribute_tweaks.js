EntityJSEvents.attributes(e => {
  e.modify("minecraft:warden", attributes => {
    attributes.add("minecraft:generic.max_health", 1500);
    attributes.add("minecraft:generic.attack_damage", 50);
    attributes.add("minecraft:generic.movement_speed", 0.15);
  });

  e.modify("minecraft:zombie", attributes => {
    attributes.add("minecraft:generic.max_health", 25);
    attributes.add("minecraft:generic.attack_damage", 4.5);
    attributes.add("minecraft:generic.movement_speed", 0.09);
  });

  e.modify("minecraft:skeleton", attributes => {
    attributes.add("minecraft:generic.max_health", 10);
    attributes.add("minecraft:generic.attack_damage", 4.5);
    attributes.add("minecraft:generic.movement_speed", 0.05);
  });

  e.modify("armageddon_mod:eldoraththe_ancient_builder", attributes => {
    attributes.add("minecraft:generic.attack_damage", 30);
    attributes.add("minecraft:generic.movement_speed", 0.15);
    attributes.add("minecraft:generic.attack_knockback", 3);
  });

  e.modify("undergarden:forgotten_guardian", attributes => {
    attributes.add("minecraft:generic.attack_damage", 30);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 1.2);
    attributes.add("minecraft:generic.max_health", 1500);
  });

  e.modify("armageddon_mod:zoranththe_forgotten_one", attributes => {
    attributes.add("minecraft:generic.attack_damage", 40);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.5);
    attributes.add("minecraft:generic.armor", 20);
  });

  e.modify("minecraft:ender_dragon", attributes => {
    attributes.add("minecraft:generic.armor", 20);
  });

  e.modify("armageddon_mod:zoranththe_forgotten_one", attributes => {
    attributes.add("minecraft:generic.attack_damage", 40);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.5);
    attributes.add("minecraft:generic.armor", 30);
  });

  e.modify("armageddon_mod:elvenite_paladin", attributes => {
    attributes.add("minecraft:generic.attack_damage", 65);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.2);
    attributes.add("minecraft:generic.armor", 50);
    attributes.add("minecraft:generic.armor_toughness", 20);
  });

  e.modify("armageddon_mod:vaedricthe_fallen_wanderer", attributes => {
    attributes.add("minecraft:generic.attack_damage", 75);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.5);
    attributes.add("minecraft:generic.armor", 50);
    attributes.add("minecraft:generic.armor_toughness", 20);
  });

  e.modify("armageddon_mod:bringer_of_doom", attributes => {
    attributes.add("minecraft:generic.attack_damage", 75);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.5);
    attributes.add("minecraft:generic.armor", 50);
    attributes.add("minecraft:generic.armor_toughness", 20);
  });

  e.modify("armageddon_mod:bringer_of_doom_p_2", attributes => {
    attributes.add("minecraft:generic.attack_damage", 85);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.6);
    attributes.add("minecraft:generic.armor", 10);
    attributes.add("minecraft:generic.armor_toughness", 10);
  });

  e.modify("armageddon_mod:the_famine", attributes => {
    attributes.add("minecraft:generic.attack_damage", 85);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.6);
    attributes.add("minecraft:generic.armor", 10);
    attributes.add("minecraft:generic.armor_toughness", 10);
  });

  e.modify("armageddon_mod:the_chaos", attributes => {
    attributes.add("minecraft:generic.attack_damage", 85);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.6);
    attributes.add("minecraft:generic.armor", 10);
    attributes.add("minecraft:generic.armor_toughness", 10);
  });

  e.modify("armageddon_mod:the_discord", attributes => {
    attributes.add("minecraft:generic.attack_damage", 85);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.6);
    attributes.add("minecraft:generic.armor", 10);
    attributes.add("minecraft:generic.armor_toughness", 10);
  });

  e.modify("armageddon_mod:sanghor_lord_of_blood", attributes => {
    attributes.add("minecraft:generic.attack_damage", 90);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.6);
    attributes.add("minecraft:generic.armor", 10);
    attributes.add("minecraft:generic.armor_toughness", 10);
  });

  e.modify("armageddon_mod:sanghor_lord_of_bloodp_2", attributes => {
    attributes.add("minecraft:generic.attack_damage", 95);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.6);
    attributes.add("minecraft:generic.armor", 10);
    attributes.add("minecraft:generic.armor_toughness", 10);
  });

  e.modify("armageddon_mod:nyxaris_the_veil_of_oblivion", attributes => {
    attributes.add("minecraft:generic.attack_damage", 125);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 1.0);
    attributes.add("minecraft:generic.armor", 35);
    attributes.add("minecraft:generic.armor_toughness", 50);
  });

  e.modify("mowziesmobs:ferrous_wroughtnaut", attributes => {
    attributes.add("minecraft:generic.attack_damage", 40);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 2.0);
  });

  e.modify("minecraft:ender_dragon", attributes => {
    attributes.add("minecraft:generic.attack_damage", 60);
    attributes.add("minecraft:generic.max_health", 6500);
    attributes.add("minecraft:generic.armor", 35);
    attributes.add("minecraft:generic.armor_toughness", 50);
  });

  e.modify("born_in_chaos_v1:lord_pumpkinhead", attributes => {
    attributes.add("minecraft:generic.attack_damage", 60);
    attributes.add("minecraft:generic.max_health", 2500);
  });

  e.modify("terramity:trial_guardian", attributes => {
    attributes.add("minecraft:generic.attack_damage", 70);
  });

  e.modify("terramity:super_sniffer", attributes => {
    attributes.add("minecraft:generic.attack_damage", 55);
  });

  e.modify("terramity:gob", attributes => {
    attributes.add("minecraft:generic.attack_damage", 55);
  });

  e.modify("terramity:virtue", attributes => {
    attributes.add("minecraft:generic.attack_damage", 85);
  });

  e.modify("terramity:enchanter_merlin", attributes => {
    attributes.add("minecraft:generic.attack_damage", 90);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.6);
    attributes.add("minecraft:generic.armor", 10);
    attributes.add("minecraft:generic.armor_toughness", 10);
  });

  e.modify("terramity:sorceress_circe", attributes => {
    attributes.add("minecraft:generic.attack_damage", 80);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.6);
    attributes.add("minecraft:generic.armor", 10);
    attributes.add("minecraft:generic.armor_toughness", 10);
  });

  e.modify("terramity:gundalf", attributes => {
    attributes.add("minecraft:generic.attack_damage", 100);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 1.0);
    attributes.add("minecraft:generic.armor", 25);
    attributes.add("minecraft:generic.armor_toughness", 25);
  });

  e.modify("terramity:ultra_sniffer", attributes => {
    attributes.add("minecraft:generic.attack_damage", 150);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 1.0);
    attributes.add("minecraft:generic.armor", 25);
    attributes.add("minecraft:generic.armor_toughness", 25);
  });

  e.modify("ancient_elements:ancient_elemental", attributes => {
    attributes.add("minecraft:generic.attack_damage", 120);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 1.0);
    attributes.add("minecraft:generic.armor", 25);
    attributes.add("minecraft:generic.armor_toughness", 25);
    attributes.add("minecraft:generic.max_health", 25500);
  });

  e.modify("armageddon_mod:iron_colossus", attributes => {
    attributes.add("minecraft:generic.attack_damage", 7);
    attributes.add("minecraft:generic.movement_speed", 0.2);
    attributes.add("minecraft:generic.attack_knockback", 0.5);
    attributes.add("minecraft:generic.armor", 5);
    attributes.add("minecraft:generic.armor_toughness", 2);
  });
});
