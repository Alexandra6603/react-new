import { useState } from "react";
import { FakingProducts } from "../models";

interface ProductProps {
    product: FakingProducts
}

export function ProductItem({product}: ProductProps) {
    const [descrVisible, setDescrVisible] = useState(false)
    return (
        <div className="border py-2 px-4 flex flex-col items-center mb-2">
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button 
                className="py-2 px-4 border bg-blue-400"
                onClick={() => setDescrVisible(prev => !prev)}>
                {!descrVisible ? 'Подробнее' : 'Скрыть'}
            </button>

            {descrVisible && <div>
                <p>{product.description}</p>
            </div>}
        </div>
    )
} 