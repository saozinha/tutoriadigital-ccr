 
import React, {useEffect, useState} from "react";    
import Card from "@material-ui/core/Card"; 
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid'   
import SideBar from "../components/sidebar";  
import servicesApi from '../services/servicesApi'; 
import Footer from '../components/Footer' 
 

import '../App.css'
 
  
const RegisterList = () => { 
    
  let [allData, setAllData] = useState(JSON.parse(sessionStorage.getItem('register')));
  
  useEffect(() => {   
 
    if (allData === '' || allData === null) {
      console.log('getAll -- ') 
      servicesApi.getAll()
        .then((res) => {
            console.log(res) 
            sessionStorage.setItem('register', JSON.stringify(res));
            setAllData(res)
        }) 
        .catch((err) => {
          console.error(err);
        });
    }
  }, [allData])

  return ( 
      <div className="App">
             <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />  
             <br /> 
                 
               <Grid container className="App-container"
                      spacing={2}
                      direction="row"
                      alignItems="center"
                      justify="center" > 


                    <Grid item xs={8} md={8}>

                        <h1> Listagem de Registros </h1>

                        <br />
                    </Grid>

                      {allData && allData.map((item) => (

                        <Grid item xs={8} md={8} key={item.cpf}  >
                        <Card className="card" key={item.cpf} >  
                          <CardContent>
                              <Typography paragraph>{item.name} </Typography>  
                              <Typography paragraph>Natural de : {item.placeBirth} </Typography>
                              <Typography paragraph>Pais : {item.countryBirth} </Typography>
                          </CardContent>
                        </Card> 
                        </Grid>
                    ))}
                </Grid>
                
                <br />
                <Footer pageWrapId={"page-wrap"} /> 
      </div>
  )
} 
export default RegisterList;