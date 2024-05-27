import Categoria from "./Categoria";

interface Produto {
    id: number,
    nome: string,
    descricao: string,
    preco: number,
    quantidade: number,
    categoria?: Categoria | null,
    foto: string,
    data: string
}

export default Produto;