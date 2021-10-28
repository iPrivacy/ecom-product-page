import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Thumbnail({
  imageSrcThumbnail,
  imageAlt,
  index,
  onClick,
}) {
  return (
    <div className={styles.thumbnailWrapper}>
      <Image
        className={styles.thumbnail}
        src={imageSrcThumbnail}
        alt={imageAlt}
        data-index={index}
        onClick={onClick}
        layout="fill"
      />
    </div>
  );
}
