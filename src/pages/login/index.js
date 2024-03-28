import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, ImageBackground } from 'react-native';


import LoginScreen from '../../../componentes/loginScreen';
import LogoViewer from '../../../componentes/logoviewer';

const ImportImage = require('../../../assets/images/recife3.0.png');
const ImportLogo = require('../../../assets/images/logo2.0.png')

export default function Entradalogin() {
  return (
    <View style={styles.container}>
      <ImageBackground source={ImportImage} style={styles.containerBackground}>
        {/* <View style={styles.imageContainer}>
          <ImageViewer imagesourceview={ImportImage}/>
        </View> */}
        
        <View style={styles.mainContainer}>
          {/* <Button label={'ENTRAR'}> </Button> */}
          <LoginScreen/>
          <View style={styles.espacovazio}></View>
          <LogoViewer logosourceview={ImportLogo} style={styles.logoContainer}/>
        </View>
        
        <StatusBar style='auto'/>
        </ImageBackground>
        
    </View>
     
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:'center'
  },
  // imageContainer: {
  //   flex: 1,

  //   //paddingTop: 1
  // },
  mainContainer: {
    paddingTop:'20%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1
  },
  containerBackground:{
    flex: 1,
    width:'100%',
    // resizeMode: "cover",
    // justifyContent: "center",
  },
  espacovazio:{
    
  },
  logoContainer:{
    flex:1,
    
  }
 //
});
