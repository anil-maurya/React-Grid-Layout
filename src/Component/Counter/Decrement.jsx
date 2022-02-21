import React from "react";
import { Button } from "@material-ui/core";

const Decrement = React.memo((props) => {
  const { onClick, mode } = props;
  console.log("Decrement..");
  return (
    <Button
      onClick={onClick}
      variant="contained"
      color={mode ? "secondary" : "primary"}
    >
      Decrement
    </Button>
  );
});

export default Decrement;
