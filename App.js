import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image,  } from 'react-native';
import Home from './components/home';
import About  from './components/about';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyStacks from './route/stack';
import MyTabs from './route/Tab';


// const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <MyStacks /> */}
        <MyTabs />
      </NavigationContainer>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'rgb(30, 30, 30 )',
      // alignItems: 'center',
      // justifyContent: 'center',
      padding: 20,
  },
  self: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 20,
      border: 2,
      borderColor: 'white',
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius:10,
  },
  round1: {
      width:50,
      height: 50,
      margin: 10,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    },
    round2: {
      width:50,
      height: 50,
      margin: 10,
      borderRadius: 25 ,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
    },
    round3: {
      width:50,
      height: 50,
      margin: 10,
      borderRadius: 25 ,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightskyblue',
    },
    round4: {
      width:50,
      height: 50,
      margin: 10,
      borderRadius: 25 ,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightyellow',
    },
    head: {
      color:'white',
      fontWeight: 'bold',
    },
    text: {
      color: 'white',
    }
})