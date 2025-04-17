import { asideArray } from './arrays'

export function AsideContent() {
  const asideFragment = document.createDocumentFragment()
  asideArray.forEach((item) => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')
    span.classList.add('aside-span')
    img.alt = item.name
    img.src = item.image
    span.textContent = item.name
    div.appendChild(img)
    div.appendChild(span)
    asideFragment.appendChild(div)
  })
  return asideFragment
}
