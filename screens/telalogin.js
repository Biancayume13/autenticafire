import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function telalogin() {
  return (
    <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
    >
      <View style = {styles.inputContainer}>
      <TextInput
       placebolder="Email"
       // value= {email}
       // onChangeText={text => setEmail(text)}
       style={styles.input}
     />
      <TextInput
       placebolder="Senha"
       //value= {password}
       //onChangeText={text => setPassword(text)}
       style={styles.input}
       secureTextEntry
     />
   </View>

    <View style= {styles.buttonContainer}>
     <TouchableOpacity
       //onPress={identificadordeLogin}
       style={styles.button}
     >
       <Text style= {styles.buttonText}>Login</Text>
    </TouchableOpacity>

      <TouchableOpacity
         //onPress={identificadordeInscricao}
         style={[styles.button, styles.buttonOutline]}
        > 
        <Text style={styles.buttonOutlineText}></Text>
      </TouchableOpacity>
     </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignIntems: 'center',
  },
  InputContainer:{
   width: '80%'
  },
  Input: { 
  backgroundColor: 'lightblue',
  paddingHorizontal: 15,
  paddingVerdical: 10,
  borderRadius: 10,
  marginTop: 5,
  },
  buttonContainer: {
    windth: '60',
    justifyContent: 'center',
    alignIntems: 'center',
    marginTop: 40,
  },
  buton: {
    windth: '100',
    backgroundColor: 'lightorange',
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: 'ligtblue',
    borderColor: 'lightorange',
    borderWidth: 2,
    marginTop: 5,
  },
  buttonText: {
    Color: 'darkblue',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    Color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
})

 
