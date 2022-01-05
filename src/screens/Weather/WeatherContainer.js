import React, { useEffect, useRef, useState } from "react";

import { Text, View } from "react-native";
import Drawer from 'react-native-drawer';
import { useSelector } from "react-redux";

import { ROUTES } from "../../../Constants";
import { getCityList, getCurrentCity } from "../../actions";
import SidePanel from "../../components/Weather/SidePanel";
import WeatherContent from "../../components/Weather/WeatherContent";
import commonStyles from "../../styles/CommonStyles";
import styles from "../../styles/WeatherList/WeatherContainer";


const drawerStyles = {
  drawer: { shadowColor: '#b8e3ff', shadowOpacity: 0.2, shadowRadius: 3},
  main: { paddingLeft: 3 },
};

const WeatherContainer = props => {
  const {route, navigation} = props;
  const drawerEl = useRef(null);
  const cityId = route?.params ? route?.params.cityId : null;
  // localStorage.clearMap();

  const cityList = useSelector(state => state.cityList);
  const currentCity = useSelector(state => state.currentCity);

  const displayCity = cityId ? cityId : currentCity;

  useEffect(() => {
    getCityList().then();
    getCurrentCity().then();
  }, []);

  const navigateToCity = () => {
    navigation.navigate(ROUTES.ALL_CITY);
  };

  const closeControlPanel = () => {
    drawerEl.current.close();
  };

  const openControlPanel = () => {
    drawerEl.current.open();
  };

  const emptyWeatherPage = () => {
    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.firstAddCityButton,
            styles.centerText,
            commonStyles.fontSize20,
            commonStyles.textColor,
            commonStyles.margin20
          ]}
          onPress={() => navigateToCity()}
        >
        点我去添加一个城市吧^^
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Drawer
        ref={drawerEl}
        type="overlay"
        content={
          <SidePanel
            cityList={cityList}
            closeControlPanel={closeControlPanel}
            {...props}
          />}
        tapToClose={true}
        openDrawerOffset={0.4} // 40% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
        { displayCity ?
          <WeatherContent
            displayCity={displayCity}
            openControlPanel={openControlPanel}
            closeControlPanel={closeControlPanel}
            {...props}
          />
          :
          emptyWeatherPage()
        }

      </Drawer>
    </View>
  );
};

WeatherContainer.defaultProps = {
  route: {},
  navigation: () => {},
};

export default WeatherContainer;
