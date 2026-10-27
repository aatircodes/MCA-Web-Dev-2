import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

function App() {

    const [theme, setTheme] = useState("light")

    const changeTheme = () => {
        setTheme(prevTheme =>
            prevTheme === "light" ? "dark" : "light"
        )
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <Header />
            <Body />
            <Footer />
        </ThemeContext.Provider>
    )
}

export default App
