import { clientes as clientesMock, polizas as polizasMock } from '~/data/mock'
import type { ClienteConEstado, EstadoPoliza } from '~/types'

// Mientras más alto, más crítico.
const prioridadEstado: Record<EstadoPoliza, number> = {
  vigente: 0,
  por_vencer: 1,
  vencida: 2,
}

function estadoMasCritico(estados: EstadoPoliza[]): EstadoPoliza | null {
  if (estados.length === 0) return null
  return estados.reduce((peor, actual) =>
    prioridadEstado[actual] > prioridadEstado[peor] ? actual : peor,
  )
}

export function useClientes() {
  // useState mantiene la búsqueda y la página al navegar entre pantallas.
  const busqueda = useState('clientes-busqueda', () => '')
  const pagina = useState('clientes-pagina', () => 1)
  const porPagina = useState('clientes-por-pagina', () => 10)

  // TODO Supabase: reemplazar el mock por la consulta real (clientes + estado de sus pólizas).
  const clientes = computed<ClienteConEstado[]>(() =>
    clientesMock.map((cliente) => ({
      ...cliente,
      nombre_completo: `${cliente.nombres} ${cliente.apellidos}`,
      estado_poliza: estadoMasCritico(
        polizasMock.filter((p) => p.cliente_id === cliente.id).map((p) => p.estado),
      ),
    })),
  )

  const clientesFiltrados = computed(() => {
    const texto = normalizarTexto(busqueda.value)
    if (!texto) return clientes.value

    // Cada palabra debe aparecer en el nombre, en cualquier orden ("camila rojas" encuentra "Camila Andrea Rojas Donoso").
    const palabras = texto.split(/\s+/)
    // Para el RUT se ignoran puntos, guion y espacios.
    const textoRut = texto.replace(/[.\s-]/g, '')

    return clientes.value.filter((cliente) => {
      const nombre = normalizarTexto(cliente.nombre_completo)
      const coincideNombre = palabras.every((palabra) => nombre.includes(palabra))
      const coincideRut = textoRut !== '' && cliente.rut.replace('-', '').toLowerCase().includes(textoRut)
      return coincideNombre || coincideRut
    })
  })

  const total = computed(() => clientesFiltrados.value.length)

  const clientesPaginados = computed(() => {
    const inicio = (pagina.value - 1) * porPagina.value
    return clientesFiltrados.value.slice(inicio, inicio + porPagina.value)
  })

  watch([busqueda, porPagina], () => {
    pagina.value = 1
  })

  return { clientes, busqueda, pagina, porPagina, total, clientesPaginados }
}
