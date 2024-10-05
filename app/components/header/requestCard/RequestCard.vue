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
  <div v-for="item in reqList" :key="item.req" class="float-left w-full flex justify-start items-center">
    <div class="float-left w-full flex justify-start items-center">
      <span>{{ item.req }}</span>
      <span class="text-gray-400">{{ item.url }}</span>
      <Icon name="carbon:close" class="text-5 mt-0 icon-hover" />
    </div>
  </div>
</template>
