# apitask
I'm using fetch api for post email and password field data to api for the login.
I create two components in component folder
1. login.js code<br />
```import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';

export default function login({message}) {
      const [email, setEmail]=useState();
      const [password, setPassword]=useState();
      const [loading, setloading]=useState(false);
      const [ResponseMessage, setResponseMessage]=useState();
      const [error, setErrorMessage]=useState();
      const lcps = () => {
        setloading(true);
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
        setloading(false);
    };
    if(ResponseMessage!=undefined){
        if(ResponseMessage.code==0){
            message("successfull");
        }
        else{
            message(null);
        }
    }
      
      
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.font}>Sign In</Text>
      <View style={styles.flex}>
        <TextInput value={email} onChangeText={setEmail} placeholder='Enter Email' style={styles.input}></TextInput>
        <TextInput value={password} onChangeText={setPassword} placeholder='Enter Password' style={styles.input}></TextInput>
        <TouchableOpacity onPress={lcps} style={styles.button}>
          <Text style={styles.logtext}>{loading==false?'Login':'Please Wait'}</Text>
        </TouchableOpacity>
      </View>
      {ResponseMessage===undefined?<Text></Text>: 
      <>
        <Text style={{color:'red', fontSize:20}}>{`${ResponseMessage && ResponseMessage.msg}`}</Text>
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
```

2. welcome.js code <br />
```import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';

export default function welcome() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.font}>Welcome back!</Text>
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
```
and this is app.js code <br />
```import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native';
import Welcome from './components/welcome';
import Login from './components/login';

export default function App() {
  const [handledata, sethandledata]=useState('');
  const handleDataFromChild = (data) => {
    sethandledata(data);
  };
  const renderComponent = () => {
      if (handledata === 'successfull') {
        return <Welcome />;
      } else {
        return <Login message={handleDataFromChild} />;
      }
    };
    return <View style={styles.container}>{renderComponent()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
});```

