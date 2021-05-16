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

onEvent("jei.hide.items", (event) => {
  toolsToRemove.forEach((tool) => {
    toolTypesToRemove.forEach((toolType) => {
      event.hide(`${toolType}_${tool}`);
    });
    event.hide(`immersiveengineering:${tool}_steel`);
  });
});
