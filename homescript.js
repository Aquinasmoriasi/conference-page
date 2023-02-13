import speakersObject from './speakers/speakers.js';
/* top menu */
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-items a');

ham.addEventListener('click', () => {
  if (ham.classList.contains('active')) {
    ham.classList.remove('active');
    menu.style.transition = 'all 0.1s ease-out';
    menu.style.left = '-500%';
  } else {
    ham.classList.add('active');
    menu.style.transition = 'all 0.3s ease-in';
    menu.style.left = '0';
  }
});

menuItem.forEach((link) => {
  if (ham.classList.contains('active')) {
    link.addEventListener('click', () => {
      ham.classList.remove('active');
      menu.style.left = '-500%';
    });
  } else {
    link.addEventListener('click', () => {
      ham.classList.remove('active');
      menu.style.left = '-500%';
    });
  }
});

/* speakers section */

const details = document.getElementById('speakers');
const { speakers } = speakersObject;

const spkHeader = document.getElementById('about-header1');
spkHeader.innerHTML = 'Featured Speakers<hr />';

speakers.forEach((speaker) => {
  const divContainer = document.createElement('div');
  divContainer.setAttribute('id', 'speaker-container');
  divContainer.innerHTML = `
  <div class='speaker-details'>
    <img src="./images/${speaker.picture}" alt="./images/${speaker.name}">
    <div class="more-details">
      <h3 class='name'>${speaker.name}</h3>
      <p class='occupation'>${speaker.occupation}</p>
      <hr class='separator' />
      <p class='description'>${speaker.description}</p>
    </div>
  </div>`;
  details.append(divContainer);
});
