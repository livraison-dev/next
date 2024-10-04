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

const { panSize, show } = storeToRefs(sidebar)
</script>

<template>
  <SplitterRoot
    w="full"
    h="100vh"
    font="medium"
    text="sm primary"
  >
    <SplitterGroup
      id="splitter-group-1"
      direction="horizontal"
    >
      <SplitterPanel
        id="splitter-group-1-panel-1"
        :max-size="15"
        flex="~"
        items="left"
        justify="left
        "
      >
        <Sidebar />
      </SplitterPanel>
      <SplitterResizeHandle
        id="splitter-group-1-resize-handle-1"
        w="px"
        bg="#696969"
      />
      <SplitterPanel
        id="splitter-group-1-panel-2"
        :min-size="20"
      >
        <SplitterGroup
          id="splitter-group-2"
          :size="show ? 80 : 100" :min-size="show ? 70 : 100" :max-size="show ? 85 : 100"
          direction="vertical"
        >
          <SplitterPanel
            id="splitter-group-2-panel-1"
            :max-size="16"
            flex="~"
            items="center"
            justify="center"
            bg="pink"
          >
            <Header />
          </SplitterPanel>
          <SplitterResizeHandle
            id="splitter-group-2-resize-handle-1"
            h="px"
            bg="border"
          />
          <SplitterPanel
            id="splitter-group-2-panel-2"
            :min-size="20"
            flex="~"
            items="center"
            justify="center"
          >
            <main>
              <slot />
            </main>
          </SplitterPanel>
        </SplitterGroup>
      </SplitterPanel>
    </SplitterGroup>
  </SplitterRoot>
</template>
