import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./formulario.css";

function Formulario() {
  const [validated, setValidated] = useState(false);
  const [datosPelicula, setDatosPelicula] = useState({
    nombre: "",
    descripcion: "",
    genero: "",
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setValidated(true);

      localStorage.setItem(datosPelicula.nombre, JSON.stringify(datosPelicula));

      window.location.reload();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatosPelicula((prevDatosPelicula) => ({
      ...prevDatosPelicula,
      [name]: value,
    }));
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
          <Form.Label column sm="3">
            Nombre
          </Form.Label>
          <Col sm="12">
            <Form.Control
              name="nombre"
              value={datosPelicula.nombre}
              onChange={handleChange}
              required
              type="text"
              placeholder="Ingrese Nombre"
            />
            <Form.Control.Feedback>OK!</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="validationCustom01">
          <Form.Label column sm="3">
            Descripcion
          </Form.Label>
          <Col sm="12">
            <Form.Control
              name="descripcion"
              value={datosPelicula.descripcion}
              onChange={handleChange}
              required
              as="textarea"
              rows={3}
              placeholder="Ingrese una descripcion"
            />

            <Form.Control.Feedback>OK!</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Select
          name="genero"
          onChange={handleChange}
          aria-label="Default select example"
        >
          <option value="comedia">Comedia</option>
          <option value="drama">Drama</option>
          <option value="infantil">Infantil</option>
        </Form.Select>

        <Button type="submit">Enviar Formulario</Button>
      </Form>
    </>
  );
}

export default Formulario;
