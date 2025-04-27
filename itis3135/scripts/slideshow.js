let currentImage = 0;
let interval = null; 
const images = [
  { image: 'images/gallery/shaunakperi.PNG', text: 'Shaunak Peri' },
  { image: 'images/gallery/handle.png', text: 'Handle in my dorm.' },
  { image: 'images/gallery/airpods.png', text: 'My Airpods.' },
  { image: 'images/gallery/university.png', text: 'University Of North Carolina Charlotte.' },
  { image: 'images/gallery/notebook.png', text: 'My math notebook.' },
  { image: 'images/gallery/acvent.png', text: 'My AC vent in my room.' },
  { image: 'images/gallery/knife.png', text: 'Kitchen Knives.' },
  { image: 'images/gallery/pencil.png', text: 'My pencil.' },
  { image: 'images/gallery/earphones.png', text: 'My earphones.' },
  { image: 'images/gallery/razor.png', text: 'My Razor.' },
  { image: 'images/gallery/inside.png', text: 'Inside of my dorm room.' }
];

const update = () => {
  const currentImgData = images[currentImage];

  $('#slide-image')
    .attr('src', currentImgData.image)
    .attr('alt', currentImgData.text);

  const letters = Array.from($('#position').text());
  if (letters.length !== images.length) {
    console.warn('Mismatch between #position letters and images. Fixing...');
    const newText = images.map((_, i) => String.fromCharCode(65 + i)).join('');
    $('#position').text(newText);
    return update();
  }

  const newHTML = letters
    .map((letter, i) => (i === currentImage ? `<strong>${letter}</strong>` : letter))
    .join('');
  $('#position').html(newHTML);
  $('#slide-caption').text(`${letters[currentImage]} is for ${currentImgData.text}`);
};

const navigateTo = (index) => {
  currentImage = (index + images.length) % images.length;
  update();
};

const startSlideshow = () => {
  if (!interval) {
    interval = setInterval(() => navigateTo(currentImage + 1), 2000); 
  }
};

const stopSlideshow = () => {
  clearInterval(interval);
  interval = null;
};

$(document).ready(() => {
  $('#previous').on('click', () => navigateTo(currentImage - 1));
  $('#next').on('click', () => navigateTo(currentImage + 1));
  $('#first').on('click', () => navigateTo(0));
  $('#end').on('click', () => navigateTo(images.length - 1));
  $('#play').on('click', startSlideshow);
  $('#stop').on('click', stopSlideshow);

  update();
});
