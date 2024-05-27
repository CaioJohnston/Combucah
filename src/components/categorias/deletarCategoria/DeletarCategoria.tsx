import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import './DeletarCategoria.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import {toast} from 'react-toastify';


function DeletarCategoria() {
  let navigate = useNavigate();
  const { id } =  useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [categorias, setCategoria] = useState<Categoria>()

  useEffect(()=>{
    if(token ===""){
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover:false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
        navigate('/login')
    }
  }, [token])

  useEffect(()=>{
    if(id!== undefined){
        findById(id)
    }
  }, [id])
  async function findById(id: string){
    buscaId(`/categorias/${id}`, setCategoria,{
        headers: {
            'Authorization': token
        }
    })
  }

  function sim() {
    navigate('/categorias')
    deleteId(`/categorias/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success("Categoria deletada com sucesso", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover:false,
      draggable: false,
      theme: "colored",
      progress: undefined,
  });
  }

  function nao() {
    navigate('/categorias')
  }

          
  return (
    <>
      <div className="deletarProduto">
        <div className="cardDeletarContainer">
          <div className="textoEProduto">
              <h2 className="tituloDeletar">Deseja deletar Categoria?</h2>
              <div className="nomeCategoria">
                  <h1 className='tituloCategoriaDeletar'>{categorias?.nome}</h1>
              </div>
          </div>
          
            <button onClick={sim} className="botaoSim">Sim</button>
            <button onClick={nao} className="botaoNao">Não</button>
            </div>
      </div>

    </>
  );
}
export default DeletarCategoria;