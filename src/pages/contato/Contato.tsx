import React from "react";
import { Grid, Box, Button, Typography, TextField, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import './Contato.css';

function Contato() {
    return (
        <>
            <Grid container spacing={3} columns={12} className="containerContato">
                <Grid item xs={12} className='titleContainer-Contato'>
                    <Box className='linhaContato'></Box>
                    <Typography className="tituloInicialContato">
                        Mande uma mensagem!
                    </Typography>
                    <Box className='linhaContato'></Box>
                </Grid>

                <Box className="cardCompleto-Contato boxTexto-Contato">
                    <form className="formularioContato">
                        <TextField id="outlined-basic" label="Nome" variant="outlined" />
                        <TextField id="outlined-basic" label="Assunto" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Mensagem"
                                multiline
                                rows={4}
                                defaultValue=""
                                variant="outlined"
                            />
                        </div>
                    </form>
                    
                        <Button variant="contained" className="boxBotaoContato" disableElevation>
                            Enviar
                        </Button>


                    </Box>
            </Grid>
        </>
    )
}
export default Contato;