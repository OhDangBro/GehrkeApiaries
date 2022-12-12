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
        <Container>
        <PhotoAlbum layout="rows" photos={beePhotos} />
        </Container>
  </div>
      
    );
  }
  
  export default Bees;