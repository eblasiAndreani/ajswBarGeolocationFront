import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import ServiceTable from "../../service/Table/TableService";
import Swal from "sweetalert2";

const AdminTableCardList = ({ tables }) => {
  const handleButtonClick = async (table) => {
    try {
      const response = await ServiceTable.updateTable(table.id);
      // Resto del código...
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Puedes manejar el error de acuerdo a tus necesidades
    }
    /* if (response) {
      Swal.fire({
        title: "Contas con",
        text: "Tu reserva tiene una ventana de tiempo de una hora a partir del pago. Después de este período, la disponibilidad de mesa dependerá de la capacidad del local en el momento de tu llegada.",
        icon: "success",
        confirmButtonText: "ok",
      });
    } else {
      Swal.fire({
        title: "Contas con ",
        text: "Tu reserva tiene una ventana de tiempo de una hora a partir del pago. Después de este período, la disponibilidad de mesa dependerá de la capacidad del local en el momento de tu llegada.",
        icon: "success",
        confirmButtonText: "ok",
      }); 
    }*/
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center">
        {tables.map((table, index) => (
          <Card
            key={index}
            style={{
              width: "20rem",
              margin: "1rem",
              backgroundColor: table.dispose ? "white" : "red",
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: table.dispose ? "black" : "white" }}>
                Mesa N°: {table.id}
              </Card.Title>
              <Card.Text style={{ color: table.dispose ? "black" : "white" }}>
                {table.dispose ? "Desocupada" : "Ocupada"}
              </Card.Text>

              <Button
                variant="success"
                onClick={() => handleButtonClick(table)}
              >
                {table.dispose ? "Ocupar" : "Liberar"}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default AdminTableCardList;
