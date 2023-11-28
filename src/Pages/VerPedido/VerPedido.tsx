import React, { useEffect, useState } from "react";
import ServiceOrder from "../../service/OrderService/OrderService";
import PedidosList from "./PedidoList";
import { jwtDecode } from "jwt-decode";
import { CustomTokenPayload } from "../Login/Logout";

const VerPedido = () => {
  const [pedido, setPedido] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePedido = await ServiceOrder.getByUserId(getId());
        setPedido(responsePedido);
      } catch (error) {
        console.error("Error al realizar la llamada", error);
      }
    };
    fetchData();
  }, []);

  const getId = () => {
    const isToken = localStorage.getItem("token");
    if (isToken != null) {
      let guidUser = jwtDecode<CustomTokenPayload>(isToken).User.guiduser;
      console.log("Este es el guidUser", guidUser);
      return guidUser;
    } else {
      return null;
    }
  };
  return <PedidosList pedido={pedido} />;
};

export default VerPedido;
