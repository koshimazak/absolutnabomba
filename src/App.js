import logo from './logo.svg';
import './App.css';

import AddUser from './Users/AddUser';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAnP0pV_MeRabybrG8Txh_8xOEypSgTfKA",
  authDomain: "absolutnabomba.firebaseapp.com",
  projectId: "absolutnabomba",
  storageBucket: "absolutnabomba.appspot.com",
  messagingSenderId: "394634051079",
  appId: "1:394634051079:web:f498e03cd6f82988b8f4a2"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const data = firestore.collection('users');

function App() {
  const sendData = () => {
    data.add({
      username: username,
      age: age,
      email: email,
      password: password
    });
  }

  return (
    <div>
      <AddUser />
    </div>
  );
}

export default App;
