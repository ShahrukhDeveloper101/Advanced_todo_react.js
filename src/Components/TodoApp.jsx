import styles from './TodoApp.module.css'
function TodoApp({children}) {
  return (
    <>
      <div className={styles.todoApp}>
        {children}
      </div>
    </>
  )
}

export default TodoApp
