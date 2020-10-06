import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function alterarDadosEnfermeiro({ navigation }) {
  return (
    <View style={styles.container}>
      
      <View style={{flex: 1, width: 0.1, height: 50, marginLeft:200}}> 
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

      <Text style={styles.text}>Alterar Dados do Enfermeiro</Text>

      <TextInput
        value = "coren"
        style={styles.input}
      />

      <TextInput
        value = "DF"
        style={styles.input}
      />

      <TextInput
        value="João Da Silva"
        style={styles.input}
      />

      <TextInput
        value="124.856.356-77"
        style={styles.input}
      />

      <TextInput
        value="(61) 99927-8237"
        style={styles.input}
      />

      <TextInput
        value="joaodasilva@gmail.com"
        style={styles.input}
      />

      <TextInput
        value="foto"
        style={styles.input}
      />

    <TextInput
        value="*********"
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity
      style={styles.botao}
      onPress={ () => navigation.navigate('GerenciarEnfermeirosMenu')}
      >
        <Text style={styles.textbotao}>Salvar alterações</Text>
      </TouchableOpacity>

      
      <View style={{width:405, height:0.1, bottom: 90,}}> 
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
    left: -165,
    top: -30,
  },

  text: {
    fontSize: 28,
    fontWeight:'bold',
    color:'#FFFFFF',
    padding: 35,
    top: -45,
  },

  input: {
    marginTop:10,
    top: -75,
    padding:10,
    width:300,
    backgroundColor:'#fff',
    fontSize:16,
    borderRadius:3,
    fontWeight:'bold',
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
    color:'#1D3557',
    padding:2,
  }
});