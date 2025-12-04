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
});
