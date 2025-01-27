const photoContainer = document.getElementById('photo-container');
const photos = [
    'Fotos',
    'Foto 1',
    'Foto 2',
    'Foto 3'
];

let currentPhotoIndex = 0;

if (photos.length > 1) {
    setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photoContainer.textContent = photos[currentPhotoIndex];
    }, 3000); // Cambia la foto cada 3 segundos
}
