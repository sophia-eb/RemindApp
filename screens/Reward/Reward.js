import React from "react";

import { Image, ScrollView, Text, View } from "react-native";

import styles from "../../styles/WeatherList/WeatherContent";


const RewardArea = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../images/reward/love.png")}
          />
          <Text style={{ paddingVertical: 24 }}>您的支持是更新的动力❤️爱你❤️</Text>
        </View>
        <Image
          source={require("../../images/reward/wechat.jpeg")}
          style={{ width: 240, height: 320, marginVertical: 20 }}
        />
      </View>
    </ScrollView>);
};

export default RewardArea;
