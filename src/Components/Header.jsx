import React from "react";
import styles from "../Styles/header.module.css";
import pizza from "../Aessts/pizza.png";
import morepalte from "../Aessts/more-plates.png";
import egg from "../Aessts/egg-paltes.png";
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.imagePo}>
        <img
          className={styles.image11}
          src={pizza}
          alt={pizza}
        />
      </div>
      <h1 className={styles.heading}>K9OCK</h1>
      <div className={styles.insideBox}>
        <div className={styles.image1}>
          <img src={morepalte} alt={morepalte} className={styles.image12} />
        </div>
        <div className={styles.image2}>
          <img src={egg} alt={egg} className={styles.image13} />
        </div>
      </div>
    </div>
  );
}

export default Header;
