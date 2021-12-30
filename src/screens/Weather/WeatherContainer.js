import React, { useEffect, useRef, useState } from "react";

import { View } from "react-native";
import Drawer from 'react-native-drawer';

import SidePanel from "../../components/Weather/SidePanel";
import WeatherContent from "../../components/Weather/WeatherContent";
import styles from "../../styles/WeatherList/WeatherContainer";
import { DEFAULT_CITY } from "../../utils/storage/storageKeyNames";
import { localStorage } from "../../utils/storage/storageUtil";

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
    setCity().then();
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
          <SidePanel
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

export default WeatherContainer;
