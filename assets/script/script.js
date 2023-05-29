const video = document.querySelector('video');
const button = document.querySelector('button');
const container = document.querySelector('.buttons');

navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    video.srcObject = stream;
    video.play();
})
.catch(error => {
    console.log(error);
    console.log('usuario recusou a permissão da camera');
})

const getImage = (event) => {
    const audio = new Audio('../assets/sound/toque.mp3');
    audio.play();
    const canvas = document.querySelector('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);
    const link = document.createElement('a');
    link.download = 'foto.png';
    link.href = canvas.toDataURL();
    link.textContent = 'Baixar imagem'
    container.appendChild(link);
};

button.addEventListener('click', getImage);
