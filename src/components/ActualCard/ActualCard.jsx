import s from './ActualCard.module.css'

const ActualCard = function () {
  return (
    <div className={s.card}>

      <div className={s.title}>Название нашего очень большого дела</div>
      <div className={s.bnts_wrap}>
        <button className={s.bnt}>1</button>
        <button className={s.bnt}>2</button>
        <button className={s.bnt}>3</button>
      </div>
      <span className={s.time}>01.06.21</span>

    </div>
  )
}

export default ActualCard;