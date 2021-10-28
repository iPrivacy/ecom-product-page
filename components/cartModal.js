import React from 'react'
import styles from '../components/navbar.module.scss'

function Cartmodal({show, close}) {
    return (
         
        <>
        {show ?
        <div className={styles.cartModal}>
            <div className={styles.title}><h1>Cart</h1></div>
        </div>
        : null}
        </>
    )
}

export default Cartmodal
