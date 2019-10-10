// we'll assume we import firebase on every page

// despite classes holding/keeping data
// every time you write "new <ClassName>" a new class is created. 
// class is a function with a constructor. Constructor automatically runs. 
const outterMost = 1;

// const randomObj = {
//     variable1: 'asdf',
//     var2: {
//         level3: 'inception'
//     }
// }

// console.log(randomObj.var2.level3);

class FirebaseClass {

    // in classes you don't need qualifier

    classVar = 'classVar';
    outterMost = 2;

    constructor(x) {
        this.classVar = 'changed';
        console.log(x);
        this.outterMost = outterMost;
    }

    testMethod = (param1, param2 = 2) => {
        this.classVar = 'changed again';
        console.log(this.classVar);
    }

    /**
     * @param {string} location the location of the page to sent to
     */
    countDown(location, time = 3000) {
        let timeLeft = 30;
        
        setTimeout(
            () => { // first parameter is the function run after the timer
                // change page
                window.location.replace(location); 
            },
            time); // second parameter is the time in milSec
    }


    /**
     * @param {number} _totalTimeLeft the total time (s) for the timer
     * @param {HTMLElement} _displayTime this is the exact html element like `<p>innerHTML</p>`
     */

    _intervalTimer(_totalTimeLeft, _displayTime) {
        setTimeout(
            () => {
                // _totalTimeLeft -= 1;
                const newTimeLeft = _totalTimeLeft - 1;

                // here is the functional code
                _displayTime.innerHTML = newTimeLeft.toString();

                if (newTimeLeft > 0) {
                    // here is the loop
                    console.log('newTimeLeft', newTimeLeft);
                    
                    this._intervalTimer(newTimeLeft, _displayTime);
                } else {
                    // this is unnecessary
                    console.log('done');
                }
            },
            1000
        );
    }

    /**
     * @param {string} location the location of the page to sent to
     * @param {number} totalTimeLeft the time (s) for the interval
     * @param {HTMLElement} displayTime this is the exact html element like `<p>innerHTML</p>`
     */
    intervalingTimer(location, totalTimeLeft, displayTime) {
        // here you can write something that runs once before the timer starts

        this._intervalTimer(totalTimeLeft, displayTime);
        // console.log('1', totalTimeLeft);
    }

    setDatabaseTest(path, paramTime, q1, q2, random) {
        firebase.database().ref('test/' + path).set({
            time: paramTime,
            questions: [
                q1,
                q2
            ],
            random: random
        });
    }
}