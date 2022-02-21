import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: "red",
    gap: "2px"
  },
  item: {
    height: "20px",
    width: "20px",
    border: "1px solid black"
  }
});

function SingleLayout() {
  const classes = useStyles();

  return (
    <Box>
      <Grid container className={classes.container} xs={6}>
        <Grid item className={classes.item}>
          A
        </Grid>
        <Grid item className={classes.item}>
          B
        </Grid>
        <Grid item className={classes.item}>
          C
        </Grid>
      </Grid>
    </Box>
  );
}

export default SingleLayout;
