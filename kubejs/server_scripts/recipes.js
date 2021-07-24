// priority: 0

onEvent("recipes", (event) => {
  event.remove({ output: "botania:cocoon" });
  event.remove({ output: "create:mechanical_crafter" });
  event.remove({ output: "extendedcrafting:frame" });
  event.remove({ output: "extendedcrafting:the_ultimate_catalyst" });
  event.remove({ output: "rftoolsbase:machine_frame" });
  event.remove({ id: "immersiveengineering:blastfurnace/steel" });

  getItemsFromMod("excompressum").forEach((exCompressumItem) => {
    const itemId = exCompressumItem.getId();
    if (!itemId.contains("bait")) {
      event.remove({ output: itemId });
    }
  });

  event.shapeless("minecraft:cobblestone", new Array(4).fill("botania:pebble"));
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
        sideConfig_0: 0,
        ifluxEnergy: 4000000,
        sideConfig_1: 0,
        sideConfig_2: 0,
        sideConfig_3: 0,
        sideConfig_4: 0,
        sideConfig_5: 0,
      }),
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
  event.recipes.create.filling("create:creative_fluid_tank", [
    "create:fluid_tank",
    Fluid.of("bloodmagic:life_essence_fluid", 100000000),
  ]);
  event.recipes.create.deploying("create:creative_motor", [
    "create:furnace_engine",
    "immersiveengineering:capacitor_creative",
  ]);

  const cobblestones = getItemsFromTag("forge:cobblestone");
  cobblestones.forEach((cobble) => {
    event.recipes.create.crushing("minecraft:gravel", cobble);
  });
  event.recipes.create.crushing(
    Item.of("minecraft:vine"),
    "minecraft:mossy_cobblestone"
  );
  event.recipes.create.mixing(
    Fluid.of("minecraft:water", 250),
    "minecraft:cactus"
  );

  event.recipes.immersiveengineering.blast_furnace(
    "immersiveengineering:ingot_steel",
    "3x minecraft:iron_ingot",
    "immersiveengineering:slag"
  );
  event.recipes.immersiveengineering.arc_furnace(
    ["minecraft:end_stone"],
    "minecraft:sand"
  );

  const { altar } = event.recipes.bloodmagic;
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
  altar("bloodmagic:activationcrystalweak", "tconstruct:seared_melter")
    .upgradeLevel(2)
    .altarSyphon(10000)
    .drainRate(10)
    .consumptionRate(10);
});
