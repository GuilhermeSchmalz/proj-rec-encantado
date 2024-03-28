import { StyleSheet, Image } from "react-native";

export default function ImageViewer({imagesourceview}) {
    return (
        <Image source={imagesourceview} style={styles.Image}/>
    )
};

const styles = StyleSheet.create({
    Image: {
        width:200,
        height:200,
        borderRadius:18,
        resizeMode:'contain'
    }

});