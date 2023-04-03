import React from 'react'
import {makeStyles,AppBar, 
    Container,Toolbar,Typography

} from "@material-ui/core"

import { useNavigate } from "react-router-dom";
import './Header.css';

const usestyle = makeStyles(() => ({
    title:{
        flex: 1,
        color: "hsl(245, 44%, 65%)",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
        
    }
})
)

const Header = () => {


    const classes = usestyle();
    const navigate = useNavigate();

 

   

  return (
    <div className='headercol'>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography onClick={() => navigate("/")} className={classes.title}
                variant='h4'>
                    Some Exotic shows
                </Typography>

               
            </Toolbar>
        </Container>

    </AppBar>
    </div>
  )
}

export default Header