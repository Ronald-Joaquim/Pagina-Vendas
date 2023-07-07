import { Grid, Typography } from "@mui/material";

export default function Indicacao() {
    return (
        <Grid container>
            <Grid md={12} mt={3} mb={{ md: 3, sm: 3, xs: 0 }}>
                <Typography
                    fontSize={{ md: "60px", sm: "40px", xs: "40px" }}
                    padding={{ md: "0px", sm: "0px", xs: "10px" }}
                    textAlign={{ md: "center", sm: "center", xs: "center" }}
                    sx={{
                        fontWeight: "900",
                        color: "#fff",
                        fontFamily: "Outfit, sans-serif",
                    }}>
                    Por que estamos te indicando esse E-book?
                </Typography>
            </Grid>
            <Grid container mb={3}>
                <Grid container display={"flex"} alignItems={"center"} mb={{ md: 4 }}>
                    <Grid lg={5.5} md={5} xs={12} display={"flex"} justifyContent={{ md: "end", sm: "center", xs: "center" }}>
                        <Typography
                            sx={{
                                fontSize: "150px",
                                fontWeight: "900",
                                color: "#1F41BB",
                                marginRight: "15px"
                            }}>
                            01
                        </Typography>
                    </Grid>
                    <Grid lg={6} md={5} sm={12} display={"flex"} justifyContent={{ lg: "start", md: "end", sm: "center", xs: "center" }} textAlign={{ md: "initial", sm: "center", xs: "center" }}>
                        <Typography
                            fontSize={{ lg: "20px", md: "16px", sm: "20px", xs: "24px" }}
                            padding={{ md: "0px", sm: "12px", xs: "12px" }}
                            sx={{
                                color: "#FEFEFE",
                            }}>
                            O e-book, foi feito para pessoas interessadas<br /> em adotar um estilo de vida mais saudável e ativo,<br /> buscando melhorar sua forma física e concentração mental.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container display={"flex"} alignItems={"center"} mb={{ md: 4 }}>
                    <Grid lg={5.5} md={5} xs={12} display={"flex"} justifyContent={{ md: "end", sm: "center", xs: "center" }}>
                        <Typography sx={{
                            fontSize: "150px",
                            fontWeight: "900",
                            color: "#260E69",
                            marginRight: "15px"
                        }}>
                            02
                        </Typography>
                    </Grid>
                    <Grid lg={6} md={5} sm={12} display={"flex"} justifyContent={{ lg: "start", md: "end", sm: "center", xs: "center" }} textAlign={{ md: "initial", sm: "center", xs: "center" }}>
                        <Typography
                            fontSize={{ lg: "20px", md: "16px", sm: "20px", xs: "24px" }}
                            padding={{ md: "0px", sm: "12px", xs: "12px" }}
                            sx={{
                                color: "#FEFEFE",
                            }}>
                            Aborda informações práticas e orientações sobre exercícios,<br /> dieta equilibrada e técnicas de concentração, oferecendo <br />um guia abrangente para aqueles que desejam promover<br /> mudanças positivas em sua saúde física e mental.
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container display={"flex"} alignItems={"center"} mb={{ md: 4 }}>
                    <Grid lg={5.5} md={5} xs={12} display={"flex"} justifyContent={{ md: "end", sm: "center", xs: "center" }}>
                        <Typography sx={{
                            fontSize: "150px",
                            fontWeight: "900",
                            color: "#9340FF",
                            marginRight: "15px"
                        }}>
                            03
                        </Typography>
                    </Grid>
                    <Grid lg={6} md={5} sm={12} display={"flex"} justifyContent={{ lg: "start", md: "end", sm: "center", xs: "center" }} textAlign={{ md: "initial", sm: "center", xs: "center" }}>
                        <Typography
                            fontSize={{ lg: "20px", md: "16px", sm: "20px", xs: "24px" }}
                            padding={{ md: "0px", sm: "12px", xs: "12px" }}
                            sx={{
                                color: "#FEFEFE",
                            }}>
                            Fornece dicas valiosas e estratégias para te auxiliar<br /> na conquista de uma boa forma física, aumento da resistência <br />e força muscular, melhora na alimentação e hábitos saudáveis, <br />ferramentas para o desenvolvimento do foco e da concentração mental.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}