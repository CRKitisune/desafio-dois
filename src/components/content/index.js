import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


export default function Content() {
    const image01 = require('../../../assets/images/filme01.jpg')
    const image02 = require('../../../assets/images/filme02.jpg')
    const image04 = require('../../../assets/images/image04.jpg')
    const image05 = require('../../../assets/images/image05.jpg')



    return (
        <View>
            <Text style={{ color: 'white' }}>Meus 10 Filmes + Séries Favoritos</Text>
            <View style={styles.containerImages}>
                <Image source={image01} style={styles.images} />
                <Image source={image02} style={styles.images} />
                <Image source={image04} style={styles.images} />
                <Image source={image05} style={styles.images} />
            </View>
            <View style={styles.containerImages}>
                <Image source={image01} style={styles.images} />
                <Image source={image02} style={styles.images} />
                <Image source={image04} style={styles.images} />
                <Image source={image05} style={styles.images} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    images: {
        width: '300px',
        height: '500px',
        margin: 1
    },

    containerImages: {
        flexDirection: 'row',
    }
})