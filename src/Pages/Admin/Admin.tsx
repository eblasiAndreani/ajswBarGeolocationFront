import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ServiceTable from "../../service/Table/TableService";
import AdminTableCardList from "./AdminTableCardList";

const Admin = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseTables = await ServiceTable.getTableByBar(1);
        setTables(responseTables);
      } catch (error) {
        console.error("Error al realizar la llamada", error);
      }
    };
    fetchData();
  }, [tables]);

  return (
    <body>
      <AdminTableCardList tables={tables} />
    </body>
  );
};

export default Admin;
