// Modelo provisorio: se ajusta cuando esté el diagrama definitivo para Supabase.

export type EstadoPoliza = 'vigente' | 'por_vencer' | 'vencida'
export type EstadoCuota = 'pendiente' | 'pagada' | 'atrasada'

export interface Compania {
  id: string
  nombre: string
  url_portal: string
}

export interface Cliente {
  id: string
  rut: string // guardado sin puntos y con guion: 12345678-9
  nombres: string
  apellidos: string
  telefono: string // guardado como 56912345678
  email: string | null
  created_at: string
  updated_at: string
}

export interface Poliza {
  id: string
  cliente_id: string
  compania_id: string
  numero_poliza: string
  tipo: string
  fecha_inicio: string
  fecha_vencimiento: string
  estado: EstadoPoliza
  created_at: string
  updated_at: string
}

export interface Cuota {
  id: string
  poliza_id: string
  numero: number
  monto: number
  fecha_vencimiento: string
  estado: EstadoCuota
}

// Tipos derivados para las vistas (no son tablas)

export interface ClienteConEstado extends Cliente {
  nombre_completo: string
  estado_poliza: EstadoPoliza | null // null si el cliente no tiene pólizas
}

export interface PolizaDetalle extends Poliza {
  cliente_nombre: string
  compania_nombre: string
}
