import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import fourOzHoney from "../../assets/images/HoneyImages/4ozHoney.jpeg"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Flower from '../../assets/images/Flower.svg'
import HoneyFiltering from '../../assets/images/HoneyImages/HoneyFiltering.jpg'
import oneOzHoney from '../../assets/images/HoneyImages/oneOzHoney.jpg'
import YellowComb from "../../assets/images/HoneyImages/YellowComb.png"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Honey() {
    return (
      <div className="honeySection">
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item><img className="smallFlowerLeft" src={Flower}></img></Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="beesFont"><h2>Honey</h2></Item>
        </Grid>
        <Grid item xs={4}>
        <Item><img className="smallFlowerRight" src={Flower}></img></Item>
        </Grid>
      </Grid>
    </Box>
           <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <div className="combAndImageOne">
      <div class="hexagon fourOzHoneyImage"><img src={fourOzHoney} width="600" height="600" alt="yellow comb" /></div>
      <div class="hexagon yellowCombOne"><img src={YellowComb} width="600" height="600" alt="honey filter" /></div>
      </div>
      <div class="hexagon honeyFilterDiv"><img src={HoneyFiltering} width="600" height="600" alt="yellow comb" /></div>
      <div class="hexagon yellowCombTwo"><img src={YellowComb} width="600" height="600" alt="honey filter" /></div>
      <div class="hexagon yellowCombThree"><img src={YellowComb} width="600" height="600" alt="yellow comb" /></div>
      <div class="hexagon hexagonOneOzHoney "><img src={HoneyFiltering} width="600" height="600" alt="honey filter" /></div>
    
      </Container>
    </React.Fragment>
  </div>
      
    );
  }
  
  export default Honey;