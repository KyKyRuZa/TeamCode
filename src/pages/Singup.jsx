import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import './page.css'

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/auth/singup', values)
            if(response.status === 201) {
                navigate('/login')
            }
        } catch(err) {
            console.log(err.message)
        }
    }
    return (
        <div className="container form">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-1 shadow rounded-5 my-5 p-3">
                        <Link to='/' className="close"><i className="bi bi-x-lg"></i></Link>
                            <div className="card-body p-sm-5">
                                <h2 className="card-title text-center mb-5 fw-light fs-5">Sign Up</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="name"><strong>Username</strong></label>
                                            <input type="text" placeholder='Enter Username' name="username"
                                            onChange={handleChanges} className="form-control" />
                                            
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="email"><strong>Email</strong></label>
                                            <input type="email" placeholder='Enter Email' name='email' 
                                            onChange={handleChanges} className="form-control" />
                                            
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="password"><strong>Password</strong></label>
                                            <input type="password" placeholder='Enter Password' name='password' 
                                            onChange={handleChanges} className="form-control" />
                                        </div>
                                        <button type="submit" className="btn btn-success mb-4 w-100"><strong>Sing Up</strong></button>
                                        <div>
                                            <Link to="/login" className='btn btn-default border w-100 text-decoration-none'>Login</Link>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Register