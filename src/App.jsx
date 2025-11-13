import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Header from "./assets/components/Header/FullScreenSwiper.jsx";
import {useSelector} from "react-redux";
import Header from "./assets/components/Header/index.jsx";

import Footer from "./assets/components/Footer/index.jsx";
import About from "./assets/Pages/About/index.js";
import Home from "./assets/Pages/Home/Home.jsx";
import Catalog from "./assets/Pages/Catalog/index.js";
import CatalogItem from "./assets/Pages/Catalog-item/index.js";
import SearchPage from "./assets/Pages/SearchPage/index.js";
import Footer11 from "./assets/components/Footer11/index.jsx";

function App(isLoading ) {
    const {data, dataSection} = useSelector((state) => state.todos)
  return (
        <div className='App'>
            <Header/>

            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/search" element={<SearchPage />} />
                <Route path="/catalog/:id" element={<CatalogItem />} />
                <Route exact path="" element={<Home/>}/>
            </Routes>
            <Footer/>
        </div>
  )
}

export default App
