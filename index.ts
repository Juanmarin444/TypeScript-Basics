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