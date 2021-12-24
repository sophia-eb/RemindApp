/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from "./Constants";
import WeatherList from "./screens/WeatherList/WeatherList";
import RewardArea from "./screens/Reward/Reward";
// import Home from "./screens/Home/Home";

// const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/*<RootStack.Screen name={ROUTES.HOME}*/}
        {/*                  component={WeatherList}>*/}
        {/*</RootStack.Screen>*/}
        <RootStack.Screen name={ROUTES.WEATHER_LIST}
                          component={WeatherList}>
        </RootStack.Screen>
        <RootStack.Screen name={ROUTES.REWARD_AREA}
                          component={RewardArea}>
        </RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
