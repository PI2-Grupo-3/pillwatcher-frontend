import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function adminMenu({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={{flex: 0.4, width: 0.1, height: 50, marginLeft:200, marginTop:-25,}}> 
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

      <TouchableOpacity
      style={styles.botaoEsquerda}
      onPress={ () => navigation.navigate('RecuperarSenha')}
      >
        <Image 
        source={require('../assets/icone.png')}
        style={{width: 70, height:70}}
        />
        <Text style={styles.textbotao}>Cadastrar Enfermeiro</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.botaoDireita}
      onPress={ () => navigation.navigate('GerenciarEnfermeirosMenu')}
      >
        <Image 
        source={require('../assets/icone.png')}
        style={{width: 70, height:70}}/>
        <Text style={styles.textbotao}>Gerenciar Enfermeiro</Text>
      </TouchableOpacity>
      
      <View style={{flex: 0.35, flexDirection: 'row',width:405, height:0.1, marginTop:225,}}> 
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
    top:-70,
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
  botaoEsquerda:{
    width: 120,
    height: 120,
    backgroundColor:'#4682B4',
    marginLeft: -150,
    top: -5,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  botaoDireita:{
    width: 120,
    height: 120,
    backgroundColor:'#4682B4',
    marginRight:-150,
    top: -125,
    borderRadius:10,
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
    color:'#F1FAEE',
    padding:2,
    textAlign:'center'
  }
});