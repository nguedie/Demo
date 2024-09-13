
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";

import Home from '../components/Home';
import SimpleForm from '../components/SimpleForm';
import Login from '../components/Loging';
import Applayout from "../components/LayOut/Applayout";
import TableEmployer from "../components/TableEmployer";
import DetailEmployes from "../components/DetailEmployes";
import Temps from "../components/Temps";


const Routing =  createBrowserRouter(
        createRoutesFromElements(
            <Route >
                <Route path="/" element={<Login />}/>
                
                <Route path="/home" element={<Applayout><Home /></Applayout>} />
                <Route path="/simpleForm" element={<Applayout><SimpleForm /></Applayout>} />
                <Route path="/tableEmployer" element={<Applayout><TableEmployer/></Applayout>} />
                <Route path="/detailemployes/:id" element={<Applayout><DetailEmployes/></Applayout>}/>
                <Route path="/temps/:id"element={<Applayout><Temps/></Applayout>}/>
                
            </Route>
        )
    )

export default Routing;