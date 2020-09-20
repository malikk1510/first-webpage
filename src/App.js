import React from "react";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Navbar from "./components/Navbar";
import "./index.css"
import {Switch,Route, Redirect} from "react-router-dom"



function App() {
  return <>
  <Navbar/>
  <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/contact" component={Contact}/>
   <Route path="/services" component={Services}/>
   <Redirect to="/"/>
   </Switch>
  </>;
}

export default App;
