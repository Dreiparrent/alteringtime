export class FirebaseClass {
    firebase;
    constructor() {
        if (!firebase) {
            document.body.innerHTML += '<script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js"></script>'
            firebase.initializeApp({
                apiKey: "AIzaSyB8ZJ4Q4_4fhTF6zuaY9KnPEATH4RpxYDk",
                authDomain: "altering-time.firebaseapp.com",
                databaseURL: "https://altering-time.firebaseio.com",
                projectId: "altering-time",
                storageBucket: "",
                messagingSenderId: "423933237396",
                appId: "1:423933237396:web:63f24d5529ba8c85a3bc81"
            });
        }
        this.firebase = firebase;
    }

    test() {
        console.log(this.firebase);
    }
}