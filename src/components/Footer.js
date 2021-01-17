import React from 'react'
import { Grid } from '@material-ui/core'
 
import '../App.css'

export default function Footer(props) {
    return ( 
        <Grid item >
            <div className='App_footer'> 
               <hr />
               <p> Autor  >>  Conceicao Lourenco   </p>
               <p> <a href="https://github.com/saozinha/softplayer-try"> Show the Code </a> </p> 
            </div>
        </Grid> 
    )
}
