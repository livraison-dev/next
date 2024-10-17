<script setup lang="ts">
import {
  SplitterGroup,
  SplitterPanel,
  SplitterResizeHandle,
  SplitterRoot,
} from '@destyler/splitter'
import { useSidebarStore } from '~/store/sidebar'

defineOptions({
  name: 'LayoutRoot',
})

const sidebar = useSidebarStore()

const { show } = storeToRefs(sidebar)

const checkScreenSize = () => {;
  if (window.innerWidth < 1280) {
    show.value = false
  }
  else {
    show.value = true
  }
}
onMounted(() => {
  window.addEventListener('resize', checkScreenSize)
})
</script>

<template>
  <SplitterRoot
    w="full"
    h="100vh"
    font="medium"
    text="sm primary"
    bg="white dark:#09090b"
  >
    <SplitterGroup
      id="splitter-group-1"
      direction="horizontal"
    >
      <SplitterPanel
        id="splitter-group-1-panel-1"
        flex="~"
        items="left"
        class="min-w-15"
      >
        <Sidebar />
      </SplitterPanel>
      <SplitterResizeHandle
        id="splitter-group-1-resize-handle-1"
        w="px"
        bg="gray"
      />
      <SplitterPanel
        id="splitter-group-1-panel-2"
        :min-size=" show ? 88 : 95"
        :max-size=" show ? 88 : 95"
      >
        <SplitterGroup
          id="splitter-group-2"
          direction="vertical"
        >
          <SplitterPanel
            id="splitter-group-2-panel-1"
            class="max-h-20 min-h-20"
          >
            <Header />
          </SplitterPanel>
          <SplitterResizeHandle
            id="splitter-group-2-resize-handle-1"
            h="px"
            bg="gray"
          />
          <SplitterPanel
            id="splitter-group-2-panel-2"
            :min-size="20"
            flex="~"
            items="center"
            justify="center"
          >
            Panel C
          </SplitterPanel>
        </SplitterGroup>
      </SplitterPanel>
    </SplitterGroup>
  </SplitterRoot>
</template>
