import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalContext";
import "./Home.css";

const Home = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div
      className={state.isDark ? "container-dark" : "container-light"}
      style={{        
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        to="/dentistas"
        style={{
          fontSize: "2.5rem",
          backgroundColor: "white",
          borderRadius: "15px",
          marginBottom:"30px"
        }}
      >
        Ver Profesionales
      </Link>
    </div>
  );
};

export default Home;
