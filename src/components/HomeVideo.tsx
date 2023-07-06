import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Video() {
    return (
        <Grid container display={"flex"} justifyContent={'center'} mt={5} mb={5}>
            <Grid md={12} display={"flex"} justifyContent={'center'} textAlign={"center"}>
                <Typography sx={{
                    fontSize: "40px",
                    fontWeight: "900",
                    color: "rgb(38, 14, 105)",
                    fontFamily: "Outfit, sans-serif",
                }}>
                    Descubra o segredo para construir músculos incríveis com o <br />
                    nosso e-book definitivo sobre construção muscular!
                </Typography>
            </Grid>
            <Grid container display={{ md: "flex", sm: "none", xs: "none" }} justifyContent={'center'}>
                <Grid md={12} display={'flex'} justifyContent={'center'} mt={8} >
                    <Box sx={{
                        padding: "4px 4px 1px",
                        borderRadius: "4px",
                        background: "#fff",
                        boxShadow: "0px 0px 50px 0px rgba(38, 14, 105.1)",
                        md: {
                            display: "none"
                        }
                    }}>
                        <iframe width="800" height="500" src="https://www.youtube.com/embed/5h29R5wrz9Q" title="YouTube video player" />
                    </Box>
                </Grid>
            </Grid>
            <Grid container display={{ md: "none", sm: "flex", xs: "none" }} justifyContent={'center'}>
                <Grid md={12} display={'flex'} justifyContent={'center'} mt={8} >
                    <Box sx={{
                        padding: "4px 4px 1px",
                        borderRadius: "4px",
                        background: "#fff",
                        boxShadow: "0px 0px 50px 0px rgba(38, 14, 105.1)",
                        md: {
                            display: "none"
                        }
                    }}>
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/5h29R5wrz9Q" title="YouTube video player" />
                    </Box>
                </Grid>
            </Grid>
            <Grid container display={{ md: "none", sm: "none", xs: "flex" }} justifyContent={'center'}>
                <Grid md={12} display={'flex'} justifyContent={'center'} mt={8} >
                    <Box sx={{
                        padding: "4px 4px 1px",
                        borderRadius: "4px",
                        background: "#fff",
                        boxShadow: "0px 0px 50px 0px rgba(38, 14, 105.1)",
                        md: {
                            display: "none"
                        }
                    }}>
                        <iframe width="300" height="200" src="https://www.youtube.com/embed/5h29R5wrz9Q" title="YouTube video player" />
                    </Box>
                </Grid>
            </Grid>
        </Grid >
    )
}