class nateClass {

    constructor(x) {
        console.log(x);
    }

    timer(location) {

        setTimeout(
            () => {window.location.replace(location);
        },
            5000);
    }

    _intervalTimer(_totalTimeLeft, _displayTime) {
        setTimeout(
            () => {
                // _totalTimeLeft -= 1;
                const newTimeLeft = _totalTimeLeft - 1;

                // here is the functional code
                _displayTime.innerHTML = newTimeLeft;

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

    // intervalingTimer(location, totalTimeLeft, pageTimer) {
    //     // here you can write something that runs once before the timer starts

    //     this._intervalTimer(totalTimeLeft, pageTimer);
    //     console.log('1', totalTimeLeft);
    // }
}