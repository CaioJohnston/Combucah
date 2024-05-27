import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CardProduto from "../../components/cardproduto/CardProduto";
import { buscaId } from "../../services/Service";
import "./produto.css";
import ygara from "../../assets/imgs/ygara.png";
import vinicius from "../../assets/imgs/Vinicius.png";
import caio from "../../assets/imgs/Caio.png";
import coruja from "../../assets/imgs/coruja.jpeg";
import coruja2 from "../../assets/imgs/coruja2.jpeg";
import verificado from "../../assets/imgs/verificado.png";
import arara from "../../assets/imgs/arara.png";
import araradourada from "../../assets/imgs/araradourada.png";
import tucano from "../../assets/imgs/tucano.png";
import brincos from "../../assets/imgs/brincos.jpeg";

export const Produto = () => {
  const [quantidade, setQuantidade] = useState(0);
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<any>();

  const token = "Basic ZmVsaXBlMkBlbWFpbC5jb206MTIzNDU2Nzg5";

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  const adicionar = () => {
    setQuantidade(quantidade + 1);
  };

  const remover = () => {
    setQuantidade(quantidade - 1);
  };

  useEffect(() => {
    if (quantidade < 1) {
      setQuantidade(1);
    }
    if (quantidade > produto?.quantidade) {
      setQuantidade(produto?.quantidade);
    }
  }, [quantidade]);

  const handleTextToSpeech = (text: string) => {
    var speech = new SpeechSynthesisUtterance();
    speech.lang = 'pt-br';
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  return (
    <>
      <div className="produto">
        <div className="sessaoTopo">
          <div className="imagemProduto">
            <img
              className="imagemProdutoPrincipal"
              src={coruja}
              alt={produto?.nome}
            />
            <img
              src={coruja2}
              className="imagemProdutoMini"
              alt="foto miniatura do produto"
            />
            <img
              src={coruja2}
              className="imagemProdutoMini"
              alt="foto miniatura do produto"
            />
            <img
              src={coruja2}
              className="imagemProdutoMini"
              alt="foto miniatura do produto"
            />
          </div>
          <div className="resumoProduto">
            <div className="tituloProduto">
              <h1 className="title">{produto?.nome}Coruja de Miriti</h1>
              <button
                className="tts-button"
                onClick={() => handleTextToSpeech("Coruja de Miriti")}
              >
                🔊
              </button>
            </div>
            <p className="descricao">{produto?.descricao}</p>
            <div className="imagemAnunciante">
              <Link to="/perfilloja">
                <img className="avatar" src={ygara} alt="avatar" />
              </Link>
              <h2 className="nomeAnunciante">
                {produto?.usuario?.nome
                  ? produto?.usuario?.nome
                  : "Ygara Artesanal & Turismo"}
              </h2>
            </div>
            <div className="comprarProduto">
              <h4 className="preco">R$20,00</h4>
              <div className="quantidade">
                <div className="adicionar" onClick={adicionar}>
                  +
                </div>
                <input type="number" value={quantidade} readOnly />
                <div className="remover" onClick={remover}>
                  -
                </div>
              </div>
              <button className="btnComprar">Comprar</button>
              <h4 className="categoria">Categoria: {produto?.categoria?.nome} Artesanato</h4>
            </div>
          </div>
        </div>
        <div className="sessaoInfos">
          <div className="quemCriou">
            <div className="tituloDiv">Quem Criou?</div>
            <div className="conteudoDiv">
              <div className="imagemAnunciante">
                <img className="avatar" src={ygara} alt="avatar" />
                <h2 className="nomeAnunciante">
                  {produto?.usuario?.nome
                    ? produto?.usuario?.nome
                    : "Ygara Artesanal & Turismo"}
                </h2>
                <img src={verificado} alt="selo-feito-a-mao" className="selo" />
              </div>
              <p className="descricao">
                No Ygara, valorizamos a sustentabilidade e a comunidade local,
                garantindo que cada produto que você adquire contribua para a
                preservação do meio ambiente e para o fortalecimento da economia
                regional. Venha nos visitar e experimente um pedaço da Amazônia
                em cada detalhe.
              </p>
            </div>
          </div>
          <div className="containerSobrePoliticas">
            <div className="sobreProduto">
              <div className="tituloDiv">Sobre o produto</div>
              <div className="conteudoDiv">
                <h2 className="tituloSobreProduto nomeAnunciante">
                  {produto?.nome}Coruja de Miriti
                </h2>
                <p className="descricao">{produto?.descricao}Um linda coruja artesanal feita de miriti. Perfeita para qualquer ambiente!</p>
              </div>
            </div>
            <div className="politicasEntrega m-l20">
              <div className="tituloDiv">Politicas de entrega</div>
              <div className="conteudoDiv">
                <h2 className="tituloSobreProduto nomeAnunciante">Produto artesanal</h2>
                <p className="descricao">
                  Este é um produto artesanal! Em caso de falta de estoque a sua produção pode levar em média 5 dias. Lembre-se, esté é um produto autêntico amazônico,
                  produzido por produtores da Ilha do Combu. Sua encomenda pode demorar mais que o normal, mas não se preocupe, a experiência Combucah garante um pedacinho da cultura
                  amazônica sem que você saia de sua casa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="avaliacoes">
          <hr className="linha" />
          <div className="tituloInicial">Avaliações</div>
          <hr className="linha" />
        </div>
        <div className="avaliacoesComentarios">
          <div className="comentario">
            <div className="imagemComentario">
              <img className="avatar" src={vinicius} alt="avatar" />
            </div>
            <div className="textoComentario">
              <h3 className="nomeComentario">Vinicius Rayol</h3>
              <p className="descricaoComentario">Ótimo produto!</p>
            </div>
          </div>
          <div className="comentario">
            <div className="imagemComentario">
              <img className="avatar" src={caio} alt="avatar" />
            </div>
            <div className="textoComentario">
              <h3 className="nomeComentario">Caio Johnston</h3>
              <p className="descricaoComentario">Qualidade excepcional!</p>
            </div>
          </div>
        </div>
        <div className="talvezVoceGoste">
          <hr className="linha" />
          <div className="tituloInicial">Recomendações</div>
          <hr className="linha" />
        </div>
        <div className="produtosRecomendados">
          <CardProduto
            nome="Arara"
            descricao="Arara de madeira"
            preco={"25,00"}
            imagem={arara}
          />
          <CardProduto
            nome="Arara Dourada"
            descricao="Essa é rara!"
            preco={"50,00"}
            imagem={araradourada}
          />
          <CardProduto
            nome="Tucano"
            descricao="Tucano de madeira"
            preco={"20,00"}
            imagem={tucano}
          />
          <CardProduto
            nome="Brincos"
            descricao="Os mais bonitos da amazônia!"
            preco={"40,00"}
            imagem={brincos}
          />
        </div>
      </div>
    </>
  );
};
