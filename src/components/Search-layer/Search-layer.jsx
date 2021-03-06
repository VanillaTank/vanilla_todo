import s from './Search-layer.module.css'
import { Link } from 'react-router-dom'

const SearchLayer = function () {
  return (
    <div className={s.search_layer} >
      <div className="container">
        <div className={s.search_layer_inner}>
          <div className={s.input_wrap}>
            <svg className={s.input_img} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.22351 11.9828C3.04695 11.9828 0.434448 9.40001 0.434448 6.19376C0.434448 3.01719 3.01726 0.404694 6.22351 0.404694C9.42976 0.404694 12.0126 2.98751 12.0126 6.19376C11.9829 9.40001 9.40007 11.9828 6.22351 11.9828ZM6.22351 1.26563C3.49226 1.26563 1.2657 3.49219 1.2657 6.22344C1.2657 8.95469 3.49226 11.1813 6.22351 11.1813C8.95476 11.1813 11.1813 8.95469 11.1813 6.22344C11.1516 3.49219 8.92507 1.26563 6.22351 1.26563Z" fill="#666677" />
              <path d="M13.9423 14.5656L9.90479 10.5578L10.5579 9.90469L14.5657 13.9422L13.9423 14.5656Z" fill="#666677" />
            </svg>

            <input className={s.input} type="text" placeholder='Название проекта' />
          </div>
          {/* по дедлайну и сделано/не сделано */}
          <button className={s.btn}>ОТСОРТИРОВАТЬ</button>
          <Link to="/create-project">
            <button className={s.btn}>ДОБАВИТЬ ПРОЕКТ</button>
          </Link>

          <button className={s.btn}>ЗАПРОСИТЬ ЛИСТ</button>
        </div>
      </div>

    </div>
  )
}

export default SearchLayer