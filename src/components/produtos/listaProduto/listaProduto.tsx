import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Produto from "../../../models/Produto";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReduce";
import { toast } from "react-toastify";
import "./listaProduto.css";
import CardProduto from "../../cardproduto/CardProduto";
import { NONAME } from "dns";

function ListaProduto() {
  const [produtos, setProduto] = React.useState<Produto[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  React.useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado", {
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

  const getProdutos = async () => {
    //adicionar try catch
    await busca("/produtos", setProduto, {
      headers: {
        Authorization: token,
      },
    });
  };
  React.useEffect(() => {
    getProdutos();
  }, [produtos.length]);

  return (
    <>
      <div className="listaProdutos">
        {produtos.map((produto) => (
          <>
            <div className="boxAtualizar">
              <CardProduto
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                imagem={produto.foto}
                id={produto.id}
                className="cardProdutoLista"
              />
              <div className="boxBotoes">
                <Link
                  to={`/cadastroprodutos/${produto.id}`}
                  className="text-decorator-none"
                >
                  <button className="botaoEditar">Editar</button>
                </Link>

                <Link
                  to={`/deletarprodutos/${produto.id}`}
                  className="text-decorator-none"
                >
                  <button className="botaoDeletar">Deletar</button>
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ListaProduto;
