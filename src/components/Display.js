import React from "react";
import { connect } from "react-redux";

import { useTransition, animated } from "react-spring";

function Display(props) {
  const transitions = useTransition(props.display, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { position: 'relative', opacity: 1 },
    leave: { opacity: 1 }
  });
  return transitions.map(({ item, key, props }) => (
    <animated.div style={props} key={key}>
      <h1 className="text-white">{item}</h1>
    </animated.div>
  ));
}
const mapStateToProps = state => {
  return {
    ...state,
    display: state.text.displayText
  };
};

export default connect(
  mapStateToProps,
  null
)(Display);
