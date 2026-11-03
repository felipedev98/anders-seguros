<script setup lang="ts">
const props = defineProps<{
  nombre: string
}>()

const inicial = computed(() => props.nombre.trim().charAt(0).toUpperCase())
</script>

<template>
  <span
    class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-500"
    aria-hidden="true"
  >
    {{ inicial }}
  </span>
</template>
