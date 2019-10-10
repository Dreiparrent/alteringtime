// we will use firebase from the html
// later this will follow the format:
// const firebase = require('firebase');
// or 
// import * as firebase from 'firebase';

// console.log(firebase); // proof that firebase exists despit not being a variable


function ogJS(paramHere) {

}

 

const firebaseClass = new FirebaseClass(3); // always use "new" with classes this will create a unique version of the class

// const firebaseClass2 = new FirebaseClass();

// firebaseClass.testMethod('param1', 'param2');






const buttonPage2 = document.getElementById('page2');
const now = new Date(Date.now());

buttonPage2.addEventListener('click', (ev) => { //first parameter is the type of event "click" or "mouse down" The second paramater is the function we want to call when the event occurs
    ev.preventDefault();
    console.log('click');
    window.location.replace("./Page2/index.html"); 
    // firebase.test();
});

// firebaseClass.countDown('./Page2/index.html', 30000);





// ------------------------------------------------------------------------------------------------

// TODO: get the event listener working

const inputFunction = (ev) => {
    const textBoxValue = ev.srcElement.value;
    // console.log(ev);
    // const t = 'test';
    // t.inc
    const elemId = ev.srcElement.id;
    console.log(elemId);
    firebaseClass.setDatabaseTest(elemId, now.toISOString(), ev.srcElement.value, 5, {
        rando: 'randy',
        anotherArray: [1, 2, 3]
    });



    // setDatabaseTest(path, time, q1, q2, random);
    // const isInputt = elemId.includes('ttt');
    // console.log();
    // console.log(textBoxValue);
}


const listOfInputs = ['inputt', 'inputtt'];

// console.log(listOfInputs[0]);
// console.log('len', listOfInputs.length);
// console.log(listOfInputs[2]);

listOfInputs.forEach(
    (inp) => {
        const anyInput = document.getElementById(inp);
        anyInput.addEventListener('keyup', inputFunction);// this runs the inputfunction for each item on list
    }
);

for (
    let i = 0;
    i < listOfInputs.length;
    i++)
{
    console.log(
        listOfInputs[i]
    );
}


// const inputt = document.getElementById('inputt');
// const inputtt = document.getElementById('inputtt');
// inputt.addEventListener('keyup', inputFunction);
// inputtt.addEventListener('keyup', inputFunction);