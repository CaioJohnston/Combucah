import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import './CardProduto.css';

function CardProduto({nome, descricao, preco, imagem, id=0} : any) {
  return (
    <Card className="cardProdutoContainer">
      <CardActionArea className="cardTopo" >
        <div className="cardImagem">
          <img src={imagem ? imagem : "https://via.placeholder.com/150"} alt={nome} />
        </div>
        <CardContent className="cardDescricao" >
          <Typography variant="h6">
            {nome}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ fontSize: "12px" }}>
            {descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardBottom" >
        <Link to={`/produto/${id}`} className="text-decorator-none">
          <Button className="btnVerProduto">
            Ver
          </Button>
        </Link>
        <Typography variant="body2" color="text.secondary" className="preco">
            R${preco}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default CardProduto;
