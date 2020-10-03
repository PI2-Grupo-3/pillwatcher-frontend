import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      
      <View style={{flex: 0.4, width: 0.1, height: 50, marginLeft:200}}> 
        <Image source={require('../assets/comprimido2.png')}/>
      </View>

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
      <View style={{flex:0.25}}/>
      
      <View style={{flex: 0.24, flexDirection: 'row',width:405, height:0.1}}> 
        <Image source={require('../assets/comprimido1.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3557',
    alignItems: 'center',
    justifyContent: 'center'
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
  textbotao:{
    fontSize:15,
    fontWeight:'bold',
    color:'#1D3557',
    marginTop:5
  }
});
