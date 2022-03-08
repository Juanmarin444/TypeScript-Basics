"use strict";
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
