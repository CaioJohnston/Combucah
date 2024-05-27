import * as React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import './ListaCategoria.css'
import Categoria from '../../../models/Categoria';
import { useNavigate } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import {toast} from 'react-toastify';


function ListaCategoria() {

  const [categorias, setCategorias] = React.useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  React.useEffect(() => {
    if(token === ''){
      toast.error("Você precisa estar logado para acessar as Categorias", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover:false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
      navigate('/login');
    }
  }, [token]);
 
  const getCategorias = async () => {
    //adicionar try catch
    await busca("/categorias", setCategorias, {
    headers: {
      'Authorization':  token
    }
  });
  }
 
  React.useEffect(() => {
    getCategorias();
  } , [categorias.length]);



  return (
    <>
      <div className="listaCategorias">
        {categorias.map((categoria: Categoria) => (
          <div className="cardCategoria">
            <h1 className="tituloCategoria">{categoria.nome}</h1>
            <h4>{categoria.descricao}</h4>
            <div className="boxBotoes">
              <Link to={`/cadastrocategoria/${categoria.id}`} className="text-decorator-none">
                  <button className="botaoEditar">Editar</button>
                </Link>
                <Link to={`/deletarcategoria/${categoria.id}`} className="text-decorator-none">
                  <button className="botaoDeletar">Deletar</button>
                </Link>
              </div>
          </div>
          ))}
      </div>
    </>
  );
}


export default ListaCategoria;