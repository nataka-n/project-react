import styles from "./Hero.module.css";
import avatarImage from '../../assets/images/foto.png'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Привет 👋,</h1>
        <h2>Меня зовут</h2>
        <h2 className={styles.name}>Некрасова Наталия.</h2>
        <p>Я начинающий Frontend-разработчик</p>
      </div>
      <div className={styles.image}>
        <img src={avatarImage} alt="Profile" className={styles.avatar} />
      </div>
    </div>
  );
};
export default Hero;
