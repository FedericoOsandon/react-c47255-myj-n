export const Select = ({option, optionSelected, options}) => {
    return (
        <div>
            {option===1 ? 
                    <img src='https://www.corbatasstore.es/assets/SKUImages/_resampled/FitWyI1MDAiLCI1MDAiXQ/DropShadowImageWyIjMDAwIiwiMzAiLCI2IiwiNCIsIjgiXQ/PT-060-00.png' alt='foto' className="w-25" />
                    : 
                    <img src='https://static.sprintercdn.com/products/67c3afc5-f2c0-4e54-97d9-ee57b6414fc9/gorra-lisa-con-5-paneles-beechfield_67c3afc5-f2c0-4e54-97d9-ee57b6414fc9_1_2470003864.jpg' alt='foto' className="w-25" /> 
            }
    
            {
               options.map(opt => <>
                    <input
                        onChange={(event)=>optionSelected(opt.value)}
                        type="radio"
                        name="color"
                        checked={option === opt.value}
                        id={opt.value}
                    />
                    <label for={opt.value}>{opt.text}</label>                    
               </>) 
            }
        </div>
        
    )
  }


//   <div>
//             {option===1 ? 
//                     <img src='https://www.corbatasstore.es/assets/SKUImages/_resampled/FitWyI1MDAiLCI1MDAiXQ/DropShadowImageWyIjMDAwIiwiMzAiLCI2IiwiNCIsIjgiXQ/PT-060-00.png' alt='foto' className="w-25" />
//                     : 
//                     <img src='https://static.sprintercdn.com/products/67c3afc5-f2c0-4e54-97d9-ee57b6414fc9/gorra-lisa-con-5-paneles-beechfield_67c3afc5-f2c0-4e54-97d9-ee57b6414fc9_1_2470003864.jpg' alt='foto' className="w-25" /> 
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
//         </div>