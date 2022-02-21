import { Button, Typography } from "@material-ui/core";
import React from "react";

import useForm from "./useForm";
import BuForm from "../BuForm";
import formJSON, { override } from "./data";

const formId = "a77c6042-ddc9-5e04-81fd-3e7e1ceaa4bb";

const DemoForm = () => {
  const [values] = useForm();

  const handleClick = () => {
    console.log("Submit pressed", values);
  };
  console.log({ values });

  return (
    <div style={{ width: "90vw", margin: "0 auto" }}>
      <BuForm id={formId} fields={formJSON} override={override} />
      <Typography>Form values : {JSON.stringify(values)} </Typography>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Submit
      </Button>
    </div>
  );
};

export default DemoForm;
