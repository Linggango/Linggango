const ATTRS = {
  IRON_POWER: 'irons_spellbooks:spell_power',
  IRON_MANA:  'irons_spellbooks:max_mana',
  IRON_REGEN: 'irons_spellbooks:mana_regen',
  ARS:        'ars_nouveau:ars_nouveau.perk.spell_damage' 
};

// Use separate modifier IDs so they don't overwrite each other
const MOD_TIER = 'kubejs:mana_tier_bonus'; 
const MOD_CRYSTAL = 'kubejs:mana_crystal_bonus';

// Configurable crystal limits per player
const MAX_CRYSTALS = {
  POWER: 4,
  MANA: 2,
  REGEN: 2
};

function applyAllBuffs(player, serverData) {
  let uuid = player.uuid.toString();
  
  // Rhino JS (KubeJS engine) doesn't support the '?.' operator well. 
  // Swapped to standard fallbacks to fix the "missing name after ." error.
  let tier = (serverData.manaTiers && serverData.manaTiers[uuid]) ? serverData.manaTiers[uuid] : 0;
  let crystals = (serverData.crystals && serverData.crystals[uuid]) ? serverData.crystals[uuid] : { power: 0, mana: 0, regen: 0 };

  // 1. Remove existing modifiers to prevent stacking duplicates on login
  player.removeAttribute(ATTRS.IRON_POWER, MOD_TIER);
  player.removeAttribute(ATTRS.ARS, MOD_TIER);
  
  player.removeAttribute(ATTRS.IRON_POWER, MOD_CRYSTAL);
  player.removeAttribute(ATTRS.IRON_MANA, MOD_CRYSTAL);
  player.removeAttribute(ATTRS.IRON_REGEN, MOD_CRYSTAL);

  // 2. Apply Tier Buffs (The Shards)
  if (tier > 0) {
    let ironBonus = tier === 1 ? 5.0 : tier === 2 ? 10.0 : 15.0;
    let arsBonus  = tier === 1 ? 20.0 : tier === 2 ? 45.0 : 85.0;
    
    player.modifyAttribute(ATTRS.IRON_POWER, MOD_TIER, ironBonus, 'addition');
    player.modifyAttribute(ATTRS.ARS, MOD_TIER, arsBonus, 'addition');
  }

  // 3. Apply Crystal Buffs
  // Adjust the multiplier values (0.20, 50.0, 0.5) to fit your desired balance
  if (crystals.power > 0) {
    player.modifyAttribute(ATTRS.IRON_POWER, MOD_CRYSTAL, crystals.power * 0.20, 'addition'); 
  }
  if (crystals.mana > 0) {
    player.modifyAttribute(ATTRS.IRON_MANA, MOD_CRYSTAL, crystals.mana * 50.0, 'addition'); 
  }
  if (crystals.regen > 0) {
    player.modifyAttribute(ATTRS.IRON_REGEN, MOD_CRYSTAL, crystals.regen * 0.5, 'addition'); 
  }
}

ItemEvents.foodEaten(e => {
  let { player, server, item } = e;
  let serverData = server.persistentData;
  
  // Initialize data stores if they don't exist yet
  if (!serverData.manaTiers) serverData.manaTiers = {};
  if (!serverData.crystals) serverData.crystals = {};

  let uuid = player.uuid.toString();
  let currentTier = serverData.manaTiers[uuid] || 0;
  let pCrystals = serverData.crystals[uuid] || { power: 0, mana: 0, regen: 0 };
  let updateNeeded = false;

  // --- SHARD TIERS ---
  if (item.id === "kubejs:fading_shard_of_compressed_mana") {
    if (currentTier >= 1) {
      player.tell("§cYou are already too powerful for this weak shard.");
      return;
    }
    serverData.manaTiers[uuid] = 1;
    updateNeeded = true;
    player.tell("§4§lYour blood boils with raw mana..");
    server.runCommandSilent(`advancement grant ${player.username} only linggango:fading_shard`);
  }

  else if (item.id === "kubejs:shard_of_compressed_mana") {
    if (currentTier >= 2) {
      player.tell("§cYou have already absorbed this level of power.");
      return;
    }
    serverData.manaTiers[uuid] = 2;
    updateNeeded = true;
    player.tell("§c§lYour blood adapts, unifies with mana.");
    server.runCommandSilent(`advancement grant ${player.username} only linggango:pure_mana`);
  }

  else if (item.id === "kubejs:purified_shard_of_compressed_mana") {
    if (currentTier >= 3) {
      player.tell("§dYou have already reached the pinnacle of mana.");
      return;
    }
    serverData.manaTiers[uuid] = 3;
    updateNeeded = true;
    player.tell("§c§lYou fully unlock your potential with magic.");
    server.runCommandSilent(`advancement grant ${player.username} only linggango:purified_shard`);
  }

  // --- CRYSTALS ---
  else if (item.id === "kubejs:mana_crystal") {
    if (pCrystals.power >= MAX_CRYSTALS.POWER) {
      player.tell("§cYour body cannot handle any more Spell Power crystals.");
      return;
    }
    pCrystals.power++;
    serverData.crystals[uuid] = pCrystals;
    updateNeeded = true;
    player.tell("§bYour spell power has permanently increased!");
  }

  else if (item.id === "kubejs:mana_capacity_crystal") {
    if (pCrystals.mana >= MAX_CRYSTALS.MANA) {
      player.tell("§cYour body cannot handle any more Mana Capacity crystals.");
      return;
    }
    pCrystals.mana++;
    serverData.crystals[uuid] = pCrystals;
    updateNeeded = true;
    player.tell("§bYour mana capacity has expanded!");
  }

  else if (item.id === "kubejs:mana_regeneration_crystal") {
    if (pCrystals.regen >= MAX_CRYSTALS.REGEN) {
      player.tell("§cYour body cannot handle any more Mana Regeneration crystals.");
      return;
    }
    pCrystals.regen++;
    serverData.crystals[uuid] = pCrystals;
    updateNeeded = true;
    player.tell("§bYour mana flows faster now!");
  }

  // If any item was successfully eaten, apply the new stats
  if (updateNeeded) {
    applyAllBuffs(player, serverData);
  }
});

// Restore stats on login and respawn
const restoreStats = (e) => {
  let serverData = e.server.persistentData;
  applyAllBuffs(e.player, serverData);
};

PlayerEvents.respawned(e => restoreStats(e));
PlayerEvents.loggedIn(e => restoreStats(e));

// Chat command to reset stats for testing
PlayerEvents.chat(e => {
  if (e.message.trim() === '!resetmana') {
    let uuid = e.player.uuid.toString();
    let serverData = e.server.persistentData;

    // Wipe persistent data
    if (serverData.manaTiers) serverData.manaTiers[uuid] = 0;
    if (serverData.crystals) serverData.crystals[uuid] = { power: 0, mana: 0, regen: 0 };

    // Strip modifiers
    e.player.removeAttribute(ATTRS.IRON_POWER, MOD_TIER);
    e.player.removeAttribute(ATTRS.ARS, MOD_TIER);
    e.player.removeAttribute(ATTRS.IRON_POWER, MOD_CRYSTAL);
    e.player.removeAttribute(ATTRS.IRON_MANA, MOD_CRYSTAL);
    e.player.removeAttribute(ATTRS.IRON_REGEN, MOD_CRYSTAL);

    e.player.tell("§aMana stats have been completely reset!");
    e.cancel(); // Prevent the command from showing up in public chat
  }
});