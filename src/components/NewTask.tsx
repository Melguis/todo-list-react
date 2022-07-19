import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { TaskArea } from './TaskArea'

import { PlusCircle } from 'phosphor-react'
import styles from '../styles/NewTask.module.css'

export function NewTask() {

  const [ tasks, setTasks ] = useState<string[]>([])
  const [ newTask, setNewTask ] = useState('')
  const [ tasksCounter, setTasksCounter ] = useState(0);

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setTasksCounter(tasks.length + 1);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne);
    setTasksCounter(tasks.length - 1);
  }

  const isNewTaskEmpty = newTask.length === 0

  return (
    <>
      <div className={styles.container}>
        <div className={styles.input}>
          <textarea 
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
          />
        </div>

        <div className={styles.button}>
          <button
            onClick={handleNewTask}
            disabled={isNewTaskEmpty}
          >
            Criar <PlusCircle size={24} className={styles.icon}/> 
          </button>
        </div>
      </div>

      <div className={styles.taskArea}>
        <TaskArea  createdTasks={tasksCounter} tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </>
  )
}
