import React, { useEffect, useState } from "react";

import { FlatList, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

import { RECOMMEND_CITY, ROUTES } from "../../../Constants";
import { setCurrentCity, setCurrentCityList } from "../../actions";
import styles from "../../styles/City/AllCityContainer";
import commonStyles from "../../styles/CommonStyles";
import { getCityList } from "../../utils/apiUtils";
// import { getLocationName } from "../../utils/getLocationName";


const AllCityContainer = props => {
  const { navigation } = props;
  const [isSearch, setIsSearch] = useState(false);
  const [searchCities, setSearchCities] = React.useState([]);

  const cityList = useSelector(state => state.cityList);

  useEffect(() => {
    getCityList().then();
  }, []);

  const navigateToWeather = async (cityId) => {
    const isSelected = cityList.indexOf(cityId);
    if (isSelected !== -1) return;
    cityList.push(cityId);
    await setCurrentCity(cityList[0]);
    await setCurrentCityList(cityList);
    navigation.navigate(
      ROUTES.WEATHER_LIST,
      {
        cityId: cityId,
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
    const isSelected = cityList.indexOf(item);
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
      {/*<TextInput*/}
      {/*  inlineImageLeft='search_icon'*/}
      {/*  placeholder={"搜索城市（中文/拼音）"}*/}
      {/*  style={[styles.inputTextStyle, commonStyles.padding10]}*/}
      {/*  onFocus={() => onFocus()}*/}
      {/*  onChangeText={text => onChangeText(text)}*/}
      {/*/>*/}
      { isSearch && searchCities?.length > 0 ? searchCity() : recommendCity()}
    </View>
  );
};

AllCityContainer.propTypes = {
  navigation: () => {},
};

export default AllCityContainer;
