import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function EnviarEmail({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={{flex: 0.4, width: 0.1, height: 55, marginLeft:200}}> 
        <Image source={require('../assets/comprimido2.png')}/>
      </View>

      <Text style={styles.text}>Email Enviado!</Text>

      <Text style={styles.subText}>Enviamos um link para recuperação de senha no e-mail cadastrado. </Text>

      <TouchableOpacity
      style={styles.botao}
      onPress={ () => navigation.navigate('Login')}
      >
        <Text style={styles.textbotao}>Retornar a Tela de Login</Text>
      </TouchableOpacity>

      <View style={{flex:0.35}}/>
      
      <View style={{flex: 0.35, flexDirection: 'row',width:405, height:0.1}}> 
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
  subText:{
    fontSize:20,
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
    backgroundColor:'#F1FAEE',
    marginTop:10,
    borderRadius:3,
    alignItems:'center',
    justifyContent:'center',
  },
  textbotao:{
    fontSize:15,
    fontWeight:'bold',
    color:'#1D3557',
    padding:2,
  }
});
