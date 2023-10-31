import {useState, useEffect} from 'react'
// import './input.css'


export const Input = () => {   

    const handleInput = (event)=>{   
        if (['a','e','i','u','o'].includes(event.key)) {
                event.preventDefault() 
                // event.stopPropagation()   
                
            }
            console.log(event.key)
    }
   
    return (
        <div className="box" >
            <div className="border border-5 border-warning  m-3" >
                <input 
                    className="m-5 "                  
                    type="text" 
                    name="nombre" 
                    onKeyDown={handleInput}
                    // onClick={handleInput}
                />
            </div>
        </div>
    )
}
// const form = document.querySelector('form'=
// form.addEventlistener('evento', function)