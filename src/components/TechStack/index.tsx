import styles from './TechStack.module.css'
import techStack from "../../data/techStack.json";
import { Technology } from "../../types";

const TechStack = () => {
  return (
    <section className={styles.techStack} id="tech-stack">
      <h2>Мой технологический стек</h2>
      <p>
        В школе Urban University я изучаю новые для себя языки программирования.
      </p>
      <div className={styles.grid}>
        {techStack.technologies.map((tech: Technology) => (
          <div key={tech.id} className={styles.tech}>
            <img className={`icon`} src={`${tech.icon}`} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
      <p>Благодаря обучению, я хочу задать новое направление в своей жизни.</p>
    </section>
  );
};
export default TechStack;