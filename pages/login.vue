<template>
  <div class="flex items-center justify-center p-36">
    <div class="mx-auto w-full max-w-[500px] min-w-[300px] rounded-md border p-4">
      <h1 class="text-center text-2xl font-bold text-yellow-500">
        Faça o login para adquirir seu manto!
      </h1>
      <div class="flex justify-center pt-6">
        <Button
          variant="outline"
          class="w-full gap-2 font-medium text-sm"
          @click="signInWithGoogle"
        >
          <img
            src="/googleIcon.svg"
            alt="google icon"
            class="h-6 w-6"
          />
          Sign up with Google
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase.config';
const router = useRouter()

import { useUserAuthStore } from '~/stores/userAuth'
const userAuth = useUserAuthStore()

function signInWithGoogle() {
  signInWithPopup(auth, new GoogleAuthProvider())
  .then((result) => {
    const user = result.user
    userAuth.setUser({
      displayName: user.displayName,
      imageUrl: user.photoURL,
    })
    router.push('/')
    .catch((error) => {
      console.error('Erro ao logar com o Google', error)
    })
  })
}
</script>
