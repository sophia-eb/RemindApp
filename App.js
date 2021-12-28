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
import { PAGE_TITLE, ROUTES } from "./Constants";
import WeatherList from "./screens/WeatherList/WeatherList";
import RewardArea from "./screens/Reward/Reward";
import Home from "./screens/Home/Home";
import { Text } from "react-native";

// const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={ROUTES.HOME}
      >
        <RootStack.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{
            headerTitle: null,
            headerLeft: () => (<Text>{PAGE_TITLE.HOME}</Text>),
            // headerShown: false,
          }}
        />
        <RootStack.Screen
          name={ROUTES.WEATHER_LIST}
          component={WeatherList}
          options={{ headerTitle: PAGE_TITLE.WEATHER_LIST }}
        />
        <RootStack.Screen
          name={ROUTES.REWARD_AREA}
          component={RewardArea}
          options={{ headerTitle: PAGE_TITLE.REWARD_AREA }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
