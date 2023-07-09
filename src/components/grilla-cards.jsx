import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardPelicula from "./card.jsx";
import { useEffect, useState } from "react";
import "./grilla-cards.css";

function GrillaCards() {
  const [storageChange, setStorageChange] = useState(0);

  useEffect(() => {
    const handleStorageChange = (e) => {
      setStorageChange(storageChange + 1);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storageChange]);

  return (
    <>
      <Row xs={1} md={3} className="g-4 mt-3 grilla-colores">
        {Object.values({ ...localStorage }).map((value, idx) => (
          <Col key={idx}>
            <CardPelicula
              className="item"
              datos={JSON.parse(value)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GrillaCards;
