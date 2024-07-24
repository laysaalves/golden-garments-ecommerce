<template>
  <main class="flex min-h-screen flex-col items-center justify-center p-20">
    <div class="mx-auto w-full max-w-[500px] rounded-md border p-6">
      <h1 class="mb-6 text-center text-2xl">Recupere sua senha</h1>
      <Form>
        <FormField
          v-slot="{ componentField }"
          name="forgotPasswordForm"
        >
          <FormItem>
            <FormLabel />
            <FormControl>
              <Input placeholder="E-mail" />
            </FormControl>
            <div class="flex justify-center pt-2">
              <Button
                type="submit"
                class="text-md w-full font-bold"
              >
                Recuperar
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
import { Button } from '@/components/ui/button'
</script>
