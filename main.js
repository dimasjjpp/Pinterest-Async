import { AsideContent } from './components/aside'
import {
  headerRenderFunction,
  modalMenuContent,
  suggestedWords
} from './components/header'
import { fetchImages } from './components/API'
document.title = 'Pinterest Clone'
//aside
const asideElement = document.createElement('aside')
const asideRefContainer = document.createElement('div')
asideRefContainer.classList.add('aside-ref-container')
asideElement.appendChild(asideRefContainer)
asideRefContainer.appendChild(AsideContent())
document.body.appendChild(asideElement)
//back to top button
const backtoTopButton = document.getElementsByClassName('aside-span')
backtoTopButton[0].addEventListener('click', (event) => {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

//header
const headerElement = document.createElement('header')
headerElement.classList.add('header-section')
headerElement.innerHTML = headerRenderFunction()
document.body.appendChild(headerElement)

//modalMenu
const modalMenu = document.createElement('div')
modalMenu.classList.add('modal-menu-hidden')
modalMenu.classList.add('modal-menu')
modalMenu.innerHTML = modalMenuContent()
const modalDisplay = document.querySelector('[alt="modalMenuIcon"]')
document.body.appendChild(modalMenu)

//modalMenu event listener
modalDisplay.addEventListener('click', () => {
  event.preventDefault()
  modalMenu.classList.toggle('modal-menu-hidden')
})

// geenrate random word for suggestion
const suggestionContainer = document.createElement('div')
suggestionContainer.classList.add('suggested-words-container')
suggestionContainer.classList.add('hidden')
const randomWord = suggestedWords()
suggestionContainer.innerHTML = `<span><p>${'¿Quizás quisiste buscar: '}${randomWord}${'?'}</p></span>`
headerElement.appendChild(suggestionContainer)
console.log(suggestedWords())

//modal Suggestion event listener
const suggestionSpan = document.querySelector('.suggested-words-container span')
suggestionSpan.addEventListener('click', (event) => {
  event.preventDefault()
  suggestionContainer.classList.add('hidden')
  input.value = '' // Clear the search bar
  input.placeholder = randomWord // Show the suggested word as a placeholder
  loadImages(randomWord, count)
})

//gallery
const galleryElement = document.createElement('main')
galleryElement.classList.add('gallery-section')
document.body.appendChild(galleryElement)

const count = 50

const loadImages = async (query = '', count = 50) => {
  try {
    const images = await fetchImages(query, count)

    galleryElement.innerHTML = ''

    images.forEach((image) => {
      const imageCard = document.createElement('div')
      imageCard.classList.add('imageCard')
      imageCard.innerHTML = `
        <img src="${image.url}" alt="${image.description}" class="card-image" />
        <div class="card-text-content">
          <p class="card-username">${image.user}</p>
          <button class="card-save-button">Save</button>
        </div>
      `
      galleryElement.appendChild(imageCard)
      console.log(image.user)
    })

    console.log(`Se generaron ${images.length} elementos en la galería.`)
  } catch (error) {
    console.error('Error al cargar las imágenes:', error)
  }
}

loadImages('', count)

//input searchbar w/ debounce

const debounce = (func, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), delay)
  }
}

const input = document.querySelector('input')
input.addEventListener(
  'input',
  debounce(async (event) => {
    event.preventDefault()
    const query = input.value.trim()

    if (query.length > 0) {
      loadImages(query, count)
    } else {
      loadImages('', count)
    }
  }, 500)
)
