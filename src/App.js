import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./home.css";
import PageDetail from "./pages/PageDetail";
import CategoryDetail from "./pages/CategoryDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/categoryDetail/:id">
            <CategoryDetail />
          </Route>
          <Route path="/pageDetail/:id">
            <PageDetail />
          </Route>
          <Route path="/search">
            <SearchBar />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
