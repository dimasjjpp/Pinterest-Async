import { suggestedWords } from './header'

// Main function to fetch images
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
    throw new Error(`Request error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()

  // Case 1: if the query is empty, return random images
  if (!query || query.trim() === '') {
    return data.map((photo) => ({
      id: photo.id,
      url: photo.urls.small,
      user: photo.user.name
    }))
  }

  // Case 2: if the query is not empty and there are no results, show suggestions
  if (query && data.total === 0) {
    // Get a random word
    suggestedWords()
    // Get the container by its class
    const suggestionContainer = document.querySelector(
      '.suggested-words-container'
    )
    if (suggestionContainer) {
      suggestionContainer.classList.remove('hidden') // Make it visible
    }
    return fetchImages('cats', count)
  }

  // Case 3: if the query is not empty and there are results, return the images
  if (query && data.total > 0) {
    const processedData = data.results.map((photo) => ({
      id: photo.id,
      url: photo.urls.small,
      user: photo.user.name
    }))

    console.log(processedData)

    // Hide the suggestion container if it exists
    const suggestionContainer = document.querySelector(
      '.suggested-words-container'
    )
    if (suggestionContainer) {
      suggestionContainer.classList.remove('visible') // Hide it
    }

    return processedData
  }

  // New search with no results, return cat images
  return fetchImages('cats', count)
}
