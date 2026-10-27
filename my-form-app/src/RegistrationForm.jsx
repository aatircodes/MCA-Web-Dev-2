import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    course: "Flutter",
    skills: [],
    country: "USA",
    address: "",
    website: "",
    preferredTime: "12:25",
    favoriteColor: "#7a4a2b",
    experience: 5,
    photo: null,
    agree: false,
  });

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const toggleSkill = (skill) => {
    setForm((f) => ({
      ...f,
      skills: f.skills.includes(skill)
        ? f.skills.filter((s) => s !== skill)
        : [...f.skills, skill],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Form submitted! Check console for data.");
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    fontSize: "15px",
    border: "1px solid #d9d9d9",
    borderRadius: "6px",
    outline: "none",
    boxSizing: "border-box",
    color: "#333",
    fontFamily: "inherit",
    background: "#fff",
  };

  const labelStyle = {
    display: "block",
    fontSize: "15px",
    color: "#333",
    marginBottom: "8px",
    marginTop: "20px",
    textAlign: "left",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef1f4",
        display: "flex",
        justifyContent: "center",
        padding: "40px 16px",
        textAlign: "left",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          overflow: "hidden",
          border: "1px solid #e5e5e5",
          textAlign: "left",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "20px 24px 0",
          }}
        >
          <div
            style={{
              background: "#f4b400",
              padding: "24px",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "30px",
                fontWeight: 600,
                color: "#1a1a1a",
              }}
            >
              Registration Form
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: "8px 28px 32px", textAlign: "left" }}>
          {/* Full Name */}
          <label style={{ ...labelStyle, marginTop: 0 }}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            style={inputStyle}
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
          />

          {/* Email */}
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={inputStyle}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />

          {/* Password */}
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            style={inputStyle}
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
          />

          {/* Age */}
          <label style={labelStyle}>Age</label>
          <input
            type="number"
            style={inputStyle}
            value={form.age}
            onChange={(e) => update("age", e.target.value)}
          />

          {/* Date of Birth */}
          <label style={labelStyle}>Date of Birth</label>
          <input
            type="date"
            style={inputStyle}
            value={form.dob}
            onChange={(e) => update("dob", e.target.value)}
          />

          {/* Gender */}
          <label style={labelStyle}>Gender</label>
          <div style={{ display: "flex", gap: "24px", fontSize: "15px", color: "#333" }}>
            {["Male", "Female", "Other"].map((g) => (
              <label
                key={g}
                style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}
              >
                <input
                  type="radio"
                  name="gender"
                  checked={form.gender === g}
                  onChange={() => update("gender", g)}
                />
                {g}
              </label>
            ))}
          </div>

          {/* Select Course */}
          <label style={labelStyle}>Select Course</label>
          <select
            style={{ ...inputStyle, appearance: "auto" }}
            value={form.course}
            onChange={(e) => update("course", e.target.value)}
          >
            <option>Java</option>
            <option>React</option>
            <option>Python</option>
            <option>Flutter</option>
          </select>

          {/* Skills */}
          <label style={labelStyle}>Skills</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "#333" }}>
            {["Java", "React", "Python", "Flutter"].map((skill) => (
              <label key={skill} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={form.skills.includes(skill)}
                  onChange={() => toggleSkill(skill)}
                />
                {skill}
              </label>
            ))}
          </div>

          {/* Country */}
          <label style={labelStyle}>Country</label>
          <select
            style={{ ...inputStyle, appearance: "auto" }}
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
          >
            <option>USA</option>
            <option>India</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>

          {/* Address */}
          <label style={labelStyle}>Address</label>
          <textarea
            placeholder="Enter your address"
            rows={4}
            style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
          />

          {/* Website */}
          <label style={labelStyle}>Website</label>
          <input
            type="url"
            placeholder="https://example.com"
            style={inputStyle}
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />

          {/* Preferred Time */}
          <label style={labelStyle}>Preferred Time</label>
          <input
            type="time"
            style={inputStyle}
            value={form.preferredTime}
            onChange={(e) => update("preferredTime", e.target.value)}
          />

          {/* Favorite Color */}
          <label style={labelStyle}>Favorite Color</label>
          <input
            type="color"
            value={form.favoriteColor}
            onChange={(e) => update("favoriteColor", e.target.value)}
            style={{
              width: "60px",
              height: "36px",
              padding: "2px",
              border: "1px solid #d9d9d9",
              borderRadius: "6px",
              cursor: "pointer",
              background: "#fff",
            }}
          />

          {/* Experience */}
          <label style={labelStyle}>Experience: {form.experience} Years</label>
          <input
            type="range"
            min={0}
            max={20}
            value={form.experience}
            onChange={(e) => update("experience", e.target.value)}
            style={{ width: "100%" }}
          />

          {/* Upload Photo */}
          <label style={labelStyle}>Upload Photo</label>
          <input
            type="file"
            onChange={(e) => update("photo", e.target.files?.[0] || null)}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #d9d9d9",
              borderRadius: "6px",
              boxSizing: "border-box",
              background: "#fff",
            }}
          />

          {/* Terms */}
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "15px",
              color: "#333",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) => update("agree", e.target.checked)}
            />
            I agree to the Terms and Conditions
          </label>

          {/* Submit */}
          <button
            type="submit"
            style={{
              marginTop: "28px",
              width: "100%",
              padding: "14px",
              fontSize: "16px",
              fontWeight: 600,
              color: "#1a1a1a",
              background: "#f4b400",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}