const NateClass = new nateClass(3);



// function boxInput() {
//     addEventListener('keyup', pract1Input);
//     console.log('pract1Input');
// }

const inputFunction = (ev) => { // the ev is the input from the input box. A parameter can be an event such as whatever the user inputs
    const textBoxValue = ev.srcElement.value;
    console.log(ev);// every time someone enters something in the input box the function records the event in the console log
    // const t = 'test';
    // t.inc
    const elemId = ev.srcElement.id; 
    console.log(elemId); // every time someone enters something in the input box the function prints out the id in the console log
}



const pract1Input = document.getElementById('pract1');
    pract1Input.addEventListener('keyup', inputFunction);


/* Below I make my own for loop. I'm struggling with why I need the "inp"*/


// const listOfInputs = ['pract1', 'pract2', 'pract3', 'pract4', 'pract5'];

// listOfInputs.forEach( 

//     (inp) => {
//         const anyInput = document.getElementById(inp);
//         anyInput.addEventListener('keyup', inputFunction);

// }
// )

const pageTimer = document.getElementById('timer');

// console.log('html timer val', pageTimer.innerHTML);


// setTimeout(
//     () => {
//         pageTimer.innerHTML = '29';
//     },
// 1000);


NateClass._intervalTimer(30, pageTimer);

// function displayTime() {
//     setTimeout( 
//         () => {
            
//             const newTimeLeft = pageTimer - 1;
//             console.log(newTimeLeft);
//         } ,
//         1000
//     );
// }

    