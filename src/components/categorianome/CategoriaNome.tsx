import CardLoja from '../cardloja/CardLoja'
import './CategoriaNome.css'
import coruja from "../../assets/imgs/coruja.jpeg"
import ygara from "../../assets/imgs/ygara.png"
import ygara2 from "../../assets/imgs/ygara2.png"
import boa from "../../assets/imgs/boa.png"
import ame from "../../assets/imgs/ame.png"

const CategoriaNome = () => {



  return (
    <>
    <div className="categoriaNome">
    <div className="categoriaNomeHeader">
          <hr className="linhaCategoria" />
          <div className="tituloInicial">Lojas</div>
          <hr className="linhaCategoria" />
    </div>
      <div className="categoriaNomeBody">
          <div className="container">
          <CardLoja 
            nome="YGARA - Artesanal & Turismo" 
            descricao="Coruja de madeira" 
            preco={'20,00'} 
            imagem={ygara2} 
            id ={1}
          />
          <CardLoja 
            nome="Boá na Ilha" 
            descricao="Coruja de madeira" 
            preco={'20,00'} 
            imagem={boa} 
          />
          <CardLoja 
            nome="AME Combu" 
            descricao="Coruja de madeira" 
            preco={'20,00'} 
            imagem={ame} 
          />
          </div>
      </div>  
    </div>
    </>
  )
}

export default CategoriaNome