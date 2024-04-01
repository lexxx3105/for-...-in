import orderByProps from './basic';

console.log('app worked');

const humans = {
  race: 'Человек',
  age: 45,
};
const swordsman = Object.create(humans);
swordsman.name = 'мечник';
swordsman.health = 10;
swordsman.level = 2;
swordsman.attack = 80;
swordsman.defence = 40;

console.log(orderByProps(swordsman, ['name', 'level']));