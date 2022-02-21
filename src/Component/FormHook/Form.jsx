import React from "react";
import { Box } from "@material-ui/core";
import Button from "./Button";

function Form(props) {
  const { register } = props;

  console.log("Form rendering");
  return (
    <Box className="container">
      <Button label="Increment" {...register("one")} />
      <Button label="Decrement" {...register("two")} />
    </Box>
  );
}

export default React.memo(Form);
