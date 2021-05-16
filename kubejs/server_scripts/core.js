// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

onEvent("block.right_click", (event) => {
  const { block, hand, item, world } = event;
  if (hand.name() == "MAIN_HAND" && item.toString() == "item.empty") {
    if (block.equals("minecraft:stone")) {
      const entity = world.createEntity("item");
      entity.item = "botania:pebble";
      entity.setPosition(
        block.pos.x + 0.5,
        block.pos.y + 0.5,
        block.pos.z + 0.5
      );
      entity.spawn();
    }
  }
});

function spawnFromPool(world, itemPool, count, x, y, z) {
  const items = {};
  const indexes = new Array(count)
    .fill(0)
    .map(() => Math.floor(Math.random() * itemPool.length));
  indexes.forEach((index) => {
    const item = itemPool[index];
    items[item] = (items[item] || 0) + 1;
  });

  Object.keys(items).forEach((item) => {
    console.log(item);
    const entity = world.createEntity("item");
    entity.item = Item.of(item);
    entity.item.setCount(items[item]);
    entity.setPosition(x, y, z);
    entity.spawn();
  });
}

const seedsPool = Item.list
  .filter(
    (item) =>
      item.tags.toArray().filter((tag) => tag.toString() == "forge:seeds")
        .length > 0
  )
  .toArray()
  .map((item) => item.toString())
  .map((item) => item.slice(1, item.length() - 1))
  .concat(["minecraft:sugar_cane"]);
const logsPool = [
  "minecraft:oak_log",
  "minecraft:spruce_log",
  "minecraft:acacia_log",
  "minecraft:birch_log",
  "minecraft:jungle_log",
  "minecraft:dark_oak_log",
];
const exchangeMap = {
  "minecraft:cobblestone": { pool: logsPool, delay: 5 * 20 },
  "minecraft:dirt": { pool: seedsPool, delay: 5 * 20 },
};
onEvent("entity.spawned", (event) => {
  const { entity } = event;

  if (entity.item) {
    Object.keys(exchangeMap).forEach((key) => {
      if (entity.item.equals(key)) {
        const { pool, delay } = exchangeMap[key];
        event.server.scheduleInTicks(delay, entity, function (_) {
          if (!entity || !entity.item || !entity.alive) return;
          spawnFromPool(
            event.world,
            pool,
            entity.item.count,
            entity.x,
            entity.y,
            entity.z
          );
          entity.kill();
        });
      }
    });
  }
});

const cobbleDrops = {
  "minecraft:cobblestone": 100,
  "create:andesite_cobblestone": 40,
  "create:granite_cobblestone": 20,
  "create:diorite_cobblestone": 20,
  "create:limestone_cobblestone": 10,
  "create:weathered_limestone_cobblestone": 10,
  "create:dolomite_cobblestone": 10,
  "create:gabbro_cobblestone": 10,
  "create:scoria_cobblestone": 10,
  "create:dark_scoria_cobblestone": 10,
  "tconstruct:seared_cobble": 4,
};
const stoneDrops = {
  "minecraft:air": 25,
  "minecraft:coal_ore": 15,
  "minecraft:iron_ore": 10,
  "thermal:copper_ore": 10,
  "minecraft:gold_ore": 10,
  "minecraft:lapis_ore": 5,
  "thermal:tin_ore": 5,
  "minecraft:redstone_ore": 5,
  "minecraft:emerald_ore": 1,
  "minecraft:diamond_ore": 1,
};
onEvent("block.loot_tables", (event) => {
  event.build("minecraft:stone", (table) => {
    table.pool((pool) => {
      pool.rolls = 1;
      pool.survivesExplosion();
      Object.keys(cobbleDrops).forEach((name) => {
        pool.addEntry({
          type: "minecraft:item",
          name: name,
          weight: cobbleDrops[name],
        });
      });
    });
    table.pool((pool) => {
      pool.rolls = 1;
      pool.survivesExplosion();
      Object.keys(stoneDrops).forEach((name) => {
        pool.addEntry({
          type: "minecraft:item",
          name: name,
          weight: stoneDrops[name],
        });
      });
    });
  });
});
