import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Logo from "./img/Logotipo_Moda_Loja_Minimalista_Preto_e_Branco__2_-removebg-preview.png"

export default function App() {
  return (
    <Grid>
      <Box sx={{
        width: "100%",
        minWidth: "auto",
        height: "auto",
        backgroundImage: "-webkit-linear-gradient(280deg, #F6A935 20%, rgba(255, 255, 255, 1) 70%)",
      }}>
        <Grid container>
          <Grid md={12} display={'flex'} justifyContent={'center'}>
            <Typography mt={3}>
              <img src={Logo} />
            </Typography>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "#7F2D6F" }} mt={3}>
              Aprenda como treinar de verdade
            </Typography>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#3A3134" }} mt={2}>
              Descubra o segredo para construir músculos incríveis com o
              <Grid display={'flex'} justifyContent={'center'}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#3A3134" }}>
                  nosso e-book definitivo sobre construção muscular!
                </Typography>
              </Grid>
            </Typography>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mt={6} >
            <Box sx={{
              padding: "4px 4px 1px",
              borderRadius: "4px",
              background: "#fff",
              boxShadow: "0px 0px 26px 10px rgba(0,0,0,0.4)",
            }}>
              <video width="800" height="500" controls>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mt={3} >
            <Button variant="contained" sx={{
              fontSize: "30px",
              fontWeight: 600,
              background: "#EF316D",
              borderRadius: "30px",
              padding: "15px",
              width: "600px"
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#ffffff" }}>
                Quero conhecer o método!
              </Typography>
            </Button>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mt={5} mb={3}>
            <Stack sx={{ width: '40%', color: "#3A3134" }} spacing={2}>
              <LinearProgress color="inherit" />
            </Stack>
          </Grid>
          <Grid container display={'flex'} justifyContent={'center'}>
            <Grid item display={'flex'}>
              <VerifiedOutlinedIcon sx={{
                fontSize: "80px",
                color: "#3A3134"
              }} />
              <Typography mt={1} variant="h6" sx={{ fontWeight: 400, color: "#3A3134" }}>
                Checkout
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#3A3134" }}>
                  Seguro
                </Typography>
              </Typography>
            </Grid>
            <Grid item display={'flex'} ml={5}>
              <EmojiEventsOutlinedIcon sx={{
                fontSize: "80px",
                color: "#3A3134"
              }} />
              <Typography mt={1} variant="h6" sx={{ fontWeight: 400, color: "#3A3134" }}>
                Satisfação
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#3A3134" }}>
                  Garantida
                </Typography>
              </Typography>
            </Grid>
            <Grid item display={'flex'} ml={5}>
              <LockClockOutlinedIcon sx={{
                fontSize: "80px",
                color: "#3A3134"
              }} />
              <Typography mt={1}
                variant="h6" sx={{ fontWeight: 400, color: "#3A3134" }}>
                Privacidade
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#3A3134" }}>
                  Protegida
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mt={3} mb={5}>
            <Stack sx={{ width: '40%', color: "#3A3134" }} spacing={2}>
              <LinearProgress color="inherit" />
            </Stack>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mb={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#F6A935", textAlign: "center" }}>
              Para quem
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#F6A935", background: "#7F2D6F", padding: "10px" }}>
                indicamos esse Curso:
              </Typography>
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"} mb={4}>
            <Grid display={"flex"}>
              <Box sx={{
                background: "#F6A935",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <CheckCircleOutlineOutlinedIcon sx={{
                  fontSize: "40px",
                  color: "#3A3134"
                }} />
                <Typography sx={{
                  fontSize: "24px",
                  color: "#7F2D6F",
                  fontWeight: 600
                }}>
                  Público Alvo:
                  <Typography sx={{
                    fontSize: "18px",
                    color: "#3A3134"
                  }}>
                    O e-book construindo músculos, foi feito para indivíduos interessados em adotar um estilo de vida saudável e ativo, buscando melhorar sua forma física e concentração mental.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid display={"flex"} ml={4}>
              <Box sx={{
                background: "#F6A935",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <CheckCircleOutlineOutlinedIcon sx={{
                  fontSize: "40px",
                  color: "#3A3134"
                }} />
                <Typography sx={{
                  fontSize: "24px",
                  color: "#7F2D6F",
                  fontWeight: 600
                }}>
                  Assunto Principal:
                  <Typography sx={{
                    fontSize: "18px",
                    color: "#3A3134"
                  }}>
                    O e-book aborda informações práticas e orientações sobre exercícios, dieta equilibrada e técnicas de concentração, oferecendo um guia abrangente para aqueles que desejam promover mudanças positivas em sua saúde física e mental.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid display={"flex"} ml={4}>
              <Box sx={{
                background: "#F6A935",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <CheckCircleOutlineOutlinedIcon sx={{
                  fontSize: "40px",
                  color: "#3A3134"
                }} />
                <Typography sx={{
                  fontSize: "24px",
                  color: "#7F2D6F",
                  fontWeight: 600
                }}>
                  Benefícios Oferecidos:
                  <Typography sx={{
                    fontSize: "18px",
                    color: "#3A3134"
                  }}>
                    O e-book fornece dicas valiosas e estratégias testadas para auxiliar os leitores na conquista de uma boa forma física, aumento da resistência e força muscular, melhora na alimentação e hábitos saudáveis, além de fornecer ferramentas para o desenvolvimento do foco e da concentração mental.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mt={3} mb={5}>
            <Stack sx={{ width: '40%', color: "#3A3134" }} spacing={2}>
              <LinearProgress color="inherit" />
            </Stack>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mb={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#F6A935", textAlign: "center" }}>
              Veja o que você vai aprender no
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#F6A935", background: "#7F2D6F", padding: "10px" }}>
                E-book Construindo Músculos:
              </Typography>
            </Typography>
          </Grid>
          <Grid container display={'flex'} justifyContent={'center'} textAlign={"center"} mb={3}>
            <Grid item mr={2}>
              <Box sx={{
                background: "#F6A935",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <Grid item>
                  <Typography sx={{
                    fontSize: "16px",
                    color: "#3A3134",
                    fontWeight: 600
                  }}>
                    • Introdução ao treinamento de força e construção muscular
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontSize: "16px",
                    color: "#3A3134",
                    fontWeight: 600
                  }}>
                    • Anatomia e fisiologia muscular: compreendendo como os músculos funcionam
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontSize: "16px",
                    color: "#3A3134",
                    fontWeight: 600
                  }}>
                    • Avaliação física e definição de metas de construção muscular
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontSize: "16px",
                    color: "#3A3134",
                    fontWeight: 600
                  }}>
                    • Princípios do treinamento de força: volume, intensidade e frequência adequados
                  </Typography>
                </Grid>
              </Box>
            </Grid>
            <Grid item ml={2}>
              <Box sx={{
                background: "#F6A935",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <Grid item>
                  <Typography sx={{
                    fontSize: "16px",
                    color: "#3A3134",
                    fontWeight: 600
                  }}>
                    • Técnicas de levantamento de peso eficazes: progressão, sobrecarga progressiva e periodização
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontSize: "16px",
                    color: "#3A3134",
                    fontWeight: 600
                  }}>
                    • Importância da alimentação e nutrição para a construção muscular
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontSize: "16px",
                    color: "#3A3134",
                    fontWeight: 600
                  }}>
                    • Recuperação, descanso e sono: o papel crucial na construção muscular
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{
                    fontSize: "16px",
                    color: "#3A3134",
                    fontWeight: 600
                  }}>
                    • Motivação e mindset para alcançar seus objetivos de construção muscular
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box >
    </Grid >
  );
}