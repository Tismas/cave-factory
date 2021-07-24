// priority: 1

const itemByTag = {};
const itemByMod = {};

let s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

function initializeHelperDicts() {
  if (Object.keys(itemByTag).length > 0) return;

  Item.list.forEach((itemEl) => {
    itemByMod[itemEl.mod] = itemByMod[itemEl.mod] || [];
    itemByMod[itemEl.mod].push(itemEl);
    const tags = itemEl.tags;
    tags.forEach((tag) => {
      itemByTag[tag] = itemByTag[tag] || [];
      itemByTag[tag].push(itemEl);
    });
  });
}

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

function getItemsFromTag(tag) {
  initializeHelperDicts();
  return itemByTag[tag] || [];
}
function getItemsFromMod(mod) {
  initializeHelperDicts();
  return itemByMod[mod] || [];
}
