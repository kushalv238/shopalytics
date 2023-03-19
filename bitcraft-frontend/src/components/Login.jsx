import { useState } from 'react';

import '../stylesheets/loginSignup.css';

const Login = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
            alert('A form was submitted with Name :"' + name + '" ,Age :"' + age + '" and Email :"' + email + '"');
        e.preventDefault();

    }
    return (
        <div className='login-wrapper'>
            <div className="login-box">
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <h3> Login </h3>
                    <label >
                        Name:
                    </label><br />
                    <input type="text" value={name} required onChange={(e) => { handleChange(e) }} /><br />

                    <label >
                        Age:
                    </label><br />
                    <input type="number" value={age} required onChange={(e) => { handleAgeChange(e) }} /><br />

                    <label>
                        Email:
                    </label><br />
                    <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
                    <label>
                        Password:
                    </label><br />
                    <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Login