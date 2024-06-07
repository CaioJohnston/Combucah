import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, InputBase, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReduce";
import { addToken } from "../../../store/tokens/actions";
import { toast } from 'react-toastify';
import { buscaNome } from "../../../services/Service";
import logo from '../../../assets/imgs/logo.png';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: `25px`,
  border: `1px solid`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoria } = useParams<{ categoria: string }>();
  const [categorias, setCategorias] = React.useState<any>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  React.useEffect(() => {
    if (categoria !== undefined || categoria !== "") {
      findByNome(`${categoria}`);
    }
  }, [categoria]);

  async function findByNome(categoria: string) {
    buscaNome(`/categorias/nome/${categoria}`, setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  function goLogout() {
    dispatch(addToken(''));
    toast.info("Usuário deslogado!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate('/login');
  }

  var navbar;

  if (token === "") {
    navbar = (
      <AppBar position="static" className="top-app-bar-container">
        <Toolbar className="top-toolbar">
          <Link to="/home">
            <img src={logo} alt="Logo da empresa" className='logo' />
          </Link>
          <Search className="search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase className="buscar"
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box className="botoesNav">
            <Link to="/gestao" className="text-decorator-none cursor">
              <PersonIcon className="icones" />
            </Link>
            <ShoppingCartIcon className="icones" />
            <Link to="/login" className="text-decorator-none cursor">
              <Button className="texto-logcad botoes-login-cadastro" color="inherit">
                Entrar
              </Button>
            </Link>
            <Link to="/cadastrousuario" className="text-decorator-none cursor">
              <Button className="texto-logcad botoes-login-cadastro" color="inherit">
                Cadastrar
              </Button>
            </Link>
            <Button className="texto-logcad botoes-login-cadastro" variant="text">
              Contato
            </Button>
          </Box>
        </Toolbar>
        <Toolbar className="bottom-toolbar botoes-categorias-container nav-botoes">
        <Link  to='/categorias/nome/{lojas}'>
          <Button variant="text" className="botao-nav">Lojas</Button>
          </Link>

          <Link to='/categorias/nome/{artesanato}' >
          <Button variant="text" className="botao-nav">Artesanato</Button>
          </Link>

          <Link to='/categorias/nome/{promocao}' >
          <Button variant="text" className="botao-nav">Promoção</Button>
          </Link>

          <Link to='/categorias/nome/{em_alta}' >
          <Button variant="text" className="botao-nav">Em alta</Button>
          </Link>

          <Link to='/categorias/nome/{comestiveis}' >
          <Button variant="text" className="botao-nav">Comestíveis</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  } else {
    navbar = (
      <AppBar position="static" className="top-app-bar-container">
        <Toolbar className="top-toolbar">
          <Link to="/home">
            <img src={logo} alt="Logo da empresa" className='logo' />
          </Link>
          <Search className="search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase className="buscar"
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box className="botoesNav">
            <PersonIcon className="icones" />
            <ShoppingCartIcon className="icones" />
            <Button className="texto-logcad botoes-login-cadastro" onClick={goLogout}>
              Logout
            </Button>
            <Button className="botoes-sobrenos-contato" variant="text">
              Sobre nós
            </Button>
            <Button className="botoes-sobrenos-contato" variant="text">
              Contato
            </Button>
          </Box>
        </Toolbar>
        <Toolbar className="bottom-toolbar botoes-categorias-container nav-botoes">
          <Button className="botoes-categorias botao-nav" variant="text">Loja</Button>
          <Button className="botoes-categorias botao-nav" variant="text">Artesanato</Button>
          <Button className="botoes-categorias botao-nav" variant="text">Promoção</Button>
          <Button className="botoes-categorias botao-nav" variant="text">Em alta</Button>
          <Button className="botoes-categorias botao-nav" variant="text">Comestíveis</Button>
        </Toolbar>
      </AppBar>
    );
  }
  return <>{navbar}</>;
}

export default Navbar;
