import { useState } from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {

  //MARK: - PROPERTIES 
  const router = useRouter();
  
  const {data, isLoading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1
 })

 console.log(data)


  //MARK: - BODY 

  return (

    <View style = {styles.container }>
      <View style = {styles.header}>

        <Text style = {styles.headerTitle}> Popular jobs</Text>
        <TouchableOpacity>
          <Text style = {styles.headerBtn}> show all </Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.cardsContainer}>

        { isLoading ? (
        
        <ActivityIndicator size = "large" colors = {COLORS.primary} /> 
        
        ) : error ? (
        
        <Text> Something went wrong error</Text>

        ) : (

          <FlatList

          data= { [1, 2, 3, 4, 7,9,3]}
          renderItem = { (item) => (<PopularJobCard item = {item} />)}

          // identifiies each item inside the array
          keyExtractor = {item => item?.job_ID}
          contentContainerStyle = {{columnGap: SIZES.medium}}
          horizontal
          />

        )}


      </View>

    </View>
  )
}

export default Popularjobs