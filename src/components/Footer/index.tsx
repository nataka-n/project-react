import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a className="vk" href="https://vk.com/id29149940">
        <img src="./src/assets/icons/social/vk.png" alt="VK" />
      </a>
      <address>
        <a className="phone" href="tel:+7 996 307 71 95">
          <img
            src="./src/assets/icons/social/phone.png"
            alt="+7 996 307 71 95"
          />
        </a>
      </address>
      <address>
        <a className="mail" href="mailto:natka1714@gmail.com">
          <img
            src="./src/assets/icons/social/mail.png"
            alt="natka1714@gmail.com"
          />
        </a>
      </address>
    </div>
  );
}
export default Footer;



