import s from './Task.module.css';

const Task = ({ taskDate }) => {

  return (
    <div className={s.task_wrap}>
      <span className={s.task_text}>{taskDate.taskName}</span>

      <button className='btn_edit'>!!!</button>
      <button className='btn_del'>X</button>
    </div>
  )
}

export default Task;