<script setup lang="ts">
// `class` se aplica al contenedor; el resto de atributos (aria-label, name, etc.) al <input>.
defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    placeholder?: string
    type?: string
  }>(),
  { type: 'text' },
)

const modelo = defineModel<string>({ default: '' })

const attrs = useAttrs()
const atributosInput = computed(() => {
  const { class: _clase, ...resto } = attrs
  return resto
})
</script>

<template>
  <div class="relative" :class="attrs.class">
    <span
      v-if="$slots.icono"
      class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400 [&>svg]:size-4"
    >
      <slot name="icono" />
    </span>
    <input
      v-model="modelo"
      v-bind="atributosInput"
      :type="type"
      :placeholder="placeholder"
      class="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pr-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
      :class="$slots.icono ? 'pl-9' : 'pl-3'"
    >
  </div>
</template>
