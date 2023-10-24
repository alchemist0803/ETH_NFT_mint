import { Box, CardMedia, Grid } from "@material-ui/core";
import bg from "../assets/images/bg.png";

const Homepage = () => {
  return (
    <Grid container>
      <Box className="bg">
        <CardMedia src={bg} alt="background" />
      </Box>
      <Grid item xs={1} sm={2} md={3} lg={4} />
      <Grid item xs={10} sm={8} md={6} lg={4}></Grid>
      <Grid item xs={1} sm={2} md={3} lg={4} />
    </Grid>
  );
};

export default Homepage;
