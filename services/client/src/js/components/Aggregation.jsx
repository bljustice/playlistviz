import React from 'react';

const Aggregation = (props) => {
    if (!props.data.length) {
      return <div></div>;
    }
    if (props.func === 'count') {
      return (
        <div id={"aggregation-".concat(props.dataKey)}>
          <h3>{props.description}</h3>
          <h4>{props.data.length}</h4>
        </div>
      );
    }
    return (
      <div id={"aggregation-".concat(props.dataKey)}>
        <h3>{props.description}</h3>
        <h4>{props.func(props.data, props.dataKey)}</h4>
      </div>
    );
}

export default Aggregation;
