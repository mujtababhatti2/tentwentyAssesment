import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { vtscale } from '../../assets/constants/pixelRatio'
import { fontFamily } from '../../assets/utilities/font'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import { Icon, colors } from 'react-native-elements'

interface headerProps {
    title: string | any
    onPress: () => void
}

interface simpleProps {
    title: string | any
    onPress?: () => void

}


export const HeaderComp = ({
    title
}: headerProps) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.innerView}>
                <View style={styles.searchView}>
                    <Text style={styles.titleText}>{title}</Text>
                    <TouchableOpacity>
                        <Icon
                            name='search1'
                            type='antdesign'
                            size={responsiveFontSize(2.5)}

                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export const SimpleHeader = ({ title, onPress }: simpleProps) => {
    return (
        <View style={styles.headerView}>
            <View style={styles.innerView}>
                <View style={styles.iconView}>
                    <TouchableOpacity onPress={onPress}>
                        <Icon
                            name='chevron-left'
                            type='feather'
                            size={responsiveFontSize(4)}
                            color={colors.white}

                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        paddingTop: vtscale(40),
        marginBottom: vtscale(10),
        backgroundColor: "white",

    },
    innerView: {
        marginVertical: vtscale(15),
        width: '90%',
        alignSelf: "center"
    },
    titleText: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: responsiveFontSize(2.2),
        color: colors.black
    },
    searchView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerView: {
        paddingTop: vtscale(40),
        marginBottom: vtscale(10),
    },
    iconView: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        color: colors.white,
        fontFamily: fontFamily.appTextMedium,
        fontSize: responsiveFontSize(2),
        marginLeft: responsiveWidth(3)
    }
})

