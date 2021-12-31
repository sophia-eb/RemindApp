import React, { useEffect, useState } from "react";

import _ from "lodash";
import { FlatList, Text, TextInput, View } from "react-native";

import { RECOMMEND_CITY, ROUTES } from "../../../Constants";
import styles from "../../styles/City/AllCityContainer";
import commonStyles from "../../styles/CommonStyles";
import { getCityList } from "../../utils/apiUtils";
import { getLocationName } from "../../utils/getLocationName";
import { CITY_LIST, DEFAULT_CITY } from "../../utils/storage/storageKeyNames";
import { localStorage } from "../../utils/storage/storageUtil";
import { list2str, str2list } from "../../utils/transformListAndStr";


const AllCityContainer = props => {
  const { navigation } = props;
  const [isSearch, setIsSearch] = useState(false);
  const [selectedCities, setSelectedCities] = React.useState([]);
  const [searchCities, setSearchCities] = React.useState([]);

  useEffect(() => {
    async function setSelected() {
      const res = await localStorage.getItem(CITY_LIST);
      const currentCityList = _.cloneDeep(str2list(res));
      setSelectedCities(currentCityList);
    }
    setSelected().then();
    return () => {};
  }, []);

  const navigateToWeather = async (cityId) => {
    const isSelected = selectedCities.indexOf(cityId);
    if (isSelected !== -1) return;
    selectedCities.push(cityId);
    await localStorage.setItem(DEFAULT_CITY, selectedCities[0]);
    await localStorage.setItem(CITY_LIST, list2str(selectedCities));
    navigation.navigate(
      ROUTES.WEATHER_LIST,
      {
        cityId: cityId,
        selectedCities: selectedCities
      }
    );
  };

  const onChangeText = (text) => {
    getCityList(text).then(res => {
      setSearchCities(res.data.location);
    });
  };

  const renderSearchItem = ({ item }) => (
    <View style={styles.searchItemStyle}>
      <Text style={commonStyles.fontSize20}>{item.name}</Text>
      <Text>{`${item.country}, ${item.adm1}, ${item.adm2}`}</Text>
    </View>
  );

  const searchCity = () => (
    <>
      <Text style={[commonStyles.fontSize16, commonStyles.padding10]}>全部城市</Text>
      <View style={styles.searchCityContent}>
        <FlatList
          refreshing={true}
          data={searchCities}
          renderItem={renderSearchItem}
        />
      </View>
    </>
  );

  const renderRecommendItem = ({item}) => {
    const isSelected = selectedCities.indexOf(item);
    return (
      <Text
        style={[isSelected !== -1 && styles.hideItemStyle, styles.recommendItemStyle, commonStyles.fontSize18]}
        onPress={() => navigateToWeather(item)}
      >
        {RECOMMEND_CITY[item]}
      </Text>
    );
  };

  const recommendCity = () => {
    return (
      <>
        <Text style={[commonStyles.fontSize16, commonStyles.padding10]}>推荐城市</Text>
        <View>
          <FlatList
            refreshing={true}
            horizontal={false}
            numColumns={3}
            columnWrapperStyle={styles.recommendCityContent}
            data={Object.keys(RECOMMEND_CITY)}
            renderItem={renderRecommendItem}
          />
        </View>
      </>
    );
  };

  const onFocus = () => {
    setIsSearch(true);
  };

  return (
    <View style={styles.cardContainer}>
      <TextInput
        inlineImageLeft='search_icon'
        placeholder={"搜索城市（中文/拼音）"}
        style={[styles.inputTextStyle, commonStyles.padding10]}
        onFocus={() => onFocus()}
        onChangeText={text => onChangeText(text)}
      />
      { isSearch && searchCities?.length > 0 ? searchCity() : recommendCity()}
    </View>
  );
};

export default AllCityContainer;
