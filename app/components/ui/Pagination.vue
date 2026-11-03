<script setup lang="ts">
import { ChevronDown, ChevronLeft, ChevronRight } from '@lucide/vue'

const props = defineProps<{
  total: number
}>()

const pagina = defineModel<number>('pagina', { required: true })
const porPagina = defineModel<number>('porPagina', { required: true })

const opciones = [10, 25, 50]

const totalPaginas = computed(() => Math.max(1, Math.ceil(props.total / porPagina.value)))
const desde = computed(() => (props.total === 0 ? 0 : (pagina.value - 1) * porPagina.value + 1))
const hasta = computed(() => Math.min(pagina.value * porPagina.value, props.total))

const esPrimera = computed(() => pagina.value <= 1)
const esUltima = computed(() => pagina.value >= totalPaginas.value)

function anterior() {
  if (!esPrimera.value) pagina.value--
}

function siguiente() {
  if (!esUltima.value) pagina.value++
}
</script>

<template>
  <nav class="flex items-center gap-4 text-sm text-slate-600" aria-label="Paginación">
    <label class="relative">
      <span class="sr-only">Resultados por página</span>
      <select
        v-model.number="porPagina"
        name="por_pagina"
        class="h-10 cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white pr-10 pl-4 text-slate-600 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
      >
        <option v-for="opcion in opciones" :key="opcion" :value="opcion">
          {{ opcion }} por página
        </option>
      </select>
      <ChevronDown class="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-500" />
    </label>

    <div class="flex h-10 items-center rounded-xl border border-slate-200 bg-white">
      <span class="px-4 tabular-nums" aria-live="polite">{{ desde }}-{{ hasta }} de {{ total }}</span>
      <div class="flex h-full items-center border-l border-slate-200 px-1">
        <button
          type="button"
          class="flex size-8 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent"
          :disabled="esPrimera"
          aria-label="Página anterior"
          @click="anterior"
        >
          <ChevronLeft class="size-4" />
        </button>
        <button
          type="button"
          class="flex size-8 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:bg-transparent"
          :disabled="esUltima"
          aria-label="Página siguiente"
          @click="siguiente"
        >
          <ChevronRight class="size-4" />
        </button>
      </div>
    </div>
  </nav>
</template>
