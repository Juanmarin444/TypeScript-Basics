let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: any[];

let colorRed = 0;
let colorGreen = 1;
let colorBlue = 2;
// The above can be verbose and difficult to read.

enum Color { Red, Green, Blue };
// With an enum the members are auto incremented.
// Sometimes we might want to initialize our enum members with values so when the enum gets updated the auto incrementation wont change our members values
enum Color2 { red = 0, Green = 1, Blue = 2, Purple = 3};

let backgroundColor = Color.Red;

let message = "Chicken";
let endsWithN = message.endsWith('n'); 

// endsWith() was a method found with the compilers intellisense 
// endsWith() is a string method.
// If we declare message like the code below we won't see that intellisense anymore.
// You can avoid this with type assertions

let message2;
message2 = "Cow";
let endsWithW = (<string>message2).endsWith("w");

// or you can use

let message3;
message3 = "Dog";
let endsWithX = (message3 as string).endsWith('x');

// Custom Types

// Passing in a point object might be for useful
let drawPoint = (point: { x: number, y: number }) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
});

// Point can be annotated with a custom type

// This can be verbose and if you have other function that take in the same parameters you don't want to repeat code.
// Using an interface can be helpful with that!

interface Point {
    x: number,
    y: number
}

let drawPoint2 = (point: Point) => {
    // ...
}

// Interface use Pascal naming convention
