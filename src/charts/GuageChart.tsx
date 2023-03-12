import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsMore from 'highcharts/highcharts-more';


const options = {
    chart: {
        type: 'solidgauge',
        height: '45%',
    },

    title: {
        text: 'Spending Limits',
        style: {
            fontSize: '24px'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    tooltip: {
        chart: {
            chartWidth: 500,
            plotHeight: 300
          },
        borderWidth: 0,
        backgroundColor: 'none',
        padding: 25,
        shadow: false,
        style: {
            fontSize: '16px',
        },
        valueSuffix: '%',
        pointFormat: '{series.name}<br><span style="font-size:1em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner(labelWidth: number): Highcharts.PositionObject {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 15
            };
        }
    },
    
    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ 
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: '#FF000030',
            borderWidth: 0
        }, { 
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: '#FFD00030',
            borderWidth: 0
        }, { 
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: '#0A163030',
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Daily',
        data: [{
            color: '#FF0000',
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }]
    }, {
        name: 'Weekly',
        data: [{
            color: '#FFD000',
            radius: '87%',
            innerRadius: '63%',
            y: 65
        }]
    }, {
        name: 'Yearly',
        data: [{
            color: '#0A1630',
            radius: '62%',
            innerRadius: '38%',
            y: 50
        }]
    }]
}

const GuageChart = () => {
    HighchartsExporting(Highcharts);
    HighchartsMore(Highcharts);
    HighchartsSolidGauge(Highcharts);
    return(
        <Flex mt={4}>
            <HighchartsReact highcharts={Highcharts} options={options}  />
        </Flex>
    )
}

export default GuageChart;