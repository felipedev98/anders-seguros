<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: 'green' | 'amber' | 'red' | 'slate'
  }>(),
  { color: 'slate' },
)

const colores = {
  green: 'bg-green-50 text-green-600',
  amber: 'bg-amber-50 text-amber-600',
  red: 'bg-red-100 text-red-600',
  slate: 'bg-slate-100 text-slate-600',
}
</script>

<template>
  <span
    class="inline-flex items-center rounded-md px-2 py-0.5 text-sm font-medium whitespace-nowrap"
    :class="colores[color]"
  >
    <slot />
  </span>
</template>
