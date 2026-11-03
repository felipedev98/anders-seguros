/** `56981724432` → `+56 9 8172 4432`. Si no es un móvil chileno, lo devuelve sin cambios. */
export function formatearTelefono(telefono: string): string {
  const digitos = telefono.replace(/\D/g, '')
  const match = digitos.match(/^56(9)(\d{4})(\d{4})$/)
  if (!match) return telefono
  return `+56 ${match[1]} ${match[2]} ${match[3]}`
}
