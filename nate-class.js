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
}