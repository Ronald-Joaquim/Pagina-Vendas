import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Home from './components/Home';
import Video from './components/HomeVideo';
import Buttons from './components/Button';
import Beneficios from './components/Beneficios';
import Indicacao from './components/Indicacao';

export default function App() {
  return (
    <Grid>
      <Grid container>
        <Box sx={{
          width: "100%",
          backgroundImage: "-webkit-linear-gradient(280deg, #101728 100%, rgba(255, 255, 255, 1) 70%)",
        }}>
          <Grid md={12} sm={12} xs={12} mt={1.5}>
            <Header />
          </Grid>
          <Grid md={12} sm={12} xs={12} mt={6} ml={3}>
            <Home />
          </Grid>
        </Box>

        <Grid container>
          <Video />
        </Grid>

        <Grid container>
          <Buttons />
        </Grid>

        <Grid container>
          <Box sx={{
            width: "100%",
            backgroundImage: "-webkit-linear-gradient(280deg, #101728 100%, rgba(255, 255, 255, 1) 70%)",
          }}>
            <Indicacao />
            <Grid container>
              <Beneficios />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid >
  );
}