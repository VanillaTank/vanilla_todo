import s from './CommonCard.module.css'

const CommonCard = () => {
  return (
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
  )
}

export default CommonCard;