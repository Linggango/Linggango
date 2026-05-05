Ponder.tags((event) => {
    event.createTag("ars_nouveau:essentials", // Essentials Category
        "ars_nouveau:novice_spell_book",
        "What you need to know to get started with Ars Nouveau.",
        "Ars Nouveau essentials",
        [
        // this makes the category
        'ars_nouveau:worn_notebook',
        'ars_nouveau:novice_spell_book',
        'ars_nouveau:scribes_table',
        'ars_nouveau:dowsing_rod',
        'ars_nouveau:dominion_wand'
        
        
        ]);

    event.createTag("ars_nouveau:beginning", // Beginning Category
        "ars_nouveau:imbuement_chamber",
        "Beginner steps of getting into Ars Nouveau.",
        "Magic Mod Mechanics",
        [
        // this makes the category
        "ars_nouveau:imbuement_chamber",
        "ars_nouveau:enchanting_apparatus",
        "ars_nouveau:ritual_brazier",

        
        ]);

        event.createTag("ars_nouveau:source", // Source Category
        'ars_nouveau:creative_source_jar',
        "How to get and use source.",
        "Unlimited SOURCE!",
        [
        // this makes the category
        'ars_nouveau:source_jar',
        'ars_nouveau:agronomic_sourcelink',
        'ars_nouveau:volcanic_sourcelink',
        'ars_nouveau:alchemical_sourcelink',
        'ars_nouveau:vitalic_sourcelink',
        'ars_nouveau:mycelial_sourcelink',

        ]);

        event.createTag("ars_nouveau:apprentice", // Apprentice Category
        'ars_nouveau:apprentice_spell_book',
        "Beginner steps of an apprentice.",
        "You'll learn how to imbue threads and basic tips/tricks",
        [
        // this makes the category
        'ars_nouveau:alteration_table',
        'ars_nouveau:warp_scroll',
        ]);

       event.createTag("ars_nouveau:routing", // How to Route Source
        'ars_nouveau:relay',
        "Routing Source",
        "How to route source between different blocks.",
        [
        // this makes the category
        'ars_nouveau:relay',
        'ars_nouveau:relay_splitter',
        'ars_nouveau:relay_deposit',
        'ars_nouveau:relay_warp',
        'ars_nouveau:relay_collector',
        ]);
    event.createTag("ars_nouveau:bluetooth", // Bluetooth Magic category
        "ars_nouveau:scryers_oculus",
        "Bluetooth Magic",
        "This bluetooth device uh.. has been paired succesfuly!",
        [
        // this makes the category
        "ars_nouveau:scryers_oculus",
        'ars_nouveau:scryers_crystal',
        'ars_nouveau:scryer_scroll',
        'ars_nouveau:enchanters_eye'
        
        ]);
    event.createTag("ars_nouveau:storage", // Storage Category
        "ars_nouveau:storage_lectern",
        "How to store items in Ars Nouveau.",
        "Storage Solutions",
        [
        // this makes the category
        "ars_nouveau:storage_lectern",
        'ars_nouveau:bookwyrm_charm',
        'ars_nouveau:repository',
        ]);
});
    
