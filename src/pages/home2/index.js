import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
// const Importimghome= require('../../../assets/images/recife.jpg');

export default function Home2(){
return(
    <View style={styles.container}>
        <Text style={styles.pageName}>Home2 - Eventos do Nosso Recife</Text>
        <View style={styles.containerimage1}>
            <Image source={require('../../../assets/images/home.png')}/>
            <Text style={styles.pageName}>Home2 - Eventos do Nosso Recife2</Text>
        </View>
        <Text style={styles.pageName}>Home2 - Eventos do Nosso Recife3</Text>
    </View>
        
);
    
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'purple'
    },
    pageName:{
        textAlign:'center',
        padding:20,
        fontWeight:'bold',
        color:'white'
    },
    containerimage1:{
        alignItems: 'center', 
        marginTop: 20, 
    }
})