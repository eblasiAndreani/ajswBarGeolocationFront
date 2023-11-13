import React from "react";
import Title from "../../Common/Title/Title";
import { Card, Container, Button } from "react-bootstrap";

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
            {pedido.body.map((order) => (
              <Card
                key={order.id}
                className={`bg-${
                  order.idTable.dispose ? "success text-white" : "white"
                }`}
                style={{
                  width: "90rem",
                  margin: "1rem",
                }}
              >
                <Card.Body>
                  <Card.Title>Pedido: {order.id}</Card.Title>
                  <Card.Text>
                    Pagado: ${order.partialPrice}
                    {order.idTable.dispose
                      ? "   ---Los estamos esperando---"
                      : null}
                  </Card.Text>
                </Card.Body>

                {/* Contenedor con display: flex para las bebidas */}
                {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {order.drink.map((drink, drinkIndex) => (
                      <Card
                        key={drinkIndex}
                        style={{ width: "20rem", margin: "1rem" }}
                      >
                        <Card.Img
                          variant="top"
                          src={drink.image}
                          style={{ width: "20rem", height: "20rem" }}
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
                  </div> */}
              </Card>
            ))}
          </Container>
        </div>
      ) : (
        <Title text="No hay bares disponibles." />
      )}
    </div>
  );
};

export default PedidosList;
