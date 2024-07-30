import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'

export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 1092px)')

  const sidebarShow = computed(() => isMobile.value)
  const headerContentShow = computed(() => !isMobile.value && !sidebarShow.value)
  const sidebarItemShow = computed(() => isMobile.value !== headerContentShow.value)

  return {
    isMobile,
    sidebarShow,
    sidebarItemShow,
    headerContentShow,
  }
}