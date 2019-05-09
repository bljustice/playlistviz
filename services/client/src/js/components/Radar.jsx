import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { mean } from '../utils'

const makeRadarData = (data) => {
  const metrics = [
    'acousticness',
    'danceability',
    'instrumentalness',
    'liveness',
    'speechiness'
  ];
  return metrics.map(x =>({
    'playlist': mean(data, x),
    'metric': x
  }));
}

const Radar = (props) => {
  if (!props.data.length) {
    return <div></div>;
  }
  return (
    <div id='radar-chart-container'>
      <h3>Audio Features</h3>
      <ResponsiveRadar
        data={makeRadarData(props.data)}
        colors="#8f71ff"
        keys={['playlist']}
        indexBy="metric"
        maxValue="auto"
        margin={{
          "top": 70,
          "right": 80,
          "bottom": 60,
          "left": 80
        }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{
          "from": "color"
        }}
        gridLevels={1}
        gridShape="circular"
        gridLabelOffset={15}
        enableDots={true}
        dotSize={10}
        dotColor={{
          "theme": "background"
        }}
        dotBorderWidth={2}
        dotBorderColor={{
          "from": "color"
        }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        fillOpacity={0.60}
        blendMode="multiply"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
      />
    </div>
  );
}

export default Radar;
