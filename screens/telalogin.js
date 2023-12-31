import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView,  TouchableOpacity  } from 'react-native';
import React from 'react'

const TelaLogin = () => {
  return (
    <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
    >
      <View style ={styles.inputContainer}>
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
        <Text style={styles.buttonOutlineText}>Registro</Text>
      </TouchableOpacity>
     </View>
    </KeyboardAvoidingView>
  )
}

export default  TelaLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: 'lightblue',
    width: '100%',
    padding: 15,
    borderColor: '#4071b0',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'lightgray',
    borderWidth: 2,
  },
  buttonText: {
    color: 'darkblue',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
})

 
