const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const galleryImagesEl = document.querySelector('.gallery-images');
const copyrightEl = document.querySelector('.footer-container-copyright');
const arrowToTop = document.querySelector('.arrow-to-top');

document.addEventListener('DOMContentLoaded', () => {
  getCopyrightYear();
  const images = document.querySelectorAll('.gallery-images img');
  let currentIndex = 0;

  //First Img active
  images[currentIndex].classList.add('active');

  function updateActiveImage(newIndex) {
    images.forEach(img => {
      img.classList.remove('active');
      img.classList.remove('inactive');
    })
    images[newIndex].classList.add('active');

    images.forEach((img, index) => {
      if (index !== newIndex) {
        img.classList.add('inactive');
      }
    })

    currentIndex = newIndex;

    const offset = (images[currentIndex].offsetLeft - 50) - galleryImagesEl.offsetLeft;

    galleryImagesEl.scrollTo({
      left: offset,
      behavior: 'smooth'
    });

  } 

  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      updateActiveImage(currentIndex - 1);
    }
  });

  rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      updateActiveImage(currentIndex + 1);
    }
  });

  images.forEach((img, index) => {
    img.addEventListener('click', ()=> {
      updateActiveImage(index);
    });
  });

});

function getCopyrightYear() {
  const date = new Date();
  const year = date.getFullYear();

  copyrightEl.innerHTML = `
    <span>© ${year} kaffee. All rights reserved.</span>
  `;
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    arrowToTop.classList.add('display');
    arrowToTop.addEventListener('click', ()=> {
      window.scrollTo({top: 0, behavior: 'smooth'})
    })
  } else {
    arrowToTop.classList.remove('display')
  }
})





