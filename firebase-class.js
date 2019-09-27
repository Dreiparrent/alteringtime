// we'll assume we import firebase on every page

// despite classes holding/keeping data
// every time you write "new <ClassName>" a new class is created. 
class FirebaseClass {

    // in classes you don't need qualifier

    classVar = 'classVar';
    constructor(x) {
        this.classVar = 'changed';
        console.log(x);
    }

    testMethod = (param1, param2 = 2) => {
        this.classVar = 'changed again';
        console.log(this.classVar);
    }

    setDatabaseTest(path, time, q1, q2, random) {
        firebase.database().ref('test/' + path).set({
            time: time,
            questions: [
                q1,
                q2
            ],
            random: random
        });
    }


    // TODO: why isnt this working tho
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    // constructor(logData) {
    //     console.log(logData);
    // }
    // firebase;
    // constructor() {
    //     if (!firebase) {
    //         document.body.innerHTML += '<script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js"></script>'
    //         firebase.initializeApp({
    //             apiKey: "AIzaSyB8ZJ4Q4_4fhTF6zuaY9KnPEATH4RpxYDk",
    //             authDomain: "altering-time.firebaseapp.com",
    //             databaseURL: "https://altering-time.firebaseio.com",
    //             projectId: "altering-time",
    //             storageBucket: "",
    //             messagingSenderId: "423933237396",
    //             appId: "1:423933237396:web:63f24d5529ba8c85a3bc81"
    //         });
    //     }
    //     this.firebase = firebase;
    // }

    // test() {
    //     console.log(this.firebase);
    // }
}