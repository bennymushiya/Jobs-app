import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { icons } from '../../../constants'

import styles from './screenheader.style'

// in swiftUI how we do reusable Buttons this is the same 
const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    
    // on press handles the action of the button, whilst styles edits the look of the button
    <TouchableOpacity style = {styles.btnContainer} onPress = {handlePress}>

      <Image source = {iconUrl} resizeMode = "cover" style = {styles.btnImg(dimension)}/>

      
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn