import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import "./DeletarProdutos.css";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/Produto";
import { buscaId, deleteId } from "../../../services/Service";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReduce";
import CardProduto from "../../cardproduto/CardProduto";

function DeletarProdutos() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [post, setPosts] = useState<Produto>();

  useEffect(() => {
    if (token == "") {
      toast.info("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id != undefined) {
      findById(id);
    }
  }, [id]);

  const findById = async (id: string) => {
    buscaId(`/produtos/${id}`, setPosts, {
      headers: {
        Authorization: token,
      },
    });
  };

  const sim = () => {
    navigate("/produtos");
    deleteId(`/produtos/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Produto deletado com sucesso", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
  };
  const nao = () => {
    navigate("/produtos");
  };

  return (
    <>
      <div className="deletarProduto">
        <div className="cardDeletarContainer">
          <div className="textoEProduto">
              <h2 className="tituloDeletar">Deseja deletar produto?</h2>
              <CardProduto
                nome={post?.nome}
                descricao={post?.descricao}
                preco={post?.preco}
                imagem={post?.foto}
                id={post?.id}
              />
          </div>
            <button onClick={sim} className="botaoSim">Sim</button>
            <button onClick={nao} className="botaoNao">Não</button>
        </div>
      </div>
    </>
  );
}
export default DeletarProdutos;
