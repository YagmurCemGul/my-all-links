import { addCollection } from '@iconify/vue';
import zondicons from '@iconify-json/zondicons/icons.json';
import pixel from '@iconify-json/pixel/icons.json';
import tabler from '@iconify-json/tabler/icons.json';
import simpleIcons from '@iconify-json/simple-icons/icons.json';

export default defineNuxtPlugin(() => {
  console.log('[iconify] registering custom icon collections');
  addCollection(zondicons);
  addCollection(pixel);
  addCollection(tabler);
  addCollection(simpleIcons);
});
