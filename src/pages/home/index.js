import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const HomeImage = require('../../../assets/images/home.png');

export default function Home(){
return(
    
        <View style={styles.container}>
            
            <Text style={styles.pageName}>Home1 - Feed</Text>

            <View style={styles.containerimage1}>
                <Image source={HomeImage} style={styles.image}/>
                <Text style={styles.pageName}>PrefeituradoRecife: Monumento de Brennand Tá toda iluminada agora, esculturas restauradas e com segurança no local! Quem vai agora? 🙌</Text>
            </View>

            <Text style={styles.pageName}>Home1 - Feed3</Text>
        </View>
        
);
    
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white'
    },
    pageName:{
        textAlign:'center',
        padding:20,
        fontWeight:'bold',
        color:'black'
    },
    containerimage1:{
        margin:4,
        padding:4,
        backgroundColor:"rgba(0, 40, 130, 0.08)",
        borderRadius:10,
        borderColor: 'grey',
        borderWidth:2,
        alignItems: 'center', 
        marginTop: 20, 
        flex:1
        
    },
    image:{
        flex:1,
        width:'100%',
        borderRadius:10
        
    }
})