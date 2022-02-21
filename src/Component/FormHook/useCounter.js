import { useState, useCallback } from "react";

const UseForm = (props) => {
  const { children, className } = props;
  // const childrenArray = Children.toArray(children);
  // childrenArray.forEach((child) => {
  //   console.log({ child });
  // });
  return <div className={className}>{children}</div>;
};

const useCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const register = useCallback((id) => {
    const onClick = () => {
      if (id === "one") {
        handleIncrement();
      } else {
        handleDecrement();
      }
    };
    const onError = () => console.log(id, "Error clicked");

    return { onError, onClick };
  }, []);

  // useEffect(() => {
  //   for (var ref in register) {
  //     console.log(register[ref]);
  //   }
  // }, [register]);

  return { count, register, handleIncrement, handleDecrement };
};

export { useCounter };

export default UseForm;
