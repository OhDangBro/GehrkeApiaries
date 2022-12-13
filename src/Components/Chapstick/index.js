import React from "react";
import Container from '@mui/material/Container';
import ChapstickOne from '../../assets/images/ChapstickImages/Chapstick1.jpg'
import ChapstickTwo from '../../assets/images/ChapstickImages/Chapstick2.jpg'
import ChapstickThree from '../../assets/images/ChapstickImages/Chapstick3.jpg'
import YellowComb from "../../assets/images/HoneyImages/YellowComb.png"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





function Chapstick() {
    return (
      <div className="chapstickSection">
        
        <Card className="chapstickTextCard" sx={{ maxWidth: 700 }}>
        <CardContent>
          <Typography gutterBottom  component="div" color="#e2ad22">
            <h2 className="chapstickH2">Chapstick</h2>
          </Typography>
          <Typography className="chapstickText" variant="body2" color="text.secondary">
          When people find out that we are honey bee farming, they always ask about the honey. But bees also produce beeswax and something will need to be done with the beeswax when you harvest honey. We take this beeswax and filter out the impurities using a simple method of boiling in water and filtering. From there we just mix the beeswax with 1 parts beeswax and 2 parts coconut oil and a few drops of vitamin e. All the ingredients are organic. </Typography>
        </CardContent>
     
    </Card>
      
      <Container fixed>
      
      <div class="hexagon chapstickCombOne"><img src={YellowComb}  alt="big honey bottle"></img></div>
      <div class="hexagon chapstickImageOne"><img src={ChapstickOne}  alt="yellow comb 1" /></div>
      <div class="hexagon chapstickImageTwo"><img src={ChapstickTwo}  alt="honey filter" /></div>
      <div class="hexagon chapstickCombTwo"><img src={YellowComb}  alt="yellow comb 2" /></div>
      <div class="hexagon chapstickImageThree"><img src={ChapstickThree}  alt="yellow comb 3" /></div>
      <div class="hexagon chapstickCombThree "><img src={YellowComb}  alt="little honey bottle" /></div>
      {/* <div class="hexagon yellowCombFour"><img src={BeeHive}  alt="yellow comb 4" /></div> */}
      </Container>
      
   
   

  </div>
      
    );
  }
  
  export default Chapstick;