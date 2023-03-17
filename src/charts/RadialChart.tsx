import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "Daily",
    uv: 8.66,
    pv: 2400,
    fill: "#8884d8"
  },
  {
    name: "Weekly",
    uv: 15.69,
    pv: 1200,
    fill: "#8dd1e1"
  },
  {
    name: "Monthly",
    uv: 6.29,
    pv: 600,
    fill: "#ffc658"
  }
];

const style = {
  lineHeight: "24px",
  left: 0,
  marginTop: "-55px"
};



export default function RadialChart() {
  return (
    <Flex direction="column" w="320px" h="165px" bg="white" mt={4} borderRadius="md" px={4} py={2}>
        <Text mb={2} fontWeight={600}>
            Account Limits
        </Text>
        <RadialBarChart
        width={450}
        height={130}
        cx={220}
        cy={50}
        innerRadius={15}
        outerRadius={60}
        barSize={8}
        data={data}
        >
        <RadialBar
            background
            dataKey="pv"
        />
        <Legend
            iconSize={10}
            width={100}
            height={1}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
        />
        </RadialBarChart>
    </Flex>
  );
}