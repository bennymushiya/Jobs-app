import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobTypes = ["Full-time", "Part-time", "contractor" ];

const Welcome = () => {

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time")


  return (
    <View>

    {/*// every properties or components needs to be wrapped inside a View in order to see it. e.g Vstack, Hstack/Zstack*/}
    {/*MARK: - TITLE & SUBTITLE*/}
    <View style = {styles.container}>

      {/* these fonts/styles were using so far are system fonts*/}
      <Text style = {styles.userName}> Hello Adrian </Text>
      <Text style = {styles.welcomeMessage}> find your perfect job</Text>

    </View>

    {/*MARK: - SEARCH BAR*/}
    <View style = {styles.searchContainer}>

        {/*MARK: - inside the container/ Textfield*/}
      <View style = {styles.searchWrapper}>

    {/*text field*/}
        <TextInput

        // style of the textfield
         style = {styles.searchInput} 

         // the value thats entered by the user
         value = "" 

         // when the textfield changes/ user interacts with them
         onChange= {() => {}}

         placeholder = "what are you looking for"
         />
      </View>

    {/* touchable opacity is a button/ magnifying glass button*/}
      <TouchableOpacity style = {styles.searchBtn} onPress = {() => {}}>

        <Image 
        source = {icons.search}
        resizeMode = "contain"
        style = {styles.searchBtnImage}
        
        />
      </TouchableOpacity>
    </View>


   {/*MARK: - job types filter view*/}

    <View style = {styles.tabsContainer}>

      <FlatList

      data = {jobTypes}

      // this code specifies how each item looks like and what time of array it will be 
      // we set it as a button
      renderItem = {({ item }) => (

        <TouchableOpacity style = {styles.tab(activeJobType, item)}
        // this is how we navigate to anothet view 
         onPress = {() => {setActiveJobType(item); router.push('/search/${item}')}}>
          
          <Text style = {styles.tabText(activeJobType, item)}> {item} </Text>

        </TouchableOpacity>
      )}

      // its an item that points to the selected item
      keyExtractor = {item => item}

      // gives the filter small spacing between then
      contentContainerStyle = {{ columnGap: SIZES.small}}

      // makes it horizontal
      horizontal
      
      />

      
    </View>

    </View>
  
  )
}

export default Welcome