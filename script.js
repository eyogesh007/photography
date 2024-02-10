const gallery = document.getElementById('gallery');
const filterButtons = document.querySelectorAll('.filter-btn');

const photos = [
    { url: './imagetest.jpeg', category: 'landscape' },

    { url: 'https://raw.githubusercontent.com/eyogesh007/SNIST/main/images/car1.jpg', category: 'landscape' },
    { url: 'https://raw.githubusercontent.com/eyogesh007/SNIST/main/images/TOMY.png', category: 'landscape' },
    { url: 'https://raw.githubusercontent.com/eyogesh007/SNIST/main/images/TOMY.png', category: 'landscape' },
    { url: './imagetest.jpeg', category: 'landscape' },

    { url: 'https://raw.githubusercontent.com/eyogesh007/SNIST/main/images/car1.jpg', category: 'landscape' },
    { url: 'https://raw.githubusercontent.com/eyogesh007/SNIST/main/images/TOMY.png', category: 'landscape' },
    { url: 'https://raw.githubusercontent.com/eyogesh007/SNIST/main/images/TOMY.png', category: 'landscape' },
    { url: './imagetest.jpeg', category: 'landscape' },

    { url: 'https://raw.githubusercontent.com/eyogesh007/SNIST/main/images/car1.jpg', category: 'landscape' },
    { url: 'https://raw.githubusercontent.com/eyogesh007/SNIST/main/images/TOMY.png', category: 'landscape' },
    { url: 'https://raw.githubusercontent.com/eyogesh007/SNIST/main/images/TOMY.png', category: 'landscape' },

    { url: 'photo1.jpg', category: 'landscape' },
    { url: 'photo2.jpg', category: 'portrait' },
    { url: 'photo3.jpg', category: 'nature' },
    // Add more photo objects as needed
];

const image = document.getElementById('image');

let increaseSizeInterval;

// Function to open the image in a modal
// Function to open the image modal
function openImageModal(photo) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = photo.url;
    modal.style.display = 'block';
}

// Function to close the image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

function playGame(photo) {
    console.log('Playing game for:', photo);
        console.log('Playing game for:', photo);
        const gameId = photo.url; // Example parameter to be sent
        
        // Construct the URL with query parameters
        const url = `index1.html?gameId=${encodeURIComponent(gameId)}`;
        
        // Open the new tab with the URL
        const newTab = window.open(url, '_blank');
    }
// Function to display photos based on category
function displayPhotos(category) {
    gallery.innerHTML = '';
    let filteredPhotos = photos;

    if (category !== 'all') {
        filteredPhotos = photos.filter(photo => photo.category === category);
    }

    filteredPhotos.forEach(photo => {

        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');
        const img = document.createElement('img');
        img.src = photo.url;
        img.id="image"
        photoCard.appendChild(img);

        // Create overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // Create options
        const options = document.createElement('div');
        options.classList.add('options');
        const playGameBtn = document.createElement('button');
        playGameBtn.textContent = 'Play Game';
        playGameBtn.addEventListener('click', () => playGame(photo));
        options.appendChild(playGameBtn);
        overlay.appendChild(options);
        photoCard.appendChild(overlay);
        gallery.appendChild(photoCard);
  
                const playGameBtn1 = document.createElement('button');
                playGameBtn1.textContent = 'Open image';
                playGameBtn1.addEventListener('click', () => openImageModal(photo));
                options.appendChild(playGameBtn1);
                overlay.appendChild(options);
                photoCard.appendChild(overlay);
                gallery.appendChild(photoCard);

    });
}

// Event listeners for filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        displayPhotos(category);
    });
});

// Initially display all photos
displayPhotos('all');



