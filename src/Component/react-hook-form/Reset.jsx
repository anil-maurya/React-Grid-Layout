import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {};

  // useEffect(
  //   async () => {
  //   const result = await fetch("./api/formValues.json");
  //   reset(result);
  // }, [reset]);
  console.log(register);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName")} />
      <input
        type="button"
        onClick={() => reset({ firstName: "Bill" })}
        value="Reset"
      />

      <input
        type="button"
        value="Reset 1"
        onClick={() => {
          reset(
            {
              firstName: "bill"
            },
            {
              keepErrors: true,
              keepDirty: true,
              keepIsSubmitted: false,
              keepTouched: false,
              keepIsValid: false,
              keepSubmitCount: false
            }
          );
        }}
      />
    </form>
  );
}
