import './App.css'
import './App1.css'

const Titulo = () => {
  return <h1 className='fede' >Fede OSand</h1>
}
// const funciton Titulo (){}

function App() {
  
  const estilos = {fontSize: 100, color: 'red'}
  // js puro
  // salvedades para escribir jsx que difieren en html
  // Titulo()
  return ( // js -> html
    <>
      <Titulo />
      <h4>Hola soy un h4</h4>
      <div onClick={ () => alert('evento del div') } >
        hola
      </div>
      
      <hr />
      <input type='text' placeholder='ing nombre'/>
      {/* <input type='text' placeholder='ing apellido'></input> */}

    </>
  )
}

export default App



// jsx -> js escrito de otra manera 
// npm run build