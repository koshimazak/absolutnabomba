import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Main() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Nickname:</Text>
        <TextInput style={styles.input} onChangeText={(val) => setNickname(val)}></TextInput>

      <Text style={styles.text}>Age:</Text>
      <TextInput 
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(val) => setAge(val)} />

      <Text style={styles.text}>Email:</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={(val) => setEmail(val)} />

      <Text style={styles.text}>Password:</Text>
      <TextInput 
        style={styles.input} 
        onChangeText={(val) => setPassword(val)} />

      <br />
      <Button
        title="Send"
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 3,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => {sendData(nickname,age,email,password)}} />

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