<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'ghost'
    type?: 'button' | 'submit' | 'reset'
  }>(),
  { variant: 'primary', type: 'button' },
)

const variantes = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
}
</script>

<template>
  <button
    :type="type"
    class="inline-flex h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
    :class="variantes[variant]"
  >
    <span v-if="$slots.icono" class="flex shrink-0 [&>svg]:size-4">
      <slot name="icono" />
    </span>
    <slot />
  </button>
</template>
