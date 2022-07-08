import { useState, useRef } from 'react'

import { Trash } from 'phosphor-react'

import styles from '../styles/Task.module.css'

interface TaskProps {
  content: string,
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {

  const [ circleMarked, setCircleMarked ] = useState(false);
  const [ doneTask, setDoneTask ] = useState(0)

  function handleDeleteTask() {
    onDeleteTask(content)
    setDoneTask(doneTask - 1)
  }

  function handleCircleMarked() {
    setCircleMarked(!circleMarked);
    setDoneTask(doneTask + 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <label className={styles.circle}>
          <input type="checkbox" onClick={handleCircleMarked} />
          <div className={styles.checkbox}></div>
        </label>

        {
          !circleMarked ?
          <div className={styles.task}>
            <h3>{content}</h3>
          </div> 
          :
          <div className={styles.markedtask}>
            <h3>{content}</h3>
          </div>
        }
      </div>

      <div className={styles.icon}>
        <Trash size={24} onClick={handleDeleteTask} />
      </div>
    </div>
  )
}
