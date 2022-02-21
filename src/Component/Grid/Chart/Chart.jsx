import React from "react";
import { Box } from "@material-ui/core";

const getStyle = (id) => {
  const heights = {
    a: "50px",
    b: "50px",
    c: "100px",
    d: "100px",
    e: "50px"
  };

  return {
    display: "flex",
    flex: 1,
    width: "150px",
    height: heights[id],
    backgroundColor: "pink",
    border: "1px solid gray"
  };
};

const ChartA = React.forwardRef((props, ref) => {
  // const { label } = props;

  return (
    <Box ref={ref} style={getStyle("a")}>
      Chart A
    </Box>
  );
});

const ChartB = React.forwardRef((props, ref) => {
  const { label } = props;

  return (
    <Box ref={ref} style={getStyle("b")}>
      Chart B
    </Box>
  );
});

const ChartC = React.forwardRef((props, ref) => {
  const { label } = props;

  return (
    <Box ref={ref} style={getStyle("c")}>
      Chart C
    </Box>
  );
});

const ChartD = React.forwardRef((props, ref) => {
  const { label } = props;

  return (
    <Box ref={ref} style={getStyle("d")}>
      Chart D
    </Box>
  );
});

const ChartE = React.forwardRef((props, ref) => {
  const { label } = props;

  return (
    <Box ref={ref} style={getStyle("e")}>
      Chart E
    </Box>
  );
});

export { ChartA, ChartB, ChartC, ChartD, ChartE };
