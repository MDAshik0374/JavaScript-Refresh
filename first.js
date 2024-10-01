/*
var lang = "Bangla";

function learn(arg) {
	
	lang = arg;

	console.log(`I learn ${arg}`);
}

learn("JavaScript");

console.log(`I learn ${lang}`)

*/
/* 2nd Sceneario*/

/*
var lang = "Bangla";

function learn(arg) {
	
	var lang = arg;

	console.log(`I learn ${arg}`);
}

learn("JavaScript");

console.log(`I learn ${lang}`)

*/

/* 3rd Scene */

// var lang = "Bangla";

// function learn(arg) {
	
// 	lang = arg;

// 	if(true){
// 		let a = 5;
// 		console.log(a);
// 	}
// 	console.log(a);

// 	console.log(`I learn ${arg}`);
// }

// learn("JavaScript");

// console.log(`I learn ${lang}`)


// 4th Scene

// function hello(){
// 	console.log("Helo ");

// 	// return undefined;
// 	// defaultly return undefined
// }
//Its also a function statement
// let msg = hello();

// console.log(msg);


//5th 

//Function Expression

// const hello = function(){
// 	console.log("Hello world");
// }

//console.log(hello());

//Named Function Expression 

// const hello = function hello(){
//     console.log("Hello world");	
// }

//6th 

// Arrow Function

// const hello = ()=>{
// 	console.log("Hello world");
// }

// alternative

//const hello =()=> console.log("Hello world");
//hello();

//another arrow function

// const sum = (a,b)=> a+b;

// console.log(sum(3,5));

// arrow function with return 


// const obj = ()=>{
// 	return {
// 		a : 5,
// 		b : 9,
// 	};
// }

// console.log(obj());

//7th

// Anonymus function

//Anonymus means functon without a name

// function hello (){
// 	return ()=> console.log("jello world");
// }

// hello()();


const fruits = ["Banana","Orange","Lemon","Apple","Mango"];
console.log(fruits)
//const result = fruits.splice(2,2,"PineApple","Guava","Jack fruit");
//const result = fruits.concat("Apple Woood");
//const result = fruits.concat(["Apple wood"," Bangi"]);
//const result = fruits.push("Jack Fruit","Amla");
// const result = fruits.map((f)=>{
//    if(f === "Apple"){
//    	return f;
//    }
//    else{
//    	return "not found";
//    }
// })
// Simillar operation by for

const res = [];

for( let i = 0; i < fruits.length; i++){
	if( fruits[i] =="Apple"){
		res.push("Apple");
	}
	else{
		res.push("not found");
	}
}
console.log(res);
//console.log(result);
console.log(fruits);