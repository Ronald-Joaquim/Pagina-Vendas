import { Grid, Typography } from "@mui/material";
import logo from "../img/logo.png"

export default function Header() {
    return (
        <Grid container>
            <Grid item sx={{
                color: "#fff"
            }}>
                <img src={logo} width={"120px"} />
            </Grid>
            <Grid item mt={1}>
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