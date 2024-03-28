import React from "react";
import {View, Text, StyleSheet, Pressable, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

import Button from '../../../componentes/botao';

import LogoViewer from "../../../componentes/logoviewer";
import BandeiraViewer from "../../../componentes/bandeiraviewer";


const ImportLogo = require('../../../assets/images/logo2.0.png')
const ImportBandeira= require('../../../assets/images/bandeirarecife.png')

export default function Bemvindo({navigation}) {
    navigation.setOptions({tabBarVisible: false});
const navigationn= useNavigation();

    return(
        <View style={styles.container}>
         <ImageBackground source={require('../../../assets/images/recife.jpg')} style={styles.containerBackground}>

            <View style={styles.containerLogo}>
                     <LogoViewer logosourceview={ImportLogo} style={styles.logoimage}/>
                     <BandeiraViewer imagesourceview={ImportBandeira}/>
                
            </View>

            <Animatable.View delay={700} animation='fadeInUp'  style={styles.containerForm}>
                <Text style={styles.title}>Pronto para iniciar novas aventuras?</Text>
                <Text style={styles.text}>Faça seu Login para Começar!</Text>
                <Pressable 
                onPress={() => navigationn.navigate('LogIn')}
                style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </Pressable>
            </Animatable.View>
         </ImageBackground>
        </View>
    )}

const styles = StyleSheet.create({
    container:{
            flex:1,
            // justifyContent:"center",
            
    },
    containerLogo:{
        flex:2,
        backgroundColor:'rgba(255, 100, 5,0.5)',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFF',
        paddingStart:'5%',
        paddingEnd:'5%',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,


    },
    title:{
        
        fontSize:24,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:10
    },
    text:{
        color:'#a1a1a1',
    },
    button:{
        position:'absolute',
        backgroundColor: 'rgb(255, 100, 5)',
        borderRadius:50,
        paddingVertical:8,
        width:'60%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    },
    teste: {
       flexDirection:'column'

    },
    containerBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }

})