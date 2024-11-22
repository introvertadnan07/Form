import { useState } from "react";
import './Form.css';


export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    const handleNameChange = (event) => {
        const { name, value } = event.target;
        setFormData((currData) => ({ ...currData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data Submitted:", formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name </label>
            <input
                placeholder="Enter full name"
                type="text"
                value={formData.fullName}
                id="fullName"
                name="fullName"
                onChange={handleNameChange}
                aria-label="Full Name"
            />

            <br />
            <br />

            <label htmlFor="username">Username</label>
            <input
                placeholder="Enter username"
                type="text"
                value={formData.username}
                id="username"
                name="username"
                onChange={handleNameChange}
                aria-label="Username"
            />

            <br />
            <br />

            <label htmlFor="password">Password</label>
            <input
                placeholder="Enter password"
                type="password"
                value={formData.password}
                id="password"
                name="password"
                onChange={handleNameChange}
                aria-label="Password"
            />

            <br />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}
