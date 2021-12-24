import React from "react";
import commonStyles from "../../styles/WeatherList/WeatherListStyles";
import styles from "../../styles/WeatherList/ProfessionalInfoStyles";
import { Text, View } from "react-native";

const ProfessionalInfo = props => {
  const { weatherInfoNow } = props;

  return (
    <View style={commonStyles.cardContainer}>
      <Text style={commonStyles.cardTitle}>
        专业数据
      </Text>
      <View style={styles.wrapContainer}>
        <View style={styles.wrapView}>
          <Text style={commonStyles.wrapTextName}>
            大气压强
          </Text>
          <Text style={styles.wrapText}>
            {weatherInfoNow.pressure} hPa
          </Text>
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
        <View style={styles.wrapView}>
          <Text style={commonStyles.wrapTextName}>
            云量
          </Text>
          <Text style={styles.wrapText}>
            {weatherInfoNow.cloud} %
          </Text>
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
