// priority: 0

onEvent("recipes", (event) => {
  event.remove({ output: "botania:cocoon" });
  event.remove({ output: "create:mechanical_crafter" });
  event.remove({ id: "immersiveengineering:blastfurnace/steel" });

  getItemsFromMod("excompressum").forEach((exCompressumItem) => {
    const itemId = exCompressumItem.getId();
    if (!itemId.contains("bait")) {
      event.remove({ output: itemId });
    }
  });

  event.shapeless("minecraft:cobblestone", new Array(4).fill("botania:pebble"));
  event.shaped(
    "immersiveengineering:capacitor_creative",
    ["FFF", "FCF", "FFF"],
    {
      F: Item.of("fluxnetworks:gargantuan_flux_storage", {
        FluxData: {
          energy: 128000000,
        },
      }),
      C: "immersiveengineering:capacitor_hv",
    }
  );
  event.shaped("7x create:mechanical_crafter", ["SSS", " S ", "SSS"], {
    S: "minecraft:crafting_table",
  });
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
