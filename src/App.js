import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import myprofile from "./images/myprofile.jpg";


function App() {
  const scrollProperty = () => {
    if (window.scrollY > 20) {
      return "sticky";
    } else {
      return "";
    }
  };

  return (
    <Router>
      <div className="app">
        {/* navbar Header */}
        <div className={`navbar ${scrollProperty()}`}>
          <div className="max-width">
            <div className="logo">
              <Link to="#">
                Portfo<span>lio.</span>
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
              </li>
              <li>
                <Link to="#">Skills</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
              <li>
                <Link to="#">Resume</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Home Section Start Here  */}
        <div className="home" id="home">
          <div>
            <img src={myprofile} alt="profilePic" className="profilePic" />
          </div>
          <div className="max-width">
            <div className="home-content">
              <div className="text-1">Hello My Name is </div>
              <div className="text-2">Vishesh Kumar </div>
              <div className="text-3">
                I am <span>Web Developer</span>{" "}
              </div>
            </div>
          </div>
        </div>
        <p>lorem30dsfasdjfakdfa;fk</p>
        <p>lorem30dsfasdjfakdfa;fk</p>
        <p>lorem30dsfasdjfakdfa;fk</p>
        <p>lorem30dsfasdjfakdfa;fk</p>
        <p>lorem30dsfasdjfakdfa;fk</p>
        <p>lorem30dsfasdjfakdfa;fk</p>
      </div>
    </Router>
  );
}

export default App;
