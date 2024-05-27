import { Grid, Box, Typography, AppBar } from "@mui/material";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReduce";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function Footer() {
  let history = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>((state) => state.tokens);
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(''));
    toast.info('Usuário deslogado!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    history('/login')
  }

  var footerComponent;

  if (token != "" || token == "") {
    footerComponent = <AppBar position="static">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="footer"
      >
        <Grid className="footer-box">
          <Box className="contatos-box">
            <Typography variant="h6" className="footer-title">
              Contatos
            </Typography>
            <Typography variant="body1" className="footer-text">
              <EmailIcon className="footer-icon" /> contato@combucah.com.br
            </Typography>
            <Typography variant="body1" className="footer-text">
              <PhoneIcon className="footer-icon" /> (91) 94002-8922
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className="footer-subtext"
            >
              (Ligue ou mande uma mensagem pelo Whatsapp)
            </Typography>
          </Box>
          
          <Box className="assine-sociais-box">
            
            <Box className="redes-box">
              <Typography variant="h6" className="footer-title">
                Siga-nos nas redes sociais
              </Typography>
              <Box className="redes-icones-box">

                <InstagramIcon className="footer-icon redes-icon" />
                <FacebookIcon className="footer-icon redes-icon" />
                <LinkedInIcon className="footer-icon redes-icon" />

              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid alignItems="center" item xs={12}>
          <Box className="footer-copy">
            <Typography variant="subtitle2" className="cop" align="center">
              © Copyright 2024. Combucah: Todos os direitos reservados.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  }

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
