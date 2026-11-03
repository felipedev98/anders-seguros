<script setup lang="ts">
useHead({ title: 'Pólizas · Anders Seguros' })

const { polizas } = usePolizas()
</script>

<template>
  <AppPageHeader titulo="Pólizas" />

  <div class="px-10 py-10">
    <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <table class="w-full text-left text-[15px]">
        <thead class="border-b border-slate-200 bg-slate-50 text-slate-600">
          <tr>
            <th scope="col" class="px-6 py-4 font-semibold">N° Póliza</th>
            <th scope="col" class="px-6 py-4 font-semibold">Cliente</th>
            <th scope="col" class="px-6 py-4 font-semibold">Compañía</th>
            <th scope="col" class="px-6 py-4 font-semibold">Tipo</th>
            <th scope="col" class="px-6 py-4 font-semibold">Vencimiento</th>
            <th scope="col" class="px-6 py-4 font-semibold">Estado</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200">
          <tr v-for="poliza in polizas" :key="poliza.id">
            <td class="px-6 py-4 font-medium text-slate-900 tabular-nums">{{ poliza.numero_poliza }}</td>
            <td class="px-6 py-4 text-slate-900">{{ poliza.cliente_nombre }}</td>
            <td class="px-6 py-4 text-slate-500">{{ poliza.compania_nombre }}</td>
            <td class="px-6 py-4 text-slate-500">{{ poliza.tipo }}</td>
            <td class="px-6 py-4 text-slate-500 tabular-nums">{{ formatearFecha(poliza.fecha_vencimiento) }}</td>
            <td class="px-6 py-4">
              <EstadoBadge :estado="poliza.estado" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
