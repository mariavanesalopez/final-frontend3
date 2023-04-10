import React, { useContext, useEffect } from "react";
import ProfessionalSelected from "./ProfessionalSelected";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../../Context/GlobalContext";


const ProfessionalSelectedContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    const getUser = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    getUser
      .then((res) => dispatch({ type: "GET_USER", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ProfessionalSelected state={state} user={state.user} />
    </div>
  );
};

export default ProfessionalSelectedContainer;
