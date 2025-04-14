let currentImage = 0;

const images = [
  { image: 'images/gallery/shaunakperi.PNG', text: 'Shaunak Peri' },
  { image: 'images/gallery/handle.JPG', text: 'Handle in my dorm.' },
  { image: 'images/gallery/airpods.jpg', text: 'My Airpods.' },
  { image: 'images/gallery/university.jpg', text: 'University Of North Carolina Charlotte.' },
  { image: 'images/gallery/notebook.jpg', text: 'My math notebook.' },
  { image: 'images/gallery/acvent.jpg', text: 'My AC vent in my room.' },
  { image: 'images/gallery/knife.jpg', text: 'Kitchen Knives.' },
  { image: 'images/gallery/pencil.jpg', text: 'My pencil.' },
  { image: 'images/gallery/earphones.jpg', text: 'My earphones.' },
  { image: 'images/gallery/razor.jpg', text: 'My Razor.' },
  { image: 'images/gallery/inside.jpg', text: 'Inside of my dorm room.' }
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

$(document).ready(() => {
  $('#previous').on('click', () => navigateTo(currentImage - 1));
  $('#next').on('click', () => navigateTo(currentImage + 1));
  $('#first').on('click', () => navigateTo(0));
  $('#end').on('click', () => navigateTo(images.length - 1));
  update();
});
