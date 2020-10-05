import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function confirmarEnfermeiroDeletado({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={{flex: 0.65, width: 0.1, height: 50, marginLeft:200, marginTop: -30,}}> 
        <Image source={require('../assets/comprimido2.png')}/>
      </View>

      <TouchableOpacity
      style={styles.iconeSidebar}
      onPress={ () => navigation.navigate('RecuperarSenha')}
      >
        <Image 
        source={require('../assets/sidebarIcone.png')}
        style={{width: 65, height:65}}
        />
      </TouchableOpacity>

      <View style={styles.boxInformacao}> 
        <Text style={styles.text}>Enfermeiro deletado com sucesso!</Text>
      </View>
      
      <TouchableOpacity
      style={styles.botao}
      onPress={ () => navigation.navigate('GerenciarEnfermeirosMenu')}
      >
        <Text style={styles.textbotao}>Voltar</Text>
      </TouchableOpacity>

      
      <View style={{flex: 0.2, flexDirection: 'row',width:405, height:0.1, marginTop: 35}}> 
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

  iconeSidebar: {
    marginRight: 330,
    top:-200,
  },

  boxInformacao: {
    width: 375,
    height: 275,
    backgroundColor:'#4682B4',
    marginLeft: -10,
    top: -125,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },

  text: {
    fontSize: 35,
    color:'#F1FAEE',
    padding: 10,
    marginLeft: 15,
    top: -25,
    textAlign: 'center',
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
    width: 175,
    height: 42,
    backgroundColor:'#F1FAEE',
    top: -40,
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
    color:'#000000',
    padding:2,
    textAlign:'center'
  }
});