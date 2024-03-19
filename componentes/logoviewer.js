import { StyleSheet, Image } from "react-native";

export default function LogoViewer({logosourceview}) {
    return (
        <Image source={logosourceview} style={styles.Image}/>
    )
};

const styles = StyleSheet.create({
    Image: {
        width:250,
        height:150,
        top: 10
    
        //borderRadius:18,
    }

});