import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "Daily",
    uv: 11.47,
    pv: 3400,
    fill: "#8884d8"
  },
  {
    name: "Monthly",
    uv: 15.69,
    pv: 4398,
    fill: "#8dd1e1"
  },
  {
    name: "Yearly",
    uv: 6.67,
    pv: 4900,
    fill: "#ffc658"
  }
];

const style = {
  lineHeight: "24px",
  left: 0,
  marginTop: "-65px"
};

export default function RadialChart() {
  return (
    <Flex direction="column" w="350px" h="170px" bg="white" mt={4} borderRadius="md" px={4} py={2}>
        <Text mb={2}>
            Account Limits
        </Text>
        <RadialBarChart
        width={500}
        height={200}
        cx={220}
        cy={60}
        innerRadius={15}
        outerRadius={70}
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
            height={40}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
        />
        </RadialBarChart>
    </Flex>
  );
}
