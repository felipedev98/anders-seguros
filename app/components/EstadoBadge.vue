<script setup lang="ts">
import type { EstadoPoliza } from '~/types'

const props = defineProps<{
  estado: EstadoPoliza | null
}>()

const estados: Record<EstadoPoliza, { texto: string, color: 'green' | 'amber' | 'red' }> = {
  vigente: { texto: 'Vigente', color: 'green' },
  por_vencer: { texto: 'Por Vencer', color: 'amber' },
  vencida: { texto: 'Vencida', color: 'red' },
}

const config = computed(() =>
  props.estado ? estados[props.estado] : { texto: 'Sin pólizas', color: 'slate' as const },
)
</script>

<template>
  <UiBadge :color="config.color">{{ config.texto }}</UiBadge>
</template>
