import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { View, Text } from "react-native";


const Home = () => {

    const router = useRouter();

// safe area allows us to show components safely without anything over it
    return (

         <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}> 

         {/* Comment headerShadowVisbible hides the elevation shadow border IOS on the header so thr navigation bar */}
         <Stack.Screen options={{ headerStyle: {backgroundColor: COLORS.lightWhite}, headerShadowVisible: false,

         // left and right button for navigation bar
         headerLeft: () => (<ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%" />),

         headerRight: () => (<ScreenHeaderBtn iconUrl = {images.profile} dimension = "100%" />),

         // the middle title of a navigation bar 
         headerTitle: ""
        }} />

        {/* embedds it into a scroll view */}
        <ScrollView showsVerticalScrollIndicator = {false}>

            {/* a regular view that we use to put all the view components inside */}
            <View style = {{ flex: 1, padding: SIZES.medium}} >

                <Welcome/>
                <Popularjobs/>
                <Nearbyjobs/>



            </View>


        </ScrollView>

         
          </SafeAreaView>)
}

export default Home;