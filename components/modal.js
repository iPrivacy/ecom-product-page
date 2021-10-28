import React, { useEffect } from "react";
import styles from "../components/modal.module.scss";
import Image from "next/image";
import ReactDOM from 'react-dom'


export default function Modal({show, close, mainImageSrc, Alt, thumbnailSrc, index}) {
  return (
    <>
    { show ?
    <div className={styles.mainModal}>
      <div className={styles.modalOverlay} onClick={()=> close()}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <div className={styles.closeButton}>
            <button onClick={()=> close()}>
              <Image
                className={styles.closeIcon}
                src="/icon-close-orange.svg"
                alt="close button mark by an x"
                layout="fill"
              />
            </button>
          </div>
          <div className={styles.productContainer}>
            <div className={styles.mainImageDiv}>
              <button className={styles.btnPrev}>
                <Image
                className={styles.prevBtn}
                  src="/icon-previous.svg"
                  alt="Previous button shown by a arrow pointing left"
                  layout="fill"
                />
              </button>
              <div className={styles.imageWrapper}>
                <Image
                  src={mainImageSrc}
                  alt={Alt}
                  layout="fill"
                  className={styles.mainImage}
                  data-index={index}
                />
              </div>
              <button className={styles.btnNext}>
                <Image
                className={styles.nextBtn}
                  src="/icon-next.svg"
                  alt="Previous button shown by a arrow pointing left"
                  layout="fill"
                />
              </button>
            </div>
            <div className={styles.thumbnailContainer}>
              <div className={styles.thumbnailWrapper}>
                <Image
                  src={thumbnailSrc}
                  alt={Alt}
                  layout="fill"
                  className={styles.thumbnail}
                  data-index={index}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>: null
    }
    </>
  );
}
