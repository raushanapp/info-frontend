import React from 'react'
import styles from "../Styles/bottom.module.css";
import cacke from "../Aessts/cacke.png";
import berray from "../Aessts/berray.png"
function Bottom() {
  return (
    <div className={styles.container}>
      <div className={styles.img1}>
        <img className={styles.img11} src={cacke} alt={cacke} />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Begin journery</button>
      </div>
      <div className={styles.titleContainetr}>
        <div className={styles.title}>
          <p>Privacy .</p>
          <p>Help .</p>
          <p>Terms</p>
        </div>

        <div className={styles.bordCont}></div>
      </div>
      <div className={styles.img2}>
        <img className={styles.img22} src={berray} alt={berray} />
      </div>
    </div>
  );
}

export default Bottom