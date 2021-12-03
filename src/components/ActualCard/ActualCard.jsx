import s from './ActualCard.module.css'

const ActualCard = function ({ cardData }) {



  return (
    <div className={s.card}>

      <div className={s.title}>{cardData.projectName}</div>
      <div className={s.bnts_wrap}>
        <button className={s.bnt}>1</button>
        <button className={s.bnt}>2</button>
        <button className={s.bnt}>3</button>
      </div>
      <span className={s.time}>{cardData.deadline}</span>

    </div>
  )
}

export default ActualCard;
