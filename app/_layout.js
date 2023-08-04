import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

// we make sure the fonts will be loaded
const Layout = () => {

    const [fontsLoaded] = useFonts({

        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    // we only show our homepage if our fonts have been loaded
    const onLayoutRootView = useCallback(async () => {

        if (fontsLoaded) {

            await SplashScreen.hideAsync();
        }

        [fontsLoaded]

    })

    if (!fontsLoaded) return null;

    return <Stack onLayout = {onLayoutRootView} />;
}

// we need to export it in order to access this file in other files
export default Layout;