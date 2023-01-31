import React from "react";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

import styles from "./Animations";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/hsl/10/90/50" />
        </Route>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </Router>
  );
}

function AnimationApp() {
  let location = useLocation();

  return (
    <div style={styles.fill}>
      <ul style={styles.nav}>
        <NavLink to="/hsl/10/90/50">Red</NavLink>
        <NavLink to="/hsl/120/100/40">Green</NavLink>
        <NavLink to="/rgb/33/150/243">Blue</NavLink>
        <NavLink to="/rgb/240/98/146">Pink</NavLink>
      </ul>

      <div style={styles.content}>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={300}
          >
            <Switch location={location}>
              <Route path="/hsl/:h/:s/:l" children={<HSL />} />
              <Route path="/rgb/:r/:g/:b" children={<RGB />} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

function NavLink(props) {
  return (
    <li style={styles.navItem}>
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );
}

function HSL() {
  let { h, s, l } = useParams();

  return (
    <div
      style={{
        ...styles.fill,
        ...styles.hsl,
        background: `hsl(${h}, ${s}%, ${l}%)`
      }}
    >
      hsl({h}, {s}%, {l}%)
    </div>
  );
}

function RGB() {
  let { r, g, b } = useParams();

  return (
    <div
      style={{
        ...styles.fill,
        ...styles.rgb,
        background: `rgb(${r}, ${g}, ${b})`
      }}
    >
      rgb({r}, {g}, {b})
    </div>
  );
}


