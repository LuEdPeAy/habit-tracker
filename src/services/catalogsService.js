export function initCatalogs() {
  const frecuencyCatalog = [
    { id: 1, name: 'Diario' },
    { id: 2, name: 'Semanal' },
    { id: 3, name: '3 veces por semana' },
    { id: 4, name: 'Fines de semana' },
  ]

  const tagCatalog = [
    { id: 1, name: 'Salud' },
    { id: 2, name: 'Cognitivo' },
    { id: 3, name: 'Estudio' },
    { id: 4, name: 'Trabajo' },
    { id: 5, name: 'Afectivo' },
  ]

  const existFrecuencyCatalog = localStorage.getItem('frecuencyCatalog')
  const existTagCatalog = localStorage.getItem('tagCatalog')

  if (!existFrecuencyCatalog) {
    localStorage.setItem('frecuencyCatalog', JSON.stringify(frecuencyCatalog))
  }

  if (!existTagCatalog) {
    localStorage.setItem('tagCatalog', JSON.stringify(tagCatalog))
  }
}
