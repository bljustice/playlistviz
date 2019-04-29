import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

const mean = (data, key) => {
  const vals = data.map(x => x[key]);
  const sum = vals.reduce((x, y) => x + y);
  return parseFloat(sum / vals.length).toFixed(3);
}

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
    return <div></div>
  }
  return (
    <ResponsiveRadar
      data={makeRadarData(props.data)}
      keys={['playlist']}
      indexBy="metric"
      maxValue="auto"
      margin={{
        "top": 70,
        "right": 80,
        "bottom": 40,
        "left": 80
      }}
      curve="linearClosed"
      borderWidth={2}
      borderColor={{
        "from": "color"
      }}
      gridLevels={1}
      gridShape="circular"
      gridLabelOffset={36}
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
      colors={{
        "scheme": "nivo"
      }}
      fillOpacity={0.25}
      blendMode="multiply"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
    />
  );
}

export default Radar;
