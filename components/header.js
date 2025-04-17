export const headerRenderFunction = () => {
  return `
  <div class="headerInnerContainer">
  <input type="text" placeholder="buscar" id="searchInputBar" />
  <div class="headerIconsContainer">
  <a href=""><p>D</p><img src="" alt="" /></a>
  <a href="" class="modalIcon"><img src="../public/icons8-arrow-down-30.png" alt="modalMenuIcon" /></a>
  </div>
  </div>
  `
}

export const modalMenuContent = () => {
  return `
 
  <span>Currently in</span>
  <div>
    <p>D</p>
    <div class="modalMenuUserInfo">
      <p>user</p>
      <p>Personal</p>
      <p>m@il</p>
    </div>
  </div>
  <span>Convert to bussines</span>
  <div class="modalMenuOptionsContainer" id="modalMenuOptionsContainer">
    <p>Your accounts</p>
    <p>Add pinterest account</p>
    <p>Log out</p>
  </div>

 `
}

export const suggestedWordsContent = `
  <div id="suggestionContainer">
    <p>¿Quizás quisiste buscar: <span></span>?</p>
  </div>
  `

export const suggestedWords = () => {
  const alternativeWords = [
    'moon',
    'dogs',
    'nature',
    'food',
    'travel',
    'art',
    'fashion',
    'sports',
    'music',
    'technology',
    'landscape'
  ]
  const randomWord = Math.floor(Math.random() * alternativeWords.length)
  return alternativeWords[randomWord]
}
