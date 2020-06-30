import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export default () => (
	<ResponsiveLine
		data={data}
		margin={{
			"top": 50,
			"right": 110,
			"bottom": 50,
			"left": 60
		}}
		xScale={{
			"type": "point"
		}}
		yScale={{
			"type": "linear",
			"stacked": true,
			"min": "auto",
			"max": "auto"
		}}
		minY="auto"
		maxY="auto"
		stacked={true}
		axisBottom={{
			"orient": "bottom",
			"tickSize": 5,
			"tickPadding": 5,
			"tickRotation": 0,
			"legend": "transportation",
			"legendOffset": 36,
			"legendPosition": "middle"
		}}
		axisLeft={{
			"orient": "left",
			"tickSize": 5,
			"tickPadding": 5,
			"tickRotation": 0,
			"legend": "count",
			"legendOffset": -40,
			"legendPosition": "middle"
		}}
		dotSize={10}
		dotColor="inherit:darker(0.3)"
		dotBorderWidth={2}
		dotBorderColor="#ffffff"
		enableDotLabel={true}
		dotLabel="y"
		dotLabelYOffset={-12}
		animate={true}
		motionStiffness={90}
		motionDamping={15}
		legends={[
			{
				"anchor": "bottom-right",
				"direction": "column",
				"justify": false,
				"translateX": 100,
				"translateY": 0,
				"itemsSpacing": 0,
				"itemDirection": "left-to-right",
				"itemWidth": 80,
				"itemHeight": 20,
				"itemOpacity": 0.75,
				"symbolSize": 12,
				"symbolShape": "circle",
				"symbolBorderColor": "rgba(0, 0, 0, .5)",
				"effects": [
					{
						"on": "hover",
						"style": {
							"itemBackground": "rgba(0, 0, 0, .03)",
							"itemOpacity": 1
						}
					}
				]
			}
		]}
	/>
);

const data = [
	{
		"id": "japan",
		"color": "hsl(214, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 11
			},
			{
				"x": "helicopter",
				"y": 211
			},
			{
				"x": "boat",
				"y": 26
			},
			{
				"x": "train",
				"y": 22
			},
			{
				"x": "subway",
				"y": 94
			},
			{
				"x": "bus",
				"y": 82
			},
			{
				"x": "car",
				"y": 49
			},
			{
				"x": "moto",
				"y": 144
			},
			{
				"x": "bicycle",
				"y": 61
			},
			{
				"x": "others",
				"y": 130
			}
		]
	},
	{
		"id": "france",
		"color": "hsl(285, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 121
			},
			{
				"x": "helicopter",
				"y": 121
			},
			{
				"x": "boat",
				"y": 28
			},
			{
				"x": "train",
				"y": 134
			},
			{
				"x": "subway",
				"y": 190
			},
			{
				"x": "bus",
				"y": 185
			},
			{
				"x": "car",
				"y": 191
			},
			{
				"x": "moto",
				"y": 137
			},
			{
				"x": "bicycle",
				"y": 140
			},
			{
				"x": "others",
				"y": 87
			}
		]
	},
	{
		"id": "us",
		"color": "hsl(114, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 121
			},
			{
				"x": "helicopter",
				"y": 190
			},
			{
				"x": "boat",
				"y": 113
			},
			{
				"x": "train",
				"y": 257
			},
			{
				"x": "subway",
				"y": 231
			},
			{
				"x": "bus",
				"y": 116
			},
			{
				"x": "car",
				"y": 52
			},
			{
				"x": "moto",
				"y": 277
			},
			{
				"x": "bicycle",
				"y": 169
			},
			{
				"x": "others",
				"y": 13
			}
		]
	},
	{
		"id": "germany",
		"color": "hsl(292, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 108
			},
			{
				"x": "helicopter",
				"y": 176
			},
			{
				"x": "boat",
				"y": 181
			},
			{
				"x": "train",
				"y": 189
			},
			{
				"x": "subway",
				"y": 66
			},
			{
				"x": "bus",
				"y": 119
			},
			{
				"x": "car",
				"y": 161
			},
			{
				"x": "moto",
				"y": 282
			},
			{
				"x": "bicycle",
				"y": 202
			},
			{
				"x": "others",
				"y": 136
			}
		]
	},
	{
		"id": "norway",
		"color": "hsl(204, 70%, 50%)",
		"data": [
			{
				"x": "plane",
				"y": 22
			},
			{
				"x": "helicopter",
				"y": 8
			},
			{
				"x": "boat",
				"y": 222
			},
			{
				"x": "train",
				"y": 166
			},
			{
				"x": "subway",
				"y": 25
			},
			{
				"x": "bus",
				"y": 110
			},
			{
				"x": "car",
				"y": 2
			},
			{
				"x": "moto",
				"y": 16
			},
			{
				"x": "bicycle",
				"y": 77
			},
			{
				"x": "others",
				"y": 236
			}
		]
	}
];
