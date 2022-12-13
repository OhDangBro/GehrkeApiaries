import React from "react";
import fourOzHoney from "../../assets/images/HoneyImages/4ozHoney.jpeg"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HoneyFiltering from '../../assets/images/HoneyImages/HoneyFiltering.jpg'
import oneOzHoney from '../../assets/images/HoneyImages/oneOzHoney.jpg'
import YellowComb from "../../assets/images/HoneyImages/YellowComb.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





function Honey() {
    return (
      <div className="honeySection">
      <Container >
      <div className="hexagonHoneyContainer">
        <div class="hexagon fourOzHoneyImage"><img src={fourOzHoney}  alt="big honey bottle"></img></div>
        <div class="hexagon yellowCombOne"><img src={YellowComb}  alt="yellow comb 1" /></div>
        <div class="hexagon honeyFilterDiv"><img src={HoneyFiltering}  alt="honey filter" /></div>
        <div class="hexagon yellowCombTwo"><img src={YellowComb}  alt="yellow comb 2" /></div>
        <div class="hexagon yellowCombThree"><img src={YellowComb}  alt="yellow comb 3" /></div>
        <div class="hexagon hexagonOneOzHoney "><img src={oneOzHoney}  alt="little honey bottle" /></div>
      </div>
      </Container>
      <Card className="honeyTextCard" sx={{ maxWidth: 700 }}>
        <CardContent>
          <Typography  gutterBottom  component="div" color="#e2ad22">
          <h2>Honey</h2>
          </Typography>
          <Typography className="honeyText" variant="body2" color="text.secondary">
          We go into each hive and take 20% of the honey, leaving the other 80% of the honey for the bees. Honey bees make the honey as a way of storing food to eat over the cooler winter periods, when they are unable to forage. Taking only 20% of the honey leaves the bees with more than enough to last till spring.  When spring comes we will harvest most of the leftover honey.  Our honey is 100% Pure Organic, Raw & Unfiltered, from our hive to your home.
          </Typography>
        </CardContent>
     
    </Card>
    
  </div>
      
    );
  }
  
  export default Honey;