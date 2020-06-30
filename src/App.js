import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-resizable/css/styles.css';
import './styles/app.css';

// Hardcoded visualization examples
import Heatmap from './visualizations/heatmap';
import Bar from './visualizations/bar';
import Radar from './visualizations/radar';
import Line from './visualizations/line';

// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive);
// Determines the screen breakpoints for the columns
const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320 };
// How many columns are available at each breakpoint
const cols = { lg: 4, md: 4, sm: 1, xs: 1, xxs: 1 };

function App() {
  return (
    <div className="App">
      <div className="w-full">
        <header className="flex bg-gray-900 m-5 p-5 shadow-lg rounded-lg">
          <h1 className="text-2xl text-teal-400">PB Tech Dashboard</h1>
        </header>

        <ResponsiveGridLayout
          className="my-5 mx-8"
          breakpoints={breakpoints}
          cols={cols}
        >
          <div
            className="grid-cell"
            key="1"
            data-grid={{ x: 0, y: 0, w: 2, h: 3, static: true }}
          >
            <h3 className="grid-header">Daily Community Engagement</h3>
            <Heatmap />
          </div>

          <div
            className="grid-cell"
            key="2"
            data-grid={{ x: 2, y: 0, w: 2, h: 3 }}
          >
            <h3 className="grid-header">Members' Favorite Food</h3>
            <Bar />
          </div>
          <div
            className="grid-cell"
            key="3"
            data-grid={{ x: 0, y: 3, w: 1, h: 2 }}
          >
            <h3 className="grid-header">Members' Favorite Drinks</h3>
            <Radar />
          </div>
          <div
            className="grid-cell"
            key="4"
            data-grid={{ x: 2, y: 3, w: 3, h: 2 }}
          >
            <h3 className="grid-header">Members' Favorite Transportion</h3>
            <Line />
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
}

export default App;
