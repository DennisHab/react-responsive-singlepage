import react from 'react';
import styles from './Logo.module.css'
import Retriever from '../assets/pictures/Golden-retriever-transparant.png'

export default function Logo(){
    return(
        <div className={styles.container}>
           <div className={styles.image}>
             <img src={Retriever}/>
           </div>
           <div className={styles.text}>
               <p id={styles["text-top"]}>Hondenschool Tip Top</p>
               <p id={styles["text-bottom"]}>Training Opvoeding Plezier</p>
           </div>
        </div>
    )
}