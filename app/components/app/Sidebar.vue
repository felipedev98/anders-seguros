<script setup lang="ts">
import { FileText, Settings, ShieldCheck, SquareArrowOutUpRight, Users } from '@lucide/vue'

const { companias } = useCompanias()

const navegacion = [
  { texto: 'Clientes', to: '/clientes', icono: Users },
  { texto: 'Pólizas', to: '/polizas', icono: FileText },
]
</script>

<template>
  <aside class="sticky top-0 flex h-screen w-72 shrink-0 flex-col bg-slate-900 px-6 py-6">
    <NuxtLink to="/clientes" class="flex items-center gap-3">
      <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
        <ShieldCheck class="size-6" />
      </span>
      <span class="min-w-0">
        <span class="block text-base font-bold text-white">Anders Seguros</span>
        <span class="block truncate text-xs text-slate-400">Agencia de Seguros Coyhaique</span>
      </span>
    </NuxtLink>

    <nav class="mt-8 flex min-h-0 flex-1 flex-col overflow-y-auto" aria-label="Navegación principal">
      <ul class="space-y-1">
        <li v-for="item in navegacion" :key="item.to">
          <AppSidebarItem :texto="item.texto" :to="item.to" :icono="item.icono" />
        </li>
      </ul>

      <ul class="mt-auto space-y-1 pt-6" aria-label="Portales de pago">
        <li v-for="compania in companias" :key="compania.id">
          <AppSidebarItem :texto="compania.nombre" :to="compania.url_portal" :icono="SquareArrowOutUpRight" externo />
        </li>
        <li>
          <!-- TODO: página de configuración -->
          <AppSidebarItem texto="Configuración" :icono="Settings" />
        </li>
      </ul>
    </nav>

    <div class="mt-4 border-t border-slate-800 pt-5">
      <AppUserCard />
    </div>
  </aside>
</template>
