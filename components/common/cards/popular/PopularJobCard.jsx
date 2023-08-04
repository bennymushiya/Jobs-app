import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../Utillities';


const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {

  return (

    <TouchableOpacity style = {styles.container(selectedJob, item)} onPress = {() => handleCardPress(item)}>

      <TouchableOpacity style = {styles.logoContainer(selectedJob, item)}>

        {/* IMAGE */}
        <Image

        source = {{uri: checkImageURL(item.employer_logo) ? item.employer_logo : 'kemal.jpg'}}
        resizeMode = "contain"
        style = {styles.logoImage}

        />

      </TouchableOpacity>

      {/* COMPANY NAME */}

      <Text style = {styles.companyName} numberOfLines = {1}> {"benny mushiya"}</Text>

      <View style = {styles.infoContainer}>

       {/* JOB TITLE */}

        <Text style = {styles.jobName(selectedJob, item)} numberOfLines = {1}>

          {"developer"}

        </Text>

        <Text style = {styles.location}> {"united kongdom"} </Text>

      </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard