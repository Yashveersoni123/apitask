import { StatusBar } from 'expo-status-bar';
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
