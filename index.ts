import './style.css';

class Cat {
  name: string;
  age: number;
  color: string;
  breed: string;
  furLength: string;
  favoriteFood: string;
}

const createCat = (partial: Partial<Cat> = {}) => ({
  name: 'Sassy Biscuits',
  age: 10,
  color: 'Calico',
  breed: 'Norweigian Forest Cat',
  furLength: 'Long',
  favoriteFood: 'watermelon',
  ...partial,
});

const cat = createCat({ name: 'Donut' });

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>${cat.name}</h1>
<h2>${cat.age}</h2>
<h2>${cat.color}</h2>
<h2>${cat.breed}</h2>
<h2>${cat.furLength}</h2>
<h2>${cat.favoriteFood}</h2>
`;

console.log(createCat());
