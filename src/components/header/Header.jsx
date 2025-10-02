import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">

                    <Link to={'/'} className="header-logo">
                        <img src="/image/logo.svg" alt="logo" />
                        <span>Abito</span>
                    </Link>

                    <div className="header-controls">
                        <button className="btn btn-outline" type="button">
                            Вход и регистрация
                        </button>
                        <button className="btn btn-primary" type="button">
                            Подать обьявление
                        </button>
                    </div>
                    <div className="header-burger">
                        <img src="/image/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
}