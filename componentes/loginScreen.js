import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet} from "react-native";
import { strings } from "../assets/strings";
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
    const navigationn= useNavigation();

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");



const handleLogin = () => {
console.log("Email: ",email);
console.log("Senha:", password);
navigationn.navigate('LinkHome1');
alert('Curta o Recife,\n Seja bem vindo!!!')
};

return (
    <View style={styles.container}>
        <Text style={styles.title}>{strings.loginTitle}</Text>
        <Text style={[styles.title, styles.appName]}>Mapacife</Text>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={strings.emailPlaceholder}
                onChangeText={setEmail}
                value={email}
                placeholderTextColor="#aaa"/>
        
            <TextInput
                style={styles.input}
                placeholder={strings.passwordPlaceholder}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                placeholderTextColor="#aaa"/>
            <Button title={strings.loginButton} onPress={() => { handleLogin()}}/>
        </View>
    </View>
);

};

const styles = StyleSheet.create({
    
    container:{
        //flexGrow: 1,
        padding:30,
        justifyContent: "center",
        alignItems: "center",
        //paddingHorizontal: 20,
        backgroundColor: "rgba(255,255,255,0.7)",
        borderRadius:30,
    },
    title:{
        fontSize: 24,
        marginBottom: 10,
        fontFamily: "Arial",
        textAlign: "center"
    },
    appName:{
        fontSize: 32,
        fontWeight: "bold",
    },
    inputContainer:{
        width:"100%",
        
    },
    input:{
        width:"100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius:5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "rgba(255,255,255,0.8)"
    },
})

export default LoginScreen;

