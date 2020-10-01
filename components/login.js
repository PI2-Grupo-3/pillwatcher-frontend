import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      <TextInput
        placeholder="Digite seu cpf"
        style={styles.input}
      />

      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry={true}
        style={styles.input}
      />
      <TouchableOpacity
      style={styles.botao}
      onPress={ () => {this.clicou()}}
      >
        <Text style={styles.textbotao}>Entrar</Text>
      </TouchableOpacity>

      <Text
      style={styles.textsenha}
      onPress={ () => {this.clicou()}}
      >
      Esqueci minha senha
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3557',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:30,
    fontWeight:'bold',
    color:'#FFFFFF',
    padding:50,
  },
  input: {
    marginTop:10,
    padding:10,
    width:300,
    backgroundColor:'#fff',
    fontSize:16,
    borderRadius:3,
  },
  botao: {
    width:300,
    height:42,
    backgroundColor:'#FFFFFF',
    marginTop:10,
    borderRadius:3,
    alignItems:'center',
    justifyContent:'center',
  },
  textsenha: {
    fontSize:15,
    fontWeight:'bold',
    color:'#FFFFFF',
    padding:30,
  },
});
