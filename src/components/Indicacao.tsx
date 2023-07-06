import { Grid, Typography } from "@mui/material";

export default function Indicacao() {
    return (
        <Grid container>
            <Grid md={12} mt={3} display={'flex'} justifyContent={'center'} mb={3}>
                <Typography sx={{
                    fontSize: "60px",
                    fontWeight: "900",
                    color: "#fff",
                    textAlign: "start",
                    fontFamily: "Outfit, sans-serif",
                }}>
                    Por que estamos te indicando esse E-book?
                </Typography>
            </Grid>
            <Grid container mb={3}>
                <Grid container display={"flex"} alignItems={"center"}>
                    <Grid md={5} display={"flex"} justifyContent={"end"}>
                        <Typography sx={{
                            fontSize: "150px",
                            fontWeight: "900",
                            color: "#1F41BB",
                            marginRight: "15px"
                        }}>
                            01
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography sx={{
                            fontSize: "18px",
                            color: "#FEFEFE",
                        }}>
                            O e-book, foi feito para pessoas interessadas<br /> em adotar um estilo de vida mais saudável e ativo,<br /> buscando melhorar sua forma física e concentração mental.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container display={"flex"} alignItems={"center"}>
                    <Grid md={5} display={"flex"} justifyContent={"end"}>
                        <Typography sx={{
                            fontSize: "150px",
                            fontWeight: "900",
                            color: "#260E69",
                            marginRight: "15px"
                        }}>
                            02
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography sx={{
                            fontSize: "18px",
                            color: "#FEFEFE",
                            marginTop: "12px"
                        }}>
                            Aborda informações práticas e orientações sobre exercícios,<br /> dieta equilibrada e técnicas de concentração, oferecendo <br />um guia abrangente para aqueles que desejam promover<br /> mudanças positivas em sua saúde física e mental.
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container display={"flex"} alignItems={"center"}>
                    <Grid md={5} display={"flex"} justifyContent={"end"}>
                        <Typography sx={{
                            fontSize: "150px",
                            fontWeight: "900",
                            color: "#9340FF",
                            marginRight: "15px"
                        }}>
                            03
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography sx={{
                            fontSize: "18px",
                            color: "#FEFEFE",
                            marginTop: "10px"
                        }}>
                            Fornece dicas valiosas e estratégias para te auxiliar<br /> na conquista de uma boa forma física, aumento da resistência <br />e força muscular, melhora na alimentação e hábitos saudáveis, <br />ferramentas para o desenvolvimento do foco e da concentração mental.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}