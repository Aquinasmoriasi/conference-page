/* top menu */
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-items a');

ham.addEventListener('click', () => {
  if (ham.classList.contains('active')) {
    ham.classList.remove('active');
    menu.style.left = '-100%';
  } else {
    ham.classList.add('active');
    menu.style.left = '0';
  }
});

menuItem.forEach((link) => {
  if (ham.classList.contains('active')) {
    link.addEventListener('click', () => {
      ham.classList.remove('active');
      menu.style.top = '-100%';
    });
  } else {
    link.addEventListener('click', () => {
      ham.classList.remove('active');
      menu.style.left = '-100%';
    });
  }
});

/* speakers section */

const speakers = [
  {
    name: 'Greta Thurnberg',
    picture: './images/greta.png',
    occupation: 'World acclaimed environmental activist',
    description: 'She is known for challenging world leaders to take immediate action for climate change mitigation.',
  },
  {
    name: 'Melinda Gates',
    picture: './images/gates.png',
    occupation: 'Co-founder of the Bill and Melinda gates foundation',
    description: 'She has been very instrumental in the fight against climate change using her influence and deep pockets.',
  },
  {
    name: 'Mamo B. Mamo',
    picture: './images/mamo.png',
    occupation: 'CEO National Environmental Protection Agency Kenya',
    description: 'She is known for challenging world leaders to take immediate action for climate change mitigation.',
  },
  {
    name: 'Inger Andersen',
    picture: './images/inger.png',
    occupation: 'CEO, the United Nations Environmental Program',
    description: 'She is also the founder and board member of Women in Science movement',
  },
  {
    name: 'Njeri Kabeberi',
    picture: './images/njeri.png',
    occupation: 'Director, Green Peace Organization Kenya',
    description: 'She holds a postgraduate doctorate in environmental impact assessment',
  },
  {
    name: 'Awer Mohamed',
    picture: './images/awer.png',
    occupation: 'Director of the WWF foundation Kenya',
    description: 'He is reknown for his tough stance on matters environment',
  },
];

const h4 = document.createElement('h4');
h4.setAttribute('id', 'speaker-title');
const div2 = document.createElement('div');
div2.setAttribute('id', 'div2');
h4.innerHTML = 'Featured Speakers';
const containerDiv = document.createElement('div');
containerDiv.setAttribute('class', 'speaker-div');
containerDiv.append(h4, div2);
const section = document.createElement('section');
section.setAttribute('id', 'speakers');
const main = document.querySelector('main');

for (let i = 0; i <= speakers.length; i += 1) {
  const h3 = document.createElement('h3');
  h3.setAttribute('class', 'name');
  h3.innerHTML += speakers[i].name;
  const p = document.createElement('p');
  p.setAttribute('class', 'occupation');
  p.innerHTML += speakers[i].occupation;
  const img = document.createElement('img');
  img.setAttribute('src', speakers[i].picture);
  img.setAttribute('alt', speakers[i].picture);
  const p1 = document.createElement('p');
  p1.setAttribute('class', 'description');
  p1.innerHTML = speakers[i].description;
  const span = document.createElement('span');
  span.setAttribute('id', 'div1');

  const div = document.createElement('div');
  div.setAttribute('class', 'speaker-details');
  div.append(h3, p, span, p1);
  containerDiv.append(img, div);
  section.append(containerDiv);
  main.append(section);
}
