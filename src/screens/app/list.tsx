import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LoadingComp } from '../../components/gerenal/loadingComp'
import { ApiInstance, api_key } from '../../service/apiInstance'
import { colors } from '../../assets/utilities'
import { StatusBar } from 'react-native'
import { MovieListComp } from '../../components/feeds/movieListComp'
import { vtscale } from '../../assets/constants/pixelRatio'
import { HeaderComp } from '../../components/gerenal/header'

interface movieListProps {
  navigation: any,
  route: any
}


const List = ({ navigation, route }: movieListProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Array<object> | any>([])

  useEffect(() => {
    handleGetMovies()
  }, [])

  const handleGetMovies = () => {
    try {
      ApiInstance.get(`/movie/upcoming?api_key=${api_key}`)
        .then((res) => {
          console.log(res);
          setData(res.data)
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          setTimeout(() => {
            setLoading(false)
          }, 2000);
        })
    } catch (error) {
      console.log(error);
    }
  }

  const handleRenderItem = (item: object | any, index: number) => {
    return (
      <MovieListComp
        image={{ uri: `https://image.tmdb.org/t/p/w500${item?.backdrop_path}` }}
        title={item?.original_title}
        onPress={() => { navigation.navigate('MovieDetail',{
          movieId: item?.id
        }) }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <LoadingComp loading={loading} title='Fetching...' />
      <HeaderComp
        title={'Watch'}
        onPress={()=>{}}
      />
      <ScrollView style={styles.wrapper}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          scrollEnabled={false}
          data={data?.results}
          renderItem={({ item, index }) => {
            return handleRenderItem(item, index)
          }}
        />
        <View style={{ height: vtscale(80) }} />
      </ScrollView>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1
  },
  wrapper: {
    width: '90%',
    alignSelf: "center"
  }
})