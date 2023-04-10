import {
    Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { Link } from "react-router-dom";

const Professional = ({ users, dispatch, favs }) => {
  return (
    <div>
    <Grid container spacing={2} justify="center">
      {users.map((user) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={user.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={user.name}
            />
            <CardMedia
              component="img"
              height="194"
              image={"https://res.cloudinary.com/dlwloqdnh/image/upload/v1680944474/doctor_1_srsq1t.jpg"
                }
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() =>
                  dispatch({ type: "HANDLE_FAVORITE", payload: user })
                }
              >
                <FavoriteIcon
                  color={
                    favs.some((fav) => fav.id === user.id)
                      ? "error"
                      : "disabled"
                  }
                />
              </IconButton>
              <Link to={`/dentista/${user.id}`}>
                <Button variant="contained">Ver detalle</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
      </Grid>
    </div>
  );
};

export default Professional;
