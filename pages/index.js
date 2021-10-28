import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/layout";
import Mainimage from "../components/mainImage";
import Modal from "../components/modal";
import Navbar from "../components/navbar";
import Thumbnail from "../components/thumbnail";
import styles from "../styles/Home.module.scss";

const productImages = [
  {
    id: 1,
    imageSrc: "/image-product-1.jpg",
    imageSrcThumbnail: "/image-product-1-thumbnail.jpg",
    imageAlt: "Orange sneaker",
  },
  {
    id: 2,
    imageSrc: "/image-product-2.jpg",
    imageSrcThumbnail: "/image-product-2-thumbnail.jpg",
    imageAlt: "Orange sneaker",
  },
  {
    id: 3,
    imageSrc: "/image-product-3.jpg",
    imageSrcThumbnail: "/image-product-3-thumbnail.jpg",
    imageAlt: "Orange sneaker",
  },
  {
    id: 4,
    imageSrc: "/image-product-4.jpg",
    imageSrcThumbnail: "/image-product-4-thumbnail.jpg",
    imageAlt: "Orange sneaker",
  },
];

export default function Home() {
  const [thumbnails, setThumbnails] = useState(productImages);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modal, setModel] = useState(false);
  const Toggle = () => setModel(!modal);

  const renderThumbnails = () =>
    thumbnails.length ? (
      <>
        <Mainimage mainImage={thumbnails[activeIndex]} />
      </>
    ) : null;

  const handleClick = (e) => {
    const activeIndex = e.target.getAttribute("data-index");
    setActiveIndex(activeIndex);
    Toggle();
  };
  return (
    <>
    <section className={styles.section}>
      <div className={styles.productContainer}>
        {renderThumbnails()}
        <div className={styles.thumbnailContainer}>
          {productImages.map((product, i) => (
            <>
              <Thumbnail
                key={product.id}
                imageSrcThumbnail={product.imageSrcThumbnail}
                imageAlt={product.imageAlt}
                index={i}
                onClick={handleClick}
              />
            </>
          ))}
        </div>
      </div>

      <div className={styles.detailsContainer}>
        <h4>Sneaker Company</h4>
        <h1>
          Fall Limited Edition
          <br />
          Sneakers
        </h1>
        <p>
          These low-profile sneakers are your perfect casual wear
          <br />
          companion. Featuring a durable rubber outer sole, they'll
          <br />
          withstand everything the weather can offer
        </p>
        <div className={styles.priceContainer}>
          <div className={styles.discountPriceWrapper}>
            <span>$125.00</span>
            <h4>50%</h4>
          </div>
          <div className={styles.priceWrapper}>
            <span>$250.00</span>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.counterWrapper}>
            <button className={styles.icons}>
              <Image
                className={styles.image}
                src="/icon-minus.svg"
                alt="Plus icon"
                layout="fill"
              />
            </button>
            <span>0</span>
            <button className={styles.icons}>
              <Image
                className={styles.image}
                src="/icon-plus.svg"
                alt="Plus icon"
                layout="fill"
              />
            </button>
          </div>
            <button className={styles.addToCart}>
              <div className={styles.cart}>
                <Image src="/icon-cart.svg" alt="Cart" layout="fill" />
              </div>
              <span>Add to Cart</span>
            </button>
        </div>
      </div>
    </section>
    {/* <Modal
                key={productImages.id}
                show={modal}
                mainImageSrc={productImages.imageSrc}
                thumbnailSrc={productImages.imageSrcThumbnail}
                Alt={productImages.imageAlt}
                index={i}
                close={Toggle}
              /> */}
    </>
    
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};
