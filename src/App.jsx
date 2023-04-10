import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import GlobalContextProvider from "./Context/GlobalContext";
import NotFound from "./Components/Pages/NotFound/NotFound";
import ProfessionalsContainer from "./Components/Pages/Professionals/Professionals.container";
import Home from "./Components/Pages/Home/Home";
import ProfessionalSelectedContainer from "./Components/Pages/ProfessionalSelected/ProfessionalSelected.container";
import FavoritesContainer from "./Components/Pages/Favorites/Favorites.container";
import ContactoContainer from "./Components/Pages/Contacto/Contacto.container";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route path="/dentistas" element={<ProfessionalsContainer/>} />
              <Route path="/dentista/:id" element={<ProfessionalSelectedContainer/>} />
              <Route path="/contacto" element={<ContactoContainer/>} />
              <Route path="/favs" element={<FavoritesContainer/>} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
