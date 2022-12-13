import React from "react";
import fourOzHoney from "../../assets/images/HoneyImages/4ozHoney.jpeg"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HoneyFiltering from '../../assets/images/HoneyImages/HoneyFiltering.jpg'
import oneOzHoney from '../../assets/images/HoneyImages/oneOzHoney.jpg'
import YellowComb from "../../assets/images/HoneyImages/YellowComb.png"
import beeHead from "../../assets/images/BeeHead.svg"





function Honey() {
    return (
      <div className="honeySection">
        <h2>Honey</h2>
           <React.Fragment>
      <CssBaseline />
      <Container fixed>
      
      <div class="hexagon fourOzHoneyImage"><img src={fourOzHoney}  alt="big honey bottle"></img></div>
      <div class="hexagon yellowCombOne"><img src={YellowComb}  alt="yellow comb 1" /></div>
      <div class="hexagon honeyFilterDiv"><img src={HoneyFiltering}  alt="honey filter" /></div>
      <div class="hexagon yellowCombTwo"><img src={YellowComb}  alt="yellow comb 2" /></div>
      <div class="hexagon yellowCombThree"><img src={YellowComb}  alt="yellow comb 3" /></div>
      <div class="hexagon hexagonOneOzHoney "><img src={oneOzHoney}  alt="little honey bottle" /></div>
      </Container>
    </React.Fragment>
  </div>
      
    );
  }
  
  export default Honey;