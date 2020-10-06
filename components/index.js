import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Index({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={{flex: 0.4, width: 0.1, height: 50, marginLeft:200}}>
        <Image source={require('../assets/comprimido2.png')}/>
      </View>

      <View style={{flex:0.25}}/>

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
});
