import React from "react";
import commonStyles from "../../styles/WeatherList/WeatherListStyles";
import styles from "../../styles/WeatherList/ProfessionalInfoStyles";
import { Image, Text, View } from "react-native";

const ProfessionalInfo = props => {
  const { weatherInfoNow } = props;

  return (
    <View style={commonStyles.cardContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={commonStyles.cardTitle}>
          33提醒你
        </Text>
        <Image
          source={require("../../images/heart.png")}
          style={{ width: 20, height: 20, marginTop: 10, marginHorizontal: 4 }}
        />
        <Text style={commonStyles.cardTitle}>
          专业数据
        </Text>
      </View>
      <View style={styles.wrapContainer}>
        <View style={styles.iconView}>
          <Image
            source={require("../../images/professional-info/atmospheric-pressure.png")}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.wrapView}>
          <Text style={commonStyles.wrapTextName}>
            大气压强
          </Text>
          <Text style={styles.wrapText}>
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
          <Text style={commonStyles.wrapTextName}>
            能见度
          </Text>
          <Text style={styles.wrapText}>
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
          <Text style={commonStyles.wrapTextName}>
            云量
          </Text>
          <Text style={styles.wrapText}>
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
          <Text style={commonStyles.wrapTextName}>
            露点温度
          </Text>
          <Text style={styles.wrapText}>
            {weatherInfoNow.dew}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfessionalInfo;
