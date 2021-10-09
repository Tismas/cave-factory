// priority: 0

onEvent("recipes", (event) => {
  event.remove({ output: "botania:cocoon" });
  event.remove({ output: "create:mechanical_crafter" });
  event.remove({ output: "extendedcrafting:frame" });
  event.remove({ output: "extendedcrafting:the_ultimate_catalyst" });
  event.remove({ output: "rftoolsbase:machine_frame" });
  event.remove({ id: "immersiveengineering:blastfurnace/steel" });
  event.remove({ id: "compactmachines:wall" });

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
    Item.of("tconstruct:creative_slot", '{slot:"armor"}'),
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

  event.shapeless("minecraft:cobblestone", new Array(4).fill("botania:pebble"));
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
    .sequenced_assembly(
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
        event.recipes.create.deploying("twilightforest:lamp_of_cinders", [
          "create:brass_casing",
          "twilightforest:lamp_of_cinders",
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
  event.recipes.immersiveengineering.arc_furnace(
    ["minecraft:end_stone"],
    "minecraft:sand"
  );

  const { altar, soulforge } = event.recipes.bloodmagic;
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
  altar("minecraft:dirt", "minecraft:granite")
    .altarSyphon(10)
    .drainRate(10)
    .consumptionRate(10);
  altar("create:creative_fluid_tank", "create:fluid_tank")
    .upgradeLevel(4)
    .altarSyphon(1000000)
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
