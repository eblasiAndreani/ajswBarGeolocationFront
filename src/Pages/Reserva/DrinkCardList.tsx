import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const DrinkCardList = ({ drinks, addDrinkToSelectedList, selectedTable }) => {
  function handleButtonClick(drink) {
    const name = drink.name;
    const description = drink.description;

    if (selectedTable != null) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });

      Toast.fire({
        icon: "success",
        title: `1 ${name} ${description} mas!!!\nPuedes controlar tu reserva debajo en el resumen `,
      });

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
                <Card.Text>{drink.description}</Card.Text>
                <Card.Text>Precio por unidad ${drink.price}</Card.Text>
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