const ImbuementTile = Java.loadClass("com.hollingsworth.arsnouveau.common.block.tile.ImbuementTile");
const EnchantingTile = Java.loadClass("com.hollingsworth.arsnouveau.common.block.tile.EnchantingApparatusTile");
const ArcanePedestalTile = Java.loadClass("com.hollingsworth.arsnouveau.common.block.tile.ArcanePedestalTile");
const SourceJarTile = Java.loadClass("com.hollingsworth.arsnouveau.common.block.tile.SourceJarTile");
const PotionJarTile = Java.loadClass("com.hollingsworth.arsnouveau.common.block.tile.PotionJarTile");
// ars_nouveau:volcanic_sourcelink
Ponder.registry((event) => { 
    event.create('ars_nouveau:volcanic_sourcelink').scene("volcanic", "How to Use the Volcanic Sourcelink", (scene, util) => {
        scene.showBasePlate();
        scene.idle(40);

        scene.world.setBlock([1,1,1], "stone", true);
        scene.world.setBlock([1,1,2], "stone", true);
        scene.world.setBlock([1,1,3], "stone", true);
        scene.world.setBlock([2,1,1], "stone", true);
        scene.world.setBlock([2,1,2], "stone", true);
        scene.world.setBlock([2,1,3], "stone", true);
        scene.world.setBlock([3,1,1], "stone", true);
        scene.world.setBlock([3,1,2], "stone", true);
        scene.world.setBlock([3,1,3], "stone", true);
        scene.world.showSection([2, 1, 1], Facing.UP)
        scene.world.showSection([2, 1, 2], Facing.UP)
        scene.world.showSection([2, 1, 3], Facing.UP)
        scene.world.showSection([1, 1, 1], Facing.UP)
        scene.world.showSection([1, 1, 2], Facing.UP)
        scene.world.showSection([1, 1, 3], Facing.UP)
        scene.world.showSection([3, 1, 1], Facing.UP)
        scene.world.showSection([3, 1, 2], Facing.UP)
        scene.world.showSection([3, 1, 3], Facing.UP)
        scene.idle(40);
        scene.world.setBlock([2,2,2], "ars_nouveau:volcanic_sourcelink", true);
        scene.world.showSection([2, 2, 2], Facing.DOWN,)
        scene.idle(40);
        scene.text(60, "This is a Volcanic Sourcelink.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
        scene.text(40, "Here's how to use it.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        let itemLink = scene.world.createItemEntity(util.vector.topOf(0, 0, 0).add(2, 2.5, 2), util.vector.of(-0.05, 0.4, -0.05), "oak_log");
        scene.idle(60);
        scene.text(60, "It produces source when there is burnable items.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.text(60, "The item also can be on a arcane pedestal", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.world.setBlock([3,2,3], "ars_nouveau:arcane_pedestal", true);
        scene.world.showSection([3, 2, 3], Facing.UP)
        scene.idle(80);
        scene.text(60, "It can burn any burnable items but it produces more source with items that have higher burn time.", [2.0, 1, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT).attachKeyFrame();
        scene.idle(40);
        scene.world.removeEntity(itemLink)
        scene.particles.simple(80, "minecraft:flame", [1.75,1.75,1.75]).density(6).scale(1).delta([0.2,-0.2,0.2]);
        scene.particles.dust(80, "#ff0000", "#ff3c00", [1.75,1.75,1.75]).density(6).scale(1).delta([0.2,-0.2,0.2]);
        scene.idle(40);
        scene.text(60, "If there isn't a storage block available source will be stored in within.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.idle(100);
        scene.text(60, "It also changes the Envinronment! If there's stone under it, it will make it into magma blocks", [2.0, 1, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.particles.simple(80, "minecraft:flame", [1.5,1.5,1.5]).density(10).scale(1).delta([0.2,-0.2,0.2]);
        scene.particles.dust(80, "#ff0000", "#ff3c00", [1.5,1.5,1.5]).density(10).scale(1).delta([0.2,-0.2,0.2]);
        scene.idle(80);
        scene.world.setBlock([1,1,1], "magma_block", false);
        scene.text(60, "Then turn magma blocks into lava blocks", [2.0, 1, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.particles.simple(80, "minecraft:flame", [1.5,1.5,1.5]).density(10).scale(1).delta([0.2,-0.2,0.2]);
        scene.particles.dust(80, "#ff0000", "#ff3c00", [1.5,1.5,1.5]).density(10).scale(1).delta([0.2,-0.2,0.2]);
        scene.idle(80);
        scene.world.setBlock([1,1,1], "lava", false);



    });
});
// ars_nouveau:agronomic_sourcelink
Ponder.registry((event) => { 
    event.create('ars_nouveau:agronomic_sourcelink').scene("agronomic", "How to Use the Agronomic Sourcelink", (scene, util) => {
scene.showBasePlate();
        scene.idle(40);
        scene.world.setBlock([1,1,1], "farmland", true);
        scene.world.setBlock([1,1,2], "farmland", true);
        scene.world.setBlock([1,1,3], "farmland", true);
        scene.world.setBlock([2,1,1], "farmland", true);
        scene.world.setBlock([2,1,2], "farmland", true);
        scene.world.setBlock([2,1,3], "farmland", true);
        scene.world.setBlock([3,1,1], "farmland", true);
        scene.world.setBlock([3,1,2], "farmland", true);
        scene.world.setBlock([3,1,3], "farmland", true);
        scene.world.showSection([2, 1, 1], Facing.UP)
        scene.world.showSection([2, 1, 2], Facing.UP)
        scene.world.showSection([2, 1, 3], Facing.UP)
        scene.world.showSection([1, 1, 1], Facing.UP)
        scene.world.showSection([1, 1, 2], Facing.UP)
        scene.world.showSection([1, 1, 3], Facing.UP)
        scene.world.showSection([3, 1, 1], Facing.UP)
        scene.world.showSection([3, 1, 2], Facing.UP)
        scene.world.showSection([3, 1, 3], Facing.UP)
        scene.idle(40);
        scene.world.setBlock([2,2,2], "ars_nouveau:agronomic_sourcelink", true);
        scene.world.showSection([2, 2, 2], Facing.DOWN,)
        scene.idle(40);
        scene.text(60, "This is a Agronomic Sourcelink.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
        scene.text(40, "Here's how to use it.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.text(60, "First plant some seeds.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(100);
        scene.text(60, "(It can be anything that gives growth ticks)", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT).attachKeyFrame();;
        scene.idle(80);
        scene.world.setBlock([1,2,1], "wheat", true);
        scene.world.setBlock([1,2,2], "wheat", true);
        scene.world.setBlock([1,2,3], "wheat", true);
        scene.world.setBlock([2,2,1], "wheat", true);
        scene.world.setBlock([2,2,3], "wheat", true);
        scene.world.setBlock([3,2,1], "wheat", true);
        scene.world.setBlock([3,2,2], "wheat", true);
        scene.world.setBlock([3,2,3], "wheat", true);
        scene.world.showSection([2, 2, 1], Facing.UP)
        scene.world.showSection([2, 2, 3], Facing.UP)
        scene.world.showSection([1, 2, 1], Facing.UP)
        scene.world.showSection([1, 2, 2], Facing.UP)
        scene.world.showSection([1, 2, 3], Facing.UP)
        scene.world.showSection([3, 2, 1], Facing.UP)
        scene.world.showSection([3, 2, 2], Facing.UP)
        scene.world.showSection([3, 2, 3], Facing.UP)
        scene.idle(80);
        scene.text(60, "It will produce source when something grows near it", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.particles.simple(20, "minecraft:happy_villager", [1.5,1.75,1.5]).density(1).scale(1).delta([0.2,-0.2,0.2]);
        scene.particles.dust(20, "#00ff37", "#3afd7b", [1.5,1.75,1.5]).density(1).scale(1).delta([0.2,-0.2,0.2]);
        scene.world.modifyBlock([1, 2, 1], () => Block.id("minecraft:wheat").with("age","5"), true);
        scene.idle(100);
        scene.text(60, "If there isn't a storage block available source will be stored in within.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.idle(100);
    
    });
});
// ars_nouveau:vitalic_sourcelink
Ponder.registry((event) => { 
    event.create('ars_nouveau:vitalic_sourcelink').scene("vitalic", "How to Use the Vitalic Sourcelink", (scene, util) => {
    scene.showBasePlate();
        scene.world.setBlock([2,1,2], "ars_nouveau:vitalic_sourcelink", true);
        scene.world.showSection([2, 1, 2], Facing.DOWN,)
        scene.text(60, "This is a Vitalic Sourcelink.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
        scene.text(40, "Here's how to use it.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.text(60, "Get some animals.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(100);
        const pig = scene.world.createEntity("pig", [1.5, 1, 3.5]);
        const pig2 = scene.world.createEntity("pig", [1.5, 1, 1.5]);
         scene.world.modifyEntity(pig2, (e) => {
                e.lookAt("feet", [1.5, 1, 3.5])});
        scene.text(60, "Now Breed these animals.", [1.5, 1.5, 2]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.particles.simple(10, "minecraft:heart", [1.5,2.5,2.5]).density(10).delta([0.2,-0.2,0.2]);;
        scene.idle(20);
        scene.particles.simple(10, "minecraft:heart", [1.5,2.5,2.5]).density(10).delta([0.2,-0.2,0.2]);
        const pig3 = scene.world.createEntity("pig", [1.5, 1, 2.5]);
        scene.world.modifyEntity(pig3, (e) => {
                let nbt = e.getNbt();
                 nbt.Age = -10000;
                 e.setNbt(nbt);
                e.lookAt("feet", [0, 1, 2.5])
            });
        scene.idle(80);
        scene.text(60, "It will produce source when animals bred near it", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
        scene.particles.simple(20, "minecraft:happy_villager", [1.5,1.5,2.5]).density(10).delta([0.2,-0.2,0.2]);
                scene.idle(20);
                 scene.world.modifyEntity(pig3, (e) => {
                let nbt = e.getNbt();
                 nbt.Age = 10000;
                 e.setNbt(nbt);
            });
        scene.text(60, "It also produces source when animals grow near it", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.text(60, "If there isn't a storage block available source will be stored in within.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.idle(80);
    });
});
// ars_nouveau:mycelial_sourcelink
Ponder.registry((event) => { 
    event.create('ars_nouveau:mycelial_sourcelink').scene("mycelial", "How to Use the Mycelial Sourcelink", (scene, util) => {
        scene.showBasePlate();
        scene.idle(40);

        scene.world.setBlock([1,1,1], "grass_block", true);
        scene.world.setBlock([1,1,2], "grass_block", true);
        scene.world.setBlock([1,1,3], "grass_block", true);
        scene.world.setBlock([2,1,1], "grass_block", true);
        scene.world.setBlock([2,1,2], "grass_block", true);
        scene.world.setBlock([2,1,3], "grass_block", true);
        scene.world.setBlock([3,1,1], "grass_block", true);
        scene.world.setBlock([3,1,2], "grass_block", true);
        scene.world.setBlock([3,1,3], "grass_block", true);
        scene.world.showSection([2, 1, 1], Facing.UP)
        scene.world.showSection([2, 1, 2], Facing.UP)
        scene.world.showSection([2, 1, 3], Facing.UP)
        scene.world.showSection([1, 1, 1], Facing.UP)
        scene.world.showSection([1, 1, 2], Facing.UP)
        scene.world.showSection([1, 1, 3], Facing.UP)
        scene.world.showSection([3, 1, 1], Facing.UP)
        scene.world.showSection([3, 1, 2], Facing.UP)
        scene.world.showSection([3, 1, 3], Facing.UP)
        scene.idle(40);
        scene.world.setBlock([2,2,2], "ars_nouveau:mycelial_sourcelink", true);
        scene.world.showSection([2, 2, 2], Facing.DOWN,)
        scene.idle(40);
        scene.text(60, "This is a Mycelial Sourcelink.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
        scene.text(40, "Here's how to use it.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        let itemLink = scene.world.createItemEntity(util.vector.topOf(0, 0, 0).add(2, 2.5, 2), util.vector.of(-0.05, 0.4, -0.05), "ars_nouveau:sourceberry_bush");
        scene.idle(60);
        scene.text(60, "It produces source when there is digestible items nearby.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.text(60, "The item also can be on a arcane pedestal", [2.0, 3.5, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.world.setBlock([3,2,3], "ars_nouveau:arcane_pedestal", true);
        scene.world.showSection([3, 2, 3], Facing.UP)
         scene.idle(80);
        scene.text(80, "It can use any digestible items but it produces more source with items that have higher saturation.", [2.0, 1, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT).attachKeyFrame();
        scene.idle(100);
        scene.text(60, "Source Berries are far more worth opposed to other to foods.", [2.0, 1, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT).attachKeyFrame();
        scene.idle(40);
        scene.world.removeEntity(itemLink)
        scene.particles.simple(80, "minecraft:witch", [1.75,1.75,1.75]).density(6).scale(1).delta([0.2,-0.2,0.2]);
        scene.particles.dust(80, "#ff00c8", "#b700ff", [1.75,1.75,1.75]).density(6).scale(1).delta([0.2,-0.2,0.2]);
        scene.idle(40);
        scene.text(60, "If there isn't a storage block available source will be stored in within.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.idle(100);
        scene.text(60, "It also changes the Envinronment! If there's dirt under it, it will make it into mycelium", [2.0, 1, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.particles.simple(80, "minecraft:witch", [1.5,1.5,1.5]).density(10).scale(1).delta([0.2,-0.2,0.2]);
        scene.particles.dust(80, "#ff00b3", "#b700ff", [1.5,1.5,1.5]).density(10).scale(1).delta([0.2,-0.2,0.2]);
        scene.idle(80);
        scene.world.setBlock([1,1,1], "minecraft:mycelium", false);
        scene.text(60, "Then if there's vacant space on top of mycelium it will grow mushrooms", [2.0, 1, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.particles.simple(80, "minecraft:witch", [1.5,1.5,1.5]).density(10).scale(1).delta([0.2,-0.2,0.2]);
        scene.particles.dust(80, "#ff00c8", "#b700ff", [1.5,1.5,1.5]).density(10).scale(1).delta([0.2,-0.2,0.2]);
        scene.idle(80);
        scene.world.setBlock([1,2,1], "minecraft:brown_mushroom", false);
        scene.world.showSection([1, 2, 1], Facing.UP)


    });
});
// ars_nouveau:alchemical_sourcelink
Ponder.registry((event) => { 
    event.create('ars_nouveau:alchemical_sourcelink').scene("mycelial", "How to Use the Mycelial Sourcelink", (scene, util) => {
        scene.showBasePlate();
        scene.idle(40);
        scene.world.setBlock([2,1,2], "ars_nouveau:alchemical_sourcelink", true);
        scene.world.showSection([2, 1, 2], Facing.DOWN,)
        scene.idle(40);
        scene.text(60, "This is an Alchemical Sourcelink.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
        scene.text(40, "Here's how to use it.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(60);
        scene.text(60, "It produces source when there is a potion jar with potion in it nearby.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.world.setBlock([4,1,1], "ars_nouveau:potion_jar", true);
        scene.world.showSection([4, 1, 1], Facing.DOWN,)
        scene.showControls(20, [4.5, 2, 1.5], "down").rightClick().withItem("minecraft:potion")
            scene.idle(20);
               scene.world.setBlock([4, 1, 1], "ars_nouveau:potion_jar", false);
       scene.world.modifyBlockEntityNBT([4, 1, 1], nbt => {
    nbt.Potion = "minecraft:healing";
    nbt.Amount = 1000;
});

        scene.idle(80);
        scene.text(80, "It can use any potion but it produces more source with complex potions.", [2.0, 1, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT).attachKeyFrame();
        scene.idle(100);
        scene.idle(40);
        scene.text(60, "If there isn't a storage block available source will be stored in within.", [2.0, 2, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.idle(100);
        scene.idle(80);
    });
});
// ars_nouveau:source_jar
Ponder.registry((event) => {
    event.create("ars_nouveau:source_jar").scene("rituals", "How to Use the Source Jar", (scene, util) => {
        scene.showBasePlate();
        scene.idle(40);
        scene.world.setBlock([2,1,2], "ars_nouveau:source_jar", true);
        scene.world.showSection([2, 1, 2], Facing.DOWN,)
        scene.idle(40);
        scene.text(60, "This is a Source Jar.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(40);
        scene.text(60, "It stores Source and can be used be used for various things.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.text(60, "Examples of what it can store mana for", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.world.setBlock([4, 1, 2], "ars_additions:enchanting_wixie_cauldron", true);
        scene.world.showSection([4, 1, 2], Facing.WEST)
        scene.idle(20);
        scene.world.setBlock([0, 1, 2], "ars_nouveau:imbuement_chamber", true);
        scene.world.showSection([0, 1, 2], Facing.EAST)
        scene.idle(20);
        scene.world.setBlock([2, 1, 0], "ars_nouveau:spell_turret", true);
        scene.world.showSection([2, 1, 0], Facing.SOUTH)
        scene.idle(20);
        scene.world.setBlock([2, 1, 4], "ars_nouveau:ritual_brazier", true);
        scene.world.showSection([2, 1, 4], Facing.NORTH)
        scene.idle(80);
    });
    event.create(["ars_nouveau:source_jar","ars_nouveau:mycelial_sourcelink","ars_nouveau:vitalic_sourcelink","ars_nouveau:alchemical_sourcelink",'ars_nouveau:volcanic_sourcelink','ars_nouveau:agronomic_sourcelink']).scene("source_jar", "How to Store Source?", (scene, util) => {
        scene.showBasePlate();
        scene.world.setBlock([4, 1, 2], "ars_nouveau:source_jar", true);
        scene.world.showSection([4, 1, 2], Facing.WEST)
        scene.idle(40);
        scene.text(60, "How to store Source?", [4.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80); 
        scene.text(60, "To store Source in it, You need any kind of working sourcelink near it.", [4.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(100);
        scene.text(40, "We'll talk about routing in another scene.", [4.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT)
        scene.idle(80);
        scene.text(60, "Here are some examples of sourcelinks", [4.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(20);
        scene.world.hideSection([1, 1, 2], Facing.SOUTH)
        scene.idle(20);
        scene.world.setBlock([1, 1, 2], "ars_nouveau:mycelial_sourcelink", false);
        scene.world.showSection([1, 1, 2], Facing.SOUTH)
        scene.particles.simple(80, "witch", [1.5, 1.5, 2.5]).density(10).motion([0.1, 0, 0]).area([4, 1, 2.5]).collision(true);
        scene.idle(80);
        scene.world.modifyBlockEntity([4, 1, 2], SourceJarTile, entity => {entity.setSource(2000)});
        scene.idle(20);
        scene.world.hideSection([1, 1, 2], Facing.SOUTH)
        scene.idle(20);
        scene.world.setBlock([1, 1, 2], "ars_nouveau:vitalic_sourcelink", false);
        scene.world.showSection([1, 1, 2], Facing.SOUTH)
        scene.particles.simple(80, "witch", [1.5, 1.5, 2.5]).density(10).motion([0.1, 0, 0]).area([4, 1, 2.5]).collision(true);
        scene.idle(80);
        scene.world.modifyBlockEntity([4, 1, 2], SourceJarTile, entity => {entity.setSource(4000)});
        scene.idle(20);
        scene.world.hideSection([1, 1, 2], Facing.SOUTH)
        scene.idle(20);
        scene.world.setBlock([1, 1, 2], "ars_nouveau:alchemical_sourcelink", false);
        scene.world.showSection([1, 1, 2], Facing.SOUTH)
        scene.particles.simple(80, "witch", [1.5, 1.5, 2.5]).density(10).motion([0.1, 0, 0]).area([4, 1, 2.5]).collision(true);
        scene.idle(80);
        scene.world.modifyBlockEntity([4, 1, 2], SourceJarTile, entity => {entity.setSource(6000)});
        scene.idle(20);
        scene.world.hideSection([1, 1, 2], Facing.SOUTH)
        scene.idle(20);
        scene.world.setBlock([1, 1, 2], "ars_nouveau:volcanic_sourcelink", false);
        scene.world.showSection([1, 1, 2], Facing.SOUTH)
        scene.particles.simple(80, "witch", [1.5, 1.5, 2.5]).density(10).motion([0.1, 0, 0]).area([4, 1, 2.5]).collision(true);
        scene.idle(80);
        scene.world.modifyBlockEntity([4, 1, 2], SourceJarTile, entity => {entity.setSource(8000)});
        scene.idle(20);
        scene.world.hideSection([1, 1, 2], Facing.SOUTH)
        scene.idle(20);
        scene.world.setBlock([1, 1, 2], "ars_nouveau:agronomic_sourcelink", false);
        scene.world.showSection([1, 1, 2], Facing.SOUTH)
        scene.particles.simple(80, "witch", [1.5, 1.5, 2.5]).density(10).motion([0.1, 0, 0]).area([4, 1, 2.5]).collision(true);
        scene.idle(80);
        scene.world.modifyBlockEntity([4, 1, 2], SourceJarTile, entity => {entity.setSource(10000)});
         scene.idle(40);
         scene.text(60, "Sourcelinks automatically transfer source they produce to nearby jars.", [4.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(40);
    });
});
// Imbuement Chamber
Ponder.registry((event) => {
    
        event.create("ars_nouveau:imbuement_chamber").scene("imbuement", "How to Use an Imbuement Chamber", (scene, util) => {
        
            scene.showBasePlate();
        scene.idle(20);
        scene.world.setBlock([2, 1, 2], "ars_nouveau:imbuement_chamber", true);
        scene.world.showSection([2, 1, 2], Facing.DOWN);
        scene.idle(20)
        scene.text(20, "This is an Imbuement Chamber.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(20);
        scene.text(40, "It can work without source. ", [2.0, 1.5, 2.5]).placeNearTarget()
        scene.idle(10);
        scene.text(40, "Although it can function without it, the rate is very slow. ", [2.0, 1, 2.5]).placeNearTarget().colored(PonderPalette.SLOW)
        scene.showControls(20, [2.5, 2, 2.5], "down").rightClick().withItem("minecraft:lapis_lazuli")
        scene.world.modifyBlockEntity([2, 1, 2], ImbuementTile, entity => {
  entity.setItem(0, "lapis_lazuli");});
         scene.idle(60);
  scene.particles.simple(15, "minecraft:witch", [2.5,1.5,2.5]).density(10).delta([0,-0.2,0]);
        scene.idle(20);
         scene.world.modifyBlockEntity([2, 1, 2], ImbuementTile, entity => {
  entity.setItem(0, "ars_nouveau:source_gem");});
          scene.idle(30);
        scene.showControls(20, [2.5, 2, 2.5], "down").rightClick().withItem("minecraft:amethyst_shard")
         scene.world.modifyBlockEntity([2, 1, 2], ImbuementTile, entity => {
  entity.setItem(0, "amethyst_shard");});
       scene.idle(40);
  scene.particles.simple(15, "minecraft:witch", [2.5,1.5,2.5]).density(10).delta([0,-0.2,0]);
        scene.idle(20);
         scene.world.modifyBlockEntity([2, 1, 2], ImbuementTile, entity => {
  entity.setItem(0, "ars_nouveau:source_gem");});
        scene.idle(30);
        scene.showControls(20, [2.5, 2, 2.5], "down").rightClick().withItem("minecraft:lapis_block")
        scene.world.modifyBlockEntity([2, 1, 2], ImbuementTile, entity => {
  entity.setItem(0, "lapis_block");});
       scene.idle(40);
  scene.particles.simple(15, "minecraft:witch", [2.5,1.5,2.5]).density(10).delta([0,-0.2,0]);
        scene.idle(20);
         scene.world.modifyBlockEntity([2, 1, 2], ImbuementTile, entity => {
  entity.setItem(0, "ars_nouveau:source_gem_block");});
    scene.idle(40)
    scene.world.modifyBlockEntity([2, 1, 2], ImbuementTile, entity => {
  entity.setItem(0, "air");});

    scene.world.setBlock([1, 1, 1], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([1, 1, 2], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([1, 1, 3], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([2, 1, 1], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([2, 1, 3], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([3, 1, 1], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([3, 1, 2], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([3, 1, 3], "ars_nouveau:arcane_pedestal", true);


    scene.world.showSection([1, 1, 1], Facing.DOWN)
    scene.idle(1)
    scene.world.showSection([1, 1, 2], Facing.DOWN)
    scene.idle(1)
    scene.world.showSection([1, 1, 3], Facing.DOWN)
    scene.idle(1)
    scene.world.showSection([2, 1, 3], Facing.DOWN)
    scene.idle(1)
    scene.world.showSection([3, 1, 3], Facing.DOWN)
    scene.idle(1)
    scene.world.showSection([3, 1, 2], Facing.DOWN)
    scene.idle(1)
    scene.world.showSection([3, 1, 1], Facing.DOWN)
    scene.idle(1)
    scene.world.showSection([2, 1, 1], Facing.DOWN)
    scene.idle(1)
    scene.idle(40)
    scene.world.setBlock([0, 1, 0], "ars_nouveau:source_jar", true);
    scene.world.modifyBlockEntity([0, 1, 0], SourceJarTile, entity => {entity.setSource(10000)});
    scene.world.showSection([0, 1, 0], Facing.DOWN);
    scene.idle(20)
    scene.text(20, "This is a Source Jar.", [0.0, 2.5, 0.5]).placeNearTarget().attachKeyFrame();
    scene.idle(10)
    scene.text(20, "It stores Source (mana) for the imbuement chamber.", [0.0, 1.5, 0.5]).placeNearTarget().colored(PonderPalette.FAST)
    scene.idle(30)
    scene.text(40, "These are pedestals, you first place items on it then place the final item in the imbuement chamber to craft.", [1.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
    scene.idle(60)
    scene.text(40, "Here's an example.", [1.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
    
        scene.idle(40);
  scene.particles.simple(10, "minecraft:happy_villager", [1.5,1.5,1.5]).density(10).delta([0.2,-0.2,0.2]);
        scene.idle(20);
    scene.world.modifyBlockEntity([1, 1, 1], ArcanePedestalTile, entity => {entity.setItem(0, "gunpowder");});
    scene.idle(40);
  scene.particles.simple(10, "minecraft:happy_villager", [2.5,1.5,3.5]).density(10).delta([0.2,-0.2,0.2]);
        scene.idle(20);
    scene.world.modifyBlockEntity([2, 1, 3], ArcanePedestalTile, entity => {entity.setItem(0, "flint_and_steel");});
    scene.idle(40);
  scene.particles.simple(10, "minecraft:happy_villager", [3.5,1.5,1.5]).density(10).delta([0.2,-0.2,0.2]);
        scene.idle(20);
    scene.world.modifyBlockEntity([3, 1, 1], ArcanePedestalTile, entity => {entity.setItem(0, "torch");});
    scene.idle(20)
    scene.showControls(20, [2.5, 2, 2.5], "down").rightClick().withItem("ars_nouveau:source_gem")
    scene.idle(20);
         scene.world.modifyBlockEntity([2, 1, 2], ImbuementTile, entity => {entity.setItem(0, "ars_nouveau:source_gem");});
    scene.idle(30);
    scene.particles.simple(50, "minecraft:witch", [2.5,1.5,2.5]).density(10).delta([0,-0.2,0]);
    scene.particles.simple(50, "minecraft:witch", [1.5,2.5,1.5]).density(10).delta([0,-0.2,0]);
    scene.particles.simple(50, "minecraft:witch", [2.5,2.5,3.5]).density(10).delta([0,-0.2,0]);
    scene.particles.simple(50, "minecraft:witch", [3.5,2.5,1.5]).density(10).delta([0,-0.2,0]);

    scene.world.modifyBlockEntity([1, 1, 1], ArcanePedestalTile, entity => {entity.setItem(0, "air");});
    scene.world.modifyBlockEntity([2, 1, 3], ArcanePedestalTile, entity => {entity.setItem(0, "air");});
    scene.world.modifyBlockEntity([3, 1, 1], ArcanePedestalTile, entity => {entity.setItem(0, "air");});

    scene.world.modifyBlockEntity([2, 1, 2], ImbuementTile, entity => {entity.setItem(0, "ars_nouveau:fire_essence");});
    });
});
// enchanting_apparatus
Ponder.registry((event) => {
        event.create("ars_nouveau:enchanting_apparatus").scene("enchanting", "How to Use the Enchanting Apparatus", (scene, util) => {
        scene.showBasePlate();
        scene.idle(40)
        scene.world.setBlock([2, 0, 2], "ars_nouveau:arcane_core", true);
        scene.world.showSection([2, 0, 2], Facing.DOWN,)
        scene.text(80, "Arcane Core is required below the Enchanting Apparatus for multiblock to work.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80)
        scene.world.setBlock([2, 1, 2], "ars_additions:enchanting_wixie_cauldron", true);
        scene.world.showSection([2, 1, 2], Facing.DOWN,)
        scene.text(100, "Unlike the Imbuement Chamber, Enchanting Apparatus absolutely needs outside assistance for source. ", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
    scene.world.setBlock([1, 1, 1], "ars_nouveau:arcane_pedestal", true);
         scene.world.setBlock([1, 1, 2], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([1, 1, 3], "ars_nouveau:arcane_pedestal", true);
        scene.world.setBlock([2, 1, 1], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([2, 1, 3], "ars_nouveau:arcane_pedestal", true);
        scene.world.setBlock([3, 1, 1], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([3, 1, 2], "ars_nouveau:arcane_pedestal", true);
        scene.world.setBlock([3, 1, 3], "ars_nouveau:arcane_pedestal", true);
    scene.idle(40)
    scene.world.showSection([1, 1, 1], Facing.UP)
    scene.idle(1)
    scene.world.showSection([1, 1, 2], Facing.UP)
    scene.idle(1)
    scene.world.showSection([1, 1, 3], Facing.UP)
    scene.idle(1)
    scene.world.showSection([2, 1, 3], Facing.UP)
    scene.idle(1)
    scene.world.showSection([3, 1, 3], Facing.UP)
    scene.idle(1)
    scene.world.showSection([3, 1, 2], Facing.UP)
    scene.idle(1)
    scene.world.showSection([3, 1, 1], Facing.UP)
    scene.idle(1)
    scene.world.showSection([2, 1, 1], Facing.UP)
    scene.idle(1)
    scene.idle(20)
    scene.world.setBlock([1, 1, 2], "minecraft:air", true);
        scene.idle(1)
    scene.world.setBlock([2, 1, 1], "minecraft:air", true);
        scene.idle(1)
    scene.world.setBlock([2, 1, 3], "minecraft:air", true);
        scene.idle(1)
    scene.world.setBlock([3, 1, 2], "minecraft:air", true);
            scene.idle(40)
    scene.world.setBlock([2, 1, 0], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([4, 1, 2], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([0, 1, 2], "ars_nouveau:arcane_pedestal", true);
    scene.world.setBlock([2, 1, 4], "ars_nouveau:arcane_pedestal", true);
    scene.world.showSection([2, 1, 0], Facing.DOWN)
    scene.world.showSection([2, 1, 4], Facing.DOWN)
    scene.world.showSection([4, 1, 2], Facing.DOWN)
    scene.world.showSection([0, 1, 2], Facing.DOWN)
    scene.idle(40)
    scene.text(80, "Unlike the Imbuement Chamber, Enchanting Apparatus can be arranged in various different ways as long as it's within 3 blocks. ", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
    
    scene.idle(100);

    scene.text(100, "Here's an example enchantment ritual. ", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST);

    scene.particles.simple(10, "minecraft:happy_villager", [2.5,1.5,0.5]).density(10).delta([0.2,-0.2,0.2]);
    scene.idle(20);
    scene.world.modifyBlockEntity([2, 1, 0], ArcanePedestalTile, entity => {entity.setItem(0, "ars_nouveau:magebloom_fiber");});
    scene.idle(40);
    scene.particles.simple(10, "minecraft:happy_villager", [0.5,1.5,2.5]).density(10).delta([0.2,-0.2,0.2]);
    scene.idle(20);
    scene.world.modifyBlockEntity([0, 1, 2], ArcanePedestalTile, entity => {entity.setItem(0, "ars_nouveau:magebloom_fiber");});
    scene.idle(40);
    scene.particles.simple(10, "minecraft:happy_villager", [2.5,1.5,4.5]).density(10).delta([0.2,-0.2,0.2]);
    scene.idle(20);
    scene.world.modifyBlockEntity([2, 1, 4], ArcanePedestalTile, entity => {entity.setItem(0, "ars_nouveau:magebloom_fiber");});
    scene.idle(20)
    scene.particles.simple(10, "minecraft:happy_villager", [4.5,1.5,2.5]).density(10).delta([0.2,-0.2,0.2])
    scene.idle(20);
    scene.world.modifyBlockEntity([4, 1, 2], ArcanePedestalTile, entity => {entity.setItem(0, "ars_nouveau:magebloom_fiber");});
    scene.idle(40);
    scene.showControls(20, [2.5, 2, 2.5], "down").rightClick().withItem("diamond_chestplate")
    scene.idle(20);
    scene.world.modifyBlockEntity([2, 1, 2], EnchantingTile, entity => {entity.setItem(0, "diamond_chestplate");});
    scene.idle(30);

    scene.particles.simple(10, "minecraft:witch", [2.5,2.5,0.5]).density(10).delta([0.2,-0.2,0.2]);
    scene.particles.simple(10, "minecraft:witch", [0.5,2.5,2.5]).density(10).delta([0.2,-0.2,0.2]);
    scene.particles.simple(10, "minecraft:witch", [2.5,2.5,4.5]).density(10).delta([0.2,-0.2,0.2]);
    scene.particles.simple(10, "minecraft:witch", [4.5,2.5,2.5]).density(10).delta([0.2,-0.2,0.2]);
    scene.particles.simple(10, "minecraft:witch", [2.5,1.5,2.5]).density(10).delta([0.2,-0.2,0.2]);
    scene.idle(80);
    scene.world.hideSection([0, 1, 0, 5,5,5], Facing.DOWN)
        });
});
// ritual_brazier
Ponder.registry((event) => {
    event.create("ars_nouveau:ritual_brazier").scene("rituals", "How to Use the Ritual Brazier", (scene, util) => {

        scene.showBasePlate();
        scene.idle(40);
        scene.world.setBlock([2,1,2], "ars_nouveau:ritual_brazier", true);
        scene.world.showSection([2, 1, 2], Facing.DOWN,)
        scene.idle(40);
        scene.text(60, "This is a ritual brazier.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(40);
        scene.text(40, "Here's an example on how to use it.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(50)
        scene.text(60, "First activate it with a tablet of your choice.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(60);
        scene.showControls(20, [2.5, 2, 2.5], "down").rightClick().withItem('ars_nouveau:ritual_wilden_summon')
        scene.idle(30);
        scene.particles.simple(310, "minecraft:witch", [2.5,2.5,2.5]).density(10).delta([0.2,-0.2,0.2]);
        scene.particles.simple(310, "minecraft:end_rod", [2.5,2.5,2.5]).density(5).delta([0.1,-0.1,0.1]);
        scene.particles.dust(310, "#ff54da", "#ffffff", [2.5,2.5,2.5]).density(1).scale(2).delta([0.1,-0.1,0.1]);
        scene.idle(40);
        scene.text(60, "In this state, brazier does not spend any mana until it's activated by right clicking again.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
        scene.text(60, "You may want to toss or apply items that may be needed for some rituals Eg. Wilden Chimera", [2.0, 3.5, 2.5]).placeNearTarget().colored(PonderPalette.OUTPUT).attachKeyFrame();
        scene.idle(40);
        scene.showControls(10, [2.5, 2, 2.5], "down").rightClick().withItem('ars_nouveau:wilden_wing')
        scene.idle(15);
        scene.showControls(10, [2.5, 2, 2.5], "down").rightClick().withItem('ars_nouveau:wilden_horn')
        scene.idle(15);
        scene.showControls(10, [2.5, 2, 2.5], "down").rightClick().withItem('ars_nouveau:wilden_spike')
        scene.idle(40);
        scene.text(60, "If you have completed your preparation state you may start the ritual now.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(40);
        scene.showControls(10, [2.5, 2, 2.5], "down").rightClick()
        scene.idle(20);
        scene.particles.simple(80, "minecraft:witch", [3.5,1.5,3.5]).density(20).delta([1,-1,1]);
        scene.particles.simple(80, "minecraft:end_rod", [3.5,1.5,3.5]).density(10).delta([0.5,-0.5,0.5]);
        scene.particles.dust(80, "#ff54da", "#ffffff", [3.5,1.5,3.5]).density(2).scale(2).delta([0.5,-0.5,0.5]);
        scene.idle(50);
        scene.world.createEntity("ars_nouveau:wilden_boss", [3.5, 1, 3.5]);
    });
});
// source_relay
Ponder.registry((event) => {
    event.create("ars_nouveau:relay").scene("relay", "Source Relay", (scene, util) => {
       scene.showBasePlate();
        scene.idle(40);
            scene.world.setBlock([2,1,2], "ars_nouveau:relay", true);
            scene.world.showSection([2, 1, 2], Facing.DOWN,)
        scene.idle(40);
            scene.text(60, "This is a Source Relay.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(40);
            scene.text(60, "It can transfer source to other sourcelinks or storage blocks within 30 blocks.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
            scene.text(60, "Here's an example of how to use it", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(40);
            scene.world.setBlock([4, 1, 2], "ars_nouveau:source_jar", true);
            scene.world.showSection([4, 1, 2], Facing.DOWN)
        scene.idle(20);
            scene.world.setBlock([0, 1, 2], "ars_nouveau:source_jar", true);
            scene.world.modifyBlockEntity([0, 1, 2], SourceJarTile, entity => {entity.setSource(10000)});
            scene.world.showSection([0, 1, 2], Facing.DOWN)
        scene.idle(20);
            scene.text(60, "First select the input with dominion wand", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
            scene.showControls(20, [0.5, 2, 2.5], "down").rightClick().withItem("ars_nouveau:dominion_wand")
        scene.idle(80);
            scene.text(60, "Then select the relay", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
            scene.idle(40);
            scene.showControls(20, [2.5, 2, 2.5], "down").rightClick().withItem("ars_nouveau:dominion_wand")
        scene.idle(80);
            scene.text(60, "Time to send the source, select the relay again", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
            scene.idle(60);
            scene.showControls(20, [2.5, 2, 2.5], "down").rightClick().withItem("ars_nouveau:dominion_wand")
        scene.idle(80);
            scene.text(60, "Then select the output", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
            scene.idle(60);
            scene.showControls(20, [4.5, 2, 2.5], "down").rightClick().withItem("ars_nouveau:dominion_wand")
        scene.idle(80);
            scene.text(60, "The relay will transfer source from the input to the output.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
            scene.particles.simple(80, "witch", [0.5, 1.5, 2.5]).density(10).motion([0.1, 0, 0]).area([2, 1, 2.5]).collision(true);
            scene.world.modifyBlockEntity([0, 1, 2], SourceJarTile, entity => {entity.setSource(5000)});
            scene.idle(80);
            scene.particles.simple(80, "witch", [4.5, 1.5, 2.5]).density(10).motion([0.1, 0, 0]).area([2, 1, 2.5]).collision(true);
            scene.world.modifyBlockEntity([4, 1, 2], SourceJarTile, entity => {entity.setSource(5000)});
        scene.idle(80);
        });
    });
// scryers_oculus
Ponder.registry((event) => {
    event.create("ars_nouveau:scryers_oculus").scene("oculus", "Scryer's Oculus", (scene, util) => {
        scene.showBasePlate();
        scene.idle(40);
        scene.world.setBlock([2,1,2], "ars_nouveau:scryers_oculus", true);
        scene.world.showSection([2, 1, 2], Facing.DOWN,)
        scene.idle(40);
        scene.text(60, "This is a Scryer's Oculus.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(40);
        scene.text(60, "It can be used as a security camera or remote magic casting", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(100);
        scene.text(60, "Here's an example of how to use it", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(40);
        scene.world.setBlock([3, 1, 2], "ars_nouveau:arcane_pedestal", true);
        scene.world.showSection([3, 1, 2], Facing.DOWN)
        scene.idle(40);
  scene.particles.simple(10, "minecraft:happy_villager", [3.5,1.5,2.5]).density(10).delta([0.2,-0.2,0.2]);
        scene.idle(20);
        scene.showControls(20, [3.5, 1.5, 2.5], "down").rightClick().withItem("ars_nouveau:scryer_scroll")
    scene.world.modifyBlockEntity([3, 1, 2], ArcanePedestalTile, entity => {entity.setItem(0, 'ars_nouveau:scryer_scroll');});
        scene.idle(40);
        scene.text(60, "The scryer's oculus will show the view of the pedestal with the scroll on it.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
         scene.text(60, "You can move the view with WASD keys, spell will be cast from the scry crystal's aim.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
         scene.idle(80);
    });
});
// ars_nouveau:storage_lectern
Ponder.registry((event) => {
    event.create("ars_nouveau:storage_lectern").scene("lectern", "Storage Lectern", (scene, util) => {
        scene.showBasePlate();
        scene.idle(40);
        scene.world.setBlock([2,1,2], "ars_nouveau:storage_lectern", true);
        scene.world.showSection([2, 1, 2], Facing.DOWN,)
        scene.idle(40);
        scene.text(60, "This is a Storage Lectern.", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(40);
        scene.text(60, "It can store and retrieve items from a linked inventories.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.text(60, "Here's an example of how to use it", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(40);
        scene.world.setBlock([4, 1, 2], "minecraft:chest", true);
        scene.world.showSection([4, 1, 2], Facing.DOWN)
        scene.idle(20);
        scene.text(60, "First use a bookwyrm charm on the lectern", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
        scene.showControls(20, [2.5, 2, 2.5], "down").rightClick().withItem("ars_nouveau:bookwyrm_charm")
        scene.idle(80);
        scene.text(60, "You can now link 5 inventories per Bookwyrm", [2.0, 2.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        const worm = scene.world.createEntity("ars_nouveau:bookwyrm", [2.5, 3, 2.5]);
        scene.idle(80);
        scene.text(60, "Use the dominion wand to link inventories to the bookwyrm", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST).attachKeyFrame();
        scene.idle(80);
        scene.showControls(20, [2.5, 3, 2.5], "down").rightClick().withItem("ars_nouveau:dominion_wand")
         scene.idle(80);
        scene.text(60, "Then select the inventory you want to link", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
        scene.idle(80);
        scene.showControls(20, [4.5, 3, 2.5], "down").rightClick().withItem("ars_nouveau:dominion_wand")
         scene.idle(80);
        scene.text(60, "You can now access the chest inventory from the lectern.", [2.0, 1.5, 2.5]).placeNearTarget().colored(PonderPalette.FAST)
    });
});
    // Tool tips I shouldve made a seperate json for all of these friggin things but it's too late to go back now //
ItemEvents.tooltip(event => {

let brown = "#C7954B"
let piss = "#eeda78"
let kidneyfailure = "#c54bdb"
// Relay Warp
  event.addAdvanced('ars_nouveau:relay_warp', (item, advanced, text) => {
    if (!event.shift) {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    } else {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
      text.add(2, Text.red(' '))
      text.add(3, [Text.of('Works the same way as a regular relay but it\'s not bound by distance and may ').color(brown), Text.of('lose Source ').color(piss), Text.of('when transferring.').color(brown)])
    }
  })

// 'ars_nouveau:relay_deposit'
    event.addAdvanced('ars_nouveau:relay_deposit', (item, advanced, text) => {
        if (!event.shift) {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    } else {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
      text.add(2, Text.red(' '))
      text.add(3, [Text.of('Works the same way as a regular relay but can deposit to ').color(brown), Text.of('multiple').color(piss), Text.of(' jars').color(brown)])
    }
  })
// ars_nouveau:relay_splitter
    event.addAdvanced('ars_nouveau:relay_splitter', (item, advanced, text) => {
        if (!event.shift) {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    } else {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
      text.add(2, Text.red(' '))
      text.add(3, [Text.of('Works the same way as a regular relay but can target and receive ').color(brown), Text.of('multiple').color(piss), Text.of(' components').color(brown)])
    }
  })
// 'ars_nouveau:relay_collector'
    event.addAdvanced('ars_nouveau:relay_collector', (item, advanced, text) => {
        if (!event.shift) {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [Text.of('Works the same way as a regular relay but can collect from ').color(brown), Text.of('multiple').color(piss), Text.of(' sources').color(brown)])
    }
})
// ars_additions:ender_source_jar
    event.addAdvanced('ars_additions:ender_source_jar', (item, advanced, text) => {
        if (!event.shift) {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
       text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [Text.of('Shared inventory').color(piss), Text.of(' between all jars.').color(brown)])
         text.add(4, Text.red(' '))
    }
})
// ars_nouveau:dominion_wand
    event.addAdvanced('ars_nouveau:dominion_wand', (item, advanced, text) => {
        if (!event.shift) {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
       text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [ Text.of('The Magic ').color(brown),Text.of('Wrench.').color(piss)])
         text.add(4, Text.red(' '))
    }
})

// ars_nouveau:novice_spell_book
    event.addAdvanced('ars_nouveau:novice_spell_book', (item, advanced, text) => {
        if (!event.shift) {
      text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
       text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [ Text.of('Starter\'s ').color(brown),Text.of('Magic Book').color(piss)])
        text.add(4, [ Text.of('First to cast a spell you ').color(brown),Text.of('must ').color(piss),Text.of('craft it first. Press "C" and open the menu to see your glyphs, then first use a form then an effect then an augment to the effect. (optional) to make your first spell!').color(brown)])
         text.add(5, Text.red(' '))
    }
})
// ars_nouveau:scribes_table
    event.addAdvanced('ars_nouveau:scribes_table', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [ Text.of('Used to ').color(brown),Text.of('Craft Glyphs.').color(piss), Text.of(' and').color(brown),Text.of(' Imbue tools').color(piss)])
            text.add(4, Text.red(' '))
        text.add(5, [ Text.of('To craft glyphs').color(brown),Text.of(' right click with the book').color(piss),Text.of(' and select the glyph from the menu').color(brown),Text.of(' it will take the required items from nearby storage or you can toss/right click items into the table to add them to the recipe.').color(piss)])
        text.add(6, Text.red(' '))
        text.add(7, [ Text.of('To imbue tools right click and place the').color(brown),Text.of(' Enchanter\'s tools ').color(piss),Text.of('onto the table then ').color(brown),Text.of('cast the spell without a form.').color(piss)])
    }
})
// ars_nouveau:alteration_table
    event.addAdvanced('ars_nouveau:alteration_table', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [ Text.of('Used to put ').color(brown),Text.of('threads onto armour').color(piss)])
        text.add(4, Text.red(' '))
        text.add(5, [ Text.of('Right click with armour').color(piss),Text.of(' and select the thread you want to apply.').color(brown)])
        text.add(6,[Text.of('Don\'t forget to the match the tiers of the thread and armour thread slot').color(piss)])
    }
    })
// ars_nouveau:warp_scroll
    event.addAdvanced('ars_nouveau:warp_scroll', (item, advanced, text, tooltip) => 
        {

        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [ Text.of('Used to ').color(brown),Text.of('Teleport.').color(piss)])
        text.add(4, Text.red(' '))
        text.add(5, [ Text.of('Right while sneaking click to set the ').color(brown),Text.of('teleport location.').color(piss)])
        text.add(6, [ Text.of('Right click to ').color(brown),Text.of('teleport to the location that\'s been set.').color(piss)])
            text.add(7, Text.red(' '))
        text.add(8, [ Text.of('When thrown into a source stone portal').gray()])
        text.add(9, [ Text.of('If there is enough source nearby').color(piss),Text.of(' it will set the teleport location to the portal and teleport you there.').color(brown)])

    }
    })
// 'ars_nouveau:enchanters_eye'
    event.addAdvanced('ars_nouveau:enchanters_eye', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [ Text.of('Used to ').color(brown),Text.of('Cast Enchantments remotely.').color(piss)])
        text.add(4, Text.red(' '))
        text.add(5, [ Text.of('Hold the Scryr Scroll in your left hand and use the Enchanters Eye in your right hand.').color(brown)])
        text.add(6, [ Text.of('Then right click on the to cast the inscribed spell.').color(piss)])
        text.add(7, Text.red(' '))
    }  
})

// 'ars_nouveau:scryers_crystal'
    event.addAdvanced('ars_nouveau:scryers_crystal', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }    else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [Text.of('Security Camera').color(piss)])
        text.add(4, Text.red(' '))
        text.add(5, [Text.of('Right click with the Blank Parchment in your hand to attach it to the Scryers Crystal.').color(brown)])
        text.add(6, [Text.of('Spells will be cast from the crystal\'s aim.').color(piss)])
    }
    })
// 'ars_nouveau:repository'
    event.addAdvanced('ars_nouveau:repository', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [ Text.of('Used to ').color(brown),Text.of('Store Double Chest worth of items.').color(piss)])
        text.add(4, Text.red(' '))
        text.add(5, [ Text.of('Right click to open the repository inventory.').color(brown)])
        text.add(6, [ Text.of('When you name it on an anvil').color(brown),Text.of('It will show the name in the as a tool tip when placed').color(piss)])
    }
    })
// 'ars_nouveau:worn_notebook'
    event.addAdvanced('ars_nouveau:worn_notebook', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [ Text.of('Ars Nouveau\'s ').color(brown),Text.of('Tutorial Book.').color(piss)])
        text.add(4, Text.red(' '))
        text.add(5, [ Text.of('Right click to open the book.').color(brown)])
        text.add(6, [ Text.of('Hold it in your hand then Hover over an item and Hold CTRL to view the page containing the knowledge of the item.').color(piss)])
        text.add(7, Text.red(' '))
    }
    })    
        //////////////////////////////// Tome of Blood Tooltips ////////////////////////////////

 // tomeofblood:novice_tome_of_blood
    event.addAdvanced('tomeofblood:novice_tome_of_blood', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
        text.add(3, [ Text.of('Starter\'s ').color(brown),Text.of('Magic Book').color(piss)])
        text.add(4, [ Text.of('First to cast a spell you ').color(brown),Text.of('must ').color(piss),Text.of('craft it first. Press "C" and open the menu to see your glyphs, then first use a form then an effect then an augment to the effect. (optional) to make your first spell!').color(brown)])
         text.add(5, Text.red(' '))
        text.add(6, [ Text.of('Differently ').color(piss),Text.of('this tome ').color(brown),Text.of('uses LP when your mana is exhausted ').color(piss)])
        
    }
    })
 // tomeofblood:apprentice_tome_of_blood
    event.addAdvanced('tomeofblood:apprentice_tome_of_blood', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
         text.add(3, [Text.of('This tome ').color(piss),Text.of('uses LP when your mana is exhausted ').color(brown)])
 } })
        
 // tomeofblood:archmage_tome_of_blood
    event.addAdvanced('tomeofblood:archmage_tome_of_blood', (item, advanced, text) => {
        if (!event.shift) {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
    }   else {
        text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
        text.add(2, Text.red(' '))
         text.add(3, [Text.of('This tome ').color(piss),Text.of('uses LP when your mana is exhausted ').color(brown)])
         }
    })
});