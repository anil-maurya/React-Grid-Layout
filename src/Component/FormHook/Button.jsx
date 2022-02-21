import { Button } from "@material-ui/core";

export default (props) => {
  const { label = "button", onClick, onError } = props;

  const handleError = () => {
    onError();
  };

  console.log(label, "Button rendering");

  return (
    <Button variant="outlined" onClick={onClick} onError={handleError}>
      {label}
    </Button>
  );
};
