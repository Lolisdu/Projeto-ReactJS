import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';



export default function ViewCadastro() {


  const { id } = useParams();
  const [nome, setNome] = useState("");
  const [CPF, setCPF] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    carregaCadastro();
  }, [])

  const carregaCadastro = async () => {
    const result = await axios.get('http://localhost:8080/api/cadastro/${id}')
    setNome(result.data.nome)
    setCPF(result.data.CPF)
    setEmail(result.data.email)
  }

  return (
    <div>
      <div className="container">
        <div div className="row">
          <div class Name="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4 "> Atualizar Cadastro </h2>
            <div className="card">
              <div className="card-text-center">
                <div className="card-header"> ID: {id}</div>
                <div className="card-body">
                  <p className="card-title"><b> Nome: </b> {nome} </p>
                  <p className="card-title"><b> CPF: </b> {CPF} </p>
                  <p className="card-title"><b> E-mail: </b> {email} </p>
                  <Link to='./home' type=" button" className="btn btn-outline Sucess">
                    Voltar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
