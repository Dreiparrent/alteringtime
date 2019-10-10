const buttonPage3 = document.getElementById('page3');

buttonPage3.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log('click');
    window.location.replace("../Page3/index.html"); 
    // firebase.test();
});

const firebaseClass = new FirebaseClass(3);

const displayTime = document.getElementById('timer');

console.log('html timer val', displayTime.innerHTML);


// setTimeout(
//     () => {
//         timerElem.innerHTML = '29';
//     },
// 1000);

console.log('html timer val2', displayTime.innerHTML);


firebaseClass.intervalingTimer('../Page3/index.html', 30, displayTime);