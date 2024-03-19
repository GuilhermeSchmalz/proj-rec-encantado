import { Pressable, StyleSheet, View, Text } from "react-native";

export default function Button({ label }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => { alert('Curta o Recife,\n Seja bem vindo!!!'), handleLogin()}}>
                <Text style={styles.label}>{label}</Text>
            </Pressable>


        </View>
    )

}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 160,
        height: 68,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        position: 'relative',
        bottom: 120
        
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(138,43,226, 0.7)',
    },
    label: {
        color: '#fff',
        fontSize: '16',
    }
})