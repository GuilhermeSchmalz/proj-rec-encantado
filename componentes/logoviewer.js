import { StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable';
// import {} from 'react-native-animatable;'


export default function LogoViewer({logosourceview}) {
    return (
        <Animatable.Image animation="flipInY" source={logosourceview} style={styles.Image}/>
    )
};

const styles = StyleSheet.create({
    Image: {
        width:'30%',
        height:'60%',
        resizeMode: 'contain',
        padding:'1%',
        margin:'1%'
    
        //borderRadius:18,
    }

});