import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Mainimage({ mainImage }) {
  return (
    <div className={styles.imageWrapper}>
      <Image className={styles.mainImage} src={mainImage.imageSrc} alt={mainImage.imageAlt} layout="fill" />
    </div>
  );
}
