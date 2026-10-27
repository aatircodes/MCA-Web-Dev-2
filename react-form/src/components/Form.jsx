import { useState } from "react"

const Form = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pass: "",
        age: ""
    })
}

    function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
}

    function handleSubmit(e) {
        e.preventDefault();

        console.log(formData);
    }

    return(
        <form action="onSubmit">

            <input
                type="text"
                name="name"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
            />

            <input 
            type="password"
            name="pass"
            placeholder="Enter your Password"
            value={formData.pass}
            onChange={handleChange} />

           <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                />
                Male

            <button type="submit">
                Submit
            </button>
        </form>
    )

export default Form