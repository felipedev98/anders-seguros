<script setup lang="ts">
import type { ClienteConEstado } from '~/types'

defineProps<{
  clientes: ClienteConEstado[]
  busqueda?: string
}>()

const emit = defineEmits<{
  seleccionar: [cliente: ClienteConEstado]
}>()
</script>

<template>
  <table class="w-full table-fixed text-left text-[15px]">
    <thead class="border-b border-slate-200 bg-slate-50 text-slate-600">
      <tr>
        <th scope="col" class="w-[40%] px-6 py-4 font-semibold">Nombre</th>
        <th scope="col" class="w-[18%] px-6 py-4 font-semibold">RUT</th>
        <th scope="col" class="w-[20%] px-6 py-4 font-semibold">Teléfono</th>
        <th scope="col" class="px-6 py-4 font-semibold">Estado Póliza</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-slate-200">
      <tr v-for="cliente in clientes" :key="cliente.id"
        class="cursor-pointer transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none"
        tabindex="0" @click="emit('seleccionar', cliente)" @keydown.enter="emit('seleccionar', cliente)">
        <td class="px-6 py-4">
          <div class="flex items-center gap-3">
            <UiAvatar :nombre="cliente.nombres" />
            <span class="truncate font-medium text-slate-900">{{ cliente.nombre_completo }}</span>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-slate-500">{{ formatearRut(cliente.rut) }}</td>
        <td class="px-6 py-4 whitespace-nowrap text-slate-500">{{ formatearTelefono(cliente.telefono) }}</td>
        <td class="px-6 py-4">
          <EstadoBadge :estado="cliente.estado_poliza" />
        </td>
      </tr>
      <tr v-if="clientes.length === 0">
        <td colspan="4" class="px-6 py-12 text-center text-slate-500">
          <template v-if="busqueda">No se encontraron clientes para «{{ busqueda }}»</template>
          <template v-else>Todavía no hay clientes registrados</template>
        </td>
      </tr>
    </tbody>
  </table>
</template>
