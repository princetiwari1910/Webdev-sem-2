// loops are the statements that we can use to control a flow of the program and to do some repetetive task.
var a="Hello world";
for(var i=0;i<10;i++){
    console.log(a);
}

// you have an array and you have swuare each element of an array.

var arr=[1,2,3,4,56,7];
for(var i=0;i<arr.length;i++){
arr[i]=arr[i]*arr[i];
}
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// a while loop evaluates the conditions inside the parenthesis {};
// syntax

// we have to print 1-10.
var i=1;
var n=10;
while(i<=n){
console.log(i);
i++;
}

// In Javascript .the for-in loop allows you to loop through the properties of an object.
// The statements of code found within the loop body will be executed once for each property of the object.

var colors={
    primary:'Blue',
    secondary:'Red',
    tertiary:'White'
}

for(var color in colors){
    console.log(color + '->'+colors[color]);
}


var scores=[1,2,3,4,5,6];
for(var score of scores){
    console.log(score);
}

var colors=[2,3,4,4,4,];
for ( var color of colors){
    console.log(color);
}
for(var[index,color] of colors.entries()){
    console.log(index+'->'+color);
}
var str='Vedam';
for(var c of str){
    console.log(c);
}