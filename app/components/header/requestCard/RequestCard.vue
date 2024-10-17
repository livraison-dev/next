<script setup lang="ts">
import { Icon } from '@destyler/icon'

const reqList = [
  { req: 'Get', url: '/api/req1', show: false },
  { req: 'Post', url: '/api/req2', show: false },
  { req: 'Put', url: '/api/req3', show: false },
  { req: 'Delete', url: '/api/req4', show: false },
]
</script>

<template>
  <div v-for="item in reqList" :key="item.req">
    <div class="w-30 h-5 overflow-hidden float-left flex-auto">
      <div class="w-25 overflow-hidden text-ellipsis">
        <span>{{ item.req }}</span>
        <span class="text-gray-400">{{ item.url }}</span>
      </div>
      <Icon name="carbon:close" class="text-5 float-left" />
    </div>
  </div>
  +
</template>
