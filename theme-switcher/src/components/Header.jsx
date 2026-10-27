import "./Global.css"
import { ThemeContext } from "../App"
import { useContext } from "react"

const Header = () => {

    const { theme, changeTheme } = useContext(ThemeContext)

    return (
        <div
            id="header"
            style={{
                backgroundColor:
                    theme === "light" ? "#dbb6b6" : "#222222"
            }}
        >
            <h2>I am Header</h2>

            <button
                id="theme-btn"
                onClick={changeTheme}
            >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
    )
}

export default Header
