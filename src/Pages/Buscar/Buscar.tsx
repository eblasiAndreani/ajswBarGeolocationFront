import React, { useEffect, useState } from "react";
import "./Buscar.css";
import Title from "../../Common/Title/Title";
import ServiceBar from "../../service/Bar/BarService";
import Button from "../../Common/Button/Button";
import BarList from "../Bares/BarList";
import { Card, Accordion, Row, Col, Container } from "react-bootstrap";

const Buscar = ({ updateBar }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [bares, setBares] = useState([]);
  const [firstTime, setFirstTime] = useState(false);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      // Dentro de un efecto, realiza la llamada al servicio con las coordenadas
      const fetchData = async () => {
        try {
          const response = await ServiceBar.getBarsByLocation(
            latitude,
            longitude
          );
          setBares(response); // Actualiza el estado con la lista de bares
          setFirstTime(true);
        } catch (error) {
          console.error("Error al realizar la llamada", error);
        }
      };
      fetchData();
    }
  }, [latitude, longitude]);

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLatitude(lat); // Actualiza el estado con la latitud
        setLongitude(lon); // Actualiza el estado con la longitud
      });
    }
  };

  return (
    <body>
      <div className="pageBuscar">
        <Title text="Cercanos a tu ubicacion" />
        <Button
          text="Buscar"
          onClick={handleClick}
          className="mi-clase-personalizada"
        />
      </div>
      {bares.length > 0 ? (
        <BarList bares={bares} updateBar={updateBar}></BarList>
      ) : firstTime ? (
        <Card style={{ width: "61rem" }} className="bg-primary text-white">
          <Card.Body>
            <h4 style={{ textAlign: "center" }}>
              No encontramos bares cercanos a tu ubicacion
            </h4>
          </Card.Body>
        </Card>
      ) : (
        <div></div>
      )}
    </body>
  );
};

export default Buscar;
