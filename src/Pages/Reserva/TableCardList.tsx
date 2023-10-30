import React from "react";
import { ITable } from "../../service/Table/types";
import { Card, Accordion, Row, Col, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";

// Define la interfaz Group
interface Group {
  chair: number;
  availableTables: ITable[];
  unavailableTables: ITable[];
}

const TableCardList = ({ tables, setSelectedTable }) => {
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

  function handleButtonClick(availableTables) {
    let table = availableTables[0];
    let chair = table.chair;
    console.log(chair);
    Swal.fire({
      title: "Ya tenes una mesa!",
      text: "Contas con " + chair + " lugares",
      icon: "success",
      confirmButtonText: "ok",
    });
    setSelectedTable(table);
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
                        onClick={() => handleButtonClick(group.availableTables)}
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
