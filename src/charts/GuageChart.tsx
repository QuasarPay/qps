import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsMore from 'highcharts/highcharts-more';


const options = {
    chart: {
        type: 'solidgauge'
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor:
                '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#DF5353'], // red
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#55BF3B'], // green
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
            y: 16
        },
        min: 0,
        max: 100,
        title: {
            y: -70,
            text: 'Ranking'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Speed',
        data: [90],
        dataLabels: {
            format:
                '<div style="text-align:center;">' +
                '<span style="font-size:25px;">{y}</span><br/>' +
                '<span style="font-size:12px;opacity:0.4">LEVEL XP</span>' +
                '</div>'
        },
        tooltip: {
            valueSuffix: ' km/h'
        }
    }]
}

const GuageChart = () => {
    HighchartsExporting(Highcharts);
    HighchartsMore(Highcharts);
    HighchartsSolidGauge(Highcharts);
    return(
        <Flex mt={-24} zIndex={-1}>
            <HighchartsReact highcharts={Highcharts} options={options}  />
        </Flex>
    )
}

export default GuageChart;