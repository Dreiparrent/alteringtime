const buttonPage3 = document.getElementById('page3');

buttonPage3.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log('click');
    window.location.replace("../Page3/index.html"); 
    // firebase.test();
});