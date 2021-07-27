import styles from './TopMenu.module.css';

export default function TopMenu({children}){
    return (
        <ul className={styles.menu}>
            {children}
        </ul>
    )
}