import React from 'react';
import styled from './Header.module.css'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import Avatar from './Avatar'


const Header  = () => {
    return (

        <div className={styled.container}>
          <header className={styled.header}>
              <FontAwesomeIcon className={styled["component-1"]}  icon={faHome} /> 

              <Avatar className="component-1 header-children" />


        </header>

        </div>
   

     );
}
 
export default Header;