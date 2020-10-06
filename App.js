import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Index from './components/index';
import Login from './components/login';
import RecuperarSenha from './components/recuperarSenha';
import EnviarEmail from './components/enviarEmail';
import AdminMenu from './components/adminMenu';
import GerenciarEnfermeirosMenu from './components/gerenciarEnfermeirosMenu';
import AlterarDadosEnfermeiro from './components/alterarDadosEnfermeiro';
import DeletarEnfermeiro from './components/deletarEnfermeiro';
import ConfirmarEnfermeiroDeletado from './components/confirmarEnfermeiroDeletado';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Index' component={Index}/>
        <Stack.Screen name='RecuperarSenha' component={RecuperarSenha}/>
        <Stack.Screen name='EnviarEmail' component={EnviarEmail}/>
        <Stack.Screen name='AdminMenu' component={AdminMenu}/>
        <Stack.Screen name='GerenciarEnfermeirosMenu' component={GerenciarEnfermeirosMenu}/>
        <Stack.Screen name='AlterarDadosEnfermeiro' component={AlterarDadosEnfermeiro}/>
        <Stack.Screen name='DeletarEnfermeiro' component={DeletarEnfermeiro}/>
        <Stack.Screen name='ConfirmarEnfermeiroDeletado' component={ConfirmarEnfermeiroDeletado}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
