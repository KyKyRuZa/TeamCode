import axios from "axios"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import './page.css'
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
    <><body>
         <nav className="navbar navbar-expand-lg p-md-3 sticky-top">
            <div className="container-fluid">
                <Link to="/teamcode/" className="navbar-brand text-white">TeamCode</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/teamcode/" className="nav-link text-white">Главная</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/teamcode/" className="nav-link text-white">Поддержка</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Каталог</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link to="/teamcode/" className="dropdown-item ">Webapp</Link></li>
                            <li><Link to="/teamcode/" className="dropdown-item ">Website</Link></li>
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                <Link to="/teamcode/login" className='btn btn-default border w-100 text-decoration-none btn-lg text-white'>Вход</Link>
                </form>
            </div>
            </div>
        </nav>
        <main>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 ">
                <div className="col-md-6 p-lg-5 mx-auto my-5">
                    <h2 className="display-4 fw-bold text-white">Разработка ботов и вебсайтов для вашего бизнеса</h2>
                    <h4 className="fw-normal mb-3 text-white">Мы - команда экспертов, которые помогают вашему бизнесу выйти на новый уровень через создание уникальных ботов и веб-сайтов</h4>
                    <div className="d-flex gap-3 lead fw-normal">
                        <Link className="btn btn-primary btn-lg">Заказать</Link>
                        <Link className="btn btn-default border-primary btn-lg text-white">Узнать больше</Link>
                    </div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            <section className="dark">Наши услуги
                <div className="container d-flex py-4"> 
                    <article className="postcard dark blue">
                        <div className="postcard__text">
                            <h1 className="postcard__title blue">Разработка ботов</h1>
                            <div className="postcard__preview-txt">Создаем ботов для вашего бизнеса и улучшения взаимодействия с клиентами</div>
                        </div>
                    </article>
                    <article className="postcard dark blue">
                        <div className="postcard__text">
                            <h1 className="postcard__title blue">Веб-дизайн</h1>
                            <div className="postcard__preview-txt">Разрабатываем современные и функциональные веб-сайты, которые привлекают внимание и увеличивают продажи</div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    </body>       
    </>
    )
}

export default Home