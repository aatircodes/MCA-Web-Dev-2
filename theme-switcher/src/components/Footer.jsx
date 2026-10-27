import "./Global.css"
import { ThemeContext } from "../App"
import { useContext } from "react"

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div
            id="footer"
            style={{
                backgroundColor:
                    theme === "light" ? "#d6e2ab" : "#1e1e1e"
            }}
        >
            I am Footer
        </div>
    )
}

export default Footer
