import s from './CommonCard.module.css'

const CommonCard = ({ cardData }) => {

  const input = cardData.isDone ?
    <input className={s.check_input} type="checkbox" id="" checked /> :
    <input className={s.check_input} type="checkbox" id="" />

  return (
    <div className={s.item}>
      <label className={s.option}>
        {input}
        <span className={s.check_box}></span>
      </label>
      <span className={s.item_name}>{cardData.projectName}</span>
      <span className={s.item_date}>{cardData.deadline}</span>
      <button className='btn_edit'>!!!</button>
      <button className='btn_del'>X</button>
    </div>
  )
}

export default CommonCard;