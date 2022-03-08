var a;
var b;
var c;
var d;
var e;
var f;
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
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
var backgroundColor = Color.Red;
var message = "Chicken";
var endsWithN = message.endsWith('n');
// endsWith() was a method found with the compilers intellisense 
// endsWith() is a string method.
// If we declare message like the code below we won't see that intellisense anymore.
// You can avoid this with type assertions
var message2;
message2 = "Cow";
var endsWithW = message2.endsWith("w");
// or you can use
var message3;
message3 = "Dog";
var endsWithX = message3.endsWith('x');
// Custom Types
// Passing in a point object might be for useful
var drawPoint = function (point) {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
var drawPoint2 = function (point) {
    // ...
};
// Interface use Pascal naming convention
