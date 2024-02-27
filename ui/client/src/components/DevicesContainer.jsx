import Grid from "@mui/material/Grid";

export default function DevicesContainer(props) {
  return (
    <Grid
      container
      spacing={0}
      alignItems="baseline"
      style={{ justifyContent: "center", paddingBottom: "20px" }}
    >
      {props.children}
    </Grid>
  );
}
