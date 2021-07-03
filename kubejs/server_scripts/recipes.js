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
