import React from 'react';
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import styled from './Sidebar.module.css';


const Sidebar= () => {


    const opciones = [

        {id:1, opcion: "crear cuadrado" , type_icon: 'far', icon: faSquare},
        {id:2, opcion: "crear circulo" , type_icon: 'far', icon: faCircle},
        {id:3, opcion: "crear triangulo" ,type_icon: 'fas', icon: faCaretUp},
        {id:4, opcion: "establecer enlace" , type_icon: 'fas', icon: faPlug}
  
        
    ]; 

    return (  
        <div className={styled.sidebar}>
              <ul>


                  {opciones.map(opcion => (
                    <li key={opcion.id}> <FontAwesomeIcon className={ styled["icon-background"] } icon={opcion.icon} /> </li>

                  ))}

             


              </ul>
        </div>
    );
}
 
export default Sidebar;