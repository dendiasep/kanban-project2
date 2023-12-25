import type {  CSSProperties } from '../../../constants/types'

const TaskProgress = (): JSX.Element => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Task Progress</h1>
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

export default TaskProgress