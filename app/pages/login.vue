<script setup lang="ts">
import { ShieldCheck } from '@lucide/vue'

definePageMeta({ layout: 'auth' })
useHead({ title: 'Ingresar · Anders Seguros' })

const correo = ref('')
const contrasena = ref('')

async function ingresar() {
  // TODO Supabase Auth: iniciar sesión con correo y contraseña.
  await navigateTo('/clientes')
}
</script>

<template>
  <div class="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8">
    <div class="flex flex-col items-center text-center">
      <span class="flex size-12 items-center justify-center rounded-xl bg-blue-600 text-white">
        <ShieldCheck class="size-7" />
      </span>
      <h1 class="mt-4 text-xl font-bold text-slate-900">Anders Seguros</h1>
      <p class="text-sm text-slate-500">Agencia de Seguros Coyhaique</p>
    </div>

    <form class="mt-8 space-y-4" @submit.prevent="ingresar">
      <div>
        <label for="correo" class="mb-1.5 block text-sm font-medium text-slate-700">Correo</label>
        <UiInput id="correo" v-model="correo" type="email" autocomplete="email" placeholder="nombre@correo.cl"
          required />
      </div>
      <div>
        <label for="contrasena" class="mb-1.5 block text-sm font-medium text-slate-700">Contraseña</label>
        <UiInput id="contrasena" v-model="contrasena" type="password" autocomplete="current-password" required />
      </div>
      <UiButton type="submit" class="w-full">Ingresar</UiButton>
    </form>
  </div>
</template>
