import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'

export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 1092px)')

  const SidebarShow = computed(() => isMobile.value)
  const HeaderContentShow = computed(() => !isMobile.value && !SidebarShow.value)
  const SidebarItemShow = computed(() => isMobile.value !== HeaderContentShow.value)

  return {
    isMobile,
    SidebarShow,
    SidebarItemShow,
    HeaderContentShow,
  }
}