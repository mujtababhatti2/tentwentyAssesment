import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

interface props {
    navigation: any
}

const Splash = ({ navigation }: props) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("AppStack")
        }, 3000);
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.Assesment}>Assesment</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    Assesment: {
        color: "white"
    }
})