import React, { useEffect, useState } from 'react'
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';


const useStyles = makeStyles((theme) => ({
  description: {
    display: "flex",
    paddingLeft: 15,
    paddingTop: 10,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",

    }
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: "Montserrat",
  },

  premiered1: {
    display: "flex",
    paddingLeft: 15,
    paddingTop: 30,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  premiered2: {
    display: "flex",
    paddingLeft: 5,
    paddingTop: 0,

  },

}));

const Details = () => {
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

  if (!shows) return <LinearProgress style={{ backgroundColor: "gold" }} />
  return (
  <>
        <div className={classes.container}>

            <span style={{ display: "flex" }} className={classes.premiered1} >
            <Typography variant="h5" className={classes.heading}>
              Premiered:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5" className={classes.premiered2}
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {shows?.premiered}
            </Typography>
          </span>

             <Typography variant='subtitle1' className={classes.description}>
       {ReactHtmlParser(shows?.summary)}.

       </Typography>
             <Typography variant='subtitle1' className={classes.prevepisode}>
            shows: {shows?.previousepisode}     
       </Typography>
            </div>


       <div className="container">
       
          <div className="card_item" key={shows.id}>
            <div className="card_inner">
              <div className="userName">{shows?.name}</div>
              <div className="userDetails">
                <div>Language: {shows?.language}</div>
                <div>Genres: {shows.genres.join(', ')}</div>
                <div>
                  Rating: {shows.rating.average ? shows.rating.average : 'N/A'}
                </div>
                <div>Premiered: {shows.premiered}</div>
              </div>
            </div>
          </div>
        
      </div>
  </>


  )
}

export default Details