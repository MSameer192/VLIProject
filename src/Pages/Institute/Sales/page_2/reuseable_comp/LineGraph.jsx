import { ResponsiveLine } from "@nivo/line";
import React from "react";

function LineChart(props) {
  const {
    max,
    gridYValues,
    pointColor,
    data,
    enableArea,
    enableGridY,
    borderColor,
  } = props;
  return (
    <ResponsiveLine
      theme={{
        axis: {
          domain: {
            line: {
              stroke: borderColor && "#aaa",
            },
          },
        },
      }}
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 0,
        max: max,
        stacked: false,
        reverse: false,
      }}
      yFormat=">-.5"
      gridYValues={gridYValues}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 0,
        tickPadding: 15,
        tickRotation: 0,
      }}
      enableGridX={false}
      enableGridY={enableGridY}
      pointSize={7}
      pointColor={pointColor}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      isInteractive={true}
      enableArea={enableArea}
      useMesh={true}
    />
  );
}

export default LineChart;
