import { useContext, useState } from 'react';

import { Task } from './Task'

import styles from '../styles/TaskArea.module.css'

import { MarkedContext } from '../hooks/useMarked'

interface TaskAreaProps {
  createdTasks: number,
  tasks: string[],
  onDeleteTask: (task: string) => void,
}

export function TaskArea ({ createdTasks, tasks, onDeleteTask }: TaskAreaProps) {
  
  const { counter } = useContext(MarkedContext)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.created}>
          <h4>Tarefas criadas</h4>
          <h5>{createdTasks}</h5>
        </div>

        <div className={styles.done}>
          <h4>Concluídas</h4>
          <h5>{counter} de {createdTasks}</h5>
        </div>
      </header>

      <main className={styles.tasks}>
        {
          tasks.map(task => {
            return <Task key={task} content={task} onDeleteTask={onDeleteTask}/>
          })
        }
      </main>
    </div>
  )
}
