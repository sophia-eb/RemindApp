import React from "react";

import _ from "lodash";
import { Text, View } from "react-native";
import SwipeOut from "react-native-swipeout";

import { ROUTES, themeColor } from "../../../Constants";
import { setCurrentCity, setCurrentCityList } from "../../actions";
import commonStyles from "../../styles/CommonStyles";
import styles from "../../styles/WeatherList/WeatherContainer";
import { getLocationName } from "../../utils/getLocationName";
import { localStorage } from "../../utils/storage/storageUtil";

const SidePanel = props => {
  const {closeControlPanel, navigation, cityList} = props;

  const navigateToWeatherList = async (cityId) => {
    closeControlPanel();
    navigation.navigate(ROUTES.WEATHER_LIST, {cityId: cityId});
  };

  const navigateToCity = () => {
    navigation.navigate(ROUTES.ALL_CITY);
  };

  const deleteCity = async (index) => {
    const currentCityList = _.cloneDeep(cityList);
    currentCityList.splice(index, 1);
    await setCurrentCityList(currentCityList);
    if (currentCityList.length < 1) {
      await setCurrentCity(null);
      await localStorage.clearMap();
    }
  };

  const topCity = async (index) => {
    const currentCityList = _.cloneDeep(cityList);
    currentCityList.unshift(currentCityList.splice(index , 1)[0]);
    await setCurrentCityList(currentCityList);
  };

  return (
    <View style={styles.controlPanel}>
      <Text
        style={[commonStyles.fontSize16, commonStyles.padding10, styles.closePanel]}
        onPress={closeControlPanel}
      >
        关闭
      </Text>
      <View style={{ marginBottom: 10 }}>
        { cityList &&
          <CityList
            cityList={cityList}
            deleteCity={deleteCity}
            topCity={topCity}
            navigateToWeatherList={navigateToWeatherList}
          />
        }
      </View>
      <View style={styles.controlBottom}>
        <Text
          onPress={() => navigateToCity()}
          style={[styles.addButtonStyle, commonStyles.fontSize18, commonStyles.textColorBlue]}
        >
          添加城市
        </Text>
      </View>
    </View>
  );
};

const CityList = props => {
  const { cityList, deleteCity, topCity, navigateToWeatherList } = props;
  return cityList && cityList.map((cityId, index) => {
    if (!cityId) {
      return null;
    }
    const deleteButton = {
      text: "删除",
      backgroundColor: "red",
      type: "delete",
      onPress: () => deleteCity(index)
    };
    const topButton = {
      text: "置顶",
      backgroundColor: "gray",
      onPress: () => topCity(index)
    };
    const swipeOutButtons = index === 0 ? [deleteButton] : [topButton, deleteButton];

    return (
      <SwipeOut
        key={cityId}
        autoClose={true}
        buttonWidth={50}
        right={swipeOutButtons}
        backgroundColor={themeColor.textColor}
      >
        <Text
          style={[commonStyles.fontSize18, commonStyles.padding10]}
          onPress={() => navigateToWeatherList(cityId)}
        >
          {getLocationName(cityId)}
        </Text>
      </SwipeOut>
    );
  });
};

export default SidePanel;
