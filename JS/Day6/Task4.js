
var images = [
    'Images/1.jpg',
    'Images/2.jpg',
    'Images/3.jpg',
    'Images/4.jpg',
    'Images/5.jpg',
    'Images/6.jpg',
];

var currentIndex = 0;
var slideshowInterval;

var imgElement = document.getElementById('galleryImage');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var slideshowBtn = document.getElementById('slideshowBtn');

function updateImage() {
    imgElement.src = images[currentIndex];
}

function nextImage() {
    if (currentIndex+1!=images.length) {
       showNext();

    }
}
function previousImage() {
    if (currentIndex!=0) {
        showPrevious();
    }
}
function showPrevious() {
   
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNext() {
  
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function startSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowBtn.textContent = 'Start Slideshow';
    } else {
        slideshowInterval = setInterval(showNext, 2000);
        slideshowBtn.textContent = 'Stop Slideshow';
    }
}

prevBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);
slideshowBtn.addEventListener('click', startSlideshow);


updateImage();