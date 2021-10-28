import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Cartmodal from "./cartModal";
import { useState } from "react";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false)
  const Toggle = ()=> setShowCart(!showCart)
  
  return (
    <>
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <a>
              <Image
                className={styles.image}
                src="/logo.svg"
                alt="The word sneakers in bold no caps"
                layout="fill"
              />
            </a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/modal">
            <a>Collections</a>
          </Link>
          <Link href="/">
            <a>Men</a>
          </Link>
          <Link href="/">
            <a>Women</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </div>
      </div>
      <div className={styles.profileContainer}>
          <button className={styles.cart} onClick={Toggle}>
          <Image
           src="/icon-cart-gray.svg"
           alt="Cart"
           layout="fill"
          />
          </button>
          
          <div className={styles.userImage}>
              <Image
              className={styles.image}
              src="/image-avatar.png"
              alt="Rounded user profile picture"
              layout="fill"
              />
          </div>
      </div>
    </nav>
    <Cartmodal show={showCart} close={Toggle}/>
    </>
  );
}
