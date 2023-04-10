import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Outlet } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Outlet />
      <div style={{
        backgroundColor: "#0B0629"}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Item
                
              >
                Clínica Odontológica
              </Item>
            </Grid>
            <Grid item xs={12} >
              <Item >
                <FacebookIcon />
              </Item  >
              <Item >
                <InstagramIcon />
              </Item>
              <Item >
                <WhatsAppIcon />
              </Item>
              <Item >
                <AddIcCallIcon />
              </Item>
            </Grid>

            <Grid item xs={12}>
            <Item style={{
              backgroundColor: "#0B0629",
              color: "gray" ,fontSize: "10px"}}>
                <CopyrightIcon /> Derechos Reservados 2023
              </Item>
            </Grid>
          </Grid>
        </Box>
            </div>
    </div>
  );
};

export default Footer;
