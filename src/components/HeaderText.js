import styles from './HeaderText.module.css'

export default function HeaderText({text}){
    return(
        <div className={styles.container}>
        <h1 className={styles.text}> {text} </h1>
        </div>
    )
}