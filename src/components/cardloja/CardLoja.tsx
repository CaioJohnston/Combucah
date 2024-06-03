import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import './CardLoja.css';

function CardLoja({nome, descricao, imagem, id=0} : any) {
  return (
    <div>
    <Link to="/perfilloja">
        <Card className="cardLojaContainer">
        <CardActionArea className="cardLojaTopo" >
            <div className="cardLojaImagem">
            <img src={imagem ? imagem : "https://via.placeholder.com/150"} alt={nome} />
            </div>
            <CardContent className="cardLojaDescricao" >
            <Typography variant="h6" fontSize={13} fontWeight={"bold"} color={"white"}>
                {nome}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </Link>
    </div>
  );
}

export default CardLoja;