import React, {useEffect} from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Settings(){
const navigation = useNavigation();
return(
    <View style={styles.container}>
        <View style={styles.topBar}>

            {/* MODELO BOTÃO VOLTAR */}
            {/* <Pressable onPress={() => { navigation.goBack()}}>
            
              <Text style={styles.textBack}>VOLTAR</Text>
            </Pressable> */}

            <Text style={styles.textBack}>Deixe o App do seu jeitinho</Text>
        </View>
    </View>
        
);
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        
    },
    pageName:{
        marginTop: 40,
        fontWeight:'bold',
        color:'white',
        backgroundColor:'red',
        flex:1,
        bottom:'40%',
        
    },
    textBack:{
        textAlign:'center',
        padding:20,
        fontWeight:'bold',
        color:'white'
    }

})