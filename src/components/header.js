import React from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import logo from '../img/computer.png'; 
import '../css/styles.css';

export default function Header(props) {
    return ( 
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <span className="textlogo">  <h1>Tutoria Digital  </h1> </span>
                    <span  > 
                            <p > Encontre um tutor para chamar de seu !</p> 
                            <p >Aqui você pode aprender no seu tempo e do seu jeito </p> 
                    </span>
                </Grid> 
                    <Grid item xs={12} sm={6}>
                         <p > Agende seu horário !</p>
                         <img src={logo} alt="Logo" /> 
                     </Grid> 
                 <Grid item xs={12}>  
                        <Button className="btAcessar"
                            variant="contained" 
                            color="primary">
                            Acessar
                        </Button> 

                 </Grid>   
            </Grid>
        </div> 
    )
}
