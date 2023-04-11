import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import Navigator from './routes/mainStack'


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

export default function App() {
  const [nickname, setNickname] = useState('nickname');
  const [age, setAge] = useState('age');
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');

  const data = firestore.collection('users');

  const sendData = () => {
    data.add({
      nickname: nickname,
      age: age,
      email: email,
      password: password
    });
  }

  return (
    <Navigator />
  );
}