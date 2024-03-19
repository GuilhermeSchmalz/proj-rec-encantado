import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text } from 'react-native';



import ImageViewer from '../../../componentes/imageviewer';
import Button from '../../../componentes/botao';
import LoginScreen from '../../../componentes/loginScreen';
import LogoViewer from '../../../componentes/logoviewer';

const ImportImage = require('../../../assets/images/recife3.0.png');
const ImportLogo = require('../../../assets/images/logo2.0.png')

export default function entradalogin() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={ImportImage} style={styles.Image}/> */}
        <ImageViewer imagesourceview={ImportImage}/>
      </View>
      <View style={styles.mainContainer}>
        {/* <Button label={'ENTRAR'}> </Button> */}
        <LoginScreen/>
        <LogoViewer logosourceview={ImportLogo}/>
      </View>
      
      <StatusBar style='auto'/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e', 
    alignItems: 'center',
    //justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    //paddingTop: 1
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 475,
    //flex: 1/3
  }
 //
});
