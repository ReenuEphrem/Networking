import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EmployeeAxios from './src/Axios/EmployeeAxios';
import Employee from './src/Fetch/Employee';
import QNBank from './src/QNBank';
import Resources from './src/Resources';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
   
    <NavigationContainer>
      {<Tab.Navigator screenOptions={{
      tabBarLabelStyle:{fontSize:10},
      tabBarItemStyle :{width:90},
      tabBarStyle:{backgroundColor:'#ffffff'}
    }}
    >
      <Tab.Screen name='Fetch' options={{
        tabBarActiveTintColor :'red',
        tabBarInactiveTintColor :'gray'}}
         component={Employee}
        ></Tab.Screen>
         <Tab.Screen name='Axios' options={{
        tabBarActiveTintColor :'red',
        tabBarInactiveTintColor :'gray'}}
         component={EmployeeAxios}></Tab.Screen>
         <Tab.Screen name='Resources' options={{
          tabBarActiveTintColor :'red',
          tabBarInactiveTintColor :'gray'}}
           component={Resources}
        ></Tab.Screen>
        <Tab.Screen name='QN Bank' options={{
          tabBarActiveTintColor :'red',
          tabBarInactiveTintColor :'gray'}}
           component={QNBank}
        ></Tab.Screen>
    </Tab.Navigator> }
    
    </NavigationContainer>
  );
}