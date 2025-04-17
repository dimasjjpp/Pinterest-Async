export const galleryCardTemplate = (imageUrl, title = 'Image Title') => {
  return `
    
      <img src="${imageUrl}" alt="${title}" class="card-image" />
      <div class="card-text-content">
        <p class="card-title">${title}</p>
        <button class="card-save-button">Save</button>
      </div>
  
  `
}
