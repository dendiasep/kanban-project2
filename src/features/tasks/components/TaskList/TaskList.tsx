import type {  CSSProperties } from '../../../../types/index'

const TaskList = (): JSX.Element => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Task List</h1>
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
}

export default TaskList