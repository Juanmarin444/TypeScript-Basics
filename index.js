"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
function hello() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 'world'];
        });
    });
}
// let lucky: any = 23; // any tells the compiler to not type check it.
// let lucky; // is also infered as an any type.
// To annotate it with a type you can use:
var lucky;
// let lucky: number = 23; if you have an implicit type don't bother typing it with :number - its redundent
// lucky = '23';
lucky = 23;
var font;
// The interface above might be a little too restrictive so you can add a key with type of string and a value with type any
//
// interface Person {
//   first: string;
//   last: string;
//   [key: string]: any
// }
//
// So now a first and last name is required but you're allowed to add any additional properties.
var person = {
    first: "Jeff",
    last: "Delaney"
};
var person2 = {
    first: "Usain",
    last: "Bolt"
};
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
function pow(x, y) {
    return Math.pow(x, y).toString(); // This function's return value is set to type string now!
}
// Typing a function that has no return value can be set to type : void
function pow2(x, y) {
    console.log(Math.pow(x, y).toString);
}
////// How to strong type an array.
var arr = [];
arr.push(1);
// arr.push('23');
// arr.push(false);
// This will only cause error when tyring to push values that are not number type
// We can also set an array to type for a specific shape of objects with our Person interface above
var people = [];
var array = [];
////// TypeScript Generics
// Used for when you want to use a type internally inside of a class or function.
// A good example is an rxjs observable: A class that has an internal value that you can observe
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
// Now we are able to specify the internal type some later point in our code!
// For instance:
var x;
var y;
var z = new Observable(23); // This will implicitly have an internal number type
// Observable will be used more often than creating them
var foo = { name: 'tom', age: 30, nervous: false };
var bar = { name: 'rick', age: 40, nervous: false };
var baz = { name: 'harry', age: 50, nervous: true };
"Bad Code";
// These logs don't tell us the name of the variable
console.log(foo);
console.log(bar);
console.log(baz);
// Computed Property Names: This now shows the name of each obj
console.log({ foo: foo, bar: bar, baz: baz });
// Custom CSS styling in console log: only works in browser I think
console.log('%c I like chicken.', 'color: orange; font-weight: bold');
// Console.table(...)
console.table([foo, bar, baz]);
// Console.time(...)
console.time('looper');
var i = 0;
while (i < 1000000) {
    i++;
}
console.timeEnd('looper');
// Stack Trace Logs
var deleteMe = function () { return console.trace("Bye bye database!"); };
deleteMe();
deleteMe();
// Destructuring
var turtle = {
    name: 'Bob',
    legs: 4,
    shel: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
};
"Bad Code"; // Repeats animal too many times.
function feed(animal) {
    return "Feed ".concat(animal.name, " ").concat(animal.meal, " kilos of ").concat(animal.diet);
}
"Good Code"; // Destructuring in the argument of the function.
function feed2(_a) {
    var name = _a.name, meal = _a.meal, diet = _a.diet;
    return "Feed ".concat(name, " ").concat(meal, " kilos of ").concat(diet);
}
// OR
function feed3(animal) {
    var name = animal.name, meal = animal.meal, diet = animal.diet;
    return "Feed ".concat(name, " ").concat(meal, " kilos of ").concat(diet);
}
// Template Literals
var horse = {
    name: "Topher",
    size: "Large",
    skills: ["jousting", "racing"],
    age: 7
};
"Bad string code";
var bio = horse.name + " is a " + horse.size + " horse skilled in " + horse.skills.join(' & ');
"Good string code";
var name = horse.name, size = horse.size, skills = horse.skills;
var bio2 = "".concat(name, " is a ").concat(size, " horse skilled in ").concat(horse.skills.join(' & '));
// Building strings in a purely functional way
// Advanced Tag Example
function horseAge(str, age) {
    var ageStr = age > 5 ? 'old' : 'young';
    return "".concat(str[0]).concat(ageStr, " at ").concat(age, " years.");
}
// Instead of passing in arguments to this function
// Attach it to a template literal. It will parse the arguments into it.
var bio3 = horseAge(templateObject_1 || (templateObject_1 = __makeTemplateObject(["This horse is ", ""], ["This horse is ", ""])), horse.age);
console.log(bio3);
// Spread syntax - objects
var pikachu = { name: 'Pikachu' };
var stats = { hp: 40, attack: 60, defense: 45 };
// We want to assign the properties of the stat object to the pika object
"Bad Object Code"; // Ugly and verbose also its mutating the pika object
pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;
// OR
var lvl0 = Object.assign(pikachu, stats);
var lvl1 = Object.assign(pikachu, { hp: 40 });
"Good Object Code"; // Using the spread syntax.
var lvl2 = __assign(__assign({}, pikachu), stats);
var lvl3 = __assign(__assign({}, pikachu), { hp: 40 });
// Arrays - Spread syntax
var pokemon = ['Arbok', 'Raichu', 'Sandshrew'];
"Bad Array Code";
pokemon.push('Bulbasaur');
pokemon.push('Metapod');
pokemon.push('Weedle');
"Good Array Code";
// Push
pokemon = __spreadArray(__spreadArray([], pokemon, true), ['Bulbasaur', 'Metapod', 'Weedle'], false);
// Unshift
pokemon = __spreadArray(['Bulbasaur', 'Metapod', 'Weedle'], pokemon, true);
// OR
pokemon = __spreadArray(__spreadArray(['Bulbasaur'], pokemon, true), ['Metapod', 'Weedle',], false);
// Loops
var orders = [500, 30, 99, 15, 223];
"Bad Loop Code";
var total = 0;
var withTax = [];
var highValue = [];
for (i = 0; i < orders.length; i++) {
    // Reduce
    total += orders[i];
    // Map
    withTax.push(orders[i] * 1.1);
    // Filter
    if (orders[i] > 100) {
        highValue.push(orders[i]);
    }
}
"Good Loop Code";
// Reduce
var total2 = orders.reduce(function (accumulatedValue, currentValue) { return accumulatedValue + currentValue; });
// Map
var withTax2 = orders.map(function (orderValue) { return orderValue * 1.1; });
// Filter
var highValue2 = orders.filter(function (orderValue) { return orderValue > 100; });
// Async Await
var random = function () {
    return Promise.resolve(Math.random());
};
"Bad Promise Code";
var sumRandomAsyncNums = function () {
    var first;
    var second;
    var third;
    return random()
        .then(function (v) {
        first = v;
        return random();
    })
        .then(function (v) {
        second = v;
        return random();
    })
        .then(function (v) {
        third = v;
        return first + second + third;
    })
        .then(function (v) {
        console.log("result ".concat(v));
    });
};
"Good Promise Code";
var sumRandomAsyncNums2 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var first, second, third;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, random()];
            case 1:
                first = _a.sent();
                return [4 /*yield*/, random()];
            case 2:
                second = _a.sent();
                return [4 /*yield*/, random()];
            case 3:
                third = _a.sent();
                console.log("Result ".concat(first + second + third));
                return [2 /*return*/];
        }
    });
}); };
var templateObject_1;
