import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'

export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 1092px)')

  const sidebarShow = computed(() => isMobile.value)
  const topBarContentShow = computed(() => !isMobile.value && !sidebarShow.value)
  const sidebarItemShow = computed(() => isMobile.value !== topBarContentShow.value)

  return {
    isMobile,
    sidebarShow,
    sidebarItemShow,
    topBarContentShow,
  }
}