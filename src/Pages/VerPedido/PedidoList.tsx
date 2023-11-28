import React from "react";
import Title from "../../Common/Title/Title";
import { Card, Container, Button } from "react-bootstrap";
import LocalizacionService from "../../service/Localizacion/LocalizacionService";

// Función para formatear la fecha
function formatFechaAlta(fechaAlta: string) {
  const fecha = new Date(fechaAlta);

  // Formato personalizado para mostrar solo hasta el minuto
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  return fecha.toLocaleDateString("es-ES", options);
}

const PedidosList = ({ pedido }) => {
  return (
    <div className="bar-list">
      {Array.isArray(pedido.body) && pedido.body.length > 0 ? (
        <div>
          <Container
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            {pedido.body
              .slice()
              .reverse()
              .map((order) => (
                <Card
                  key={order.id}
                  style={{
                    width: "90rem",
                    margin: "1rem",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "40px",
                        margin: "0 100px",
                      }}
                    >
                      <span style={{ order: 1 }}>
                        Reserva: {order.id} - {formatFechaAlta(order.fechaAlta)}
                      </span>
                      <span style={{ order: 2 }}>
                        Bar: {order.idTable.bar.name}
                      </span>
                    </Card.Title>
                    <Card.Text
                      style={{
                        padding: "0 50px",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "25px",
                        }}
                      >
                        <LocalizacionService
                          lat={order.idTable.bar.latitude}
                          lng={order.idTable.bar.longitude}
                        />
                      </span>
                    </Card.Text>
                  </Card.Body>

                  {/* Contenedor con display: flex para las bebidas */}
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {order.drinks.map((drink, drinkIndex) => (
                      <Card
                        key={drinkIndex}
                        style={{ width: "12.2rem", margin: "1rem" }}
                      >
                        <Card.Img
                          variant="top"
                          src={drink.image}
                          style={{ width: "12rem", height: "12rem" }}
                        />
                        <Card.Body>
                          <Card.Title>{drink.name}</Card.Title>
                          <Card.Text>
                            {"Precio x unidad $"}
                            {drink.price}
                          </Card.Text>
                          <Card.Text>
                            {"Cantidad: "}
                            {drink.amount}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Card>
              ))}
          </Container>
        </div>
      ) : (
        <body>
          <Title text="No tienes reservas que mostrar" />
        </body>
      )}
    </div>
  );
};

export default PedidosList;
