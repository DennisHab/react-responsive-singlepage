import styles from "./Button.module.css"

export default function Button({id, onClick, type, text}){
return(

    <button className={styles.button} id={id} onClick={onClick} type={type}>
        {text}
    </button>
)
}