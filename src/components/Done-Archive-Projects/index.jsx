import s from './style.module.css';

const DoneArchive = function (props) {

   return (
      <div>
         <h1 className={s.title}>{props.title}</h1>
         <div className={s.wrap}>


            <div className="container">
               {//убрать в отдельный компонент, рендерить в мапе
               }
               <div className={s.item}>
                  <label className={s.option}>
                     <input className={s.check_input} type="checkbox" id="" checked />
                     <span className={s.check_box}></span>
                  </label>
                  <span className={s.item_name}>Название нашего очень большого дела</span>
                  <span className={s.item_date}>01.06.21</span>
                  <button className='btn_edit'>!!!</button>
                  <button className='btn_del'>X</button>
               </div>


               <div className={s.item}>
                  <label className={s.option}>
                     <input className={s.check_input} type="checkbox" id="" checked />
                     <span className={s.check_box}></span>
                  </label>
                  <span className={s.item_name}>Название нашего очень большого дела</span>
                  <span className={s.item_date}>01.06.21</span>
                  <button className='btn_edit'>!!!</button>
                  <button className='btn_del'>X</button>
               </div>


               <div className={s.item}>
                  <label className={s.option}>
                     <input className={s.check_input} type="checkbox" id="" checked />
                     <span className={s.check_box}></span>
                  </label>
                  <span className={s.item_name}>Название нашего очень большого дела</span>
                  <span className={s.item_date}>01.06.21</span>
                  <button className='btn_edit'>!!!</button>
                  <button className='btn_del'>X</button>
               </div>
            </div>


         </div>
      </div>
   )
}

export default DoneArchive;