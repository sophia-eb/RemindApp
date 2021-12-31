import React from "react";

import { Image, Text, View } from "react-native";

import commonStyles from "../../../styles/CommonStyles";
import styles from "../../../styles/WeatherList/WeatherContainer";


const CardTitle = props => {
  const {cardTitleContext} = props;
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={[commonStyles.fontSize18, commonStyles.cardTitle, commonStyles.textColor]}>
        33提醒你
      </Text>
      <Image
        source={require("../../../../images/heart.png")}
        style={styles.cardTitleImg}
      />
      <Text style={[commonStyles.fontSize18, commonStyles.cardTitle, commonStyles.textColor]}>
        {cardTitleContext}
      </Text>
    </View>
  );
};

export default CardTitle;
