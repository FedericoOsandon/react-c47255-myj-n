import { useState } from "react"
import Titulo from "../Titulo/Titulo"
import { Form } from "./Form"
import { formWhitValidation } from "./fromWhitValidation"
// formik
// pasar un formulario y que me devuelva uno con validaciones 
const FormWhitValidation = formWhitValidation(Form)

const FormContainer = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: ''
    })   

    const handleOnChange = (evt) => {
        // setFormData()
        // console.log('nombre del input: ', evt.target.name)
        // console.log('valor del input: ', evt.target.value)
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
   
    // <Form formData={formData} handleOnChange={handleOnChange} />
    return (
        <FormWhitValidation 
            formData={formData}
            handleOnChange={handleOnChange}
        />
    )
}

export default FormContainer