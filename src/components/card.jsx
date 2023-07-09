import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./card.css";

function CardPelicula({ datos }) {
  const wrapper = {
    width: 150,
    height: 150,
  };

  function removeItemFromLocalStorage(nombre) {
    localStorage.removeItem(nombre);
  }

  return (
    <Card style={wrapper}>
      <Card.Title>{datos.nombre}</Card.Title>

      <Card.Body>
        <p>{datos.genero}</p>
        <p>{datos.descripcion}</p>
      </Card.Body>
      <Button
        variant="danger"
        onClick={() => removeItemFromLocalStorage(datos.nombre)}
      >
        Borrar
      </Button>
    </Card>
  );
}

export default CardPelicula;
