import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const image = { uri: process.env.PUBLIC_URL + '/images/background.jpg' };

export const Background = () => (
    <View style={styles.container}>
        <ImageBackground
            className="body__background-image"
            source={image}
            style={styles.image}>

        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

        minHeight: '100%',
        minWidth: '800px',

        width: '100%',
        height: 'auto',

        position: 'fixed',
        top: '0',
        left: '0',
    },
});


