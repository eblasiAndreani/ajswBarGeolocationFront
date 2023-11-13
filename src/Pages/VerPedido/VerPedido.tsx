import React, { useEffect, useState } from "react";
import ServiceOrder from "../../service/OrderService/OrderService";
import PedidosList from "./PedidoList";

const VerPedido = () => {
  const [pedido, setPedido] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePedido = await ServiceOrder.getByUserId(1);
        console.log("responsePedido", responsePedido);
        setPedido(responsePedido);
      } catch (error) {
        console.error("Error al realizar la llamada", error);
      }
    };
    fetchData();
  }, []);
  return <PedidosList pedido={pedido} />;
};

export default VerPedido;
