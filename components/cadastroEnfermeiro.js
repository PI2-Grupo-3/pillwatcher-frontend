import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function CadastroEnfermeiro({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>CadastroEnfermeiro</Text>

      <TextInput
        placeholder="coren"
        style={styles.input}
      />

      <TextInput
        placeholder="estado"
        style={styles.input}
      />

      <TextInput
        placeholder="nome"
        style={styles.input}
      />

      <TextInput
        placeholder="cpf"
        style={styles.input}
      />

      <TextInput
        placeholder="telefone"
        style={styles.input}
      />

      <TextInput
        placeholder="e-mail"
        style={styles.input}
      />

      <TextInput
        placeholder="foto"
        style={styles.input}
      />

      <TextInput
        placeholder="senha"
        style={styles.input}
      />

      <TextInput
        placeholder="confirme sua senha"
        style={styles.input}
      />

      <TouchableOpacity
      style={styles.botao}
      onPress={ () => navigation.navigate('Login')}
      >
        <Text style={styles.textbotao}>Entrar</Text>
      </TouchableOpacity>

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
    padding:40,
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
    backgroundColor:'#F1FAEE',
    marginTop:10,
    borderRadius:3,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
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
    padding:2,
  }
});
