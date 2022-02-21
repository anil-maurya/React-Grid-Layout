import { useState } from "react";

import { Box, TextField } from "@material-ui/core";
import useForm from "./useForm";

const BuTextField = (props) => {
  const {
    label,
    value: _value = "",
    error: _error = _value.length < 1,
    onError = () => {},
    onChange = () => {}
  } = props;

  const [text, setText] = useState(_value);
  const [error, setError] = useState(_error);

  const handleError = (err) => {
    if (error !== err) {
      setError(err);
      onError(err);
    }
  };

  const handleText = (e) => {
    const value = e.target.value;
    setText(value);
    onChange(value);
    if (value.length < 1) {
      handleError(true);
    } else {
      handleError(false);
    }
  };

  // useEffect(() => console.log("textUpdated"), []);

  return (
    <TextField
      label={label}
      value={text}
      onChange={handleText}
      error={error}
      required
    />
  );
};

const FormField = (props) => {
  const { id, label } = props;

  const [, updateValues] = useForm();

  const handleChange = (value) => {
    // console.log({ value });
    updateValues(value);
  };

  const handleError = (err) => console.log(err);
  return (
    <Box>
      <BuTextField
        onChange={handleChange}
        label={label}
        onError={handleError}
      />
    </Box>
  );
};

const BuForm = (props) => {
  const { fields } = props;
  return (
    <Box>
      {fields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}
    </Box>
  );
};

export default BuForm;
