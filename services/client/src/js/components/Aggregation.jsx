import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHashtag, faTachometerAlt, faSmile, faFrown } from '@fortawesome/free-solid-svg-icons';

const Aggregation = (props) => {
    if (!props.data.length) {
      return <div></div>;
    }
    if (props.func === 'count') {
      return (
        <div id={"aggregation-".concat(props.dataKey)}>
          <FontAwesomeIcon icon={faHashtag} size="3x" />
          <h3 id="metric-title">{props.description}</h3>
          <h4>{props.data.length}</h4>
        </div>
      );
    } else if (props.dataKey === 'tempo') {
      return (
        <div id={"aggregation-".concat(props.dataKey)}>
          <FontAwesomeIcon icon={faTachometerAlt} size="3x" />
          <h3 id="metric-title">{props.description}</h3>
          <h4>{props.func(props.data, props.dataKey)}</h4>
        </div>
      );
    } else if (props.dataKey === 'valence') {
      const valenceScore = props.func(props.data, props.dataKey);
      if (valenceScore > 0.5) {
        return (
          <div id={"aggregation-".concat(props.dataKey)}>
            <FontAwesomeIcon icon={faSmile} size="3x" />
            <h3 id="metric-title">{props.description}</h3>
            <h4>{valenceScore}</h4>
          </div>
        );
      }
      return (
        <div id={"aggregation-".concat(props.dataKey)}>
          <FontAwesomeIcon icon={faFrown} size="3x" />
          <h3 id="metric-title">{props.description}</h3>
          <h4>{valenceScore}</h4>
        </div>
      );
    }
    return (
      <div id={"aggregation-".concat(props.dataKey)}>
        <FontAwesomeIcon icon={faClock} size="3x" />
        <h3 id="metric-title">{props.description}</h3>
        <h4>{props.func(props.data, props.dataKey)}</h4>
      </div>
    );
}

export default Aggregation;
