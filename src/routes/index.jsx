import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layouts/PagesLayout";
import Produtos from "../pages/Produtos";
import MeusPedidos from "../pages/MeusPedidos";
import Home from "../pages/Home";

const Paths = ()=>{
    return(
        <>
         <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<PageLayout />}>
            <Route index element={<Home/>}/> 
            <Route path={"produtos"} element={<Produtos/>}/>
            <Route path={"meus-pedidos"} element={<MeusPedidos/>}/>
               

            </Route>
          </Routes>
         </BrowserRouter>
        </>
    )
}

export default Paths;