// priority: 0

onEvent("tags.items", (event) => {
  event.add("cave_factory:welders", "twilightforest:lamp_of_cinders");
});

onEvent("recipes", (event) => {
  event.remove({ output: "botania:cocoon" });
  event.remove({ output: "create:mechanical_crafter" });
  event.remove({ output: "extendedcrafting:frame" });
  event.remove({ output: "extendedcrafting:the_ultimate_catalyst" });
  event.remove({ output: "rftoolsbase:machine_frame" });
  event.remove({ id: "immersiveengineering:blastfurnace/steel" });
  event.remove({ id: "immersiveengineering:blastfurnace/steel_block" });
  event.remove({ id: "compactmachines:wall" });

  event.remove({ input: "excompressum:compressed_gravel" });
  event.remove({ input: "excompressum:compressed_sand" });
  event.remove({ input: "excompressum:compressed_dirt" });
  event.remove({ input: "excompressum:compressed_cobblestone" });

  event.remove({ output: "extrastorage:storagepart_1024k" });
  event.remove({ output: "extrastorage:storagepart_4096k" });
  event.remove({ output: "extrastorage:storagepart_16384k" });
  event.remove({ output: "extrastorage:disk_256k" });
  event.remove({ output: "extrastorage:disk_1024k" });
  event.remove({ output: "extrastorage:disk_4096k" });
  event.remove({ output: "extrastorage:disk_16384k" });
  event.remove({ output: "extrastorage:storagepart_16384k_fluid" });
  event.remove({ output: "extrastorage:storagepart_65536k_fluid" });
  event.remove({ output: "extrastorage:storagepart_262144k_fluid" });
  event.remove({ output: "extrastorage:storagepart_1048576k_fluid" });
  event.remove({ output: "extrastorage:disk_16384k_fluid" });
  event.remove({ output: "extrastorage:disk_65536k_fluid" });
  event.remove({ output: "extrastorage:disk_262144k_fluid" });
  event.remove({ output: "extrastorage:disk_1048576k_fluid" });

  event.remove({ output: "miniutilities:angel_ring" });

  getItemsFromMod("excompressum").forEach((exCompressumItem) => {
    const itemId = exCompressumItem.getId();
    if (!itemId.contains("bait")) {
      event.remove({ output: itemId });
    }
  });

  event.shapeless(Item.of("tconstruct:creative_slot", '{slot:"upgrades"}'), [
    "tconstruct:scorched_stone",
    "tconstruct:slimesteel_block",
    "tconstruct:queens_slime_block",
    "tconstruct:pig_iron_block",
    "minecraft:netherite_block",
    "tconstruct:hepatizon_block",
    "tconstruct:manyullyn_block",
    "tconstruct:rose_gold_block",
    "tconstruct:tinkers_bronze_block",
  ]);
  event.shaped(
    Item.of("tconstruct:creative_slot", '{slot:"souls"}'),
    ["XXX", "XEX", "XXX"],
    {
      X: "envirocore:xerothium_crystal",
      E: "minecraft:emerald",
    }
  );
  event.shaped(
    Item.of("tconstruct:creative_slot", '{slot:"defense"}'),
    ["EEE", "EDE", "EEE"],
    {
      D: "minecraft:diamond_chestplate",
      E: "minecraft:emerald_block",
    }
  );
  event.shaped(Item.of("minecraft:dragon_egg"), ["SSS", "SES", "SSS"], {
    S: "bountifulbaubles:ender_dragon_scale",
    E: "minecraft:egg",
  });
  event.shaped(
    Item.of(
      "xreliquary:mob_charm_fragment",
      '{entity:"minecraft:elder_guardian"}'
    ),
    ["SCS", "CEC", "SCS"],
    {
      S: "minecraft:prismarine_shard",
      C: "minecraft:prismarine_crystals",
      E: "minecraft:egg",
    }
  );

  event.shaped(
    Item.of("ironjetpacks:creative_jetpack"),
    ["NCN", "NJN", "U U"],
    {
      N: "minecraft:netherite_block",
      C: "immersiveengineering:capacitor_creative",
      J: "ironjetpacks:emerald_jetpack",
      U: "extendedcrafting:the_ultimate_component",
    }
  );

  event.shaped(
    Item.of("compactmachines:wall").withCount(64),
    ["CCC", "CSC", "CCC"],
    {
      C: "minecraft:coal_block",
      S: "extendedcrafting:ultimate_singularity",
    }
  );

  event.shaped(Item.of("apotheosis:boss_summoner"), ["ABC", "DEF", "GHJ"], {
    A: "minecraft:rotten_flesh",
    B: "minecraft:spider_eye",
    C: "minecraft:bone",
    D: "minecraft:string",
    E: "minecraft:ender_pearl",
    F: "minecraft:slime_ball",
    G: "minecraft:blaze_rod",
    H: "twilightforest:fiery_tears",
    J: "twilightforest:raw_meef",
  });

  event.shapeless("minecraft:cobblestone", new Array(4).fill("botania:pebble"));

  event.shapeless("miniutilities:angel_ring", "ironjetpacks:creative_jetpack");
  event.shapeless("ironjetpacks:creative_jetpack", "miniutilities:angel_ring");

  event.shapeless(
    "botania:creative_pool",
    Item.of("botania:mana_tablet", "{mana:500000,creative:1b}")
  );
  event.shapeless(
    Item.of("botania:mana_tablet", "{mana:500000,creative:1b}"),
    "botania:creative_pool"
  );

  event.shapeless(
    "createaddition:creative_energy",
    "immersiveengineering:capacitor_creative"
  );
  event.shapeless(
    "immersiveengineering:capacitor_creative",
    "createaddition:creative_energy"
  );

  event.shapeless(
    "immersiveengineering:ore_uranium",
    "bigreactors:yellorite_ore"
  );
  event.shapeless(
    "bigreactors:yellorite_ore",
    "immersiveengineering:ore_uranium"
  );
  event.shaped("7x create:mechanical_crafter", ["SSS", " S ", "SSS"], {
    S: "minecraft:crafting_table",
  });
  event.shaped(
    "immersiveengineering:capacitor_creative",
    [" C ", "CHC", " C "],
    {
      C: "extendedcrafting:the_ultimate_catalyst",
      H: "immersiveengineering:capacitor_hv",
    }
  );
  event.shaped("botania:cocoon", ["SSS", "SPS", "SSS"], {
    S: "minecraft:string",
    P: "botania:fel_pumpkin",
  });
  event.shaped("minecraft:end_portal_frame", [" E ", " P ", " E "], {
    E: "minecraft:end_stone",
    P: "minecraft:ender_eye",
  });
  event.replaceInput(
    { id: "extradisks:part/infinite_storage_part" },
    "minecraft:redstone",
    "extendedcrafting:ultimate_singularity"
  );
  event.replaceInput(
    { id: "extradisks:part/infinite_fluid_storage_part" },
    "minecraft:redstone",
    "extendedcrafting:ultimate_singularity"
  );
  event.replaceInput(
    { id: "creativewirelesstransmitter:creative_wireless_transmitter" },
    "refinedstorage:wireless_transmitter",
    "refinedstorage:range_upgrade"
  );
  event.replaceInput(
    { id: "refinedstorageaddons:wireless_crafting_grid" },
    "refinedstorage:crafting_grid",
    "storagenetwork:crafting_remote"
  );
  event.replaceInput(
    { id: "refinedstorage:controller" },
    "refinedstorage:machine_casing",
    "storagenetwork:master"
  );
  event.replaceInput(
    { id: "refinedstorage:exporter" },
    "refinedstorage:improved_processor",
    "storagenetwork:export_kabel"
  );
  event.replaceInput(
    { id: "refinedstorage:importer" },
    "refinedstorage:improved_processor",
    "storagenetwork:import_filter_kabel"
  );
  event.replaceInput(
    { id: "refinedstorage:external_storage" },
    "refinedstorage:improved_processor",
    "storagenetwork:filter_kabel"
  );
  event.replaceInput(
    { id: "refinedstorage:cable" },
    "minecraft:redstone",
    "storagenetwork:storage_kabel"
  );

  event.replaceInput(
    { mod: "xnet" },
    "rftoolsbase:machine_frame",
    "fluxnetworks:flux_block"
  );

  event.replaceInput(
    { id: "miniutilities:mechanical_miner" },
    "minecraft:redstone_block",
    "minecraft:quartz_block"
  );

  event.smelting("minecraft:granite", "create:granite_cobblestone");
  event.smelting("minecraft:diorite", "create:diorite_cobblestone");
  event.smelting("minecraft:andesite", "create:andesite_cobblestone");
  event.smelting("create:limestone", "create:limestone_cobblestone");
  event.smelting(
    "create:weathered_limestone",
    "create:weathered_limestone_cobblestone"
  );
  event.smelting("create:dolomite", "create:dolomite_cobblestone");
  event.smelting("create:gabbro", "create:gabbro_cobblestone");
  event.smelting("create:scoria", "create:scoria_cobblestone");
  event.smelting("create:dark_scoria", "create:dark_scoria_cobblestone");

  event.stonecutting("4x tconstruct:seared_brick", "tconstruct:seared_stone");

  event.recipes.create
    .sequencedAssembly(
      [
        Item.of("rftoolsbase:machine_frame").withChance(100.0),
        Item.of("twilightforest:lamp_of_cinders").withChance(1.0),
      ],
      "create:brass_casing",
      [
        event.recipes.create.deploying(
          "immersiveengineering:steel_scaffolding_standard",
          [
            "create:brass_casing",
            "immersiveengineering:steel_scaffolding_standard",
          ]
        ),
        event.recipes.create.deploying("minecraft:iron_block", [
          "create:brass_casing",
          "minecraft:iron_block",
        ]),
        event.recipes.create.deploying("#cave_factory:welders", [
          "create:brass_casing",
          "#cave_factory:welders",
        ]),
      ]
    )
    .loops(1);
  event.recipes.create.mechanical_crafting(
    "extendedcrafting:frame",
    [
      "IIIIIII",
      "ISGGGSI",
      "IGSGSGI",
      "IGGSGGI",
      "IGSGSGI",
      "ISGGGSI",
      "IIIIIII",
    ],
    {
      I: "extendedcrafting:black_iron_ingot",
      G: "minecraft:glass",
      S: "extendedcrafting:black_iron_slate",
    }
  );
  event.recipes.create.mechanical_crafting(
    "extendedcrafting:the_ultimate_catalyst",
    [
      "FFFFFFFFF",
      "FFFFFFFFF",
      "FFFFFFFFF",
      "FFFFFFFFF",
      "FFFFUFFFF",
      "FFFFFFFFF",
      "FFFFFFFFF",
      "FFFFFFFFF",
      "FFFFFFFFF",
    ],
    {
      U: "extendedcrafting:the_ultimate_component",
      F: Item.of("immersiveengineering:capacitor_hv", {
        ifluxEnergy: 4000000,
      }).weakNBT(),
    }
  );
  event.recipes.create.mechanical_crafting(
    "botania:creative_pool",
    [
      "TTTTTTTTT",
      "LTTTTTTTL",
      "UTTTTTTTU",
      "RTTGGGTTR",
      "STTGGGTTS",
      "WTTGGGTTW",
      "ETTTTTTTE",
      "PTTTTTTTP",
      "TTTTTTTTT",
    ],
    {
      G: "botania:gaia_ingot",
      T: Item.of("botania:mana_tablet", "{mana:500000}"),
      L: "botania:rune_lust",
      U: "botania:rune_gluttony",
      R: "botania:rune_greed",
      S: "botania:rune_sloth",
      W: "botania:rune_wrath",
      E: "botania:rune_envy",
      P: "botania:rune_pride",
    }
  );
  event.recipes.create.crushing(
    Item.of("minecraft:glowstone_dust").withChance(0.25),
    "minecraft:torch"
  );
  event.recipes.create.crushing(
    [
      "bigreactors:yellorium_dust",
      Item.of("2x bigreactors:yellorium_dust").withChance(0.3),
    ],
    "bigreactors:yellorite_ore"
  );

  event.recipes.create.filling(
    Item.of("tconstruct:earth_slime_sapling").withChance(1.0),
    ["minecraft:oak_sapling", Fluid.of("minecraft:milk", 1000)]
  );
  event.recipes.create.filling(
    Item.of("tconstruct:sky_slime_sapling").withChance(1.0),
    ["twilightforest:rainboak_sapling", Fluid.of("minecraft:milk", 1000)]
  );
  event.recipes.create.filling(
    Item.of("tconstruct:ender_slime_sapling").withChance(1.0),
    ["betterendforge:dragon_tree_sapling", Fluid.of("minecraft:milk", 1000)]
  );

  event.recipes.create.filling(
    Item.of("tconstruct:earth_slime_dirt").withChance(1.0),
    ["minecraft:dirt", Fluid.of("minecraft:milk", 1000)]
  );
  event.recipes.create.filling(
    Item.of("tconstruct:sky_slime_dirt").withChance(1.0),
    ["twilightforest:etched_nagastone_mossy", Fluid.of("minecraft:milk", 1000)]
  );
  event.recipes.create.filling(
    Item.of("tconstruct:sky_slime_dirt").withChance(1.0),
    ["twilightforest:nagastone_pillar_mossy", Fluid.of("minecraft:milk", 1000)]
  );
  event.recipes.create.filling(
    Item.of("tconstruct:ender_slime_dirt").withChance(1.0),
    ["minecraft:end_stone", Fluid.of("minecraft:milk", 1000)]
  );
  event.recipes.create.filling(
    Item.of("tconstruct:ichor_slime_dirt").withChance(1.0),
    ["minecraft:netherrack", Fluid.of("minecraft:milk", 1000)]
  );

  event.recipes.create.deploying("create:creative_motor", [
    "create:furnace_engine",
    "immersiveengineering:capacitor_creative",
  ]);

  const cobblestones = getItemsFromTag("forge:cobblestone");
  cobblestones.forEach((cobble) => {
    if (cobble !== "minecraft:mossy_cobblestone") {
      event.recipes.create.crushing("minecraft:gravel", cobble);
    }
  });
  event.recipes.create.crushing(
    Item.of("minecraft:vine"),
    "minecraft:mossy_cobblestone"
  );
  event.recipes.create.mixing(
    Fluid.of("minecraft:water", 250),
    "minecraft:cactus"
  );
  event.recipes.create.mixing("fluxnetworks:flux_dust", [
    "minecraft:obsidian",
    "minecraft:redstone",
  ]);
  event.recipes.create
    .mixing(Item.of("tconstruct:creative_slot", '{slot:"abilities"}'), [
      "minecraft:nether_star",
      Fluid.of("bloodmagic:life_essence_fluid", 1000),
    ])
    .superheated();

  event.recipes.immersiveengineering.blast_furnace(
    "immersiveengineering:ingot_steel",
    "3x minecraft:iron_ingot",
    "immersiveengineering:slag"
  );
  event.recipes.immersiveengineering.blast_furnace(
    "immersiveengineering:storage_steel",
    "3x minecraft:iron_block",
    "9x immersiveengineering:slag"
  );
  event.recipes.immersiveengineering.arc_furnace(
    ["minecraft:end_stone"],
    "minecraft:sand"
  );

  const { altar, soulforge, alchemytable } = event.recipes.bloodmagic;
  event.shaped("4x bloodmagic:ritualstone", ["BRB", "ROR", "BRB"], {
    B: "bloodmagic:blankslate",
    R: "bloodmagic:reinforcedslate",
    O: [
      "bloodmagic:apprenticebloodorb",
      "bloodmagic:magicianbloodorb",
      "bloodmagic:masterbloodorb",
    ],
  });
  event.shaped("bloodmagic:masterritualstone", ["BRB", "ROR", "BRB"], {
    B: "bloodmagic:blankslate",
    R: "bloodmagic:ritualstone",
    O: ["bloodmagic:magicianbloodorb", "bloodmagic:masterbloodorb"],
  });
  alchemytable("minecraft:mycelium", [
    "minecraft:grass_block",
    "minecraft:brown_mushroom",
  ])
    .syphon(10)
    .ticks(10)
    .upgradeLevel(2);
  altar("minecraft:dirt", "minecraft:granite")
    .altarSyphon(10)
    .drainRate(10)
    .consumptionRate(10);
  altar("create:creative_fluid_tank", "create:fluid_tank")
    .upgradeLevel(4)
    .altarSyphon(1000000)
    .drainRate(10)
    .consumptionRate(10);
  altar("botania:thermalily", "minecraft:lava_bucket")
    .upgradeLevel(2)
    .altarSyphon(1000)
    .drainRate(10)
    .consumptionRate(10);
  altar("bloodmagic:activationcrystalweak", "tconstruct:seared_melter")
    .upgradeLevel(2)
    .altarSyphon(10000)
    .drainRate(10)
    .consumptionRate(10);
  soulforge("minecraft:phantom_membrane", [
    "minecraft:white_bed",
    "minecraft:rotten_flesh",
  ])
    .minimumDrain(100)
    .drain(10);
});
