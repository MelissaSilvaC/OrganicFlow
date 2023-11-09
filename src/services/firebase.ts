import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {

  apiKey: "AIzaSyDkvxwnqstfzcujOPUghGrnDGotz6063B8",

  authDomain: "organicflow.firebaseapp.com",

  projectId: "organicflow",

  storageBucket: "organicflow.appspot.com",

  messagingSenderId: "377940291896",

  appId: "1:377940291896:web:ab2fc05f36b7f47f4911cd",

  measurementId: "G-TMM9JR8WRL"

};

//Inicializa a conexão da aplicação com o firebase

//const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);

//Obtém parâmetro de autenticação

//export const auth = getAuth(app);
//erro
export const recoverPassword = (email: string) {
  //return firebaseAuth.sendPasswordResetEmail(auth, email);
}