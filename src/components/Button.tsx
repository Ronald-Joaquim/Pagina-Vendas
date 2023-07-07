import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';

export default function Buttons() {
    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "rgb(31,65,187)",
        '&:hover': {
            backgroundColor: "rgb(23, 45, 128)",
        },
    }));
    return (
        <Grid md={12} sm={10} xs={10} display={'flex'} justifyContent={"center"} mt={5} mb={{ md: 10, sm: 5, xs: 5 }} ml={{ md: 0, sm: 0, xs: 1 }}>
            <ColorButton variant="contained" sx={{
                fontSize: "30px",
                fontWeight: 600,
                borderRadius: "30px",
                padding: "15px",
                width: "600px"
            }}
                href='https://pay.kiwify.com.br/mmBffsg'>
                <Typography sx={{ fontWeight: 700, color: "#FEFEFE" }} fontSize={{ md: "25px", sm: "20px", xs: "15px" }}>
                    Quero conhecer o método!
                </Typography>
            </ColorButton>
        </Grid>
    )
}