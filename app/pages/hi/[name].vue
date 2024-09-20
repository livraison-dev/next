<script setup lang="ts">
const route = useRoute()
const name = route.params.name

const { data } = await useFetch('/api/user/1')

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <div i-carbon-piggy-bank text-4xl inline-block />
    <p>
      Hi, {{ name }}
    </p>

    <p text-sm my-4>
      <span op-50>Also as known as:</span>
      <br>
      <router-link v-for="user in data?.user" :key="user.id" :to="`/hi/${user.name}`" replace>
        {{ user.name }}
      </router-link>
    </p>

    <LazyCounter />

    <div>
      <NuxtLink
        class="btn m-3 text-sm"
        to="/"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>
