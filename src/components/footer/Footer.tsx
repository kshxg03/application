import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Bislerium</div>
      <div className={styles.text}>
        Bislerium Pvt. Ltd. @All rights reserved.
      </div>
    </div>
  );
};

export default Footer;