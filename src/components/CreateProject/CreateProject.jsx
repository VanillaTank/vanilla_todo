import s from './CreateProject.module.css'
import MyInput from '../UI/MyInput';

const CreateProject = () => {

    return (
        <div>
            <h1 className={s.title}>СОЗДАНИЕ ПРОЕКТА</h1>
            <div className={s.bgc}>
                <form className={s.create_form}>
                    <MyInput placeholder='Название проекта' />
                    <textarea className={s.comment} placeholder='Комментарии к проекту'></textarea>
                    <MyInput placeholder='Дедлайн (если есть)' />
                    <MyInput placeholder='Задача' />
                    <MyInput placeholder='Задача' />
                    <MyInput placeholder='Задача' />
                    <button className='btn'>ДОБАВИТЬ ЗАДАЧУ</button>
                </form>
            </div>
            <button className={s.saveProject_btn + ' btn'}>СОХРАНИТЬ ПРОЕКТ</button>
        </div>
    )
}

export default CreateProject;