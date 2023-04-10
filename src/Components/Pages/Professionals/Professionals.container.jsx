import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import Professional from "./Professional";
import "./Professional.css";


const ProfessionalsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const getProfesionals = axios.get("https://jsonplaceholder.typicode.com/users")
    getProfesionals
      .then((res) => dispatch({ type: "GET_USERS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);
  console.log(state.users);

  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <Professional users={state.users} dispatch={dispatch} favs={state.favs} />
    </div>
  );
};

export default ProfessionalsContainer;
