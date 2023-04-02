
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  sidebar: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 25,
    marginTop: 25,
    borderRight: "2px solid grey",
  },
  heading:{
    fontWeight:'bold',
    marginBottom:5,
    fontFamily:"Montserrat",
  },
  description:{
    width: "100%" ,      
    padding:25,
    paddingBottom:15,
    paddingTop:0,
    textAlign:"justify",       
    fontFamily:"Montserrat",
  },
  marketData: {
    alignSelf: "start",
    padding: 2,
    paddingTop: 0,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
  },
  language: {
    alignSelf: "start",
    padding: 2,
    paddingTop: 5,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
},
}));

const Cardsummary = () => {
  const { id } = useParams();

  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.tvmaze.com/shows/${id}`);
      
      
      setShows(result.data);
    };

    fetchData();
  }, [id]);
  console.log(shows);

  const classes = useStyles();

if(!shows) return <LinearProgress style={{backgroundColor:"gold"}}/>
return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img src={shows?.image?.original} alt="" height="200" />
        <Typography variant="h4">{shows?.name}</Typography>

        <div className={classes.language}>
        <span style={{ display: "flex" }}>
        <Typography variant="h5" className={classes.heading}>
          Language: 
        </Typography>
        &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
            {shows?.language}
            </Typography>
          </span>
       
        </div>

        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Genres:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: "Montserrat" }}>
              {shows.genres ? shows.genres.join(", ") : ""}
            </Typography>
          </span>

          
        </div>
      </div>
    

   
    <Details  shows={shows}/>
    </div>
  );
};

export default Cardsummary;









// return (
//   <div>
//     {shows?.map((show) => (
//       <div className={classes.container} key={show.id}  >
//         <div className={classes.sidebar}  >
//           <img
//             src={show?.image?.original}
//             alt=""
//             height="200"
//             style={{
//               marginBottom:20
//             }}
//           />
//           <Typography variant='h3' className={classes.heading}>
//             {show.name}
//           </Typography>
//           <Typography variant='subtitle1' className={classes.description}>
//             Language: {show.language}
//           </Typography>
//           <div  className={classes.marketData}>
//             <span style={{ display: "flex" }}>
//               <Typography variant='h5' className={classes.heading}> 
//                 Genres: 
//               </Typography>
//               &nbsp; &nbsp;
//               <Typography variant='h5' 
//                 style={{
//                   fontFamily:"Montserrat",
//                 }}>  
               
//                  {show.genres ? show.genres.join(', ') : ''}

//               </Typography>
//             </span>
            
//             <span style={{ display: "flex" }}>
//               <Typography variant="h5" className={classes.heading}>
//                 Premiered:
//               </Typography>
//               &nbsp; &nbsp;
//               <Typography
//                 variant="h5"
//                 style={{
//                   fontFamily: "Montserrat",
//                 }}
//               >
//                 {show.premiered}
//               </Typography>
//             </span>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// );
//             }

// export default Cardsummary;
