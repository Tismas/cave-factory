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

  event.hide(Item.of("extrastorage:storagepart_256k"));
  event.hide(Item.of("extrastorage:storagepart_1024k"));
  event.hide(Item.of("extrastorage:storagepart_4096k"));
  event.hide(Item.of("extrastorage:storagepart_16384k"));
  event.hide(Item.of("extrastorage:disk_256k"));
  event.hide(Item.of("extrastorage:disk_1024k"));
  event.hide(Item.of("extrastorage:disk_4096k"));
  event.hide(Item.of("extrastorage:disk_16384k"));
  event.hide(Item.of("extrastorage:storagepart_16384k_fluid"));
  event.hide(Item.of("extrastorage:storagepart_65536k_fluid"));
  event.hide(Item.of("extrastorage:storagepart_262144k_fluid"));
  event.hide(Item.of("extrastorage:storagepart_1048576k_fluid"));
  event.hide(Item.of("extrastorage:disk_16384k_fluid"));
  event.hide(Item.of("extrastorage:disk_65536k_fluid"));
  event.hide(Item.of("extrastorage:disk_262144k_fluid"));
  event.hide(Item.of("extrastorage:disk_1048576k_fluid"));
});

onEvent("jei.add.items", (event) => {
  event.add(Item.of("minecraft:dragon_egg"));
});
