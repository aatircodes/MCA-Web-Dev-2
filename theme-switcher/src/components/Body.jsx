import "./Global.css"
import { ThemeContext } from "../App"
import { useContext } from "react"

const Body = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div
            id="body"
            style={{
                backgroundColor:
                    theme === "light" ? "#b9a3de" : "#333333"
            }}
        >
            <h2>I am Body</h2>
        </div>
    )
}

export default Body
