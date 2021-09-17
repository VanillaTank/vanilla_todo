import s from './Header.module.css'
const Header = () => {

    return(
        <div className={s.header}>
            <div className={s.header_inner}>
                <a href="#">
                    <img src="./images/Logo.png" alt="VanillaTodo" />
                </a>

                <div>
                    <ul className={s.nav_list}>
                        <li className={s.nav_list__item}><a href="#">АКТУАЛЬНЫЕ</a></li>
                        <li className={s.nav_list__item}><a href="#">ВЫПОЛНЕННЫЕ</a></li>
                        <li className={s.nav_list__item}><a href="#">АРХИВ</a></li>
                    </ul>
                    <button className={s.btn}>ВЫЙТИ</button>
                </div>
            </div>
        </div>
    )
}

export default Header;