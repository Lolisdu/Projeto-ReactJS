import React, {useEffect, useState } from 'react-router-dom';
import axios from 'axios';
import {useNavigate, Link, useParams } from 'react-router-dom';

export default function Home() {


  const [cadastro, setCadastro] = useState ([]);
  const listarCadastro = async () => {
    try {
      await axios.get("http://localhost:8080/api/cadastro")
      .then((response) => {
        setCadastro(response.data);
      })
    }catch (erro) {
      alert (erro.message)
    }
  }

useEffect (()=> {
  listarCadastro ();
}, []);

// DELETAR
const {id} = useParams();
const deleteCadastro = async (id) => {
  try{
    await axios.delete('http:// localhost:8080/api/cadastro/${id}')
    .then((response) => {
      alert('Cadastro excluido.')
      listarCadastro();
    })
  }catch {
    alert(erro.message)
  }
}


  return (
    <div className="container">
      <table className="table table-dark border shadow">
  <thead>
    ...
  </thead>
  <tbody>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2" class="table-active">Cadastro</td>
      <td>Nome</td>
      <td>CPF</td>
      <td>Email</td>
      <td>..</td>
    </tr>
    </tbody>
    {cadastro.map((cadastro, key) => (
    <tr>
      <th scope="row" key ={key }>{key+1}</th>
      <td colSpan="2" class="table-active">Cadastro</td>
      <td>{cadastro.nome}</td>
      <td>{cadastro.CPF}</td>
      <td>{cadastro.Email}</td>
      <td>
      <Link to={'/view/${cadastro.id}'}className="btn btn-out-line-sucess mx-2">
        Ver 
      </Link>
      <Link to={'/edit/${cadastro.id}'} className="btn btn-sucess mx-2">
        Editar
      </Link>
      <button className="btn btn-danger mx-2" onClick={()=> deleteCadastro(cadastro.id)}>
        Excluir
      </button>
      </td>
    </tr>
    ))}
</table>
    </div>
  )
}
