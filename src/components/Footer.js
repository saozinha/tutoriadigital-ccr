import React from 'react'
import { Grid } from '@material-ui/core'
 
import '../App.css'

export default function Footer(props) {
    return ( 
        <Grid item >
            <div className='App_footer'>  
               <p> Copyright © 2021 tutoriaDigital   </p>
               <p> <a href="https://github.com/saozinha/tutoriadigital-ccr"> Show the Code </a> </p> 
            </div>
        </Grid> 
    )
}
