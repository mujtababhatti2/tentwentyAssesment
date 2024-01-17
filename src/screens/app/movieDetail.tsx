import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../assets/utilities'
import { LoadingComp } from '../../components/gerenal/loadingComp'
import { ApiInstance, api_key } from '../../service/apiInstance'
import { SimpleHeader } from '../../components/gerenal/header'
import LinearGradient from 'react-native-linear-gradient'
import { scale, vtscale } from '../../assets/constants/pixelRatio'
import { fontFamily } from '../../assets/utilities/font'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ButtonComp } from '../../components/gerenal/buttonComp'

interface detailProps {
    navigation: any
    route: any | string | undefined
}

const MovieDetail = ({ navigation, route }: detailProps) => {
    const { movieId } = route.params
    const [loading, setLoading] = useState<boolean>(true)
    const [movieData, setData] = useState<object | any>({})

    useEffect(() => {
        handleGetMovie()
    }, [])

    const handleGetMovie = () => {
        try {
            ApiInstance.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
                .then(res => {
                    console.log(res.data);
                    setData(res?.data)
                }).catch(err => console.log(err))
                .finally(() => setLoading(false))
        } catch (error) {
            console.log(error);
        }
    }

    function handleDate(_date: Date) {
        console.log(_date);
        const inputDate = new Date('2023-12-06');

        // Options for formatting the date
        const options: object = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        // Convert the date to the desired format
        const formattedDate = inputDate.toLocaleDateString('en-US', options);
        return formattedDate

    }

    return (
        <View style={styles.container}>
            <StatusBar
                translucent={true}
                barStyle={'light-content'}
                backgroundColor={'transparent'}
            />
            <LoadingComp loading={loading} title='Fetching...' />
            <View style={styles.imageView}>
                <ImageBackground
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movieData?.backdrop_path}` }}
                    style={styles.image}
                    resizeMode='cover'

                >
                    <SimpleHeader
                        title={"Watch"}
                        onPress={() => navigation.goBack()}
                    />
                    <LinearGradient
                        style={styles.linear}
                        colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}>
                        <View style={styles.textView}>
                            <Text style={styles.title}>{movieData?.title}</Text>
                            <Text style={styles.date}>{`In Theaters ${handleDate(movieData?.release_date)}`}</Text>
                            <ButtonComp
                                title='Get Tickets'
                                btnStyle={styles.btn}
                            />
                            <ButtonComp
                                title='Watch Trailer'
                                btnStyle={styles.btnstyle}
                                icon={true}
                                iconName={'play'}
                                iconType='font-awesome'
                            />
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>

        </View>
    )
}

export default MovieDetail

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%',
    },
    linear: {
        width: '100%',
        height: '75%',
    },
    imageView: {
        width: '100%',
        height: "60%"
    },
    title: {
        fontFamily: fontFamily.appTextSemiBold,
        color: colors.white,
        fontSize: responsiveFontSize(2)
    },
    textView: {
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: "flex-end",
        height: "90%",
    },
    date: {
        fontFamily: fontFamily.appTextMedium,
        color: colors.white,
        fontSize: responsiveFontSize(2),
        marginTop: 10
    },
    btn: {
        width: responsiveWidth(70),
        marginTop: responsiveHeight(3)
    },
    btnstyle: {
        backgroundColor: "transparent",
        borderWidth: 1,
        width: responsiveWidth(70),
        borderColor: colors.btnColor,
        marginTop:responsiveHeight(2)
    }
})