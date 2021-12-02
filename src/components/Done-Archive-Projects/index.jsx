import s from './style.module.css';
import SearchLayer from '../Search-layer/Search-layer'
import CommonCard from '../CommonCard/CommonCard';
import { getRandomString } from '../../utils.js';

const DoneArchive = function ({ data, title }) {

   return (
      <div className={s.doneArchive}>
         <SearchLayer />
         <h1 className={s.title}>{title}</h1>
         <div className={s.wrap}>


            <div className="container">
               {iterateDataAndCreateCards(data)}
            </div>


         </div>
      </div>
   )
};

function iterateDataAndCreateCards(data) {
   return data.map(el => {
      return <CommonCard cardData={el} key={getRandomString(5)} />
   })
}

export default DoneArchive;