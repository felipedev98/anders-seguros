import { companias as companiasMock } from '~/data/mock'
import type { Compania } from '~/types'

export function useCompanias() {
  // TODO Supabase: reemplazar por la consulta a la tabla `companias`.
  const companias = computed<Compania[]>(() => companiasMock)

  return { companias }
}
