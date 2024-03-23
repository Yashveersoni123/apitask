import { StatusBar } from 'expo-status-bar';
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
    return renderComponent()
}


