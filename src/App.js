import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Display from "./components/Display";
import InputSection from "./components/InputSection";

import { useSpring, animated } from "react-spring";

function App() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  });
  return (
    <Provider store={store}>
      <animated.div
        style={{
          ...props,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingBottom: "4rem"
        }}
      >
        <Display />
        <InputSection />
      </animated.div>
    </Provider>
  );
}

export default App;
