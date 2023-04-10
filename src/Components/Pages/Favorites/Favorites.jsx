import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Favorites = ({ state }) => {
  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
    <Grid container marginTop="3px" justify="center"> 
    {state.favs.map((e) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={e.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={e.name}
            />
            <CardMedia
              component="img"
              height="194"
              image={
                "https://res.cloudinary.com/dlwloqdnh/image/upload/v1680944474/doctor_1_srsq1t.jpg"
              }
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests.
              </Typography>
            </CardContent>
          </Card>
        );
      })}
      </Grid>
    </div>
  );
};

export default Favorites;
