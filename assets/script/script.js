const video = document.querySelector('video');
const button = document.querySelector('button');
const container = document.querySelector('.buttons');
const link = document.querySelector('.down_image');
const warn = document.querySelector('.gallery p');
const gallery = document.querySelector('.gallery');
const savebtn = document.querySelector(".Save_Gallery");


console.log(gallery.children.length)

// if (images.length <= 0) warn.style.display = 'block';
// else warn.style.display = 'none';

const cleaning = document.querySelector('.limparfoto');

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
    cleaning.style.display = 'block';
    savebtn.style.display = 'block';

    const canvas = document.querySelector('canvas');
    if (canvas.style.display = 'none') canvas.style.display = 'block';
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);


    link.style.display = 'block';
    if (link.style.display = 'none') link.style.display = 'block';
    link.download = 'foto.png';
    link.href = canvas.toDataURL();
};

const tryPic = () => {
    const canvas = document.querySelector('canvas');
    canvas.style.display = 'none';
    link.style.display = 'none';
    cleaning.style.display = 'none';
    savebtn.style.display = 'none';
    
}

const saveGallery = () => {
    const canvas = document.querySelector('canvas');
    if (canvas.style.display = 'none') canvas.style.display = 'block';
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0);

    const img = document.createElement('img');

    img.src = canvas.toDataURL();

    gallery.appendChild(img)



    console.log(savebtn)
}

button.addEventListener('click', getImage);
cleaning.addEventListener('click', tryPic);
savebtn.addEventListener('click', saveGallery);
