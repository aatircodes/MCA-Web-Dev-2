import "./app.css"

const Body = ({ products, addToCart, removeFromCart}) => {
    return (
        <main id="body">
            <div className="products">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <h2>{product.name}</h2>

                        <p>₹{product.price}</p>

                        <p>{product.category}</p>

                        <p>
                            {product.inStock
                                ? "In Stock"
                                : "Out of Stock"}
                        </p>

                        <button
    disabled={!product.inStock}
    onClick={() => addToCart(product)}
>
    {product.inStock ? "Add To Cart" : "Not Available"}
</button>

<button onClick={() => removeFromCart(product)}>
    Remove
</button>

                    </div>
                ))}
            </div>
        </main>
    )
}

export default Body
