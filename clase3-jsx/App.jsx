import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// var i=0
// i=i+1 -> i++; -> i += 1;
// leng prod class -> objeto java class PRoductos {}

// const condition = false
// let  result = ''
// if (condition) {
//   result = 'verdadero'
// } else {
//   result = 'falsa'  
// }

// console.log('La condición es: ' + result + '. Esto es una afirmación')

// console.log(`La condición es: ${ condition ? 'Verdadera' : 'Falsa'}. ESto es una afirmación`)

// spread operator -> [] array -> {}
// const cuatro = 4
// const arrayNumber = [ 0,1,2,3 ]
// insertar el cuatro como elemento
// const newArrayNumnber = [cuatro ,...arrayNumber ]
// console.log(newArrayNumnber)

// propiedades dinámicas: 
const campo = 'id_persona'
const objPersona = {
    first_name: 'Fede',
    last_name: 'Osandón',
    [campo]: 'este1es.el.id',
    email: 'f@gmail.com'
}
// // objPersona.first_name = 'Juan'

// deep matching -> destructiring (se puede hacer con array, objetos)

// const first_name = objPersona.first_name
// const last_name = objPersona.last_name

// const { first_name=first_name, last_name=last_name } = objPersona
//asignación en destructuración 
const { first_name: nombre, last_name: apellido, email='example@email.com' } = objPersona

console.log(email)







function App() {
  

  // js puro
  return ( // js -> html
    <>
      <h1>Fede</h1>
    </>
  )
}

export default App



// jsx -> js escrito de otra manera 
// npm run build