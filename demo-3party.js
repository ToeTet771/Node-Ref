//jshint esversion:6

//..........................................................................................................................................................

//!we can get third-party package by downloading from npm 
//!first we need to create npm package.json in dir by hpterminal (npm init)
//!we can check all downloaded package in package.json\dependencies
//!then,we need to install uuid to generate random ID (npm install uuid)
//!then, (npm install -D nodemon)
//!search package in npm.js web and install by hpterminal (npm install ... )

//..........................................................................................................................................................

//!getting superhero package from (installed npm)
// const spHero = require('superheroes');
// const spVillain = require('supervillains');


// var myHero = spHero.random();     //!get a random hero
// var myVillain =spVillain.random();
// console.log(myHero + ' can defeat ' + myVillain);

// const spHeroList = spHero.all;    //!get an array of all heros
// spHeroList.forEach((hero,i) => {
// if (hero == myHero){
//     console.log(i + ' ' +hero)
// }
// });

//............................................................................................................................................................

//!getting local package from (local dir)
// const Person = require('./person.js'); 

// const p1 = new Person;    //!creating new obj

// p1.routine();             //!call new obj function




