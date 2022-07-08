import styles from '../styles/Header.module.css'
import RocketIMG from '../assets/rocket-img.svg'
import { NewTask } from './NewTask'

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={RocketIMG} alt="Imagem de um foguete" />
          <div className={styles.title}>
            <strong className={styles.first}>to</strong>
            <strong className={styles.second}>do</strong>
          </div>
        </div>
      </header>
      
      <div className={styles.input}>
        <NewTask />
      </div>
    </>
  )
}
