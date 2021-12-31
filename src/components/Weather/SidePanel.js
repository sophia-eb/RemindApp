import React, { useEffect, useState } from "react";

import _ from "lodash";
import { Text, View } from "react-native";
import SwipeOut from "react-native-swipeout";

import { CITY_LIST_OBJ, ROUTES, themeColor } from "../../../Constants";
import commonStyles from "../../styles/CommonStyles";
import styles from "../../styles/WeatherList/WeatherContainer";
import { CITY_LIST } from "../../utils/storage/storageKeyNames";
import { localStorage } from "../../utils/storage/storageUtil";
import { list2str, str2list } from "../../utils/transformListAndStr";

const SidePanel = props => {
  const {closeControlPanel, navigation, route, setDisplayCity} = props;
  const [cityList, setCityList] = useState([]);

  const selectedCities = route?.params ? route?.params.selectedCities : [];
  const selectedCitiesLength = selectedCities ? selectedCities?.length : 0;

  useEffect(() => {
    async function setCityListFunc() {
      const res = await localStorage.getItem(CITY_LIST);
      setCityList(str2list(res));
    }
    if (selectedCities && selectedCities.length > 0) {
      setCityList(selectedCities);
    } else {
      setCityListFunc().then();
    }
  }, [selectedCitiesLength]);

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
    setCityList(currentCityList);
    if (currentCityList.length < 1) {
      setDisplayCity(null);
      await localStorage.clearMap();
    }
    await localStorage.setItem(CITY_LIST, list2str(currentCityList));
  };

  const topCity = async (index) => {
    const currentCityList = _.cloneDeep(cityList);
    currentCityList.unshift(currentCityList.splice(index , 1)[0]);
    setCityList(currentCityList);
    await localStorage.setItem(CITY_LIST, list2str(currentCityList));
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
          {CITY_LIST_OBJ[cityId]}
        </Text>
      </SwipeOut>
    );
  });
};

export default SidePanel;
