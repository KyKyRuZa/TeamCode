import axios from "axios"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
const navigate = useNavigate
    const fetchUser = async () => {
        try{
            const token = localStorage.getItem('token')
            const response = await axios.get('http://localhost:3000/auth/home',{
                headers:{
                    "Authorization" : `Baerer ${token}`
                }
            })
            if (response.status !== 201){
                navigate('/login')
            } 
        }catch(err){
            navigate('/login')
            console.log(err)}
        }
    useEffect(()=> {
        fetchUser()
    })
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light p-md-3">
            <div className="container-fluid">
                <Link to="/teamcode/" className="navbar-brand">TeamCode</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/teamcode/" className="nav-link">Главная</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/teamcode/" className="nav-link">Поддержка</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Каталог</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to="/teamcode/" className="dropdown-item">Webapp</Link></li>
                            <li><Link to="/teamcode/" className="dropdown-item">TeamCode</Link></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                <Link to="/teamcode/login" className='btn btn-default border w-100 text-decoration-none'>Вход</Link>
                </form>
            </div>
            </div>
        </nav>
        </>
    )
}

export default Home