import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./style.css";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Thanks from "./pages/Thanks"

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Thanks" component={Thanks} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
