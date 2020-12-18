import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Easing, Image, StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import HomeScreenV1 from './Screens/HomeScreenV1';
import ImageScreen from './Screens/ImageScreen';
import NavigationScreen from './Screens/NavigationScreen';
enableScreens();

const Stack = createSharedElementStackNavigator();
const options = () => ({
  headerShown: false,
  gestureEnabled: false,
  transitionSpec: {
    open: { animation: "timing", config: { duration: 1000, easing: Easing.inOut(Easing.ease) } },
    close: { animation: "timing", config: { duration: 1000, easing: Easing.inOut(Easing.ease) } }
  },
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress
      }
    }
  }
})

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='NavigationScreen' >
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="HomeScreenV1" component={HomeScreenV1}
          options={options}
        />

        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={options}

        />
        <Stack.Screen
          name="NavigationScreen"
          component={NavigationScreen}
          options={{
            title:
              <Image
                style={{ width: 250, height: 50 }}
                resizeMode={'contain'}
                source={require('./assets/Logo.png')} />

          }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

