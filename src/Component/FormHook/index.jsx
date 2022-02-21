import Form from "./Form";
import { useCounter } from "./useCounter";

export default () => {
  const { count, register } = useCounter();
  const { count: count1, register: register1 } = useCounter();

  // const handleClick = () => {
  //   console.log("Clicked");
  // };

  // const onError = () => {
  //   console.log("Error occured");
  // };

  console.log("Demo rerendering...", count, count1);

  return (
    <>
      <div>Count : {count}</div>
      <Form register={register} />
      <Form register={register1} />
    </>
  );
};
