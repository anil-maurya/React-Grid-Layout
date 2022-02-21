import React from "react";
import { Box, TextField, Button } from "@material-ui/core";

function Counter(props, ref) {
  return (
    <Box ref={ref} className="container">
      <TextField label="name" />
      <Button id="one" variant="outlined">
        Increment
      </Button>
      <Button id="two" variant="outlined">
        Decrement
      </Button>
    </Box>
  );
}

export default React.forwardRef(Counter);
