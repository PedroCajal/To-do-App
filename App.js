import React from "react";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AddToDo from "./Screens/AddToDo";


const Stack = createStackNavigator();

export default function App()
{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{headerShown:false}}/>
        <Stack.Screen
        name="Add"
        component={AddToDo}
        options={{presentation:'modal', headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};