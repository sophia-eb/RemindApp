import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from "react-native";

import { PAGE_TITLE, ROUTES } from "./Constants";
import Home from "./screens/Home/Home";
import RewardArea from "./screens/Reward/Reward";
import WeatherContainer from "./screens/WeatherList/WeatherContainer";
import WeatherContent from "./screens/WeatherList/WeatherContent";
import { isReadyRef, navigationRef } from "./utils/navigation/RootNavigation";

// const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const AppNavigator = (props) => {
  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <RootStack.Navigator
        initialRouteName={ROUTES.WEATHER_LIST}
      >
        {/*<RootStack.Screen*/}
        {/*  name={ROUTES.HOME}*/}
        {/*  component={Home}*/}
        {/*  options={{*/}
        {/*    headerTitle: null,*/}
        {/*    headerLeft: () => (<Text>{PAGE_TITLE.HOME}</Text>),*/}
        {/*    // headerShown: false,*/}
        {/*  }}*/}
        {/*/>*/}
        <RootStack.Screen
          name={ROUTES.WEATHER_LIST}
          component={WeatherContainer}
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

export default AppNavigator;
