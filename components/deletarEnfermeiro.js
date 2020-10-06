import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function deletarEnfermeiro({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={{flex: 0.55, width: 0.1, height: 50, marginLeft:200, marginTop: -30,}}> 
        <Image source={require('../assets/comprimido2.png')}/>
      </View>

      <TouchableOpacity
      style={styles.iconeSidebar}
      onPress={ () => navigation.navigate('GerenciarEnfermeirosMenu')}
      >
        <Image 
        source={require('../assets/voltarIcone.png')}
        style={{width: 65, height:65}}
        />
      </TouchableOpacity>

      <View style={styles.boxInformacao}> 
        <Image 
        source={require('../assets/atencaoIcone.png')}
        style={{width: 65, height:65, marginLeft: -200,}}
        />
        <Text style={styles.titulo}>ATENÇÃO</Text>
        <Text style={styles.text}>Deseja mesmo deletar o enfermeiro selecionado ?</Text>
        <Text style={styles.text}>(Essa ação é permanente!)</Text>
      </View>
      <TouchableOpacity
        style={styles.botaoEsquerda}
        onPress={ () => navigation.navigate('ConfirmarEnfermeiroDeletado')}
        >
            <Text style={styles.textbotao}>Sim</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.botaoDireita}
        onPress={ () => navigation.navigate('GerenciarEnfermeirosMenu')}
        >
            <Text style={styles.textbotao}>Cancelar</Text>
        </TouchableOpacity>
    
      
      <View style={{flex: 0.3, flexDirection: 'row',width:405, height:0.1, marginTop: 35}}> 
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
    top:-140,
  },

  boxInformacao: {
    width: 375,
    height: 275,
    backgroundColor:'#4682B4',
    marginLeft: -10,
    top: -85,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },

  text: {
    fontSize: 25,
    color:'#F1FAEE',
    padding: 10,
    marginLeft: 15,
    top: -55,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 35,
    fontWeight:'bold',
    color:'#F1FAEE',
    padding: 10,
    marginLeft: 25,
    top: -65,
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
    width: 150,
    height: 55,
    backgroundColor:'#F1FAEE',
    left: -100,
    top: -40,
    borderRadius:3,
    alignItems:'center',
    justifyContent:'center',
  },

  botaoDireita:{
    width: 150,
    height: 55,
    backgroundColor:'#F1FAEE',
    right: -100,
    top: -94,
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