import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './perfilLoja.css';
import verificado from '../../assets/imgs/verificado.png';
import CardProduto from '../../components/cardproduto/CardProduto';
import lojasData from "../../lojas.json";

const PerfilLoja = () => {
  const { id } = useParams<{ id: string }>();
  const [loja, setLoja] = useState<any>(null);

  useEffect(() => {
    if (id) {
      console.log("ID da loja:", id);
      const lojaEncontrada = lojasData.find((loja: any) => loja.id === parseInt(id));
      console.log("Loja encontrada:", lojaEncontrada);
      setLoja(lojaEncontrada);
    }
  }, [id]);

  if (!loja) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className='perfil-Loja'>
        <div className="fotoFundo">
          <img src={loja.fundo} alt="Foto de Fundo" className="fotoFundoImg" />
        </div>
        <div className="sessaoTopo">
          <div className="descricaoLoja">
            <div className="logo">
              <img src={loja.logo} alt={loja.nome} />
            </div>
            <div className="bio">
              <h1>{loja.nome}</h1>
              <p>{loja.descricao}</p>
              <img src={verificado} alt="Selo Verificado" className="selo" />
            </div>
          </div>
        </div>
        <div className="produtosRecomendados">
          <h2>Produtos Recomendados</h2>
          <div className="produtos">
            {loja.produtos.map((produto: any) => (
              <CardProduto
                key={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco.toFixed(2)}
                imagem={produto.imagem}
                id={produto.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilLoja;
