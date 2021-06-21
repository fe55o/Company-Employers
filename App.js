import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home"
import Profile from "./screens/Profile"
import Contants from 'expo-constants'
import CreateEmployee from "./screens/createEmployee"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const myoptions = {
  title:"my sweet Home",
  headerTintColor:'white',
  headerStyle:{
    backgroundColor:"#6bc1ff"
  }}

function App() {
  return (
    <View style = {styles.container}>
    <Stack.Navigator >
      <Stack.Screen name="Home" 
      component={Home}
      options={myoptions} />

      <Stack.Screen name="Create" 
      component={CreateEmployee}
      options={{...myoptions,title:"Create Employee"}}
       />
      <Stack.Screen name="Profile" 
      component={Profile}
      options={{...myoptions,title:"Profile"}} />
    </Stack.Navigator>

        {/* <Home/> */}
        {/* <CreateEmployee/> */}
        {/* <Profile/> */}
        </View>
  );
}
export default ()=>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    // marginTop: Contants.statusBarHeight,
     flex: 1,
     backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

