import { useRecoilValue } from 'recoil'
import {
  completedTasksSelector,
  uncompletedTasksSelector,
} from '../TaskSelectors'
import { Link } from 'react-router-dom'
import type { Task, CSSProperties } from '../../../types/index'

const TaskSummary = (): JSX.Element => {
  const completedTasks =
    useRecoilValue<Task[]>(completedTasksSelector)

    const uncompletedTasks =
    useRecoilValue<Task[]>(uncompletedTasksSelector)

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Summary of Your Tasks</h1>
      <div style={styles.list}>
        <span style= {styles.span} className="material-icons">check_circle</span>
        <h2>
          You have completed {completedTasks.length}{' '}
          {completedTasks.length <= 1 ? 'task' : 'tasks'}
        </h2>
      </div>
      <div style={styles.list}>
        <span style= {styles.span} className="material-icons">list</span>
        <h2>
          You still have {uncompletedTasks.length}{' '}
          {uncompletedTasks.length <= 1 ? 'task' : 'tasks'} left
        </h2>
      </div>
      <div style={styles.links}>
        <Link to="/task-list" style={styles.link}>
          See Your Task List
        </Link>
        <Link to="/task-progress" style={styles.link}>
          Manage Your Task Progress
        </Link>
      </div>
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    padding: '40px',
  },
  heading: {
    color: '#55C89F',
    marginBottom: '60px',
  },
  list: {
    color: '#fff',
    backgroundColor: '#55C89F',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '40px',
    width: '100%',
    borderRadius: '10px'
  },
  span: {
    margin: '0 15px'
    
  },
  links: {
    display: 'flex',
  },
  link: {
    padding: '16px',
    marginRight: '24px',
    backgroundColor: '#55ACC8',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
  },
}

export default TaskSummary