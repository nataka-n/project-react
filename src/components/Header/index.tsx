import SwitchTheme from '../SwitchTheme';
import styles from './Header.module.css'

const Header = () => {
  return <header className={styles.header}>
    <div>
      <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home">Главная</a>
        <a href="#about">Обо мне</a>
        <a href="tech-ctack">Контактная информация</a>
          <a href="#projects">Проекты</a>
          <SwitchTheme />
      </nav>
      </header>
    </div>
    </header>
}

export default Header;