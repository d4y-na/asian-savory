const imageWrappers = document.querySelectorAll('.img-wrapper');
const overlay = document.querySelector('.overlay');
const overlayImg = document.querySelector('.overlay-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showOverlay(index) {
  currentIndex = index;
  overlayImg.src = images[currentIndex].src;
  overlay.classList.remove('hidden');
}

function closeOverlay() {
  overlay.classList.add('hidden');
}

function showNext() {
  currentIndex = (currentIndex + 1) % imageWrappers.length;
  const nextImg = imageWrappers[currentIndex].querySelector('img');
  overlayImg.src = nextImg.src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + imageWrappers.length) % imageWrappers.length;
  const prevImg = imageWrappers[currentIndex].querySelector('img');
  overlayImg.src = prevImg.src;
}


imageWrappers.forEach((wrapper, i) => {
  wrapper.addEventListener('click', () => {
    const img = wrapper.querySelector('img');
    overlayImg.src = img.src;
    currentIndex = i;
    overlay.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', closeOverlay);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Optional: ESC key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeOverlay();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

// Close overlay when clicking outside the image
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    closeOverlay();
  }
});