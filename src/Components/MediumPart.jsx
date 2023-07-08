import React from 'react'
import styles from "../Styles/medium.module.css";
import chicken from "../Aessts/chiken.png";
import wood from "../Aessts/wood-plate.png";
export const MediumPart = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imag1}>
        <img className={styles.image11} src={chicken} alt={chicken} />
      </div>
      <h1 className={styles.title}>WelCome to the food hub</h1>
      <div className={styles.imga2}>
        <img className={styles.image22} src={wood} alt={wood} />
      </div>
    </div>
  );
}


export default MediumPart