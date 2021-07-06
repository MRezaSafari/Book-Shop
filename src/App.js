import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import BookPage from "./pages/book";
import Footer from "./components/footer";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3030/api/";
Axios.defaults.timeout = 25000;

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
        </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/book/:id/:slug">
            <BookPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
