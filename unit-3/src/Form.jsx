import { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    id: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <br /><br />

        <label>ID:</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Form;