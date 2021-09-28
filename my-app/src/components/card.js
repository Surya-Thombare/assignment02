import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';


import Image from "../player-images/64257.jpg";

const RecipeReviewCard = ({pData}) => {

   
  React.useEffect(() => {
    console.log("from card",pData);
  }, [pData])

  let clientTimezoneOffset = new Date().getTimezoneOffset()/60
//   console.log(clientTimezoneOffset);

  const Images = async (data) =>{
      const id = data.Id
      console.log(id);
    await import(`../player-images/${id}.jpg`)
         .then((res)=>{
            //  console.log("here");
             return res
         }).catch((err)=>{
             console.error("hello",err)})
  }


  return ( 
  <div
  style={{
    textAlign: "left",
    width: "100%",
    marginTop: "100px",
    marginLeft: "50px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    position: "inherit",
    borderRadius: "10px",
    background: "white"
  }}
  >
  {pData.map(player => 
       <Card 
       style={{
           margin:"5px",
           width: "350px",
           height:"maxContent"
       }}
       >
       <CardHeader
       avatar={
          <Chip sx={{ bgcolor: red[400] }}label={`Value ${player.Value}$`}  />
        
      }
        //  title={}
        //  subheader="September 14, 2016"
       />
       
       
       <CardMedia
         component="img"
         height="194"
        //  image={await import(`../player-images/${player.Id}.jpg`)}
        image={Images(player) == undefined ? Images(player) : Image}
         alt={player.PFName}
       />
       <CardContent>
        <h3>{player.PFName}</h3>
        <h4>Skill : {player.SkillDesc}</h4>
         <Typography>Up Coming Match:</Typography>
         <Typography>
         {player.UpComingMatchesList[0].CCode} VS {player.UpComingMatchesList[0].CCode}
         </Typography>
        <p>{player.UpComingMatchesList[0].MDate}</p>
       </CardContent>
     </Card>

  )}
  </div>
    
  );
}

export default RecipeReviewCard;