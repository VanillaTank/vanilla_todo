import s from './Task.module.css';

const Task = ({ taskDate }) => {
  const input = taskDate.isDone ?
    <input className={s.check_input} type="checkbox" id="" checked /> :
    <input className={s.check_input} type="checkbox" id="" />

  return (
    <div className={s.task_wrap}>

      <label className={s.task_label}>
        {input}
        <span className={s.check_box}></span>
        {taskDate.taskName}
      </label>

      <button className='btn_edit'>!!!</button>
      <button className={s.btn_del + ' btn_del'}>X</button>
    </div>
  )
}

export default Task;