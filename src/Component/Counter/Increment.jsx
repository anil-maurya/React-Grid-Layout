import React from "react";
import { Button } from "@material-ui/core";

const Increment = React.memo((props) => {
  const { onClick, mode } = props;
  console.log("Increment..");
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color={mode ? "secondary" : "primary"}
    >
      Increment
    </Button>
  );
});

export default Increment;
