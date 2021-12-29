import React from "react";
import weatherListStyles from "../../styles/WeatherList/WeatherListStyles";
import styles from "../../styles/WeatherList/ProfessionalInfoStyles";
import commonStyles from "../../styles/CommonStyles";
import { Image, Text, View } from "react-native";
import CardTitle from "./CardTitle";

const ProfessionalInfo = props => {
  const { weatherInfoNow } = props;

  return (
    <View style={commonStyles.cardContainer}>
      <CardTitle cardTitleContext={"专业数据"}/>
      <View style={[weatherListStyles.wrapContainer, commonStyles.height54]}>
        <View style={styles.iconView}>
          <Image
            source={require("../../images/professional-info/atmospheric-pressure.png")}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.wrapView}>
          <Text style={commonStyles.fontSize14}>
            大气压强
          </Text>
          <Text style={[commonStyles.fontSize16, commonStyles.textColorBlue]}>
            {weatherInfoNow.pressure} hPa
          </Text>
        </View>
        <View style={styles.iconView}>
          <Image
            source={require("../../images/professional-info/visibility.png")}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.wrapView}>
          <Text style={commonStyles.fontSize14}>
            能见度
          </Text>
          <Text style={[commonStyles.fontSize16, commonStyles.textColorBlue]}>
            {weatherInfoNow.vis} km
          </Text>
        </View>
      </View>
      <View style={styles.wrapContainer}>
        <View style={styles.iconView}>
          <Image
            source={require("../../images/professional-info/cloud.png")}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.wrapView}>
          <Text style={commonStyles.fontSize14}>
            云量
          </Text>
          <Text style={[commonStyles.fontSize16, commonStyles.textColorBlue]}>
            {weatherInfoNow.cloud} %
          </Text>
        </View>
        <View style={styles.iconView}>
          <Image
            source={require("../../images/professional-info/dew-point.png")}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.wrapView}>
          <Text style={commonStyles.fontSize14}>
            露点温度
          </Text>
          <Text style={[commonStyles.fontSize16, commonStyles.textColorBlue]}>
            {weatherInfoNow.dew}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfessionalInfo;
