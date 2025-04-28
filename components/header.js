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
<div class="modalMenuUserInfo">
  <h3>D</h3>
  <div class="modalInfoInnerContainer">
    <p>user</p>
    <p>Personal</p>
    <p>m@il</p>
  </div>
</div>
<div class="modalMenuOptionsContainer">
  <span>Convert to bussines</span>
  <ul>
    <li>Your account</li>
    <li>Add Pinterest account</li>
    <li>Log out</li>
  </ul>
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
