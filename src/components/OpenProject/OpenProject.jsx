import s from './OpenProject.module.css';
import Task from '../Task/Task';
import { getRandomString } from '../../utils.js'
import NoComment from '../NoComment/NoComment';

const OpenProject = ({ data }) => {


  return (
    <div className={s.OpenProject}>
      <div className={s.header + ' container'}>
        <h1 className={s.title}>{data.projectName}</h1>


        <span className={s.btn_description}>Описание</span>
        {/* <div className={s.body_description}>

          {data.comment ? data.comment : <NoComment />}

        </div> */}

        <div className={s.deadline}>
          <span>Дедлайн</span>{data.deadline ? `: ${data.deadline}` : ' не установлен'}
        </div>

      </div>

      <div className={s.background}>
        <div className={s.taskWrap + ' container'} >
          <button className={s.btn_add_task + ' btn'}>Добавить задачу</button>

          {generateList(data.tasks)}

        </div>
      </div>

    </div>
  )
}

export default OpenProject;

function generateList(date) {
  return date.map(el => <Task key={getRandomString(5)} taskDate={el} />)
};