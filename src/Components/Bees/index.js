import React from "react";
import PhotoAlbum from "react-photo-album";
import Container from '@mui/material/Container';
import beeImage1 from '../../assets/images/BeeImages/BeeImage1.jpg'
import beeImage2 from '../../assets/images/BeeImages/BeeImage2.jpg'
import beeImage3 from '../../assets/images/BeeImages/BeeImage3.jpg'
import beeImage4 from '../../assets/images/BeeImages/BeeImage4.jpg'
import beeImage5 from '../../assets/images/BeeImages/BeeImage5.jpg'
import beeImage6 from '../../assets/images/BeeImages/BeeImage6.jpg'
import beeImage7 from '../../assets/images/BeeImages/BeeImage7.jpg'
import beeImage8 from '../../assets/images/BeeImages/BeeImage8.jpg'
import beeImage9 from '../../assets/images/BeeImages/BeeImage9.jpg'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FlowerLeft from '../../assets/images/FlowerLeft.svg'
import FlowerRight from '../../assets/images/FlowerRight.svg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const beePhotos = [
  {
      src: beeImage1,
      width: 200,
      height: 150
  },
  {
      src: beeImage2,
      width: 400,
      height: 225
  },
  {
    src: beeImage3,
    width: 200,
      height: 150
},
{
  src: beeImage4,
  width: 400,
  height: 225
},
{
  src: beeImage5,
  width: 200,
  height: 150
},
{
  src: beeImage6,
  width: 400,
  height: 225
},
{
  src: beeImage7,
  width: 200,
  height: 150
},
{
  src: beeImage8,
  width: 400,
  height: 225
},
{
src: beeImage9,
width: 200,
height: 150
},
];

function Bees() {
    return (
      <div className="beesSection">
          <h2 align="center">Bees</h2>

          <Box sx={{ flexGrow: 1 }}>
      <Grid className="beeGrid" container spacing={2}>
        <Grid item xs={2}>
          <Item >
            <img  src={FlowerLeft}></img>
            </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <Container>
        <PhotoAlbum className="beePhotoGallery" layout="rows" photos={beePhotos} />
        </Container>
          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item>
          <img className="rotateimg180"  src={FlowerRight}></img>
          </Item>
        </Grid>
      </Grid>
    </Box>
        
  </div>
      
    );
  }
  
  export default Bees;