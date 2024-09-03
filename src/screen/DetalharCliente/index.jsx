import React, { useEffect, useState } from "react";
import ClienteCard from "../../component/ClienteCard";
import { useParams } from "react-router-dom";
import api from "../../service/api";
import "./styles.css";
import { DefaultLabelImput } from "../../component/DefaultLabelImput";
import NavBar from "../../component/NavBar";

export default function DetalharCliente() {
  const { id } = useParams();
  const [cliente, setCliente] = useState();
  const [deposito, setDeposito] = useState();
  const [saque, setSaque] = useState();

  const handleClickDepositar = async () => {
    try {
      const result = await api.post(
        `/clientes/${id}/depositar?valor=${deposito.target.value}`
      );
      alert("deposito realizado com sucesso");
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickSacar = async () => {
    try {
      const result = await api.post(
        `/clientes/${id}/sacar?valor=${saque.target.value}`
      );
      alert("saque realizado com sucesso");
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/clientes/${id}`);
        console.log(response.data);
        setCliente(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (cliente == null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <NavBar />
      <div className="container my-5 custom-container">
        <div className="container-cliente">
          <ClienteCard data={cliente} />
        </div>
        <div className="container-menu">
          <h1>Ações</h1>
          <div>
            <DefaultLabelImput label="Depositar" onChange={setDeposito} />
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleClickDepositar}
            >
              Depositar
            </button>
          </div>
          <div>
            <DefaultLabelImput label="Sacar" onChange={setSaque} />
            <button
              type="submit"
              class="btn btn-primary"
              onClick={handleClickSacar}
            >
              Sacar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
