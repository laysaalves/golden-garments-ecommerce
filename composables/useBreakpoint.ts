import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'

export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 1092px)')

  const isSidebarShow = computed(() => isMobile.value) //ok
  const isHeaderContentShow = computed(() => !isMobile.value) //ok
  const isSidebarItemShow = computed(() => isMobile.value !== true) // TODO: resolve the problem: the components appear in the web header, but not in the mobile sidebar

  return {
    isMobile,
    isSidebarShow,
    isSidebarItemShow,
    isHeaderContentShow,
  }
}
