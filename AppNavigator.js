import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from "react-native";

import { PAGE_TITLE, ROUTES } from "./Constants";
import AddCity from "./src/screens/AllCity/AllCityPage";
import Home from "./src/screens/Home/Home";
import RewardArea from "./src/screens/Reward/Reward";
import WeatherContainer from "./src/screens/Weather/WeatherContainer";
import { isReadyRef, navigationRef } from "./src/utils/navigation/RootNavigation";

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
          name={ROUTES.ADD_CITY}
          component={AddCity}
          options={{ headerTitle: PAGE_TITLE.ADD_CITY }}
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
