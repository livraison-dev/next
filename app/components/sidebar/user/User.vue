<script setup lang="ts">
import { Image, ImageFallback, ImageRoot } from '@destyler/image'
import { useSidebarStore } from '~/store/sidebar'

const sidebar = useSidebarStore()
const { show } = storeToRefs(sidebar)
</script>

<template>
  <div class="flex items-center gap-2 m-auto [margin:0 auto]">
    <ImageRoot
      relative="~"
      flex="~"
      h="8"
      w="8"
      shrink="0"
      overflow="hidden"
      rounded="full"
      class="m-3"
    >
      <Image
        aspect="square"
        h="full"
        w="full"
        src="https://github.com/destyler.png"
      />
      <ImageFallback
        flex="~"
        h="full"
        w="full"
        items="center"
        justify="center"
        rounded="full"
        bg="muted"
      >
        DE
      </ImageFallback>
    </ImageRoot>
    <div v-if="show">
      User Name
    </div>
  </div>
</template>
