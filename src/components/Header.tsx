import { Grid, Typography } from "@mui/material";
import logo from "../img/logo.png"

export default function Header() {
    return (
        <Grid container display={"flex"} justifyContent={{ md: "start", xs: "space-around" }} mt={1.5}>
            <Grid item sx={{
                color: "#fff"
            }}>
                <img src={logo} width={"120px"} alt="Logotipo" />
            </Grid>
            <Grid item mt={1} textAlign={{ xs: "center" }}>
                <Typography sx={{
                    fontSize: "25px",
                    fontWeight: "900",
                    color: "#fff",
                }}>
                    Construindo <br />
                    Músculos
                </Typography>
            </Grid>
        </Grid >
    )
}