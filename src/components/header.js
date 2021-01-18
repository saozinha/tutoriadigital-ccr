import React from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import logo from '../img/computer2.png'; 
import '../css/styles.css';

export default function Header(props) {
    return ( 
        <div>
            <Grid className="App_header" container spacing={2}>
            
              <Grid item xs={12}>   
                        <span className="textlogo">  <h1>Tutoria Digital  </h1> </span>
                        <span  > 
                                <p > Encontre um tutor para chamar de seu !</p> 
                                <p >Aqui você pode aprender no seu tempo e do seu jeito </p> 
                        </span>
                </Grid>

                <Grid item xs={12}> 
              
                         <img src={logo} alt="Logo" /> 
                </Grid> 
               
            </Grid>
        </div> 
    )
}
