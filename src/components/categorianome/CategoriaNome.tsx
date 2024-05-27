import CardProduto from '../cardproduto/CardProduto'
import './CategoriaNome.css'
import coruja from "../../assets/imgs/coruja.jpeg"

const CategoriaNome = () => {



  return (
    <>
    <div className="categoriaNome">
    <div className="categoriaNomeHeader">
          <hr className="linhaCategoria" />
          <div className="tituloInicial">Artesanato</div>
          <hr className="linhaCategoria" />
    </div>
    <div className="categoriaNomeBody">
          <div className="categoriaNomeBodyItem">
          <CardProduto 
            nome="Coruja" 
            descricao="Coruja de madeira" 
            preco={'20,00'} 
            imagem={coruja} 
          />
          </div>
    </div>  
    </div>
    </>
  )
}

export default CategoriaNome