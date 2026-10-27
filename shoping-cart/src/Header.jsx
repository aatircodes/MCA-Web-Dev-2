import "./app.css"

const Header = ({ cartItems }) => {
    return (
        <header id="header">
            <h2>Items in cart: {cartItems}</h2>
        </header>
    )
}

export default Header
