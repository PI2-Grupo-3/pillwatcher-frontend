import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function gerenciarEnfermeirosMenu({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={{flex: 0.4, width: 0.1, height: 50, marginLeft:200, marginTop: -30,}}> 
        <Image source={require('../assets/comprimido2.png')}/>
      </View>

      <Text style={styles.titulo}>Enfermeiros Cadastrados</Text>

      <TouchableOpacity
      style={styles.iconeSidebar}
      onPress={ () => navigation.navigate('AdminMenu')}
      >
        <Image 
        source={require('../assets/voltarIcone.png')}
        style={{width: 65, height:65}}
        />
      </TouchableOpacity>

      <View style={styles.boxInformacao1}> 
        <Text style={styles.text}>João da Silva</Text>
        <Text style={styles.text}>124.856.356-77</Text>
        <TouchableOpacity
        style={styles.botaoEsquerda}
        onPress={ () => navigation.navigate('AlterarDadosEnfermeiro')}
        >
            <Image 
            source={require('../assets/alterarIcone.png')}
            style={{width: 60, height:60}}/>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.botaoDireita}
        onPress={ () => navigation.navigate('DeletarEnfermeiro')}
        >
            <Image 
            source={require('../assets/deletarIcone.png')}
            style={{width: 60, height:60}}/>
        </TouchableOpacity>
      </View>

      <View style={styles.boxInformacao2}> 
        <Text style={styles.text}>João da Silva</Text>
        <Text style={styles.text}>124.856.356-77</Text>
        <TouchableOpacity
        style={styles.botaoEsquerda}
        onPress={ () => navigation.navigate('AlterarDadosEnfermeiro')}
        >
            <Image 
            source={require('../assets/alterarIcone.png')}
            style={{width: 60, height:60}}/>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.botaoDireita}
        onPress={ () => navigation.navigate('DeletarEnfermeiro')}
        >
            <Image 
            source={require('../assets/deletarIcone.png')}
            style={{width: 60, height:60}}/>
        </TouchableOpacity>
      </View>

      <View style={styles.boxInformacao3}> 
        <Text style={styles.text}>João da Silva</Text>
        <Text style={styles.text}>124.856.356-77</Text>
        <TouchableOpacity
        style={styles.botaoEsquerda}
        onPress={ () => navigation.navigate('AlterarDadosEnfermeiro')}
        >
            <Image 
            source={require('../assets/alterarIcone.png')}
            style={{width: 60, height:60}}/>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.botaoDireita}
        onPress={ () => navigation.navigate('DeletarEnfermeiro')}
        >
            <Image 
            source={require('../assets/deletarIcone.png')}
            style={{width: 60, height:60}}/>
        </TouchableOpacity>
      </View>

    
      
      <View style={{flex: 0.35, flexDirection: 'row',width:405, height:0.1, marginTop: 35}}> 
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
    top:-130,
  },
  boxInformacao1: {
    width: 375,
    height: 120,
    backgroundColor:'#4682B4',
    marginLeft: -10,
    top: - 40,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  boxInformacao2: {
    width: 375,
    height: 120,
    backgroundColor:'#4682B4',
    marginLeft: -10,
    top: -10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  boxInformacao3: {
    width: 375,
    height: 120,
    backgroundColor:'#4682B4',
    marginLeft: -10,
    top: 20,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
  text: {
    fontSize: 20,
    fontWeight:'bold',
    color:'#F1FAEE',
    padding: 10,
    marginLeft: -200,
    top: 55,
  },
  titulo: {
    fontSize: 30,
    fontWeight:'bold',
    color:'#F1FAEE',
    padding: 10,
    marginLeft: -10,
    top: 5,
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
    marginLeft: 150,
    top: -20,
  },
  botaoDireita:{
    marginRight: -300,
    top: -80,
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