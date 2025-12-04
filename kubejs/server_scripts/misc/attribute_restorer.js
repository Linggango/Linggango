PlayerEvents.tick(e => {
  if (e.player.age % 100 !== 0) return;

  let { player, server } = e;
  if (!server?.persistentData?.manaTiers) return;

  let uuid = player.uuid.toString();
  let tier = server.persistentData.manaTiers[uuid] || 0;
  if (tier === 0) return;

  let tierAttributes = {
    1: { spellPower: 3, spellDamage: 3 },
    2: { spellPower: 5, spellDamage: 4 },
    3: { spellPower: 8, spellDamage: 5 },
  };

  let attrs = tierAttributes[tier];
  if (!attrs) return;

  if (player.getAttributeValue("irons_spellbooks:spell_power") !== attrs.spellPower) {
    server.runCommandSilent(
      `attribute ${player.username} irons_spellbooks:spell_power base set ${attrs.spellPower}`
    );
    server.runCommandSilent(
      `attribute ${player.username} ars_nouveau:ars_nouveau.perk.spell_damage base set ${attrs.spellDamage}`
    );
  }
});
