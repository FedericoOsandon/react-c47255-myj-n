import { useState } from "react"

export const formWhitValidation = (FormWrappedComponent) => {


    // ______________________ nuevo componente __________________
    // componente nuevo con validaciones
    const NewFormWhitValidation = (props)=> {
        const [errors, setError] = useState({})

        const validateForm = () => {
            let newErrors = {}
            let isValid  = true

            if (!props.formData.nombre) {
                newErrors.nombre = 'El campo nombre es obligatorio'
                isValid = false
            }
            if (!props.formData.correo) {
                newErrors.correo = 'El campo correo es obligatorio'
                isValid = false                
            }
            setError(newErrors)
            return isValid
        }
        
        // return <Form />
        return (
            <FormWrappedComponent  // form 
                // {formData, handleOnChange}      
                {...props}
                // nuevas props de formulario
                errors = {errors}
                validateForm={validateForm}
            />
        )
        
    }
    // ______________________ nuevo componente __________________

    return NewFormWhitValidation 

}
