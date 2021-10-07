// priority: 0

onEvent("jei.hide.items", (event) => {
  const itemByMod = {};

  Item.list.forEach((itemEl) => {
    itemByMod[itemEl.mod] = itemByMod[itemEl.mod] || [];
    itemByMod[itemEl.mod].push(itemEl);
  });

  const exCompressumItems = itemByMod["excompressum"] || [];

  exCompressumItems.forEach((exCompressumItem) => {
    const itemId = exCompressumItem.getId();
    if (!itemId.contains("bait")) {
      event.hide(Item.of(itemId).ignoreNBT());
    }
  });
});
