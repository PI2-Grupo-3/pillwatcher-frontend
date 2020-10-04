import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 

import Login from './components/login';
import RecuperarSenha from './components/recuperarSenha';
import EnviarEmail from './components/enviarEmail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='RecuperarSenha' component={RecuperarSenha}/>
        <Stack.Screen name='EnviarEmail' component={EnviarEmail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

