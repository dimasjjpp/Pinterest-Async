import { suggestedWords } from './header'

// Función principal para obtener imágenes
export const fetchImages = async (query, count = 50) => {
  const myHeaders = new Headers()
  myHeaders.append(
    'Authorization',
    'Client-ID 2BM5CHzGLCRpO61C4eCqVIM_6apCdXXzg1moxlIYAEU'
  )

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  }

  const getUrl = (query, count) => {
    if (!query || query.trim() === '') {
      return `https://api.unsplash.com/photos/random?count=${count}`
    } else {
      return `https://api.unsplash.com/search/photos?query=${query.trim()}&per_page=${count}`
    }
  }

  const URL = getUrl(query, count)

  const response = await fetch(URL, requestOptions)

  if (!response.ok) {
    throw new Error(
      `Error en la solicitud: ${response.status} ${response.statusText}`
    )
  }

  const data = await response.json()

  // Caso 1: Si el query está vacío, devolver imágenes aleatorias
  if (!query || query.trim() === '') {
    return data.map((photo) => ({
      id: photo.id,
      url: photo.urls.small,
      user: photo.user.name
    }))
  }

  // Caso 2: Si no hay resultados, mostrar sugerencia y buscar "cats"
  if (query && data.total === 0) {
    // Obtener una palabra aleatoria
    suggestedWords()
    // Obtener el contenedor por su clase
    const suggestionContainer = document.querySelector(
      '.suggested-words-container'
    )
    if (suggestionContainer) {
      suggestionContainer.classList.remove('hidden') // Hacer visible el contenedor
    }
    return fetchImages('cats', count)
  }

  // Caso 3: Si hay resultados, procesar y devolver los datos
  if (query && data.total > 0) {
    const processedData = data.results.map((photo) => ({
      id: photo.id,
      url: photo.urls.small,
      user: photo.user.name
    }))

    console.log(processedData)

    // Ocultar la barra de sugerencias si estaba visible
    const suggestionContainer = document.querySelector(
      '.suggested-words-container'
    )
    if (suggestionContainer) {
      suggestionContainer.classList.remove('visible') // Ocultar la barra
    }

    return processedData
  }

  // Realizar una nueva búsqueda con "cats"
  return fetchImages('cats', count)
}
