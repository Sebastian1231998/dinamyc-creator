import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "./Workspace.module.css";

const Workspace = () => {



  
  document.addEventListener('DOMContentLoaded',function(){

    const elementos = document.querySelectorAll('#elemento');
    
    let resizerValidate; 
   


    elementos.forEach(elemento =>{

      console.log(elemento.childNodes);

      let pX = document.createElement('p');
      let pY = document.createElement('p');

      elemento.addEventListener('mousedown', mousedown); 
  
  
  
   function mousedown(event){


      if(!resizerValidate){

   
  
      let workspace = document.querySelector('#workspace');
 
 

      console.log(resizerValidate);


      workspace.addEventListener('mousemove', mousemove); 
      workspace.addEventListener('mouseup', mouseup); 
  
      let prevX = event.clientX; 
      let prevY = event.clientY; 


      let rect = elemento.getBoundingClientRect();

      let left = rect.left; 
      let top = rect.top;

         
    function mousemove(e){


      if(left - (prevX  -  e.clientX) < 0 || top -  (prevY - e.clientY) < 0){

    
        return;
      }
      elemento.style.left = left - (prevX  -  e.clientX) + "px"; 
      elemento.style.top = top -  (prevY - e.clientY) + "px"; 

     

      if(!document.querySelector('.pX-existe') ){

  
        pX.classList.add('pX-existe');
        pX.style.color = 'e1e1e1'; 
        pX.textContent = elemento.style.left; 


        elemento.appendChild(pX)
      
      }

      if(!document.querySelector('.pY-existe')){

        pY.classList.add('pY-existe');
        pY.style.color = 'e1e1e1'; 
        pY.textContent = elemento.style.top; 
        elemento.appendChild(pY)
      
      }
      
      setTimeout(()=>{

  
        pX.remove();

   
      },200)


      setTimeout(()=>{

  
        pY.remove();

   
      },200)

      //input.style.display = 'none'
      elemento.style.cursor = 'grabbing'


      }
  

  
      function mouseup() {
  
        workspace.removeEventListener("mousemove" ,mousemove ); 
        workspace.removeEventListener("mouseup" , mouseup ); 

        elemento.style.cursor = 'grab'
       // input.style.display = 'inline-block'
        //input.style.width = '80%'
        pX.remove();
        
        pY.remove();
      } 

    }
  
    }

    })
    


    let resizers = document.querySelectorAll('.resizer-js'); 

  

    resizers.forEach(resizer => {
      let currentResizer; 
    
      let input = document.querySelector('#workspace input' );
      let elemento = resizer.parentNode;
      
      resizer.addEventListener('mousedown', mousedownresizer)

   
      function mousedownresizer(e){



        resizerValidate = true; 

  
      currentResizer = e.target;

      let workspace = document.querySelector('#workspace');

      let prevX = e.clientX; 
      let prevY = e.clientY; 

      workspace.addEventListener('mousemove' , mousemoveresizer);
      workspace.addEventListener('mouseup' , mouseupresizer);


      function mousemoveresizer(event){

        resizer.style.cursor = 'se-resizer';


      


         console.log(elemento);
        let el =  elemento.getBoundingClientRect();

        let elWidth = el.width; 
        let elHeight = el.height; 


        if(currentResizer.classList.contains('se-js')){

          console.log("entrando aqui")
          elemento.style.width = elWidth - (prevX  -  event.clientX) + "px";
          elemento.style.height = elHeight - (prevY - event.clientY ) + "px"; 

  
            elemento.style.cursor = 'se-resize'

        
            input.style.display = 'none'

        }

        prevX = event.clientX; 
        prevY = event.clientY; 

      }

      function mouseupresizer(e){

        workspace.removeEventListener("mousemove" , mousemoveresizer ); 
        workspace.removeEventListener("mouseup" , mouseupresizer ); 

        elemento.style.cursor = 'grab';
        resizerValidate = false; 

        input.style.display = 'inline-block'
        input.style.width = '80%'

      }


      }

    });



 


  })

    

  return (
    <div className={styled.workspace} id="workspace">

        <div className={ styled["body-square"] } id="elemento" >
        

        <div className={`${styled.resizer} resizer-js`} ></div>
        <div className={`${styled.resizer} ${styled.ne} resizer-js`}  ></div>
        <div className={`${styled.resizer} ${styled.sw} resizer-js`}  ></div>
        <div className={`${styled.resizer} ${styled.se} resizer-js se-js`}></div>


        <div className={`${styled.resizer} ${styled.se} resizer-js se-js`} ></div>

       
          <input className={styled['input-square'] }  type="text" placeholder=""/>
        </div>
   
      
        <div className={` ${styled["body-square"]}  ${styled["different-locate-body"]} ` } id="elemento" >
        

        <div className={`${styled.resizer} resizer-js`} ></div>
        <div className={`${styled.resizer} ${styled.ne} resizer-js`}  ></div>
        <div className={`${styled.resizer} ${styled.sw} resizer-js`}  ></div>
        <div className={`${styled.resizer} ${styled.se} resizer-js se-js`}  ></div>


        <div className={`${styled.resizer} ${styled.se} resizer-js se-js`} ></div>

       
          <input className={styled['input-square'] }  type="text" placeholder=""/>
        </div>


    </div>
  );
};

export default Workspace;
