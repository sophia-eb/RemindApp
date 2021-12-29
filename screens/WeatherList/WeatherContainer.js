import React, { useEffect, useRef, useState } from "react";

import { View, Text, Button } from "react-native";
import Drawer from 'react-native-drawer';

import { CITY_LIST_OBJ, ROUTES } from "../../Constants";
import commonStyles from "../../styles/CommonStyles";
import styles from "../../styles/WeatherList/WeatherContainer";
import { DEFAULT_CITY } from "../../utils/storage/storageKeyNames";
import { localStorage } from "../../utils/storage/storageUtil";
import WeatherContent from "./WeatherContent";

const drawerStyles = {
  drawer: { shadowColor: '#b8e3ff', shadowOpacity: 0.2, shadowRadius: 3},
  main: { paddingLeft: 3 },
};

const WeatherContainer = props => {
  const drawerEl = useRef(null);
  const [defaultCity, setDefaultCity] = useState(null);

  useEffect(() => {
    async function setCity() {
      const defaultCity = await localStorage.getItem(DEFAULT_CITY);
      if (defaultCity) {
        setDefaultCity(defaultCity);
      }
    }
    setCity();
    return () => {};
  }, []);

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
            {...props}
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
        <WeatherContent
          defaultCity={defaultCity}
          openControlPanel={openControlPanel}
          closeControlPanel={closeControlPanel}
          {...props}
        />
      </Drawer>
    </View>
  );
};

const ControlPanel = props => {
  const {closeControlPanel, navigation} = props;

  const navigateToWeatherList = async (cityId) => {
    closeControlPanel();
    await localStorage.setItem(DEFAULT_CITY, cityId);
    navigation.navigate(ROUTES.WEATHER_LIST, {cityId: cityId});
  };

  const navigateToCity = () => {

  };

  return (
    <View style={styles.controlPanel}>
      <Text
        style={[commonStyles.fontSize16, commonStyles.padding10, styles.closePanel]}
        onPress={closeControlPanel}
      >
        关闭
      </Text>
      { Object.keys(CITY_LIST_OBJ).map(cityId => (
        <Text
          key={cityId}
          style={[commonStyles.fontSize16, commonStyles.padding10]}
          onPress={() => navigateToWeatherList(cityId)}
        >
          {CITY_LIST_OBJ[cityId]}
        </Text>
      ))}
      <View style={styles.controlBottom}>
        <Text
          onPress={() => navigateToCity()}
          style={[styles.addButtonStyle, commonStyles.fontSize18, commonStyles.textColorBlue]}
        >
          添加城市
        </Text>
      </View>
    </View>);
};


export default WeatherContainer;
