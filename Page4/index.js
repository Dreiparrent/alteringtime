
const now = new Date(Date.now());

const firebaseClass = new FirebaseClass(3); // always use "new" with classes this will create a unique version of the class
const NateClass = new nateClass(3);

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
}


const listOfInputs = ['pract1', 'pract2', 'pract3', 'pract4', 'pract5', 'pract6', 'pract7', 'pract8', 'pract9', 'pract10', 'pract11', 'pract12', 'pract13', 'pract14', 'pract15', 'pract16', 'pract17', 'pract18', 'pract19', 'pract20'];


listOfInputs.forEach(
    (inp) => {
        const anyInput = document.getElementById(inp);
        anyInput.addEventListener('keyup', inputFunction);// this runs the input function for each item on list
    }
);

// window.location.replace("./Page2/index.html"); 

const thirtySec = 2 * 1000;

firebaseClass.countDown('../index.html');//We put this countdown function in the firebaseClass so that we wouldn't have to add it to every page. We'll probably want to use it on more than one page.
//NateClass.timer('../index.html'); 


//The code below also works, but is a bit more redundant. 
/*
setTimeout(
    () => {window.location.replace('../index.html');
},
    5000);
*/



