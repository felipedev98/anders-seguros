import { clientes as clientesMock, companias as companiasMock, polizas as polizasMock } from '~/data/mock'
import type { PolizaDetalle } from '~/types'

export function usePolizas() {
  // TODO Supabase: reemplazar por la consulta a `polizas` con join a `clientes` y `companias`.
  const polizas = computed<PolizaDetalle[]>(() =>
    polizasMock.map((poliza) => {
      const cliente = clientesMock.find((c) => c.id === poliza.cliente_id)
      const compania = companiasMock.find((c) => c.id === poliza.compania_id)
      return {
        ...poliza,
        cliente_nombre: cliente ? `${cliente.nombres} ${cliente.apellidos}` : 'Sin cliente',
        compania_nombre: compania?.nombre ?? 'Sin compañía',
      }
    }),
  )

  return { polizas }
}
