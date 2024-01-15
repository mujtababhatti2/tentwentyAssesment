import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale, vtscale } from '../../assets/constants/pixelRatio'
import {
    MaterialIndicator,
} from 'react-native-indicators';
import { responsiveHeight } from 'react-native-responsive-dimensions';
interface loadingProps {
    loading: boolean
    title: string
}

export const LoadingComp = ({
    loading,
    title
}: loadingProps) => {
    return (
        <>
            {loading ? (
                <View style={styles.mainView}>
                    <View style={styles.loadingView}>
                    <MaterialIndicator color='white' />
                    <Text style={styles.loading}>{title}</Text>
                    </View>
                </View>
            ) : null}
        </>
    )
}


const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        backgroundColor: "rgba(255,255,255,0.2)",
        alignItems: "center",
        justifyContent: "center"
    },
    loadingView: {
        width: scale(150),
        height: scale(100),
        backgroundColor: "rgba(0,0,0,0.8)",
        borderRadius: scale(10),
        alignItems:"center",
        paddingVertical: responsiveHeight(1)
    },
    loading:{
        color:"white"
    }
})

