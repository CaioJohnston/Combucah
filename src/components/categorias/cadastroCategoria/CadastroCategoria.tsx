import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroCategoria.css';
import Categoria from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import {toast} from 'react-toastify';
import { Box, Paper } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link to="/home">Art Ativa</Link> {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


function CadastroCategoria() {
    const classes = useStyles();
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    const [categoria, setCategoria] = useState<Categoria>({
            id: 0,
            nome: '',
            descricao: ''
    })

    useEffect(() => {
        if (token === "") {
            toast.error("Você precisa estar logado!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover:false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

            setCategoria({
                ...categoria,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("categoria" + JSON.stringify(categoria))
    
            if (id !== undefined) {
                console.log(categoria)
                put(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success("Categoria atualizada com sucesso", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover:false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } else {
                post(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success("Categoria cadastrada com sucesso", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover:false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
            back()
    
        }

    
        function back() {
            navigate('/categorias')
        }
  
    return (
        <>
         <Paper elevation={3} className="paper-container">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AddIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastrar Categoria
            </Typography>
            <form onSubmit={onSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    value={categoria.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updatedCategoria(e)
                    }
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    name="nome"
                    margin="normal"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={categoria.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      updatedCategoria(e)
                    }
                    id="descricao"
                    label="Descrição"
                    name="descricao"
                    multiline
                    rows={5}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="secondary"
                  className={classes.submit}
                >
                  Cadastrar
                </Button>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Paper>
        </>
    )
}

export default CadastroCategoria;