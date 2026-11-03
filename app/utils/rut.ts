// Utilidades de RUT chileno. Formato de almacenamiento: 12345678-9 (sin puntos, con guion).

/** Quita puntos, espacios y guion, deja la K en mayúscula y devuelve `12345678-9`. */
export function limpiarRut(rut: string): string {
  const limpio = rut.replace(/[.\s-]/g, '').toUpperCase()
  if (limpio.length < 2) return limpio
  return `${limpio.slice(0, -1)}-${limpio.slice(-1)}`
}

/** Calcula el dígito verificador (módulo 11) de un cuerpo de RUT. */
export function calcularDv(cuerpo: string): string {
  let suma = 0
  let multiplo = 2
  for (const digito of [...cuerpo].reverse()) {
    suma += Number(digito) * multiplo
    multiplo = multiplo === 7 ? 2 : multiplo + 1
  }
  const resto = 11 - (suma % 11)
  if (resto === 11) return '0'
  if (resto === 10) return 'K'
  return String(resto)
}

/** Valida formato y dígito verificador. Acepta el RUT con o sin puntos. */
export function validarRut(rut: string): boolean {
  const limpio = limpiarRut(rut)
  if (!/^\d{7,8}-[\dK]$/.test(limpio)) return false
  const [cuerpo, dv] = limpio.split('-') as [string, string]
  return calcularDv(cuerpo) === dv
}

/** Devuelve el RUT como `12.345.678-9`. */
export function formatearRut(rut: string): string {
  const limpio = limpiarRut(rut)
  if (!limpio.includes('-')) return limpio
  const [cuerpo, dv] = limpio.split('-') as [string, string]
  return `${cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}-${dv}`
}
