import { StyleSheet, Image } from "react-native";

export default function ImageViewer({imagesourceview}) {
    return (
        <Image source={imagesourceview} style={styles.Image}/>
    )
};

const styles = StyleSheet.create({
    Image: {
        width:320,
        height:640,
        borderRadius:18,
    }

});