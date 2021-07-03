// priority: 1

const itemByTag = {};

Item.list.forEach((itemEl) => {
  const tags = itemEl.tags;
  tags.forEach((tag) => {
    itemByTag[tag] = itemByTag[tag] || [];
    itemByTag[tag].push(itemEl);
  });
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

function getItemsFromTag(tag) {
  console.log(itemByTag);
  return itemByTag[tag] || [];
}
