import logo from "./logo.svg";
import "./App.css";
import { Route, Switch,Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Createdata from "./Components/Createdata";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="nav-link"  to="/">NavBar </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link className="nav-link"  to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link"  to="/about">About </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link"  to="/create">Create</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link"  to="/project">Project</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/create" component={Createdata} />
        <Route exact path="/project" component={Project} />
      </Switch>
    </>
  );
}

export default App;
