import { useCounter } from "../../hooks/useCounter"


// useNombre -> hook  
export const ItemCounter = ({initial=1, stock=10, onAdd}) => {
    const {count, handleResta, handleSuma} = useCounter(initial, stock)    

    const handleOnAdd = ()=>{
        onAdd(count)
    }
    return (
        <div className="text-center">
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button className='btn btn-outline-dark' onClick={handleSuma}> + </button>
                <button className='btn btn-outline-dark' onClick={handleResta}> - </button>
                <button className='btn btn-outline-dark' onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </div>
    )
}
