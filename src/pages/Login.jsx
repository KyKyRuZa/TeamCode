import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
     const [values, setValues] = useState({
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
            const response = await axios.post('http://localhost:3000/auth/login', values)
            if(response.status === 201) {
                localStorage.setItem('token',response.data.token)
                navigate('/')
            }
        } catch(err) {
            console.log(err.message)
        }
    }
    return(
        <div className="container form">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-1 shadow rounded-5 my-5 p-3 ">
                            <Link to='/teamcode/' className="close"><i className="bi bi-x-lg"></i></Link>
                            <div className="card-body p-sm-5 ">
                                <h2 className="card-title text-center mb-5 fw-light fs-5">Sign In</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="email"><strong>Email address</strong></label>
                                        <input type="email" name="email" placeholder='Username'
                                         className="form-control" onChange={handleChanges} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="password"><strong>Password</strong></label>
                                        <input type="password" name="password" placeholder='Password'
                                         className="form-control" onChange={handleChanges}  />                                         
                                    </div>
                                    <button type="submit" className="btn btn-success mb-4 w-100"><strong>Log in</strong></button>
                                    <div>
                                        <Link to="/teamcode/register" className='btn btn-default border w-100 text-decoration-none'>Create account</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login