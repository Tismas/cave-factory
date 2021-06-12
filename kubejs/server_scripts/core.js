// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

onEvent("block.right_click", (event) => {
  const { block, hand, item, world, player } = event;
  if (hand.name() != "MAIN_HAND") return;

  if (item.toString() == "item.empty" && player.isCrouching()) {
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
  if (item == "create:wrench" && player.isCrouching()) {
    if (block.equals("minecraft:end_portal_frame")) {
      const hasEnderEye = block.properties.eye;
      block.set("minecraft:air");
      player.give("minecraft:end_portal_frame");
      if (hasEnderEye == "true") {
        player.give("minecraft:ender_eye");
      }
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
    const entity = world.createEntity("item");
    entity.item = Item.of(item);
    entity.item.setCount(items[item]);
    entity.setPosition(x, y, z);
    entity.spawn();
  });
}

const logsPool = [
  "minecraft:oak_log",
  "minecraft:spruce_log",
  "minecraft:acacia_log",
  "minecraft:birch_log",
  "minecraft:jungle_log",
  "minecraft:dark_oak_log",
];
const seedsPool = [
  "minecraft:wheat_seeds",
  "minecraft:carrot",
  "minecraft:potato",
  "minecraft:kelp",
  "minecraft:melon_seeds",
  "minecraft:pumpkin_seeds",
  "minecraft:cactus",
  "minecraft:sugar_cane",
  "minecraft:bamboo",
  "minecraft:sweet_berries",
];
const mobDropsPool = [
  "minecraft:bone",
  "minecraft:gunpowder",
  "minecraft:spider_eye",
  "minecraft:string",
  "minecraft:ender_pearl",
  "minecraft:slime_ball",
];
const exchangeMap = {
  "minecraft:cobblestone": { pool: logsPool, delay: 30 * 20 },
  "minecraft:dirt": { pool: seedsPool, delay: 15 * 20 },
  "minecraft:rotten_flesh": { pool: mobDropsPool, delay: 30 * 20 },
};
onEvent("entity.spawned", (event) => {
  const { entity } = event;

  if (entity.item) {
    if (entity.item.id in exchangeMap) {
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
  }
});

const cobbleDrops = {
  "minecraft:cobblestone": 100,
  "create:andesite_cobblestone": 50,
  "create:granite_cobblestone": 50,
  "create:diorite_cobblestone": 50,
  "tconstruct:seared_cobble": 40,
  "create:limestone_cobblestone": 20,
  "create:weathered_limestone_cobblestone": 20,
  "create:dolomite_cobblestone": 20,
  "create:gabbro_cobblestone": 20,
  "create:scoria_cobblestone": 20,
  "create:dark_scoria_cobblestone": 20,
};
const stoneDrops = {
  "minecraft:air": 500,
  "minecraft:coal_ore": 125,
  "minecraft:redstone_ore": 50,
  "minecraft:iron_ore": 75,
  "create:copper_ore": 75,
  "immersiveengineering:ore_aluminum": 15,
  "immersiveengineering:ore_silver": 15,
  "immersiveengineering:ore_lead": 15,
  "minecraft:gold_ore": 15,
  "create:zinc_ore": 15,
  "minecraft:lapis_ore": 10,
  "minecraft:emerald_ore": 2,
  "minecraft:diamond_ore": 2,
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
