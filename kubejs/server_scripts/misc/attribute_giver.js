ItemEvents.foodEaten(e => {
  let { player, server, item } = e;
  let serverData = server?.persistentData;
  if (!serverData?.manaTiers) serverData.manaTiers = {};

  let uuid = player.uuid.toString();
  let currentTier = serverData.manaTiers[uuid] || 0;

  if (item.id === "kubejs:fading_shard_of_compressed_mana") {
    if (currentTier >= 1) {
      player.tell("§cYou are already too powerful for this weak shard.");
      return;
    }
    serverData.manaTiers[uuid] = 1;
    player.tell("§4§lYour blood boils with raw mana..");
    return;
  }

  if (item.id === "kubejs:shard_of_compressed_mana") {
    if (currentTier >= 2) {
      player.tell("§cYou have already absorbed this level of power.");
      return;
    }
    serverData.manaTiers[uuid] = 2;
    player.tell("§c§lYour blood adapts, unifies with mana");
    return;
  }

  if (item.id === "kubejs:purified_shard_of_compressed_mana") {
    if (currentTier >= 3) {
      player.tell("§dYou have already reached the pinnacle of mana.");
      return;
    }
    serverData.manaTiers[uuid] = 3;
    player.tell("§c§lYou fully unlock your potential with magic.");
  }
});
