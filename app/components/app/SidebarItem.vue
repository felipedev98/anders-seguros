<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
  texto: string
  icono: Component
  to?: string
  externo?: boolean
}>()

const route = useRoute()

const activo = computed(() =>
  !props.externo && !!props.to && (route.path === props.to || route.path.startsWith(`${props.to}/`)),
)

const clases = computed(() => [
  'flex h-11 w-full items-center gap-3 rounded-lg px-3 text-[15px] font-medium transition-colors',
  activo.value ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200',
])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :external="externo" :target="externo ? '_blank' : undefined"
    :rel="externo ? 'noopener noreferrer' : undefined" :class="clases" :aria-current="activo ? 'page' : undefined">
    <component :is="icono" class="size-5 shrink-0" :class="activo && 'text-blue-500'" />
    <span class="truncate">{{ texto }}</span>
    <span v-if="externo" class="sr-only">(abre en una pestaña nueva)</span>
  </NuxtLink>
  <button v-else type="button" :class="clases">
    <component :is="icono" class="size-5 shrink-0" />
    <span class="truncate">{{ texto }}</span>
  </button>
</template>
