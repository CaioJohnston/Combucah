import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./produto.css";
import CardProduto from "../../components/cardproduto/CardProduto";
import ygara from "../../assets/imgs/ygara.png";
import verificado from "../../assets/imgs/verificado.png";
import vinicius from "../../assets/imgs/Vinicius.png";
import caio from "../../assets/imgs/Caio.png";
import produtosData from "../../produtos.json";

export const Produto = () => {
  const [quantidade, setQuantidade] = useState(1);
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<any>(null);
  const [recomendacoes, setRecomendacoes] = useState<any[]>([]);


  useEffect(() => {
    // Função para rolar para o topo da página
    const scrollToTop = () => {
      window.scrollTo({ top: 0});
    };

    scrollToTop(); // Chamada para rolar para o topo ao entrar na página
  }, [id]); // Monitora mudanças no ID do produto para acionar o efeito

  useEffect(() => {
    if (id) {
      console.log("ID do produto:", id);
      // Encontrar o produto pelo ID
      const produtoEncontrado = produtosData.find((produto: any) => produto.id === parseInt(id));
      console.log("Produto encontrado:", produtoEncontrado);
      setProduto(produtoEncontrado);
    }
  }, [id]);

  useEffect(() => {
    if (produto) {
      // Gerar recomendações de produtos com IDs diferentes do produto atual
      const recomendacoesProdutos = produtosData.filter(
        (p: any) => p.id !== produto.id
      );
      setRecomendacoes(recomendacoesProdutos.slice(0, 4)); // Mostrar apenas 4 recomendações
    }
  }, [produto]);

  const adicionar = () => {
    if (produto && quantidade < produto.quantidade) {
      setQuantidade(quantidade + 1);
    }
  };

  const remover = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const handleTextToSpeech = (text: string) => {
    var speech = new SpeechSynthesisUtterance();
    speech.lang = 'pt-br';
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="produto">
        <div className="sessaoTopo">
          <div className="imagemProduto">
            <img
              className="imagemProdutoPrincipal"
              src={produto.imagemPrincipal}
              alt={produto.nome}
            />
            <img
              src={produto.imagemMini1}
              className="imagemProdutoMini"
              alt="foto miniatura do produto"
            />
            <img
              src={produto.imagemMini2}
              className="imagemProdutoMini"
              alt="foto miniatura do produto"
            />
            <img
              src={produto.imagemMini3}
              className="imagemProdutoMini"
              alt="foto miniatura do produto"
            />
          </div>
          <div className="resumoProduto">
            <div className="tituloProduto">
              <h1 className="title">{produto.nome}</h1>
              <button
                className="tts-button"
                onClick={() => handleTextToSpeech(produto.nome)}
              >
                🔊
              </button>
            </div>
            <p className="descricao">{produto.descricao}</p>
            <div className="imagemAnunciante">
              <Link to="/perfilloja" className="linkImage">
                <img className="avatar" src={ygara} alt="avatar"/>
              </Link>
              <h2 className="nomeAnunciante">
                {produto.usuario.nome}
              </h2>
            </div>
            <div className="comprarProduto">
              <h4 className="preco">R${produto.preco.toFixed(2)}</h4>
              <div className="quantidade">
                <div className="remover" onClick={remover}>
                  -
                </div>
                <input type="number" value={quantidade} readOnly />
                <div className="adicionar" onClick={adicionar}>
                  +
                </div>
              </div>
              <button className="btnComprar">Comprar</button>
              <h4 className="categoria">Categoria: {produto.categoria.nome}</h4>
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
                  {produto.usuario.nome}
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
                  {produto.nome}
                </h2>
                <p className="descricao">{produto.descricao}</p>
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
        {recomendacoes.map((produtoRecomendado) => (
            <CardProduto
              key={produtoRecomendado.id}
              nome={produtoRecomendado.nome}
              descricao={produtoRecomendado.descricao}
              preco={produtoRecomendado.preco}
              imagem={produtoRecomendado.imagemPrincipal}
              id={produtoRecomendado.id}
            />
          ))}
          
        </div>
      </div>
    </>
  );
};

// Componente CardProduto (substitua pelas implementações reais dos cartões de produto)
