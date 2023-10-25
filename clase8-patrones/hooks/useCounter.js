// coustom hook counter
import { useState } from "react"

/**
 * The `useCounter` function is a custom React hook that manages a count state and provides functions
 * to increment and decrement the count within a specified range.
 * @returns The `useCounter` function returns an object with three properties: `count`, `handleResta`,
 * and `handleSuma`.
 */
export const useCounter = (min, max) => {
    const [count, setCount] = useState(min)
    const handleSuma = () => {
        if (count < max) {
            setCount(count+1)            
        }
    }
    
    const handleResta = () => {
        if (count > min) {
            setCount(count-1)            
        }
    }
    
    return {
        count,
        handleResta,
        handleSuma
    }
}