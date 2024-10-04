<script setup lang="ts">
import { Icon } from '@destyler/icon'

const props = defineProps({
  iconType: String,
  name: String,
})
</script>

<template>
  <div class="flex items-center justify-left m-auto p-1 pt-2 pb-2 w-10/12">
    <Icon :name="props.iconType" w="5" h="5" />
    <span class="w-30 text-md ml-2">{{ props.name }}</span>
  </div>
</template>
