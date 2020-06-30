import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

export default () => (
	<ResponsiveRadar
		data={data}
		keys={[
			"chardonay",
			"carmenere",
			"syrah"
		]}
		indexBy="taste"
		maxValue="auto"
		margin={{
			"top": 70,
			"right": 80,
			"bottom": 40,
			"left": 80
		}}
		curve="catmullRomClosed"
		borderWidth={2}
		borderColor="inherit"
		gridLevels={5}
		gridShape="circular"
		gridLabelOffset={36}
		enableDots={true}
		dotSize={8}
		dotColor="inherit"
		dotBorderWidth={0}
		dotBorderColor="#ffffff"
		enableDotLabel={true}
		dotLabel="value"
		dotLabelYOffset={-12}
		colors="nivo"
		colorBy="key"
		fillOpacity={0.1}
		animate={true}
		motionStiffness={90}
		motionDamping={15}
		isInteractive={true}
		legends={[
			{
				"anchor": "top-left",
				"direction": "column",
				"translateX": -50,
				"translateY": -40,
				"itemWidth": 80,
				"itemHeight": 20,
				"itemTextColor": "#999",
				"symbolSize": 12,
				"symbolShape": "circle",
				"effects": [
					{
						"on": "hover",
						"style": {
							"itemTextColor": "#000"
						}
					}
				]
			}
		]}
	/>
);

const data = [
	{
		"taste": "fruity",
		"chardonay": 64,
		"carmenere": 72,
		"syrah": 38
	},
	{
		"taste": "bitter",
		"chardonay": 110,
		"carmenere": 59,
		"syrah": 78
	},
	{
		"taste": "heavy",
		"chardonay": 69,
		"carmenere": 87,
		"syrah": 105
	},
	{
		"taste": "strong",
		"chardonay": 97,
		"carmenere": 84,
		"syrah": 105
	},
	{
		"taste": "sunny",
		"chardonay": 94,
		"carmenere": 102,
		"syrah": 117
	}
];
