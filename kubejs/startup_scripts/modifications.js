ItemEvents.modification(e => {
  e.modify("lethality:nightmare_sword", item => {
    item.attackDamage = item.attackDamage + 99;
  });

  e.modify("lethality:defiled_greatsword", item => {
    item.attackDamage = item.attackDamage + 32;
  });

  e.modify("brutality:royal_guardian_sword", item => {
    item.attackDamage = item.attackDamage + 1499;
  });

  e.modify("brutality:darkin_blade", item => {
    item.attackDamage = item.attackDamage + 24;
  });

  e.modify("lethality:hf_meowrasama", item => {
    item.attackDamage = item.attackDamage + 24;
  });

  e.modify("block_factorys_bosses:knight_sword", item => {
    item.attackDamage = item.attackDamage + 1799;
  });
});
