// we will use firebase from the html
// later this will follow the format:
// const firebase = require('firebase');
// or 
// import * as firebase from 'firebase';

// console.log(firebase); // proof that firebase exists despit not being a variable


function ogJS(paramHere) {

}

const es6Fn = (paramHere) => {

}

const firebaseClass = new FirebaseClass(3); // always use "new" with classes this will create a unique version of the class

const firebaseClass2 = new FirebaseClass();

firebaseClass.testMethod('param1', 'param2');


// firebaseClass.setDatabaseTest('path', now.toISOString(), 'quest', 5, {
//     rando: 'randy',
//     anotherArray: [1, 2, 3]
// });




const buttonPage2 = document.getElementById('page2');
const now = new Date(Date.now());

buttonPage2.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log('click');
    window.location.replace("http://google.com"); //./Page2/index.html
    firebase.test();
});

const fakeTextBox = document.getElementById('inputt');

// TODO: get the event listener working
fakeTextBox.addEventListener('change', (ev) => {
    console.log(ev);
});

