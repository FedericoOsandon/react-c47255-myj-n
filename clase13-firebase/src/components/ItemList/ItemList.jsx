
import { memo } from "react"
import { Item } from "../Item/Item"

// memo(componente) - memo(componente, fn())

export const ItemList = memo(({products}) => {
    console.log('REnder itemlist')
    return (
      <div className="container mt-3" style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'      
      }}>
        { products.map(product => <Item key={product.id} product={product} />  ) }
      </div>
      
  )}
  // )}, (propsAntesDelRender, propsDespuesDelRender) => propsAntesDelRender.products.length === propsDespuesDelRender.products.length
)

   