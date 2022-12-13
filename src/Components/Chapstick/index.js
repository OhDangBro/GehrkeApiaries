import React from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ChapstickOne from '../../assets/images/ChapstickImages/Chapstick1.jpg'
import ChapstickTwo from '../../assets/images/ChapstickImages/Chapstick2.jpg'
import ChapstickThree from '../../assets/images/ChapstickImages/Chapstick3.jpg'
import YellowComb from "../../assets/images/HoneyImages/YellowComb.png"






function Chapstick() {
    return (
      <div className="honeySection">
        <h2 className="chapstickH2">Chapstick</h2>
           <React.Fragment>
      <CssBaseline />
      <Container fixed>
      
      <div class="hexagon chapstickCombOne"><img src={YellowComb}  alt="big honey bottle"></img></div>
      <div class="hexagon chapstickImageOne"><img src={ChapstickOne}  alt="yellow comb 1" /></div>
      <div class="hexagon chapstickImageTwo"><img src={ChapstickTwo}  alt="honey filter" /></div>
      <div class="hexagon chapstickCombTwo"><img src={YellowComb}  alt="yellow comb 2" /></div>
      <div class="hexagon chapstickImageThree"><img src={ChapstickThree}  alt="yellow comb 3" /></div>
      <div class="hexagon chapstickCombThree "><img src={YellowComb}  alt="little honey bottle" /></div>
      {/* <div class="hexagon yellowCombFour"><img src={BeeHive}  alt="yellow comb 4" /></div> */}
      </Container>
    </React.Fragment>
  </div>
      
    );
  }
  
  export default Chapstick;