import React from "react";
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

interface ITestChart {}

const data = [
  {
    country: "AD",
    "hot dog": 35,
    "hot dogColor": "hsl(78, 70%, 50%)",
    burger: 87,
    burgerColor: "hsl(257, 70%, 50%)",
    sandwich: 185,
    sandwichColor: "hsl(292, 70%, 50%)",
    kebab: 109,
    kebabColor: "hsl(84, 70%, 50%)",
    fries: 186,
    friesColor: "hsl(4, 70%, 50%)",
    donut: 97,
    donutColor: "hsl(192, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 44,
    "hot dogColor": "hsl(179, 70%, 50%)",
    burger: 150,
    burgerColor: "hsl(83, 70%, 50%)",
    sandwich: 6,
    sandwichColor: "hsl(79, 70%, 50%)",
    kebab: 187,
    kebabColor: "hsl(254, 70%, 50%)",
    fries: 146,
    friesColor: "hsl(58, 70%, 50%)",
    donut: 116,
    donutColor: "hsl(125, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 100,
    "hot dogColor": "hsl(178, 70%, 50%)",
    burger: 3,
    burgerColor: "hsl(14, 70%, 50%)",
    sandwich: 92,
    sandwichColor: "hsl(127, 70%, 50%)",
    kebab: 81,
    kebabColor: "hsl(285, 70%, 50%)",
    fries: 67,
    friesColor: "hsl(209, 70%, 50%)",
    donut: 119,
    donutColor: "hsl(346, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 166,
    "hot dogColor": "hsl(160, 70%, 50%)",
    burger: 56,
    burgerColor: "hsl(97, 70%, 50%)",
    sandwich: 119,
    sandwichColor: "hsl(73, 70%, 50%)",
    kebab: 25,
    kebabColor: "hsl(55, 70%, 50%)",
    fries: 35,
    friesColor: "hsl(140, 70%, 50%)",
    donut: 96,
    donutColor: "hsl(237, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 165,
    "hot dogColor": "hsl(328, 70%, 50%)",
    burger: 22,
    burgerColor: "hsl(61, 70%, 50%)",
    sandwich: 151,
    sandwichColor: "hsl(104, 70%, 50%)",
    kebab: 170,
    kebabColor: "hsl(263, 70%, 50%)",
    fries: 66,
    friesColor: "hsl(206, 70%, 50%)",
    donut: 145,
    donutColor: "hsl(124, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 86,
    "hot dogColor": "hsl(40, 70%, 50%)",
    burger: 44,
    burgerColor: "hsl(195, 70%, 50%)",
    sandwich: 3,
    sandwichColor: "hsl(15, 70%, 50%)",
    kebab: 129,
    kebabColor: "hsl(243, 70%, 50%)",
    fries: 33,
    friesColor: "hsl(84, 70%, 50%)",
    donut: 137,
    donutColor: "hsl(233, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 162,
    "hot dogColor": "hsl(317, 70%, 50%)",
    burger: 108,
    burgerColor: "hsl(193, 70%, 50%)",
    sandwich: 161,
    sandwichColor: "hsl(36, 70%, 50%)",
    kebab: 99,
    kebabColor: "hsl(136, 70%, 50%)",
    fries: 148,
    friesColor: "hsl(76, 70%, 50%)",
    donut: 126,
    donutColor: "hsl(292, 70%, 50%)",
  },
];

const MyResponsiveBar: React.FC<ITestChart> = (props) => {
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        minValue={0}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: false }}
        colors={{ scheme: "set3" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        motionConfig="gentle"
        role="application"
        isFocusable={true}
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
        }}
      />
    </div>
  );
};

export default MyResponsiveBar;
