import React from "react";
import { Route, Routes } from "react-router-dom";
import CadastrarCliente from "../screen/CadastrarCliente";
import Home from "../screen/Home";
import DetalharCliente from "../screen/DetalharCliente";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<CadastrarCliente />} />
      <Route path="/clientes/:id" element={<DetalharCliente />} />
    </Routes>
  );
}
