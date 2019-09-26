// we will use firebase from the html
// later this will follow the format:
// const firebase = require('firebase');
// or 
// import * as firebase from 'firebase';

console.log(firebase); // proof that firebase exists despit not being a variable



const database = firebase.database;

const buttonPage2 = document.getElementById('page2');
console.log(buttonPage2);

const firebase = new FirebaseClass();
firebase.test();

// const replacePage = () => {
//     document.body
// };

buttonPage2.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log('click');
    window.location.replace('./page2/index.html');
    firebase.test();
});

// const mustNotChange = 't';
// let thisCanChange = 't';

// mustNotChange = 'tt';
// thisCanChange = 'tt';