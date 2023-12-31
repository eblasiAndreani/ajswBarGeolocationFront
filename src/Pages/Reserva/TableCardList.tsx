import React, { useState, useEffect } from "react";
import { ITable } from "../../service/Table/types";
import { Card, Accordion, Row, Col, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

// Define la interfaz Group
interface Group {
  chair: number;
  availableTables: ITable[];
  unavailableTables: ITable[];
}

const TableCardList = ({ tables, setSelectedTable }) => {
  const [idUser, setIdUser] = useState(0);
  const [table, setTable] = useState(null);
  const [chair, setChair] = useState(0);
  const navigate = useNavigate(); // Obtiene la función de navegación

  const getId = () => {
    const isToken = localStorage.getItem("token");
    if (isToken != null) {
      return jwtDecode(isToken).jti;
    } else {
      return "0";
    }
  };

  // Declarar la función groupTablesByChair antes de usarla
  function groupTablesByChair(tables: ITable[]): Group[] {
    const groups = {};
    tables.forEach((table) => {
      if (!groups[table.chair]) {
        groups[table.chair] = {
          chair: table.chair,
          availableTables: [],
          unavailableTables: [],
        };
      }

      if (table.dispose) {
        groups[table.chair].availableTables.push(table);
      } else {
        groups[table.chair].unavailableTables.push(table);
      }
    });

    // Convertir el objeto de grupos en un array
    return Object.values(groups);
  }

  useEffect(() => {
    if (table !== null) {
      // Resto de tu lógica después de actualizar idUser
      if (idUser > 0) {
        Swal.fire({
          title: "Contas con " + chair + " lugares",
          text: "Tu reserva tiene una ventana de tiempo de una hora a partir del pago. Después de este período, la disponibilidad de mesa dependerá de la capacidad del local en el momento de tu llegada.",
          icon: "success",
          confirmButtonText: "ok",
        });
        setSelectedTable(table);
      } else {
        Swal.fire({
          title: "Oye!",
          text: "Debes loguearte primero",
          icon: "error",
          confirmButtonText: "ok",
        });
        navigate("/login");
      }
    }
  }, [idUser, table, chair]);

  function handleButtonClick(availableTables, chair) {
    const id = getId(); // Obtener el id
    // Verificar si id es un número válido mayor que 0
    const parsedId = parseInt(id, 10);
    const validId = !isNaN(parsedId) && parsedId > 0 ? parsedId : 0;
    // Establecer idUser
    setIdUser(validId);
    setTable(availableTables[0]);
    setChair(chair);
  }

  // Lógica para agrupar por el atributo "chair"
  const groupedTables = groupTablesByChair(tables);

  return (
    <div>
      {groupedTables.map((group, index) => (
        <div key={index} style={{ margin: "1%" }}>
          <Container className="d-flex justify-content-center align-items-center">
            <Accordion defaultActiveKey={null} style={{ width: "64rem" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div style={{ width: "15rem", margin: "auto" }}>
                    {group.availableTables.length > 0 ? (
                      <Button
                        variant="success"
                        onClick={() =>
                          handleButtonClick(
                            group.availableTables,
                            group.availableTables[0].chair
                          )
                        }
                      >
                        Reservar
                      </Button>
                    ) : (
                      <p>No hay disponibilidad</p>
                    )}
                  </div>
                  <h2 style={{ margin: "auto" }}>
                    Mesa con {group.chair} Sillas
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <Card
                    style={{ width: "61rem" }}
                    className="bg-primary text-white"
                  >
                    <Card.Body>
                      <Row>
                        <Col>
                          <h4 style={{ textAlign: "center" }}>
                            Disponibles: {group.availableTables.length}
                          </h4>
                        </Col>
                        <Col>
                          <div>
                            <h4 style={{ textAlign: "center" }}>
                              No Disponibles: {group.unavailableTables.length}
                            </h4>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      ))}
    </div>
  );
};

export default TableCardList;
