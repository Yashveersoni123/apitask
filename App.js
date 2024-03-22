import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';

export default function App() {
      const [email, setEmail]=useState();
      const [password, setPassword]=useState();
      const [ResponseMessage, setResponseMessage]=useState();
      const [error, setErrorMessage]=useState();
      const login = () => {
        const form = new FormData();
        form.append("cmd", "login");
        form.append("email", email);
        form.append("password", password);
    
        const options = {
          method: 'POST',
          body: form,
        };
    
        fetch('https://cloud.naviaenergy.com/api/mobile', options)
          .then(response => response.json())
          .then(response => setResponseMessage(response))
          .catch(err => setErrorMessage(err));
      };
      
      
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.font}>Welcome back!</Text>
      <View style={styles.flex}>
        <TextInput value={email} onChangeText={setEmail} placeholder='Enter Email' style={styles.input}></TextInput>
        <TextInput value={password} onChangeText={setPassword} placeholder='Enter Password' style={styles.input}></TextInput>
        <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.logtext}>Login</Text>
        </TouchableOpacity>
      </View>
      {ResponseMessage===undefined?<Text></Text>: 
      <>
        <Text>{`CODE: ${ResponseMessage && ResponseMessage.code}`}</Text>
        <Text>{`SID: ${ResponseMessage && ResponseMessage.sid}`}</Text>
        <Text>{`MSG: ${ResponseMessage && ResponseMessage.msg}`}</Text>
      </>
      }
      {error && <Text>Error: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
  input: {
    height: 40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  flex:{
    flex:1
  },
  font:{
    fontSize:40,
    fontWeight:'900'
  },
  button:{
    backgroundColor:'black',
    textAlign:'center',
    height:50,
    borderRadius:10
  },
  logtext:{
    fontSize:20, 
    color:'white', 
    textAlign:'center', 
    height:'100%', 
    textAlignVertical:'center'
  }
});
