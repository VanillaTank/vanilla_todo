import s from './Footer.module.css'

const Footer = () => {

    return(
        <div className={s.footer}>
            <div className={s.footer_inner}>
                <p className={s.footer_text}>Создано 
                <span className={s.footer_link}> ТатьянышDeveloper </span> 
                 {/* <a className={s.footer_link} href="#"> ТатьянышDeveloper </a>    */}
                2021(с)</p>
            </div>
        </div>
    )
}

export default Footer;