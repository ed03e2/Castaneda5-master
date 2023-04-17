import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Login_face from './Login_face';
import Login from './Login';


import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";


function Login_form() {
  const onChange =()=> {
    console.log('Hubo un error')
  }
  return (
    <form>
      <h4 class="modal-title" id="exampleModalLongTitle" align="center">
        APP PARCIAL II
      </h4>
      <br />
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Correo" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <br />
        <div class="col">
          <a href="#!">Olvidaste tu contraseña?</a>
        </div>
        <br/>
      </Form.Group>
      <Button variant="danger" type="submit">
        Ingresar
      </Button>

      <div class="text-center">
        <br />
        <p>
          No eres usuario?<a href="#!">Registrarse</a>
        </p>
        <p>o ingresa con:</p>
        <Login />
        <Login_face/>
      </div>
    </form>
  );
}

export default Login_form;
