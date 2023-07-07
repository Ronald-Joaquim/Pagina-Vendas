import { Grid, Typography } from "@mui/material";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';

export default function Beneficios() {
    return (
        <Grid container mt={3} mb={10} display={'flex'} justifyContent={{ lg: "center", md: 'space-around', sm:"center", xs: "center" }}>
            <Grid item display={'flex'}>
                <VerifiedOutlinedIcon sx={{
                    fontSize: "70px",
                    color: "#9340FF"
                }} />
                <Typography mt={.5} variant="h6" sx={{ fontWeight: 400, color: "#9340FF" }}>
                    Checkout
                    <Typography variant="h5" sx={{ fontWeight: 700, color: "#9340FF" }}>
                        Seguro
                    </Typography>
                </Typography>
            </Grid>
            <Grid item display={'flex'} ml={{ md: 5, sm: 0, xs: 2 }}>
                <EmojiEventsOutlinedIcon sx={{
                    fontSize: "70px",
                    color: "#9340FF"
                }} />
                <Typography mt={.5} variant="h6" sx={{ fontWeight: 400, color: "#9340FF" }}>
                    Satisfação
                    <Typography variant="h5" sx={{ fontWeight: 700, color: "#9340FF" }}>
                        Garantida
                    </Typography>
                </Typography>
            </Grid>
            <Grid item display={'flex'} ml={{ md: 5, sm: 0, xs: 0 }} mt={{ md: 0, sm: 0, xs: 2 }}>
                <LockClockOutlinedIcon sx={{
                    fontSize: "70px",
                    color: "#9340FF"
                }} />
                <Typography mt={.5}
                    variant="h6" sx={{ fontWeight: 400, color: "#9340FF" }}>
                    Privacidade
                    <Typography variant="h5" sx={{ fontWeight: 700, color: "#9340FF" }}>
                        Protegida
                    </Typography>
                </Typography>
            </Grid>
        </Grid>
    )
}