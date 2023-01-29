import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addEmp } from "../actions/index.js";
import { useDispatch } from "react-redux";

function Add() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  let history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    let a = name,
      b = age;
    dispatch(addEmp(uniqueId, a, b));
    history("/");
  }
  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;
