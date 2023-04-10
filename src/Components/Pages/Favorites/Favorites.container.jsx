import React, { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import Favorites from "./Favorites";

const FavoritesContainer = () => {
  const {state}= useContext(GlobalContext);

  return (
    <div>
      <Favorites state={state}/>
    </div>
  );
};

export default FavoritesContainer;
