import React, { useEffect, useState } from "react";
import TableCardList from "./TableCardList";
import ServiceTable from "../../service/Table/TableService";
import Badge from "react-bootstrap/Badge";
import ServiceDrink from "../../service/Drink/Drink.Service";
import DrinkCardList from "./DrinkCardList";
import { Card, Accordion, Row, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Reserva = () => {
  const [tables, setTables] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  // Estado para llevar un registro de la cantidad de cada bebida seleccionada
  const [drinkQuantities, setDrinkQuantities] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTables = await ServiceTable.getTableByBar(1);
        const responseDrinks = await ServiceDrink.getDrinkByBar(1);
        setTables(responseTables);
        setDrinks(responseDrinks);
      } catch (error) {
        console.error("Error al realizar la llamada", error);
      }
    };
    fetchData(); // Llama a la función fetchData para obtener los bares cuando el componente se monta
  }, []);

  // Función para agregar una bebida a la lista de bebidas seleccionadas
  const addDrinkToSelectedList = (drink) => {
    // Verificar si el drink ya está en la lista
    const existingDrink = selectedDrinks.find((d) => d.id === drink.id);

    if (existingDrink) {
      // Si el drink ya está en la lista, actualiza su cantidad
      handleQuantityChange(drink.id, 1);
    } else {
      // Si el drink no está en la lista, agrégalo con cantidad 1
      setSelectedDrinks([...selectedDrinks, { ...drink, quantity: 0 }]);
      handleQuantityChange(drink.id, 1);
    }
  };

  // Función para manejar la cantidad de una bebida
  const handleQuantityChange = (drinkId, amount) => {
    const updatedQuantities = { ...drinkQuantities };
    updatedQuantities[drinkId] = (updatedQuantities[drinkId] || 0) + amount;

    // Verifica si la cantidad llega a 0 y, si es así, elimina la bebida de selectedDrinks
    if (updatedQuantities[drinkId] <= 0) {
      const newSelectedDrinks = selectedDrinks.filter(
        (drink) => drink.id !== drinkId
      );
      setSelectedDrinks(newSelectedDrinks);
    }
    setDrinkQuantities(updatedQuantities);
  };

  // Renderizar la tabla de bebidas
  const renderDrinkTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>SubTotal</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedDrinks.map((drink, index) => (
            <tr key={index}>
              <td>{drink.name}</td>
              <td>{drink.descripcion}</td>
              <td>$ {drink.price * (drinkQuantities[drink.id] || 1)} </td>
              <td style={{ paddingLeft: "3%" }}>
                {drinkQuantities[drink.id] || 1}
              </td>
              <td>
                <Button
                  style={{
                    margin: "1% 5%",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleQuantityChange(drink.id, -1)}
                  className="rounded-circle" // Agrega la clase para redondear el botón
                >
                  -
                </Button>
                <Button
                  style={{
                    margin: "1% 5%",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleQuantityChange(drink.id, 1)}
                  className="rounded-circle" // Agrega la clase para redondear el botón
                >
                  +
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              Total:
            </td>
            <td
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                textAlign: "right",
                width: "30%",
              }}
            >
              $ {calculateTotal()}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  };

  const calculateTotal = () => {
    let total = 0;
    selectedDrinks.forEach((drink) => {
      total += drink.price * (drinkQuantities[drink.id] || 0);
    });
    return total.toFixed(2);
  };

  function handleButtonClick(availableTables) {
    if (selectedTable == null) {
      Swal.fire({
        title: "Debes reservar una mesa primero!",
        text: "Consulta la disponibilidad",
        icon: "error",
        confirmButtonText: "ok",
      });
    } else if (selectedDrinks.length <= 0) {
      Swal.fire({
        title: "Falta tu bebida",
        text: "Debes agregar un trago para reservar!",
        icon: "error",
        confirmButtonText: "ok",
      });
    } else {
      alert("Vas a finalizar tu compra el total es de " + calculateTotal());
    }
  }

  return (
    <body>
      <h1 style={{ textAlign: "center" }}>
        <Badge bg="secondary">
          Consulta disponibilidad en las mesas antes de reservar tus bebidas
        </Badge>
      </h1>
      <TableCardList tables={tables} setSelectedTable={setSelectedTable} />
      <DrinkCardList
        drinks={drinks}
        addDrinkToSelectedList={addDrinkToSelectedList}
        selectedTable={selectedTable}
      />
      <Container className="d-flex justify-content-center align-items-center">
        <Accordion defaultActiveKey={null} style={{ width: "64rem" }}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div style={{ width: "15rem", margin: "auto" }}>
                <Button variant="primary" onClick={handleButtonClick}>
                  Pagar
                </Button>
              </div>
              <h2 style={{ margin: "auto" }}>Resumen de tu reserva</h2>
            </Accordion.Header>
            <Accordion.Body>
              <Row style={{ margin: "1rem" }}>
                {selectedTable ? (
                  <Card
                    style={{ width: "61rem" }}
                    className="bg-dark text-white"
                  >
                    <Card.Body>
                      <h4>Tu mesa cuenta con {selectedTable.chair} lugares</h4>
                    </Card.Body>
                  </Card>
                ) : (
                  <Card
                    style={{ width: "61rem" }}
                    className="bg-danger text-white"
                  >
                    <Card.Body>
                      <h4>No reservaste mesa aun </h4>
                    </Card.Body>
                  </Card>
                )}
              </Row>

              <Row style={{ margin: "1rem" }}>
                {selectedDrinks.length > 0 ? (
                  <Card
                    style={{ width: "61rem" }}
                    className="bg-dark text-white"
                  >
                    {/* Renderizar la lista de bebidas seleccionadas */}
                    <h4 style={{ textAlign: "center" }}>
                      Bebidas Seleccionadas:
                    </h4>
                    {renderDrinkTable()}
                  </Card>
                ) : (
                  <Card
                    style={{ width: "61rem" }}
                    className="bg-danger text-white"
                  >
                    <Card.Body>
                      <h4>No agregaste bebidas aun </h4>
                    </Card.Body>
                  </Card>
                )}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </body>
  );
};

export default Reserva;
