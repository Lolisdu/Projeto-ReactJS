import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function AddCadastro() {

  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [email, setEmail] = useState('');

  const salvar = async (e) => {
    e.preventDefault();
    console.log(nome, CPF, email);
    await axios.post("http://localhost:8080/api/cadastro", {
      nome: nome,
      CPF: CPF,
      email: email,
    }).then((result) => {
      alert("Cadastrado com sucesso. ")
      Navigate("/home");
    }).catch((erro) => {
      console.log(erro);
    });

  };




  return (
    <div className="container">
      <div className="row">
        <div class Name="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 "> Registro de Cadastro </h2>
        </div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nome</label>
            <input type="text " class="form-control" id="exampleInputNome" value={nome} onChange={(e) =>
              setNome(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">CPF </label>
            <input type="text " class="form-control" id="exampleInputCPF" value={CPF} onChange={(e) =>
              setCPF(e.target.value)} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"> Email </label>
            <input type="text " class="form-control" id="exampleInputEmail" value={email} onChange={(e) =>
              setEmail(e.target.value)} />
          </div>
          <button type="submit" class="btn btn-outline-sucess" onClick={salvar }>Salvar</button>
          <Link to="/home" type="submit" class="btn btn-outline-danger mx-2">Cancelar</Link>
        </form>
      </div>

    </div>
  )
}
