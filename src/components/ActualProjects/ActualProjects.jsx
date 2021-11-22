import s from './ActualProjects.module.css'
import SearchLayer from '../Search-layer/Search-layer'


const ActualProjects = function () {
  return (
    <div>
      <SearchLayer />
      <h1 className='title'>АКТУАЛЬНЫЕ ПРОЕКТЫ</h1>
      <div className={s.wrap}>
        <div className="container">

        </div>

      </div>
    </div>
  )
}

export default ActualProjects