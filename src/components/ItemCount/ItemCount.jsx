import styles from './ItemCount.module.css';
import { useState } from 'react';

const ItemCount  = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decremnt = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decremnt}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                <button>Agregar al carrito</button>
            </div>
        </div>
        
    )
}

export default ItemCount