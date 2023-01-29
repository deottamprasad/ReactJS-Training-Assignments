//Overview of my CRUD Application:
//I have added three routes Home Add and Edit which is used to perform respectives task.
//I have used redux for maintaining the state of Employees state which is basically a list of employees.
//I have added a button called "GET" which is used to fetch data from an api which I created using website
//https://mocki.io/fake-json-api where I basically stored a list of employees in json form and fetched it
//when get button gets clicked.

import Home from "./components/Home";
import "./styles.css";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}
