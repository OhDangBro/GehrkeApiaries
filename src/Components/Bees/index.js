import React from "react";
import YellowComb from "../../assets/images/HoneyImages/YellowComb.png"
import BeesOnHive from "../../assets/images/BeeImages/BeesOnFrame.jpg"
import BeesOnFrame from "../../assets/images/BeeImages/BeesOnHive.jpg"
import OpenHive from "../../assets/images/BeeImages/OpenHive.jpg"
import SwarmOfBees from "../../assets/images/BeeImages/SwarmOfBees.jpg"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from "react-bootstrap";


function Bees() {
    return (
        
<div  className="beeSection">
<Card id="Bees" className="beeTextCard" sx={{ maxWidth: 700 }}>
        <CardContent>
          <Typography  gutterBottom  component="div" color="#e2ad22">
            <h2  className="chapstickH2">The Bee's</h2>
          </Typography>
          <Typography   className="chapstickText" variant="body2" color="text.secondary">
          American beekeepers have been using Italian honey bees (Apis mellifera ligustica) since they were first imported to the New World in 1859. The Italian bees were and are excellent honey producers, show a gentle temperament that makes them the most popular race of honey bee in North America, have a moderately low tendency to swarm, and have a bright yellow color that makes queens easy to find. </Typography>
        </CardContent >
     
    </Card>
        <Container>
        <div  class="hexagon beeCombOne"><img src={YellowComb}   alt="big honey bottle"></img></div>
         <div class="hexagon beesOnHive"><img src={BeesOnHive}  alt="yellow comb 1" /></div>
         <div class="hexagon beesOnFrame"><img src={BeesOnFrame}  alt="honey filter" /></div>
        <div class="hexagon beeCombTwo"><img src={YellowComb}  alt="yellow comb 2" /></div>
         <div class="hexagon openHive"><img src={OpenHive}  alt="yellow comb 3" /></div>
        <div class="hexagon beeCombThree "><img src={YellowComb}  alt="little honey bottle" /></div>
         <div class="hexagon swarmOfBees"><img src={SwarmOfBees}  alt="yellow comb 3" /></div>
         </Container>
         </div>
    );
  }
  
  export default Bees;