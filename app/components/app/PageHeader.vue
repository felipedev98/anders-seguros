<script setup lang="ts">
defineProps<{
  titulo: string
}>()
</script>

<template>
  <header class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-10 py-6">
    <h1 class="text-3xl font-bold tracking-tight text-slate-900">{{ titulo }}</h1>
    <div v-if="$slots.acciones" class="flex items-center gap-4">
      <slot name="acciones" />
    </div>
  </header>
</template>
