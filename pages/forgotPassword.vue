<template>
  <main class="flex min-h-screen flex-col items-center justify-center p-20">
    <div class="mx-auto w-full max-w-[500px] rounded-md border p-6">
      <h1 class="mb-6 text-center text-2xl">Recupere sua senha</h1>
      <form>
        <Input placeholder="E-mail" required type="email"/>
        <div>
          <Button type="submit" class="text-md w-full font-bold">Recuperar</Button>
        </div>
      </form>
    </div>
  </main>
</template>

<script lang="ts" setup>
</script>