import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../services/Service';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#4CAF4F',
  },
}));



function Login() {
  let navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const [userLogin, setUserLogin] = useState<UserLogin>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      dataNascimento: '',
      token: ''
    }
  )

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token));
      navigate('/home')
    }
  }, [token])

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken)

      toast.success("Usuario logado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados do usuário inconsistentes. Erro ao logar!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }




  return (
    <>
      <div className="login">
        <div className="login-container">
        <Avatar className={classes.avatar}></Avatar>
          <div className="login-header">
            <h1>Entrar</h1>
          </div>
          <div className="login-body">
            <form className='formLogin' onSubmit={onSubmit}>
              <div className="login-input">
                <label className='labelLogin' htmlFor="usuario">Usuário</label>
                <input className='inputLogin' type="text" name="usuario" placeholder="email@email.com" onChange={updatedModel} />
                <label className='labelLogin' htmlFor="senha">Senha</label>
                <input className='inputLogin' type="password" name="senha" placeholder="" onChange={updatedModel} />
              </div>
              <div className="login-button">
                <button className='botaoEntrar' type="submit">ENTRAR</button>
              </div>
            </form>
          </div>
          <div className="login-footer">
            <p className="subtexto">Não tem uma conta? <Link className='link' to="/cadastrousuario">Cadastre-se</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login