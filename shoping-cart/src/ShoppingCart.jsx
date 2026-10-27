import { useState } from "react"
import Header from "./Header"
import Body from "./Body"

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        inStock: true
    },
    {
        id: 2,
        name: "Phone",
        price: 25000,
        category: "Electronics",
        inStock: true
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000,
        category: "Accessories",
        inStock: false
    }
]

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState(0)

    const addToCart = () => {
        setCartItems(prev => prev + 1)
    }

    const removeFromCart = () => {
        setCartItems(prev => prev - 1)
    }

    return (
        <div id="app">
            <Header cartItems={cartItems} />

            <Body
                products={products}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        </div>
    )
}

export default ShoppingCart
