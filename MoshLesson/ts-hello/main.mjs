let a;
let b;
let c;
let d;
let e;
let f;
let colorRed = 0;
let colorGreen = 1;
let colorBlue = 2;
// The above can be verbose and difficult to read.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// With an enum the members are auto incremented.
// Sometimes we might want to initialize our enum members with values so when the enum gets updated the auto incrementation wont change our members values
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 0] = "red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
    Color2[Color2["Purple"] = 3] = "Purple";
})(Color2 || (Color2 = {}));
;
let backgroundColor = Color.Red;
let message = "Chicken";
let endsWithN = message.endsWith('n');
// endsWith() was a method found with the compilers intellisense 
// endsWith() is a string method.
// If we declare message like the code below we won't see that intellisense anymore.
// You can avoid this with type assertions
let message2;
message2 = "Cow";
// let endsWithW = (<string>message2).endsWith("w"); // this syntax does not work with module files such as .mts or .mjs 
// or you can use
let message3;
message3 = "Dog";
let endsWithX = message3.endsWith('x');
// Custom Types
// Passing in a point object might be for useful
let drawPoint = (point) => {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
let drawPoint2 = (point) => {
    // ...
};
let getDistance = (pointA, pointB) => {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
// This interface says it should have the two properties x and y and a function called draw.
// To apply the cohesion principle we should use a class instead of an interface
// With a class we can actually have the functions implementation!
class Point {
    x;
    y;
    draw = () => {
        console.log(`x: ${this.x}, y: ${this.y}`);
    };
    getDistance = (another) => {
        console.log(`Point1: (${this.x}, ${this.y})`);
        console.log(`Point2: (${another.x}, ${another.y})`);
    };
}
// let myPoint: Point;
// let myOtherPoint: Point;
let myPoint = new Point;
let myOtherPoint = new Point;
myPoint.x = 1;
myPoint.y = 2;
myPoint.draw();
myOtherPoint.x = 4;
myOtherPoint.y = 5;
myOtherPoint.draw();
console.log('================');
myPoint.getDistance(myOtherPoint);
console.log('================');
myOtherPoint.getDistance(myPoint);
// Constructors
let point1 = new Point();
point1.x = 1;
point1.y = 2;
point1.draw();
// The code above can be too verbose.
// Adding a constructor to our class can eliminate this extra code.
class Point2 {
    x; // this will not be accessible outside the class
    y;
    // constructor(x: number, y: number) {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(`x: ${this.x}, y: ${this.y}`);
    }
}
let myPoint2 = new Point2();
myPoint2.draw();
// You can also make the constructors parameters optional.
// x?: number y?: number
let point3 = new Point2(1, 3);
// point3.x = 4; // Access modifiers can prevent class properties from changing.
point3.draw();
// In TypeScript we have public, private and protected.
// setting the x and y properties to private will only allow for the x and y initializations and not modification.
// For example, point3.x = 10 will not be allowed.
// Properties without a specific access modifier are public by default
// Same type of code but more consise!
// In order for to use module you can add the prefix of m to the file type!
// For example, index.ts => index.mts, index.js => index.mjs
import { Pokemon } from './Pokemon.mjs';
let pikachu = new Pokemon('Pikachu', 'electric', 5);
let riolu = new Pokemon('Riolu', 'fighting', 1, 'Hallbjorn');
pikachu.choose();
riolu.choose();
pikachu.nickname('Agnar');
riolu.nickname();
// let firstPokemon = riolu.getName(); can now be called like ...
let firstPokemon = riolu.name;
console.log(`The first pokemon in your party is ${firstPokemon}!`);
// riolu.lvl = 100; => Property 'lvl' is private and only accessible within class 'Pokemon'.
// instead we make a method within to modify the private property.
riolu.giveRareCandy = 1;
riolu.giveRareCandy = 2;
riolu.giveRareCandy = 96;
// riolu.giveRareCandy = 1; Will throw the max level Error message!
// let rioluLvl = riolu.getLvl(); Can now be called like ...
let rioluLvl = riolu.lvl;
console.log(rioluLvl);
