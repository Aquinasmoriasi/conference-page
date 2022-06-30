/* top menu */
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-items a');

ham.addEventListener('click', () => {
  if (ham.classList.contains('active')) {
    ham.classList.remove('active');
    menu.style.transition = 'all 0.1s ease-out';
    menu.style.left = '-100%';
  } else {
    ham.classList.add('active');
    menu.style.transition = 'all 0.3s ease-in';
    menu.style.left = '0';
  }
});

menuItem.forEach((a) => {
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

/*speakers section*/


const greta = {
  name: `Greta Thurnberg`,
  occupation: `World acclaimed environmental activist`,
  image: `src="./images/greta.jpg/" alt="Greta Thurnberg"`,
  ideoligies: `She is known for challenging world leaders to take immediate action for climate change mitigation.`
};

const main = document.querySelector('main');
let section = document.createElement('section');
section.setAttribute('id', 'speakers')
let h3 = document.querySelector('h3');
h3.innerHTML = greta.name;
h3.setAttribute('class','name');
section.append(h3);
let p = document.createElement('p');
p.innerHTML = greta.occupation;
p.setAttribute('class','occupation');
section.append(p);
main.append(section)

