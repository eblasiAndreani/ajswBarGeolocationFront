import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const DrinkCardList = ({ drinks, addDrinkToSelectedList, selectedTable }) => {
  function handleButtonClick(drink) {
    if (selectedTable != null) {
      addDrinkToSelectedList(drink);
    } else {
      Swal.fire({
        title: "Debes reservar una mesa primero!",
        text: "Consulta la disponibilidad",
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  }

  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ padding: "0 5rem", marginBottom: "1rem" }}
      >
        <div className="d-flex flex-wrap justify-content-center">
          {drinks.map((drink, index) => (
            <Card key={index} style={{ width: "20rem", margin: "1rem" }}>
              <Card.Img
                variant="top"
                src={drink.image}
                style={{ width: "20rem", height: "20rem" }}
              />
              <Card.Body>
                <Card.Title>{drink.name}</Card.Title>
                <Card.Text>{drink.descripcion}</Card.Text>
                <Card.Text>{drink.price}</Card.Text>
                <Button
                  variant="success"
                  onClick={() => handleButtonClick(drink)}
                >
                  Agregar
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DrinkCardList;
