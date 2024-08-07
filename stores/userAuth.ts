import { defineStore } from 'pinia'
import { ref } from 'vue'

interface UserAuth {
  displayName: string
  photoURL: string
}

export const useUserAuthStore = defineStore('userAuth', () => {
  const UserAuth = ref<UserAuth | null>(null)

  const setUser = (userData: UserAuth) => {
    UserAuth.value = userData
  }

  return { 
    UserAuth, 
    setUser 
  }
})