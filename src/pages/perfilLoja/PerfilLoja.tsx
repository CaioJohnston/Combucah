import React from 'react';
import './perfilLoja.css'
import ygara from '../../assets/imgs/ygara.png';
import verificado from '../../assets/imgs/verificado.png';
import arara from '../../assets/imgs/arara.png';
import araradourada from '../../assets/imgs/araradourada.png';
import tucano from '../../assets/imgs/tucano.png';
import brincos from '../../assets/imgs/brincos.jpeg';
import CardProduto from '../../components/cardproduto/CardProduto';
import fundoYgara from '../../assets/imgs/fundoYgara.png';

const PerfilLoja = () => {
  return (
    <>
      <div className='perfil-Loja'>
        <div className="fotoFundo">
          <img src={fundoYgara} alt="Foto de Fundo" className="fotoFundoImg" />
        </div>
        <div className="sessaoTopo">
          <div className="descricaoLoja">
            <div className="logo">
              <img src={ygara} alt="Ygara - Artesanal & Turismo" />
            </div>
            <div className="bio">
              <h1>Ygara - Artesanal & Turismo</h1>
              <p>
                No Ygara, valorizamos a sustentabilidade e a comunidade local,
                garantindo que cada produto que você adquire contribua para a
                preservação do meio ambiente e para o fortalecimento da economia
                regional. Venha nos visitar e experimente um pedaço da Amazônia
                em cada detalhe.
              </p>
              <img src={verificado} alt="Selo Verificado" className="selo" />
            </div>
          </div>
        </div>
        <div className="produtosRecomendados">
          <h2>Produtos Recomendados</h2>
          <div className="produtos">
            <CardProduto
              nome="Arara"
              descricao="Arara de madeira"
              preco={"25,00"}
              imagem={arara}
              id={2}
            />
            <CardProduto
              nome="Arara Dourada"
              descricao="Essa é rara!"
              preco={"50,00"}
              imagem={araradourada}
              id={3}
            />
            <CardProduto
              nome="Tucano"
              descricao="Tucano de madeira"
              preco={"20,00"}
              imagem={tucano}
              id={4}
            />
            <CardProduto
              nome="Brincos"
              descricao="Os mais bonitos da amazônia!"
              preco={"40,00"}
              imagem={brincos}
              id={5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PerfilLoja;
