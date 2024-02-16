
const gallery = document.getElementById('gallery');
const filterButtons = document.querySelectorAll('.filter-btn');

var musicPlayer = document.getElementById('musicPlayer');
    
    const photos = [
        // Your photo data here...
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20211211_075409.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20211211_101208.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20211212_080817.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20211212_095218.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20211212_101224.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20211212_161413.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20220116_172551.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20220116_210350.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20220404_105718.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20220522_164324.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20220723_194901.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20220923_172840.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20220925_120652.heic', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20230125_082951.heic', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20230311_074752.heic', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20230311_074753.heic', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20230708_182607.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20230721_221217 (2).jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20230722_190040.heic', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20230723_171648.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20230820_213439.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20231025_064727 (3).jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20231116_122926 (3).jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20231121_194434.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20231202_175518 (3).jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20231230_110632.jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/20240120_152400 (1).jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/IMG_20220308_200834_723 (4).jpg', category: 'landscape' },
        { url: 'https://raw.githubusercontent.com/eyogesh007/photography/main/images/IMG_20231025_115154_368.jpg', category: 'landscape' }
      
    ];


const image = document.getElementById('image');

let increaseSizeInterval;

// Function to open the image in a modal
// Function to open the image modal
function openImageModal(photo) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = photo; // Assign the photo URL directly to src
    modal.style.display = 'block';
}
var musicPlayer = document.getElementById('musicPlayer');
var musicButton = document.getElementById('musicButton');


// Function to close the image modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

function playGame(photo) {
    console.log('Playing game for:', photo);
        console.log('Playing game for:', photo);
     musicPlayer1.pause();
        const gameId = photo; // Example parameter to be sent
        
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


