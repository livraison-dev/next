import { acceptHMRUpdate, defineStore } from 'pinia'

export const useReqStore = defineStore('req', () => {
  const reqList = ref<{
    reqType: string
    reqUrl: string
  }>

  return {
    reqList,
  }
})
