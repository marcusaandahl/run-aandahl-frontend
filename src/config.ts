import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

class Config {
    firebaseApp: FirebaseApp
    
    constructor () {
        this.firebaseApp = Config.initFirebaseApp()
    }
    static initFirebaseApp(): FirebaseApp {
        const config = {
            apiKey: "AIzaSyBFbo8wun9dGc_KJd46jo85J5T94BbPLWI",
            authDomain: "portfolio-336519.firebaseapp.com",
            databaseURL: "https://portfolio-336519-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "portfolio-336519",
            storageBucket: "portfolio-336519.appspot.com",
            messagingSenderId: "930179796313",
            appId: "1:930179796313:web:20e1c34951a8ce120f9048",
            measurementId: "G-J9KVKQX2QR"
          };
        const app = initializeApp(config);
        const analytics = getAnalytics(app);

        return app;
    }
}

export default Config;