import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function App() {
  return (
    <Grid>
      <Box sx={{
        width: "100%",
        minWidth: "auto",
        height: "auto",
        backgroundImage: "-webkit-linear-gradient(280deg, #363753 20%, rgba(255, 255, 255, 1) 70%)",
      }}>
        <Grid container>
          <Grid md={12} display={'flex'} justifyContent={'center'} mt={5}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: "#FEFEFE" }}>
              🦾 CONSTRUINDO MÚSCULOS
            </Typography>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mt={5}>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "#5CD2C6" }} mt={3}>
              Aprenda como treinar de verdade
            </Typography>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: "#DFE3EE" }} mt={2}>
              Descubra o segredo para construir músculos incríveis com o
              <Grid display={'flex'} justifyContent={'center'}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#DFE3EE" }}>
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
              <iframe width="800" height="500" src="https://www.youtube.com/embed/5h29R5wrz9Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </Box>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mt={3} >
            <Button variant="contained" sx={{
              fontSize: "30px",
              fontWeight: 600,
              background: "#363753",
              borderRadius: "30px",
              padding: "15px",
              width: "600px"
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#FEFEFE" }}>
                Quero conhecer o método!
              </Typography>
            </Button>
          </Grid>
          <Grid container mt={3} display={'flex'} justifyContent={'center'}>
            <Grid item display={'flex'}>
              <VerifiedOutlinedIcon sx={{
                fontSize: "70px",
                color: "#FEFEFE"
              }} />
              <Typography mt={.5} variant="h6" sx={{ fontWeight: 400, color: "#FEFEFE" }}>
                Checkout
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#FEFEFE" }}>
                  Seguro
                </Typography>
              </Typography>
            </Grid>
            <Grid item display={'flex'} ml={5}>
              <EmojiEventsOutlinedIcon sx={{
                fontSize: "70px",
                color: "#FEFEFE"
              }} />
              <Typography mt={.5} variant="h6" sx={{ fontWeight: 400, color: "#FEFEFE" }}>
                Satisfação
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#FEFEFE" }}>
                  Garantida
                </Typography>
              </Typography>
            </Grid>
            <Grid item display={'flex'} ml={5}>
              <LockClockOutlinedIcon sx={{
                fontSize: "70px",
                color: "#FEFEFE"
              }} />
              <Typography mt={.5}
                variant="h6" sx={{ fontWeight: 400, color: "#FEFEFE" }}>
                Privacidade
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#FEFEFE" }}>
                  Protegida
                </Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid md={12} mt={3} display={'flex'} justifyContent={'center'} mb={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#363753", textAlign: "center" }}>
              Para quem
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#363753", background: "#5CD2C6", padding: "10px" }}>
                indicamos esse Curso:
              </Typography>
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"} mb={4}>
            <Grid display={"flex"}>
              <Box sx={{
                background: "#363753",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <CheckCircleOutlineOutlinedIcon sx={{
                  fontSize: "40px",
                  color: "#5CD2C6"
                }} />
                <Typography sx={{
                  fontSize: "24px",
                  color: "#5CD2C6",
                  fontWeight: 600
                }}>
                  Público Alvo:
                  <Typography sx={{
                    fontSize: "18px",
                    color: "#FEFEFE"
                  }}>
                    O e-book construindo músculos, foi feito para indivíduos interessados em adotar um estilo de vida saudável e ativo, buscando melhorar sua forma física e concentração mental.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid display={"flex"} ml={{ md: 4, sm: 0, xs: 0 }} mt={{ md: 0, sm: 2, xs: 2 }}>
              <Box sx={{
                background: "#363753",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <CheckCircleOutlineOutlinedIcon sx={{
                  fontSize: "40px",
                  color: "#5CD2C6"
                }} />
                <Typography sx={{
                  fontSize: "24px",
                  color: "#5CD2C6",
                  fontWeight: 600
                }}>
                  Assunto Principal:
                  <Typography sx={{
                    fontSize: "18px",
                    color: "#FEFEFE"
                  }}>
                    O e-book aborda informações práticas e orientações sobre exercícios, dieta equilibrada e técnicas de concentração, oferecendo um guia abrangente para aqueles que desejam promover mudanças positivas em sua saúde física e mental.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid display={"flex"} ml={{ md: 4, sm: 0, xs: 0 }} mt={{ md: 0, sm: 2, xs: 2 }}>
              <Box sx={{
                background: "#363753",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <CheckCircleOutlineOutlinedIcon sx={{
                  fontSize: "40px",
                  color: "#5CD2C6"
                }} />
                <Typography sx={{
                  fontSize: "24px",
                  color: "#5CD2C6",
                  fontWeight: 600
                }}>
                  Benefícios Oferecidos:
                  <Typography sx={{
                    fontSize: "18px",
                    color: "#FEFEFE"
                  }}>
                    O e-book fornece dicas valiosas e estratégias testadas para auxiliar os leitores na conquista de uma boa forma física, aumento da resistência e força muscular, melhora na alimentação e hábitos saudáveis, além de fornecer ferramentas para o desenvolvimento do foco e da concentração mental.
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mb={3}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#363753", textAlign: "center" }}>
              Veja o que você vai aprender no
              <Typography variant="h4" sx={{ fontWeight: 700, color: "#363753", background: "#5CD2C6", padding: "10px" }}>
                E-book Construindo Músculos:
              </Typography>
            </Typography>
          </Grid>
          <Grid container display={'flex'} justifyContent={"center"} mb={3}>
            <Grid mr={{ md: 2, sm: 0, xs: 0 }} mt={{ md: 0, sm: 2, xs: 2 }}>
              <Box sx={{
                background: "#363753",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px",
                height: "320px",
                display: "flex",
                alignItems: "center"
              }}>
                <Typography sx={{
                  fontSize: "18px",
                  color: "#FEFEFE"
                }}>
                  • Introdução ao treinamento de força e construção muscular <br />
                  • Anatomia e fisiologia muscular: compreendendo como os músculos funcionam <br />
                  • Avaliação física e definição de metas de construção muscular <br />
                  • Princípios do treinamento de força: volume, intensidade e frequência adequados
                </Typography>

              </Box>
            </Grid>
            <Grid ml={{ md: 2, sm: 0, xs: 0 }} mt={{ md: 0, sm: 2, xs: 2 }}>
              <Box sx={{
                background: "#363753",
                width: "300px",
                textAlign: "center",
                padding: "10px",
                borderRadius: "10px",
                height: "320px",
                display: "flex",
                alignItems: "center"
              }}>
                <Typography sx={{
                  fontSize: "18px",
                  color: "#FEFEFE"
                }}>
                  • Técnicas de levantamento de peso eficazes: progressão, sobrecarga progressiva e periodização
                  • Importância da alimentação e nutrição para a construção muscular <br />
                  • Recuperação, descanso e sono: o papel crucial na construção muscular <br />
                  • Motivação e mindset para alcançar seus objetivos de construção muscular <br />
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid md={12} display={'flex'} justifyContent={'center'} mb={3}>
            <Button variant="contained" sx={{
              fontSize: "30px",
              fontWeight: 600,
              background: "#363753",
              borderRadius: "30px",
              padding: "15px",
              width: "600px"
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#FEFEFE" }}>
                Quero conhecer o método!
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box >
    </Grid >
  );
}