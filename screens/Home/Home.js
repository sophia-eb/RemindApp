import React from "react";
import { Button, ScrollView } from "react-native";
import { ROUTES } from "../../Constants";

const Home = props => {
  const { navigation } = props;

  const navigateToWeatherList = () => {
    navigation.navigate(ROUTES.WEATHER_LIST);
  };

  return (
    <ScrollView>
      <Button title="Weather List" onPress={() => navigateToWeatherList()} />
    </ScrollView>
  );
};

export default Home;
