import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SobreNos from './pages/sobrenos/SobreNos';
import CadastroUsuario from './pages/cadastrousuario/CadastroUsuario';
import { Provider } from 'react-redux';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import store from './store/store';
import ListaProduto from './components/produtos/listaProduto/listaProduto';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeletarProdutos from './components/produtos/deletarProdutos/DeletarProdutos';
import CadastroProduto from './components/produtos/cadastroProduto/CadastroProduto';
import Contato from './pages/contato/Contato';
import { Produto } from './pages/produto/Produto';
import CategoriaNome from './components/categorianome/CategoriaNome';
import PerfilLoja from './pages/perfilLoja/PerfilLoja';


function App() {
  useEffect(() => {
    var Tawk_API: { maximize: () => void; [key: string]: any; } = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/664ea7119a809f19fb33ec2e/1huhjp7i7';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      if (s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      }
    })();
  }, []);

  const openChatbot = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobrenos" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/cadastrocategoria" element={<CadastroCategoria />} />
            <Route path="/cadastrocategoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListaProduto />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/cadastroprodutos" element={<CadastroProduto />} />
            <Route path="/cadastroprodutos/:id" element={<CadastroProduto />} />
            <Route path="/deletarprodutos/:id" element={<DeletarProdutos />} />
            <Route path="/categorias/nome/:categoria" element={<CategoriaNome />} />
            <Route path="/perfilloja" element={<PerfilLoja/>} />
            <Route path="/perfilloja/:id" element={<PerfilLoja/>} />
            <Route path="/categorianome" element={<CategoriaNome/>} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
