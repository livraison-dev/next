<script setup lang="ts">
import { Icon } from '@destyler/icon'
import { useSidebarStore } from '~/store/sidebar'

const props = defineProps({
  iconType: String,
  name: String,
})
const sidebar = useSidebarStore()
const { show } = storeToRefs(sidebar)
</script>

<template>
  <div class="flex items-center justify-left m-auto pt-2 pb-2 cursor-pointer color-gray-500 hover:color-light">
    <Icon :name="props.iconType" w="15" h="10" class="p-2" />
    <span v-if="show" class="w-30 text-md ml-1 hover:left-0 w-100">{{ props.name }}</span>
  </div>
</template>

<style scoped>

</style>
