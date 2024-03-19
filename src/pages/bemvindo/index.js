import React from "react";
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';

import Button from '../../../componentes/botao';

import LogoViewer from "../../../componentes/logoviewer";


const ImportLogo = require('../../../assets/images/logo2.0.png')

export default function bemvindo() {
    return(
        <View style={styles.container}>
            

            <View style={styles.containerLogo}>
                <LogoViewer logosourceview={ImportLogo}/>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Pronto para iniciar novas aventuras?</Text>
                <Text style={styles.text}>Faça seu Login para Começar!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>Acessar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )}

const styles = StyleSheet.create({
    container:{
            flex:1,
            // justifyContent:"center",
            backgroundColor:'#10a69f'
    },
    containerLogo:{
        flex:2,
        backgroundColor:"#10a69f",
        justifyContent:'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopRightRadius:25,
        borderTopLeftRadius:25,


    },
    title:{

    },
    text:{

    },
    button:{

    }

})