import React, {useState} from "react";
import { slide as Menu } from "react-burger-menu"; 
import "../App.css";
import '.././css/styles.css';
import servicesApi from '../services/servicesApi'; 

const SideBar = () => { 
 
    const [register, setRegister] = useState([]) 

    const LoadRegister  = () => {
        console.log('load register')
        servicesApi.getAll()
        .then((res) => {
          console.log(res)
          setRegister(res)
          sessionStorage.setItem('register', JSON.stringify(res));
        }) 
        .catch((err) => {
          console.error(err);
        });
      }
  
     return (
        <Menu > 
            <a href='/' className="menu-item">
                Home
            </a>
            <a href='/listagem' className="menu-item" onClick={LoadRegister}  register={register}>
                Listar registros
            </a>
            <a href='/novo' className="menu-item" >
                 Novo registro
            </a>   
        </Menu> 
     )
} 
export default SideBar 