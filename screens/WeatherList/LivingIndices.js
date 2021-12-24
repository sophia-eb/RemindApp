import React, { useEffect, useState } from "react";
import styles from "../../styles/WeatherList/WeatherListStyles";
import { FlatList, Image, Text, View } from "react-native";
import { getLivingIndices } from "../../utils/apiUtils";

const LivingIndices = () => {
  // const defaultLiving = [{"date":"2021-12-23","type":"1","name":"运动指数","level":"2","category":"较适宜","text":"天气较好，但考虑风力较强且气温较低，推荐您进行室内运动，若在户外运动注意防风并适当增减衣物。"},{"date":"2021-12-23","type":"2","name":"洗车指数","level":"2","category":"较适宜","text":"较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"},{"date":"2021-12-23","type":"3","name":"穿衣指数","level":"3","category":"较冷","text":"建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。"},{"date":"2021-12-23","type":"4","name":"钓鱼指数","level":"2","category":"较适宜","text":"较适合垂钓，但风力稍大，会对垂钓产生一定的影响。"},{"date":"2021-12-23","type":"5","name":"紫外线指数","level":"2","category":"弱","text":"紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。"},{"date":"2021-12-23","type":"6","name":"旅游指数","level":"1","category":"适宜","text":"天气较好，温度适宜，但风稍微有点大。这样的天气适宜旅游，您可以尽情地享受大自然的无限风光。"},{"date":"2021-12-23","type":"7","name":"过敏指数","level":"1","category":"极不易发","text":"天气条件极不易诱发过敏，可放心外出，享受生活。"},{"date":"2021-12-23","type":"8","name":"舒适度指数","level":"1","category":"舒适","text":"白天不太热也不太冷，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。"},{"date":"2021-12-23","type":"9","name":"感冒指数","level":"2","category":"较易发","text":"天凉，昼夜温差较大，较易发生感冒，请适当增减衣服，体质较弱的朋友请注意适当防护。"},{"date":"2021-12-23","type":"10","name":"空气污染扩散条件指数","level":"2","category":"良","text":"气象条件有利于空气污染物稀释、扩散和清除，可在室外正常活动。"},{"date":"2021-12-23","type":"11","name":"空调开启指数","level":"3","category":"较少开启","text":"您将感到很舒适，一般不需要开启空调。"},{"date":"2021-12-23","type":"12","name":"太阳镜指数","level":"2","category":"需要","text":"白天根据户外光线情况，适时佩戴太阳镜"},{"date":"2021-12-23","type":"13","name":"化妆指数","level":"1","category":"保湿","text":"风力不大，建议用中性保湿型霜类化妆品，无需选用防晒化妆品。"},{"date":"2021-12-23","type":"14","name":"晾晒指数","level":"2","category":"适宜","text":"天气不错，较适宜晾晒,赶紧把久未见阳光的衣物搬出来吸收一下太阳的味道吧！"},{"date":"2021-12-23","type":"15","name":"交通指数","level":"1","category":"良好","text":"天气较好，路面干燥，交通气象条件良好，车辆可以正常行驶。"},{"date":"2021-12-23","type":"16","name":"防晒指数","level":"2","category":"较弱","text":"紫外线强度较弱，建议涂擦SPF在12-15之间，PA+的防晒护肤品。"}];
  const defaultLiving = [{"date":"2021-12-24","type":"1","name":"运动指数","level":"3","category":"较不宜","text":"有降水，且天气寒冷，风力极强，推荐您在室内进行低强度运动；若坚持户外运动，请选择合适的运动并注意保暖。"},{"date":"2021-12-24","type":"3","name":"穿衣指数","level":"3","category":"较冷","text":"建议着厚外套加毛衣等服装。年老体弱者宜着大衣、呢外套加羊毛衫。"},{"date":"2021-12-24","type":"5","name":"紫外线指数","level":"1","category":"最弱","text":"属弱紫外线辐射天气，无需特别防护。若长期在户外，建议涂擦SPF在8-12之间的防晒护肤品。"},{"date":"2021-12-24","type":"8","name":"舒适度指数","level":"2","category":"较舒适","text":"白天有少量雨，风力较强，这种天气条件下，人们会感到有些凉意，但大部分人完全可以接受。"},{"date":"2021-12-24","type":"9","name":"感冒指数","level":"3","category":"易发","text":"天冷风大且昼夜温差也很大，易发生感冒，请注意适当增减衣服。"},{"date":"2021-12-24","type":"11","name":"空调开启指数","level":"3","category":"较少开启","text":"您将感到很舒适，一般不需要开启空调。"}];
  const [livingIndices, setLivingIndices] = useState(defaultLiving);

  useEffect(() => {
    getLivingIndices().then(res => {
      if (res.data.code === "200") {
        setLivingIndices(res.data.daily);
      }
    });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.wrapView} key={item.name}>
      <Text style={styles.wrapTextName}>
        {item.name}
      </Text>
      <Text style={styles.wrapText}>
        {item.category}
      </Text>
    </View>
  );

  const renderList = () => {
    let data = [];
    let dataDump = [];
    return livingIndices.map((indicesItem, index) => {
      dataDump.push(indicesItem);
      data = dataDump;
      if ((index + 1) % 3 === 0) {
        dataDump = [];
        return (<FlatList
          horizontal={true}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.type}
          key={indicesItem.type}
        />);
      } else {
        return (<View key={indicesItem.type}/>);
      }
    });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.cardTitle}>
          33提醒你
        </Text>
        <Image
          source={require("../../images/heart.png")}
          style={{ width: 20, height: 20, marginTop: 6, marginHorizontal: 4 }}
        />
        <Text style={styles.cardTitle}>
          生活指数
        </Text>
      </View>
      <View>
        { renderList() }
      </View>
    </View>
  );
};

export default LivingIndices;
