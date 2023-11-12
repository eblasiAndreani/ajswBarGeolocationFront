import React, { useEffect, useState } from "react";
import "./Bares.css";
import Title from "../../Common/Title/Title";
import ServiceBar from "../../service/Bar/BarService";
import BarList from "./BarList";

const Bares = ({ updateBar }) => {
  const [bares, setBares] = useState([]);

  useEffect(() => {
    // Dentro de un efecto, realiza la llamada a getAll del servicio
    const fetchData = async () => {
      try {
        const response = await ServiceBar.getAll();
        setBares(response);
      } catch (error) {
        console.error("Error al realizar la llamada", error);
      }
    };
    fetchData(); // Llama a la función fetchData para obtener los bares cuando el componente se monta
  }, []);

  return (
    <body>
      <div className="pageBares">
        <BarList bares={bares} updateBar={updateBar}></BarList>
      </div>
    </body>
  );
};

export default Bares;
