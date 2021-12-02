import s from './ActualProjects.module.css'
import SearchLayer from '../Search-layer/Search-layer'
import ActualCard from '../ActualCard/ActualCard'
import { getRandomString } from '../../utils.js';

const ActualProjects = function ({ data }) {
  return (
    <div className={s.actualProjects}>
      <SearchLayer />
      <h1 className='title'>АКТУАЛЬНЫЕ ПРОЕКТЫ</h1>
      <div className={s.wrap}>
        <div className="container">
          <div className={s.actualProjectsTemplate}>
            {iterateDataAndCreateCards(data)}
          </div>
        </div>

      </div>
    </div>
  )
}

function iterateDataAndCreateCards(data) {
  return data.map(el => {
    return <ActualCard cardData={el} key={getRandomString(5)} />
  })
}

export default ActualProjects