import { Route, Switch } from "react-router-dom";
import MovieListing from "./components/movielisting/MovieListing";
import "./App.css";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={MovieListing} />
        <Route exact path="/movie/:movieId" component={MovieDetail} />
      </Switch>
    </div>
  );
}

export default App;
