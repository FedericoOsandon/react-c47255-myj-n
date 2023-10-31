import { useState } from "react";
import { Select } from "../../src/components/Select/Select"


export default function Caso1() {
  
    const [option, setOption] = useState(1);
  
    const options = [
        { value: 1, text: "Azul" },
        { value: 2, text: "Rojo" }
    ]

    function optionSelected(value) {
        setOption(value);
        //console.log(value)
    }
      
    return (
        <Select option={option} options={options} optionSelected={optionSelected} />
    )
}










// function Select({ options, optionSelected, option=1 }) {

//     return (
//         <>
//             {option===1 ? 
//                     <img src='https://static.dafiti.com.ar/p/tommy-hilfiger-6711-936993-1-product.jpg' alt='foto' className="w-25" />
//                     : 
//                     <img src='https://static.dafiti.com.ar/p/everlast-0575-351435-1-product.jpg' alt='foto' className="w-25" /> 
//             }

//             <select 
//                 onChange={(evt) => optionSelected(Number(evt.target.value))}
//             >
            
//             {/* <options value={defaultOption} /> */}
//             {
//                 options.map((val) => (
//                     <option value={val.value}>{val.text}</option>
//                 ))
//             }

//             </select>
//         </>
        

//     )
// }