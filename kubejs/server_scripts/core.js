// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

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
  "minecraft:stone": 100,
  "minecraft:andesite": 50,
  "minecraft:granite": 50,
  "minecraft:diorite": 50,
  "tconstruct:seared_stone": 40,
  "create:limestone": 20,
  "create:weathered_limestone": 20,
  "create:dolomite": 20,
  "create:gabbro": 20,
  "create:scoria": 20,
  "create:dark_scoria": 20,
};
const oreDrops = {
  "minecraft:air": 450,
  "minecraft:coal_ore": 125,
  "minecraft:redstone_ore": 40,
  "minecraft:iron_ore": 40,
  "create:copper_ore": 40,
  "immersiveengineering:ore_aluminum": 15,
  "immersiveengineering:ore_silver": 15,
  "immersiveengineering:ore_lead": 15,
  "immersiveengineering:ore_nickel": 15,
  "minecraft:gold_ore": 15,
  "create:zinc_ore": 15,
  "minecraft:lapis_ore": 10,
  "immersiveengineering:ore_uranium": 10,
  "minecraft:emerald_ore": 5,
  "minecraft:diamond_ore": 5,
};

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

onEvent("block.loot_tables", (event) => {
  event.build("minecraft:stone", (table) => {
    const stonePool = {
      type: "minecraft:group",
      conditions: [
        {
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:silk_touch",
                levels: {
                  min: 1,
                },
              },
            ],
          },
        },
      ],
      children: Object.keys(stoneDrops).map((name) => ({
        type: "minecraft:item",
        name: name,
        weight: stoneDrops[name],
      })),
    };
    const cobblePool = {
      type: "minecraft:group",
      children: Object.keys(cobbleDrops).map((name) => ({
        type: "minecraft:item",
        name: name,
        weight: cobbleDrops[name],
      })),
    };
    table.pool((pool) => {
      pool.rolls = 1;
      pool.survivesExplosion();
      pool.addEntry({
        type: "minecraft:alternatives",
        children: [stonePool, cobblePool],
      });
    });
    table.pool((pool) => {
      pool.rolls = 1;
      pool.survivesExplosion();
      Object.keys(oreDrops).forEach((name) => {
        pool.addEntry({
          type: "minecraft:item",
          name: name,
          weight: oreDrops[name],
        });
      });
    });
  });
});

onEvent("item.tags", (event) => {
  event.remove("twilightforest:portal/activator", "#forge:gems/diamond");
  event.add("twilightforest:portal/activator", "minecraft:dragon_egg");
});
