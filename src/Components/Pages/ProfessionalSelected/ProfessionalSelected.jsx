import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PublicIcon from "@mui/icons-material/Public";

const ProfessionalSelected = ({ state, user }) => {
  return (
    <div  className={state.isDark ? "container-dark" : "container-light"}>
    <Typography color="primary" variant="h3" align="center" paddingTop="30px">
    Detalle del dentista
  </Typography>
    
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px",
          padding:"25px",
          borderRadius:"10px",
       
          
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  {user.name}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.email} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocalPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.phone} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PublicIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.website} />
                  </ListItem>
                </List>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};

export default ProfessionalSelected;
