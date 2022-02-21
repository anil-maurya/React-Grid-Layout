import { useState } from "react";

function useForm() {
  const [values, setValues] = useState("");

  const updateValues = (val) => {
    // console.log("Updating values", val);
    setValues(val);
  };
  // console.log({ values });
  return [values, updateValues];
}

export default useForm;
