import { Grid, Typography } from "@mui/material";
import treine from "../img/treine.jpg"

export default function Home() {
    return (
        <Grid container display={"flex"} alignItems={{ lg: "center" }} justifyContent={{ lg: "space-around" }} mb={{ md: 15, sm: 10, xs: 10 }}>
            <Grid item lg={5} md={12} xs={12}>
                <Typography
                    fontSize={{ md: "60px", sm: "40px", xs: "40px" }}
                    textAlign={{ lg: "start", md: "center", sm: "center", xs: "center" }}
                    sx={{
                        fontWeight: "900",
                        color: "#fff",
                        fontFamily: "Outfit, sans-serif",
                    }}>
                    Aprenda como<br />Treinar<br />de verdade
                </Typography>
            </Grid>
            <Grid item lg={5} md={12} xs={12}>
                <Grid container display={{ md: "flex", sm: "none", xs: "none" }} justifyContent={{ md: 'center', sm: 'center', xs: 'center' }}>
                    <Grid display={'flex'} justifyContent={'center'} mt={8} sx={{
                        boxShadow: "0px 0px 50px 10px rgba(31,65,187.1)",
                        height: "700px"
                    }}>
                        <img src={treine} width={"700px"} height={"700px"} alt="Imagem de treino" />
                    </Grid>
                </Grid>
                <Grid container display={{ md: "none", sm: "flex", xs: "none" }} justifyContent={'center'}>
                    <Grid display={'flex'} justifyContent={'center'} mt={8} sx={{
                        boxShadow: "0px 0px 50px 10px rgba(31,65,187.1)",
                        height: "500px"
                    }}>
                        <img src={treine} width={"500px"} height={"500px"} alt="Imagem de treino" />
                    </Grid>
                </Grid>
                <Grid container display={{ md: "none", sm: "none", xs: "flex" }} justifyContent={'center'}>
                    <Grid display={'flex'} mt={8} sx={{
                        boxShadow: "0px 0px 50px 10px rgba(31,65,187.1)",
                        height: "300px"
                    }}>
                        <img src={treine} width={"300px"} height={"300px"} alt="Imagem de treino" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}