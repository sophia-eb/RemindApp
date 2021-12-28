import React, { useRef } from "react";
import { Button, ScrollView, View, Text } from "react-native";
import { CITY_LIST, ROUTES } from "../../Constants";
import Drawer from 'react-native-drawer';
import styles from "../../styles/Home/Home";

const drawerStyles = {
  drawer: { shadowColor: '#b8e3ff', shadowOpacity: 0.2, shadowRadius: 3},
  main: { paddingLeft: 3 },
};

const ControlPanel = props => {
  const {closeControlPanel, navigation} = props;

  const navigateToWeatherList = (cityId) => {
    navigation.navigate(ROUTES.WEATHER_LIST, {cityId: cityId});
  };

  return (
    <View style={styles.controlPanel}>
      <Text onPress={closeControlPanel}>Close</Text>
      { Object.keys(CITY_LIST).map(cityId => (
        <Text
          key={cityId}
          style={styles.textStyle}
          onPress={() => navigateToWeatherList(cityId)}
        >
          {CITY_LIST[cityId]}
        </Text>
      ))}
    </View>);
};

const MainView = props => {
  const {openControlPanel} = props;
  return (
    <View style={styles.mainContainer}>
      <Text onPress={openControlPanel}>main panel</Text>
    </View>);
};

const Home = props => {
  const {navigation} = props;
  const drawerEl = useRef(null);

  const closeControlPanel = () => {
    drawerEl.current.close();
  };

  const openControlPanel = () => {
    drawerEl.current.open();
  };

  return (
    <View style={styles.container}>
      <Drawer
        ref={drawerEl}
        type="overlay"
        content={
          <ControlPanel
            closeControlPanel={closeControlPanel}
            navigation={navigation}
          />}
        tapToClose={true}
        openDrawerOffset={0.6} // 60% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        <MainView
          openControlPanel={openControlPanel}
          closeControlPanel={closeControlPanel}
        />
      </Drawer>
    </View>
  );
};

export default Home;
