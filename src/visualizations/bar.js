import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export default () => (
	<ResponsiveBar
		data={data}
		keys={[
			"hot dog",
			"burger",
			"sandwich",
			"kebab",
			"fries",
			"donut"
		]}
		indexBy="country"
		margin={{
			"top": 10,
			"right": 10,
			"bottom": 50,
			"left": 10
		}}
		padding={0.3}
		colors="nivo"
		colorBy="id"
		defs={[
			{
				"id": "dots",
				"type": "patternDots",
				"background": "inherit",
				"color": "#38bcb2",
				"size": 4,
				"padding": 1,
				"stagger": true
			},
			{
				"id": "lines",
				"type": "patternLines",
				"background": "inherit",
				"color": "#eed312",
				"rotation": -45,
				"lineWidth": 6,
				"spacing": 10
			}
		]}
		fill={[
			{
				"match": {
					"id": "fries"
				},
				"id": "dots"
			},
			{
				"match": {
					"id": "sandwich"
				},
				"id": "lines"
			}
		]}
		borderColor="inherit:darker(1.6)"
		axisBottom={{
			"tickSize": 5,
			"tickPadding": 5,
			"tickRotation": 0,
			"legend": "country",
			"legendPosition": "middle",
			"legendOffset": 32
		}}
		axisLeft={{
			"tickSize": 5,
			"tickPadding": 5,
			"tickRotation": 0,
			"legend": "food",
			"legendPosition": "middle",
			"legendOffset": -40
		}}
		labelSkipWidth={12}
		labelSkipHeight={12}
		labelTextColor="inherit:darker(1.6)"
		animate={true}
		motionStiffness={90}
		motionDamping={15}
	/>
);

const data = [
	{
		"country": "AD",
		"hot dog": 0,
		"hot dogColor": "hsl(312, 70%, 50%)",
		"burger": 128,
		"burgerColor": "hsl(208, 70%, 50%)",
		"sandwich": 67,
		"sandwichColor": "hsl(100, 70%, 50%)",
		"kebab": 185,
		"kebabColor": "hsl(114, 70%, 50%)",
		"fries": 179,
		"friesColor": "hsl(56, 70%, 50%)",
		"donut": 190,
		"donutColor": "hsl(354, 70%, 50%)"
	},
	{
		"country": "AE",
		"hot dog": 16,
		"hot dogColor": "hsl(113, 70%, 50%)",
		"burger": 78,
		"burgerColor": "hsl(121, 70%, 50%)",
		"sandwich": 145,
		"sandwichColor": "hsl(355, 70%, 50%)",
		"kebab": 101,
		"kebabColor": "hsl(113, 70%, 50%)",
		"fries": 178,
		"friesColor": "hsl(243, 70%, 50%)",
		"donut": 134,
		"donutColor": "hsl(86, 70%, 50%)"
	},
	{
		"country": "AF",
		"hot dog": 21,
		"hot dogColor": "hsl(68, 70%, 50%)",
		"burger": 170,
		"burgerColor": "hsl(296, 70%, 50%)",
		"sandwich": 154,
		"sandwichColor": "hsl(19, 70%, 50%)",
		"kebab": 8,
		"kebabColor": "hsl(301, 70%, 50%)",
		"fries": 77,
		"friesColor": "hsl(91, 70%, 50%)",
		"donut": 105,
		"donutColor": "hsl(68, 70%, 50%)"
	},
	{
		"country": "AG",
		"hot dog": 104,
		"hot dogColor": "hsl(141, 70%, 50%)",
		"burger": 192,
		"burgerColor": "hsl(121, 70%, 50%)",
		"sandwich": 151,
		"sandwichColor": "hsl(67, 70%, 50%)",
		"kebab": 200,
		"kebabColor": "hsl(149, 70%, 50%)",
		"fries": 174,
		"friesColor": "hsl(132, 70%, 50%)",
		"donut": 24,
		"donutColor": "hsl(96, 70%, 50%)"
	},
	{
		"country": "AI",
		"hot dog": 103,
		"hot dogColor": "hsl(66, 70%, 50%)",
		"burger": 169,
		"burgerColor": "hsl(212, 70%, 50%)",
		"sandwich": 149,
		"sandwichColor": "hsl(190, 70%, 50%)",
		"kebab": 162,
		"kebabColor": "hsl(142, 70%, 50%)",
		"fries": 51,
		"friesColor": "hsl(210, 70%, 50%)",
		"donut": 69,
		"donutColor": "hsl(222, 70%, 50%)"
	},
	{
		"country": "AL",
		"hot dog": 136,
		"hot dogColor": "hsl(47, 70%, 50%)",
		"burger": 139,
		"burgerColor": "hsl(200, 70%, 50%)",
		"sandwich": 138,
		"sandwichColor": "hsl(167, 70%, 50%)",
		"kebab": 147,
		"kebabColor": "hsl(329, 70%, 50%)",
		"fries": 29,
		"friesColor": "hsl(201, 70%, 50%)",
		"donut": 156,
		"donutColor": "hsl(41, 70%, 50%)"
	},
	{
		"country": "AM",
		"hot dog": 37,
		"hot dogColor": "hsl(49, 70%, 50%)",
		"burger": 9,
		"burgerColor": "hsl(235, 70%, 50%)",
		"sandwich": 108,
		"sandwichColor": "hsl(225, 70%, 50%)",
		"kebab": 160,
		"kebabColor": "hsl(324, 70%, 50%)",
		"fries": 170,
		"friesColor": "hsl(0, 70%, 50%)",
		"donut": 126,
		"donutColor": "hsl(199, 70%, 50%)"
	}
];