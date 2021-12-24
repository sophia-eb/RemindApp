import React from "react";
import { VictoryChart, VictoryLine, VictoryScatter, VictoryTheme } from "victory-native";


const CustomChart = props => {
  const { data } = props;
  return (
    <VictoryChart
      width={400}
      height={200}
      domainPadding={{x: 10, y: 10}}
      >
      {data[0]?.temp &&
        <VictoryLine
          data={data} x="hour" y="temp"
          style={{ data: { stroke: "#4fd6f7", strokeWidth: 2, strokeLinecap: "round" } }}
        />
      }
      {data[0]?.temp &&
        <VictoryScatter
          data={data}
          x="hour"
          y="temp"
          style={{ data: { fill: "#0583d2" } }}
          size={3}
        />
      }
      {data[0]?.maxTemp &&
        <VictoryLine
          data={data} x="hour" y="maxTemp"
          style={{ data: { stroke: "#0583d2", strokeWidth: 2, strokeLinecap: "round" } }}
        />
      }
      {data[0]?.maxTemp &&
        <VictoryScatter
          data={data}
          x="hour"
          y="maxTemp"
          style={{ data: { fill: "#0583d2" } }}
          size={3}
        />
      }
      {data[0]?.minTemp &&
        <VictoryLine
          data={data} x="hour" y="minTemp"
          style={{ data: { stroke: "#4fd6f7", strokeWidth: 2, strokeLinecap: "round" } }}
        />
      }
      {data[0]?.minTemp &&
        <VictoryScatter
          data={data}
          x="hour"
          y="minTemp"
          style={{ data: { fill: "#4fd6f7" } }}
          size={3}
        />
      }
    </VictoryChart>
  );
};

export default CustomChart;
