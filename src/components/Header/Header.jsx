import s from './Header.module.css'
import { Link } from 'react-router-dom'
const Header = () => {

    return(
        <div className={s.header}>
            <div className={s.header_inner}>
                <a href="#">
                    <img src="./images/Logo.png" alt="VanillaTodo" />
                </a>

                <div>
                    <ul className={s.nav_list}>
                        <li className={s.nav_list__item}><Link to="/">АКТУАЛЬНЫЕ</Link></li>
                        <li className={s.nav_list__item}><Link to="/done">ВЫПОЛНЕННЫЕ</Link></li>
                        <li className={s.nav_list__item}><Link to="/create-project">Добавить проект</Link></li>
                        <li className={s.nav_list__item}><Link to="/archieve">АРХИВ</Link></li>
                    </ul>
                    <button className={s.btn}>ВЫЙТИ</button>
                </div>
            </div>
        </div>
    )
}

export default Header;