import React, { useEffect, useState } from 'react'
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './summary.css';


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
            

             <Typography variant='subtitle1' className={classes.description}>
       {ReactHtmlParser(shows?.summary)}.
       </Typography>
            
          </span>
           


       <div className="container1">
       <Typography variant="h5" className={classes.heading}>
              Show Info:
            </Typography>
       
          <div className="card_item1" key={shows.id}>
            <div className="card_inner1">
              <div className="userName1">Network: {shows?.network?.name}</div>
              <div className="userDetails1">
                <div>Schedule:  {shows?.schedule?.days} at {shows?.schedule?.time} </div>
                <div>Status: {shows?.status}</div>
                <div> Country: {shows?.network?.country?.name } </div>
                <div>Episodes ordered: {shows.premiered} </div>
                <div>Ended: {shows?.ended} </div>
                <div>Runtime: {shows.runtime}m</div>
                <div>Official site: {shows?.officialSite} </div>
                {/* <div>Externals: {shows?.externals} </div> */}
                
              </div>
            </div>
          </div> 
      </div>

       </div>
      
  </>


  )
}

export default Details