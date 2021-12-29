import React from "react";
import { Image, Text, View } from "react-native";
import commonStyles from "../../styles/CommonStyles";

const CardTitle = props => {
  const {cardTitleContext} = props;
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={[commonStyles.cardTitle, commonStyles.textColor]}>
        33提醒你
      </Text>
      <Image
        source={require("../../images/heart.png")}
        style={{ width: 20, height: 20, marginTop: 10, marginHorizontal: 4 }}
      />
      <Text style={[commonStyles.cardTitle, commonStyles.textColor]}>
        {cardTitleContext}
      </Text>
    </View>
  );
};

export default CardTitle;
