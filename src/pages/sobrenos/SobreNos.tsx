import React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import "./SobreNos.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function SobreNos() {
  return (
    <>
      <Grid container spacing={3} columns={12} className="sobrenos-container">
        <Grid item xs={12} className="title-container">
          <Box className='linha'></Box>
          <Typography className="tituloInicial">
            Sobre nós
          </Typography>
          <Box className='linha'></Box>
        </Grid>


        <Box className="cardCompleto">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGxSIvhVXB69A/profile-displayphoto-shrink_800_800/0/1659149033289?e=1665014400&v=beta&t=6SEDZLQ_kRk2sjiuhbS3bDe6U4lwYl6sNpXtaElSISY"
            className="avatarSobreNos"/>

          <Box className="card-fulano">
            <Button variant="outlined" className="boxNome">
              Diego
            </Button>

            <Box className="boxTexto">
              <Typography className="text-sobrenos"
              >Sou estudante do Curso Técnico em Informática, no Senac-Campinas e
                do Bootcamp de Desenvolvimento WEB - JAVA na Generation Brasil.
                Minhas áreas de interesse são: Desenvolvimento WEB e Redes/Infraestrutura.
                Me considero uma pessoa curiosa, comunicativa e adoro aprender novas habilidades.
              </Typography>


              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/ogeidc/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon2 redes-icon" />
                </a>
                <a href="https://github.com/ogeidc" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon2 redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/ogeidc/" target="_blank" rel="noopener noreferrer" className="redessociais">
                  <LinkedInIcon className="footer-icon2 redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="cardCompleto2">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEQJegmzXihzw/profile-displayphoto-shrink_800_800/0/1647425416180?e=1665014400&v=beta&t=1FtjDEhGOFIKr2kQ_oomKK51NvH88Fuw_U4gqFpYD7I"
            alt="avatar"
            className="avatarSobreNos"/>

          <Box className="card-fulano">
            <Button variant="outlined" className="boxNome">
              Felipe
            </Button>
            <Box className="boxTexto">
              <Typography className="text-sobrenos">
                Desenvolvedor Full Stack, cursando o 4º semestre de gestão da tecnologia da informação na Fatec de Franco da Rocha.
                Atuo com Java + SpringBoot e ReactJS + Typescript. Sou uma pessoa organizada, aprendo rápido e
                sou determinado.
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/felipesilveirasp/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/felipegaldy" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/felipesilveirasp/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="cardCompleto">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFNw4IZRcPpyA/profile-displayphoto-shrink_800_800/0/1660858072099?e=1666828800&v=beta&t=U5w98vyiN7yUalbPtU1Jhxezn-91ZSJQF8DYN-Pb52U"
            alt="avatar"
            className="avatarSobreNos"/>

          <Box className="card-fulano">
            <Button variant="outlined" className="boxNome">
              Hericlis
            </Button>
            <Box className="boxTexto">
              <Typography className="text-sobrenos"
              >Estudante Desenvolvimento de Sistemas atualmente buscando ingressar na
                área de tecnologia da informação. Tenho conhecimentos em ferramentas de
                desenvolvimento front-end, lógica de programação e desenvolvimento back-end.
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/hericlis-ventura/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/HericlisVO" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/hericlis-ventura/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box className="cardCompleto2">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHNu4WbuKYSDw/profile-displayphoto-shrink_800_800/0/1658838501880?e=1665014400&v=beta&t=YbLPVFJjH0dwqqBceA_yFtrxaNifoK1J0rZfmtNnppw"
            alt="avatar"
            className="avatarSobreNos"/>

          <Box className="card-fulano">
            <Button variant="outlined" className="boxNome">
              Isabella
            </Button>
            <Box className="boxTexto">
              <Typography
                className="text-sobrenos">
                Engenheira Cartógrafa e Agrimensora pela UNESP, Desenvolvedora Jr. pela Generation
                Brasil, estudante de Análise e Desenvolvimento de Sistemas e mestranda na area de
                agricultura de precisão na UNICAMP
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/isabella-alves-da-cunha-a110011b9/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/isaacunha" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/isabella-alves-da-cunha-a110011b9/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="cardCompleto">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEh8Wyx6WI7qA/profile-displayphoto-shrink_800_800/0/1654045375745?e=1665014400&v=beta&t=LIgyK4SzVKo-RrVTcCtJhiGwzyLXKGU2F423L8jvzMU"
            alt="avatar"
            className="avatarSobreNos"/>

          <Box className="card-fulano">
            <Button variant="outlined" className="boxNome">
              Janis
            </Button>
            <Box className="boxTexto">
              <Typography className="text-sobrenos"
              >
                Designer e Desenvolvedora Front-End cursando 4º semestre de Design Gráfico pela INFNET 
                e formada em Java Full Stack pela Generation Brasil. Com habilidades em Photoshop, Illustrator, InDesign, After Effects, Figma, HTML, CSS e Typescript.
                Sou uma pessoa proativa, organizada e atenta aos detalhes.
              </Typography>
              <Box className="redessociais">
                <a href="https://www.instagram.com/jan_s__/gi" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/JanisSilva" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/janis-silva/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>


        <Box className="cardCompleto2">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEmsCWHIoFQrg/profile-displayphoto-shrink_800_800/0/1625076494079?e=1665014400&v=beta&t=o7tJKHED4Sga9s7Cwj01D4d9l999TXgMbXANQOFkweA"
            alt="avatar"
            className="avatarSobreNos"/>

          <Box className="card-fulano">
            <Button variant="outlined" className="boxNome">
              Matheus
            </Button>
            <Box className="boxTexto">
              <Typography className="text-sobrenos">
                Desenvolvedor Java Web. Formado em Analise e desenvolvimento de sistemas
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/matheuslsv/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/Matheuslsv" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/matheuslsv/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>



        <Box className="cardCompleto">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQEAI5hDRB2W-Q/profile-displayphoto-shrink_800_800/0/1637800682157?e=1665014400&v=beta&t=ZiZF7QO4IEYYV1xDYnSnKIPqEZpjjamj343LZPrPw5o"
            alt="avatar"
            className="avatarSobreNos"/>

          <Box className="card-fulano">
            <Button variant="outlined" className="boxNome">
              Rosa
            </Button>
            <Box className="boxTexto">
              <Typography className="text-sobrenos"
              >
                Formada em Administração de Empresas, com paixão em tecnologia, trilhando uma nova jornada
                como desenvolvedora fullstack Java, terminando o Bootcamp na Generation Brasil e
                acredito que a educação transforma vida.
              </Typography>
              <Box className="redessociais">
                <a href="https://www.linkedin.com/in/rosabrito/overlay/contact-info/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <InstagramIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://github.com/Rosahumbe" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <GitHubIcon className="footer-icon redes-icon" />
                </a>
                <a href="https://www.linkedin.com/in/rosabrito/" target="_blank" rel="noopener noreferrer"  className="redessociais">
                  <LinkedInIcon className="footer-icon redes-icon" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>

      </Grid>
    </>
  );
}

export default SobreNos;