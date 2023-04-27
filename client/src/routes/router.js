import React from "react";
import { Route, Routes as R, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Listar from "../pages/Medicacoes/Listar";
import Adicionar from "../pages/Medicacoes/Adicionar";
import ListarPacientes from "../pages/Paciente/Listar";
import AdicionarPaciente from "../pages/Paciente/Adicionar";
import ListarReceitas from "../pages/Receita/Listar";
import AdicionarReceita from "../pages/Receita/Adicionar";
const Routes = () => {
  return (
    <BrowserRouter>
      <R>
        <Route element={<Home />} path="/" exact />
        <Route element={<Listar />} path="/medicacoes/all" exact />
        <Route element={<Adicionar />} path="/medicacoes/add" exact />
        <Route element={<ListarPacientes />} path="/pacientes/all" exact />
        <Route element={<AdicionarPaciente />} path="/pacientes/add" exact />
        <Route element={<ListarReceitas />} path="/receitas/all" exact />
        <Route element={<AdicionarReceita />} path="/receitas/add" exact />
      </R>
    </BrowserRouter>
  )
}

export default Routes;