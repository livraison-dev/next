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

const checkScreenSize = () => {
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
  >
    <SplitterGroup
      id="splitter-group-1"
      direction="horizontal"
    >
      <TransitionGroup name="list">
        <SplitterPanel
          v-if="show"
          id="splitter-group-1-panel-1"
          flex="~"
          items="left"
          justify="left"
        >
          <Sidebar />
        </SplitterPanel>
      </TransitionGroup>
      <SplitterResizeHandle
        id="splitter-group-1-resize-handle-1"
        w="px"
        bg="#696969"
      />
      <SplitterPanel
        id="splitter-group-1-panel-2"
        :max-size="show ? 85 : 100"
        :min-size="show ? 83 : 100"
      >
        <SplitterGroup
          id="splitter-group-2"
          direction="vertical"
        >
          <SplitterPanel
            id="splitter-group-2-panel-1"
            flex="~"
            items="center"
            justify="center"
          >
            <Header />
          </SplitterPanel>
          <SplitterResizeHandle
            id="splitter-group-2-resize-handle-1"
            h="px"
            bg="#696969"
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

<style lang="css" scoped>
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
</style>
