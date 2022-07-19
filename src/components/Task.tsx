import { useContext, useState } from 'react'

import { MarkedContext } from '../hooks/useMarked'

import { Trash } from 'phosphor-react'

import styles from '../styles/Task.module.css'

interface TaskProps {
  content: string,
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: TaskProps) {

  const [ circleMarked, setCircleMarked ] = useState(false);
  const { counter, setCounter } = useContext(MarkedContext)

  function handleDeleteTask() {
    onDeleteTask(content)

    if(circleMarked) {
      setCounter(counter - 1)
    }
  }

  function handleCircleMarked() {
    setCircleMarked(!circleMarked);
    
    if(!circleMarked) {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1)
    }
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
