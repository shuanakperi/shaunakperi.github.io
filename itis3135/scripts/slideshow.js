let currentImage = 0;

const images = [
  { image: 'images/gallery/shaunakperi.png', text: 'Shaunak Peri' },
  { image: 'images/gallery/handle.jpg', text: 'Handle in my dorm.' },
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
  const image = images[currentImage];
  $('#slide-image').attr('src', image.image).attr('alt', image.text);
  const letters = Array.from($('#position').text());
  const newHTML = letters
    .map((letter, i) => (i === currentImage ? `<strong>${letter}</strong>` : letter))
    .join('');
  $('#position').html(newHTML);
  $('#slide-caption').text(`${letters[currentImage]} is for ${image.text}`);
};

const navigateTo = (index) => {
  currentImage = (index + images.length) % images.length;
  update();
};

$('#previous').on('click', () => navigateTo(currentImage - 1));
$('#next').on('click', () => navigateTo(currentImage + 1));
$('#first').on('click', () => navigateTo(0));
$('#end').on('click', () => navigateTo(images.length - 1));

$(document).ready(update);
