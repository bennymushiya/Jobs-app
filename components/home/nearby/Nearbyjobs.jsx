import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';
import { Nearbyjobs } from '../..';
import { useState } from 'react';

const Nearbyjobs = () => {

  //MARK: - PROPERTIES 
  const router = useRouter();
  
  const {data, isLoading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: 1
 });



  //MARK: - BODY 

  return (

    <View style = {styles.container }>
      <View style = {styles.header}>

        <Text style = {styles.headerTitle}> nearby jobs</Text>
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

        data.map((Job) => (

          <NearbyJobCard/>

        ))

        )}


      </View>

    </View>
  )
}

export default Nearbyjobs