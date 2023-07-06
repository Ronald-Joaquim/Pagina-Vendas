import { Grid, Typography } from "@mui/material";
import treine from "../img/treine.jpg"

export default function Home() {
    return (
        <Grid container textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"space-around"} mb={15}>
            <Grid item ml={3}>
                <Typography sx={{
                    fontSize: "60px",
                    fontWeight: "900",
                    color: "#fff",
                    textAlign: "start",
                    fontFamily: "Outfit, sans-serif",
                }}>
                    Aprenda como<br />Treinar<br />de verdade
                </Typography>
            </Grid>
            <Grid item sx={{
                boxShadow: "0px 0px 50px 10px rgba(31,65,187.1)",
                height: "700px"
            }}>
                <img src={treine} width={"700px"} height={"700px"} />
            </Grid>
        </Grid >
    )
}