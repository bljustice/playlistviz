const mean = (data, key) => {
  const vals = data.map(x => x[key]);
  const sum = vals.reduce((x, y) => x + y);
  return parseFloat(sum / vals.length).toFixed(3);
}

const convertToSeconds = (timeDuration) => {
  return timeDuration / 1000;
}

const meanTimeDuration = (data, key) => {
  const seconds = convertToSeconds(mean(data, key));
  const minutes = Math.floor(seconds / 60);
  const leftoverSeconds = Math.round(seconds - (minutes * 60)).toString();
  return minutes
    .toString()
    .concat(':', leftoverSeconds);
}

export { mean, meanTimeDuration };
