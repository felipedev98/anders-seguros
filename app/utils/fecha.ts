/** `2026-10-27` → `27-10-2026`. */
export function formatearFecha(fecha: string): string {
  const [anio, mes, dia] = fecha.slice(0, 10).split('-')
  return `${dia}-${mes}-${anio}`
}
