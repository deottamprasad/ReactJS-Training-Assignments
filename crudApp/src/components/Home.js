import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteEmp } from "../actions/index";
import { getEmp } from "../actions/index";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const dispatch = useDispatch();
  const newState = useSelector((state) => state.changeTheState);
  const history = useNavigate();
  let [Employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/ce596b10-8325-4673-b949-d3b23af5372b")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .then(() => console.log(Employees));
  });

  function handleGet() {
    dispatch(getEmp(Employees));
  }

  function handleDelete(id) {
    var index = Employees.map((e) => {
      return e.id;
    }).indexOf(id);
    dispatch(deleteEmp(index));
    history("/");
  }
  function handleEdit(id, age, name) {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("id", id);
  }
  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newState && newState.length > 0
              ? newState.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            onClick={() =>
                              handleEdit(item.id, item.Age, item.Name)
                            }
                          >
                            EDIT
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDelete(item.id)}>
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to={"/create"}>
          <Button size="lg">CREATE</Button>
        </Link>
        <Button onClick={handleGet} size="lg" style={{ marginTop: "10px" }}>
          GET
        </Button>
      </div>
    </>
  );
}

export default Home;
