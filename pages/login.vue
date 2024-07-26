<template>
  <main class="flex min-h-screen flex-col items-center justify-center p-20">
    <div class="mx-auto w-full max-w-[500px] rounded-md border p-6">
      <h1 class="mb-6 text-center text-2xl">Login</h1>
      <form>
        <Input
          placeholder="E-mail"
          required
          id="email"
          type="email"
          v-model="user.email"
          class="mb-1.5"
        />
        <Input
          placeholder="Senha"
          required
          id="password"
          type="password"
          v-model="user.password"
          class="mb-1"
        />
        <div>
          <div class="flex justify-end pt-2 pb-6">
            <NuxtLink
              to="/forgotpassword"
              class="text-sm font-semibold"
            >
              Esqueceu a senha?
            </NuxtLink>
          </div>
          <Button
            type="submit"
            class="text-md w-full font-bold"
            >Entrar</Button
          >
        </div>
        <div class="mx-6 pt-6">
          <Separator label="OU" />
        </div>
        <div class="flex justify-center pt-6">
          <Button
            variant="outline"
            class="min-w-[175px]"
          >
            <img
              src="/googleIcon.svg"
              alt="google icon"
              class="h-6 w-6"
            />
          </Button>
        </div>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
const user = ref({
  email: '',
  password: '',
})
</script>
