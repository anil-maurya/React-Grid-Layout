import React from "react";
import { Box, Button, Switch } from "@material-ui/core";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Bio from "./Bio";
import useCounter from "./useCounter";

function Counter() {
  const [isDark, setIsDark] = React.useState(false);
  const { counter, increment, decrement } = useCounter();
  const bioRef = React.useRef(null);

  const handleSwitch = () => {
    // setIsDark((prevState) => !prevState);
    console.log(bioRef.current.handleClick);
  };

  return (
    <Box style={{ height: "80vh", backgroundColor: isDark ? "gray" : "#FFF" }}>
      <Switch value={isDark} onChange={handleSwitch} />
      <Box>Count : {counter}</Box>
      <Bio mode={isDark} ref={bioRef} />
      <Decrement onClick={decrement} mode={isDark} />
      <Increment onClick={increment} mode={isDark} />
    </Box>
  );
}

export default Counter;
