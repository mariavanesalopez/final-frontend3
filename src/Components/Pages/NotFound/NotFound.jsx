import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundColor: "#0B0629",
        background: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "#942960", fontSize: 100 }}>404</h1>
      <h3 style={{ color: "#942960", fontSize: 50 }}>Page Not Found</h3>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button size="large" variant="outlined" endIcon={<SendIcon />}>
          {" "}
          Go Home
        </Button>
      </Link>
    </div>
  );
};
export default NotFound;
