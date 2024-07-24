<template>
  <main class="flex min-h-screen flex-col items-center justify-center p-20">
    <div class="mx-auto w-full max-w-[500px] rounded-md border p-6">
      <h1 class="mb-6 text-center text-2xl">Login</h1>
      <Form>
        <FormField
          v-slot="{ componentField }"
          name="loginForm"
        >
          <FormItem>
            <FormLabel />
            <FormControl>
              <Input placeholder="Seu nome" />
              <Input placeholder="E-mail" />
              <Input placeholder="Senha" />
            </FormControl>
            <div class="flex justify-end py-2">
              <NuxtLink
                to="/forgotpassword"
                class="text-sm font-semibold"
              >
                Esqueceu sua senha?
              </NuxtLink>
            </div>
            <div class="flex justify-center pt-2">
              <Button
                type="submit"
                class="text-md w-full font-bold"
              >
                Entrar
              </Button>
            </div>
            <div class="mx-6 pt-4">
              <Separator label="OU" />
            </div>
            <div class="flex justify-center pt-4">
              <Button
                variant="outline"
                class="min-w-[180px]"
              >
                <img
                  src="/googleIcon.svg"
                  alt="google icon"
                  class="h-6 w-6"
                />
              </Button>
            </div>
          </FormItem>
        </FormField>
      </Form>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
</script>
