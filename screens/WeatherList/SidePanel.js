import React, { useState } from "react";

import _ from "lodash";
import { Text, View } from "react-native";
import SwipeOut from "react-native-swipeout";

import { CITY_LIST_OBJ, CITY_LIST_OBJ1, ROUTES, themeColor } from "../../Constants";
import commonStyles from "../../styles/CommonStyles";
import styles from "../../styles/WeatherList/WeatherContainer";
// import { DEFAULT_CITY } from "../../utils/storage/storageKeyNames";
// import { localStorage } from "../../utils/storage/storageUtil";

const SidePanel = props => {
  const {closeControlPanel, navigation} = props;
  const [cityList, setCityList] = useState(CITY_LIST_OBJ);

  const navigateToWeatherList = async (cityId) => {
    closeControlPanel();
    // await localStorage.setItem(DEFAULT_CITY, cityId);
    navigation.navigate(ROUTES.WEATHER_LIST, {cityId: cityId});
  };

  const navigateToCity = () => {};

  const deleteCity = (index) => {
    const currentCityList = _.cloneDeep(cityList);
    currentCityList.splice(index, 1);
    setCityList(currentCityList);
  };

  const topCity = (index) => {
    const currentCityList = _.cloneDeep(cityList);
    currentCityList.unshift(currentCityList.splice(index , 1)[0]);
    setCityList(currentCityList);
  };

  const CityList = props => {
    return props.cityList.map((cityId, index) => {
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
          // style={commonStyles.borderBottom}
        >
          <Text
            style={[commonStyles.fontSize16, commonStyles.padding10]}
            onPress={() => navigateToWeatherList(cityId)}
          >
            {CITY_LIST_OBJ1[cityId]}
          </Text>
        </SwipeOut>
      );
    });
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
        { cityList && <CityList cityList={cityList}/>}
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

export default SidePanel;
