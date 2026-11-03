<script setup lang="ts">
import { Plus, Search } from '@lucide/vue'
import type { ClienteConEstado } from '~/types'

useHead({ title: 'Clientes · Anders Seguros' })

const { busqueda, pagina, porPagina, total, clientesPaginados } = useClientes()

function abrirNuevoCliente() {
  // TODO: abrir ClienteFormModal
}

function verCliente(_cliente: ClienteConEstado) {
  // TODO: abrir ficha del cliente
}
</script>

<template>
  <AppPageHeader titulo="Clientes">
    <template #acciones>
      <UiInput v-model="busqueda" name="busqueda" type="search" class="w-80" placeholder="Buscar por nombre, RUT..."
        aria-label="Buscar clientes por nombre o RUT">
        <template #icono>
          <Search />
        </template>
      </UiInput>
      <UiButton @click="abrirNuevoCliente">
        <template #icono>
          <Plus />
        </template>
        Agregar Cliente
      </UiButton>
    </template>
  </AppPageHeader>

  <div class="px-10 py-10">
    <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <ClientesTabla :clientes="clientesPaginados" :busqueda="busqueda" @seleccionar="verCliente" />
    </div>

    <div class="mt-6 flex justify-end">
      <UiPagination v-model:pagina="pagina" v-model:por-pagina="porPagina" :total="total" />
    </div>
  </div>
</template>
