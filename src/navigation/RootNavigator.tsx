import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import Onboarding from '../screens/OnboardingScreen/Onboarding';
import Getstarted from '../screens/Getstarted/Getstarted';
import Welcome from '../screens/OnboardingScreen/Welcome';
import Forgot from '../screens/Forgot/forgot';
import Login from '../screens/LoginScreen/Login';
import CarbonCalculator from '../screens/CarbonCalculator/CarbonCalculator';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();



export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="getstarted" component={Getstarted} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="CarbonCalculator" component={CarbonCalculator} options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );


}
export function handleNavigation(nav: any) {
  switch (nav.type) {
    case 'push':
      nav.navigation.navigate(nav.page, nav.passProps)
      break
    case 'setRoot':
      nav.navigation.reset({ index: 0, routes: [{ name: nav.page }] })
      break
    case 'pop':
      nav.navigation.goBack()
      break
    case 'popToTop':
      nav.navigation.popToTop()
      break
    case 'navigate':
      nav.navigation.push(nav.page, nav.passProps)
      break
  }
}