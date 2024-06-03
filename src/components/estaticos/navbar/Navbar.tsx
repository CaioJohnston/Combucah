import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Grid, InputBase, Typography } from "@mui/material";
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
    // vertical padding + font size from searchIcon
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
  const { categoria } =  useParams<{categoria: string}>();
  const [categorias, setCategorias] = React.useState<any>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  React.useEffect(()=>{
    if(categoria !== undefined || categoria != ""){
        findByNome(`${categoria}`);
    }
  }, [categoria])

  async function findByNome(categoria: string){
    buscaNome(`/categorias/nome/${categoria}`, setCategorias,{
        headers: {
            'Authorization': token
        }
    })
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
    navigate('/login')
  }

  var navbar;

  if (token === "") {
    navbar = <Grid>
      <AppBar position="static" className="top-app-bar-container" >
        <Toolbar className="top-toolbar" >
          <Box className="botoesNav" >
            <Link to="/login" className="text-decorator-none cursor">
              <Button className="texto-logcad botoes-login-cadastro" color="inherit">
                Entrar
              </Button>
            </Link>{" "}
            |{" "}
            <Link to="/cadastrousuario" className="text-decorator-none cursor">
              <Button className="texto-logcad botoes-login-cadastro" color="inherit">
                Cadastrar
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      {/* PARTE 2 DO HEADER COMEÇA AQUI*/}
      <AppBar position="static" className="app-bar-container" color="inherit">
        <Toolbar className="header-toolbar">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Box >
            <Link to="/home" >
              <img src={logo} alt="Logo da empresa" className='logo'/>
            </Link>
            </Box>
          </Typography>
          <Search className="search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase className="buscar"
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/*icones de login e shopcart */}
          <PersonIcon className="icones" />
          <ShoppingCartIcon className="icones" />
        </Toolbar>
        <Box className="box-botoes-sobrenos-contato">
            <Button className="botoes-sobrenos-contato" variant="text" >
              Sobre nós
            </Button>
          |{" "}
          <Button className="botoes-sobrenos-contato-cont" variant="text">
            Contato 
          </Button>
        </Box>
        <Box className="nav-botoes">
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

        </Box>
      </AppBar>
    </Grid>
  } else {
    navbar =
      <Grid>

        <AppBar position="static" className="top-app-bar-container">
          <Toolbar className="top-toolbar">
            <Box className="whatsBox">
              <Button className="texto-whats botoes-top">
                <WhatsAppIcon className="iconeWhats" /> Fale conosco via whatsapp
              </Button>
            </Box>
            <Box className="botoesNav">
              <Link to="/cadastroprodutos" className="text-decorator-none cursor">
                <Button className="texto-logcad botoes-top" color="inherit">
                  Cadastro produtos
                </Button>
              </Link>
              |
              {" "}
              <Link to="/produtos" className="text-decorator-none cursor">
                <Button className="texto-logcad botoes-top" color="inherit">
                  Produtos
                </Button>
              </Link>
              |
              {" "}
              <Link to="/cadastrocategoria" className="text-decorator-none cursor">
                <Button className="texto-logcad botoes-top" color="inherit">
                  Cadastrar categoria
                </Button>
              </Link>
              |
              <Link to="/categorias" className="text-decorator-none cursor">
                <Button className="texto-logcad botoes-top" color="inherit">
                  Categoria
                </Button>
              </Link>
              |
              <Link to="/login" className="text-decorator-none cursor">
                <Button onClick={goLogout} className="texto-logcad botoes-top" color="inherit">
                  Logout
                </Button>
              </Link>{" "}
            </Box>
          </Toolbar>
        </AppBar>
        { }
        <AppBar position="static" className="app-bar-container" color="inherit">
          <Toolbar className="header-toolbar">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/home">
                <img src={logo} alt="Logo da empresa" className="logo"/>
              </Link>
            </Typography>
            <Search className="search">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase className="buscar"
                placeholder="Buscar..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            {/*icones de login e shopcart */}
            <PersonIcon className="icones" />
            <ShoppingCartIcon className="icones" />
          </Toolbar>
          <Box className="box-botoes-sobrenos-contato">
            <Link to="/sobrenos" className="text-decorator-none cursor">
              <Button className="botoes-sobrenos-contato" variant="text" >
                Sobre nós
              </Button>
            </Link>{" "}
            |{" "}
            <Link to='/contato' className="text-decorator-none cursor">
            <Button className="botoes-sobrenos-contato-cont" color="inherit">
              Contato
            </Button>
            </Link>
          </Box>
          <Box className="nav-botoes">
          <Link  to='/categorias/nome/{acessorios}'>
          <Button variant="text" className="botao-nav">Acessorios</Button>
          </Link>

          <Link to={`/categorias/nome/${categoria}`} >
          <Button variant="text" className="botao-nav">Roupas</Button>
          </Link>

          <Link to='/categorias/nome/{decoracao}' >
          <Button variant="text" className="botao-nav">Decoração</Button>
          </Link>

          <Link to='/categorias/nome/{paracasa}' >
          <Button variant="text" className="botao-nav">Para Casa</Button>
          </Link>

          <Link to='/categorias/nome/{presentes}' >
          <Button variant="text" className="botao-nav">Artesanato</Button>
          </Link>
          </Box>
        </AppBar>
      </Grid>
  }

  return (
    <>
      {navbar}
    </>
  );
}

export default Navbar;
