import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LoadingComp } from '../../components/gerenal/loadingComp'

interface movieListProps {
  navigation: any,
  route: any
}


const List = ({ navigation, route }: movieListProps) => {
  const [loading, setLoading] = useState<boolean>(false)


  return (
    <View style={styles.container}>
      <LoadingComp loading={loading} title='Fetching...' />
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1
  }
})