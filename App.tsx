import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '././src/navigation/RootNavigator';
import { NativeModules } from 'react-native';
console.log("RNFBAppModule:", NativeModules.RNFBAppModule);


export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
