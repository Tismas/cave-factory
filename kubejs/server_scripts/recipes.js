// priority: 0
const toolTypesToRemove = [
  "wooden",
  "stone",
  "golden",
  "iron",
  "diamond",
  "netherite",
  "appliedenergistics2:certus_quartz",
  "appliedenergistics2:nether_quartz",
];
const toolsToRemove = ["pickaxe", "axe", "shovel", "hoe", "sword"];

onEvent("recipes", (event) => {
  event.shapeless("minecraft:cobblestone", new Array(4).fill("botania:pebble"));

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
  event.remove({ output: "create:mechanical_crafter" });
  event.shaped("8x create:mechanical_crafter", ["SSS", "S S", "SSS"], {
    S: "minecraft:crafting_table",
  });

  toolsToRemove.forEach((tool) => {
    toolTypesToRemove.forEach((toolType) => {
      event.remove({ output: `${toolType}_${tool}` });
    });
    event.remove({ output: `immersiveengineering:${tool}_steel` });
  });

  const { altar, array, soulforge, arc, alchemytable } =
    event.recipes.bloodmagic;
  altar("minecraft:dirt", "minecraft:granite")
    .altarSyphon(10)
    .drainRate(10)
    .consumptionRate(10);
});
