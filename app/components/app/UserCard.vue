<script setup lang="ts">
import { Settings } from '@lucide/vue'

// TODO Supabase Auth: tomar nombre y rol del usuario autenticado.
const usuario = {
  nombre: 'Víctor Anders',
  rol: 'Agente',
}
</script>

<template>
  <div class="flex items-center gap-3">
    <span
      class="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-900"
      aria-hidden="true">
      {{ usuario.nombre.charAt(0) }}
    </span>
    <div class="min-w-0 flex-1">
      <p class="truncate text-sm font-semibold text-white">{{ usuario.nombre }}</p>
      <p class="truncate text-xs text-slate-400">{{ usuario.rol }}</p>
    </div>
    <!-- TODO: abrir ajustes de la cuenta -->
    <button type="button"
      class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors hover:bg-blue-700"
      aria-label="Ajustes de la cuenta">
      <Settings class="size-5" />
    </button>
  </div>
</template>
