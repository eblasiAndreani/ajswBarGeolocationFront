import React from "react";
import { Card, Container, Button } from "react-bootstrap";

const pedido = [
  {
    id: 15464131465,
    idUser: 1,
    priceTotal: 7000.5,
    idTable: 1,
    dispose: true,
    drink: [
      {
        id: 1,
        name: "Vino",
        descripcion: "Blanco",
        image:
          "https://www.infobae.com/new-resizer/h31BeVkjZMaANFlNw2BJ_iaP1vs=/arc-anglerfish-arc2-prod-infobae/public/IIT4CWFJHJHBHHYI6UDTBWXDPI.jpg",
        price: 2500.5,
        amount: 2,
      },
      {
        id: 2,
        name: "Vino",
        descripcion: "Tinto",
        image:
          "https://descorcha.com/blog/wp-content/uploads/2022/11/tipos-de-vino-tinto-1200x750.jpg",
        price: 3000.5,
        amount: 2,
      },
      {
        id: 3,
        name: "Cerveza",
        descripcion: "Rubia",
        image:
          "https://lasrecetasdelchef.net/wp-content/uploads/2017/01/cerveza-1024x759.jpg",
        price: 1500.5,
        amount: 2,
      },
      {
        id: 4,
        name: "Cerveza",
        descripcion: "Negra",
        image: "https://i.blogs.es/e07156/istock-516249343/1366_2000.jpg",
        price: 2070.5,
        amount: 2,
      },
    ],
  },
  {
    id: 2,
    idUser: 1,
    priceTotal: 7000.5,
    idTable: 1,
    dispose: false,
    drink: [
      {
        id: 1,
        name: "Vino",
        descripcion: "Blanco",
        image:
          "https://www.infobae.com/new-resizer/h31BeVkjZMaANFlNw2BJ_iaP1vs=/arc-anglerfish-arc2-prod-infobae/public/IIT4CWFJHJHBHHYI6UDTBWXDPI.jpg",
        price: 2500.5,
        amount: 2,
      },
      {
        id: 2,
        name: "Vino",
        descripcion: "Tinto",
        image:
          "https://descorcha.com/blog/wp-content/uploads/2022/11/tipos-de-vino-tinto-1200x750.jpg",
        price: 3000.5,
        amount: 2,
      },
      {
        id: 3,
        name: "Cerveza",
        descripcion: "Rubia",
        image:
          "https://lasrecetasdelchef.net/wp-content/uploads/2017/01/cerveza-1024x759.jpg",
        price: 1500.5,
        amount: 2,
      },
      {
        id: 4,
        name: "Cerveza",
        descripcion: "Negra",
        image: "https://i.blogs.es/e07156/istock-516249343/1366_2000.jpg",
        price: 2070.5,
        amount: 2,
      },
    ],
  },
];
const VerPedido = () => {
  return (
    <div>
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        {pedido.map((order, index) => (
          <Card
            key={index}
            className={`bg-${order.dispose ? "success text-white" : "white"}`}
            style={{
              width: "90rem",
              margin: "1rem",
            }}
          >
            <Card.Body>
              <Card.Title>Pedido: {order.id}</Card.Title>
              <Card.Text>
                Pagado: ${order.priceTotal}
                {order.dispose ? "   ---Los estamos esperando---" : null}
              </Card.Text>
            </Card.Body>

            {/* Contenedor con display: flex para las bebidas */}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
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
            </div>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default VerPedido;
