
export const Form = ({formData, handleOnChange, errors, validateForm}) => {

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log('enviando...', formData)            
        }
    }

    return (
         <form onSubmit={handleOnSubmit}>            
            <input 
                type='text' 
                name='nombre' 
                placeholder='ingrese el nombre'
                value={formData.nombre}
                onChange={handleOnChange}
            />
            <br />
            {errors && errors.nombre && <span>{errors.nombre}</span>}
            <br />
            <input 
                type='text' 
                name='correo' 
                placeholder='ingrese el email'
                value={formData.correo}
                onChange={handleOnChange}
            />
            <br />
             {errors && errors.correo && <span>{errors.correo}</span>}
            <br />
            <button>Enviar</button>
        </form>
    )
}

