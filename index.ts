import * as _ from 'lodash';

async function hello() {
  return 'world'
}

// let lucky: any = 23; // any tells the compiler to not type check it.

// let lucky; // is also infered as an any type.

// To annotate it with a type you can use:

let lucky: number;

// let lucky: number = 23; if you have an implicit type don't bother typing it with :number - its redundent

// lucky = '23';
lucky = 23;

// Creating your own types

// type Style = string;

type Style = 'bold' | 'italic' | 23;

let font: Style;

// font = 'chicken'; this now throws error because it can only be assigned to "bold" | 'italic' | 23

////// You will mostly be Strong Typing Objects with multiple properties and types

// The two objects below should be strongly typed to have a first and last name of string types
// You can avoid bugs that are caused by objects that don't have the correct shape.

interface Person {
  first: string;
  last: string;
}

// The interface above might be a little too restrictive so you can add a key with type of string and a value with type any
//
// interface Person {
//   first: string;
//   last: string;
//   [key: string]: any
// }
//
// So now a first and last name is required but you're allowed to add any additional properties.

const person: Person = {
  first: "Jeff",
  last: "Delaney"
}

const person2: Person = {
  first: "Usain",
  last: "Bolt",
  // fast: true // This key value pair now throws an error.
}


////// Strong typing a function
// You can strong type the arguments and its return value;

// The example below is of a function that is not strongly typed and the complire won't flag it as an error
// Running this function will result in an error due to wrong typed arguments
// function pow(x, y) {
//   return Math.pow(x, y);
// }

// pow('23', 'cow');

// Strongly type function below which will return a number.
// function pow(x: number, y: number) {
//   return Math.pow(x, y)
// }

// Stronly typed function with strongly typed return value.
function pow(x: number, y: number): string {
  return Math.pow(x, y).toString(); // This function's return value is set to type string now!
}

// Typing a function that has no return value can be set to type : void
function pow2(x: number, y: number): void {
  console.log(Math.pow(x, y).toString);
}

////// How to strong type an array.

const arr: number[] = [];
arr.push(1);
// arr.push('23');
// arr.push(false);

// This will only cause error when tyring to push values that are not number type

// We can also set an array to type for a specific shape of objects with our Person interface above
const people: Person[] = [];

// TypeScript allow for tupples aswell!
type MyList = [number, string, boolean];

// const arr: MyList = []; will cause an error because its expected to have a number string and boolean value from the start

// To avoid that you can alse make the tupples types optional by adding a question mark after the type!
type MyList2 = [number?, string?, boolean?]

const array: MyList2 = [];

////// TypeScript Generics
// Used for when you want to use a type internally inside of a class or function.


// A good example is an rxjs observable: A class that has an internal value that you can observe
class Observable<T> { // The capitol T here represents a variable type that we can pass in to strong type this observable's internal value
  constructor(public value: T) {}
}

// Now we are able to specify the internal type some later point in our code!

// For instance:

let x: Observable<number>;
let y: Observable<Person>;
let z = new Observable(23); // This will implicitly have an internal number type

// Observable will be used more often than creating them

const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'rick', age: 40, nervous: false };
const baz = { name: 'harry', age: 50, nervous: true };

"Bad Code"
// These logs don't tell us the name of the variable
console.log(foo);
console.log(bar);
console.log(baz);

// Computed Property Names: This now shows the name of each obj
console.log({ foo, bar, baz });

// Custom CSS styling in console log: only works in browser I think
console.log('%c I like chicken.', 'color: orange; font-weight: bold');

// Console.table(...)
console.table([foo, bar, baz]);

// Console.time(...)
console.time('looper');

let i = 0;
while (i < 1000000) { i++ }

console.timeEnd('looper');

// Stack Trace Logs
const deleteMe = () => console.trace("Bye bye database!");

deleteMe();
deleteMe();

// Destructuring
const turtle = {
  name: 'Bob',
  legs: 4,
  shel: true,
  type: 'amphibious',
  meal: 10,
  diet: 'berries'
};

"Bad Code" // Repeats animal too many times.

function feed(animal) {
  return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

"Good Code" // Destructuring in the argument of the function.

function feed2({ name, meal, diet }) {
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

// OR

function feed3(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

// Template Literals
const horse = {
  name: "Topher",
  size: "Large",
  skills: ["jousting", "racing"],
  age: 7
};

"Bad string code"
let bio = horse.name + " is a " + horse.size + " horse skilled in " + horse.skills.join(' & ');

"Good string code"
const { name, size, skills } = horse;
let bio2 = `${name} is a ${size} horse skilled in ${horse.skills.join(' & ')}`

// Building strings in a purely functional way
// Advanced Tag Example

function horseAge(str, age) {
  const ageStr = age > 5 ? 'old' : 'young';
  return `${str[0]}${ageStr} at ${age} years.`;
}

// Instead of passing in arguments to this function
// Attach it to a template literal. It will parse the arguments into it.

const bio3 = horseAge`This horse is ${horse.age}`;

console.log(bio3);

// Spread syntax - objects
const pikachu = { name: 'Pikachu' };
const stats = { hp: 40, attack: 60, defense: 45 };
// We want to assign the properties of the stat object to the pika object

"Bad Object Code" // Ugly and verbose also its mutating the pika object
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

// OR

const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, { hp: 40 });

"Good Object Code" // Using the spread syntax.
const lvl2 = {...pikachu, ...stats};
const lvl3 = {...pikachu, hp: 40};

// Arrays - Spread syntax

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

"Bad Array Code"

pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Weedle');

"Good Array Code"
// Push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle'];

// Unshift
pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon];

// OR
pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle',];

// Loops
const orders = [500, 30, 99, 15, 223];

"Bad Loop Code"

let total = 0;
let withTax = [];
let highValue = [];

for (i = 0; i < orders.length; i++) {
  // Reduce
  total += orders[i];

  // Map
  withTax.push(orders[i] * 1.1);

  // Filter
  if(orders[i] > 100) {
    highValue.push(orders[i]);
  }
}

"Good Loop Code"

// Reduce
const total2 = orders.reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue);

// Map
const withTax2 = orders.map(orderValue => orderValue * 1.1);

// Filter
const highValue2 = orders.filter(orderValue => orderValue > 100)

// Async Await
const random = () => {
  return Promise.resolve(Math.random());
}

"Bad Promise Code"
const sumRandomAsyncNums = () => {
  let first;
  let second;
  let third;

  return random()
    .then(v => {
      first = v;
      return random();
    })
    .then(v => {
      second = v;
      return random();
    })
    .then(v => {
      third = v;
      return first + second + third;
    })
    .then(v => {
      console.log(`result ${v}`)
    })
}

"Good Promise Code"

const sumRandomAsyncNums2 = async() => {
  const first = await random();
  const second = await random();
  const third = await random();
  console.log(`Result ${first + second + third}`);
}