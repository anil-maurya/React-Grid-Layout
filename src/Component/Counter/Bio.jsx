import { Box, Button } from "@material-ui/core";
import React from "react";

const Bio = React.forwardRef((props, ref) => {
  const { mode } = props;

  const handleClick = () => {
    console.log("Clicked ...");
  };
  return (
    <Box
      ref={ref}
      style={{
        height: 200,
        width: "100%",
        backgroundColor: mode ? "gray" : "#fff"
      }}
    >
      {" "}
      This is our bio
      <Button mode={mode} variant="contained">
        {" "}
        Edit Bio
      </Button>
    </Box>
  );
});

export default Bio;
