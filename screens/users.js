import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Users() {
    const auth = firebase.auth();
    const firestore = firebase.firestore()

    const [users] = useCollectionData(data);

    return(
        <View style={styles.container}>
          {users && users.map(x => <Text style={styles.text}><br />nickname={x.nickname}<br />age={x.age}<br />email={x.email}<br />password={x.password}</Text>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
    },
    input: {
      color: 'white',
      borderWidth: 1,
      borderColor: 'white',
    }
  });